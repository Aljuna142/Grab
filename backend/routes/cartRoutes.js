// backend/routes/cartRoutes.js
// backend/routes/cartRoutes.js

import express from 'express';
import { getCartItems, addCartItem, updateCartItem, removeCartItem } from '../controllers/cartController.js';

const router = express.Router();

// Route to get all cart items
router.route('/cart').get(getCartItems);

// Route to add a new item to the cart
router.route('/cart').post(addCartItem);

// Route to update an item in the cart
router.route('/cart/:id').put(updateCartItem);

// Route to remove an item from the cart
router.route('/cart/:id').delete(removeCartItem);

export default router;
