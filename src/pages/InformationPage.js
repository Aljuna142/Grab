/*import React from 'react';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';

const InformationPage = () => {
  return (
    <div>
      <CheckoutBreadcrumb />
      {/* Your form and other content }
    </div>
  );
};

export default InformationPage;*/
/*import React from 'react';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb'; // Adjust the path as needed

const InformationPage = () => {
  return (
    <div>
      <CheckoutBreadcrumb />
      {/* Rest of your information page content }
    </div>
  );
};

export default InformationPage;okay*/


/*without button and remainder import React from 'react';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb'; // Adjust the path as needed
import '../assets/styles/InformationPage.css'; // Import the CSS file for styling

const InformationPage = () => {
  return (
    <div className="information-page">
      <CheckoutBreadcrumb />
      <div className="first-column">
        <h2 className="title">BASIC INFO</h2>
        <input
          type="text"
          placeholder="Customer Name"
          className="input-box"
        />
        <div className="mobile-number">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="input-box"
          />
          {/* Add country flag input component or select here }
        </div>
        <input
          type="email"
          placeholder="Your Email"
          className="input-box"
        />
      </div>
      <div className="second-column">
        {/* Content for the second column }
      </div>
    </div>
  );
};

export default InformationPage;*/


/*import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb'; // Adjust the path as needed
import '../assets/styles/InformationPage.css'; // Import the CSS file for styling

const InformationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProceedClick = () => {
    navigate('/shipping'); // Navigate to the shipping page
  };

  return (
    <div className="information-page">
      <CheckoutBreadcrumb />
      <div className="first-column">
        <h2 className="title">BASIC INFO</h2>
        <input
          type="text"
          placeholder="Customer Name"
          className="input-box"
        />
        <div className="mobile-number">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="input-box"
          />
          {/* Add country flag input component or select here }
        </div>
        <input
          type="email"
          placeholder="Your Email"
          className="input-box"
        />
        <p className="reminder">Please sign in</p>
        <button className="proceed-button" onClick={handleProceedClick}>
          Proceed
        </button>
      </div>
      <div className="second-column">
        {/* Content for the second column }
      </div>
    </div>
  );
};

export default InformationPage;*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb'; // Adjust the path as needed
import '../assets/styles/InformationPage.css'; // Import the CSS file for styling

const InformationPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Placeholder for authentication
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProceedClick = () => {
    navigate('/shipping'); // Navigate to the shipping page
  };

  return (
    <div className="information-page">
      <CheckoutBreadcrumb />
      <div className="first-column">
        <h2 className="title">BASIC INFO</h2>
        <input
          type="text"
          placeholder="Customer Name"
          className="input-box"
        />
        <div className="mobile-number">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="input-box"
          />
          {/* Add country flag input component or select here 
        </div>
        <input
          type="email"
          placeholder="Your Email"
          className="input-box"
        />
        {!isSignedIn && (
          <div className="login-warning">
            <p>Please log in</p>
          </div>
        )}
        <p className="reminder"></p>
        <button className="proceed-button" onClick={handleProceedClick}>
          Proceed
        </button>
      </div>
      <div className="second-column">
        {/* Content for the second column 
      </div>
    </div>
  );
};

export default InformationPage;*/




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb'; // Adjust the path as needed
import '../assets/styles/InformationPage.css'; // Import the CSS file for styling

const InformationPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Placeholder for authentication
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProceedClick = () => {
    navigate('/shipping'); // Navigate to the shipping page
  };

  return (
    <div className="information-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          <h2 className="title">BASIC INFO</h2>
          <input
            type="text"
            placeholder="Customer Name"
            className="input-box"
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
            />
            {/* Add country flag input component or select here */}
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
          />
          {!isSignedIn && (
            <div className="login-warning">
              <p>Please log in</p>
            </div>
          )}
          <p className="reminder">Please sign in</p>
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column */}
        </div>
      </div>
    </div>
  );
};

export default InformationPage;

