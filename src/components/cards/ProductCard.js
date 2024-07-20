

// src/components/cards/ProductCard.js




// src/components/cards/ProductCard.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ image, name, rating, reviews, price, originalPrice }) => {
    return (
        <div className="card product-card">
            <img src={image} alt={name} className="card-img-top product-image" />
            <div className="card-body product-details">
                <h5 className="card-title product-name">{name}</h5>
                <div className="product-rating d-flex align-items-center justify-content-center">
                    <ProductRatings rating={rating} reviews={reviews} />
                </div>
                <div className="product-pricing mt-2">
                    <p className="current-price mb-1">{price}</p>
                    <p className="original-price mb-0">{originalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;



