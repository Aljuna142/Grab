
// src/pages/Home.js

// src/pages/Home.js
/*import React from 'react';
import Banners from '../components/banners/Banner'; // Import Banners component
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Import the new banner image
import Category from '../components/category/Category'; // Import Category component
import Brands from '../components/brands/Brands'; // Import Brands component
import ProductCard from '../components/cards/ProductCard'; // Import ProductCard component

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Example image
// Import other product images as needed

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image

    return (
        <div>
            <Banners imageUrls={initialBannerImages} />
            <Category /> {/* Add the Category component below the initial banners }
            <Brands /> {/* Add the Brands component below the Category }

            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                    {/* Add more ProductCard components with different data as needed }
                </div>

                <Banners imageUrls={newBannerImages} /> {/* Single image }
            </div>
        </div>
    );
};

export default Home;*/


import React from 'react';
import Banners from '../components/banners/Banner'; // Correct path and default import
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Correct path
import Category from '../components/category/Category'; // Correct path and default import
import Brands from '../components/brands/Brands'; // Correct path and default import
import ProductCard from '../components/cards/ProductCard'; // Correct path and default import

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Correct path

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image

    return (
        <div>
            <Banners imageUrls={initialBannerImages} />
            <Category /> {/* Add the Category component below the initial banners */}
            <Brands /> {/* Add the Brands component below the Category */}

            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                    {/* Add more ProductCard components with different data as needed */}
                </div>

                <Banners imageUrls={newBannerImages} /> {/* Single image */}
            </div>
        </div>
    );
};

export default Home;





