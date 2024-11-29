// purchaseController.js
/*import Purchase from '../models/Purchase.js';

// Create a new purchase
export const createPurchase = async (req, res) => {
    console.log('Create Purchase Handler');
    console.log('Request Body:', req.body);

    console.log('Create Purchase Request Body:', req.body);
    try {
        const newPurchase = new Purchase(req.body);
        await newPurchase.save();
        res.status(201).json({
            success: true,
            data: newPurchase,
        });
    } catch (error) {
        console.error('Create Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Get all purchases
export const getAllPurchases = async (req, res) => {
    console.log('Get All Purchases Request');
    try {
        const purchases = await Purchase.find();
        res.status(200).json({
            success: true,
            data: purchases,
        });
    } catch (error) {
        console.error('Get All Purchases Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};*/

// purchaseController.js










/*final without storeName import Purchase from '../models/Purchase.js';



export const createPurchase = async (req, res) => {
    console.log('Create Purchase Handler');
    console.log('Request Body:', req.body); // Log the request body

    // Log data received in the backend
    console.log('Received Data:', req.body);

    // Directly use req.body to get purchase data
    const { date, refNo, status, supplier, paymentStatus, products } = req.body;

    // Validate presence of required fields
    if (!date || !refNo || !status || !supplier || !paymentStatus|| !products) {
        return res.status(400).json({
            success: false,
            error: 'Missing required fields: ' +
                `${!date ? 'date, ' : ''}` +
                `${!refNo ? 'refNo, ' : ''}` +
                `${!status ? 'status, ' : ''}` +
                `${!supplier ? 'supplier, ' : ''}` +
                `${!paymentStatus ? 'paymentStatus' : ''}`
        });
    }

    // Validate products field
    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Products field must be a non-empty array.'
        });
    }

    // Validate each product in the array
    for (const product of products) {
        if (!product.product || typeof product.product !== 'string') {
            return res.status(400).json({ success: false, error: 'Each product must have a valid product name.' });
        }
        if (typeof product.unitCost !== 'number' || isNaN(product.unitCost)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid unitCost (number).' });
        }
        if (typeof product.qty !== 'number' || isNaN(product.qty)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid qty (number).' });
        }
        if (typeof product.subtotal !== 'number' || isNaN(product.subtotal)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid subtotal (number).' });
        }
    }

    try {
        const newPurchase = new Purchase({
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            products
        });

        await newPurchase.save();

        res.status(201).json({
            success: true,
            data: newPurchase
        });
    } catch (error) {
        console.error('Create Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};







// Get all purchases
export const getAllPurchases = async (req, res) => {
    console.log('Get All Purchases Request');
    try {
        const purchases = await Purchase.find();

        res.status(200).json({
            success: true,
            data: purchases,
        });
    } catch (error) {
        console.error('Get All Purchases Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};




// Get a single purchase by ID
export const getPurchaseById = async (req, res) => {
    console.log('Get Purchase By ID:', req.params.id);
    try {
        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        console.error('Get Purchase By ID Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Update a purchase
export const updatePurchase = async (req, res) => {
    console.log('Update Purchase ID:', req.params.id, 'Body:', req.body);
    try {
        const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPurchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            data: updatedPurchase,
        });
    } catch (error) {
        console.error('Update Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete a purchase
export const deletePurchase = async (req, res) => {
    console.log('Delete Purchase ID:', req.params.id);
    try {
        const deletedPurchase = await Purchase.findByIdAndDelete(req.params.id);
        if (!deletedPurchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Purchase deleted successfully',
        });
    } catch (error) {
        console.error('Delete Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};final code without storeName*/


import Purchase from '../models/Purchase.js';

export const createPurchase = async (req, res) => {
    console.log('Create Purchase Handler');
    console.log('Request Body:', req.body); // Log the request body

    // Log data received in the backend
    console.log('Received Data:', req.body);

    // Directly use req.body to get purchase data
    const { date, refNo, status, supplier, paymentStatus, products, storeName } = req.body;

    // Validate presence of required fields
    if (!date || !refNo || !status || !supplier || !paymentStatus || !products || !storeName) {
        return res.status(400).json({
            success: false,
            error: 'Missing required fields: ' +
                `${!date ? 'date, ' : ''}` +
                `${!refNo ? 'refNo, ' : ''}` +
                `${!status ? 'status, ' : ''}` +
                `${!supplier ? 'supplier, ' : ''}` +
                `${!paymentStatus ? 'paymentStatus, ' : ''}` +
                `${!storeName ? 'storeName' : ''}`
        });
    }

    // Validate products field
    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Products field must be a non-empty array.'
        });
    }

    // Validate each product in the array
    for (const product of products) {
        if (!product.product || typeof product.product !== 'string') {
            return res.status(400).json({ success: false, error: 'Each product must have a valid product name.' });
        }
        if (typeof product.unitCost !== 'number' || isNaN(product.unitCost)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid unitCost (number).' });
        }
        if (typeof product.qty !== 'number' || isNaN(product.qty)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid qty (number).' });
        }
        if (typeof product.subtotal !== 'number' || isNaN(product.subtotal)) {
            return res.status(400).json({ success: false, error: 'Each product must have a valid subtotal (number).' });
        }
    }

    try {
        const newPurchase = new Purchase({
            date,
            refNo,
            status,
            supplier,
            paymentStatus,
            storeName, // Include storeName here
            products
        });

        await newPurchase.save();

        res.status(201).json({
            success: true,
            data: newPurchase
        });
    } catch (error) {
        console.error('Create Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const getPurchasesByStoreName = async (req, res) => {
    try {
        const { storeName } = req.params;

        console.log('Received storeName:', storeName); // Log the received store name

        if (!storeName) {
            console.log('No store name provided'); // Log if no store name is provided
            return res.status(400).json({ success: false, error: 'Store name is required.' });
        }

        // Format the storeName: replace hyphens with spaces for display purposes
        const formattedStoreName = storeName.replace(/-/g, ' ');
        console.log('Formatted storeName for query:', formattedStoreName); // Log the formatted store name

        // Find purchases for the specific store, case insensitive
        const purchases = await Purchase.find({ storeName: { $regex: new RegExp(`^${formattedStoreName}$`, 'i') } });

        console.log('Found purchases:', purchases); // Log the retrieved purchases

        if (purchases.length === 0) {
            console.log(`No purchases found for store ${formattedStoreName}`); // Log if no purchases are found
            return res.status(404).json({ success: false, message: `No purchases found for store ${formattedStoreName}` });
        }

        res.status(200).json({ success: true, purchases });
    } catch (error) {
        console.error('Error retrieving purchases:', error); // Log any errors that occur
        res.status(500).json({ success: false, error: error.message });
    }
};



/*export const getPurchasesByStoreName = async (req, res) => {
    try {
        const { storeName } = req.params;

        console.log('Received storeName:', storeName); // Log the received store name

        if (!storeName) {
            return res.status(400).json({ success: false, error: 'Store name is required.' });
        }

        // Format the storeName: replace hyphens with spaces for display purposes
        const formattedStoreName = storeName.replace(/-/g, ' ');
        console.log('Formatted storeName for query:', formattedStoreName); // Log the formatted store name

        // Find purchases for the specific store, case insensitive
        const purchases = await Purchase.find({ storeName: { $regex: new RegExp(`^${formattedStoreName}$`, 'i') } });

        console.log('Found purchases:', purchases); // Log the retrieved purchases

        if (purchases.length === 0) {
            return res.status(404).json({ success: false, message: `No purchases found for store ${formattedStoreName}` });
        }

        res.status(200).json({ success: true, purchases });
    } catch (error) {
        console.error('Error retrieving purchases:', error); // Log any errors that occur
        res.status(500).json({ success: false, error: error.message });
    }
};*/

// Get all purchases
/*export const getAllPurchases = async (req, res) => {
    console.log('Get All Purchases Request');
    try {
        const purchases = await Purchase.find();

        res.status(200).json({
            success: true,
            data: purchases,
        });
    } catch (error) {
        console.error('Get All Purchases Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};*/

// Get all purchases
export const getAllPurchases = async (req, res) => {
    console.log('Get All Purchases Request'); // Log when the request is received

    try {
        const purchases = await Purchase.find(); // Fetch all purchases
        console.log('Fetched Purchases:', purchases); // Log the fetched purchases

        res.status(200).json({
            success: true,
            data: purchases,
        });
    } catch (error) {
        console.error('Get All Purchases Error:', error.message); // Log the error message
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};




// Get a single purchase by ID
export const getPurchaseById = async (req, res) => {
    console.log('Get Purchase By ID:', req.params.id);
    try {
        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        console.error('Get Purchase By ID Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Update a purchase
export const updatePurchase = async (req, res) => {
    console.log('Update Purchase ID:', req.params.id, 'Body:', req.body);
    try {
        const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPurchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            data: updatedPurchase,
        });
    } catch (error) {
        console.error('Update Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete a purchase
export const deletePurchase = async (req, res) => {
    console.log('Delete Purchase ID:', req.params.id);
    try {
        const deletedPurchase = await Purchase.findByIdAndDelete(req.params.id);
        if (!deletedPurchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Purchase deleted successfully',
        });
    } catch (error) {
        console.error('Delete Purchase Error:', error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

