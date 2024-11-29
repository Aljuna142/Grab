// backend/controllers/cartController.js
// backend/controllers/cartController.js

import Cart from '../models/cartModel.js'; // Adjust path according to your structure

// Get all cart items
export const getCartItems = async (req, res, next) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json({
      success: true,
      cartItems,
    });
  } catch (error) {
    next(error);
  }
};

// Add a new item to the cart
export const addCartItem = async (req, res, next) => {
  try {
    const newItem = new Cart(req.body);
    await newItem.save();
    res.status(201).json({
      success: true,
      message: 'Item added to cart',
      item: newItem,
    });
  } catch (error) {
    next(error);
  }
};

// Update an item in the cart
export const updateCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItem = await Cart.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Item updated',
      item: updatedItem,
    });
  } catch (error) {
    next(error);
  }
};

// Remove an item from the cart
export const removeCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Item removed from cart',
      item: deletedItem,
    });
  } catch (error) {
    next(error);
  }
};
