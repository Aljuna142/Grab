import React from 'react';
// Add relevant styles here

const OrdersSummary = () => {
  return (
    <div className="orders-summary">
      <div className="summary-header">
        <h2>Orders Summary</h2>
        <div className="date-range">
          <span>Select Date Range</span>
        </div>
      </div>
      <hr />
      <div className="order-stats">
        <div className="stat-circle">0</div>
        <div className="bar-indicators">
          <div className="bar delivered">Delivered (0%)</div>
          <div className="bar canceled">Canceled (0%)</div>
          <div className="bar rejected">Rejected (0%)</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;
