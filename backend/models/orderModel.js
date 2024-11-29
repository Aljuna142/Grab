
/*import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const orderSchema = new Schema({
  orderItems: [orderItemSchema],
  deliveryMethod: {
    type: String,
    required: true
  },
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    apartment: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    type: String,
    required: true
  },
  itemsPrice: {
    type: Number,
    required: true
  },
  shippingPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;100*/



/*import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const orderSchema = new Schema({
  orderItems: [orderItemSchema],
  deliveryMethod: {
    type: String,
    required: true
  },
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    apartment: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    type: String,
    required: true
  },
  itemsPrice: {
    type: Number,
    required: true
  },
  shippingPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;*/



import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const orderSchema = new Schema({
  orderItems: [orderItemSchema],
  deliveryMethod: {
    type: String,
    required: true
  },
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    apartment: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    type: String,
    required: true
  },
  itemsPrice: {
    type: Number,
    required: true
  },
  shippingPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'Complete', 'Canceled', 'Delivered', 'Return', 'Refund'],
    default: 'Pending'
  },
  returnRequested: {
    type: Boolean,
    default: false
  },
  refundRequested: {
    type: Boolean,
    default: false
  },
  returnReason: {
    type: String,
    default: ''
  },
  refundReason: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;


