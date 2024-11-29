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

/*@import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/Product.css";
import ProductRatings from "./ProductRatings";
import WishlistButton from "../buttons/WishlistButton";

const ProductCard = ({
  id,
  image,
  name,
  rating,
  reviews,
  price,
  originalPrice,
  countInStock,
  size = "default",
}) => {
  const product = {
    id,
    image,
    name,
    rating,
    reviews,
    price,
    originalPrice,
    countInStock,
  };
  const link = `/product/${id}`;

  return (
    <div className={`card product-card position-relative ${size}`}>
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
              <p className="original-price mb-0">
                <s>{originalPrice}</s>
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;@*/

/*


import react from reaact;
import useState from React-dom;
import UseEffect from react-router;
import {link} from react -roter dom

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default'})
const ProductCard =({id, image, name, rating, reviews, price, originalPrice,countInStock, size = 'default'})
const ProductCard = (toastifier, toast, ratings , reviews, price, originalPrice, CountInStock,  react from react 
const  useState,Use setTimer,newTimer,setFalse, setfalse 
const useState,useTimer, newTimer=()=>{
  console.lo("Test series successfulll ")} )
const  [Timer, newTimer]=useState({"false"})
const [setProduct,newProduct ]=useEffect('true');
const [setcondition,newCondtion]=useState('true');
const [sTimer,new]Timer=useState('false')
// https:baseurl (localStorage,sessionStorage,partialStorage, )
const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
const [isInStock,setStock ]
const [isInStock, setStock] = useState(countInStock > 0);
const [isInStock, setStock] = useState(countInSTock )
const [setTest,newTest]=useState(countInStock);
const[setCard,newCard]=useState(countInStock);
const[setProduct,newProduct]=useState (countinStock,0 );
const [setProduct, newProduct] = useState(countInStock);

constructor{
super();
this.state
  {
    
    \end{code}
    \begin{code}
    setStock(countInStock > 0)
    setTest(countInStock )
    setCounty,newCounty=0;
    newTimer,setTimer=useState
    (setTimer,newTimer )
    constructor{
    console.log("Test series successfully")}
    newTimer,setTimer=useState(false)
    productCard_id ,
    productCard_name ,
    productCard_rating ,
    product_cards_reviews,
    produt _cards _reviews,
}
    
//uploads file are serving the file  from the rooot directory
    from the backend root directory  files are serving from thr fronted user side 
    
uploads are using express static server files 
directory define the root 
they use middleware 
const toastfier = useState ,useEffect,setFalse


const app = express();
const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
setStock(countInStock > 0)
    setTest(countInStock)
    setCard(countInStock)
    setProduct(countInStock)
    setProduct(countInStock)
setDirect,setIndirect 
super.this();
this.state = {
direct:true,
indirect:false,
     productCard_id ,
     productCard_name ,
     productCard_rating,
     productCard_
    direct: true,
    indirect: false,
    productCard_id ,
    productCard_name ,
    productCard_rating ,
    product_} 
    






/*today import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;
  
  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={image} 
          alt={name} 
          className="card-img-top product-image"
          onError={(e) => e.target.src = '/path/to/fallback-image.png'} 
        />
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

export default ProductCard;today */

/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Construct the image URL based on whether it's an absolute URL or a local file
  const imageUrl = image ? (image.includes('http') ? image : `/uploads/${image}`) : '/path/to/placeholder.jpg';

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={imageUrl} 
          alt={name} 
          className="card-img-top product-image" 
          onError={(e) => e.target.src = '/path/to/placeholder.jpg'} // Replace with your placeholder path
        />
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

export default ProductCard;double cases*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  const handleError = (e) => {
    // Log the error and set a fallback image
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/path/to/fallback-image.png'; // Update the path as needed
  };

  console.log('Product image URL:', image);

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={image} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;*/

/*0909import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/path/to/fallback-image.png'; // Update the path as needed
  };

  const getImageUrl = (img) => {
    if (!img) {
      return '/path/to/fallback-image.png'; // Default fallback image path
    }
    // If `img` starts with 'http' or '/' then return as-is, else return fallback
    return img.startsWith('http') || img.startsWith('/') ? img : '/path/to/fallback-image.png';
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;0909*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css';
import ProductRatings from './ProductRatings';
import WishlistButton from '../buttons/WishlistButton';

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Handle image loading error and set fallback image
  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/assets/images/fallback-image.png'; // Ensure this path exists with the correct fallback image in the public folder
  };

  // Determine image URL based on its source (backend or public folder)
  const getImageUrl = (img) => {
    if (!img) {
      console.warn('No image URL provided for product:', product);
      return '/assets/images/fallback-image.png'; // Default fallback image path in public/assets/images/
    }

    // Check if the image is an external link or from the public folder
    if (img.startsWith('http') || img.startsWith('/')) {
      return img; // External or public folder image
    }

    // Otherwise, assume the image is from the backend
    return `/uploads/${img}`; // Backend image path (assuming it's served from '/uploads')
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
          loading="lazy" // Lazy load the image for performance optimization
        />
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

export default ProductCard;*/

/*img + p_idimport React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/path/to/fallback-image.png'; // Update this path as needed
  };

  const getImageUrl = (img) => {
    if (!img) {
      return '/path/to/fallback-image.png'; // Default fallback image path
    }
    // If the image URL starts with 'http' or '/', return it as-is, otherwise use fallback
    return img.startsWith('http') || img.startsWith('/') ? img : '/path/to/fallback-image.png';
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;img +*/

/*product not found import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/path/to/fallback-image.png'; // Update this path as needed
  };

  const getImageUrl = (img) => {
    if (!img) {
      return '/path/to/fallback-image.png'; // Default fallback image path
    }
    // If the image URL starts with 'http' or '/', return it as-is, otherwise use fallback
    return img.startsWith('http') || img.startsWith('/') ? img : '/path/to/fallback-image.png';
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;product not found*/

/*fl back imag showing import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  const getImageUrl = (img) => {
    console.log('Image URL:', img);
    if (!img) {
      return fallbackImage; // Use the public folder path for fallback
    }
    return img.startsWith('http') || img.startsWith('/') ? img : fallbackImage;
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;fall bck imag showing */

/*lastimport React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  const getImageUrl = (img) => {
    if (!img) {
      return fallbackImage; // Use the public folder path for fallback
    }
    return img.startsWith('http') || img.startsWith('/') ? img : `http://localhost:5000/uploads${img}`;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;last*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  console.log('Product ID:', id); // Add this line to check the product ID

  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  const getImageUrl = (img) => {
    if (!img) {
      return fallbackImage; // Use the public folder path for fallback
    }
    return img.startsWith('http') || img.startsWith('/') ? img : `http://localhost:5000/uploads${img}`;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;*/



/*120import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  console.log('Product ID:', id); // Add this line to check the product ID

  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  const getImageUrl = (img) => {
    if (!img) {
      return fallbackImage; // Use the public folder path for fallback
    }
    // Remove leading slash if it exists and construct URL
    return img.startsWith('http') ? img : `http://localhost:5000/${img.startsWith('/') ? img.slice(1) : img}`;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;removing slash*/




/*import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  console.log('Product ID:', id); // Log the product ID

  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  const getImageUrl = (img) => {
    if (!img) {
      console.log('No image provided, using fallback.');
      return fallbackImage; // Use the public folder path for fallback
    }

    let imageUrl;
    if (img.startsWith('http')) {
      imageUrl = img; // Absolute URL
    } else {
      // If the img path starts with '/', remove it for the backend URL
      imageUrl = `http://localhost:5000/${img.startsWith('/') ? img.slice(1) : img}`;
    }

    console.log('Constructed Image URL:', imageUrl); // Log the constructed URL
    return imageUrl;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;*/

/*iruimport React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  console.log('Product ID:', id); // Log the product ID

  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  const getImageUrl = (img) => {
    if (!img) {
      console.log('No image provided, using fallback.');
      return fallbackImage; // Use the public folder path for fallback
    }

    let imageUrl;
    if (img.startsWith('http')) {
      imageUrl = img; // Absolute URL
    } else {
      // Construct the URL correctly
      imageUrl = `http://localhost:5000${img.startsWith('/') ? img : '/' + img}`;
    }

    console.log('Constructed Image URL:', imageUrl); // Log the constructed URL
    return imageUrl;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

export default ProductCard;*/






import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/Product.css'; // Ensure this path is correct for your project
import ProductRatings from './ProductRatings'; // Ensure this path is correct for your project
import WishlistButton from '../buttons/WishlistButton'; // Ensure this path is correct for your project

const ProductCard = ({ id, image, name, rating, reviews, price, originalPrice, countInStock, size = 'default' }) => {
  console.log('Product ID:', id); // Log the product ID

  const product = { id, image, name, rating, reviews, price, originalPrice, countInStock };
  const link = `/product/${id}`;

  // Define the fallback image path from the public folder
  const fallbackImage = '/assets/images/ProductImages/fallback-image.png'; // Path from public folder

  // Construct the correct URL for backend images
  //sample[http://localhost:5000/uploads/1727084840670.jpg]
  const getImageUrl = (img) => {
    if (!img) {
      console.log('No image provided, using fallback.');
      return fallbackImage; // Use the public folder path for fallback
    }

    let imageUrl;
    if (img.startsWith('http')) {
      imageUrl = img; // Absolute URL
    } else {
      // Construct the URL correctly
      imageUrl = `http://localhost:5000${img.startsWith('/') ? img : '/' + img}`;
    }

    console.log('Constructed Image URL:', imageUrl); // Log the constructed URL
    return imageUrl;
  };

  const handleError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = fallbackImage; // Use the public folder path for fallback
  };

  return (
    <div className={`card product-card position-relative ${size}`}>
      <div className="badge-wrapper">
        {countInStock > 0 ? (
          <div className="badge instock-badge">In Stock</div>
        ) : (
          <div className="badge outofstock-badge">Check Availability</div>
        )}
      </div>
      <WishlistButton product={product} />
      <Link to={link} className="product-link">
        <img 
          src={getImageUrl(image)} 
          alt={name} 
          className="card-img-top product-image"
          onError={handleError} 
        />
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

