
// src/components/OrderTable.js
/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items }) => {
  return (
    <div className="order-table">
      <Row className="table-header">
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row">
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell text-center">
            {item.quantity}
          </Col>
          <Col className="table-cell text-center">
            {item.price.toFixed(2)} AED
          </Col>
          <Col className="table-cell text-center">
            {(item.price * item.quantity).toFixed(2)} AED
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default OrderTable;*/


/*okay import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items, shippingCost = 0 }) => {
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden' 
      }}
    >
      <Row className="table-header" style={{ backgroundColor: '#A3D02C', color: '#000' }}>
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row">
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell text-center">
            {item.quantity}
          </Col>
          <Col className="table-cell text-center">
            {item.price.toFixed(2)} AED
          </Col>
          <Col className="table-cell text-center">
            {(item.price * item.quantity).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row }
      <Row className="table-row">
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell text-center">-</Col>
        <Col className="table-cell text-center">-</Col>
        <Col className="table-cell text-center">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* Total Row }
      <Row className="table-row" style={{ fontWeight: 'bold' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell text-center">-</Col>
        <Col className="table-cell text-center">-</Col>
        <Col className="table-cell text-center">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;*/



/*good import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items, shippingCost = 0 }) => {
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const vatPercentage = 5; // VAT is 5%
  const vatAmount = totalAmount * (vatPercentage / 100);
  const amountExcludingVat = totalAmount - vatAmount;

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden',
        fontFamily: '"Arial", sans-serif' // Font Family applied here
      }}
    >
      <Row 
        className="table-header" 
        style={{ 
          backgroundColor: '#A3D02C', 
          color: '#000', 
          textAlign: 'center',  // Centering the text
          fontWeight: 'bold',    // Making the text bold
          fontFamily:'inherit' // Font Family applied here
        }}
      >
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row" style={{ textAlign: 'center' }}>
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell">
            {item.quantity}
          </Col>
          <Col className="table-cell">
            {item.price.toFixed(2)} AED
          </Col>
          <Col className="table-cell">
            {(item.price * item.quantity).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Amount excluding VAT</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {amountExcludingVat.toFixed(2)} AED
        </Col>
      </Row>
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">VAT (5%) Included</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {vatAmount.toFixed(2)} AED
        </Col>
      </Row>

      {/* Total Row }
      <Row className="table-row" style={{ fontWeight: 'bold', textAlign: 'center' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;*/



/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items = [], shippingCost = 0 }) => {
  // Ensure all values are numbers and handle edge cases
  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 0;
    return total + (price * quantity);
  }, 0);

  const vatPercentage = 5; // VAT is 5%
  const vatAmount = totalAmount * (vatPercentage / 100);
  const amountExcludingVat = totalAmount - vatAmount;

  console.log('Total Amount:', totalAmount);
  console.log('VAT Amount:', vatAmount);
  console.log('Amount Excluding VAT:', amountExcludingVat);

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden',
        fontFamily: '"Arial", sans-serif' // Font Family applied here
      }}
    >
      <Row 
        className="table-header" 
        style={{ 
          backgroundColor: '#A3D02C', 
          color: '#000', 
          textAlign: 'center',  // Centering the text
          fontWeight: 'bold',    // Making the text bold
          fontFamily:'inherit' // Font Family applied here
        }}
      >
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row" style={{ textAlign: 'center' }}>
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell">
            {item.quantity || 0}
          </Col>
          <Col className="table-cell">
            {(parseFloat(item.price) || 0).toFixed(2)} AED
          </Col>
          <Col className="table-cell">
            {((parseFloat(item.price) || 0) * (parseFloat(item.quantity) || 0)).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Amount excluding VAT</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {amountExcludingVat.toFixed(2)} AED
        </Col>
      </Row>
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">VAT (5%) Included</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {vatAmount.toFixed(2)} AED
        </Col>
      </Row>

      {/* Total Row }
      <Row className="table-row" style={{ fontWeight: 'bold', textAlign: 'center' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;00*/



 import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items = [], shippingCost = 0 }) => {
  // Ensure that items is an array of objects with correct price and quantity
  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 0;
    return total + (price * quantity);
  }, 0);

  const vatPercentage = 5; // VAT is 5%
  const vatAmount = totalAmount * (vatPercentage / 100);
  const amountExcludingVat = totalAmount - vatAmount;

  console.log('Total Amount:', totalAmount);
  console.log('VAT Amount:', vatAmount);
  console.log('Amount Excluding VAT:', amountExcludingVat);

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden',
        fontFamily: '"Arial", sans-serif' // Font Family applied here
      }}
    >
      <Row 
        className="table-header" 
        style={{ 
          backgroundColor: '#A3D02C', 
          color: '#000', 
          textAlign: 'center',  // Centering the text
          fontWeight: 'bold',    // Making the text bold
          fontFamily:'inherit' // Font Family applied here
        }}
      >
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row" style={{ textAlign: 'center' }}>
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell">
            {item.quantity || 0}
          </Col>
          <Col className="table-cell">
            {(parseFloat(item.price) || 0).toFixed(2)} AED
          </Col>
          <Col className="table-cell">
            {((parseFloat(item.price) || 0) * (parseFloat(item.quantity) || 0)).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row */}
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT and Amount Excluding VAT*/ }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Amount excluding VAT</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {amountExcludingVat.toFixed(2)} AED
        </Col>
      </Row>
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">VAT (5%) Included</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {vatAmount.toFixed(2)} AED
        </Col>
      </Row>

      {/* Total Row*/ }
      <Row className="table-row" style={{ fontWeight: 'bold', textAlign: 'center' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;

/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items = [], shippingCost = 0 }) => {
  // Debugging
  console.log('Items in OrderTable:', items);
  console.log('Shipping Cost in OrderTable:', shippingCost);

  // Ensure items is an array and contains valid data
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No items to display.</p>;
  }

  // Calculate total amount
  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.qty) || 0;
    return total + (price * quantity);
  }, 0);

  // VAT percentage
  const vatPercentage = 5; // VAT is 5%
  const vatAmount = totalAmount * (vatPercentage / 100);
  const amountExcludingVat = totalAmount - vatAmount;

  // Debugging calculations
  console.log('Total Amount:', totalAmount);
  console.log('VAT Amount:', vatAmount);
  console.log('Amount Excluding VAT:', amountExcludingVat);

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden',
        fontFamily: '"Arial", sans-serif' // Font Family applied here
      }}
    >
      <Row 
        className="table-header" 
        style={{ 
          backgroundColor: '#A3D02C', 
          color: '#000', 
          textAlign: 'center',  // Centering the text
          fontWeight: 'bold',    // Making the text bold
          fontFamily:'inherit' // Font Family applied here
        }}
      >
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row" style={{ textAlign: 'center' }}>
          <Col className="table-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell">
            {item.qty || 0}
          </Col>
          <Col className="table-cell">
            {(parseFloat(item.price) || 0).toFixed(2)} AED
          </Col>
          <Col className="table-cell">
            {((parseFloat(item.price) || 0) * (parseFloat(item.qty) || 0)).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT and Amount Excluding VAT }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Amount excluding VAT</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {amountExcludingVat.toFixed(2)} AED
        </Col>
      </Row>
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">VAT (5%) Included</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {vatAmount.toFixed(2)} AED
        </Col>
      </Row>

      {/* Total Row }
      <Row className="table-row" style={{ fontWeight: 'bold', textAlign: 'center' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;order */


/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderTable.css'; // Ensure you have this CSS file

const OrderTable = ({ items = [], shippingCost = 0 }) => {
  // Calculate the total amount, excluding VAT and including VAT
  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 0;
    return total + (price * quantity);
  }, 0);

  const vatPercentage = 5; // VAT is 5%
  const vatAmount = totalAmount * (vatPercentage / 100);
  const amountExcludingVat = totalAmount - vatAmount;

  console.log('Total Amount:', totalAmount);
  console.log('VAT Amount:', vatAmount);
  console.log('Amount Excluding VAT:', amountExcludingVat);

  // Handle case where there are no items
  if (items.length === 0) {
    return (
      <div className="order-table-empty" style={{ textAlign: 'center', padding: '20px' }}>
        <p>No items in the order.</p>
      </div>
    );
  }

  return (
    <div 
      className="order-table" 
      style={{ 
        border: '1px solid #A3D02C', 
        borderRadius: '4px', 
        overflow: 'hidden',
        fontFamily: '"Arial", sans-serif' // Font Family applied here
      }}
    >
      <Row 
        className="table-header" 
        style={{ 
          backgroundColor: '#A3D02C', 
          color: '#000', 
          textAlign: 'center',  // Centering the text
          fontWeight: 'bold',    // Making the text bold
          fontFamily: 'inherit' // Font Family applied here
        }}
      >
        <Col className="table-cell">Product</Col>
        <Col className="table-cell">Qty</Col>
        <Col className="table-cell">Amount Per/pc</Col>
        <Col className="table-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row" style={{ textAlign: 'center' }}>
          <Col className="table-cell">
            <p className="product-name">{item.name || 'Unnamed Product'}</p>
          </Col>
          <Col className="table-cell">
            {item.quantity || 0}
          </Col>
          <Col className="table-cell">
            {(parseFloat(item.price) || 0).toFixed(2)} AED
          </Col>
          <Col className="table-cell">
            {((parseFloat(item.price) || 0) * (parseFloat(item.quantity) || 0)).toFixed(2)} AED
          </Col>
        </Row>
      ))}

      {/* Shipping Row }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Shipping</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT and Amount Excluding VAT }
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">Amount excluding VAT</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {amountExcludingVat.toFixed(2)} AED
        </Col>
      </Row>
      <Row className="table-row" style={{ textAlign: 'center' }}>
        <Col className="table-cell">VAT (5%) Included</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {vatAmount.toFixed(2)} AED
        </Col>
      </Row>

      {/* Total Row }
      <Row className="table-row" style={{ fontWeight: 'bold', textAlign: 'center' }}>
        <Col className="table-cell">Total</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">-</Col>
        <Col className="table-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default OrderTable;good every*/


