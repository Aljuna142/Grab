import mongoose from 'mongoose';

// Define the Sales Schema
const saleSchema = new mongoose.Schema({
  storeName: { 
    type: String, 
    required: false 
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  productName: { 
    type: String, 
    required: true 
  }, // Store the product name separately
  price: { 
    type: Number, 
    required: true 
  },
  originalPrice: { 
    type: Number 
  },
  quantity: { 
    type: Number, 
    required: true, 
    min: 1 
  },
  salesperson: { 
    type: String, 
    required: true 
  },
  customer: { 
    type: String 
  },
  paymentStatus: { 
    type: String, 
    enum: ['Cash', 'Cheque', 'Credit'], 
    required: true 
  },
  dateTime: { 
    type: Date, 
    required: true, 
    default: Date.now 
  },
});

// Create the Sale model
const Sale = mongoose.model('Sale', saleSchema);

export default Sale;
