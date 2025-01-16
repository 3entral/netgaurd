import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware for proper MIME types
app.use((req, res, next) => {
  const ext = req.url.split('.').pop().toLowerCase();
  const mimeTypes = {
    'js': 'application/javascript',
    'mjs': 'application/javascript',
    'css': 'text/css',
    'html': 'text/html',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml'
  };
  
  if (mimeTypes[ext]) {
    res.type(mimeTypes[ext]);
  }
  next();
});

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files with proper headers
app.use(express.static(join(__dirname, 'dist'), {
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
    
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Handle all routes for React Router
app.get('*', (req, res) => {
  const indexPath = join(__dirname, 'dist', 'index.html');
  
  try {
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      console.error('index.html not found at:', indexPath);
      res.status(404).send('Application files not found. Please ensure the application is built correctly.');
    }
  } catch (err) {
    console.error('Error serving index.html:', err);
    res.status(500).send('Internal server error');
  }
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
  console.log('Server directory:', __dirname);
  console.log('Static files directory:', join(__dirname, 'dist'));
});