/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/InvoiceTable.css'; // Ensure you have a CSS file specific for this component

const InvoiceTable = ({ items = [], shippingCost = 0 }) => {
  // Debugging
  console.log('Items in InvoiceTable:', items);
  console.log('Shipping Cost in InvoiceTable:', shippingCost);

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
      className="invoice-table" 
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

      {/* Shipping Row  }
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

export default InvoiceTable;*/



import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/styles/InvoiceTable.css'; // Ensure you have this CSS file

const InvoiceTable = ({ items = [], shippingCost = 0 }) => {
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

  return (
    <div className="invoice-table">
      <Row className="table-header">
        <Col className="table-cell product-name-cell">Product</Col>
        <Col className="table-cell qty-cell">Qty</Col>
        <Col className="table-cell price-cell">Amount Per/pc</Col>
        <Col className="table-cell subtotal-cell">Subtotal</Col>
      </Row>
      {items.map((item, index) => (
        <Row key={index} className="table-row">
          <Col className="table-cell product-name-cell">
            <p className="product-name">{item.name}</p>
          </Col>
          <Col className="table-cell qty-cell">
            {item.qty || 0}
          </Col>
          <Col className="table-cell price-cell">
            {(parseFloat(item.price) || 0).toFixed(2)} 
          </Col>
          <Col className="table-cell subtotal-cell">
            {((parseFloat(item.price) || 0) * (parseFloat(item.qty) || 0)).toFixed(2)} 
          </Col>
        </Row>
      ))}

      {/* Shipping Row */}
      <Row className="table-row">
        <Col className="table-cell product-name-cell">Shipping</Col>
        <Col className="table-cell qty-cell">-</Col>
        <Col className="table-cell price-cell">-</Col>
        <Col className="table-cell subtotal-cell">
          {shippingCost > 0 ? `${shippingCost.toFixed(2)} AED` : 'Free'}
        </Col>
      </Row>

      {/* VAT and Amount Excluding VAT */}
      <Row className="table-row">
        <Col className="table-cell product-name-cell">Amount excluding VAT</Col>
        <Col className="table-cell qty-cell">-</Col>
        <Col className="table-cell price-cell">-</Col>
        <Col className="table-cell subtotal-cell">
          {amountExcludingVat.toFixed(2)} 
        </Col>
      </Row>
      <Row className="table-row">
        <Col className="table-cell product-name-cell">VAT (5%) Included</Col>
        <Col className="table-cell qty-cell">-</Col>
        <Col className="table-cell price-cell">-</Col>
        <Col className="table-cell subtotal-cell">
          {vatAmount.toFixed(2)}
        </Col>
      </Row>

      {/* Total Row */}
      <Row className="table-row" style={{ fontWeight: 'bold' }}>
        <Col className="table-cell product-name-cell">Total</Col>
        <Col className="table-cell qty-cell">-</Col>
        <Col className="table-cell price-cell">-</Col>
        <Col className="table-cell subtotal-cell">
          {(totalAmount + shippingCost).toFixed(2)} AED
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceTable;
