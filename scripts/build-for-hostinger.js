/**
 * Build script for Hostinger static deployment
 * Firebase backend kullanıldığı için sadece frontend build'i alınır
 * Her adımda başarılı/başarısız durumunu konsola yazdırır
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Başarı/başarısızlık takibi
const results = {
  steps: [],
  success: true
};

function logStep(stepName, status, message = '') {
  const statusIcon = status === 'success' ? '✅' : status === 'error' ? '❌' : '⚠️';
  const statusText = status === 'success' ? 'BAŞARILI' : status === 'error' ? 'BAŞARISIZ' : 'UYARI';
  const colorCode = status === 'success' ? '\x1b[32m' : status === 'error' ? '\x1b[31m' : '\x1b[33m';
  const resetCode = '\x1b[0m';

  console.log(`${colorCode}${statusIcon} [${statusText}]${resetCode} ${stepName}${message ? ': ' + message : ''}`);

  results.steps.push({
    name: stepName,
    status,
    message
  });

  if (status === 'error') {
    results.success = false;
  }
}

// Helper function - Frontend dosyaları için
function copyRecursiveSync(src, dest) {
  try {
    const exists = fs.existsSync(src);
    if (!exists) {
      throw new Error(`Kaynak klasör bulunamadı: ${src}`);
    }

    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const items = fs.readdirSync(src);
      for (const childItemName of items) {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      }
    } else {
      fs.copyFileSync(src, dest);
    }
    return true;
  } catch (error) {
    throw new Error(`Dosya kopyalama hatası: ${error.message}`);
  }
}

console.log('\n🚀 Hostinger için Firebase static build başlatılıyor...\n');

// 1. Frontend build
logStep('Frontend Build', 'info', 'Başlatılıyor...');
try {
  // Production env değerleri
  const envProduction = {
    ...process.env,
    NODE_ENV: 'production',
    // Firebase env değerleri .env.production dosyasından okunacak
  };

  // Base path'i root olarak ayarla (Hostinger root deployment için)
  const envWithBasePath = {
    ...envProduction,
    VITE_BASE_PATH: '/',
  };

  execSync('npm run build', {
    cwd: rootDir,
    stdio: 'inherit',
    env: envWithBasePath
  });

  // Build başarılı mı kontrol et
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const indexFile = path.join(distDir, 'index.html');
    if (fs.existsSync(indexFile)) {
      logStep('Frontend Build', 'success', 'Build tamamlandı ve dist klasörü oluşturuldu');
    } else {
      logStep('Frontend Build', 'error', 'index.html dosyası bulunamadı');
    }
  } else {
    logStep('Frontend Build', 'error', 'dist klasörü oluşturulmadı');
  }
} catch (error) {
  logStep('Frontend Build', 'error', error.message || 'Bilinmeyen hata');
  console.error('\n❌ Build işlemi durduruldu.\n');
  process.exit(1);
}

// 2. public_html klasörünü temizle
const publicHtmlDir = path.join(rootDir, 'public_html');
logStep('public_html Klasörü Hazırlama', 'info', 'Başlatılıyor...');

try {
  if (fs.existsSync(publicHtmlDir)) {
    try {
      fs.rmSync(publicHtmlDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
      logStep('public_html Klasörü Hazırlama', 'success', 'Eski klasör silindi');
    } catch (error) {
      logStep('public_html Klasörü Hazırlama', 'warning', 'Klasör silinemedi, içerik temizleniyor...');
      try {
        const files = fs.readdirSync(publicHtmlDir);
        let cleanedCount = 0;
        for (const file of files) {
          try {
            const filePath = path.join(publicHtmlDir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
              fs.rmSync(filePath, { recursive: true, force: true });
              cleanedCount++;
            } else if (file !== '.htaccess') {
              fs.unlinkSync(filePath);
              cleanedCount++;
            }
          } catch (e) {
            // Dosya kilitliyse atla
          }
        }
        logStep('public_html Klasörü Hazırlama', 'success', `${cleanedCount} dosya/klasör temizlendi`);
      } catch (cleanError) {
        logStep('public_html Klasörü Hazırlama', 'error', `Temizleme hatası: ${cleanError.message}`);
      }
    }
  }

  if (!fs.existsSync(publicHtmlDir)) {
    fs.mkdirSync(publicHtmlDir, { recursive: true });
    logStep('public_html Klasörü Hazırlama', 'success', 'Yeni klasör oluşturuldu');
  } else {
    logStep('public_html Klasörü Hazırlama', 'success', 'Klasör hazır');
  }
} catch (error) {
  logStep('public_html Klasörü Hazırlama', 'error', error.message);
}

// 3. Frontend dosyalarını kopyala
const distDir = path.join(rootDir, 'dist');
logStep('Frontend Dosyaları Kopyalama', 'info', 'Başlatılıyor...');

try {
  if (!fs.existsSync(distDir)) {
    logStep('Frontend Dosyaları Kopyalama', 'error', 'dist klasörü bulunamadı!');
    process.exit(1);
  }

  copyRecursiveSync(distDir, publicHtmlDir);

  // Kopyalama başarılı mı kontrol et
  const copiedIndex = path.join(publicHtmlDir, 'index.html');
  if (fs.existsSync(copiedIndex)) {
    const assetsDir = path.join(publicHtmlDir, 'assets');
    if (fs.existsSync(assetsDir)) {
      const assetFiles = fs.readdirSync(assetsDir);
      logStep('Frontend Dosyaları Kopyalama', 'success', `${assetFiles.length} asset dosyası kopyalandı`);
    } else {
      logStep('Frontend Dosyaları Kopyalama', 'warning', 'Assets klasörü bulunamadı');
    }
  } else {
    logStep('Frontend Dosyaları Kopyalama', 'error', 'index.html kopyalanamadı');
  }
} catch (error) {
  logStep('Frontend Dosyaları Kopyalama', 'error', error.message);
  process.exit(1);
}

// 4. index.html'i düzenle - Duplicate'leri temizle, boş satırları düzelt ve CSP'yi güncelle
const indexPath = path.join(publicHtmlDir, 'index.html');
logStep('index.html Düzenleme', 'info', 'Başlatılıyor...');

try {
  if (!fs.existsSync(indexPath)) {
    logStep('index.html Düzenleme', 'error', 'index.html dosyası bulunamadı');
  } else {
    let indexContent = fs.readFileSync(indexPath, 'utf-8');
    let changesMade = 0;

    // CSP'yi güncelle - Firebase Analytics için UA-* pattern'ini ekle
    const cspPattern = /<meta http-equiv="Content-Security-Policy" content="([^"]+)">/;
    if (cspPattern.test(indexContent)) {
      const beforeCsp = indexContent;
      indexContent = indexContent.replace(cspPattern, (match, cspContent) => {
        // script-src ve script-src-elem'e 'wasm-unsafe-eval' ve https://turkuast.com/UA-* ekle
        let updatedCsp = cspContent
          .replace(/script-src ([^;]+);/g, (m, src) => {
            if (!src.includes('wasm-unsafe-eval')) {
              src = src + " 'wasm-unsafe-eval'";
            }
            if (!src.includes('https://turkuast.com/UA-*')) {
              src = src + ' https://turkuast.com/UA-*';
            }
            return `script-src ${src};`;
          })
          .replace(/script-src-elem ([^;]+);/g, (m, src) => {
            if (!src.includes('wasm-unsafe-eval')) {
              src = src + " 'wasm-unsafe-eval'";
            }
            if (!src.includes('https://turkuast.com/UA-*')) {
              src = src + ' https://turkuast.com/UA-*';
            }
            return `script-src-elem ${src};`;
          });
        return `<meta http-equiv="Content-Security-Policy" content="${updatedCsp}">`;
      });
      if (beforeCsp !== indexContent) {
        changesMade++;
      }
    }

    // Boş satırları temizle (3+ boş satırı 1'e indir)
    const beforeEmptyLines = indexContent;
    indexContent = indexContent.replace(/\n\s*\n\s*\n+/g, '\n\n');
    if (beforeEmptyLines !== indexContent) {
      changesMade++;
    }

    // Duplicate CSS'yi kaldır (sadece bir tane kalmalı)
    const styleMatches = indexContent.match(/<link rel="stylesheet"[^>]*>/g) || [];
    if (styleMatches.length > 1) {
      const firstStyle = styleMatches[0];
      indexContent = indexContent.replace(/<link rel="stylesheet"[^>]*>/g, '');
      // </head> öncesine ekle
      const beforeHead = indexContent.indexOf('</head>');
      if (beforeHead !== -1) {
        indexContent = indexContent.slice(0, beforeHead) + '  ' + firstStyle + '\n' + indexContent.slice(beforeHead);
        changesMade++;
      }
    }

    // Modulepreload sırasını düzelt - React core önce olmalı
    const modulepreloadPattern = /<link rel="modulepreload"[^>]*>/g;
    const modulepreloads = indexContent.match(modulepreloadPattern) || [];
    if (modulepreloads.length > 0) {
      // Öncelik sırası: vendor-react her zaman önce (chunk-admin artık vendor-react içinde)
      const priorityOrder = [
        'vendor-react',
        'vendor-firebase',
        'vendor-pdf'
      ];

      // Modulepreload'ları öncelik sırasına göre sırala
      const sortedPreloads = modulepreloads.sort((a, b) => {
        const getPriority = (preload) => {
          for (let i = 0; i < priorityOrder.length; i++) {
            if (preload.includes(priorityOrder[i])) {
              return i;
            }
          }
          return priorityOrder.length; // Bilinmeyen chunk'lar en sona
        };
        return getPriority(a) - getPriority(b);
      });

      // Tüm modulepreload'ları kaldır ve sıralı olarak ekle
      indexContent = indexContent.replace(modulepreloadPattern, '');

      // Ana script'ten önce, sıralı modulepreload'ları ekle
      const scriptPattern = /<script type="module"[^>]*>/;
      const scriptMatch = indexContent.match(scriptPattern);
      if (scriptMatch) {
        const scriptIndex = indexContent.indexOf(scriptMatch[0]);
        const preloadsHtml = sortedPreloads.map(p => '    ' + p).join('\n');
        indexContent = indexContent.slice(0, scriptIndex) +
          preloadsHtml + '\n    ' +
          indexContent.slice(scriptIndex);
        changesMade++;
      }
    }

    fs.writeFileSync(indexPath, indexContent);
    logStep('index.html Düzenleme', 'success', `${changesMade} değişiklik yapıldı (CSP güncelleme, modulepreload sıralama, temizlik)`);
  }
} catch (error) {
  logStep('index.html Düzenleme', 'error', error.message);
}

// 5. .htaccess dosyasını oluştur (SPA için minimal)
const htaccessPath = path.join(publicHtmlDir, '.htaccess');
logStep('.htaccess Dosyası Oluşturma', 'info', 'Başlatılıyor...');

try {
  const htaccessContent = `# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Assets klasöründeki dosyalar için ÖNCE kontrol et (en yüksek öncelik)
  RewriteCond %{REQUEST_URI} ^/assets/ [NC]
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # Static dosyalar için direkt erişim (MIME type'ları korumak için)
  # Gerçek dosyalar varsa direkt servis et, yoksa SPA routing'e geç
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteCond %{REQUEST_URI} \\.(js|mjs|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json|xml|webp|map)$ [NC]
  RewriteRule ^ - [L]

  # SPA Routing - Tüm istekleri index.html'e yönlendir (sadece dosya yoksa)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/json "access plus 0 seconds"
</IfModule>

# MIME Types - Kritik: JS ve CSS dosyaları için doğru MIME type'ları ayarla
# Bu bölüm EN ÜSTTE olmalı, RewriteRule'lardan ÖNCE çalışmalı
<IfModule mod_mime.c>
  # JavaScript dosyaları - ÖNCE application/javascript, sonra text/javascript
  AddType application/javascript .js
  AddType application/javascript .mjs
  AddType text/javascript .js
  
  # CSS dosyaları
  AddType text/css .css
  
  # Diğer dosya tipleri
  AddType image/svg+xml .svg
  AddType application/json .json
  AddType application/xml .xml
  AddType text/xml .xml
  
  # Font dosyaları
  AddType font/woff .woff
  AddType font/woff2 .woff2
  AddType application/font-ttf .ttf
  AddType application/vnd.ms-fontobject .eot
</IfModule>

# Force correct MIME types for JS and CSS (Header ile - mod_headers varsa)
# Bu RewriteRule'lardan ÖNCE çalışmalı
<IfModule mod_headers.c>
  <FilesMatch "\\.(js|mjs)$">
    Header set Content-Type "application/javascript; charset=utf-8"
    Header unset X-Content-Type-Options
  </FilesMatch>
  <FilesMatch "\\.css$">
    Header set Content-Type "text/css; charset=utf-8"
    Header unset X-Content-Type-Options
  </FilesMatch>
</IfModule>

# Fallback: ForceType (mod_mime varsa) - EN SON çalışmalı
<IfModule mod_mime.c>
  <FilesMatch "\\.(js|mjs)$">
    ForceType application/javascript
  </FilesMatch>
  <FilesMatch "\\.css$">
    ForceType text/css
  </FilesMatch>
</IfModule>
`;

  fs.writeFileSync(htaccessPath, htaccessContent);

  // Dosya oluşturuldu mu kontrol et
  if (fs.existsSync(htaccessPath)) {
    const stats = fs.statSync(htaccessPath);
    logStep('.htaccess Dosyası Oluşturma', 'success', `Dosya oluşturuldu (${stats.size} bytes)`);
  } else {
    logStep('.htaccess Dosyası Oluşturma', 'error', 'Dosya oluşturulamadı');
  }
} catch (error) {
  logStep('.htaccess Dosyası Oluşturma', 'error', error.message);
}

// 6. Dosya sayısı kontrolü
logStep('Dosya Kontrolü', 'info', 'Başlatılıyor...');
try {
  const files = fs.readdirSync(publicHtmlDir);
  const fileCount = files.length;
  const indexExists = fs.existsSync(indexPath);
  const htaccessExists = fs.existsSync(htaccessPath);
  const assetsExists = fs.existsSync(path.join(publicHtmlDir, 'assets'));

  if (indexExists && htaccessExists && assetsExists) {
    logStep('Dosya Kontrolü', 'success', `${fileCount} dosya/klasör bulundu (index.html, .htaccess, assets mevcut)`);
  } else {
    const missing = [];
    if (!indexExists) missing.push('index.html');
    if (!htaccessExists) missing.push('.htaccess');
    if (!assetsExists) missing.push('assets');
    logStep('Dosya Kontrolü', 'error', `Eksik dosyalar: ${missing.join(', ')}`);
  }
} catch (error) {
  logStep('Dosya Kontrolü', 'error', error.message);
}

// Özet rapor
console.log('\n' + '='.repeat(60));
console.log('📊 BUILD ÖZET RAPORU');
console.log('='.repeat(60));

results.steps.forEach((step, index) => {
  const statusIcon = step.status === 'success' ? '✅' : step.status === 'error' ? '❌' : '⚠️';
  const statusText = step.status === 'success' ? 'BAŞARILI' : step.status === 'error' ? 'BAŞARISIZ' : 'UYARI';
  const colorCode = step.status === 'success' ? '\x1b[32m' : step.status === 'error' ? '\x1b[31m' : '\x1b[33m';
  const resetCode = '\x1b[0m';

  console.log(`${index + 1}. ${colorCode}${statusIcon} [${statusText}]${resetCode} ${step.name}${step.message ? ' - ' + step.message : ''}`);
});

console.log('='.repeat(60));

const successCount = results.steps.filter(s => s.status === 'success').length;
const errorCount = results.steps.filter(s => s.status === 'error').length;
const warningCount = results.steps.filter(s => s.status === 'warning').length;

console.log(`\n📈 İstatistikler:`);
console.log(`   ✅ Başarılı: ${successCount}`);
console.log(`   ❌ Başarısız: ${errorCount}`);
console.log(`   ⚠️  Uyarı: ${warningCount}`);
console.log(`   📦 Toplam Adım: ${results.steps.length}`);

if (results.success && errorCount === 0) {
  console.log('\n✅ Build tamamlandı!');
  console.log('\n📋 Sonraki adımlar:');
  console.log('1. .env.production dosyasında Firebase config değerlerini kontrol edin');
  console.log('2. public_html klasöründeki TÜM dosyaları Hostinger\'ın public_html klasörüne yükleyin');
  console.log('3. Firebase Console\'da Authentication ve Firestore\'un aktif olduğundan emin olun');
  console.log('\n📝 Notlar:');
  console.log('- Backend tamamen Firebase üzerindedir (PHP/Node.js gerekmez)');
  console.log('- Sadece statik dosyalar Hostinger\'da servis edilir');
  console.log('- Tüm API çağrıları Firebase\'e gider');
  console.log('- Email gönderimi Firebase Authentication tarafından yapılır');
} else {
  console.log('\n❌ Build tamamlandı ancak bazı hatalar var!');
  console.log('Lütfen yukarıdaki hataları kontrol edin ve düzeltin.');
  process.exit(1);
}

console.log('\n');
