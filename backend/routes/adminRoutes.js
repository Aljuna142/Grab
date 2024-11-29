import express from 'express';
import {
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from '../controllers/adminController.js';

const router = express.Router();

// Get all admins
router.get('/', getAdmins);

// Create a new admin
router.post('/', createAdmin);

// Update an admin
router.put('/:id', updateAdmin);

// Delete an admin
router.delete('/:id', deleteAdmin);

export default router;
