/*import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } 

  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order by ID
// @route   PUT /api/v1/orders/:id
// @access  Public
export const updateOrder = asyncHandler(async (req, res) => {
  const { status, paidAt, deliveredAt } = req.body;

  const order = await Order.findById(req.params.id);

  if (order) {
    order.status = status || order.status;
    order.paidAt = paidAt || order.paidAt;
    order.deliveredAt = deliveredAt || order.deliveredAt;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Delete order by ID
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ message: 'Order removed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
*/
/*import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order by ID
// @route   PUT /api/v1/orders/:id
// @access  Public
export const updateOrder = asyncHandler(async (req, res) => {
  const { status, paidAt, deliveredAt } = req.body;

  const order = await Order.findById(req.params.id);

  if (order) {
    order.status = status || order.status;
    order.paidAt = paidAt || order.paidAt;
    order.deliveredAt = deliveredAt || order.deliveredAt;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Delete order by ID
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ message: 'Order removed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
*/

/*import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public

export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  // Log the incoming data
  console.log('Received Order Data:', req.body);

  // Validate order items
  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }
  if (!orderItems.every(item => item.product && item.quantity)) {
    res.status(400);
    throw new Error('Order items are missing required fields');
  }

  // Validate shipping address
  if (!shippingAddress ||
      !shippingAddress.name ||
      !shippingAddress.mobile ||
      !shippingAddress.street ||
      !shippingAddress.area ||
      !shippingAddress.landmark ||
      !shippingAddress.city ||
      !shippingAddress.district ||
      !shippingAddress.country ||
      !shippingAddress.postalCode) {
    res.status(400);
    throw new Error('Shipping address is missing or incomplete');
  }

  // Validate payment method
  if (!paymentMethod || !['Cash on Delivery', 'Pick from Store', 'Direct Bank Transfer', 'Google Pay'].includes(paymentMethod)) {
    res.status(400);
    throw new Error('Invalid payment method');
  }

  // Create order
  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  try {
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});


// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Public
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to delivered
// @route   PUT /api/v1/orders/:id/deliver
// @access  Public
export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get logged-in user's orders
// @route   GET /api/v1/orders/myorders
// @access  Public
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ 'user._id': req.user._id });

  res.json(orders);
});

// @desc    Delete an order
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ success: true, message: 'Order removed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});old code*/



/*import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  // Log the incoming data
  console.log('Received Order Data:', req.body);

  // Validate order items
  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }
  if (!orderItems.every(item => item.product && item.quantity)) {
    res.status(400);
    throw new Error('Order items are missing required fields');
  }

  // Validate shipping address
  if (!shippingAddress ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.postalCode ||
      !shippingAddress.country) {
    res.status(400);
    throw new Error('Shipping address is missing or incomplete');
  }

  // Validate payment method
  const validPaymentMethods = ['Cash on Delivery', 'Pick from Store', 'Direct Bank Transfer', 'Google Pay'];
  if (!paymentMethod || !validPaymentMethods.some(method => method.toLowerCase() === paymentMethod.toLowerCase())) {
    res.status(400);
    throw new Error('Invalid payment method');
  }

  // Create order
  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  try {
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Public
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to delivered
// @route   PUT /api/v1/orders/:id/deliver
// @access  Public
export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get logged-in user's orders
// @route   GET /api/v1/orders/myorders
// @access  Public
export const getMyOrders = asyncHandler(async (req, res) => {
  // Assuming req.user._id is available from authentication middleware
  const orders = await Order.find({ 'user._id': req.user._id });

  res.json(orders);
});

// @desc    Delete an order
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ success: true, message: 'Order removed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
}); 

/*import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  console.log('Received Order Data:', req.body);

  // Validate order items
  if (!orderItems || orderItems.length === 0) {
    console.error('No order items provided');
    res.status(400);
    throw new Error('No order items');
  }
  orderItems.forEach(item => {
    if (!item.name || !item.qty || !item.image || !item.price || !item.product) {
      console.error('Order item is missing required fields:', item);
      res.status(400);
      throw new Error('Order items are missing required fields');
    }
    // Ensure product ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(item.product)) {
      console.error('Invalid product ID:', item.product);
      res.status(400);
      throw new Error('Invalid product ID');
    }
  });

  // Validate shipping address
  if (!shippingAddress ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.postalCode ||
      !shippingAddress.country) {
    console.error('Shipping address is missing or incomplete:', shippingAddress);
    res.status(400);
    throw new Error('Shipping address is missing or incomplete');
  }

  // Validate payment method
  const validPaymentMethods = ['Cash on Delivery', 'Pick from Store', 'Direct Bank Transfer', 'Google Pay'];
  if (!paymentMethod || !validPaymentMethods.includes(paymentMethod)) {
    console.error('Invalid payment method:', paymentMethod);
    res.status(400);
    throw new Error('Invalid payment method');
  }

  // Create order
  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  try {
    const createdOrder = await order.save();
    console.log('Order created successfully:', createdOrder);
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});

// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  console.log('Fetching order with ID:', req.params.id);
  
  const order = await Order.findById(req.params.id);

  if (order) {
    console.log('Order found:', order);
    res.json(order);
  } else {
    console.error('Order not found for ID:', req.params.id);
    res.status(404);
    throw new Error('Order not found');
  }
});ok
*/





/*import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod,deliveryMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  console.log('Received Order Data:', req.body);

  // Validate order items
  if (!orderItems || orderItems.length === 0) {
    console.error('No order items provided');
    res.status(400);
    throw new Error('No order items');
  }

  // Clean up the product IDs
  const cleanedOrderItems = orderItems.map(item => {
    return {
      ...item,
      product: item.product.trim()  // Remove any extra spaces or newlines
    };
  });

  // Validate cleaned order items
  cleanedOrderItems.forEach(item => {
    if (!item.name || !item.qty || !item.image || !item.price || !item.product) {
      console.error('Order item is missing required fields:', item);
      res.status(400);
      throw new Error('Order items are missing required fields');
    }
    // Ensure product ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(item.product)) {
      console.error('Invalid product ID:', item.product);
      res.status(400);
      throw new Error('Invalid product ID');
    }
  });

  // Validate shipping address
  if (!shippingAddress ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.postalCode ||
      !shippingAddress.country) {
    console.error('Shipping address is missing or incomplete:', shippingAddress);
    res.status(400);
    throw new Error('Shipping address is missing or incomplete');
  }

  // Validate payment method
  const validPaymentMethods = ['Cash on Delivery', 'Pick from Store', 'Direct Bank Transfer', 'Google Pay'];
  if (!paymentMethod || !validPaymentMethods.includes(paymentMethod)) {
    console.error('Invalid payment method:', paymentMethod);
    res.status(400);
    throw new Error('Invalid payment method');
  }


  console.log('Received Order Data:', req.body);

  // Validate delivery method
  const validDeliveryMethods = ['Delivery', 'Pick Up from Store'];
  if (!deliveryMethod || !validDeliveryMethods.includes(deliveryMethod)) {
    console.error('Invalid delivery method:', deliveryMethod);
    res.status(400);
    throw new Error('Invalid delivery method');
  }

  // Create order
  const order = new Order({
    orderItems: cleanedOrderItems,
    shippingAddress,
    paymentMethod,
    deliveryMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  try {
    const createdOrder = await order.save();
    console.log('Order created successfully:', createdOrder);
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});*/






/*100import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    deliveryMethod,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!orderItems || !deliveryMethod || !shippingAddress || !paymentMethod) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  if (!deliveryMethod) {
    res.status(400);
    throw new Error('Delivery method is required');
  }

  try {
    const order = new Order({
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Public
export const getOrderById = asyncHandler(async (req, res) => {
  console.log('Fetching order with ID:', req.params.id);
  
  const order = await Order.findById(req.params.id);

  if (order) {
    console.log('Order found:', order);
    res.json(order);
  } else {
    console.error('Order not found for ID:', req.params.id);
    res.status(404);
    throw new Error('Order not found');
  }
});


// @desc    Update order to paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Public
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Simulate payment data
  const paymentId = 'mock-payment-id-12345';
  const paymentStatus = 'Paid';
  const updateTime = new Date().toISOString();
  const emailAddress = 'test@example.com';

  // Update order fields
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: paymentId,
    status: paymentStatus,
    update_time: updateTime,
    email_address: emailAddress,
  };

  try {
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500);
    throw new Error('Error updating order');
  }
});


// @desc    Update order to delivered
// @route   PUT /api/v1/orders/:id/deliver
// @access  Public
export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  // Find the order by ID
  const order = await Order.findById(req.params.id);

  // If order not found, respond with an error
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Update order fields
  order.isDelivered = true;
  order.deliveredAt = Date.now(); // Set delivered date to current date

  try {
    // Save the updated order
    const updatedOrder = await order.save();
    // Respond with the updated order data
    res.json(updatedOrder);
  } catch (error) {
    // Handle any errors during the save operation
    res.status(500);
    throw new Error('Error updating order to delivered');
  }
});

// @desc    Delete an order
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  // Find the order by ID and delete it
  const result = await Order.deleteOne({ _id: req.params.id });

  if (result.deletedCount > 0) {
    res.json({ success: true, message: 'Order removed' });
  } else {
    // If no document was deleted, it means the order was not found
    res.status(404);
    throw new Error('Order not found');
  }
});100last*/


/*import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    } = req.body;

    const order = new Order({
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = req.body.paymentResult;

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an order
// @route   DELETE /api/v1/orders/:id
// @access  Public
export const deleteOrder = asyncHandler(async (req, res) => {
  // Find the order by ID and delete it
  const result = await Order.deleteOne({ _id: req.params.id });

  if (result.deletedCount > 0) {
    res.json({ success: true, message: 'Order removed' });
  } else {
    // If no document was deleted, it means the order was not found
    res.status(404);
    throw new Error('Order not found');
  }
});*/





/*import Order from '../models/orderModel.js';
import Product from '../models/Product.js'; // Import your Product model

export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    } = req.body;

    // Fetch all products in the order
    const products = await Product.find({ _id: { $in: orderItems.map(item => item.product) } });

    // Check stock availability for each item
    for (const item of orderItems) {
      const product = products.find(prod => prod._id.toString() === item.product);

      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product} not found` });
      }

      // If stock is insufficient
      if (product.countInStock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }
    }

    // Create a new order
    const order = new Order({
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    });

    // Save the order to the database
    const createdOrder = await order.save();

    // Update product stock after saving the order
    for (const item of orderItems) {
      const product = products.find(prod => prod._id.toString() === item.product);
      product.countInStock -= item.quantity; // Reduce the stock
      await product.save(); // Save the updated product stock
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = req.body.paymentResult;

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order and restore stock
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Restore stock for each item in the order
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product);

      if (product) {
        product.countInStock += item.quantity; // Restore the stock
        await product.save(); // Save the updated product stock
      } else {
        console.warn(`Product with ID ${item.product} not found, unable to restore stock.`);
      }
    }

    // Delete the order
    await Order.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: `Order with ID ${req.params.id} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting order:', error); // Log the error for internal debugging
    return res.status(500).json({ message: 'An error occurred while deleting the order.' });
  }
};

// Fetch all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('orderItems.product'); // Fetch all orders and populate product details
    res.json(orders); // Send the list of orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send error message if something goes wrong
  }
};old pakka */



/*return refundimport Order from '../models/orderModel.js';
import Product from '../models/Product.js'; // Import your Product model

export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    } = req.body;

    // Fetch all products in the order
    const products = await Product.find({ _id: { $in: orderItems.map(item => item.product) } });

    // Check stock availability for each item
    for (const item of orderItems) {
      const product = products.find(prod => prod._id.toString() === item.product);

      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product} not found` });
      }

      // If stock is insufficient
      if (product.countInStock < item.qty) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }
    }

    // Create a new order
    const order = new Order({
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice
    });

    // Save the order to the database
    const createdOrder = await order.save();

    // Update product stock after saving the order
    for (const item of orderItems) {
      const product = products.find(prod => prod._id.toString() === item.product);
      product.countInStock -= item.qty; // Reduce the stock
      await product.save(); // Save the updated product stock
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = req.body.paymentResult;

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order and restore stock
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Restore stock for each item in the order
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product);

      if (product) {
        product.countInStock += item.qty; // Restore the stock
        await product.save(); // Save the updated product stock
      } else {
        console.warn(`Product with ID ${item.product} not found, unable to restore stock.`);
      }
    }

    // Delete the order
    await Order.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: `Order with ID ${req.params.id} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting order:', error); // Log the error for internal debugging
    return res.status(500).json({ message: 'An error occurred while deleting the order.' });
  }
};

// Fetch all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('orderItems.product'); // Fetch all orders and populate product details
    res.json(orders); // Send the list of orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send error message if something goes wrong
  }
};

// Request a return for an order
export const requestReturn = async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body; // Extracting the reason from the request body

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Mark the order as return requested
    order.orderStatus = 'Return'; // Update order status to Return
    order.returnRequested = true; // Optionally track return requests
    order.returnReason = reason; // Set the return reason

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Request a refund for an order
export const requestRefund = async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body; // Extracting the reason from the request body

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Mark the order as refund requested
    order.orderStatus = 'Refund'; // Update order status to Refund
    order.refundRequested = true; // Optionally track refund requests
    order.refundReason = reason; // Set the refund reason

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};*/
import Order from '../models/orderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create an order
export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    // Fetch all products in the order
    const products = await Product.find({
      _id: { $in: orderItems.map((item) => item.product) },
    });

    // Check stock availability for each item
    for (const item of orderItems) {
      const product = products.find((prod) => prod._id.toString() === item.product);

      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product} not found` });
      }

      // If stock is insufficient
      if (product.countInStock < item.qty) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }
    }

    // Create a new order
    const order = new Order({
      orderItems,
      deliveryMethod,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });

    // Save the order to the database
    const createdOrder = await order.save();

    // Update product stock after saving the order
    for (const item of orderItems) {
      const product = products.find((prod) => prod._id.toString() === item.product);
      product.countInStock -= item.qty; // Reduce the stock
      await product.save(); // Save the updated product stock
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status to paid
export const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = req.body.paymentResult;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status to delivered
export const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order and restore stock
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Restore stock for each item in the order
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product);

      if (product) {
        product.countInStock += item.qty; // Restore the stock
        await product.save(); // Save the updated product stock
      } else {
        console.warn(`Product with ID ${item.product} not found, unable to restore stock.`);
      }
    }

    // Delete the order
    await Order.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: `Order with ID ${req.params.id} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting order:', error); // Log the error for internal debugging
    return res.status(500).json({ message: 'An error occurred while deleting the order.' });
  }
};

// Fetch all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('orderItems.product'); // Fetch all orders and populate product details
    res.json(orders); // Send the list of orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send error message if something goes wrong
  }
};

// Request a return for an order
export const requestReturn = async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body; // Extracting the reason from the request body

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Mark the order as return requested
    order.orderStatus = 'Return'; // Update order status to Return
    order.returnRequested = true; // Optionally track return requests
    order.returnReason = reason; // Set the return reason

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Request a refund for an order
export const requestRefund = async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body; // Extracting the reason from the request body

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Mark the order as refund requested
    order.orderStatus = 'Refund'; // Update order status to Refund
    order.refundRequested = true; // Optionally track refund requests
    order.refundReason = reason; // Set the refund reason

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


