/*import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store
export const getSalesByStore = async (req, res) => {
  try {
    // Fetch sales for the specific store (storeName) and populate the product details
    const sales = await Sale.find({ store: req.params.storeName }).populate('product');
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createSale = async (req, res) => {
    const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
    const store = req.params.storeName;

    try {
        // Fetch the product to get the current stock level and other details
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: `Product with ID ${productId} not found` });
        }

        // Check stock availability
        if (product.countInStock < quantity) {
            return res.status(400).json({ message: 'Insufficient stock' });
        }

        // Create a new sale for the given store and sale details
        const sale = new Sale({
            store,
            product: productId,
            productName: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        });

        // Save the sale entry to the database
        const savedSale = await sale.save();

        // Update the product stock after saving the sale
        product.countInStock -= quantity;
        await product.save();

        // Populate the product details to include product name
        const populatedSale = await Sale.findById(savedSale._id).populate('product');

        res.status(201).json(populatedSale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    // Fetch all sales for the given store
    const sales = await Sale.find({ store: req.params.storeName });
    
    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/





 /*import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store (case-insensitive storeName match)
export const getSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch sales for the specific store (case-insensitive)
    const sales = await Sale.find({ store: { $regex: new RegExp(`^${storeName}$`, 'i') } }).populate('product');

    // If no sales found, return a message
    if (sales.length === 0) {
      return res.status(404).json({ message: `No sales found for store: ${storeName}` });
    }

    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new sale for a store
export const createSale = async (req, res) => {
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
  const store = req.params.storeName;

  try {
    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    // Check stock availability
    if (product.countInStock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Create a new sale for the given store and sale details
    const sale = new Sale({
      store,
      product: productId,
      productName: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      salesperson,
      customer,
      paymentStatus,
      dateTime,
    });

    // Save the sale entry to the database
    const savedSale = await sale.save();

    // Update the product stock after saving the sale
    product.countInStock -= quantity;
    await product.save();

    // Populate the product details to include product name
    const populatedSale = await Sale.findById(savedSale._id).populate('product');

    res.status(201).json(populatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch all sales for the given store (case-insensitive)
    const sales = await Sale.find({ store: { $regex: new RegExp(`^${storeName}$`, 'i') } });

    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);

    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};storenaem*/

/*output come but store frontend useds storename import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store (case-insensitive store match)
export const getSalesByStore = async (req, res) => {
  try {
    const store = req.params.store.replace(/-/g, ' '); // Replace hyphens with spaces
    console.log(`Fetching sales for store: ${store}`);

    // Fetch sales for the specific store (case-insensitive)
    const sales = await Sale.find({ store: { $regex: new RegExp(`^${store}$`, 'i') } }).populate('product');

    // If no sales found, return a message
    if (sales.length === 0) {
      console.log(`No sales found for store: ${store}`);
      return res.status(404).json({ message: `No sales found for store: ${store}` });
    }

    console.log(`Sales found for store ${store}:`, sales);
    res.status(200).json(sales);
  } catch (error) {
    console.error(`Error fetching sales for store ${store}:`, error.message);
    res.status(500).json({ message: error.message });
  }
};

// Create a new sale for a store
export const createSale = async (req, res) => {
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
  const store = req.params.store.replace(/-/g, ' '); // Replace hyphens with spaces

  try {
    console.log(`Creating a new sale for store: ${store}`);
    console.log(`Fetching product with ID: ${productId}`);

    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      console.log(`Product with ID ${productId} not found`);
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    console.log(`Product found: ${product.name}, Stock: ${product.countInStock}`);

    // Check stock availability
    if (product.countInStock < quantity) {
      console.log('Insufficient stock');
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Create a new sale for the given store and sale details
    const sale = new Sale({
      store,
      product: productId,
      productName: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      salesperson,
      customer,
      paymentStatus,
      dateTime,
    });

    // Save the sale entry to the database
    const savedSale = await sale.save();
    console.log('Sale saved:', savedSale);

    // Update the product stock after saving the sale
    product.countInStock -= quantity;
    await product.save();
    console.log('Product stock updated:', product.countInStock);

    // Populate the product details to include product name
    const populatedSale = await Sale.findById(savedSale._id).populate('product');
    console.log('Populated sale details:', populatedSale);

    res.status(201).json(populatedSale);
  } catch (error) {
    console.error(`Error creating sale for store ${store}:`, error.message);
    res.status(400).json({ message: error.message });
  }
};

// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    const store = req.params.store.replace(/-/g, ' '); // Replace hyphens with spaces
    console.log(`Calculating total sales for store: ${store}`);

    // Fetch all sales for the given store (case-insensitive)
    const sales = await Sale.find({ store: { $regex: new RegExp(`^${store}$`, 'i') } });

    if (sales.length === 0) {
      console.log(`No sales found for store: ${store}`);
      return res.status(404).json({ message: `No sales found for store: ${store}` });
    }

    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
    console.log(`Total sales for store ${store}: $${totalSales}`);

    res.status(200).json({ totalSales });
  } catch (error) {
    console.error(`Error calculating total sales for store ${store}:`, error.message);
    res.status(500).json({ message: error.message });
  }
};*/

/* pakkak code working import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store (case-insensitive storeName match)
export const getSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch sales for the specific store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } }).populate('product');

    // If no sales found, return a message
    if (sales.length === 0) {
      return res.status(404).json({ message: `No sales found for store: ${storeName}` });
    }

    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new sale for a store
export const createSale = async (req, res) => {
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
  const storeName = req.params.storeName; // Use storeName instead of store

  try {
    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    // Check stock availability
    if (product.countInStock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Create a new sale for the given store and sale details
    const sale = new Sale({
      storeName, // Use storeName instead of store
      product: productId,
      productName: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      salesperson,
      customer,
      paymentStatus,
      dateTime,
    });

    // Save the sale entry to the database
    const savedSale = await sale.save();

    // Update the product stock after saving the sale
    product.countInStock -= quantity;
    await product.save();

    // Populate the product details to include product name
    const populatedSale = await Sale.findById(savedSale._id).populate('product');

    res.status(201).json(populatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch all sales for the given store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } });

    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);

    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; pakka code working */





/*pakka import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store (case-insensitive storeName match)
export const getSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch sales for the specific store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } }).populate('product');

    // If no sales found, return a message
    if (sales.length === 0) {
      return res.status(404).json({ message: `No sales found for store: ${storeName}` });
    }

    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new sale for a store
export const createSale = async (req, res) => {
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
  const storeName = req.params.storeName; // Use storeName instead of store

  try {
    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    // Check stock availability
    if (product.countInStock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Create a new sale for the given store and sale details
    const sale = new Sale({
      storeName, // Use storeName instead of store
      product: productId,
      productName: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      salesperson,
      customer,
      paymentStatus,
      dateTime,
    });

    // Save the sale entry to the database
    const savedSale = await sale.save();

    // Update the product stock after saving the sale
    product.countInStock -= quantity;
    await product.save();

    // Populate the product details to include product name
    const populatedSale = await Sale.findById(savedSale._id).populate('product');

    res.status(201).json(populatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch all sales for the given store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } });

    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);

    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};pakka*/



import Sale from '../models/saleModel.js';
import Product from '../models/Product.js'; // Import your Product model

// Get all sales for a store (case-insensitive storeName match)
export const getSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch sales for the specific store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } })
      .populate('product');

    // If no sales found, return a message
    if (sales.length === 0) {
      return res.status(404).json({ message: `No sales found for store: ${storeName}` });
    }

    // Populate remaining stock for each sale
    const salesWithStock = await Promise.all(
      sales.map(async (sale) => {
        const product = await Product.findById(sale.product);
        return {
          ...sale.toObject(),
          remainingStock: product ? product.countInStock : 0, // Add remaining stock
        };
      })
    );

    res.status(200).json(salesWithStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Create a new sale for a store
export const createSale = async (req, res) => {
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;
  const storeName = req.params.storeName; // Use storeName instead of store

  try {
    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    // Check stock availability
    if (product.countInStock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Calculate remaining stock after the sale
    const remainingStock = product.countInStock - quantity;

    // Create a new sale for the given store and sale details
    const sale = new Sale({
      storeName, // Use storeName instead of store
      product: productId,
      productName: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      salesperson,
      customer,
      paymentStatus,
      dateTime,
      remainingStock, // Add remaining stock to the sale
    });

    // Save the sale entry to the database
    const savedSale = await sale.save();

    // Update the product stock after saving the sale
    product.countInStock -= quantity;
    await product.save();

    // Populate the product details to include product name
    const populatedSale = await Sale.findById(savedSale._id).populate('product');

    res.status(201).json(populatedSale); // Return the created sale with product details
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Get total sales for a store
export const getTotalSalesByStore = async (req, res) => {
  try {
    const storeName = req.params.storeName;

    // Fetch all sales for the given store (case-insensitive)
    const sales = await Sale.find({ storeName: { $regex: new RegExp(`^${storeName}$`, 'i') } });

    // Calculate total sales by summing up price * quantity for each sale
    const totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);

    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a sale for a store
export const updateSale = async (req, res) => {
  const { storeName, saleId } = req.params; // Get storeName from params
  const { productId, quantity, salesperson, customer, paymentStatus, dateTime } = req.body;

  try {
    // Fetch the existing sale
    const sale = await Sale.findById(saleId);

    if (!sale) {
      return res.status(404).json({ message: `Sale with ID ${saleId} not found` });
    }

    // Check if the sale belongs to the specified store
    if (sale.storeName.toLowerCase() !== storeName.toLowerCase()) {
      return res.status(403).json({ message: `Sale does not belong to store: ${storeName}` });
    }

    // Fetch the product to get the current stock level and other details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: `Product with ID ${productId} not found` });
    }

    // Calculate the stock difference
    const stockDifference = quantity - sale.quantity;

    // Check stock availability
    if (product.countInStock < stockDifference) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Update the sale details
    sale.product = productId;
    sale.productName = product.name;
    sale.price = product.price;
    sale.originalPrice = product.originalPrice;
    sale.quantity = quantity;
    sale.salesperson = salesperson;
    sale.customer = customer;
    sale.paymentStatus = paymentStatus;
    sale.dateTime = dateTime;

    // Save the updated sale
    const updatedSale = await sale.save();

    // Update the product stock
    product.countInStock -= stockDifference;
    await product.save();

    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Helper function to format store names
const formatStoreName = (name) => {
  return name.replace(/-/g, ' ').toLowerCase();
};

// Delete a sale for a store
export const deleteSale = async (req, res) => {
  const { storeName, saleId } = req.params; // Get storeName and saleId from params

  try {
    // Fetch the existing sale
    const sale = await Sale.findById(saleId);

    if (!sale) {
      return res.status(404).json({ message: `Sale with ID ${saleId} not found.` });
    }

    // Check if the sale belongs to the specified store
    if (formatStoreName(sale.storeName) !== formatStoreName(storeName)) {
      return res.status(403).json({ message: `Sale does not belong to store: ${storeName}.` });
    }

    // Fetch the product to update the stock
    const product = await Product.findById(sale.product);

    // Increase the product stock since the sale is being deleted
    if (product) {
      product.countInStock += sale.quantity;
      await product.save();
    } else {
      console.warn(`Product with ID ${sale.product} not found, unable to update stock.`);
    }

    // Delete the sale
    await Sale.findByIdAndDelete(saleId);

    return res.status(200).json({ message: `Sale with ID ${saleId} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting sale:', error); // Log the error for internal debugging
    return res.status(500).json({ message: 'An error occurred while deleting the sale.' });
  }
};


// Delete a sale for a store
// Delete a sale for a store
/*export const deleteSale = async (req, res) => {
  const { storeName, saleId } = req.params; // Get storeName from params

  try {
    // Fetch the existing sale
    const sale = await Sale.findById(saleId);

    if (!sale) {
      return res.status(404).json({ message: `Sale with ID ${saleId} not found.` });
    }

    // Check if the sale belongs to the specified store
    if (sale.storeName.toLowerCase() !== storeName.toLowerCase()) {
      return res.status(403).json({ message: `Sale does not belong to store: ${storeName}.` });
    }

    // Fetch the product to update the stock
    const product = await Product.findById(sale.product);

    // Increase the product stock since the sale is being deleted
    if (product) {
      product.countInStock += sale.quantity;
      await product.save();
    } else {
      console.warn(`Product with ID ${sale.product} not found, unable to update stock.`);
    }

    // Delete the sale
    await Sale.findByIdAndDelete(saleId);

    return res.status(200).json({ message: `Sale with ID ${saleId} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting sale:', error); // Log the error for internal debugging
    return res.status(500).json({ message: 'An error occurred while deleting the sale.' });
  }
};*/
