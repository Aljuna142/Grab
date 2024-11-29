import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userManagementController.js';

const router = express.Router();

// Route for getting all users
router.get('/', getAllUsers);

// Route for getting a single user by ID
router.get('/:id', getUserById);

// Route for creating a new user
router.post('/', createUser);

// Route for updating a user
router.patch('/:id', updateUser);

// Route for deleting a user
router.delete('/:id', deleteUser);

export default router;
