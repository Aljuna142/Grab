
/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { removeFromCart, updateCart } from '../store/actions/cartActions';
import QuantitySelector from '../components/Qty';
import '../assets/styles/Cart.css'; // Assuming you want to use similar styles

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const shippingAddress = useSelector(state => state.checkout.shippingAddress);
  const orderSummary = useSelector(state => state.checkout.orderSummary);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleProceedToPayment = () => {
    // Handle proceeding to payment
    console.log('Proceeding to payment');
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <Row>
        <Col md={8}>
          <h2>Cart Details</h2>
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
                  </Col>
                </Row>
              );
            })
          )}
        </Col>
        <Col md={4}>
          <h2>Order Summary</h2>
          <div className="order-summary">
            <p><strong>Total Items:</strong> {cartItems.length}</p>
            <p><strong>Total Price:</strong> ${cartItems.reduce((total, item) => total + (parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) * item.quantity), 0).toFixed(2)}</p>
          </div>
          <h2>Shipping Address</h2>
          <div className="shipping-address">
            <p><strong>Address:</strong> {shippingAddress.address}</p>
            <p><strong>City:</strong> {shippingAddress.city}</p>
            <p><strong>State:</strong> {shippingAddress.state}</p>
            <p><strong>ZIP Code:</strong> {shippingAddress.zip}</p>
          </div>
          <Button
            variant="primary"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/
/*goodimport React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CheckoutPage.css';
import QuantitySelector from '../components/Qty';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const VAT_RATE = 0.05; // 5% VAT rate

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const priceString = item.product.price || '0';
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      const quantity = item.quantity || 1;
      console.log(`Price: ${price}, Quantity: ${quantity}, Accumulator: ${acc}`);
      return acc + (price * quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const vat = subtotal * VAT_RATE;
  const shipping = subtotal > 500 ? 0 : 20; // Example: Free shipping for orders above $500
  const total = subtotal + vat + shipping;

  console.log(`Subtotal: ${subtotal}, VAT: ${vat}, Shipping: ${shipping}, Total: ${total}`);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => {
            const priceString = item.product.price || '0';
            const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
            const quantity = item.quantity || 1;

            return (
              <Row key={item.product._id} className="checkout-item mb-3 align-items-center">
                <Col md={3} className="text-center">
                  <Image src={item.product.image || 'default-image-url'} thumbnail className="checkout-item-image" />
                </Col>
                <Col md={3}>
                  <h5>{item.product.name}</h5>
                </Col>
                <Col md={2}>
                  <QuantitySelector quantity={quantity} />
                </Col>
                <Col md={2} className="text-right">
                  <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                </Col>
                <Col md={2}>
                  <Button
                    variant="danger"
                    onClick={() => console.log('Remove item', item.product._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col md={4}>
          <h2>Order Summary</h2>
          <Table bordered className="order-summary">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total Price</strong></td>
                <td><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button
            variant="success"
            onClick={() => console.log('Proceed to Payment')}
          >
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/

/*import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image, Table, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CheckoutPage.css';
import QuantitySelector from '../components/Qty';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const VAT_RATE = 0.05; // 5% VAT rate

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const priceString = item.product.price || '0';
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      const quantity = item.quantity || 1;
      return acc + (price * quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const vat = subtotal * VAT_RATE;
  const shipping = subtotal > 500 ? 0 : 20; // Example: Free shipping for orders above $500
  const total = subtotal + vat + shipping;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => {
            const priceString = item.product.price || '0';
            const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
            const quantity = item.quantity || 1;

            return (
              <Row key={item.product._id} className="checkout-item mb-3 align-items-center">
                <Col md={3} className="text-center">
                  <Image src={item.product.image || 'default-image-url'} thumbnail className="checkout-item-image" />
                </Col>
                <Col md={3}>
                  <h5>{item.product.name}</h5>
                </Col>
                <Col md={2}>
                  <QuantitySelector quantity={quantity} />
                </Col>
                <Col md={2} className="text-right">
                  <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                </Col>
                <Col md={2}>
                  <Button
                    variant="danger"
                    onClick={() => console.log('Remove item', item.product._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col md={4}>
          <h2>Order Summary</h2>
          <Table bordered className="order-summary">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total Price</strong></td>
                <td><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Form onSubmit={handleFormSubmit}>
            <h2>Shipping Address</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" required />
            </Form.Group>

            <Form.Group controlId="formStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" placeholder="Enter your street" required />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" placeholder="Enter your area" required />
            </Form.Group>

            <Form.Group controlId="formLandmark">
              <Form.Label>Nearby Landmark</Form.Label>
              <Form.Control type="text" placeholder="Enter nearby landmark" />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" required />
            </Form.Group>

            <Form.Group controlId="formDistrict">
              <Form.Label>District</Form.Label>
              <Form.Control type="text" placeholder="Enter your district" required />
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter your country" required />
            </Form.Group>

            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your postal code (optional)" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Proceed to Payment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/


/*import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    // Handle form data (e.g., save to state, send to server, etc.)
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={2} className="text-center">
                <img src={item.product.image} alt={item.product.name} className="img-fluid" />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2}>
                <p><strong>${item.product.price}</strong></p>
                <p><del>${item.product.originalPrice}</del></p>
              </Col>
              <Col md={2}>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shippingCharges.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
          </Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formArea">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLandmark">
                <Form.Label>Nearby Landmark</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Address
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;no api call*/


/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/addresses', formData);
      setAddresses([...addresses, data]);
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={2} className="text-center">
                <img src={item.product.image} alt={item.product.name} className="img-fluid" />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2}>
                <p><strong>${item.product.price}</strong></p>
                <p><del>${item.product.originalPrice}</del></p>
              </Col>
              <Col md={2}>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shippingCharges.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
          </Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formArea">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLandmark">
                <Form.Label>Nearby Landmark</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Address
              </Button>
            </Form>
          )}
          {addresses.length > 0 && (
            <div className="mt-3">
              <h5>Saved Addresses</h5>
              <ul>
                {addresses.map(address => (
                  <li key={address._id}>
                    {address.name}, {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/
/*saved address import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses); // Ensure to access data.addresses
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([...addresses, data.address]); // Ensure to access data.address
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
      setEditingAddressId(null); // Reset editing state
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    const addressToEdit = addresses.find(address => address._id === addressId);
    if (addressToEdit) {
      setFormData({
        name: addressToEdit.name,
        mobile: addressToEdit.mobile,
        street: addressToEdit.street,
        area: addressToEdit.area,
        landmark: addressToEdit.nearbyLandmark || '',
        city: addressToEdit.city,
        district: addressToEdit.district,
        country: addressToEdit.country,
        postalCode: addressToEdit.postalCode || ''
      });
      setEditingAddressId(addressId);
      setShowForm(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={2} className="text-center">
                <img src={item.product.image} alt={item.product.name} className="img-fluid" />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2}>
                <p><strong>${item.product.price}</strong></p>
                <p><del>${item.product.originalPrice}</del></p>
              </Col>
              <Col md={2}>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shippingCharges.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
          </Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formArea">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLandmark">
                <Form.Label>Nearby Landmark</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {editingAddressId ? 'Update Address' : 'Save Address'}
              </Button>
            </Form>
          )}
          {addresses.length > 0 && (
            <div className="mt-3">
              <h5>Saved Addresses</h5>
              {addresses.map(address => (
                <div key={address._id} className="saved-address mb-3 p-3 border rounded">
                  <p>
                    <strong>Name:</strong> {address.name}<br />
                    <strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/

/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses); // Ensure you handle data structure properly
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAddressId) {
        // Update existing address
        const { data } = await axios.put(`http://localhost:5000/api/v1/address/${editingAddressId}`, formData);
        setAddresses(addresses.map(address => (address._id === editingAddressId ? data.address : address)));
      } else {
        // Add new address
        const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
        setAddresses([...addresses, data.address]);
      }
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setEditingAddressId(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (address) => {
    // Pre-fill form for editing
    setFormData({
      name: address.name,
      mobile: address.mobile,
      street: address.street,
      area: address.area,
      landmark: address.nearbyLandmark,
      city: address.city,
      district: address.district,
      country: address.country,
      postalCode: address.postalCode
    });
    setEditingAddressId(address._id);
    setShowForm(true); // Show the form to edit
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {cartItems.map((item) => (
            <Row key={item.product._id} className="cart-item mb-3 align-items-center">
              <Col md={2} className="text-center">
                <img src={item.product.image} alt={item.product.name} className="img-fluid" />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2}>
                <p><strong>${item.product.price}</strong></p>
                <p><del>${item.product.originalPrice}</del></p>
              </Col>
              <Col md={2}>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shippingCharges.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
          </Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formArea">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLandmark">
                <Form.Label>Nearby Landmark</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {editingAddressId ? 'Update Address' : 'Save Address'}
              </Button>
            </Form>
          )}
          {addresses.length > 0 && (
            <div className="mt-3">
              <h5>Saved Addresses</h5>
              {addresses.map(address => (
                <div key={address._id} className="saved-address">
                  <p>
                    <strong>Name:</strong> {address.name}<br />
                    <strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address)}>Edit</Button>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/


/*layout import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data]);
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  const handleCartModalClose = () => setShowCartModal(false);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="checkout-title">Checkout</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {/* First Column }
          <Row className="mb-4">
            <Col>
              <Button 
                variant="warning" 
                className="review-cart-btn" 
                onClick={() => setShowCartModal(true)}
              >
                Review Your Cart
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="order-summary-title">Order Summary</h3>
              <Table borderless>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping Charges</td>
                    <td>${shippingCharges.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>VAT (5%)</td>
                    <td>${vat.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${totalPrice.toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h4>Shipping Address</h4>
              {addresses.length > 0 && (
                <div className="saved-address">
                  <p>
                    <strong>Name:</strong> {addresses[0].name}<br />
                    <strong>Address:</strong> {addresses[0].street}, {addresses[0].area}, {addresses[0].city}, {addresses[0].district}, {addresses[0].country}, {addresses[0].postalCode}
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => handleEditAddress(addresses[0]._id)}>Edit</Button>
                </div>
              )}
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address Form' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          {/* Second Column (To be added later) }
        </Col>
      </Row>

      {/* Cart Modal }
      <Modal show={showCartModal} onHide={handleCartModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item) => (
            <Row key={item.product._id} className="mb-3">
              <Col md={2} className="text-center">
                <img src={item.product.image} alt={item.product.name} className="img-fluid" />
              </Col>
              <Col md={4}>
                <h5>{item.product.name}</h5>
              </Col>
              <Col md={2}>
                <p><strong>${item.product.price}</strong></p>
                <p><del>${item.product.originalPrice}</del></p>
              </Col>
              <Col md={2}>
                <p>Quantity: {item.quantity}</p>
              </Col>
            </Row>
          ))}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CheckoutPage;*/



/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1 className="checkout-title">Checkout</h1>
          <Button className="review-cart-btn" onClick={() => setShowCartModal(true)}>
            Review Your Cart
          </Button>
          <Modal show={showCartModal} onHide={() => setShowCartModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Cart Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cartItems.map((item) => (
                <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                  <Col md={2} className="text-center">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                  </Col>
                  <Col md={4}>
                    <h5>{item.product.name}</h5>
                  </Col>
                  <Col md={2}>
                    <p><strong>${item.product.price}</strong></p>
                    <p><del>${item.product.originalPrice}</del></p>
                  </Col>
                  <Col md={2}>
                    <p>Quantity: {item.quantity}</p>
                  </Col>
                  <Col md={2} className="text-right">
                    <Button variant="danger">Remove</Button>
                  </Col>
                </Row>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowCartModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <Col md={4}>
          <h3 className="order-summary-title">Order Summary</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>${shippingCharges.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td>${vat.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
          </Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formArea">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLandmark">
                <Form.Label>Nearby Landmark</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Address
              </Button>
            </Form>
          )}
          {addresses.length > 0 && (
            <div className="mt-3">
              <h5>Saved Addresses</h5>
              {addresses.map(address => (
                <div key={address._id} className="saved-address">
                  <p><strong>Name:</strong> {address.name}</p>
                  <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                  <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/




/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <Button className="review-cart-btn" onClick={() => setShowCartModal(true)}>
              Review Your Cart
            </Button>
            <Modal show={showCartModal} onHide={() => setShowCartModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Cart Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {cartItems.map((item) => (
                  <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                    <Col md={2} className="text-center">
                      <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                    </Col>
                    <Col md={4}>
                      <h5>{item.product.name}</h5>
                    </Col>
                    <Col md={2}>
                      <p><strong>${item.product.price}</strong></p>
                      <p><del>${item.product.originalPrice}</del></p>
                    </Col>
                    <Col md={2}>
                      <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col md={2} className="text-right">
                      <Button variant="danger">Remove</Button>
                    </Col>
                  </Row>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowCartModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Addresses</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          {/* Second column content will be added later }
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/



/*goodimport React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => (
                <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                  <Col md={2} className="text-center">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <h5>{item.product.name}</h5>
                  </Col>
                  <Col md={2}>
                    <p><strong>${item.product.price}</strong></p>
                  </Col>
                  <Col md={2}>
                    <p>Quantity: {item.quantity}</p>
                  </Col>
                </Row>
              ))}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Addresses</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          {/* Second column content will be added later }
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/




/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);

  // Ensure price is treated as a number for calculations
  const subtotal = cartItems.reduce((total, item) => total + (parseFloat(item.product.price) * item.quantity), 0);
  const shippingCharges = 20; // Example shipping charge
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => (
                <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                  <Col md={2} className="text-center">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <h5>{item.product.name}</h5>
                  </Col>
                  <Col md={2}>
                    <p><strong>${parseFloat(item.product.price).toFixed(2)}</strong></p>
                  </Col>
                  <Col md={2}>
                    <p>Quantity: {item.quantity}</p>
                  </Col>
                </Row>
              ))}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Addresses</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          {/* Second column content will be added later }
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;good*/



/*firts col good import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = parseFloat(item.quantity) || 1;
    return total + (price * quantity);
  }, 0);

  // Example shipping charge and VAT calculation
  const shippingCharges = 20;
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => {
                const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
                const quantity = parseFloat(item.quantity) || 1;
                return (
                  <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                    <Col md={2} className="text-center">
                      <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h5>{item.product.name}</h5>
                    </Col>
                    <Col md={2}>
                      <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    </Col>
                    <Col md={2}>
                      <p>Quantity: {quantity}</p>
                    </Col>
                  </Row>
                );
              })}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Addresses</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          {/* Second column content will be added later}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage; first col*/

 /*00000import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import axios from 'axios';
import '../assets/styles/CheckoutPage.css';
import EstimatedDelivery from '../components/EstimatedDelivery';
import CouponCode from '../components/CouponCode';
import ProceedToPayment from '../components/ProceedToPayment';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = parseFloat(item.quantity) || 1;
    return total + (price * quantity);
  }, 0);

  // Example shipping charge and VAT calculation
  const shippingCharges = 20;
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  // Calculate estimated delivery date
  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDays = 5; // Average of 4-5 days
    today.setDate(today.getDate() + deliveryDays);
    return today.toDateString(); // Formats date to a readable string
  };

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

  const [couponCode, setCouponCode] = useState('');

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    // Add logic to apply the coupon here
    console.log('Applying coupon code:', couponCode);
  };

  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);


  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
    console.log('Selected payment option:', option);
  };
  



  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => {
                const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
                const quantity = parseFloat(item.quantity) || 1;
                return (
                  <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                    <Col md={2} className="text-center">
                      <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h5>{item.product.name}</h5>
                    </Col>
                    <Col md={2}>
                      <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    </Col>
                    <Col md={2}>
                      <p>Quantity: {quantity}</p>
                    </Col>
                  </Row>
                );
              })}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Address</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong></strong> {address.name}</p>
                    <p><strong></strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        

        <Col md={6}>
        <EstimatedDelivery calculateDeliveryDate={calculateDeliveryDate} />

<CouponCode
  couponCode={couponCode}
  handleCouponChange={handleCouponChange}
  handleApplyCoupon={handleApplyCoupon}
/>

<ProceedToPayment handlePaymentOptionSelect={handlePaymentOptionSelect} />
<Button className="place-order" onClick={handlePlaceOrder}
variant='success'>Place Order</Button>

</Col>




      </Row>
    </Container>
  );
};

export default CheckoutPage;*/


/*import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Correct import for navigation
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';
import EstimatedDelivery from '../components/EstimatedDelivery';
import CouponCode from '../components/CouponCode';
import ProceedToPayment from '../components/ProceedToPayment';
import { selectAddress, deleteAddress } from '../store/actions/addressActions';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = parseFloat(item.quantity) || 1;
    return total + (price * quantity);
  }, 0);

  // Example shipping charge and VAT calculation
  const shippingCharges = 20;
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  // Calculate estimated delivery date
  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDays = 5; // Average of 4-5 days
    today.setDate(today.getDate() + deliveryDays);
    return today.toDateString(); // Formats date to a readable string
  };

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const dispatch = useDispatch();
const selectedAddressId = useSelector((state) => state.address.selectedAddressId);



  /*kkconst handleEditAddress = (addressId) => {
    // Handle edit functionality
    console.log('Editing address with ID:', addressId);
    // Example implementation: fetch address details and populate form for editing
  };

const handleEditAddress = (addressId) => {
  const addressToEdit = addresses.find(address => address._id === addressId);
  if (addressToEdit) {
    setFormData({
      name: addressToEdit.name,
      mobile: addressToEdit.mobile,
      street: addressToEdit.street,
      area: addressToEdit.area,
      landmark: addressToEdit.landmark,
      city: addressToEdit.city,
      district: addressToEdit.district,
      country: addressToEdit.country,
      postalCode: addressToEdit.postalCode
    });
    setShowForm(true);
  }
};



// Handle selecting an address
const handleSelectAddress = (addressId) => {
  dispatch(selectAddress(addressId));
};

/* kk// Handle deleting an address
const handleDeleteAddress = (addressId) => {
  dispatch(deleteAddress(addressId));
};

const handleDeleteAddress = async (addressId) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/address/${addressId}`);
    setAddresses(addresses.filter(address => address._id !== addressId));
    if (selectedAddressId === addressId) {
      dispatch(selectAddress(null)); // Clear selected address if deleted
    }
  } catch (error) {
    console.error('Error deleting address:', error);
  }
};



  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    // Addconst logic to apply the coupon here
    console.log('Applying coupon code:', couponCode);
  };

  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
    console.log('Selected payment option:', option);
  };
    
  const handlePlaceOrder = async () => {
    try {
      console.log('Placing order with the following details:');
      console.log('Cart Items:', cartItems);
      console.log('Address:', formData);
      console.log('Coupon Code:', couponCode);
      console.log('Selected Payment Option:', selectedPaymentOption);
  
      // Make sure cartItems has valid quantities
      const validCartItems = cartItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity || 1, // Ensure quantity is set
        // ...other fields
      }));
  
      const response = await axios.post('http://localhost:5000/api/v1/orders', {
        orderItems: validCartItems,
        shippingAddress: formData,
        paymentMethod: selectedPaymentOption,
        itemsPrice: subtotal,
        taxPrice: vat,
        shippingPrice: shippingCharges,
        totalPrice: totalPrice
      });
  
      console.log('Order response:', response.data);
      alert('Your order has been placed successfully!');
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };
  


  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => {
                const price = parseFloat(item.product.price.replace(/[^0-9.-]+/g, "")) || 0;
                const quantity = parseFloat(item.quantity) || 1;
                return (
                  <Row key={item.product._id} className="cart-item mb-3 align-items-center">
                    <Col md={2} className="text-center">
                      <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h5>{item.product.name}</h5>
                    </Col>
                    <Col md={2}>
                      <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    </Col>
                    <Col md={2}>
                      <p>Quantity: {quantity}</p>
                    </Col>
                  </Row>
                );
              })}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Address</h5>
                {addresses.map(address => (
                  <div key={address._id} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteAddress(address._id)}>Delete</Button>
    <Button variant="info" size="sm" onClick={() => handleSelectAddress(address._id)}>Select</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
        





        

        <Col md={6}>
          <EstimatedDelivery calculateDeliveryDate={calculateDeliveryDate} />
          
          <CouponCode
            couponCode={couponCode}
            handleCouponChange={handleCouponChange}
            handleApplyCoupon={handleApplyCoupon}
          />

          <ProceedToPayment
            handlePaymentOptionSelect={handlePaymentOptionSelect}
            showPaymentOptions={showPaymentOptions}
            setShowPaymentOptions={setShowPaymentOptions}
          />

          <Button className="place-order" onClick={handlePlaceOrder} variant='success'>
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;*/






import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/CheckoutPage.css';
import EstimatedDelivery from '../components/EstimatedDelivery';
import CouponCode from '../components/CouponCode';
import ProceedToPayment from '../components/ProceedToPayment';
import { selectAddress, deleteAddress } from '../store/actions/addressActions';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    district: '',
    country: '',
    postalCode: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = item.product.price || 0; // Assuming price is a number
    const quantity = parseFloat(item.quantity) || 1;
    return total + (price * quantity);
  }, 0);

  // Example shipping charge and VAT calculation
  const shippingCharges = 20;
  const vat = subtotal * 0.05; // 5% VAT
  const totalPrice = subtotal + shippingCharges + vat;

  // Calculate estimated delivery date
  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDays = 5; // Average of 4-5 days
    today.setDate(today.getDate() + deliveryDays);
    return today.toDateString(); // Formats date to a readable string
  };

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/address');
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/address', formData);
      setAddresses([data.address, ...addresses]); // Add new address at the start
      setFormData({
        name: '',
        mobile: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        district: '',
        country: '',
        postalCode: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const dispatch = useDispatch();
  const selectedAddressId = useSelector((state) => state.address.selectedAddressId);

  const handleEditAddress = (addressId) => {
    const addressToEdit = addresses.find(address => address._id === addressId);
    if (addressToEdit) {
      setFormData({
        name: addressToEdit.name,
        mobile: addressToEdit.mobile,
        street: addressToEdit.street,
        area: addressToEdit.area,
        landmark: addressToEdit.landmark,
        city: addressToEdit.city,
        district: addressToEdit.district,
        country: addressToEdit.country,
        postalCode: addressToEdit.postalCode
      });
      setShowForm(true);
    }
  };

  const handleSelectAddress = (addressId) => {
    dispatch(selectAddress(addressId));
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/address/${addressId}`);
      setAddresses(addresses.filter(address => address._id !== addressId));
      if (selectedAddressId === addressId) {
        dispatch(selectAddress(null)); // Clear selected address if deleted
      }
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    console.log('Applying coupon code:', couponCode);
  };

  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
    console.log('Selected payment option:', option);
  };

  const handlePlaceOrder = async () => {
    try {
      console.log('Placing order with the following details:');
      console.log('Cart Items:', cartItems);
      console.log('Address:', formData);
      console.log('Coupon Code:', couponCode);
      console.log('Selected Payment Option:', selectedPaymentOption);

      const validCartItems = cartItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity || 1,
      }));

      const response = await axios.post('http://localhost:5000/api/v1/orders', {
        orderItems: validCartItems,
        shippingAddress: formData,
        paymentMethod: selectedPaymentOption,
        itemsPrice: subtotal,
        taxPrice: vat,
        shippingPrice: shippingCharges,
        totalPrice: totalPrice
      });

      console.log('Order response:', response.data);
      alert('Your order has been placed successfully!');
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="checkout-title">Checkout</h1>

          <div className="first-column">
            <div className="cart-items">
              <h3 className="section-title">Review Your Cart</h3>
              {cartItems.map((item) => {
                const price = item.product.price || 0; // Assuming price is a number
                const quantity = parseFloat(item.quantity) || 1;
                return (
                  <Row key={item.product._id.toString()} className="cart-item mb-3 align-items-center">
                    <Col md={2} className="text-center">
                      <img src={item.product.image} alt={item.product.name} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h5>{item.product.name}</h5>
                    </Col>
                    <Col md={2}>
                      <p><strong>${(price * quantity).toFixed(2)}</strong></p>
                    </Col>
                    <Col md={2}>
                      <p>Quantity: {quantity}</p>
                    </Col>
                  </Row>
                );
              })}
            </div>

            <h3 className="order-summary-title">Order Summary</h3>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td>${vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="shipping-address">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Shipping Address' : 'Enter Shipping Address'}
              </Button>
              {showForm && (
                <Form onSubmit={handleFormSubmit} className="mt-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLandmark">
                    <Form.Label>Nearby Landmark</Form.Label>
                    <Form.Control
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Address
                  </Button>
                </Form>
              )}
            </div>

            {addresses.length > 0 && (
              <div className="saved-addresses mt-3">
                <h5>Saved Address</h5>
                {addresses.map(address => (
                  <div key={address._id.toString()} className="saved-address">
                    <p><strong>Name:</strong> {address.name}</p>
                    <p><strong>Address:</strong> {address.street}, {address.area}, {address.city}, {address.district}, {address.country}, {address.postalCode}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleEditAddress(address._id)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteAddress(address._id)}>Delete</Button>
                    <Button variant="info" size="sm" onClick={() => handleSelectAddress(address._id)}>Select</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>

        <Col md={6}>
          <EstimatedDelivery calculateDeliveryDate={calculateDeliveryDate} />

          <CouponCode
            couponCode={couponCode}
            handleCouponChange={handleCouponChange}
            handleApplyCoupon={handleApplyCoupon}
          />

          <ProceedToPayment
            handlePaymentOptionSelect={handlePaymentOptionSelect}
            showPaymentOptions={showPaymentOptions}
            setShowPaymentOptions={setShowPaymentOptions}
          />

          <Button className="place-order" onClick={handlePlaceOrder} variant='success'>
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;






