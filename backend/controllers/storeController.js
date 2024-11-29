import Store from '../models/Store.js';

// Get all stores
//GET http://localhost:5000/api/v1/stores
export const getStores = async (req, res) => {
    try {
        const stores = await Store.find();
        res.json(stores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new store
 //http://localhost:5000/api/v1/stores
export const createStore = async (req, res) => {
    const { name, path, color } = req.body;
    try {
        const newStore = new Store({ name, path, color });
        await newStore.save();
        res.status(201).json(newStore);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing store


//PUT http://localhost:5000/api/v1/stores/:id

export const updateStore = async (req, res) => {
    const { id } = req.params;
    const { name, path, color } = req.body;
    try {
        const updatedStore = await Store.findByIdAndUpdate(
            id,
            { name, path, color },
            { new: true }
        );
        if (!updatedStore) {
            return res.status(404).json({ message: 'Store not found' });
        }
        res.json(updatedStore);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a store
//DELETE http://localhost:5000/api/v1/stores/:id
export const deleteStore = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStore = await Store.findByIdAndDelete(id);
        if (!deletedStore) {
            return res.status(404).json({ message: 'Store not found' });
        }
        res.json({ message: 'Store deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



