// models/Damage.js
/*finalimport mongoose from 'mongoose';

const damageSchema = new mongoose.Schema({
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
        enum: ['pending', 'complete'],
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    products: [
        {
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
                required: true
            },
            subtotal: {
                type: Number,
                required: true
            },
            note: {
                type: String,
                default: ''
            }
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Damage', damageSchema);old good working final without stirename */



// models/Damage.js
import mongoose from 'mongoose';

const damageSchema = new mongoose.Schema({
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
        enum: ['pending', 'complete'],
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    storeName: {  // Added storeName field
        type: String,
        required: true // Make it required if necessary
    },
    products: [
        {
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
                required: true
            },
            subtotal: {
                type: Number,
                required: true
            },
            note: {
                type: String,
                default: ''
            }
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Damage', damageSchema);
