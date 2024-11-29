
// src/pages/WishlistPage.js
// src/components/pages/WishlistPage.js
// src/pages/WishlistPage.js
/*import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';

const WishlistPage = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <div>
      <h1 >Wishlist</h1>
      <div className="product-cards-container">
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              reviews={item.reviews}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;*/

/*import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';

const WishlistPage = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <div>
      <h1 style={{ fontWeight: 'bold',fontSize:'20px', backgroundColor: '#F8F9FA' }}>Wishlist</h1>
      <div className="product-cards-container">
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              reviews={item.reviews}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;*/

import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';
import '../assets/styles/WishlistPage.css'; // Import the CSS file for styling

const WishlistPage = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Wishlist</h1>
      <div className="product-cards-container">
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              reviews={item.reviews}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;







