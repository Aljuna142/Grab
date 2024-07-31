/*import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/slices/wishlistSlice';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);
  
  // Determine if the product is already in the wishlist
  const isProductInWishlist = wishlist.some(item => item.id === product.id);

  // Log the product and wishlist state for debugging
  console.log('WishlistButton product:', product);
  console.log('Current wishlist:', wishlist);
  console.log('Is product in wishlist:', isProductInWishlist);

  const [isWishlisted, setIsWishlisted] = useState(isProductInWishlist);

  useEffect(() => {
    // Update local state when wishlist changes
    setIsWishlisted(isProductInWishlist);
  }, [wishlist, isProductInWishlist]);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      dispatch(removeItem(product));
    } else {
      dispatch(addItem(product));
    }
    // Toggle local state to reflect the change
    setIsWishlisted(!isWishlisted);
  };

  return (
    <button
      className="wishlist-btn position-absolute top-0 end-0 m-2 border-0 bg-transparent"
      onClick={handleWishlistClick}
    >
      <i className={`fas ${isWishlisted ? 'fa-heart text-danger' : 'fa-heart text-muted'}`}></i>
    </button>
  );
};

export default WishlistButton;*/


/*working wishlist
// src/components/buttons/WishlistButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/actions/wishlistActions';

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isProductInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isProductInWishlist) {
      dispatch(removeItem(product));
    } else {
      dispatch(addItem(product));
    }
  };

  return (
    <button onClick={handleWishlistToggle}>
      {isProductInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;*/

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/actions/wishlistActions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/styles/WishlistButton.css'; // Ensure you have the correct path to your CSS file

const WishlistButton = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const isProductInWishlist = wishlist.some(item => item.id === product.id);

  useEffect(() => {
    setIsWishlisted(isProductInWishlist);
  }, [isProductInWishlist, wishlist]);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      dispatch(removeItem(product));
    } else {
      dispatch(addItem(product));
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <button
      className="wishlist-btn position-absolute top-0 end-0 m-2 border-0 bg-transparent"
      onClick={handleWishlistClick}
    >
      <i className={`fas ${isWishlisted ? 'fa-heart text-danger' : 'fa-heart text-muted'}`}></i>
    </button>
  );
};

export default WishlistButton;
