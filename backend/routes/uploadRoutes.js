/*correct code for product adding imagesimport express from 'express';
import upload from '../config/multerConfig.js'; // Import Multer middleware

const router = express.Router();

// Route to handle image upload
router.post('/upload', upload.array('images'), (req, res) => {
  console.log('Received files:', req.files);

  
  if (!req.files) {
    return res.status(400).json({ success: false, message: 'No files uploaded' });
  }

  // Respond with the file paths of the uploaded images
  //const filePaths = req.files.map(file => `/uploads/${file.filename}`);
  const filePaths = req.files.map(file => `/uploads/${file.filename.replace(/\\/g, '/')}`);

  res.status(200).json({
    success: true,
    message: 'Files uploaded successfully',
    filePaths
  });
});

export default router;correct code for product adding images without banner n poster*/

import express from 'express';
import upload from '../config/multerConfig.js'; // Import Multer middleware

const router = express.Router();

// Route to handle product image upload (no changes here)
router.post('/upload/product', upload.array('images'), (req, res) => {
  console.log('Received files for product:', req.files);

  if (!req.files) {
    return res.status(400).json({ success: false, message: 'No product images uploaded' });
  }

  const filePaths = req.files.map(file => `/uploads/${file.filename.replace(/\\/g, '/')}`);

  res.status(200).json({
    success: true,
    message: 'Product images uploaded successfully',
    filePaths,
  });
});

// Route to handle banner image upload
router.post('/upload/banner', upload.array('banners'), (req, res) => {
  console.log('Received files for banners:', req.files);

  if (!req.files) {
    return res.status(400).json({ success: false, message: 'No banners uploaded' });
  }

  const filePaths = req.files.map(file => `/uploads/${file.filename.replace(/\\/g, '/')}`);

  res.status(200).json({
    success: true,
    message: 'Banners uploaded successfully',
    filePaths,
  });
});

// Route to handle poster image upload
router.post('/upload/poster', upload.array('posters'), (req, res) => {
  console.log('Received files for posters:', req.files);

  if (!req.files) {
    return res.status(400).json({ success: false, message: 'No posters uploaded' });
  }

  const filePaths = req.files.map(file => `/uploads/${file.filename.replace(/\\/g, '/')}`);

  res.status(200).json({
    success: true,
    message: 'Posters uploaded successfully',
    filePaths,
  });
});

export default router;
