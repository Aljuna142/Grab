import express from 'express';
import {
    getStores,
    createStore,
    updateStore,
    deleteStore
} from '../controllers/storeController.js';

const router = express.Router();

// Get all stores
router.get('/', getStores);

// Create a new store
router.post('/', createStore);

// Update an existing store
router.put('/:id', updateStore);

// Delete a store
router.delete('/:id', deleteStore);

export default router;

