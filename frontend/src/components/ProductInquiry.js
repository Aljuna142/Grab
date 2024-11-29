/*import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductInquiry = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <span >NEED IT?</span> REQUEST AVAILABILITY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This product is out of stock, but you can request to purchase it by filling out the form below.</p>
        <Form>
          {/* First row: Name, Phone, Email}
          <Form.Group controlId="inquiryName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="inquiryPhone" className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>
          <Form.Group controlId="inquiryEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          {/* Second row: Address}
          <Form.Group controlId="inquiryAddress" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>

          {/* Third row: City, State/Province/Region }
          <Form.Group controlId="inquiryCity" className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control as="select">
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
              {/* Add more options as needed}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="inquiryState" className="mb-3">
            <Form.Label>State/Province/Region</Form.Label>
            <Form.Control type="text" placeholder="Enter your state/province/region" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Submit Inquiry
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductInquiry;*/


import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductInquiry = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Inquiry submitted successfully:', result);
        onHide(); // Close the modal on success
      } else {
        console.error('Error submitting inquiry:', result);
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span >NEED IT?</span> REQUEST AVAILABILITY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This product is out of stock, but you can request to purchase it by filling out the form below.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State/Province/Region</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductInquiry;

