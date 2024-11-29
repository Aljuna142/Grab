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




/*without storing database import React, { useState } from 'react';
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
            {/* Add country flag input component or select here }
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
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;*/

/*correct import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get address data from Redux at the top level of the component
  const addressData = useSelector((state) => state.address);

  const handleProceedClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        navigate('/payment');
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;correct*/



/*121import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get address data from Redux at the top level of the component
  const addressData = useSelector((state) => state.address);

  const handleProceedClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        navigate('/payment');
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;121*/






/*address id import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use useSelector at the top level
  const emailFromRedux = useSelector((state) => state.address.email);

  const handleProceedClick = async () => {
    try {
      // You can use the emailFromRedux here
      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailFromRedux,
          // Other address fields...
        }),
      });

      if (response.ok) {
        navigate('/payment');
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;address id */

/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail, setAddressId } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use useSelector at the top level
  const emailFromRedux = useSelector((state) => state.address.email);
  const customerName = useSelector((state) => state.address.customerName);
  const mobileNumber = useSelector((state) => state.address.mobileNumber);

  const handleProceedClick = async () => {
    try {
      console.log('Address Info:', { email: emailFromRedux, customerName, mobileNumber });

      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailFromRedux,
          customerName,
          mobileNumber,
          // Include other necessary address fields if needed
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        // Save the address ID from the response
        dispatch(setAddressId(data.address._id)); // Ensure your backend returns the address ID
        navigate('/shipping');
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;without add ress id */


/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail, setAddressId } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use useSelector at the top level
  const emailFromRedux = useSelector((state) => state.address.email);
  const customerName = useSelector((state) => state.address.customerName);
  const mobileNumber = useSelector((state) => state.address.mobileNumber);

  const handleProceedClick = async () => {
    try {
      console.log('Address Info:', { email: emailFromRedux, customerName, mobileNumber });

      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailFromRedux,
          customerName,
          mobileNumber,
          // Include other necessary address fields if needed
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        dispatch(setAddressId(data.address._id)); // Ensure your backend returns the address ID
        navigate('/shipping', { state: { addressId: data.address._id } });
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <button className="proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default InformationPage;ok*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerName, setMobileNumber, setEmail, setAddressId } from '../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/InformationPage.css';

const InformationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailFromRedux = useSelector((state) => state.address.email);
  const customerName = useSelector((state) => state.address.customerName);
  const mobileNumber = useSelector((state) => state.address.mobileNumber);

  const handleProceedClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/addresses/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailFromRedux,
          customerName,
          mobileNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setAddressId(data.address._id)); 
        navigate('/shipping', { state: { addressId: data.address._id } });
      } else {
        console.error('Failed to save address');
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
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
            onChange={(e) => dispatch(setCustomerName(e.target.value))}
          />
          <div className="mobile-number">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-box"
              onChange={(e) => dispatch(setMobileNumber(e.target.value))}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
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



