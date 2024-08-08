/*import React, { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import '../assets/styles/ProceedToPayment.css'

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Proceed to Payment</Accordion.Header>
          <Accordion.Body>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
              Cash on Delivery
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
              Pick from Store
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
              Direct Bank Transfer
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Gpay')}>
              Gpay
            </Card>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/


/*import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
              Cash on Delivery
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
              Pick from Store
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
              Direct Bank Transfer
            </Card>
            <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Gpay')}>
              Gpay
            </Card>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/

/*import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option payment-option-top-left" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
                Cash on Delivery
              </Card>
              <Card className="payment-option payment-option-top-right" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
                Pick from Store
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option payment-option-bottom-left" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
                Direct Bank Transfer
              </Card>
              <Card className="payment-option payment-option-bottom-right" onClick={() => handlePaymentOptionSelect('Gpay')}>
                Gpay
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/

/*import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option payment-option-top-left" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
             
                <p> <FaMoneyBillWave size={24} />Cash on Delivery</p>
              </Card>
              <Card className="payment-option payment-option-top-right" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
             
                <p> <FaStore size={24} />Pick from Store</p>
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option payment-option-bottom-left" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
             
                <p> <FaBuilding size={24} /> Direct Bank Transfer</p>
              </Card>
              <Card className="payment-option payment-option-bottom-right" onClick={() => handlePaymentOptionSelect('Gpay')}>
                
                <p> <FaGooglePay size={40} /> Gpay </p>
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/

/* goodimport React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option payment-option-top-left" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
                <div className="icon-text">
                  <FaMoneyBillWave size={24} />
                  <p>Cash on Delivery</p>
                </div>
              </Card>
              <Card className="payment-option payment-option-top-right" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
                <div className="icon-text">
                  <FaStore size={24} />
                  <p>Pick from Store</p>
                </div>
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option payment-option-bottom-left" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
                <div className="icon-text">
                  <FaBuilding size={24} />
                  <p>Direct Bank Transfer</p>
                </div>
              </Card>
              <Card className="payment-option payment-option-bottom-right" onClick={() => handlePaymentOptionSelect('Gpay')}>
                <div className="icon-text">
                  <FaGooglePay size={24} />
                  <p>Gpay</p>
                </div>
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/




/*import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Cash on Delivery')}>
                <div className="icon-text">
                  <FaMoneyBillWave size={24} />
                  <p>Cash on Delivery</p>
                </div>
              </Card>
              <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Pick from Store')}>
                <div className="icon-text">
                  <FaStore size={24} />
                  <p>Pick from Store</p>
                </div>
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Direct Bank Transfer')}>
                <div className="icon-text">
                  <FaBuilding size={24} />
                  <p>Direct Bank Transfer</p>
                </div>
              </Card>
              <Card className="payment-option" onClick={() => handlePaymentOptionSelect('Gpay')}>
                <div className="icon-text">
                  <FaGooglePay size={40} />
                  <p>Gpay</p>
                </div>
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect('Selected Payment Option')}
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/


/*import React, { useState } from 'react';
import { Accordion, Button, Card, Form } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handlePaymentOptionSelect(event.target.value);
  };

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
            { /* <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>}
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProceedToPayment;*/

/*import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showBankModal, setShowBankModal] = useState(false);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handlePaymentOptionSelect(option);

    if (option === 'Direct Bank Transfer') {
      setShowBankModal(true);
    }
  };

  const handleCloseModal = () => setShowBankModal(false);

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showBankModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bankName">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your bank name" />
            </Form.Group>
            <Form.Group controlId="accountNumber" className="mt-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your account number" />
            </Form.Group>
            <Form.Group controlId="ifscCode" className="mt-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your IFSC code" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceedToPayment;bank details*/



/*emirates import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa'; // Import React Icons
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showBankModal, setShowBankModal] = useState(false);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handlePaymentOptionSelect(option);

    if (option === 'Direct Bank Transfer') {
      setShowBankModal(true);
    }
  };

  const handleCloseModal = () => setShowBankModal(false);

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showBankModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bankName">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your bank name" />
            </Form.Group>
            <Form.Group controlId="accountNumber" className="mt-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your account number" />
            </Form.Group>
            <Form.Group controlId="ifscCode" className="mt-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your IFSC code" />
            </Form.Group>
            <Form.Group controlId="emiratesId" className="mt-3">
              <Form.Label>Emirates ID</Form.Label>
              <Form.Control type="text" placeholder="Enter your Emirates ID" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceedToPayment;emirates id*/



// src/components/ProceedToPayment.js
/* pakkaimport React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBankDetail } from '../store/slices/bankDetailsSlice';
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showBankModal, setShowBankModal] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    emiratesId: '',
  });

  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handlePaymentOptionSelect(option);

    if (option === 'Direct Bank Transfer') {
      setShowBankModal(true);
    }
  };

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSaveBankDetails = () => {
    dispatch(addBankDetail({ id: Date.now(), ...bankDetails }));
    setShowBankModal(false);
  };

  const handleCloseModal = () => setShowBankModal(false);

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showBankModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bankName">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your bank name"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="accountNumber" className="mt-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your account number"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="ifscCode" className="mt-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your IFSC code"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="emiratesId" className="mt-3">
              <Form.Label>Emirates ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Emirates ID"
                name="emiratesId"
                value={bankDetails.emiratesId}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveBankDetails}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceedToPayment;*/



// src/components/ProceedToPayment.js
/*import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBankDetail } from '../store/slices/bankDetailsSlice';
import BankDetailsList from './BankDetailsList';
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showBankModal, setShowBankModal] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    emiratesId: '',
  });

  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handlePaymentOptionSelect(option);

    if (option === 'Direct Bank Transfer') {
      setShowBankModal(true);
    }
  };

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSaveBankDetails = () => {
    dispatch(addBankDetail({ id: Date.now(), ...bankDetails }));
    setShowBankModal(false);
  };

  const handleCloseModal = () => setShowBankModal(false);

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showBankModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bankName">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your bank name"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="accountNumber" className="mt-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your account number"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="ifscCode" className="mt-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your IFSC code"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="emiratesId" className="mt-3">
              <Form.Label>Emirates ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Emirates ID"
                name="emiratesId"
                value={bankDetails.emiratesId}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveBankDetails}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>

      <BankDetailsList />
    </div>
  );
};

export default ProceedToPayment;without toggle*/


// src/components/ProceedToPayment.js
import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal,color} from 'react-bootstrap';
import { FaMoneyBillWave, FaStore, FaBuilding, FaGooglePay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBankDetail } from '../store/slices/bankDetailsSlice';
import BankDetailsList from './BankDetailsList';
import '../assets/styles/ProceedToPayment.css';

const ProceedToPayment = ({ handlePaymentOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showBankModal, setShowBankModal] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    emiratesId: '',
  });

  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handlePaymentOptionSelect(option);

    if (option === 'Direct Bank Transfer') {
      setShowBankModal(true);
    }
  };

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSaveBankDetails = () => {
    dispatch(addBankDetail({ id: Date.now(), ...bankDetails }));
    setShowBankModal(false);
  };

  const handleCloseModal = () => setShowBankModal(false);
  const toggleBankDetails = () => setShowBankDetails(prevState => !prevState);

  return (
    <div className="mt-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="payment-accordion-header">Proceed to Payment</Accordion.Header>
          <Accordion.Body className="payment-accordion-body">
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-option"
                  value="Cash on Delivery"
                  label={
                    <div className="icon-text">
                      <FaMoneyBillWave size={24} />
                      <p>Cash on Delivery</p>
                    </div>
                  }
                  checked={selectedOption === 'Cash on Delivery'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="pick-from-store"
                  name="payment-option"
                  value="Pick from Store"
                  label={
                    <div className="icon-text">
                      <FaStore size={24} />
                      <p>Pick from Store</p>
                    </div>
                  }
                  checked={selectedOption === 'Pick from Store'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <div className="payment-options-row">
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-option"
                  value="Direct Bank Transfer"
                  label={
                    <div className="icon-text">
                      <FaBuilding size={24} />
                      <p>Direct Bank Transfer</p>
                    </div>
                  }
                  checked={selectedOption === 'Direct Bank Transfer'}
                  onChange={handleOptionChange}
                />
              </Card>
              <Card className="payment-option">
                <Form.Check 
                  type="radio"
                  id="gpay"
                  name="payment-option"
                  value="Gpay"
                  label={
                    <div className="icon-text">
                      <FaGooglePay size={40} />
                      <p>Gpay</p>
                    </div>
                  }
                  checked={selectedOption === 'Gpay'}
                  onChange={handleOptionChange}
                />
              </Card>
            </div>
            <Button
              variant="success"
              className="mt-3 proceed-button"
              onClick={() => handlePaymentOptionSelect(selectedOption)}
              disabled={!selectedOption} // Disable button if no option is selected
            >
              Proceed
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showBankModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Details
            <h6 style={{ color:'grey'}}>All the information will be secured</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bankName">
              <Form.Label>Bank Name
                
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your bank name"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="accountNumber" className="mt-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your account number"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="ifscCode" className="mt-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your IFSC code"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
            <Form.Group controlId="emiratesId" className="mt-3">
              <Form.Label>Emirates ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Emirates ID"
                name="emiratesId"
                value={bankDetails.emiratesId}
                onChange={handleBankDetailsChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveBankDetails}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-info" onClick={toggleBankDetails} className="mt-4">
        {showBankDetails ? 'Hide Bank Details' : 'Show Bank Details'}
      </Button>
      <BankDetailsList showDetails={showBankDetails} />
    </div>
  );
};

export default ProceedToPayment;

