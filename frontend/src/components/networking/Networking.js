/*import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import Xpg from '../../assets/images/ProductImages/xpg 2.webp'; 
import Wdblue from '../../assets/images/ProductImages/wdblue.webp'; 
import SamsungT7 from '../../assets/images/ProductImages/samsungT7.webp'; 
import Xpg2 from '../../assets/images/ProductImages/xpg.webp';  // Import networking images
import '../../assets/styles/Networking.css'; // Import the CSS for Networking

const Networking = () => {
    const networkingProducts = [
        {
            image: Xpg,
            name: "XPG Network Card",
            rating: "4.60",
            reviews: "22",
            price: "159.00 AED",
            originalPrice: "199.00 AED Inclusive VAT",
        },
        {
            image: Wdblue,
            name: "WD Blue Network Card",
            rating: "4.50",
            reviews: "18",
            price: "129.00 AED",
            originalPrice: "179.00 AED Inclusive VAT",
        },
        {
            image: SamsungT7,
            name: "Samsung T7 SSD",
            rating: "4.80",
            reviews: "30",
            price: "499.00 AED",
            originalPrice: "549.00 AED Inclusive VAT",
        },
        {
            image: Xpg2,
            name: "XPG Network Adapter",
            rating: "4.70",
            reviews: "20",
            price: "199.00 AED",
            originalPrice: "249.00 AED Inclusive VAT",
        }
    ];

    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 300;
        } else {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="networking-section">
            <h2>Networking</h2>
            <div className="networking-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
                <div className="networking-cards-container" ref={scrollContainerRef}>
                    {networkingProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Networking;*/


/*import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import networkingProducts from '../../data/networking'; // Import the networking products
import '../../assets/styles/Networking.css'; // Import the CSS for Networking

const Networking = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 300;
        } else {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="networking-section">
            <h2>Networking</h2>
            <div className="networking-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
                <div className="networking-cards-container" ref={scrollContainerRef}>
                    {networkingProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Networking;*/

// src/components/networking/Networking.js
/*id start with string import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import networkingProducts from '../../data/networking'; // Import the networking products
import '../../assets/styles/Networking.css'; // Import the CSS for Networking

const Networking = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 300;
        } else {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="networking-section">
            <h2>Networking</h2>
            <div className="networking-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
                <div className="networking-cards-container" ref={scrollContainerRef}>
                    {networkingProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Networking;id start with string*/

import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import '../../assets/styles/Networking.css'; // Import the CSS for Networking

// Assuming networkingProducts comes from a static data file or API, you need to ensure the data is structured like the backend API response
import networkingProducts from '../../data/networking'; // Import the networking products

const Networking = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 300;
        } else {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="networking-section">
            <h2>Networking</h2>
            <div className="networking-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
                <div className="networking-cards-container" ref={scrollContainerRef}>
                    {networkingProducts.map((product) => (
                        <ProductCard
                            key={product._id}  // Use _id if the data is from the same backend
                            id={product._id}  // Pass _id as id to ProductCard
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}  // Adjust the field name as per the backend response
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Networking;



