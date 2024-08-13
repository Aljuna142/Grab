// src/components/OrderSummary.js
/*import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CouponCode from '../components/CouponCode'; // Ensure this path is correct
import SavingsDisplay from '../components/SavingsDisplay'; // Import the SavingsDisplay component
import { updateCart, removeFromCart } from '../store/slices/cartSlice'; // Import from your slice
import OrderTable from '../components/OrderTable'; // Import the OrderTable component
import '../assets/styles/orderSummary.css'; // Create and use a CSS file for styling

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items); // Adjust the path to items
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId })); // Dispatch an action to remove the item
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    
    <div className="order-summary">
        
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Card className="order-summary-card">
          <Card.Body>
            <OrderTable items={cartItems} />
            <CouponCode />
            <div className="subtotal-section">
              <Row className="subtotal-row">
                <Col xs={6}>
                  <p>Total</p>
                </Col>
                <Col xs={6} className="text-right">
                  <h6>{calculateSubtotal()} AED</h6>
                </Col>
              </Row>
              <p className="note"></p>
            </div>
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed
            </button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default OrderSummary;pakka without product img name */
/*import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/Qty'; // Make sure the path is correct
import CouponCode from '../components/CouponCode';
import SavingsDisplay from '../components/SavingsDisplay';
import { updateCart, removeFromCart } from '../store/slices/cartSlice';
import OrderTable from '../components/OrderTable';
import '../assets/styles/orderSummary.css';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Card className="order-summary-card">
          <Card.Body>
            {/* Top Section with Product Details }
            {cartItems.map((item, index) => (
              <Row key={index} className="cart-item-row align-items-center mb-3">
                <Col xs={3} className="text-center">
                  <Image
                    src={item.image || 'default-image-url'} // Adjust if needed
                    alt={item.name}
                    fluid
                  />
                </Col>
                <Col xs={4}>
                  <p className="product-name">{item.name}</p>
                </Col>
                <Col xs={2} className="text-center">
                  <QuantitySelector
                    productId={item.id.toString()} 
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                  />
                </Col>
                <Col xs={3} className="text-right price-section">
                  <p className="price">
                    <strong>
                      <span className="current-price">
                        {(item.price * item.quantity).toFixed(2)} AED
                      </span>
                      {item.originalPrice > 0 && (
                        <>
                          <span className="original-price">
                            <del>{(item.originalPrice * item.quantity).toFixed(2)} AED</del>
                          </span>
                          <SavingsDisplay
                            originalPrice={item.originalPrice}
                            currentPrice={item.price}
                            quantity={item.quantity}
                          />
                        </>
                      )}
                    </strong>
                  </p>
                </Col>
              </Row>
            ))}

            {/* Order Table }
            <OrderTable items={cartItems} />

            {/* Coupon Code }
            <CouponCode />

            {/* Total Section }
            <div className="subtotal-section">
              <Row className="subtotal-row">
                <Col xs={6}>
                  <p>Total</p>
                </Col>
                <Col xs={6} className="text-right">
                  <h6>{calculateSubtotal()} AED</h6>
                </Col>
              </Row>
              <p className="note"></p>
            </div>

            <button className="proceed-btn" onClick={handleProceed}>
              Proceed
            </button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default OrderSummary;*/



/*pakkaaa fixed import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/Qty'; // Make sure the path is correct
import CouponCode from '../components/CouponCode';
import SavingsDisplay from '../components/SavingsDisplay';
import { updateCart, removeFromCart } from '../store/slices/cartSlice';
import OrderTable from '../components/OrderTable';
import '../assets/styles/orderSummary.css';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="card-container">
          <Card className="order-summary-card">
            <Card.Body>
              {/* Top Section with Product Details }
              {cartItems.map((item, index) => (
                <Row key={index} className="cart-item-row align-items-center mb-3">
                  <Col xs={3} className="text-center">
                    <Image
                      src={item.image || 'default-image-url'} // Adjust if needed
                      alt={item.name}
                      fluid
                      className="product-image"
                    />
                  </Col>
                  <Col xs={4}>
                    <p className="product-name">{item.name}</p>
                  </Col>
                  <Col xs={2} className="text-center">
                    <QuantitySelector
                      productId={item.id.toString()} 
                      quantity={item.quantity}
                      onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                    />
                  </Col>
                  <Col xs={3} className="text-right price-section">
                    <p className="price">
                      <strong>
                        <span className="current-price">
                          {(item.price * item.quantity).toFixed(2)} AED
                        </span>
                        {item.originalPrice > 0 && (
                          <>
                            <span className="original-price">
                              <del>{(item.originalPrice * item.quantity).toFixed(2)} AED</del>
                            </span>
                            <SavingsDisplay
                              originalPrice={item.originalPrice}
                              currentPrice={item.price}
                              quantity={item.quantity}
                            />
                          </>
                        )}
                      </strong>
                    </p>
                  </Col>
                </Row>
              ))}

              {/* Order Table 
              }
              <OrderTable items={cartItems} />

              {/* Coupon Code}
              <CouponCode />

              {/* Total Section }
              <div className="subtotal-section">
                <Row className="subtotal-row">
                  <Col xs={6}>
                    <p>Total</p>
                  </Col>
                  <Col xs={6} className="text-right">
                    <h6>{calculateSubtotal()} AED</h6>
                  </Col>
                </Row>
                <p className="note"></p>
              </div>

              <button className="proceed-btn" onClick={handleProceed}>
                Proceed
              </button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;1212*/

/*card centered import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/Qty';
import CouponCode from '../components/CouponCode';
import SavingsDisplay from '../components/SavingsDisplay';
import { updateCart, removeFromCart } from '../store/slices/cartSlice';
import OrderTable from '../components/OrderTable';
import '../assets/styles/orderSummary.css';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="card-container1">
          <Card className="order-summary-card">
            <Card.Body>
              {/* Top Section with Product Details }
              {cartItems.map((item, index) => (
                <Row key={index} className="cart-item-row align-items-center mb-3">
                  {/* Image Column }
                  <Col xs={3} className="text-center">
                    <Image
                      src={item.image || 'default-image-url'} // Adjust if needed
                      alt={item.name}
                      fluid
                      className="product-image"
                    />
                  </Col>

                  {/* Details Column }
                  <Col xs={6}>
                    <Row>
                      {/* Product Name }
                      <Col xs={12}>
                        <p className="product-name">{item.name}</p>
                      </Col>
                      {/* Quantity Selector }
                      <Col xs={12}>
                        <QuantitySelector
                          productId={item.id.toString()}
                          quantity={item.quantity}
                          onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                        />
                      </Col>
                    </Row>
                  </Col>

                  {/* Pricing Column }
                  <Col xs={3}>
                    <Row>
                      {/* Current Price }
                      <Col xs={12} className="text-right">
                        <p className="price">
                          <strong>
                            <span className="current-price">
                              {(item.price * item.quantity).toFixed(2)} AED
                            </span>
                          </strong>
                        </p>
                      </Col>
                      {/* Original Price }
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <p className="original-price">
                            <del>{(item.originalPrice * item.quantity).toFixed(2)} AED</del>
                          </p>
                        </Col>
                      )}
                      {/* Savings }
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <SavingsDisplay
                            originalPrice={item.originalPrice}
                            currentPrice={item.price}
                            quantity={item.quantity}
                          />
                        </Col>
                      )}
                    </Row>
                  </Col>
                </Row>
              ))}

              {/* Order Table }
              <OrderTable items={cartItems} />

              {/* Coupon Code }
              <CouponCode />

              {/* Total Section }
              <div className="subtotal-section">
                <Row className="subtotal-row">
                  <Col xs={6}>
                    <p>Total</p>
                  </Col>
                  <Col xs={6} className="text-right">
                    <h6>{calculateSubtotal()} AED</h6>
                  </Col>
                </Row>
                <p className="note"></p>
              </div>

              <button className="proceed-btn" onClick={handleProceed}>
                Proceed
              </button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;card centered*/


/*with proceed button import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/Qty';
import CouponCode from '../components/CouponCode';
import SavingsDisplay from '../components/SavingsDisplay';
import { updateCart, removeFromCart } from '../store/slices/cartSlice';
import OrderTable from '../components/OrderTable';
import '../assets/styles/orderSummary.css';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="card-container1">
          <Card className="order-summary-card">
            <Card.Body>
              {/* Top Section with Product Details }
              {cartItems.map((item, index) => (
                <Row key={index} className="cart-item-row align-items-center mb-3">
                  {/* Image Column }
                  <Col xs={3} className="text-center position-relative">
                    <Image
                      src={item.image || 'default-image-url'} // Adjust if needed
                      alt={item.name}
                      fluid
                      className="product-image"
                    />
                    <Button
                      variant="danger"
                      className="close-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      &times;
                    </Button>
                  </Col>

                  {/* Details Column }
                  <Col xs={6}>
                    <Row>
                      {/* Product Name }
                      <Col xs={12}>
                        <p className="product-name">{item.name}</p>
                      </Col>
                      {/* Quantity Selector }
                      <Col xs={12}>
                        <QuantitySelector
                          productId={item.id.toString()}
                          quantity={item.quantity}
                          onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                        />
                      </Col>
                    </Row>
                  </Col>

                  {/* Pricing Column }
                  <Col xs={3}>
                    <Row>
                      {/* Current Price }
                      <Col xs={12} className="text-right">
                        <p className="price">
                          <strong>
                            <span className="current-price">
                              {(item.price * item.quantity).toFixed(2)} AED
                            </span>
                          </strong>
                        </p>
                      </Col>
                      {/* Original Price }
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <p className="original-price">
                            <del>{(item.originalPrice * item.quantity).toFixed(2)} AED</del>
                          </p>
                        </Col>
                      )}
                      {/* Savings }
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <SavingsDisplay
                            originalPrice={item.originalPrice}
                            currentPrice={item.price}
                            quantity={item.quantity}
                          />
                        </Col>
                      )}
                    </Row>
                  </Col>
                </Row>
              ))}

              {/* Order Table }
              <OrderTable items={cartItems} />

              {/* Coupon Code }
              <CouponCode />

              {/* Total Section }
              <div className="subtotal-section">
                <Row className="subtotal-row">
                  <Col xs={6}>
                    <p>Total</p>
                  </Col>
                  <Col xs={6} className="text-right">
                    <h6>{calculateSubtotal()} AED</h6>
                  </Col>
                </Row>
                <p className="note"></p>
              </div>

              <button className="proceed-btn" onClick={handleProceed}>
                Proceed
              </button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;with proceed button*/



import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/Qty';
import CouponCode from '../components/CouponCode';
import SavingsDisplay from '../components/SavingsDisplay';
import { updateCart, removeFromCart } from '../store/slices/cartSlice';
import OrderTable from '../components/OrderTable';
import '../assets/styles/orderSummary.css';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="card-container1">
          <Card className="order-summary-card">
            <Card.Body>
              {/* Top Section with Product Details */}
              {cartItems.map((item, index) => (
                <Row key={index} className="cart-item-row align-items-center mb-3">
                  {/* Image Column */}
                  <Col xs={3} className="text-center position-relative">
                    <Image
                      src={item.image || 'default-image-url'} // Adjust if needed
                      alt={item.name}
                      fluid
                      className="product-image"
                    />
                    <Button
                      variant="danger"
                      className="close-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      &times;
                    </Button>
                  </Col>

                  {/* Details Column */}
                  <Col xs={6}>
                    <Row>
                      {/* Product Name */}
                      <Col xs={12}>
                        <p className="product-name">{item.name}</p>
                      </Col>
                      {/* Quantity Selector */}
                      <Col xs={12}>
                        <QuantitySelector
                          productId={item.id.toString()}
                          quantity={item.quantity}
                          onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                        />
                      </Col>
                    </Row>
                  </Col>

                  {/* Pricing Column */}
                  <Col xs={3}>
                    <Row>
                      {/* Current Price */}
                      <Col xs={12} className="text-right">
                        <p className="price">
                          <strong>
                            <span className="current-price">
                              {(item.price * item.quantity).toFixed(2)} AED
                            </span>
                          </strong>
                        </p>
                      </Col>
                      {/* Original Price */}
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <p className="original-price">
                            <del>{(item.originalPrice * item.quantity).toFixed(2)} AED</del>
                          </p>
                        </Col>
                      )}
                      {/* Savings */}
                      {item.originalPrice > 0 && (
                        <Col xs={12} className="text-right">
                          <SavingsDisplay
                            originalPrice={item.originalPrice}
                            currentPrice={item.price}
                            quantity={item.quantity}
                          />
                        </Col>
                      )}
                    </Row>
                  </Col>
                </Row>
              ))}

              {/* Order Table */}
              <OrderTable items={cartItems} />

              {/* Coupon Code */}
              <CouponCode />

              {/* Total Section */}
              <div className="subtotal-section">
                <Row className="subtotal-row">
                  <Col xs={6}>
                    <p>Total</p>
                  </Col>
                  <Col xs={6} className="text-right">
                    <h6>{calculateSubtotal()} AED</h6>
                  </Col>
                </Row>
                <p className="note"></p>
              </div>

              {/* Remove the Proceed Button here */}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

