import UserManagement from '../models/UserManagement.js';

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserManagement.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await UserManagement.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new user
export const createUser = async (req, res) => {
    const { name, email, role = 'customer' } = req.body;

    const user = new UserManagement({
        name,
        email,
        role
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const user = await UserManagement.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { name, email, role, isActive } = req.body;

        if (name) user.name = name;
        if (email) user.email = email;
        if (role) user.role = role;
        if (isActive !== undefined) user.isActive = isActive;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const user = await UserManagement.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
