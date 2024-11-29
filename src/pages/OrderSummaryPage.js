/*import React from 'react';
import OrderSummary from '../components/OrderSummary'; // Adjust the import path if needed
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';

const OrderSummaryPage = () => {
  return (
    <div className="order-summary-page">
        <CheckoutBreadcrumb />
      <OrderSummary />
    </div>
  );
};

export default OrderSummaryPage;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary'; // Adjust the import path if needed
import CheckoutBreadcrumb from '../components/CheckoutBreadcrumb';

const OrderSummaryPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/information'); // Redirect to the Checkout page
  };

  return (
    <div className="order-summary-page">
      <CheckoutBreadcrumb />
      <OrderSummary />
      <div className="button-container">
        <button className="proceed-btn" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
