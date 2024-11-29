// routes/inquiryRoutes.js
import express from 'express';
import Inquiry from '../models/inquiryModel.js';

const router = express.Router();

// POST endpoint to create a new inquiry
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    const savedInquiry = await inquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
