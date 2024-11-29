import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // Add any other fields necessary for your project
});

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;
