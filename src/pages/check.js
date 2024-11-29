
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
  const cartItems = useSelector(state => state.cart.cartItems) || []; // Default to empty array
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
  const subtotal = Array.isArray(cartItems) ? cartItems.reduce((total, item) => {
    const price = item.product.price || 0; // Assuming price is a number
    const quantity = parseFloat(item.quantity) || 1;
    return total + (price * quantity);
  }, 0) : 0; // Default to 0 if cartItems is not an array

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
