
import React from 'react';
import '../assets/styles/SavingsDisplay.css'; // Ensure you import the CSS file

const SavingsDisplay = ({ originalPrice, currentPrice, quantity }) => {
  const totalOriginalPrice = originalPrice * quantity;
  const totalCurrentPrice = currentPrice * quantity;
  const savings = totalOriginalPrice - totalCurrentPrice;

  const percentageSaved = (savings / totalOriginalPrice * 100).toFixed(2);

  return (
    <div className="savings-display">
      {percentageSaved > 0 && (
        <p className="savings-text">
          You save <strong>{percentageSaved}%</strong>
        </p>
      )}
    </div>
  );
};

export default SavingsDisplay;
