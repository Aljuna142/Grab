import mongoose from 'mongoose';

const userManagementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'employee', 'customer'],
        default: 'customer'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserManagement = mongoose.model('UserManagement', userManagementSchema);

export default UserManagement;
