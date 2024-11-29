/*import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/getAllProducts', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product/new', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;*/


/*import express from 'express';
import { 
  getAllProducts, 
  getProductById, 
  getRelatedProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/product/:id/related').get(getRelatedProducts); // Add this line
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct);

export default router;*/

/*import express from 'express';
import { 
  getAllProducts, 
  getProductById, 
  getRelatedProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById); // Endpoint for string ID
router.route('/product/:id/related').get(getRelatedProducts); // Add this line if needed
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct);

export default router;*/


/*import express from 'express';
import {
  getAllProducts,
  getProductById,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getAllAccessories,
  getProductsByCategory // Import the searchProducts function
} from '../controllers/productController.js';

const router = express.Router();

// Define routes
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById); // Endpoint for string ID
router.route('/product/:id/related').get(getRelatedProducts); // Endpoint for related products
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct);
router.route('/search').get(searchProducts); // Correct route for search

router.route('/products/category/:categoryName').get(getProductsByCategory);
router.route('/accessories').get(getAllAccessories); // Fetch all accessories

export default router;*/



 /*good import express from 'express';
import {
  getAllProducts,
  getProductById,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getAllAccessories,
  getProductsByCategory
} from '../controllers/productController.js';

const router = express.Router();

// Route to get all products
router.route('/products').get(getAllProducts);

// Route to get a single product by its ID
router.route('/product/:id').get(getProductById);

// Route to get related products for a given product ID
router.route('/product/:id/related').get(getRelatedProducts);

// Route to create a new product
router.route('/product/new').post(createProduct);

// Routes to update or delete a product by its ID
router.route('/product/:id')
  .put(updateProduct)
  .delete(deleteProduct);

// Route to search products based on a query
router.route('/search').get(searchProducts);

// Route to get products by category name
router.route('/products/category/:categoryName').get(getProductsByCategory);

// Route to get all accessories
router.route('/accessories').get(getAllAccessories);

export default router;good*/




/*perfect last import express from 'express';
import {
  getAllProducts,
  getProductById,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getAllAccessories,
  getProductsByCategory
} from '../controllers/productController.js';

const router = express.Router();

// Route to get all products
router.route('/products').get(getAllProducts);

// Route to get a single product by its ID
router.route('/product/:id').get(getProductById);

// Route to get related products for a given product ID
router.route('/product/:id/related').get(getRelatedProducts);

// Route to create a new product (now expects image URLs from the frontend)
router.route('/product/new').post(createProduct);

// Routes to update or delete a product by its ID
router.route('/product/:id')
  .put(updateProduct)  // Update with image URLs from the frontend
  .delete(deleteProduct);

// Route to search products based on a query
router.route('/search').get(searchProducts);

// Route to get products by category name
router.route('/products/category/:categoryName').get(getProductsByCategory);

// Route to get all accessories
router.route('/accessories').get(getAllAccessories);

export default router;perfect last*/





import express from 'express';
import {
  getAllProducts,
  getProductById,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getAllAccessories,
  getProductsByCategory,
  getStockByStore  // Import your getStockByStore function
} from '../controllers/productController.js';

const router = express.Router();

// Route to get all products
router.route('/products').get(getAllProducts);

// Route to get a single product by its ID
router.route('/product/:id').get(getProductById);

// Route to get related products for a given product ID
router.route('/product/:id/related').get(getRelatedProducts);

// Route to create a new product (now expects image URLs from the frontend)
router.route('/product/new').post(createProduct);

// Routes to update or delete a product by its ID
router.route('/product/:id')
  .put(updateProduct)  // Update with image URLs from the frontend
  .delete(deleteProduct);

// Route to search products based on a query
router.route('/search').get(searchProducts);

// Route to get products by category name
router.route('/products/category/:categoryName').get(getProductsByCategory);

// Route to get all accessories
router.route('/accessories').get(getAllAccessories);

// Route to get stock levels by store name
router.route('/stores/:storeName/stock').get(getStockByStore);  // Add the stock route here

export default router;
