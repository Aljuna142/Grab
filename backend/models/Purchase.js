/*final without storenameimport mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the Purchase Schema
const purchaseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    refNo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'order', 'received'],
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    attachment: {
        type: String // This will be a URL or path to the uploaded file
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid'],
        required: true
    },
    products: [{
        product: {
            type: String,
            required: true
        },
        unitCost: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            default: 0
        },
        taxes: {
            type: String,
            enum: ['exclusive', 'inclusive'],
            default: 'exclusive'
        },
        subtotal: {
            type: Number,
            required: true
        },
        note: {
            type: String
        }
    }]
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Export the model
export default mongoose.model('Purchase', purchaseSchema);final */



import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the Purchase Schema
const purchaseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    refNo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'order', 'received'],
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    attachment: {
        type: String // This will be a URL or path to the uploaded file
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid'],
        required: true
    },
    storeName: { // Add the storeName field
        type: String,
        required: true // Set to true if you want it to be required
    },
    products: [{
        product: {
            type: String,
            required: true
        },
        unitCost: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            default: 0
        },
        taxes: {
            type: String,
            enum: ['exclusive', 'inclusive'],
            default: 'exclusive'
        },
        subtotal: {
            type: Number,
            required: true
        },
        note: {
            type: String
        }
    }]
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Export the model
export default mongoose.model('Purchase', purchaseSchema);


