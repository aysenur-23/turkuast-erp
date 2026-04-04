/**
 * Hostinger SMTP E-posta Gönderim Sunucusu
 * 
 * Kurulum:
 * 1. cd server
 * 2. npm install
 * 3. .env dosyası oluştur (aşağıdaki bilgileri ekle)
 * 4. npm start
 * 
 * Hostinger'da çalıştırmak için:
 * - Node.js desteği olan bir hosting paketi gerekir
 * - PM2 veya benzeri process manager kullanın
 */

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import multer from 'multer';
import { Readable } from 'stream';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DRIVE_TOKEN_PATH = path.join(__dirname, 'drive-token.json');
const GOOGLE_SCOPES = ['https://www.googleapis.com/auth/drive.file'];

// Middleware - CORS ayarları (tüm origin'lere izin ver)
// Production'da spesifik domain'ler belirtilebilir
const corsOptions = {
  origin: function (origin, callback) {
    // Origin yoksa (mobile app, postman, vb.) veya localhost ise izin ver
    if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1') || origin.includes('turkuast.com')) {
      callback(null, true);
    } else {
      // Production'da spesifik domain kontrolü yapılabilir
      callback(null, true); // Şimdilik tüm origin'lere izin ver
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
  maxAge: 86400, // 24 saat preflight cache
  optionsSuccessStatus: 200, // Bazı eski tarayıcılar için
  preflightContinue: false // Preflight request'i hemen yanıtla
};

app.use(cors(corsOptions));

// OPTIONS request'lerini manuel handle et (bazı durumlarda gerekli)
// Tüm route'lar için OPTIONS desteği
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'false');
  res.header('Access-Control-Max-Age', '86400');
  res.sendStatus(200);
});

app.use(express.json());

// Hostinger SMTP Yapılandırması
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: parseInt(process.env.SMTP_PORT || '465', 10) === 465, // SSL için 465
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
    },
  });
};

const createOAuthClient = () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
    throw new Error('Google OAuth bilgileri eksik (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI)');
  }

  return new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);
};

const saveDriveTokens = async (tokens) => {
  await fsPromises.writeFile(DRIVE_TOKEN_PATH, JSON.stringify(tokens, null, 2), 'utf8');
};

const loadDriveTokens = async () => {
  try {
    const raw = await fsPromises.readFile(DRIVE_TOKEN_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const getAuthorizedDriveClient = async () => {
  const tokens = await loadDriveTokens();
  if (!tokens?.refresh_token) {
    throw new Error('Google Drive yetkilendirmesi bulunamadı. /api/drive/auth-url üzerinden izin verin.');
  }

  const oAuthClient = createOAuthClient();
  oAuthClient.setCredentials(tokens);
  return google.drive({ version: 'v3', auth: oAuthClient });
};

const resolveDriveFolderId = (type, explicitFolderId) => {
  if (explicitFolderId) return explicitFolderId;
  if (type === 'task' && process.env.GOOGLE_DRIVE_TASKS_FOLDER_ID) {
    return process.env.GOOGLE_DRIVE_TASKS_FOLDER_ID;
  }
  if (type === 'report' && process.env.GOOGLE_DRIVE_REPORTS_FOLDER_ID) {
    return process.env.GOOGLE_DRIVE_REPORTS_FOLDER_ID;
  }
  return process.env.GOOGLE_DRIVE_FOLDER_ID || null;
};

const shouldMakePublic = (requestedValue) => {
  if (typeof requestedValue === 'string') {
    return requestedValue !== 'false';
  }
  const envValue = (process.env.GOOGLE_DRIVE_PUBLIC_LINKS || 'true').toLowerCase();
  return envValue !== 'false';
};

const ensurePublicPermission = async (drive, fileId) => {
  try {
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
  } catch (error) {
    console.warn('Drive dosyasını herkese açık yapma başarısız:', error?.message || error);
  }
};

// E-posta gönder endpoint
app.post('/api/send-email', async (req, res) => {
  // CORS header'larını manuel ekle (ekstra güvenlik için)
  const origin = req.headers.origin;
  // Tüm origin'lere izin ver (production'da spesifik domain'ler belirtilebilir)
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'false');
  res.header('Access-Control-Expose-Headers', 'Content-Type');
  res.header('Access-Control-Max-Age', '86400');

  try {
    const { to, subject, html } = req.body;

    // Validasyon
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        error: 'Eksik alanlar: to, subject, html gerekli'
      });
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return res.status(400).json({
        success: false,
        error: 'Geçersiz e-posta adresi'
      });
    }

    // SMTP transporter oluştur
    const transporter = createTransporter();

    // SMTP bağlantısını test et (opsiyonel - sadece development'ta)
    if (process.env.NODE_ENV !== 'production') {
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.warn('⚠️ SMTP bağlantı uyarısı (dev mode):', verifyError.message);
        // Development'ta devam et, production'da hata ver
      }
    }

    // E-posta gönder
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@turkuast.com',
      to,
      subject,
      html,
    });

    console.log('✅ E-posta gönderildi:', info.messageId, '→', to);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      to: to
    });
  } catch (error) {
    console.error('❌ E-posta gönderme hatası:', error);

    // Daha detaylı hata mesajı
    let errorMessage = 'E-posta gönderilemedi';
    if (error.code === 'EAUTH') {
      errorMessage = 'SMTP kimlik doğrulama hatası - SMTP_USER ve SMTP_PASSWORD kontrol edin';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'SMTP sunucusuna bağlanılamadı - SMTP_HOST ve SMTP_PORT kontrol edin';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
      code: error.code || 'UNKNOWN'
    });
  }
});

// API info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    service: 'Turkuast ERP API Server',
    version: '1.0.0',
    endpoints: {
      email: '/api/send-email',
      drive: {
        upload: '/api/drive/upload',
        delete: '/api/drive/files/:fileId',
        auth: '/api/drive/auth-url'
      },
      health: '/health'
    },
    cors: {
      enabled: true,
      origins: 'all'
    }
  });
});

// Health check - detaylı bilgi
app.get('/health', async (req, res) => {
  try {
    // SMTP yapılandırma kontrolü
    const smtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

    // SMTP bağlantısını test et
    let smtpStatus = 'unknown';
    if (smtpConfigured) {
      try {
        const transporter = createTransporter();
        await transporter.verify();
        smtpStatus = 'connected';
      } catch (error) {
        smtpStatus = 'error: ' + (error.message || 'SMTP bağlantı hatası');
      }
    } else {
      smtpStatus = 'not_configured';
    }

    // Drive yapılandırma kontrolü
    const driveConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

    res.json({
      status: 'OK',
      service: 'Email & Drive Server',
      timestamp: new Date().toISOString(),
      smtp: {
        configured: smtpConfigured,
        status: smtpStatus,
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: process.env.SMTP_PORT || '465'
      },
      drive: {
        configured: driveConfigured
      },
      endpoints: {
        sendEmail: '/api/send-email',
        driveUpload: '/api/drive/upload',
        driveAuth: '/api/drive/auth-url'
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      service: 'Email & Drive Server',
      error: error?.message || String(error) || 'Bilinmeyen hata',
      timestamp: new Date().toISOString()
    });
  }
});

app.get('/api/drive/auth-url', (req, res) => {
  try {
    const oAuthClient = createOAuthClient();
    const url = oAuthClient.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: GOOGLE_SCOPES,
    });
    res.json({ url });
  } catch (error) {
    console.error('Drive Auth URL hatası:', error);
    res.status(500).json({ error: 'Auth URL oluşturulamadı', message: error.message });
  }
});

app.get('/oauth2/callback', async (req, res) => {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send(`Google OAuth hatası: ${error}`);
  }

  if (!code) {
    return res.status(400).send('Authorization code bulunamadı.');
  }

  try {
    const oAuthClient = createOAuthClient();
    const { tokens } = await oAuthClient.getToken(code);

    const existingTokens = await loadDriveTokens();
    if (!tokens.refresh_token && existingTokens?.refresh_token) {
      tokens.refresh_token = existingTokens.refresh_token;
    }

    await saveDriveTokens(tokens);
    res.send('✅ Google Drive bağlantısı tamamlandı. Bu pencereyi kapatabilirsiniz.');
  } catch (err) {
    console.error('OAuth callback hatası:', err);
    res.status(500).send(`Token alınamadı: ${err.message}`);
  }
});

app.post('/api/drive/upload', upload.single('file'), async (req, res) => {
  // CORS header'larını manuel ekle
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin || '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'false');

  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Dosya bulunamadı (field: file)' });
    }

    const drive = await getAuthorizedDriveClient();
    const { type, folderId, fileName, metadata, makePublic } = req.body || {};

    const fileMetadata = {
      name: fileName || req.file.originalname || `upload-${Date.now()}`,
    };

    const resolvedFolderId = resolveDriveFolderId(type, folderId);
    if (resolvedFolderId) {
      fileMetadata.parents = [resolvedFolderId];
    }

    if (metadata) {
      try {
        const parsed = typeof metadata === 'string' ? JSON.parse(metadata) : metadata;
        if (parsed && typeof parsed === 'object') {
          fileMetadata.properties = parsed;
        }
      } catch (err) {
        console.warn('Metadata parse error, yok sayıldı:', err?.message || err);
      }
    }

    const media = {
      mimeType: req.file.mimetype || 'application/octet-stream',
      body: Readable.from(req.file.buffer),
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: 'id, webViewLink, webContentLink',
    });

    if (response.data.id && shouldMakePublic(makePublic)) {
      await ensurePublicPermission(drive, response.data.id);
    }

    res.json({
      success: true,
      fileId: response.data.id,
      webViewLink: response.data.webViewLink,
      webContentLink: response.data.webContentLink,
    });
  } catch (error) {
    console.error('Drive upload hatası:', error);
    res.status(500).json({
      success: false,
      error: 'Google Drive yüklemesi başarısız oldu',
      message: error.message,
    });
  }
});

app.delete('/api/drive/files/:fileId', async (req, res) => {
  try {
    const drive = await getAuthorizedDriveClient();
    await drive.files.delete({ fileId: req.params.fileId });
    res.json({ success: true });
  } catch (error) {
    console.error('Drive delete hatası:', error);
    res.status(500).json({
      success: false,
      error: 'Google Drive dosyası silinemedi',
      message: error.message,
    });
  }
});

// Server başlat
const server = app.listen(PORT, () => {
  console.log(`📧 E-posta sunucusu çalışıyor: http://localhost:${PORT}`);
  console.log(`📝 API Endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`✅ Health Check: http://localhost:${PORT}/health`);
  console.log(`🔧 SMTP Host: ${process.env.SMTP_HOST || 'smtp.hostinger.com'}`);
  console.log(`📮 SMTP User: ${process.env.SMTP_USER || 'mail@turkuast.com'}`);
  console.log(`\n⚠️  Backend'i durdurmak için Ctrl+C tuşlarına basın\n`);
});

// Hata yakalama
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} zaten kullanılıyor!`);
    console.error(`💡 Çözüm: Port'u kullanan process'i durdurun veya farklı bir port kullanın.`);
    console.error(`💡 Windows: Get-Process -Name node | Stop-Process -Force`);
  } else {
    console.error('❌ Sunucu hatası:', error);
  }
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n🛑 Backend sunucusu kapatılıyor...');
  server.close(() => {
    console.log('✅ Backend sunucusu kapatıldı.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n\n🛑 Backend sunucusu kapatılıyor...');
  server.close(() => {
    console.log('✅ Backend sunucusu kapatıldı.');
    process.exit(0);
  });
});

