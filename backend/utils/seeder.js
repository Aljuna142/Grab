
/*
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from '../data/products.json' assert { type: 'json' };
import Product from '../models/Product.js';

dotenv.config({ path: './.env' }); // path

// Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products Deleted');

    await Product.insertMany(products);
    console.log('All Products Added');

    process.exit();
  } catch (error) {
    console.error('Error with seeding data:', error.message);
    process.exit(1);
  }
};

seedProducts();

*/


import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from '../data/products.json' assert { type: 'json' };
import Product from '../models/Product.js';

dotenv.config({ path: './.env' });

// Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products Deleted');

    await Product.insertMany(products);
    console.log('All Products Added');

    process.exit();
  } catch (error) {
    console.error('Error with seeding data:', error.message);
    process.exit(1);
  }
};

seedProducts();
