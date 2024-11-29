
/*import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const orderTotal = 450; // Replace with your dynamic total

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* First Card }
          <div className="card">
            <h2 className="title">Delivery Method</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Delivery</span>
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Pick Up from Store</span>
              </label>
            </div>
          </div>
          {/* Proceed to Payment Button }
          <div className="button-container">
            <Link to="/payment" className="proceed-button">Proceed to Payment</Link>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;*/



/* button import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling


const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [orderTotal, setOrderTotal] = useState(0); // Initial orderTotal state
  const [error, setError] = useState(null); // State to hold any errors
  const [paymentMethod, setPaymentMethod] = useState(null); // State for payment method

  // Get product ID from location state or fallback to 0
  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          // Set orderTotal based on the fetched product price
          setOrderTotal(data.product.price);
        } else {
          // Handle error from API
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        // Handle network error
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle place order
  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }

    try {
      const orderData = {
        orderTotal,
        paymentMethod,
        // Include other necessary order details here
      };

      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Navigate to the confirmation page or show a success message
        navigate('/order-confirmation');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to place the order');
      }
    } catch (err) {
      setError('An error occurred while placing the order');
    }
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* Delivery Method Card }
          <div className="card">
            <h2 className="title">Delivery Method</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Delivery</span>
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Pick Up from Store</span>
              </label>
            </div>
          </div>

          {/* Payment Information Card }
          <div className="card">
            <h2 className="title">Payment Information</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Cash on Delivery</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Pay by Card</span>
              </label>
            </div>
          </div>

          {/* Display error if any }
          {error && <div className="error-message">{error}</div>}

          {/* Place Order Button }
          <div className="button-container">
            <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
         
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;button*/



/*without storing delivery typ import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [orderTotal, setOrderTotal] = useState(0); // Initial orderTotal state
  const [error, setError] = useState(null); // State to hold any errors
  const [paymentMethod, setPaymentMethod] = useState(null); // State for payment method

  // Get product ID from location state or fallback to 0
  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          // Set orderTotal based on the fetched product price
          setOrderTotal(data.product.price);
        } else {
          // Handle error from API
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        // Handle network error
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle place order
  const handleProceedClick = () => {
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }

    // Navigate to the payment page or show a success message
    navigate('/shipping');
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* Delivery Method Card }
          <div className="card">
            <h2 className="title">Delivery Method</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Delivery</span>
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="delivery" />
                <span className="radio-label">Pick Up from Store</span>
              </label>
            </div>
          </div>

          {/* Payment Information Card }
          <div className="card">
            <h2 className="title">Payment Information</h2>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Cash on Delivery</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={handlePaymentChange}
                />
                <span className="radio-label">Pay by Card</span>
              </label>
            </div>
          </div>

          {/* Display error if any }
          {error && <div className="error-message">{error}</div>}

          {/* Proceed Button }
          <div className="button-container">
            <button onClick={handleProceedClick} className="proceed-button">Proceed</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
         
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;without db mtd*/






/*some errors import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState(0);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState(null); // State for delivery method

  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          setOrderTotal(data.product.price);
        } else {
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleProceedClick = async () => {
    if (!paymentMethod || !deliveryMethod) {
      setError('Please select both delivery and payment methods.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderItems: [{ /* Add your order items here }],
          shippingAddress: { /* Add your shipping address here },
          paymentMethod,
          deliveryMethod,
          itemsPrice: orderTotal,
          taxPrice: 0,
          shippingPrice: deliveryPrice === 'Free' ? 0 : 15.00,
          totalPrice: orderTotal + (deliveryPrice === 'Free' ? 0 : 15.00),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      // Proceed to the shipping page
      navigate('/shipping');
    } catch (err) {
      setError(err.message || 'An error occurred while placing the order.');
    }
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* Delivery Method Card }
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
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  onChange={handleDeliveryChange}
                />
                <span className="radio-label">Pick Up from Store</span>
              </label>
            </div>
          </div>

          {/* Payment Information Card }
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

          {/* Display error if any }
          {error && <div className="error-message">{error}</div>}

          {/* Proceed Button }
          <div className="button-container">
            <button onClick={handleProceedClick} className="proceed-button">Proceed</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;some errors */

/*okay import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [orderTotal, setOrderTotal] = useState(0); // Initial orderTotal state
  const [error, setError] = useState(null); // State to hold any errors
  const [paymentMethod, setPaymentMethod] = useState(null); // State for payment method
  const [deliveryMethod, setDeliveryMethod] = useState(null); // State for delivery method

  // Get product ID from location state or fallback to 0
  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          // Set orderTotal based on the fetched product price
          setOrderTotal(data.product.price);
        } else {
          // Handle error from API
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        // Handle network error
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle delivery method change
  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  // Handle proceed button click
  const handleProceedClick = () => {
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }
    if (!deliveryMethod) {
      setError('Please select a delivery method.');
      return;
    }

    // Navigate to the shipping page with selected details
    navigate('/shipping', { state: { paymentMethod, deliveryMethod } });
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
          {/* Delivery Method Card }
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
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  onChange={handleDeliveryChange}
                />
                <span className="radio-label">Pick Up from Store</span>
              </label>
            </div>
          </div>

          {/* Payment Information Card }
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

          {/* Display error if any }
          {error && <div className="error-message">{error}</div>}

          {/* Proceed Button }
          <div className="button-container">
            <button onClick={handleProceedClick} className="proceed-button">Proceed</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;*/




/*without address id import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState(0);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState(null);

  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          setOrderTotal(data.product.price);
        } else {
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = orderTotal >= 500 ? 'Free' : '15.00 AED';

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleProceedClick = () => {
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }
    if (!deliveryMethod) {
      setError('Please select a delivery method.');
      return;
    }

    navigate('/shipping', { state: { paymentMethod, deliveryMethod, orderTotal } });
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
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
                <span className="price">{deliveryPrice}</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="Pick Up from Store"
                  onChange={handleDeliveryChange}
                />
                <span className="radio-label">Pick Up from Store</span>
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

          {error && <div className="error-message">{error}</div>}

          <div className="button-container">
            <button onClick={handleProceedClick} className="proceed-button">Proceed</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column }
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;without address id */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';
import '../assets/styles/PaymentPage.css';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState(0);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  // Retrieve the address ID from Redux state
  const addressId = useSelector((state) => state.address.addressId);

  const productId = location.state?.productId || 0;

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        console.log('Fetching product price for product ID:', productId);

        const response = await fetch(`http://localhost:5000/api/v1/product/${productId}`);
        const data = await response.json();

        if (response.ok) {
          console.log('Product Data:', data);
          // Assuming VAT is included in the product price
          setOrderTotal(data.product.price);
        } else {
          setError(data.message || 'Failed to fetch product price');
        }
      } catch (err) {
        setError('An error occurred while fetching the product price');
      }
    };

    if (productId) {
      fetchProductPrice();
    }
  }, [productId]);

  const deliveryPrice = deliveryMethod === 'Delivery' && orderTotal >= 500 ? 'Free' : '15.00 AED';

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleProceedClick = () => {
    console.log('Proceeding with:', { paymentMethod, deliveryMethod, orderTotal, addressId });

    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }
    if (!deliveryMethod) {
      setError('Please select a delivery method.');
      return;
    }

    // Calculate final order total based on delivery method
    const finalOrderTotal = deliveryMethod === 'Delivery' && orderTotal < 500 ? orderTotal + 15 : orderTotal;

    navigate('/shipping', {
      state: {
        paymentMethod,
        deliveryMethod,
        orderTotal: finalOrderTotal,
        addressId, // Pass the address ID to the ShippingPage
      },
    });
  };

  return (
    <div className="payment-page">
      <CheckoutBreadcrumb />
      <div className="columns">
        <div className="column first-column">
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
                <span className="price">{deliveryMethod === 'Delivery' ? deliveryPrice : '0 AED'}</span>
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

          {error && <div className="error-message">{error}</div>}

          <div className="button-container">
            <button onClick={handleProceedClick} className="proceed-button">Proceed</button>
          </div>
        </div>
        <div className="column second-column">
          {/* Content for the second column */}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
