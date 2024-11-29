import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
        unique: true,
    },
    color: {
        type: String,
        
    },
});

const Store = mongoose.model('Store', storeSchema);

export default Store;


