

// src/components/cards/ProductCard.js







import React from 'react';
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ image, name, rating, reviews, price, originalPrice }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <ProductRatings rating={rating} reviews={reviews} />
                <div className="product-pricing">
                    <p className="current-price">{price}</p>
                    <p className="original-price">{originalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


