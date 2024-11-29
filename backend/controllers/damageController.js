// controllers/damageController.js
/*final without storeName import Damage from '../models/Damage.js';

export const createDamage = async (req, res) => {
    try {
        const damage = new Damage(req.body);
        await damage.save();
        res.status(201).json({ success: true, damage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const getAllDamages = async (req, res) => {
    try {
        const damages = await Damage.find();
        res.status(200).json({ success: true, damages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getDamageById = async (req, res) => {
    try {
        const damage = await Damage.findById(req.params.id);
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, damage });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const updateDamage = async (req, res) => {
    try {
        const damage = await Damage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, damage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const deleteDamage = async (req, res) => {
    try {
        const damage = await Damage.findByIdAndDelete(req.params.id);
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, message: 'Damage deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};*/


// controllers/damageController.js
import Damage from '../models/Damage.js';

export const createDamage = async (req, res) => {
    try {
        // Ensure req.body contains storeName and other fields
        const { date, refNo, status, customerName, storeName, products } = req.body;

        if (!storeName) {
            return res.status(400).json({ success: false, error: 'Store name is required.' });
        }

        const damage = new Damage({
            date,
            refNo,
            status,
            customerName,
            storeName, // Ensure storeName is included
            products
        });
        
        await damage.save();
        res.status(201).json({ success: true, damage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


// controllers/damageController.js

export const getAllDamages = async (req, res) => {
    try {
        const { storeName } = req.query; // Get storeName from the query parameters

        let damages;
        if (storeName) {
            // If storeName is provided, filter damages by storeName
            damages = await Damage.find({ storeName });
        } else {
            // Otherwise, return all damages
            damages = await Damage.find();
        }

        res.status(200).json({ success: true, damages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getDamagesByStore = async (req, res) => {
    try {
        const { storeName } = req.params;

        console.log('Received storeName:', storeName); // Log the received store name

        if (!storeName) {
            return res.status(400).json({ success: false, error: 'Store name is required.' });
        }

        // Format the storeName: replace hyphens with spaces for display purposes
        const formattedStoreName = storeName.replace(/-/g, ' ');
        console.log('Formatted storeName for query:', formattedStoreName); // Log the formatted store name

        // Find damages for the specific store without modifying case sensitivity
        const damages = await Damage.find({ storeName: { $regex: new RegExp(`^${formattedStoreName}$`, 'i') } });

        console.log('Found damages:', damages); // Log the retrieved damages

        if (damages.length === 0) {
            return res.status(404).json({ success: false, message: `No damages found for store ${formattedStoreName}` });
        }

        res.status(200).json({ success: true, damages });
    } catch (error) {
        console.error('Error retrieving damages:', error); // Log any errors that occur
        res.status(500).json({ success: false, error: error.message });
    }
};


/*export const getDamagesByStore = async (req, res) => {
    try {
        const { storeName } = req.params;

        if (!storeName) {
            return res.status(400).json({ success: false, error: 'Store name is required.' });
        }

        // Format the storeName: replace hyphens with spaces for display purposes
        const formattedStoreName = storeName.replace(/-/g, ' ');

        // Find damages for the specific store without modifying case sensitivity
        const damages = await Damage.find({ storeName: { $regex: new RegExp(`^${formattedStoreName}$`, 'i') } });

        if (damages.length === 0) {
            return res.status(404).json({ success: false, message: `No damages found for store ${formattedStoreName}` });
        }

        res.status(200).json({ success: true, damages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};*/








/*export const getAllDamages = async (req, res) => {
    try {
        const damages = await Damage.find();
        res.status(200).json({ success: true, damages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};*/

export const getDamageById = async (req, res) => {
    try {
        const damage = await Damage.findById(req.params.id);
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, damage });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const updateDamage = async (req, res) => {
    try {
        const damage = await Damage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, damage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const deleteDamage = async (req, res) => {
    try {
        const damage = await Damage.findByIdAndDelete(req.params.id);
        if (!damage) {
            return res.status(404).json({ success: false, error: 'Damage not found' });
        }
        res.status(200).json({ success: true, message: 'Damage deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

