// src/pages/OrderConfirmation.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully Created</Card.Title>
              <Card.Text>
                Thank you for your purchase! Your order number is #12345. You will receive an email confirmation shortly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;
