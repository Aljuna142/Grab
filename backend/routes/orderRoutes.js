/*import express from 'express';
import { addOrderItems, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
router.post('/', addOrderItems);

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
router.get('/:id', getOrderById);

// @desc    Update order by ID
// @route   PUT /api/v1/orders/:id
// @access  Public
router.put('/:id', updateOrder);

// @desc    Delete order by ID
// @route   DELETE /api/v1/orders/:id
// @access  Public
router.delete('/:id', deleteOrder);

export default router;*/



/*import express from 'express';
import { addOrderItems, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/orders', addOrderItems);
router.get('/orders/:id', getOrderById);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;*/

/*import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();

// Route to create a new order
router.route('/orders').post(addOrderItems);

// Route to get logged in user's orders
router.route('/myorders').get(getMyOrders);

// Routes to get, delete, and update order
router.route('/:id').get(getOrderById).delete(deleteOrder);
router.route('/:id/pay').put(updateOrderToPaid);
router.route('/:id/deliver').put(updateOrderToDelivered);

export default router;*/

/*import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();

// Route to create a new order
router.route('/').post(addOrderItems); // Updated to '/' for consistency

// Route to get logged-in user's orders
router.route('/myorders').get(getMyOrders);

// Routes to get, delete, and update order by ID
router.route('/:id')
  .get(getOrderById)    // Get order by ID
  .delete(deleteOrder); // Delete order by ID

// Routes to update order status by ID
router.route('/:id/pay').put(updateOrderToPaid);      // Update order to paid
router.route('/:id/deliver').put(updateOrderToDelivered); // Update order to delivered

export default router;*/



/*100 import express from 'express';
import { addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered,deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', addOrderItems);
router.get('/:id', getOrderById);
router.put('/:id/pay', updateOrderToPaid);
router.put('/:id/deliver', updateOrderToDelivered);
router.delete('/:id', deleteOrder);
// In your orderRoutes.js file
router.get('/test', (req, res) => {
  res.send('Order routes are working!');
});
export default router;100 */


// routes/orderRoutes.js

 /*goodimport express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrderById);
router.put('/:id/pay', updateOrderToPaid);
router.put('/:id/deliver', updateOrderToDelivered);

export default router;good*/



/*import express from 'express';
import auth from '../middleware/auth.js';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered
} from '../controllers/orderController.js';

const router = express.Router();

// Protect the createOrder route with authentication middleware
router.post('/', auth, createOrder);

// Get order by ID (public access or protected based on your needs)
router.get('/:id', getOrderById);

// Protect update routes with authentication middleware
router.put('/:id/pay', auth, updateOrderToPaid);
router.put('/:id/deliver', auth, updateOrderToDelivered);

export default router;pakka*/


 /*retutn refundimport express from 'express';
import auth from '../middleware/auth.js';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders, // Import the new function
} from '../controllers/orderController.js';

const router = express.Router();

// Protect the createOrder route with authentication middleware
router.post('/', auth, createOrder);

// Get all orders (requires authentication)
router.get('/',  getAllOrders);  // <-- New route for fetching all orders

// Get order by ID (public access or protected based on your needs)
router.get('/:id', getOrderById);

// Protect update routes with authentication middleware
router.put('/:id/pay', auth, updateOrderToPaid);
router.put('/:id/deliver', auth, updateOrderToDelivered);

export default router;*/




// Import necessary modules return refund
import express from 'express';
import auth from '../middleware/auth.js';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
  requestReturn, // Ensure this is imported
  requestRefund // Ensure this is imported
} from '../controllers/orderController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

// Protect the createOrder route with authentication middleware
router.post('/', auth, createOrder);

// Get all orders (requires authentication)
router.get('/', authenticateToken,getAllOrders);  // <-- New route for fetching all orders

// Get order by ID (public access or protected based on your needs)
router.get('/:id', getOrderById);

// Protect update routes with authentication middleware
router.put('/:id/pay', auth, updateOrderToPaid);
router.put('/:id/deliver', auth, updateOrderToDelivered);

// Route for requesting a return
router.post('/:id/return', auth, requestReturn); // Ensure this route is defined

// Route for requesting a refund
router.post('/:id/refund', auth, requestRefund); // Ensure this route is defined

export default router;

