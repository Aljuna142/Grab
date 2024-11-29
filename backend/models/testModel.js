import mongoose from 'mongoose';
import User from './models/user.js'; // Adjust path if needed

mongoose.connect('mongodb://localhost/yourdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const testUser = new User({
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123'
});

testUser.save()
    .then(() => console.log('User saved successfully'))
    .catch(err => console.error('Error saving user:', err));
