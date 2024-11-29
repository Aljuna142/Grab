
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


/*import React from 'react';
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

export default QuantitySelector;*/

// QuantitySelector.js
/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/actions/cartActions'; // Verify this path
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/Qty.css'; // Import your custom CSS

const QuantitySelector = ({ productId, initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 0);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      dispatch(updateCart(productId, newQuantity));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      dispatch(updateCart(productId, newQuantity));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
        -
      </Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

QuantitySelector.propTypes = {
  productId: PropTypes.string.isRequired,
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;actions*/



/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/slices/cartSlice'; // Import from your slice
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/Qty.css'; // Import your custom CSS

const QuantitySelector = ({ productId, initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 0);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
        -
      </Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

QuantitySelector.propTypes = {
  productId: PropTypes.string.isRequired,
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;cal good but input 0*/


/*import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/slices/cartSlice'; // Import from your slice
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/Qty.css'; // Import your custom CSS

const QuantitySelector = ({ productId, quantity: propQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(propQuantity || 0);
  const dispatch = useDispatch();

  // Sync local state with prop changes
  useEffect(() => {
    setQuantity(propQuantity);
  }, [propQuantity]);

  const handleDecrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
        -
      </Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

QuantitySelector.propTypes = {
  productId: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired, // Expect the current quantity as a prop
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;input show number but odd*/




/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/slices/cartSlice'; // Import from your slice
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/Qty.css'; // Import your custom CSS

const QuantitySelector = ({ productId, initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 0);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      console.log(`Decreased quantity: ${newQuantity}`);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      console.log(`Increased quantity: ${newQuantity}`);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
        -
      </Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

QuantitySelector.propTypes = {
  productId: PropTypes.string.isRequired,
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;input 0*/


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/slices/cartSlice';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/Qty.css';

const QuantitySelector = ({ productId, quantity: propQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(propQuantity || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(propQuantity);
  }, [propQuantity]);

  const handleDecrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      console.log(`Decreased quantity: ${newQuantity}`);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      console.log(`Increased quantity: ${newQuantity}`);
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity-selector">
      <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
        -
      </Button>
      <Form.Control
        type="text"
        value={quantity}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <Button variant="outline-secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

QuantitySelector.propTypes = {
  productId: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;
