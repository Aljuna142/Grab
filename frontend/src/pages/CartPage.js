

/* perfect import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Button, Table, Image } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  console.log('cartItems:', cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    console.log('Updating quantity:', productId, newQuantity);
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    console.log('Removing from cart:', productId);
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              console.log('item.product:', item.product);
              const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
              const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
              const quantity = parseFloat(item.quantity) || 1;

              return (
                <tr key={item.product._id}>
                  <td>
                    <Image src={item.product.image || 'default-image-url'} thumbnail />
                  </td>
                  <td>
                    <h5>{item.product.name}</h5>
                    <QuantitySelector
                      quantity={quantity}
                      onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                    />
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item.product._id)}
                      className="mt-2"
                    >
                      Remove
                    </Button>
                  </td>
                  <td>
                    <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    <p><del>${originalPrice.toFixed(2)}</del></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;perfect*/



/*perfect import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Button, Table, Image, Row, Col } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  console.log('cartItems:', cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    console.log('Updating quantity:', productId, newQuantity);
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    console.log('Removing from cart:', productId);
    dispatch(removeFromCart(productId));
  };

  const handleBuyNow = (productId) => {
    // Implement the buy now functionality here
    console.log('Buying now:', productId);
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              console.log('item.product:', item.product);
              const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
              const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
              const quantity = parseFloat(item.quantity) || 1;

              return (
                <tr key={item.product._id}>
                  <td>
                    <Image src={item.product.image || 'default-image-url'} thumbnail />
                  </td>
                  <td>
                    <h5>{item.product.name}</h5>
                    <QuantitySelector
                      quantity={quantity}
                      onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                    />
                    <Row className="mt-2">
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveFromCart(item.product._id)}
                        >
                          Remove
                        </Button>
                      </Col>
                      <Col className="text-right">
                        <Button
                          variant="primary"
                          onClick={() => handleBuyNow(item.product._id)}
                        >
                          Buy Now
                        </Button>
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    <p><del>${originalPrice.toFixed(2)}</del></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;perfect*/





/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Button, Table, Image } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead  style={{ backgroundColor: '#a3d02c', color: 'white' }}>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
              const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
              const quantity = parseFloat(item.quantity) || 1;

              return (
                <tr key={item.product._id}>
                  <td>
                    <Image
                      src={item.product.image || 'default-image-url'}
                      thumbnail
                      style={{ width: '80px', height: 'auto' }}
                    />
                  </td>
                  <td>
                    <h5>{item.product.name}</h5>
                    <QuantitySelector
                      quantity={quantity}
                      onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                    />
                    <div className="button-container">
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromCart(item.product._id)}
                        className="mr-2"
                      >
                        Remove
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => console.log('Buy now', item.product._id)}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </td>
                  <td>
                    <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    <p><del>${originalPrice.toFixed(2)}</del></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;good but color*/

/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
          const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col xs={3} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  thumbnail
                  className="cart-item-image"
                />
              </Col>
              <Col xs={5}>
                <h5>{item.product.name}</h5>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                />
              </Col>
              <Col xs={4} className="text-right">
                <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                <p><del>${originalPrice.toFixed(2)}</del></p>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.product._id)}
                    className="mr-2"
                  >
                    Remove
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => console.log('Buy now', item.product._id)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;*/

/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
          const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col xs={3} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  thumbnail
                  className="cart-item-image"
                />
              </Col>
              <Col xs={3}>
                <h5>{item.product.name}</h5>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                />
              </Col>
              <Col xs={3} className="text-right">
                <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                <p><del>${originalPrice.toFixed(2)}</del></p>
              </Col>
              <Col xs={3}>
                <div className="d-flex flex-column align-items-end">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.product._id)}
                    className="mb-2"
                  >
                    Remove
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => console.log('Buy now', item.product._id)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;*/

/*thrreimport React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
          const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={4} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  className="cart-item-image"
                />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
                <div className="qty-selector-wrapper">
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="price-section">
                  <p className="price"><strong>${(price * quantity).toFixed(2)}</strong></p>
                  <p className="original-price"><del>${originalPrice.toFixed(2)}</del></p>
                </div>
                <div className="button-group">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.product._id)}
                    className="mr-2"
                  >
                    Remove
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => console.log('Buy now', item.product._id)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;*/

/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
          const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={3} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  className="cart-item-image"
                />
              </Col>
              <Col md={3}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2} className="d-flex align-items-center">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                />
              </Col>
              <Col md={2}>
                <div className="price-section">
                  <p className="price"><strong>${(price * quantity).toFixed(2)}</strong></p>
                  <p className="original-price"><del>${originalPrice.toFixed(2)}</del></p>
                </div>
              </Col>
              <Col md={2} className="d-flex flex-column justify-content-center">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.product._id)}
                  className="mb-2"
                >
                  Remove
                </Button>
                <Button
                  variant="success"
                  onClick={() => console.log('Buy now', item.product._id)}
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;good*/




/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleBuyNow = (productId) => {
    // Optional: Add any product-related data to the checkout state or URL
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          const price = item.product.price ? parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) : 0;
          const originalPrice = item.product.originalPrice ? parseFloat(item.product.originalPrice.replace(/[^0-9.-]+/g, "")) : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={3} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  className="cart-item-image"
                />
              </Col>
              <Col md={3}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2} className="d-flex align-items-center">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id, newQuantity)}
                />
              </Col>
              <Col md={2}>
                <div className="price-section">
                  <p className="price"><strong>${(price * quantity).toFixed(2)}</strong></p>
                  <p className="original-price"><del>${originalPrice.toFixed(2)}</del></p>
                </div>
              </Col>
              <Col md={2} className="d-flex flex-column justify-content-center">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.product._id)}
                  className="mb-2" style={{ borderRadius: '25px', padding: '10px' }}
                >
                  Remove
                </Button>
                <Button
                 style={{ borderRadius: '25px', padding: '10px' }}
                  variant="success"
                  onClick={() => handleBuyNow(item.product._id)} // Use the handleBuyNow function
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;*/


/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleBuyNow = () => {
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          // Ensure `price` and `originalPrice` are numbers
          const price = typeof item.product.price === 'number' ? item.product.price : 0;
          const originalPrice = typeof item.product.originalPrice === 'number' ? item.product.originalPrice : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.product._id.toString()} className="cart-item mb-3 align-items-center">
              <Col md={3} className="text-center">
                <Image
                  src={item.product.image || 'default-image-url'}
                  className="cart-item-image"
                  alt={item.product.name}
                />
              </Col>
              <Col md={3}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2} className="d-flex align-items-center">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product._id.toString(), newQuantity)}
                />
              </Col>
              <Col md={2}>
                <div className="price-section">
                  <p className="price"><strong>${(price * quantity).toFixed(2)}</strong></p>
                  {originalPrice > 0 && (
                    <p className="original-price"><del>${(originalPrice * quantity).toFixed(2)}</del></p>
                  )}
                </div>
              </Col>
              <Col md={2} className="d-flex flex-column justify-content-center">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.product._id.toString())}
                  className="mb-2"
                  style={{ borderRadius: '25px', padding: '10px' }}
                >
                  Remove
                </Button>
                <Button
                  style={{ borderRadius: '25px', padding: '10px' }}
                  variant="success"
                  onClick={handleBuyNow} // Adjusted to call handleBuyNow without productId
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;good*/


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/slices/cartSlice'; // Import from your slice
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/styles/Cart.css';
import QuantitySelector from '../components/Qty';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector(state => state.cart.items); // Adjust the path to items

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleBuyNow = () => {
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <Container>
      <h1>Review Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          // Ensure `price` and `originalPrice` are numbers
          const price = typeof item.price === 'number' ? item.price : 0;
          const originalPrice = typeof item.originalPrice === 'number' ? item.originalPrice : 0;
          const quantity = parseFloat(item.quantity) || 1;

          return (
            <Row key={item.id.toString()} className="cart-item mb-3 align-items-center">
              <Col md={3} className="text-center">
                <Image
                  src={item.image || 'default-image-url'}
                  className="cart-item-image"
                  alt={item.name}
                />
              </Col>
              <Col md={3}>
                <h5>{item.name}</h5>
              </Col>
              <Col md={2} className="d-flex align-items-center">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.id.toString(), newQuantity)}
                />
              </Col>
              <Col md={2}>
                <div className="price-section">
                  <p className="price"><strong>${(price * quantity).toFixed(2)}</strong></p>
                  {originalPrice > 0 && (
                    <p className="original-price"><del>${(originalPrice * quantity).toFixed(2)}</del></p>
                  )}
                </div>
              </Col>
              <Col md={2} className="d-flex flex-column justify-content-center">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.id.toString())}
                  className="mb-2"
                  style={{ borderRadius: '25px', padding: '10px' }}
                >
                  Remove
                </Button>
                <Button
                  style={{ borderRadius: '25px', padding: '10px' }}
                  variant="success"
                  onClick={handleBuyNow} // Adjusted to call handleBuyNow without productId
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default CartPage;

