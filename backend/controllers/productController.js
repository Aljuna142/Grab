



/*import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';
import APIFeatures from '../utils/apiFeatures.js';



export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});
//{{base_url}}/api/v1/getAllProducts
/*export const getAllProducts = catchAsyncError(async (req, res, next) => {
 const apiFeatures= new APIFeatures(Product.find(),req.query).search()
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});
*/
//{{base_url}}/api/v1/product/:id

/*export const getProductById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  // Query by string ID
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});


/*export const getProductById = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});*/
// {{base_url}}/api/v1/product/:id/related
/*export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  // Find other products excluding the current one
  const relatedProducts = await Product.find({ _id: { $ne: product._id } }).limit(4);
  res.status(200).json({
    success: true,
    relatedProducts,
  });
});

/*
//{{base_url}}/api/v1/product/:id/related
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
      return next(new ErrorHandler('Product not found', 404));
  }

  const relatedProducts = await Product.find({ category: product.category }).limit(4);
  res.status(200).json({
      success: true,
      relatedProducts,
  });
});
*/

//{{base_url}}/api/v1/product/new
/*export const createProduct = catchAsyncError(async (req, res, next) => {
  const { name, description, price, ratings, category, stock, imageUrl, numOfReviews, reviews, seller } = req.body;
  const newProduct = new Product({ name, description, price, ratings, category, stock, imageUrl, numOfReviews, reviews, seller });
  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});

//{{base_url}}/api/v1/product/:id
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});

//{{base_url}}/api/v1/product/:id
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
});


export const searchProducts = catchAsyncError(async (req, res, next) => {
  const searchQuery = req.query.query || '';
  
  // Use regex for case-insensitive search
  const regex = new RegExp(searchQuery, 'i');
  
  // Create query with regex
  const apiFeatures = new APIFeatures(
    Product.find({ name: { $regex: regex } }), // Adjust field as needed
    req.query
  ).search();
  
  const products = await apiFeatures.query;
  res.status(200).json({
      success: true,
      products,
  });
});
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find({ category: 'accessories' }), req.query).search();
  const accessories = await apiFeatures.query;
  res.status(200).json({
    success: true,
    accessories,
  });
});
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
  const { categoryName } = req.params;

  // Use a case-insensitive regular expression to find products
  const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i') }), req.query).search();
  const products = await apiFeatures.query;

  if (!products.length) {
    return next(new ErrorHandler('No products found for this category', 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});
*/

 /*perfect with client isde import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';
import APIFeatures from '../utils/apiFeatures.js';

// {{base_url}}/api/v1/products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// {{base_url}}/api/v1/product/:id
export const getProductById = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  // Query by ObjectId
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// {{base_url}}/api/v1/product/:id/related
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  // Find other products excluding the current one
  const relatedProducts = await Product.find({ _id: { $ne: product._id } }).limit(4);
  res.status(200).json({
    success: true,
    relatedProducts,
  });
});

// {{base_url}}/api/v1/product/new
export const createProduct = catchAsyncError(async (req, res, next) => {
  const { image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors } = req.body;
  const newProduct = new Product({ image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors });
  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});*/

// {{base_url}}/api/v1/product/:id
/*single product updateexport const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});


export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // This will include all the fields you want to update
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/*
mulitple products update with allowed
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // This will include all the fields you want to update

    // Validate the fields to ensure they are allowed to be updated
    const allowedUpdates = ['countInStock', 'brand', 'category', 'price', 'name', 'description', 'image', 'images', 'rating', 'reviews', 'reviewText', 'originalPrice', 'colors'];
    const updateKeys = Object.keys(updates);
    const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));

    if (!isValidUpdate) {
      return res.status(400).json({ success: false, message: 'Invalid updates!' });
    }

    const product = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




// {{base_url}}/api/v1/product/:id
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
});

// {{base_url}}/api/v1/products/search
export const searchProducts = catchAsyncError(async (req, res, next) => {
  const searchQuery = req.query.query || '';

  // Use regex for case-insensitive search
  const regex = new RegExp(searchQuery, 'i');

  const apiFeatures = new APIFeatures(
    Product.find({ name: { $regex: regex } }), // Adjust field as needed
    req.query
  ).search();

  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// {{base_url}}/api/v1/products/accessories
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find({ category: 'accessories' }), req.query).search();
  const accessories = await apiFeatures.query;
  res.status(200).json({
    success: true,
    accessories,
  });
});

// {{base_url}}/api/v1/products/category/:categoryName
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
  const { categoryName } = req.params;

  // Use a case-insensitive regular expression to find products
  const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i') }), req.query).search();
  const products = await apiFeatures.query;

  if (!products.length) {
    return next(new ErrorHandler('No products found for this category', 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});perfect with client side  */


/*refactoreize import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';
import APIFeatures from '../utils/apiFeatures.js';

// {{base_url}}/api/v1/products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// {{base_url}}/api/v1/product/:id
export const getProductById = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  // Query by ObjectId
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// {{base_url}}/api/v1/product/:id/related
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  // Find other products excluding the current one
  const relatedProducts = await Product.find({ _id: { $ne: product._id }, isActive: true }).limit(4);
  res.status(200).json({
    success: true,
    relatedProducts,
  });
});

// {{base_url}}/api/v1/product/new
export const createProduct = catchAsyncError(async (req, res, next) => {
  const { image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors, isActive } = req.body;
  const newProduct = new Product({ image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors, isActive });
  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});

// {{base_url}}/api/v1/product/:id
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const updates = req.body;

  // Validate the fields to ensure they are allowed to be updated
  const allowedUpdates = ['image', 'images', 'name', 'rating', 'reviews', 'reviewText', 'price', 'originalPrice', 'description', 'countInStock', 'brand', 'category', 'colors', 'isActive'];
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));

  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});

// {{base_url}}/api/v1/product/:id
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;

  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
});

// {{base_url}}/api/v1/products/search
export const searchProducts = catchAsyncError(async (req, res, next) => {
  const searchQuery = req.query.query || '';

  // Use regex for case-insensitive search
  const regex = new RegExp(searchQuery, 'i');

  const apiFeatures = new APIFeatures(
    Product.find({ name: { $regex: regex }, isActive: true }), // Adjust field as needed
    req.query
  ).search();

  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// {{base_url}}/api/v1/products/accessories
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find({ category: 'accessories', isActive: true }), req.query).search();
  const accessories = await apiFeatures.query;
  res.status(200).json({
    success: true,
    accessories,
  });
});

// {{base_url}}/api/v1/products/category/:categoryName
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
  const { categoryName } = req.params;

  // Use a case-insensitive regular expression to find products
  const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i'), isActive: true }), req.query).search();
  const products = await apiFeatures.query;

  if (!products.length) {
    return next(new ErrorHandler('No products found for this category', 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});*/

 /*without img field import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js'; // Corrected typo in import
import APIFeatures from '../utils/apiFeatures.js';

// {{base_url}}/api/v1/products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// {{base_url}}/api/v1/product/:id
export const getProductById = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// {{base_url}}/api/v1/product/:id/related
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  const relatedProducts = await Product.find({ _id: { $ne: product._id }, isActive: true }).limit(4);
  res.status(200).json({
    success: true,
    relatedProducts,
  });
});

// {{base_url}}/api/v1/product/new
export const createProduct = catchAsyncError(async (req, res, next) => {
  const { image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors, SKU, tags, maxPurchaseQuantity, lowStockQuantityWarning, weight, unit, refundable, showStockOut, canPurchasable, isActive } = req.body;
  const newProduct = new Product({ image, images, name, rating, reviews, reviewText, price, originalPrice, description, countInStock, brand, category, colors, SKU, tags, maxPurchaseQuantity, lowStockQuantityWarning, weight, unit, refundable, showStockOut, canPurchasable, isActive });
  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});good but boolean error */



// Create a new product
/*without img storing export const createProduct = catchAsyncError(async (req, res, next) => {
  let {
    image,
    images,
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,
    metaDescription,
    urlSlug,
    seoTags
  } = req.body;

  // Convert string values to Boolean
  refundable = refundable === 'Yes' || refundable === 'true';
  showStockOut = showStockOut === 'Enable' || showStockOut === 'true';
  canPurchasable = canPurchasable === 'Yes' || canPurchasable === 'true';

  const newProduct = new Product({
    image,
    images,
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,         // SEO fields
    metaDescription,  // SEO fields
    urlSlug,          // SEO fields
    seoTags           // SEO fields
  });

  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});












/*without seo fields export const createProduct = catchAsyncError(async (req, res, next) => {
  let {
    image,
    images,
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive
  } = req.body;

  // Convert string values to Boolean
  refundable = refundable === 'Yes' || refundable === 'true';
  showStockOut = showStockOut === 'Enable' || showStockOut === 'true';
  canPurchasable = canPurchasable === 'Yes' || canPurchasable === 'true';

  const newProduct = new Product({
    image,
    images,
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive
  });

  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});
without seo */

/*
// {{base_url}}/api/v1/product/:id
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const updates = req.body;

  const allowedUpdates = ['image', 'images', 'name', 'rating', 'reviews', 'reviewText', 'price', 'originalPrice', 'description', 'countInStock', 'brand', 'category', 'colors', 'SKU', 'tags', 'maxPurchaseQuantity', 'lowStockQuantityWarning', 'weight', 'unit', 'refundable', 'showStockOut', 'canPurchasable', 'isActive'];
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));

  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});ok but boolean error */

/*ok but dashboard invalid update export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'image',
    'images',
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive'
  ];
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));

  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});*/


/*export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'image',
    'images',
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',  // Ensure SKU is allowed
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive'
  ];

  // Check if updates include only allowed fields
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  // Perform the update
  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});wait
*/


// Update an existing product
/*without image storing export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'image',
    'images',
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive',
    'metaTitle',         // SEO fields
    'metaDescription',  // SEO fields
    'urlSlug',          // SEO fields
    'seoTags'           // SEO fields
  ];

  // Check if updates include only allowed fields
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  // Perform the update
  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});*/




/*without seo export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'image',
    'images',
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive'
  ];

  // Check if updates include only allowed fields
  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  // Perform the update
  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});*/







// {{base_url}}/api/v1/product/:id
/*good old without img storing export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
});

// {{base_url}}/api/v1/products/search
export const searchProducts = catchAsyncError(async (req, res, next) => {
  const searchQuery = req.query.query || '';
  const regex = new RegExp(searchQuery, 'i');

  const apiFeatures = new APIFeatures(
    Product.find({ name: { $regex: regex }, isActive: true }), 
    req.query
  ).search();

  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    products,
  });
});






// {{base_url}}/api/v1/products/accessories
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find({ category: 'accessories', isActive: true }), req.query).search();
  const accessories = await apiFeatures.query;
  res.status(200).json({
    success: true,
    accessories,
  });
});

// {{base_url}}/api/v1/products/category/:categoryName
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
  const { categoryName } = req.params;

  const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i'),  }), req.query).search();
  const products = await apiFeatures.query;

  if (!products.length) {
    return next(new ErrorHandler('No products found for this category', 404));
  }

  res.status(200).json({
    success: true,
    products,s
  });
});without image storing */



/*img with stock belongs to code collapse import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';
import APIFeatures from '../utils/apiFeatures.js';

// Get all products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query).search();
    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products,
    });
});

// Get product by ID
export const getProductById = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        product,
    });
});

// Get related products
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    const relatedProducts = await Product.find({ _id: { $ne: product._id }, isActive: true }).limit(4);
    res.status(200).json({
        success: true,
        relatedProducts,
    });
});





export const createProduct = catchAsyncError(async (req, res, next) => {
  console.log('Received request body:', req.body);

  let {
    images,  // Expect image URLs from the frontend
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,
    metaDescription,
    urlSlug,
    seoTags
  } = req.body;

  // Convert string values to Boolean
  refundable = refundable === 'Yes' || refundable === 'true';
  showStockOut = showStockOut === 'Enable' || showStockOut === 'true';
  canPurchasable = canPurchasable === 'Yes' || canPurchasable === 'true';

  const newProduct = new Product({
    images,  // Save image URLs instead of handling file uploads
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,
    metaDescription,
    urlSlug,
    seoTags
  });

  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});



export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  console.log('Received request body:', req.body);

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'images',  // Include 'images' in allowed updates
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive',
    'metaTitle',
    'metaDescription',
    'urlSlug',
    'seoTags'
  ];

  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});




// Delete a product
export const deleteProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        message: 'Product deleted',
    });
});

// Search products
export const searchProducts = catchAsyncError(async (req, res, next) => {
    const searchQuery = req.query.query || '';
    const regex = new RegExp(searchQuery, 'i');

    const apiFeatures = new APIFeatures(
        Product.find({ name: { $regex: regex }, isActive: true }), 
        req.query
    ).search();

    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products,
    });
});

// Get all accessories
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find({ category: 'accessories', isActive: true }), req.query).search();
    const accessories = await apiFeatures.query;
    res.status(200).json({
        success: true,
        accessories,
    });
});

// Get products by category
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
    const { categoryName } = req.params;

    const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i'),  }), req.query).search();
    const products = await apiFeatures.query;

    if (!products.length) {
        return next(new ErrorHandler('No products found for this category', 404));
    }

    res.status(200).json({
        success: true,
        products,
    });img code collapse with stock belongs otherwise perfect*/






    /*perfect but store import Product from '../models/Product.js';
    import ErrorHandler from '../utils/errorHandler.js';
    import catchAsyncError from '../middleware/catchAysncError.js';
    import APIFeatures from '../utils/apiFeatures.js';
    import Store from '../models/Store.js'; // Adjust the path if necessary

    
    // Get all products
    export const getAllProducts = catchAsyncError(async (req, res, next) => {
        const apiFeatures = new APIFeatures(Product.find(), req.query).search();
        const products = await apiFeatures.query;
        res.status(200).json({
            success: true,
            products,
        });
    });
    
    // Get product by ID
    export const getProductById = catchAsyncError(async (req, res, next) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        res.status(200).json({
            success: true,
            product,
        });
    });
    
    // Get related products
    export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }
        const relatedProducts = await Product.find({ _id: { $ne: product._id }, isActive: true }).limit(4);
        res.status(200).json({
            success: true,
            relatedProducts,
        });
    });*/
    
    /*cmt// Get stock levels for a specific store
    // GET http://localhost:5000/api/v1/stores/:storeName/stock
    export const getStockByStore = catchAsyncError(async (req, res, next) => {
        const { storeName } = req.params; // Get storeName from URL parameters
        try {
            const products = await Product.find({ store: storeName }); // Fetch products based on store name
            if (!products.length) {
                return res.status(404).json({ message: 'No stock data found for this store.' });
            }
            res.json({ products }); // Send back stock data
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });cmt*/



/*// Get stock levels for a specific store
export const getStockByStore = catchAsyncError(async (req, res, next) => {
  const { storeName } = req.params; // Get storeName from URL parameters
  
  try {
    // Find the store by name
    const store = await Store.findOne({ name: new RegExp(`^${storeName}$`, 'i') });
    
    if (!store) {
      return res.status(404).json({ message: 'Store not found' });
    }

    // Use the store's _id to find associated products
    const products = await Product.find({ store: store._id });

    if (!products.length) {
      return res.status(404).json({ message: 'No stock data found for this store.' });
    }

    const stockData = products.map(product => ({
      id: product._id,
      name: product.name,
      stock: product.countInStock // Use countInStock for stock levels
    }));

    res.json({ products: stockData }); // Send back stock data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a new product
export const createProduct = catchAsyncError(async (req, res, next) => {
  console.log('Received request body:', req.body);

  let {
    images,  
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,
    metaDescription,
    urlSlug,
    seoTags,
    store // Use `store` instead of `storeName`
  } = req.body;

  // Convert string values to Boolean
  refundable = refundable === 'Yes' || refundable === 'true';
  showStockOut = showStockOut === 'Enable' || showStockOut === 'true';
  canPurchasable = canPurchasable === 'Yes' || canPurchasable === 'true';

  const newProduct = new Product({
    images,  
    name,
    rating,
    reviews,
    reviewText,
    price,
    originalPrice,
    description,
    countInStock,
    brand,
    category,
    colors,
    SKU,
    tags,
    maxPurchaseQuantity,
    lowStockQuantityWarning,
    weight,
    unit,
    refundable,
    showStockOut,
    canPurchasable,
    isActive,
    metaTitle,
    metaDescription,
    urlSlug,
    seoTags,
    store // Save the `store` field to the product
  });

  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});

// Update a product
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let updates = req.body;

  console.log('Received request body:', req.body);

  // Convert string values to Boolean
  if (updates.refundable !== undefined) {
    updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
  }
  if (updates.showStockOut !== undefined) {
    updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
  }
  if (updates.canPurchasable !== undefined) {
    updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
  }

  const allowedUpdates = [
    'images',  
    'name',
    'rating',
    'reviews',
    'reviewText',
    'price',
    'originalPrice',
    'description',
    'countInStock',
    'brand',
    'category',
    'colors',
    'SKU',
    'tags',
    'maxPurchaseQuantity',
    'lowStockQuantityWarning',
    'weight',
    'unit',
    'refundable',
    'showStockOut',
    'canPurchasable',
    'isActive',
    'metaTitle',
    'metaDescription',
    'urlSlug',
    'seoTags',
    'store' // Allow updating the `store`
  ];

  const updateKeys = Object.keys(updates);
  const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
  if (!isValidUpdate) {
    return res.status(400).json({ success: false, message: 'Invalid updates!' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});8/

   

    
    
    // Delete a product
    export const deleteProduct = catchAsyncError(async (req, res, next) => {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return next(new ErrorHandler('Product not found', 404));
        }
        res.status(200).json({
            success: true,
            message: 'Product deleted',
        });
    });
    
    // Search products
    export const searchProducts = catchAsyncError(async (req, res, next) => {
        const searchQuery = req.query.query || '';
        const regex = new RegExp(searchQuery, 'i');
    
        const apiFeatures = new APIFeatures(
            Product.find({ name: { $regex: regex }, isActive: true }), 
            req.query
        ).search();
    
        const products = await apiFeatures.query;
        res.status(200).json({
            success: true,
            products,
        });
    });
    
    // Get all accessories
    export const getAllAccessories = catchAsyncError(async (req, res, next) => {
        const apiFeatures = new APIFeatures(Product.find({ category: 'accessories', isActive: true }), req.query).search();
        const accessories = await apiFeatures.query;
        res.status(200).json({
            success: true,
            accessories,
        });
    });
    
    // Get products by category
    export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
        const { categoryName } = req.params;
    
        const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i'),  }), req.query).search();
        const products = await apiFeatures.query;
    
        if (!products.length) {
            return next(new ErrorHandler('No products found for this category', 404));
        }
    
        res.status(200).json({
            success: true,
            products,
        });
    });perfect but store */
    

    import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';
import APIFeatures from '../utils/apiFeatures.js';
import Store from '../models/Store.js'; // Adjust the path if necessary

// Get all products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query).search();
    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products,
    });
});

// Get product by ID
export const getProductById = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        product,
    });
});

// Get related products
export const getRelatedProducts = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    const relatedProducts = await Product.find({ _id: { $ne: product._id }, isActive: true }).limit(4);
    res.status(200).json({
        success: true,
        relatedProducts,
    });
});

// Get stock levels for a specific store
export const getStockByStore = catchAsyncError(async (req, res, next) => {
  // Decode the store name to handle cases with spaces and special characters
  const storeName = decodeURIComponent(req.params.storeName); 

  try {
      // Find the store by name in a case-insensitive manner
      const store = await Store.findOne({ name: new RegExp(`^${storeName}$`, 'i') });

      if (!store) {
          return res.status(404).json({ message: 'Store not found' });
      }

      // Use the store's name to find associated products
      const products = await Product.find({ storeName: store.name }); // Make sure to use storeName for matching products

      if (!products.length) {
          return res.status(404).json({ message: 'No stock data found for this store.' });
      }

      const stockData = products.map(product => ({
          id: product._id,
          name: product.name,
          stock: product.countInStock, // Use countInStock for stock levels
          storeName: product.storeName // Add the storeName field here
      }));

      res.json({ products: stockData }); // Send back stock data
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});



// Get stock levels for a specific store
/*export const getStockByStore = catchAsyncError(async (req, res, next) => {
  // Decode the store name to handle cases with spaces and special characters
  const storeName = decodeURIComponent(req.params.storeName); 

  try {
      // Find the store by name in a case-insensitive manner
      const store = await Store.findOne({ name: new RegExp(`^${storeName}$`, 'i') });

      if (!store) {
          return res.status(404).json({ message: 'Store not found' });
      }

      // Use the store's _id to find associated products
      const products = await Product.find({ storeName: store.name }); // Make sure to use storeName for matching products

      if (!products.length) {
          return res.status(404).json({ message: 'No stock data found for this store.' });
      }

      const stockData = products.map(product => ({
          id: product._id,
          name: product.name,
          stock: product.countInStock // Use countInStock for stock levels
      }));

      res.json({ products: stockData }); // Send back stock data
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});*/

// Get stock levels for a specific store
/*initial code export const getStockByStore = catchAsyncError(async (req, res, next) => {
    const { storeName } = req.params; // Get storeName from URL parameters

    try {
        // Find the store by name
        const store = await Store.findOne({ name: new RegExp(`^${storeName}$`, 'i') });

        if (!store) {
            return res.status(404).json({ message: 'Store not found' });
        }

        // Use the store's _id to find associated products
        const products = await Product.find({ store: store._id });

        if (!products.length) {
            return res.status(404).json({ message: 'No stock data found for this store.' });
        }

        const stockData = products.map(product => ({
            id: product._id,
            name: product.name,
            stock: product.countInStock // Use countInStock for stock levels
        }));

        res.json({ products: stockData }); // Send back stock data
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/

// Create a new product
export const createProduct = catchAsyncError(async (req, res, next) => {
    console.log('Received request body:', req.body);

    let {
        images,
        name,
        rating,
        reviews,
        reviewText,
        price,
        originalPrice,
        description,
        countInStock,
        brand,
        category,
        colors,
        SKU,
        tags,
        maxPurchaseQuantity,
        lowStockQuantityWarning,
        weight,
        unit,
        refundable,
        showStockOut,
        canPurchasable,
        isActive,
        metaTitle,
        metaDescription,
        urlSlug,
        seoTags,
        storeName // Changed from `store` to `storeName`
    } = req.body;

    // Convert string values to Boolean
    refundable = refundable === 'Yes' || refundable === 'true';
    showStockOut = showStockOut === 'Enable' || showStockOut === 'true';
    canPurchasable = canPurchasable === 'Yes' || canPurchasable === 'true';

    const newProduct = new Product({
        images,
        name,
        rating,
        reviews,
        reviewText,
        price,
        originalPrice,
        description,
        countInStock,
        brand,
        category,
        colors,
        SKU,
        tags,
        maxPurchaseQuantity,
        lowStockQuantityWarning,
        weight,
        unit,
        refundable,
        showStockOut,
        canPurchasable,
        isActive,
        metaTitle,
        metaDescription,
        urlSlug,
        seoTags,
        storeName // Save the `storeName` field to the product
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
        success: true,
        product: savedProduct,
    });
});

// Update a product
export const updateProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    let updates = req.body;

    console.log('Received request body:', req.body);

    // Convert string values to Boolean
    if (updates.refundable !== undefined) {
        updates.refundable = updates.refundable === 'Yes' || updates.refundable === 'true';
    }
    if (updates.showStockOut !== undefined) {
        updates.showStockOut = updates.showStockOut === 'Enable' || updates.showStockOut === 'true';
    }
    if (updates.canPurchasable !== undefined) {
        updates.canPurchasable = updates.canPurchasable === 'Yes' || updates.canPurchasable === 'true';
    }

    const allowedUpdates = [
        'images',
        'name',
        'rating',
        'reviews',
        'reviewText',
        'price',
        'originalPrice',
        'description',
        'countInStock',
        'brand',
        'category',
        'colors',
        'SKU',
        'tags',
        'maxPurchaseQuantity',
        'lowStockQuantityWarning',
        'weight',
        'unit',
        'refundable',
        'showStockOut',
        'canPurchasable',
        'isActive',
        'metaTitle',
        'metaDescription',
        'urlSlug',
        'seoTags',
        'storeName' // Allow updating the `storeName`
    ];

    const updateKeys = Object.keys(updates);
    const isValidUpdate = updateKeys.every((key) => allowedUpdates.includes(key));
    if (!isValidUpdate) {
        return res.status(400).json({ success: false, message: 'Invalid updates!' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    if (!updatedProduct) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product: updatedProduct,
    });
});

// Delete a product
export const deleteProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        message: 'Product deleted',
    });
});

// Search products
export const searchProducts = catchAsyncError(async (req, res, next) => {
    const searchQuery = req.query.query || '';
    const regex = new RegExp(searchQuery, 'i');

    const apiFeatures = new APIFeatures(
        Product.find({ name: { $regex: regex }, isActive: true }),
        req.query
    ).search();

    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products,
    });
});

// Get all accessories
export const getAllAccessories = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find({ category: 'accessories', isActive: true }), req.query).search();
    const accessories = await apiFeatures.query;
    res.status(200).json({
        success: true,
        accessories,
    });
});

// Get products by category
export const getProductsByCategory = catchAsyncError(async (req, res, next) => {
    const { categoryName } = req.params;

    const apiFeatures = new APIFeatures(Product.find({ category: new RegExp(`^${categoryName}$`, 'i'), }), req.query).search();
    const products = await apiFeatures.query;

    if (!products.length) {
        return next(new ErrorHandler('No products found for this category', 404));
    }

    res.status(200).json({
        success: true,
        products,
    });
});



