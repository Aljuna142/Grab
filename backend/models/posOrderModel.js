/*pakka import mongoose from 'mongoose';

const posOrderSchema = new mongoose.Schema({
    sku: { type: String, required: false },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    productName: { type: String, required: true }, // Include product name
    storeName: { type: String, required: true }, // Store name instead of ID
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    salesperson: { type: String, required: true },
    customerName: { type: String, required: false }, // Optional
    companyName: { type: String, required: false }, // Optional
    mobileNumber: { type: String, required: false }, // Optional
    address: { type: String, required: false }, // Optional
    orderStatus: { type: String, default: 'Pending' },
    paymentStatus: { type: String, default: 'Cash' },
    dateTime: { type: Date, default: Date.now },
    discount: { type: Number, default: 0, required: false }, // Optional
    totalPrice: { type: Number, required: true },
});

export default mongoose.model('POSOrder', posOrderSchema);pakka*/





import mongoose from 'mongoose';

const posOrderSchema = new mongoose.Schema({
    sku: { type: String, required: false },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    productName: { type: String, required: true }, // Include product name
    storeName: { type: String, required: true }, // Store name instead of ID
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    salesperson: { type: String, required: true },
    customerName: { type: String, required: false }, // Optional
    companyName: { type: String, required: false }, // Optional
    mobileNumber: { type: String, required: false }, // Optional
    address: { type: String, required: false }, // Optional
    orderStatus: { type: String, default: 'Pending' },
    paymentStatus: { type: String, default: 'Cash' },
    dateTime: { type: Date, default: Date.now },
    discount: { type: Number, default: 0, required: false }, // Optional
    totalPrice: { type: Number, required: true },
    
    // New fields for returns and refunds
    returnStatus: { type: Boolean, default: false }, // To indicate if the order has been returned
    refundAmount: { type: Number, default: 0 }, // Amount to be refunded
    returnDate: { type: Date, required: false } // Date when the return was processed
});

export default mongoose.model('POSOrder', posOrderSchema);
