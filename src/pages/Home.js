
// src/pages/Home.js

// src/pages/Home.js

import React from 'react';
import Banners from '../components/banners/Banner'; // Import Banners component



const Home = () => {
    return (
        <div>
           <Banners />
            <div className="main-content">
                <h1>Welcome to Our Store!</h1>
                {/* Add more content as needed */}
            </div>
        </div>
    );
}

export default Home;
