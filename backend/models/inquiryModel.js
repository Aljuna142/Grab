



// models/inquiryModel.js
import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
}, { timestamps: true }); // Optional: adds createdAt and updatedAt timestamps

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;
