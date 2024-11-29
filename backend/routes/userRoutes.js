// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/profile', auth, getUserData);

module.exports = router;




