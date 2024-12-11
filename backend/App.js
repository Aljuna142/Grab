


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';  // Import this to handle __dirname in ES modules
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import damageRoutes from './routes/damageRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import storeRoutes from './routes/storeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import posOrderRoutes from './routes/posOrderRoutes.js'; 
import adminRoutes from './routes/adminRoutes.js';
import userManagementRoutes from './routes/usermanagementroutes.js';
import employeeRoutes from './routes/employeeroutes.js'; // Assuming you have employeeroutes.js for Employee

import errorMiddleware from './middleware/error.js';

dotenv.config(); // Load environment variables

// Initialize the Express app
const app = express();

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware for parsing JSON and URL-encoded data with size limits
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log('Static file serving configured for /uploads');

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}));
console.log('CORS configured');

// Root Route for Health Check
app.get('/', (req, res) => {
  res.send('Static file server is running');
});

// Routes
app.use('/api/v1', productRoutes);
app.use('/api/v1/addresses', addressRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/inquiries', inquiryRoutes);
app.use('/api/v1/purchases', purchaseRoutes);
app.use('/api/v1/damages', damageRoutes);
app.use('/api/v1/stores', storeRoutes);
app.use('/api/v1/uploads', uploadRoutes);
app.use('/api/v1/stores', salesRoutes); // Sales routes
app.use('/api/v1/pos-orders', posOrderRoutes);
app.use('/api/v1/admins', adminRoutes);
app.use('/api/v1/users', userManagementRoutes);   // User management routes
app.use('/api/v1/employees', employeeRoutes); 

app.use('/api/v1/auth', authRoutes);

// Error Handling Middleware
app.use(errorMiddleware);
console.log('Error handling middleware configured');

// Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully');
  })
  .catch((error) => {
    console.error('Connection error:', error.message);
  });

// Starting The Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} successfully in ${process.env.NODE_ENV} mode`);
});

// Error Handling for Unhandled Rejections and Uncaught Exceptions
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.error('Shutting down the server due to unhandled promise rejection');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error('Shutting down the server due to uncaught exception');
  server.close(() => {
    process.exit(1);
  });
});

// Graceful Shutdown on SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully');
  server.close(()=> {
    console.log('Process terminated');
  });
});

