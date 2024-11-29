


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
    console.log('Connected to MongoDB successfully');
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

/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
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
import employeeRoutes from './routes/employeeroutes.js';
import bannerPosterRoutes from './routes/bannerPosterRoutes.js'; // Add BannerPoster route

import errorMiddleware from './middleware/error.js';

// Add HTTP and Socket.IO imports
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

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
app.use('/api/v1/stores', salesRoutes);
app.use('/api/v1/pos-orders', posOrderRoutes);
app.use('/api/v1/admins', adminRoutes);
app.use('/api/v1/users', userManagementRoutes);
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/banners-posters', bannerPosterRoutes); // Added BannerPoster route

app.use(errorMiddleware);

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Connection error:', error.message);
  });

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Same origin as your frontend
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Make Socket.IO available to routes via middleware
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Optional: Handle any events the client might send
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling (unchanged)
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});web socket but without multer for banner and poster */

/*waitimport express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
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
import employeeRoutes from './routes/employeeroutes.js';
import bannerPosterRoutes from './routes/bannerPosterRoutes.js'; // Add BannerPoster route

import errorMiddleware from './middleware/error.js';

// Add HTTP and Socket.IO imports
import http from 'http';
import { Server } from 'socket.io';
import multer from 'multer'; // Import multer for file upload handling

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup Multer for file uploads (banners and posters)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Folder where files will be stored
  },
  filename: (req, file, cb) => {
    // Use timestamp to avoid filename collisions
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }); // Multer middleware

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

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
app.use('/api/v1/stores', salesRoutes);
app.use('/api/v1/pos-orders', posOrderRoutes);
app.use('/api/v1/admins', adminRoutes);
app.use('/api/v1/users', userManagementRoutes);
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/banners-posters', bannerPosterRoutes); // Added BannerPoster route

app.use(errorMiddleware);

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Connection error:', error.message);
  });

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Same origin as your frontend
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

// Make Socket.IO available to routes via middleware
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Optional: Handle any events the client might send
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling (unchanged)
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});wait*/
