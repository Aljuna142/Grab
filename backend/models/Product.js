
/*perfect client side import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema]
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;perfect client side */

/*correct schema not product table specifictaions import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: true },  // New field for SKU
  tags: [String],  // New field for tags
  maxPurchaseQuantity: { type: Number }, // New field
  lowStockQuantityWarning: { type: Number }, // New field
  weight: { type: Number }, // New field
  unit: { type: String }, // New field
  refundable: { type: Boolean }, // New field
  showStockOut: { type: Boolean }, // New field
  canPurchasable: { type: Boolean }, // New field
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;good schema but product table */


/*without seo good import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: true },  // New field for SKU
  tags: [String],  // New field for tags
  maxPurchaseQuantity: { type: Number }, // New field
  lowStockQuantityWarning: { type: Number }, // New field
  weight: { type: Number }, // New field
  unit: { type: String }, // New field
  refundable: { type: Boolean }, // New field
  showStockOut: { type: Boolean }, // New field
  canPurchasable: { type: Boolean }, // New field

  // Specification fields
  specifications: {
    Brand: { type: String, default: 'N/A' },
    'Model Number': { type: String, default: 'N/A' },
    Processor: { type: String, default: 'N/A' },
    'Memory RAM': { type: String, default: 'N/A' },
    Storage: { type: String, default: 'N/A' },
    Graphics: { type: String, default: 'N/A' },
    Keyboard: { type: String, default: 'N/A' },
    Wifi: { type: String, default: 'N/A' },
    Battery: { type: String, default: 'N/A' },
    Resolution: { type: String, default: 'N/A' },
    'Power Supply': { type: String, default: 'N/A' },
    Bluetooth: { type: String, default: 'N/A' },
    Webcam: { type: String, default: 'N/A' },
    Speaker: { type: String, default: 'N/A' },
    Ports: { type: String, default: 'N/A' },
    Color: { type: String, default: 'N/A' }
  }
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;without seo fields */





/*proper code perfectimport mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: true }, // New field for SKU
  tags: [String], // New field for tags
  maxPurchaseQuantity: { type: Number }, // New field
  lowStockQuantityWarning: { type: Number }, // New field
  weight: { type: Number }, // New field
  unit: { type: String }, // New field
  refundable: { type: Boolean }, // New field
  showStockOut: { type: Boolean }, // New field
  canPurchasable: { type: Boolean }, // New field

  // Specification fields
  specifications: {
    Brand: { type: String, default: 'N/A' },
    'Model Number': { type: String, default: 'N/A' },
    Processor: { type: String, default: 'N/A' },
    'Memory RAM': { type: String, default: 'N/A' },
    Storage: { type: String, default: 'N/A' },
    Graphics: { type: String, default: 'N/A' },
    Keyboard: { type: String, default: 'N/A' },
    Wifi: { type: String, default: 'N/A' },
    Battery: { type: String, default: 'N/A' },
    Resolution: { type: String, default: 'N/A' },
    'Power Supply': { type: String, default: 'N/A' },
    Bluetooth: { type: String, default: 'N/A' },
    Webcam: { type: String, default: 'N/A' },
    Speaker: { type: String, default: 'N/A' },
    Ports: { type: String, default: 'N/A' },
    Color: { type: String, default: 'N/A' }
  },

  // Optional SEO fields
  metaTitle: { type: String }, // Optional
  metaDescription: { type: String }, // Optional
  urlSlug: { type: String }, // Optional
  seoTags: [String] // Optional
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;proper code perfect */






/*perfect working with stock loctyion additionally import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: true }, // New field for SKU
  tags: [String], // New field for tags
  maxPurchaseQuantity: { type: Number }, // New field
  lowStockQuantityWarning: { type: Number }, // New field
  weight: { type: Number }, // New field
  unit: { type: String }, // New field
  refundable: { type: Boolean }, // New field
  showStockOut: { type: Boolean }, // New field
  canPurchasable: { type: Boolean }, // New field

  // Stock Location
  stockLocation: { type: String, required: false}, // New field for Stock Location

  // Specification fields
  specifications: {
    Brand: { type: String, default: 'N/A' },
    'Model Number': { type: String, default: 'N/A' },
    Processor: { type: String, default: 'N/A' },
    'Memory RAM': { type: String, default: 'N/A' },
    Storage: { type: String, default: 'N/A' },
    Graphics: { type: String, default: 'N/A' },
    Keyboard: { type: String, default: 'N/A' },
    Wifi: { type: String, default: 'N/A' },
    Battery: { type: String, default: 'N/A' },
    Resolution: { type: String, default: 'N/A' },
    'Power Supply': { type: String, default: 'N/A' },
    Bluetooth: { type: String, default: 'N/A' },
    Webcam: { type: String, default: 'N/A' },
    Speaker: { type: String, default: 'N/A' },
    Ports: { type: String, default: 'N/A' },
    Color: { type: String, default: 'N/A' }
  },

  // Optional SEO fields
  metaTitle: { type: String }, // Optional
  metaDescription: { type: String }, // Optional
  urlSlug: { type: String }, // Optional
  seoTags: [String] // Optional
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;pft with stock location */

/*perfect import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

// Product Schema
const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: true },
  tags: [String],
  maxPurchaseQuantity: { type: Number },
  lowStockQuantityWarning: { type: Number },
  weight: { type: Number },
  unit: { type: String },
  refundable: { type: Boolean },
  showStockOut: { type: Boolean },
  canPurchasable: { type: Boolean },

  // New field for store, marked as required
  store: { type: String, required: true },

  // Specification fields
  specifications: {
    Brand: { type: String, default: 'N/A' },
    'Model Number': { type: String, default: 'N/A' },
    Processor: { type: String, default: 'N/A' },
    'Memory RAM': { type: String, default: 'N/A' },
    Storage: { type: String, default: 'N/A' },
    Graphics: { type: String, default: 'N/A' },
    Keyboard: { type: String, default: 'N/A' },
    Wifi: { type: String, default: 'N/A' },
    Battery: { type: String, default: 'N/A' },
    Resolution: { type: String, default: 'N/A' },
    'Power Supply': { type: String, default: 'N/A' },
    Bluetooth: { type: String, default: 'N/A' },
    Webcam: { type: String, default: 'N/A' },
    Speaker: { type: String, default: 'N/A' },
    Ports: { type: String, default: 'N/A' },
    Color: { type: String, default: 'N/A' }
  },
  
  // Optional SEO fields
  metaTitle: { type: String },
  metaDescription: { type: String },
  urlSlug: { type: String },
  seoTags: [String]
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;last prefrct good with storename */


import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String]
});

// Product Schema
const productSchema = new mongoose.Schema({
  image: { type: String },
  images: [String],
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  reviewText: [String],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  colors: [colorSchema],
  SKU: { type: String, required: false },
  tags: [String],
  maxPurchaseQuantity: { type: Number },
  lowStockQuantityWarning: { type: Number },
  weight: { type: Number },
  unit: { type: String },
  refundable: { type: Boolean },
  showStockOut: { type: Boolean },
  canPurchasable: { type: Boolean },

  // Updated field name from store to storeName
  storeName: { type: String, required: false},

  // Specification fields
  specifications: {
    Brand: { type: String, default: 'N/A' },
    'Model Number': { type: String, default: 'N/A' },
    Processor: { type: String, default: 'N/A' },
    'Memory RAM': { type: String, default: 'N/A' },
    Storage: { type: String, default: 'N/A' },
    Graphics: { type: String, default: 'N/A' },
    Keyboard: { type: String, default: 'N/A' },
    Wifi: { type: String, default: 'N/A' },
    Battery: { type: String, default: 'N/A' },
    Resolution: { type: String, default: 'N/A' },
    'Power Supply': { type: String, default: 'N/A' },
    Bluetooth: { type: String, default: 'N/A' },
    Webcam: { type: String, default: 'N/A' },
    Speaker: { type: String, default: 'N/A' },
    Ports: { type: String, default: 'N/A' },
    Color: { type: String, default: 'N/A' }
  },
  
  // Optional SEO fields
  metaTitle: { type: String },
  metaDescription: { type: String },
  urlSlug: { type: String },
  seoTags: [String]
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;


