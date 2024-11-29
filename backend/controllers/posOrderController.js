/*import POSOrder from '../models/posOrderModel.js';

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        const newOrder = new POSOrder(req.body);
        await newOrder.save();
        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId storeId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};*/





/*without remaing logic import POSOrder from '../models/posOrderModel.js';

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];
        
        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false, 
                message: `Please provide all required fields: ${missingFields.join(', ')}` 
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });
        
        await newOrder.save();
        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use regular expression for case-insensitive matching
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } }).populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};working but without remaing logic*/





/*good but remaing stock notimport POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];
        
        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false, 
                message: `Please provide all required fields: ${missingFields.join(', ')}` 
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Fetch the product to check stock availability
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if there is enough stock
        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });

        // Save the order
        await newOrder.save();

        // Update product stock
        product.countInStock -= quantity; // Reduce the stock
        await product.save(); // Save the updated product stock

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use regular expression for case-insensitive matching
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } }).populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock for the deleted order
        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        } else {
            console.warn(`Product with ID ${deletedOrder.productId} not found, unable to restore stock.`);
        }

        // Delete the order
        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};good without remaing stock */



 /*pakka import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];
        
        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false, 
                message: `Please provide all required fields: ${missingFields.join(', ')}` 
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Fetch the product to check stock availability
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if there is enough stock
        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });

        // Save the order
        await newOrder.save();

        // Update product stock
        product.countInStock -= quantity; // Reduce the stock
        await product.save(); // Save the updated product stock

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use populate to fetch product data including countInStock
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock'); // Fetch only countInStock field from product

        // Ensure that countInStock is attached to each order
        const ordersWithStock = orders.map(order => ({
            ...order._doc, // Ensure we have the raw order object
            remainingStock: order.productId.countInStock // Add remainingStock from productId
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock for the deleted order
        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        } else {
            console.warn(`Product with ID ${deletedOrder.productId} not found, unable to restore stock.`);
        }

        // Delete the order
        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
pakka*/




/*pakka with return import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];
        
        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false, 
                message: `Please provide all required fields: ${missingFields.join(', ')}` 
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Fetch the product to check stock availability
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if there is enough stock
        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });

        // Save the order
        await newOrder.save();

        // Update product stock
        product.countInStock -= quantity; // Reduce the stock
        await product.save(); // Save the updated product stock

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use populate to fetch product data including countInStock
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock'); // Fetch only countInStock field from product

        // Ensure that countInStock is attached to each order
        const ordersWithStock = orders.map(order => ({
            ...order._doc, // Ensure we have the raw order object
            remainingStock: order.productId.countInStock // Add remainingStock from productId
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock for the deleted order
        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        } else {
            console.warn(`Product with ID ${deletedOrder.productId} not found, unable to restore stock.`);
        }

        // Delete the order
        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process return for a POS order
export const returnPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body; // Get refund amount from request body

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        if (order.returnStatus) {
            return res.status(400).json({ success: false, message: 'Order has already been returned' });
        }

        // Mark the order as returned and set the refund amount
        order.returnStatus = true;
        order.refundAmount = refundAmount;
        order.returnDate = new Date(); // Set return date

        await order.save();

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing return:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process refund for a POS order
export const refundPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body; // Get refund amount from request body

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Process the refund logic here, e.g., updating payment records
        // For simplicity, we're just updating the order
        order.refundAmount = refundAmount; // Set the refund amount

        await order.save();

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};paakka with return*/



/*1import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];
        
        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false, 
                message: `Please provide all required fields: ${missingFields.join(', ')}` 
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Fetch the product to check stock availability
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if there is enough stock
        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });

        // Save the order
        await newOrder.save();

        // Update product stock
        product.countInStock -= quantity; // Reduce the stock
        await product.save(); // Save the updated product stock

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use populate to fetch product data including countInStock
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock'); // Fetch only countInStock field from product

        // Ensure that countInStock is attached to each order
        const ordersWithStock = orders.map(order => ({
            ...order._doc, // Ensure we have the raw order object
            remainingStock: order.productId.countInStock // Add remainingStock from productId
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock for the deleted order
        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        } else {
            console.warn(`Product with ID ${deletedOrder.productId} not found, unable to restore stock.`);
        }

        // Delete the order
        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process return for a POS order
export const returnPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        if (order.returnStatus) {
            return res.status(400).json({ success: false, message: 'Order has already been returned' });
        }

        // Mark the order as returned
        order.returnStatus = true;
        order.returnDate = new Date(); // Set return date

        await order.save();

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing return:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process refund for a POS order
export const refundPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body; // Get refund amount from request body

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        // Process the refund logic here, e.g., updating payment records
        // For simplicity, we're just updating the order
        order.refundAmount = refundAmount; // Set the refund amount

        await order.save();

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};*/










/*1import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        // Required fields including customer details and order status
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];

        // Check for missing fields
        const missingFields = requiredFields.filter(field => !req.body[field]);

        // If there are missing fields, send a detailed error message
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Please provide all required fields: ${missingFields.join(', ')}`
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        // Fetch the product to check stock availability
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if there is enough stock
        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        // Create a new order instance with the provided data
        const newOrder = new POSOrder({
            sku, // SKU is optional, can be undefined
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName, // Add customerName
            companyName, // Add companyName
            mobileNumber, // Add mobileNumber
            address, // Add address
            orderStatus, // Add orderStatus
        });

        // Save the order
        await newOrder.save();

        // Update product stock
        product.countInStock -= quantity; // Reduce the stock
        await product.save(); // Save the updated product stock

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        // Use populate to fetch product data including countInStock
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock'); // Fetch only countInStock field from product

        // Ensure that countInStock is attached to each order
        const ordersWithStock = orders.map(order => ({
            ...order._doc, // Ensure we have the raw order object
            remainingStock: order.productId.countInStock // Add remainingStock from productId
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock for the deleted order
        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        } else {
            console.warn(`Product with ID ${deletedOrder.productId} not found, unable to restore stock.`);
        }

        // Delete the order
        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process return for a POS order
export const returnPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Check if the order has already been returned
        if (order.returnStatus) {
            return res.status(400).json({ success: false, message: 'Order has already been returned' });
        }

        // Mark the order as returned
        order.returnStatus = true; // Update return status
        order.returnDate = new Date(); // Set return date

        await order.save(); // Save the updated order

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing return:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process refund for a POS order
export const refundPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body; // Get refund amount from request body

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        // Process the refund logic here, e.g., updating payment records
        // For simplicity, we're just logging it
        console.log(`Refund of ${refundAmount} processed for order ID: ${orderId}`);

        res.status(200).json({ success: true, message: 'Refund processed successfully', order });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};1*/


/*22import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];

        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Please provide all required fields: ${missingFields.join(', ')}`
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        const newOrder = new POSOrder({
            sku,
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName,
            companyName,
            mobileNumber,
            address,
            orderStatus,
        });

        await newOrder.save();

        product.countInStock -= quantity;
        await product.save();

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock');

        const ordersWithStock = orders.map(order => ({
            ...order._doc,
            remainingStock: order.productId.countInStock
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save();
        }

        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process return for a POS order
export const returnPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Check if the order has already been returned
        if (order.returnStatus) {
            return res.status(400).json({ success: false, message: 'Order has already been returned' });
        }

        // Mark the order as returned
        order.returnStatus = true;
        order.returnDate = new Date();

        await order.save(); // Save the updated order

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing return:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process refund for a POS order
export const refundPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body;

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Check if the order has already been refunded
        if (order.refundAmount > 0) {
            return res.status(400).json({ success: false, message: 'Order has already been refunded' });
        }

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        order.refundAmount = refundAmount; // Set the refund amount
        await order.save(); // Save the updated order

        console.log(`Refund of ${refundAmount} processed for order ID: ${orderId}`);

        res.status(200).json({ success: true, message: 'Refund processed successfully', order });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};*/


import POSOrder from '../models/posOrderModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Create a new POS order
export const createPOSOrder = async (req, res) => {
    try {
        const requiredFields = ['productId', 'productName', 'storeName', 'price', 'quantity', 'salesperson', 'totalPrice', 'customerName', 'companyName', 'mobileNumber', 'address', 'orderStatus'];

        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Please provide all required fields: ${missingFields.join(', ')}`
            });
        }

        const { sku, productId, productName, storeName, price, quantity, salesperson, totalPrice, customerName, companyName, mobileNumber, address, orderStatus } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        if (product.countInStock < quantity) {
            return res.status(400).json({ success: false, message: `Insufficient stock for product: ${productName}` });
        }

        const newOrder = new POSOrder({
            sku,
            productId,
            productName,
            storeName,
            price,
            quantity,
            salesperson,
            totalPrice,
            customerName,
            companyName,
            mobileNumber,
            address,
            orderStatus,
        });

        await newOrder.save();

        product.countInStock -= quantity;
        await product.save();

        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error creating POS order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all POS orders
export const getPOSOrders = async (req, res) => {
    try {
        const orders = await POSOrder.find().populate('productId');
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get POS orders by store name (case-insensitive)
export const getPOSOrdersByStoreName = async (req, res) => {
    const { storeName } = req.params;
    try {
        const orders = await POSOrder.find({ storeName: { $regex: new RegExp(storeName, 'i') } })
            .populate('productId', 'countInStock');

        const ordersWithStock = orders.map(order => ({
            ...order._doc,
            remainingStock: order.productId.countInStock
        }));

        res.status(200).json({ success: true, orders: ordersWithStock });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a POS order
export const updatePOSOrder = async (req, res) => {
    try {
        const updatedOrder = await POSOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a POS order
export const deletePOSOrder = async (req, res) => {
    try {
        const deletedOrder = await POSOrder.findById(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        const product = await Product.findById(deletedOrder.productId);
        if (product) {
            product.countInStock += deletedOrder.quantity; // Restore the stock
            await product.save();
        }

        await POSOrder.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Process return for a POS order
export const returnPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Check if the order has already been returned
        if (order.returnStatus) {
            return res.status(400).json({ success: false, message: 'Order has already been returned' });
        }

        // Mark the order as returned
        order.returnStatus = true;
        order.returnDate = new Date();
        order.orderStatus = "Returned"; // Set the order status to 'Returned'

        await order.save(); // Save the updated order

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error processing return:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
// Process refund for a POS order
export const refundPOSOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { refundAmount } = req.body;

        const order = await POSOrder.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        // Check if the order has already been refunded
        if (order.refundAmount > 0) {
            return res.status(400).json({ success: false, message: 'Order has already been refunded' });
        }

        // Restore stock to the product
        const product = await Product.findById(order.productId);
        if (product) {
            product.countInStock += order.quantity; // Restore the stock
            await product.save(); // Save the updated product stock
        }

        order.refundAmount = refundAmount; // Set the refund amount
        order.orderStatus = 'Refunded'; // Set the order status to 'Refunded'
        await order.save(); // Save the updated order

        console.log(`Refund of ${refundAmount} processed for order ID: ${orderId}`);

        res.status(200).json({ 
            success: true, 
            message: 'Refund processed successfully', 
            order 
        });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};
