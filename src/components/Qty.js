
/*import React from 'react';
import { Form, Button } from 'react-bootstrap';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleIncrease = () => onQuantityChange(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  return (
    <div className="d-flex align-items-center">
      <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
    </div>
  );
};

export default QuantitySelector;*/


/*import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const Qty = ({ quantity, onQuantityChange }) => {
    return (
        <div className="qty-selector">
            <Row>
                <Col xs={12}>
                    <Form.Group controlId="quantity">
                        <div className="d-flex align-items-center">
                            <Button variant="outline-secondary" onClick={() => onQuantityChange(-1)}>-</Button>
                            <Form.Control
                                type="text"
                                value={quantity}
                                readOnly
                                style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                            />
                            <Button variant="outline-secondary" onClick={() => onQuantityChange(1)}>+</Button>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </div>
    );
};

export default Qty;*/
// components/Qty.js

/*perfect import React from 'react';
import { Button, Form } from 'react-bootstrap';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    onQuantityChange(Math.max(1, quantity - 1));
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="d-flex align-items-center">
      <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
    </div>
  );
};

export default QuantitySelector;*/


import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/Qty.css'; // Ensure you have a corresponding CSS file

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="qty-selector">
      <Button
        className="qty-button minus"
        variant="danger"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <span className="qty-value">{quantity}</span>
      <Button
        className="qty-button plus"
        variant="success"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
