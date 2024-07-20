// src/components/cards/ProductRatings.js

// src/components/cards/ProductRatings.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // React Icons for star ratings
import '../../assets/styles/Product.css'; // Correct path to Product.css

const ProductRatings = ({ rating, reviews }) => {
    // Helper function to generate star elements
    const getStarElements = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="star-icon" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
            } else {
                stars.push(<FaRegStar key={i} className="star-icon" />);
            }
        }
        return stars;
    };

    return (
        <div className="product-rating d-flex align-items-center">
            <div className="star-rating d-flex">
                {getStarElements(rating)}
            </div>
            <span className="reviews ms-2">({reviews})</span>
        </div>
    );
};

export default ProductRatings;
