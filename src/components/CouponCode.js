import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

const CouponCode = ({ couponCode, handleCouponChange, handleApplyCoupon }) => {
  return (
    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion'>Have a Coupon Code?</Accordion.Header>
        <Accordion.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter your coupon code"
              value={couponCode}
              onChange={handleCouponChange}
            />
            <Button
              variant='outline-success'
              onClick={handleApplyCoupon}
              className="mt-2"
            >
              Apply
            </Button>
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CouponCode;



