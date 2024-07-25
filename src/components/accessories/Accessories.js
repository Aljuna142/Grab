// src/components/accessories/Accessories.js
/*import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import LaptopBag from '../../assets/images/ProductImages/LaptopBag.webp'; 
import keyboard from '../../assets/images/ProductImages/keyboard.webp'; 
import HpGamingHeadset from '../../assets/images/ProductImages/HpGamingHeadset.webp'; 
import DDR5 from '../../assets/images/ProductImages/DDR5.webp'; 
import MicrosoftBluetoothMouse from '../../assets/images/ProductImages/MicrosoftBluetoothMouse.webp';
import Mouse from '../../assets/images/ProductImages/Mouse-1.webp';  // Import accessory images
import '../../assets/styles/Accessories.css'; // Import the CSS for Accessories
 
const Accessories = () => {
    const accessoriesProducts = [
        {
            image: LaptopBag,
            name: "Laptop Bag",
            rating: "4.50",
            reviews: "15",
            price: "199.00 AED",
            originalPrice: "249.00 AED Inclusive VAT",
        },
        {
            image: keyboard,
            name: "Keyboard",
            rating: "4.30",
            reviews: "10",
            price: "99.00 AED",
            originalPrice: "149.00 AED Inclusive VAT",
        },
        {
            image: HpGamingHeadset,
            name: "HP Gaming Headset",
            rating: "4.70",
            reviews: "20",
            price: "299.00 AED",
            originalPrice: "349.00 AED Inclusive VAT",
        },
        {
            image: DDR5,
            name: "DDR5 RAM",
            rating: "4.80",
            reviews: "25",
            price: "399.00 AED",
            originalPrice: "449.00 AED Inclusive VAT",
        },
        {
            image: MicrosoftBluetoothMouse,
            name: "Microsoft Bluetooth Mouse",
            rating: "4.60",
            reviews: "18",
            price: "149.00 AED",
            originalPrice: "199.00 AED Inclusive VAT",
        },
        {
            image: Mouse,
            name: "Wireless Mouse",
            rating: "4.20",
            reviews: "12",
            price: "79.00 AED",
            originalPrice: "99.00 AED Inclusive VAT",
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
        <div className="accessories-section">
            <h2>Accessories</h2>
            <div className="accessories-container">
                <button className="scroll-button" onClick={() => scroll('left')}>{'<'}</button>
                <div className="accessories-cards-container" ref={scrollContainerRef}>
                    {accessoriesProducts.map((product, index) => (
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
                <button className="scroll-button" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Accessories;*/


// src/components/accessories/Accessories.js
import React, { useRef } from 'react';
import ProductCard from '../cards/ProductCard';
import accessories from '../../data/accessories'; // Import the accessories data
import '../../assets/styles/Accessories.css'; // Import the CSS for Accessories

const Accessories = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 300;
        } else {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="accessories-section">
            <h2>Accessories</h2>
            <div className="accessories-container">
                <button className="scroll-button" onClick={() => scroll('left')}>{'<'}</button>
                <div className="accessories-cards-container" ref={scrollContainerRef}>
                    {accessories.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}  // Pass the id to ProductCard
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                <button className="scroll-button" onClick={() => scroll('right')}>{'>'}</button>
            </div>
        </div>
    );
};

export default Accessories;
