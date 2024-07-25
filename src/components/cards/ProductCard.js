

// src/components/cards/ProductCard.js




// src/components/cards/ProductCard.js

/*import React from 'react';
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

export default ProductCard;*/


/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you are using React Router
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ image, name, rating, reviews, price, originalPrice, link }) => {
    return (
        <div className="card product-card">
            <Link to={link} className="product-link">
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
            </Link>
        </div>
    );
};

export default ProductCard;not clickable*/

/*import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ image, name, rating, reviews, price, originalPrice, link }) => {
    return (
        <div className="card product-card">
            <Link to={link} className="product-link">
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
            </Link>
        </div>
    );
};

export default ProductCard;not click 2*/

// src/components/ProductCard.js
/*import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice }) => {
    // Generate link to the product details page
    const link = `/product/${id}`;

    return (
        <div className="card product-card">
            <Link to={link} className="product-link">
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
            </Link>
        </div>
    );
};

export default ProductCard;id 1 */

/*import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice }) => {
    // Generate link to the product details page
    const link = `/product/${id}`;

    return (
        <div className="card product-card">
            <Link to={link} className="product-link">
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
            </Link>
        </div>
    );
};

export default ProductCard;*/






import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/styles/Product.css'; // Correct path to Product.css
import ProductRatings from './ProductRatings'; // Import the ProductRatings component

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice }) => {
    // Generate link to the product details page
    const link = `/product/${id}`;

    return (
        <div className="card product-card">
            <Link to={link} className="product-link">
                <img src={image} alt={name} className="card-img-top product-image" />
                <div className="card-body product-details">
                    <h5 className="card-title product-name">{name}</h5>
                    <div className="product-rating d-flex align-items-center justify-content-center">
                        <ProductRatings rating={rating} reviews={reviews} />
                    </div>
                    <div className="product-pricing mt-2">
                        <p className="current-price mb-1">{price}</p>
                        <p className="original-price mb-0"><s>{originalPrice}</s></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;

