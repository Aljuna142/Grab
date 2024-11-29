// backend/models/cartModel.js

import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String, // Assuming the product ID is a string
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure quantity is at least 1
  },
  /*userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },*/
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
 