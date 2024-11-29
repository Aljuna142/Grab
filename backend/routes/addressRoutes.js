/*const express = require('express');
const router = express.Router();
const { saveAddress, getUserAddresses } = require('../controllers/addressController');

// Route to save address
router.post('/', saveAddress);

// Route to fetch user addresses
router.get('/:userId', getUserAddresses);

module.exports = router;*/

/*000import express from 'express';
import { addAddress, getAddress } from '../controllers/addressController.js';

const router = express.Router();
//http://localhost:5000/api/v1/address
// Route for adding a new address
router.post('/address', addAddress);

// Route for getting addresses
router.get('/address', getAddress);

export default router;*/

/*o pkaimport express from 'express';
import { addAddress, getAddress, updateAddress, deleteAddress } from '../controllers/addressController.js';

const router = express.Router();

// Route for adding a new address
router.post('/address', addAddress);

// Route for getting addresses
router.get('/address', getAddress);

// Route for updating an address by ID
router.put('/address/:id', updateAddress);

// Route for deleting an address by ID
router.delete('/address/:id', deleteAddress);

export default router;o pka*/



// addressRoutes.js
import express from 'express';
import { addAddress, getAddresses, getAddressById, updateAddress, deleteAddress } from '../controllers/addressController.js';

const router = express.Router();

// Route to add a new address
router.post('/address', addAddress);

// Route to get all addresses
router.get('/addresses', getAddresses);

// Route to get an address by ID
router.get('/address/:id', getAddressById);

// Route to update an address by ID
router.put('/address/:id', updateAddress);

// Route to delete an address by ID
router.delete('/address/:id', deleteAddress);

export default router;


