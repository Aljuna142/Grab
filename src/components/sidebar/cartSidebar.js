import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../Qty';
import CouponCode from '../CouponCode';
import { updateCart } from '../../store/slices/cartSlice';
import '../../assets/styles/cartSidebar.css';

const CartSidebar = ({ isOpen, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    handleClose();
    navigate('/checkout');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h4>Review Your Cart</h4>
      </div>
      <div className="cart-sidebar-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Row key={index} className="cart-item-row align-items-center mb-2">
                <Col xs={3} className="text-center">
                  <Image
                    src={item.image || 'default-image-url'}
                    alt={item.name}
                    fluid
                  />
                </Col>
                <Col xs={4}>
                  <p>{item.name}</p>
                </Col>
                <Col xs={2}>
                  <QuantitySelector
                    productId={item.id.toString()}
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                  />
                </Col>
                <Col xs={3}>
                  <div className="price-section">
                    <p className="price">
                      <strong>
                        {item.price 
                          ? (item.price * item.quantity).toFixed(2) + ' AED'
                          : 'Price not available'}
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>
            ))}
            <CouponCode />
            <div className="subtotal-section">
              <Row className="subtotal-row">
                <Col xs={6}>
                  <p>Subtotal</p>
                </Col>
                <Col xs={6} className="text-right">
                  <h5>{calculateSubtotal()} AED</h5>
                </Col>
              </Row>
              <p className="note">Shipping & taxes may be re-calculated at checkout</p>
            </div>
          </>
        )}
      </div>
      <div className="cart-sidebar-footer">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
