import mongoose from 'mongoose';

const bannerPosterSchema = new mongoose.Schema({
  banners: [
    {
      imageUrl: { type: String, required: true },
      position: { type: String, enum: ['top', 'center', 'bottom'], required: true },
      active: { type: Boolean, default: true },
    },
  ],
  posters: [
    {
      imageUrl: { type: String, required: true },
      position: { type: String, enum: ['left', 'right'], required: true },
      active: { type: Boolean, default: true },
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BannerPoster = mongoose.model('BannerPoster', bannerPosterSchema);
export default BannerPoster;
