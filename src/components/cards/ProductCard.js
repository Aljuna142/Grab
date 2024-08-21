

// src/components/cards/ProductCard.js





/*id start with string import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice };

  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      <WishlistButton product={product} />
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

export default ProductCard;*/

/*good without badge import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice };
  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body product-details">
          <h5 className="card-title product-name">{name}</h5>
          <div className="product-rating d-flex align-items-center justify-content-center">
            <ProductRatings rating={rating} reviews={reviews} />
          </div>
          <div className="product-pricing mt-2">
            <p className="current-price mb-1">{price}</p>
            {originalPrice && (
              <p className="original-price mb-0"><s>{originalPrice}</s></p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; good without badge*/

 /*badge import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      <div className="badge instock-badge">In Stock</div> {/* Temporarily always show badge }
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body product-details">
          <h5 className="card-title product-name">{name}</h5>
          <div className="product-rating d-flex align-items-center justify-content-center">
            <ProductRatings rating={rating} reviews={reviews} />
          </div>
          <div className="product-pricing mt-2">
            <p className="current-price mb-1">{price}</p>
            {originalPrice && (
              <p className="original-price mb-0"><s>{originalPrice}</s></p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;badge*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      {/* Conditionally render the badge }
      {countInStock > 0 && (
        <div className="badge instock-badge">In Stock</div>
      )}
      {countInStock === 0 && (
        <div className="badge outofstock-badge">Out of Stock</div>
      )}
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body product-details">
          <h5 className="card-title product-name">{name}</h5>
          <div className="product-rating d-flex align-items-center justify-content-center">
            <ProductRatings rating={rating} reviews={reviews} />
          </div>
          <div className="product-pricing mt-2">
            <p className="current-price mb-1">{price}</p>
            {originalPrice && (
              <p className="original-price mb-0"><s>{originalPrice}</s></p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;badge logicaly working*/





/*badge arrow top import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      {countInStock > 0 ? (
        <div className="badge instock-badge">In Stock</div>
      ) : (
        <div className="badge outofstock-badge">Check Availability</div>
      )}
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body product-details">
          <h5 className="card-title product-name">{name}</h5>
          <div className="product-rating d-flex align-items-center justify-content-center">
            <ProductRatings rating={rating} reviews={reviews} />
          </div>
          <div className="product-pricing mt-2">
            <p className="current-price mb-1">{price}</p>
            {originalPrice && (
              <p className="original-price mb-0"><s>{originalPrice}</s></p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;badge arrow top*/




import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  return (
    <div className="card product-card position-relative">
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body product-details">
          <h5 className="card-title product-name">{name}</h5>
          <div className="product-rating d-flex align-items-center justify-content-center">
            <ProductRatings rating={rating} reviews={reviews} />
          </div>
          <div className="product-pricing mt-2">
            <p className="current-price mb-1">{price}</p>
            {originalPrice && (
              <p className="original-price mb-0"><s>{originalPrice}</s></p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
