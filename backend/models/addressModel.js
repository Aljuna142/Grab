

/*without db import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String, // Changed from Number to String
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  nearbyLandmark: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String, // Changed from Number to String
  },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);
export default Address; // Ensure default export is present*/
// addressModel.js




import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  customerName: String,
  mobileNumber: String,
  email: String,
  street: String,
  city: String,
  country: String,
  postalCode: String,
});

const Address = mongoose.model('Address', addressSchema);

export default Address; // ES Module default export
