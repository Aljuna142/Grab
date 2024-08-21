/*import React from 'react';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <input
              type="email"
              placeholder="Email Address"
              className="input-box"
            />
            <button className="edit-button">Edit</button>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
            />
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;*/




/*good import React from 'react';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
               
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
            />
          </div>
          {/* Proceed Button }
          <div className="proceed-container">
            <button className="proceed-button">Proceed to Payment</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;*/

/*button import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleProceedClick = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
            />
          </div>
          {/* Proceed Button }
          <div className="proceed-container">
            <button className="proceed-button" onClick={handleProceedClick}>Proceed to Payment</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;button*/

 /*import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handlePlaceOrderClick = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
            />
          </div>
          {/* Place Order Button }
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;*/


/*correct import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for getting passed state and useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  // State to hold address information
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
  });

  // Retrieve address data from location state
  useEffect(() => {
    if (location.state) {
      const { email, streetAddress, apartment, city, country, state } = location.state;
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
      });
    }
  }, [location.state]);

  // Function to handle button click
  const handlePlaceOrderClick = () => {
    navigate('/order-confirmation'); // Navigate to the payment page
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
          
        </div>
        <div className="column second-column">
          {/* Content for the second column }
          <OrderSummary />
          {/* Place Order Button }
        <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div> 
        
      </div>
    </div>
  );
};

export default ShippingPage;correct*/





/*waitimport React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for getting passed state and useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  // State to hold address information
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
  });

  // Retrieve address data from location state
  useEffect(() => {
    if (location.state) {
      const { email, streetAddress, apartment, city, country, state } = location.state;
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
      });
    }
  }, [location.state]);

  // Function to handle button click
  const handlePlaceOrderClick = () => {
    navigate('/order-confirmation '); // Navigate to the payment page
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card}
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
          {/* Place Order Button}
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div>
        <div className="column second-column">
          {/* No content in the second column}
        </div> 
      </div>
    </div>
  );
};

export default ShippingPage;wait*/



/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectCartItems } from '../store/slices/cartSlice';
import { placeOrderStart, placeOrderSuccess, placeOrderFailure } from '../store/slices/orderSlice'; // Ensure these actions are correctly imported
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector(selectCartItems);
  const { paymentMethod, deliveryMethod, orderTotal } = location.state || {};
  const orderStatus = useSelector(state => state.order.orderStatus);
  const error = useSelector(state => state.order.error);

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  useEffect(() => {
    // Clear any previous order state
    dispatch(placeOrderStart());
  }, [dispatch]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!email || !address || !city || !country || !postalCode) {
      alert('Please fill out all required fields.');
      return;
    }

    const orderData = {
      orderItems: cartItems.map(item => ({
        product: item.id, // Ensure product ID is sent
        name: item.name, // Ensure name is sent
        qty: item.quantity, // Ensure quantity is sent
        image: item.image, // Ensure image is sent
        price: item.price // Ensure price is sent
      })),
      deliveryMethod,
      shippingAddress: {
        address, // Use address field
        apartment,
        city,
        country,
        state,
        postalCode,
      },
      paymentMethod,
      itemsPrice: orderTotal,
      taxPrice: orderTotal * 0.05, // Example VAT calculation
      shippingPrice: deliveryMethod === 'Delivery' && orderTotal >= 500 ? 0 : 15,
      totalPrice: orderTotal + (deliveryMethod === 'Delivery' && orderTotal >= 500 ? 0 : 15) + (orderTotal * 0.05),
    };

    try {
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        dispatch(placeOrderSuccess(result));
        navigate('/confirmation');
      } else {
        const result = await response.json();
        dispatch(placeOrderFailure(result.message || 'Order placement failed'));
      }
    } catch (err) {
      dispatch(placeOrderFailure('An error occurred while placing the order'));
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="shipping-form">
        <h2 className="form-title">Shipping Information</h2>
        {error && (
          <div className="error-message">
            {typeof error === 'string' ? error : error.message || 'An unknown error occurred'}
          </div>
        )}
        <form onSubmit={handlePlaceOrder}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Apartment</label>
            <input
              type="text"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;*/

/*121import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { useSelector } from 'react-redux'; // Import useSelector to get email from Redux
import '../assets/styles/ShippingPage.css'; 

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  // Retrieve email from Redux state
  const emailFromRedux = useSelector((state) => state.address.email);

  // State to hold address information
  const [address, setAddress] = useState({
    email: emailFromRedux, // Set email from Redux
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
  });

  useEffect(() => {
    if (location.state) {
      const { email, streetAddress, apartment, city, country, state } = location.state;
      setAddress({
        email: email || emailFromRedux, // Fallback to emailFromRedux if not provided in location.state
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
      });
    }
  }, [location.state, emailFromRedux]);

  const handlePlaceOrderClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        navigate('/order-confirmation'); // Navigate to order confirmation page
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
          
        </div>
        <div className="column second-column">
          {/* Content for the second column }
          <OrderSummary />
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div> 
        
      </div>
    </div>
  );
};

export default ShippingPage;order placed but missing some information121*/

/*address id not automatically taking import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for getting passed state and useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css'; // Import the CSS file for styling

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  
  // Retrieve address ID and other address details from location state
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
  });

  const [addressId, setAddressId] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { addressId, email, streetAddress, apartment, city, country, state } = location.state;
      setAddressId(addressId); // Set address ID
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
      });
    }
  }, [location.state]);

  // Function to handle button click
  const handlePlaceOrderClick = async () => {
    try {
      // Update address data on the backend
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT', // Use PUT for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...address,
          postalCode: '', // Ensure all fields are included
          customerName: '', // Add customerName and mobileNumber if needed
          mobileNumber: '',
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation'); // Redirect after successful update
      } else {
        console.error('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          {/* Second Card }
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
          <OrderSummary />
          {/* Place Order Button }
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;address id not taking automatically*/


/*waite import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state for address
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
  });

  const [addressId, setAddressId] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { addressId, email, streetAddress, apartment, city, country, state } = location.state;
      setAddressId(addressId); // Set the ID using addressId
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
      });
    }
  }, [location.state]);

  const handlePlaceOrderClick = async () => {
    if (!addressId) {
      console.error('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...address,
          postalCode: '', // Include postal code if needed
        }),
      });

      if (response.ok) {
        // Assuming you want to finalize the order after updating the address
        navigate('/order-confirmation');
      } else {
        console.error('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target

              .value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
        </div>
        <div className="column second-column">
          <OrderSummary />
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;waite */


/*ship import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state for address
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '', // Add postalCode if needed
  });

  const [addressId, setAddressId] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { addressId, email, streetAddress, apartment, city, country, state, postalCode } = location.state;
      setAddressId(addressId); // Set the ID using addressId
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
        postalCode: postalCode || '', // Initialize postalCode if available
      });
    }
  }, [location.state]);

  const handlePlaceOrderClick = async () => {
    if (!addressId) {
      console.error('Address ID is missing');
      return;
    }

    try {
      // Replace with actual cart items and calculations
      const cartItems = []; // Fetch or pass cart data from context or state
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05; // 5% VAT
      const shippingPrice = itemsPrice > 500 ? 0 : 15; // Free shipping for orders above 500 AED
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      // POST request to create the order
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems, // Adjust according to your cart data structure
          deliveryMethod: 'Delivery',
          shippingAddress: address,
          paymentMethod: 'Card', // Replace with actual payment method
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>
          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
          </div>
        </div>
        <div className="column second-column">
          <OrderSummary />
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;ship */


/*hey import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state for address and payment details
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  useEffect(() => {
    if (location.state) {
      const { addressId, email, streetAddress, apartment, city, country, state, postalCode } = location.state;
      setAddressId(addressId);
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
        postalCode: postalCode || '',
      });
    }
  }, [location.state]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      console.error('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      const cartItems = []; // Fetch or pass cart data from context or state
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05; // 5% VAT
      const shippingPrice = deliveryMethod === 'Delivery' && itemsPrice > 500 ? 0 : 15; // Adjust shipping price based on delivery method
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      // POST request to create the order
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="edit-button">EDIT</button>
            </div>
          </div>

          <div className="card">
            <h2 className="title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
          </div>

          <div className="card">
            <h2 className="title">Delivery Method</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Delivery"
                  onChange={handleDeliveryChange}
                />
                <span className="radio-label">Delivery</span>
                <span className="price">15.00 AED</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  onChange={handleDeliveryChange}
                />
                <span className="radio-label">Pick Up from Store</span>
                <span className="price">0 AED</span>
              </label>
            </div>
          </div>

          <div className="card">
            <h2 className="title">Payment Information</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Cash on Delivery</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Pay by Card"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Pay by Card</span>
              </label>
            </div>
          </div>
        </div>
        <div className="column second-column">
          <OrderSummary />
          <div className="proceed-container">
            <button className="place-order-button" onClick={handlePlaceOrderClick}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;*/


/*okay align import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state for address and payment details
  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  useEffect(() => {
    if (location.state) {
      const {
        addressId,
        email,
        streetAddress,
        apartment,
        city,
        country,
        state,
        postalCode
      } = location.state;
      setAddressId(addressId);
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
        postalCode: postalCode || '',
      });
    }
  }, [location.state]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      console.error('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      // Fetch or pass cart data from context or state
      const cartItems = []; 
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05; // 5% VAT
      const shippingPrice = deliveryMethod === 'Delivery' && itemsPrice > 500 ? 0 : 15; // Adjust shipping price based on delivery method
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      // POST request to create the order
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
                            <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Method</h2>
            <div className="shipping-delivery-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Delivery"
                  checked={deliveryMethod === 'Delivery'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Delivery</span>
                <span className="shipping-price">15.00 AED</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  checked={deliveryMethod === 'Pick Up from Store'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Pick Up from Store</span>
                <span className="shipping-price">0 AED</span>
              </label>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Information</h2>
            <div className="shipping-payment-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Cash on Delivery</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Pay by Card"
                  checked={paymentMethod === 'Pay by Card'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Pay by Card</span>
              </label>
            </div>
          </div>
        </div>
        <div className="column second-column">
          <OrderSummary />
          <div className="proceed-container">
            <button className="shipping-place-order-button" onClick={handlePlaceOrderClick}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;alignmwent ok*/



/*pend import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  useEffect(() => {
    if (location.state) {
      const {
        addressId,
        email,
        streetAddress,
        apartment,
        city,
        country,
        state,
        postalCode
      } = location.state;
      setAddressId(addressId);
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
        postalCode: postalCode || '',
      });
    }
  }, [location.state]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      console.error('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      // Fetch or pass cart data from context or state
      const cartItems = []; 
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05; // 5% VAT
      const shippingPrice = deliveryMethod === 'Delivery' && itemsPrice > 500 ? 0 : 15; // Adjust shipping price based on delivery method
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      // POST request to create the order
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Method</h2>
            <div className="shipping-delivery-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Delivery"
                  checked={deliveryMethod === 'Delivery'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Delivery</span>
                <span className="shipping-price">15.00 AED</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  checked={deliveryMethod === 'Pick Up from Store'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Pick Up from Store</span>
                <span className="shipping-price">0 AED</span>
              </label>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Information</h2>
            <div className="shipping-payment-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Cash on Delivery</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Pay by Card"
                  checked={paymentMethod === 'Pay by Card'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Pay by Card</span>
              </label>
            </div>
          </div>

         
          </div>
        </div>
        <div className="column second-column">
          <OrderSummary />
           {/* Place Order Button }
           <div className="proceed-container">
            <button
              className="shipping-place-order-button"
              onClick={handlePlaceOrderClick}
            >
              Place Order
            </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;pend*/


/*layout submit import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify'; // Make sure to install react-toastify

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  useEffect(() => {
    if (location.state) {
      const {
        addressId,
        email,
        streetAddress,
        apartment,
        city,
        country,
        state,
        postalCode
      } = location.state;
      setAddressId(addressId);
      setAddress({
        email: email || '',
        streetAddress: streetAddress || '',
        apartment: apartment || '',
        city: city || '',
        country: country || '',
        state: state || '',
        postalCode: postalCode || '',
      });
    }
  }, [location.state]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      // Update address in the database
      const response = await fetch(`http://localhost:5000/api/v1/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      console.error('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      // Fetch or pass cart data from context or state
      const cartItems = []; 
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05; // 5% VAT
      const shippingPrice = deliveryMethod === 'Delivery' && itemsPrice > 500 ? 0 : 15; // Adjust shipping price based on delivery method
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      // POST request to create the order
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Method</h2>
            <div className="shipping-delivery-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Delivery"
                  checked={deliveryMethod === 'Delivery'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Delivery</span>
                <span className="shipping-price">15.00 AED</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  checked={deliveryMethod === 'Pick Up from Store'}
                  onChange={handleDeliveryChange}
                />
                <span className="shipping-radio-label">Pick Up from Store</span>
                <span className="shipping-price">0 AED</span>
              </label>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Information</h2>
            <div className="shipping-payment-methods">
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Cash on Delivery</span>
              </label>
              <label className="shipping-radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="Pay by Card"
                  checked={paymentMethod === 'Pay by Card'}
                  onChange={handlePaymentChange}
                />
                <span className="shipping-radio-label">Pay by Card</span>
              </label>
            </div>
          </div>
        </div>

        <div className="column second-column">
          <OrderSummary />
          {/* Place Order Button }
          <div className="proceed-container">
            <button
              className="shipping-place-order-button"
              onClick={handlePlaceOrderClick}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;layput button*/


/*addreess id success import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      console.error('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      const cartItems = []; 
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05;
      const shippingPrice = deliveryMethod === 'Delivery' && itemsPrice > 500 ? 0 : 15;
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <button
            className="shipping-place-order-button"
            onClick={handlePlaceOrderClick}
          >
            Place Order
          </button>
        </div>

        <div className="column second-column">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;address id success*/
/*place order problem import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    // Update shipping price when delivery method or cart items change
    if (deliveryMethod === 'Delivery') {
      const cartItems = []; // Replace with actual cart items fetching logic
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      const cartItems = []; 
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05;
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        toast.success('Your order has been placed successfully');
        navigate('/order-confirmation');
      } else {
        toast.warning('Failed to place the order');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>

          
        </div>

        <div className="column second-column">
          <OrderSummary />
          <button
            className="shipping-place-order-button"
            onClick={handlePlaceOrderClick}
          >
            Place Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;place order*/


/*goodu import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice'; // Import the selector
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems); // Get cart items from the store

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    // Update shipping price when delivery method or cart items change
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]); // Add cartItems as dependency

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const taxPrice = itemsPrice * 0.05;
      const totalPrice = itemsPrice + taxPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems, // Use the actual cart items here
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        toast.success('Your order has been placed successfully');
        navigate('/order-confirmation');
      } else {
        toast.warning('Failed to place the order');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>

          
        </div>

        <div className="column second-column">
          <OrderSummary />
          <button
            className="shipping-place-order-button"
            onClick={handlePlaceOrderClick}
          >
            Place Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;goodu */



/*order success import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice'; // Import the selector
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems); // Get cart items from the store

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    // Update shipping price when delivery method or cart items change
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]); // Add cartItems as dependency

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };
 {/* const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }
  
    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;
  
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems,
          deliveryMethod,
          shippingAddress: address,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });
  
      if (response.ok) {
        toast.success('Your order has been placed successfully');
        navigate('/order-confirmation');
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };}


  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }
  
    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;
  
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems.map(item => ({
            product: item.id, // Ensure 'product' field is included
            name: item.name, 
            qty: item.quantity, // Ensure 'qty' field is included
            image: item.image, 
            price: item.price,
            originalPrice: item.originalPrice,
          })),
          deliveryMethod,
          shippingAddress: {
            address: address.streetAddress, // Ensure 'address' field is included
            apartment: address.apartment,
            city: address.city,
            country: address.country,
            state: address.state,
            postalCode: address.postalCode,
          },
          paymentMethod,
          paymentResult: 'Pending', // Ensure 'paymentResult' field is included
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });
  
      if (response.ok) {
        toast.success('Your order has been placed successfully');
        navigate('/order-confirmation/');
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };
  

  
  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>

          
        </div>

        <div className="column second-column">
          <OrderSummary />
          <button
            className="shipping-place-order-button"
            onClick={handlePlaceOrderClick}
          >
            Place Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;order sucesss*/

 /*no user import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice'; // Import the selector
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems); // Get cart items from the store

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    // Update shipping price when delivery method or cart items change
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]); // Add cartItems as a dependency

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems.map(item => ({
            product: item.id, // Ensure 'product' field is included
            name: item.name, 
            qty: item.quantity, // Ensure 'qty' field is included
            image: item.image, 
            price: item.price,
            originalPrice: item.originalPrice,
          })),
          deliveryMethod,
          shippingAddress: {
            address: address.streetAddress, // Ensure 'address' field is included
            apartment: address.apartment,
            city: address.city,
            country: address.country,
            state: address.state,
            postalCode: address.postalCode,
          },
          paymentMethod,
          paymentResult: 'Pending', // Ensure 'paymentResult' field is included
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Fetch the response data
        const orderId = data._id; // Get the order ID from the response
        toast.success('Your order has been placed successfully');
        navigate(`/order-confirmation/${orderId}`); // Use the orderId in the navigation
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>
        </div>

        <div className="column second-column">
          <OrderSummary />
          <button
            className="shipping-place-order-button"
            onClick={handlePlaceOrderClick}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;no user */




/*okayimport React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice';
import { selectUser } from '../store/slices/authSlice';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  // Console log the entire state
  const authState = useSelector((state) => state.auth);
  console.log('Auth state:', authState);

  const user = useSelector(selectUser);
  console.log('User:', user);

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    if (!user) {
      toast.warning('Please sign in to place an order');
      navigate('/login'); // Redirect to login page if not authenticated
      return;
    }

    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: cartItems.map(item => ({
            product: item.id,
            name: item.name,
            qty: item.quantity,
            image: item.image,
            price: item.price,
            originalPrice: item.originalPrice,
          })),
          deliveryMethod,
          shippingAddress: {
            address: address.streetAddress,
            apartment: address.apartment,
            city: address.city,
            country: address.country,
            state: address.state,
            postalCode: address.postalCode,
          },
          paymentMethod,
          paymentResult: 'Pending',
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const orderId = data._id;
        toast.success('Your order has been placed successfully');
        navigate(`/order-confirmation/${orderId}`);
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>
        </div>

        <div className="column second-column">
          <OrderSummary />
        </div>
      </div>
      <div className="shipping-footer">
        <button
          className="shipping-place-order-button"
          onClick={handlePlaceOrderClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ShippingPage;*/
/*again redirect to sign in import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice';
import { selectUser } from '../store/slices/authSlice';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUser);

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure the token is sent
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };

  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }

    if (!user) {
      toast.warning('Please sign in to place an order');
      navigate('/login'); // Redirect to login page if not authenticated
      return;
    }

    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure the token is sent
        },
        body: JSON.stringify({
          orderItems: cartItems.map(item => ({
            product: item.id,
            name: item.name,
            qty: item.quantity,
            image: item.image,
            price: item.price,
            originalPrice: item.originalPrice,
          })),
          deliveryMethod,
          shippingAddress: {
            address: address.streetAddress,
            apartment: address.apartment,
            city: address.city,
            country: address.country,
            state: address.state,
            postalCode: address.postalCode,
          },
          paymentMethod,
          paymentResult: 'Pending',
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const orderId = data._id;
        toast.success('Your order has been placed successfully');
        navigate(`/order-confirmation/${orderId}`);
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };

  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>
        </div>

        <div className="column second-column">
          <OrderSummary />
        </div>
      </div>
      <div className="shipping-footer">
        <button
          className="shipping-place-order-button"
          onClick={handlePlaceOrderClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ShippingPage;again redirect to sign in*/


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../store/slices/cartSlice';
import { selectUser, selectAuthStatus, selectAuthError } from '../store/slices/authSlice';
import '../assets/styles/ShippingPage.css';
import { toast } from 'react-toastify';

const ShippingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUser);
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);

  const [address, setAddress] = useState({
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const [addressId, setAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { addressId } = location.state;
      setAddressId(addressId);
      // Fetch and set the address details using addressId if necessary
    }
  }, [location.state]);

  useEffect(() => {
    if (deliveryMethod === 'Delivery') {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      if (itemsPrice > 500) {
        setShippingPrice(0);
      } else {
        setShippingPrice(15);
      }
    } else {
      setShippingPrice(0);
    }
  }, [deliveryMethod, cartItems]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!addressId) {
      toast.warning('Address ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/v1/addresses/address/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure the token is sent
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        toast.success('Address updated successfully');
      } else {
        toast.warning('Failed to update address');
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while updating the address');
    }
  };
  const handlePlaceOrderClick = async () => {
    if (!addressId || !paymentMethod || !deliveryMethod) {
      toast.warning('Address ID, Payment Method, or Delivery Method is missing');
      return;
    }
  
    // Check if the user is authenticated
    if (!user) {
      // User is not authenticated; redirect to login page
      toast.warning('Please sign in to place an order');
      navigate('/login'); // Redirect to login page if not authenticated
      return;
    }
  
    try {
      const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const shippingPrice = deliveryMethod === 'Delivery' ? (itemsPrice > 500 ? 0 : 15) : 0;
      const totalPrice = itemsPrice + shippingPrice;
  
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure the token is sent
        },
        body: JSON.stringify({
          orderItems: cartItems.map(item => ({
            product: item.id,
            name: item.name,
            qty: item.quantity,
            image: item.image,
            price: item.price,
            originalPrice: item.originalPrice,
          })),
          deliveryMethod,
          shippingAddress: {
            address: address.streetAddress,
            apartment: address.apartment,
            city: address.city,
            country: address.country,
            state: address.state,
            postalCode: address.postalCode,
          },
          paymentMethod,
          paymentResult: 'Pending',
          itemsPrice,
          shippingPrice,
          totalPrice,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const orderId = data._id;
        toast.success('Your order has been placed successfully');
        navigate(`/order-confirmation/${orderId}`);
      } else {
        const error = await response.json();
        toast.warning(`Failed to place the order: ${error.message}`);
      }
    } catch (err) {
      console.error('An error occurred', err);
      toast.warning('An error occurred while placing the order');
    }
  };
  


  return (
    <div className="shipping-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <div className="shipping-card">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="shipping-input-box"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
              />
              <button className="shipping-edit-button">EDIT</button>
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Billing</h2>
            <input
              type="text"
              placeholder="Street Address"
              className="shipping-input-box"
              value={address.streetAddress}
              onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="shipping-input-box"
              value={address.apartment}
              onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
            />
            <div className="shipping-address-fields">
              <input
                type="text"
                placeholder="Town/City"
                className="shipping-input-box"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="shipping-input-box"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="State (optional)"
              className="shipping-input-box"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="shipping-input-box"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
            />
            <button
              className="shipping-submit-button"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Delivery Methods</h2>
            <div>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryMethod === 'Delivery'}
                onChange={handleDeliveryChange}
              />
              Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pick-up"
                checked={deliveryMethod === 'Pick-up'}
                onChange={handleDeliveryChange}
              />
              Pick-up
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Payment Methods</h2>
            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                value="Pay by Card"
                checked={paymentMethod === 'Pay by Card'}
                onChange={handlePaymentChange}
              />
              Pay by Card
            </div>
          </div>

          <div className="shipping-card">
            <h2 className="shipping-title">Shipping Price</h2>
            <p className="shipping-price">
              {deliveryMethod === 'Delivery' ? `Shipping Price: ${shippingPrice} AED` : 'Shipping is free for Pick-up'}
            </p>
          </div>
        </div>

        <div className="column second-column">
          <OrderSummary />
        </div>
      </div>
      <div className="shipping-footer">
        <button
          className="shipping-place-order-button"
          onClick={handlePlaceOrderClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ShippingPage;

