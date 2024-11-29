import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Store from '../models/Store.js'; // Import Store model

dotenv.config(); // Load environment variables

const seedStores = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Check if default stores already exist
        const existingStores = await Store.find({
            name: { $in: ['Crown Excel', 'Al-Jasara', 'WH1'] },
        });

        if (existingStores.length === 0) {
            const defaultStores = [
                { name: 'Crown Excel', path: '/pos/crown-excel', color: 'red' },
                { name: 'Al-Jasara', path: '/pos/al-jasara', color: 'blue' },
                { name: 'WH1', path: '/pos/wh1', color: 'black' },
            ];

            // Insert default stores
            await Store.insertMany(defaultStores);
            console.log('Default stores added');
        } else {
            console.log('Default stores already exist');
        }

        mongoose.connection.close(); // Close DB connection after seeding
    } catch (error) {
        console.error('Error seeding stores:', error);
        process.exit(1); // Exit with failure
    }
};

// Run the seeding function
seedStores();
