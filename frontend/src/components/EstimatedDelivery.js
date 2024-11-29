import React from 'react';
import { Card } from 'react-bootstrap';

const EstimatedDelivery = ({ calculateDeliveryDate }) => {
  return (
    <div>
      <h3 className="estimated">Estimated Delivery</h3>
      <Card className="delivery-card">
        <Card.Body className="delivery-card-body">
          <Card.Text>
            Your order is expected to be delivered within 4-5 business days. Based on your order date, the estimated delivery date is {calculateDeliveryDate()}.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EstimatedDelivery;
