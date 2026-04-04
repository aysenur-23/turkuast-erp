/**
 * Test E-posta Gönderimi
 * 
 * Kullanım:
 * node test-email.js
 */

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const testEmail = async () => {
  try {
    console.log('📧 Test e-postası gönderiliyor...');
    console.log('SMTP Host:', process.env.SMTP_HOST);
    console.log('SMTP User:', process.env.SMTP_USER);
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: parseInt(process.env.SMTP_PORT || '465', 10) === 465,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@reviumtech.com',
      to: process.env.SMTP_USER || 'mail@turkuast.com', // Kendi e-postanıza gönder
      subject: 'Test E-posta - Turkuast ERP',
      html: `
        <h1>Test E-postası</h1>
        <p>Bu bir test e-postasıdır.</p>
        <p>Eğer bu e-postayı alıyorsanız, Hostinger SMTP yapılandırması başarılı!</p>
        <p>Gönderen: ${process.env.SMTP_FROM || process.env.SMTP_USER}</p>
      `,
    });

    console.log('✅ E-posta başarıyla gönderildi!');
    console.log('Message ID:', info.messageId);
    console.log('Alıcı:', process.env.SMTP_USER || 'mail@turkuast.com');
  } catch (error) {
    console.error('❌ E-posta gönderme hatası:', error.message);
    console.error('Detay:', error);
  }
};

testEmail();

