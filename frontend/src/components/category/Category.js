import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Category.css'; // Path to your custom Category.css

import AllInOne from '../../assets/images/CategoryImages/all-in-one-1.png';
import Desktop from '../../assets/images/CategoryImages/desktop.png';
import Monitor from '../../assets/images/CategoryImages/monitor.png';
import Laptop from '../../assets/images/CategoryImages/laptop-2.png';
import Printer from '../../assets/images/CategoryImages/printer.png';
import Router from '../../assets/images/CategoryImages/router.png';
import Projector from '../../assets/images/CategoryImages/projector.png';
import Tablet from '../../assets/images/CategoryImages/tablet.png';
import Accessories from '../../assets/images/CategoryImages/accessories.png';

const categories = [
    { name: 'All in One', image: AllInOne, link: '/products/category/laptop' },
    { name: 'Desktop', image: Desktop, link: '/products/category/laptop' },
    { name: 'Monitors', image: Monitor, link: '/products/category/laptop' },
    { name: 'Laptops', image: Laptop, link: '/products/category/laptop' },
    { name: 'Printers & Copier', image: Printer, link: '/products/category/networking' },
    { name: 'Routers', image: Router, link: '/products/category/accessories' },
    { name: 'Projectors', image: Projector, link: '/products/category/projectors' },
    { name: 'Networking', image: Tablet, link: '/products/category/networking' },
    { name: ' Accessories', image: Accessories, link: '/products/category/accessories' },
];

const Category = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth; // Scroll by the width of the container
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="category-container">
            <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
            <div className="category-items" ref={scrollRef}>
                {categories.map((category, index) => (
                    <Link to={category.link} key={index} className="category-item">
                        <img src={category.image} alt={category.name} className="img-fluid category-image" />
                        <p>{category.name}</p>
                    </Link>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
        </div>
    );
};

export default Category;






/*good without linkimport React, { useRef } from 'react';
import '../../assets/styles/Category.css'; // Path to your custom Category.css

import AllInOne from '../../assets/images/CategoryImages/all-in-one-1.png';
import Desktop from '../../assets/images/CategoryImages/desktop.png';
import Monitor from '../../assets/images/CategoryImages/monitor.png';
import Laptop from '../../assets/images/CategoryImages/laptop-2.png';
import Printer from '../../assets/images/CategoryImages/printer.png';
import Router from '../../assets/images/CategoryImages/router.png';
import Projector from '../../assets/images/CategoryImages/projector.png';
import Tablet from '../../assets/images/CategoryImages/tablet.png';
import Accessories from '../../assets/images/CategoryImages/accessories.png';

const categories = [
    { name: 'All in One', image: AllInOne },
    { name: 'Desktop', image: Desktop },
    { name: 'Monitors', image: Monitor },
    { name: 'Laptops', image: Laptop },
    { name: 'Printers & Copier', image: Printer },
    { name: 'Routers', image: Router },
    { name: 'Projectors', image: Projector },
    { name: 'Tablets', image: Tablet },
    { name: 'Networking Accessories', image: Accessories },
];

const Category = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth; // Scroll by the width of the container
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="category-container">
            <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
            <div className="category-items" ref={scrollRef}>
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.image} alt={category.name} className="img-fluid category-image" />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
        </div>
    );
};

export default Category;good without link*/

/*perfect but small mistakeimport React, { useRef } from 'react';
import '../../assets/styles/Category.css'; // Path to your custom Category.css

import AllInOne from '../../assets/images/CategoryImages/all-in-one-1.png';
import Desktop from '../../assets/images/CategoryImages/desktop.png';
import Monitor from '../../assets/images/CategoryImages/monitor.png';
import Laptop from '../../assets/images/CategoryImages/laptop-2.png';
import Printer from '../../assets/images/CategoryImages/printer.png';
import Router from '../../assets/images/CategoryImages/router.png';
import Projector from '../../assets/images/CategoryImages/projector.png';
import Tablet from '../../assets/images/CategoryImages/tablet.png';
import Accessories from '../../assets/images/CategoryImages/accessories.png';

const categories = [
    { name: 'All in One', image: AllInOne },
    { name: 'Desktop', image: Desktop },
    { name: 'Monitors', image: Monitor },
    { name: 'Laptops', image: Laptop },
    { name: 'Printers & Copier', image: Printer },
    { name: 'Routers', image: Router },
    { name: 'Projectors', image: Projector },
    { name: 'Tablets', image: Tablet },
    { name: 'Networking Accessories', image: Accessories },
];

const Category = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="category-container">
            <button className="scroll-button left" onClick={() => scroll('left')}>{'<'}</button>
            <div className="category-items" ref={scrollRef}>
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.image} alt={category.name} className="img-fluid category-image" />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>{'>'}</button>
        </div>
    );
};

export default Category;*/

