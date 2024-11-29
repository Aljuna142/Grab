import upload from '../config/multerConfig.js'; // Import the Multer configuration

// Controller function for handling file uploads
const uploadFiles = (req, res) => {
  console.log('Received files:', req.files);
  
  if (!req.files) {
    return res.status(400).json({ success: false, message: 'No files uploaded' });
  }

  // Respond with the file paths of the uploaded images
 // const filePaths = req.files.map(file => `/uploads/${file.filename}`);
 const filePaths = req.files.map(file => `/uploads/${file.filename.replace(/\\/g, '/')}`);
  res.status(200).json({
    success: true,
    message: 'Files uploaded successfully',
    filePaths
  });
};

export { upload, uploadFiles };



