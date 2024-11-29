import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import '../assets/styles/CartIcon.css'; // Optional: for custom styles

const CartIcon = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <Link to="/cart" className="nav-link cart-icon-container">
            <FaShoppingCart className="nav-icon" />
            {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
            )}
        </Link>
    );
};

export default CartIcon;
