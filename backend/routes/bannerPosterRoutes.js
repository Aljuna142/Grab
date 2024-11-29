

import express from 'express';
import { getBannerPoster, updateBannerPoster } from '../controllers/bannerPosterController.js';

const router = express.Router();

// Define routes for getting and updating banners and posters
router.route('/')
  .get(getBannerPoster)  // Fetch current banners and posters
  .put(updateBannerPoster);  // Update banners and posters by passing file paths

export default router;
