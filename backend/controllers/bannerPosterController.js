

import BannerPoster from '../models/bannerPosterModel.js';

// Get current banners and posters
export const getBannerPoster = async (req, res) => {
  try {
    const bannerPoster = await BannerPoster.findOne();
    if (!bannerPoster) {
      return res.status(404).json({ message: 'No banner or poster found' });
    }
    res.status(200).json(bannerPoster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update banners and posters
export const updateBannerPoster = async (req, res) => {
  try {
    const { banners, posters } = req.body;  // Expecting banners and posters paths in request body

    let bannerPoster = await BannerPoster.findOne();

    if (!bannerPoster) {
      bannerPoster = new BannerPoster({
        banners: banners || [],  // Initialize with provided banner paths
        posters: posters || [],  // Initialize with provided poster paths
      });
    } else {
      // Update existing entries
      bannerPoster.banners = banners || bannerPoster.banners;
      bannerPoster.posters = posters || bannerPoster.posters;
    }

    await bannerPoster.save();

    // Emit event through WebSocket for real-time update
    req.io.emit('bannerPosterUpdated', {
      banners: bannerPoster.banners,
      posters: bannerPoster.posters,
      updatedAt: new Date(),
    });

    res.status(200).json({ message: 'Banner and Poster updated successfully', bannerPoster });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
