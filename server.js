import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// تنظیم MIME Types
app.use((req, res, next) => {
  const ext = req.url.split('.').pop().toLowerCase();
  if (ext === 'js') {
    res.type('application/javascript');
  } else if (ext === 'css') {
    res.type('text/css');
  } else if (ext === 'html') {
    res.type('text/html');
  }
  next();
});

// فعال کردن CORS برای همه درخواست‌ها
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// سرو فایل‌های استاتیک
app.use(express.static(join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    // تنظیم cache برای فایل‌های استاتیک
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

// هندل کردن تمام مسیرها برای React Router
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// استفاده از پورت 8080 به جای 3000
const PORT = process.env.PORT || 8080;

// شروع سرور روی همه آدرس‌های IP
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server directory: ${__dirname}`);
  console.log(`Static files directory: ${join(__dirname, 'dist')}`);
});