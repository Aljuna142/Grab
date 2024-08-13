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

import React from 'react';
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
          {/* First Card */}
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
          {/* Second Card */}
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
          {/* Proceed Button */}
          <div className="proceed-container">
            <button className="proceed-button" onClick={handleProceedClick}>Proceed to Payment</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column */}
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
