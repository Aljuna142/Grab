import Admin from '../models/adminModel.js';

// Get all admins
export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new admin
export const createAdmin = async (req, res) => {
    const { name, email } = req.body;

    // Check if email is unique
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const admin = new Admin({ name, email });

    try {
        const newAdmin = await admin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an admin
export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, { name, email }, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an admin
export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
