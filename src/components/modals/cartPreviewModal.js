/*import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/cartPreviewModal.css'// Custom CSS for modal styling

const CartPreviewModal = ({ show, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="cart-item-row">
              <Col xs={3}>
                <Image src={item.image} alt={item.name} fluid />
              </Col>
              <Col xs={6}>
                <p>{item.name}</p>
              </Col>
              <Col xs={3}>
                <p>{item.price}</p>
              </Col>
            </Row>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleGoToCart}>
          View Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPreviewModal;*/




/*import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/cartPreviewModal.css'; // Custom CSS for modal styling
import CouponCode from '../CouponCode';
import Qty from '../Qty'; // Import the quantity selector component

const CartPreviewModal = ({ show, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  const handleCouponChange = (e) => {
    // Handle coupon code change
  };

  const handleApplyCoupon = () => {
    // Handle applying coupon code
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Review Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="cart-item-row">
              <Col xs={2}>
                <Image src={item.image} alt={item.name} fluid />
              </Col>
              <Col xs={4}>
                <p>{item.name}</p>
              </Col>
              <Col xs={2}>
                <p>{item.price} AED</p>
              </Col>
              <Col xs={2}>
                <Qty quantity={item.quantity} itemId={item.id} />
              </Col>
              <Col xs={2}>
                <Button variant="outline-danger" size="sm">
                  &times;
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Modal.Body>
      <CouponCode 
        couponCode="" 
        handleCouponChange={handleCouponChange} 
        handleApplyCoupon={handleApplyCoupon} 
      />
      <Modal.Footer>
        <Button 
          style={{ backgroundColor: '#A3D02C', borderColor: '#A3D02C' }} 
          onClick={handleGoToCart}>
          Checkout
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Continue Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPreviewModal;*/

/*import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../../components/Qty.js'; // Verify this path
import '../../assets/styles/cartPreviewModal.css'; // Verify this path and extension

const CartPreviewModal = ({ show, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Implement the logic to handle quantity change
    // This might involve dispatching an action to update the quantity in the cart
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Review Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => {
            // Debugging statements
            console.log("Item:", item);
            console.log("Price:", item.product.price);
            console.log("Quantity:", item.quantity);
            console.log("Calculated Total Price:", item.product.price * item.quantity);

            return (
              <Row key={index} className="cart-item-row align-items-center mb-2">
                <Col xs={3} className="text-center">
                  <Image
                    src={item.product.image || 'default-image-url'}
                    alt={item.product.name}
                    fluid
                  />
                </Col>
                <Col xs={4}>
                  <p>{item.product.name}</p>
                </Col>
                <Col xs={2}>
                  <QuantitySelector
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id.toString(), newQuantity)}
                  />
                </Col>
                <Col xs={3}>
                  <div className="price-section">
                    <p className="price">
                      <strong>
                        {(item.product.price && item.quantity) 
                          ? (item.product.price * item.quantity).toFixed(2) + ' AED' 
                          : 'Price not available'}
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>
            );
          })
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button className="custom-btn" onClick={handleGoToCart}>
          View Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPreviewModal;*/

/*import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../../components/Qty'; // Verify this path
//import { updateCart } from '../../store/actions/cartActions'; // Verify this path
import '../../assets/styles/cartPreviewModal.css'; // Verify this path and extension

const CartPreviewModal = ({ show, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Dispatch action to update cart with new quantity
    dispatch(updateCart(productId, newQuantity));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Review Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => {
            // Debugging statements
            console.log("Item:", item);
            console.log("Price:", item.product.price);
            console.log("Quantity:", item.quantity);
            console.log("Calculated Total Price:", item.product.price * item.quantity);

            return (
              <Row key={index} className="cart-item-row align-items-center mb-2">
                <Col xs={3} className="text-center">
                  <Image
                    src={item.product.image || 'default-image-url'}
                    alt={item.product.name}
                    fluid
                  />
                </Col>
                <Col xs={4}>
                  <p>{item.product.name}</p>
                </Col>
                <Col xs={2}>
                  <QuantitySelector
                    productId={item.product._id.toString()} // Pass the product ID as a string
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id.toString(), newQuantity)}
                  />
                </Col>
                <Col xs={3}>
                  <div className="price-section">
                    <p className="price">
                      <strong>
                        {item.product.price 
                          ? (item.product.price * item.quantity).toFixed(2) + ' AED'
                          : 'Price not available'}
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>
            );
          })
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button className="custom-btn" onClick={handleGoToCart}>
          View Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPreviewModal;*/
import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../../components/Qty'; // Verify this path
import { updateCart } from '../../store/slices/cartSlice'; // Import from your slice
import '../../assets/styles/cartPreviewModal.css'; // Verify this path and extension

const CartPreviewModal = ({ show, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.items); // Adjust the path to items
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Dispatch action to update cart with new quantity
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Review Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="cart-item-row align-items-center mb-2">
              <Col xs={3} className="text-center">
                <Image
                  src={item.image || 'default-image-url'} // Adjust if needed
                  alt={item.name}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <p>{item.name}</p>
              </Col>
              <Col xs={2}>
                <QuantitySelector
                  productId={item.id.toString()} // Pass the product ID as a string
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
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button className="custom-btn" onClick={handleGoToCart}>
          View Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPreviewModal;
