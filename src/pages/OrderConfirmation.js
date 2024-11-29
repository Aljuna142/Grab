// src/pages/OrderConfirmation.js

/*import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully placed</Card.Title>
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

export default OrderConfirmation;*/

/*waiteimport React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getOrderById } from '../store/slices/orderSlice';
import OrderTable from '../components/OrderTable'; // Assuming you have OrderTable component

const OrderConfirmation = ({ orderId }) => {
  const dispatch = useDispatch();
  const { currentOrder, orderStatus, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully placed</Card.Title>
              {orderStatus === 'loading' ? (
                <p>Loading...</p>
              ) : orderStatus === 'failed' ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <Card.Text>
                    Thank you for your purchase! Your order number is #{currentOrder?._id}. You will receive an email confirmation shortly.
                  </Card.Text>
                  {/* Order Table Component }
                  {currentOrder && <OrderTable items={currentOrder.orderItems} shippingCost={currentOrder.shippingPrice} />}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;*/



/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams
import { getOrderById } from '../store/slices/orderSlice';
import OrderTable from '../components/OrderTable'; // Assuming you have OrderTable component

const OrderConfirmation = () => {
  const { orderId } = useParams(); // Get orderId from URL parameters
  const dispatch = useDispatch();
  const { currentOrder, orderStatus, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderStatus === 'failed') {
      console.error('Failed to fetch order:', error);
    }
  }, [orderStatus, error]);

  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully Placed</Card.Title>
              {orderStatus === 'loading' ? (
                <p>Loading...</p>
              ) : orderStatus === 'failed' ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <Card.Text>
                    Thank you for your purchase! Your order number is #{currentOrder?._id}. You will receive an email confirmation shortly.
                  </Card.Text>
                  {/* Order Table Component }
                  {currentOrder && <OrderTable items={currentOrder.orderItems} shippingCost={currentOrder.shippingPrice} />}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;id showing table showing nan*/


/*order summary import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getOrderById } from '../store/slices/orderSlice';
import OrderTable from '../components/OrderTable'; // Assuming you have OrderTable component
import OrderSummary from '../components/OrderSummary'; // Ensure this is imported

const OrderConfirmation = ({ orderId }) => {
  const dispatch = useDispatch();
  const { currentOrder, orderStatus, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  const subtotal = currentOrder?.orderItems.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
  const shippingPrice = currentOrder?.shippingPrice || 0;
  const totalPrice = subtotal + shippingPrice;

  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully placed</Card.Title>
              {orderStatus === 'loading' ? (
                <p>Loading...</p>
              ) : orderStatus === 'failed' ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <Card.Text>
                    Thank you for your purchase! Your order number is #{currentOrder?._id}. You will receive an email confirmation shortly.
                  </Card.Text>
                  {/* Order Table Component }
                  {currentOrder && <OrderTable items={currentOrder.orderItems} shippingCost={shippingPrice} />}
                  {/* Order Summary Component }
                  <OrderSummary
                    subtotal={subtotal}
                    shippingPrice={shippingPrice}
                    totalPrice={totalPrice}
                  />
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;order summay*/



/*good shipimport React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams
import { getOrderById } from '../store/slices/orderSlice';
import OrderTable from '../components/OrderTable'; // Assuming you have OrderTable component

const OrderConfirmation = () => {
  const { orderId } = useParams(); // Get orderId from URL parameters
  const dispatch = useDispatch();
  const { currentOrder, orderStatus, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderStatus === 'failed') {
      console.error('Failed to fetch order:', error);
    }
  }, [orderStatus, error]);

  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully Placed</Card.Title>
              {orderStatus === 'loading' ? (
                <p>Loading...</p>
              ) : orderStatus === 'failed' ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <Card.Text>
                    Thank you for your purchase! Your order number is #{currentOrder?._id}. You will receive an email confirmation shortly.
                  </Card.Text>
                  {currentOrder && (
                    <OrderTable 
                      items={currentOrder.orderItems || []} 
                      shippingCost={currentOrder.shippingPrice || 0} 
                    />
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;*good structur/

/*structure wrong  import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderConfirmation = () => {
  const { orderId } = useParams(); // Get the orderId from the URL
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/orders/${orderId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        const data = await response.json();
        setOrderDetails(data); // Set the fetched order details
        setLoading(false);
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError('Unable to fetch order details');
        setLoading(false);
        toast.error('An error occurred while fetching order details');
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! Your order ID is: <strong>{orderId}</strong></p>

      {orderDetails && (
        <div>
          <h2>Order Summary</h2>
          <ul>
            {orderDetails.orderItems.map(item => (
              <li key={item.product}>
                {item.qty} x {item.name} - {item.price} AED each
              </li>
            ))}
          </ul>
          <p><strong>Total Price:</strong> {orderDetails.totalPrice} AED</p>
          <p><strong>Shipping Price:</strong> {orderDetails.shippingPrice} AED</p>
          <p><strong>Delivery Method:</strong> {orderDetails.deliveryMethod}</p>
          <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;structure wrong*/






import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams
import { getOrderById } from '../store/slices/orderSlice';
import InvoiceTable from '../components/InvoiceTable'; // Updated import for InvoiceTable

const OrderConfirmation = () => {
  const { orderId } = useParams(); // Get orderId from URL parameters
  const dispatch = useDispatch();
  const { currentOrder, orderStatus, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderStatus === 'failed') {
      console.error('Failed to fetch order:', error);
    }
  }, [orderStatus, error]);

  return (
    <Container className="order-confirmation-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="confirmation-card">
            <Card.Body>
              <Card.Title>Your Order has been Successfully Placed</Card.Title>
              {orderStatus === 'loading' ? (
                <p>Loading...</p>
              ) : orderStatus === 'failed' ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <Card.Text>
                    Thank you for your purchase! Your order number is #{currentOrder?._id}. You will receive an email confirmation shortly.
                  </Card.Text>
                  {currentOrder && (
                    <InvoiceTable 
                      items={currentOrder.orderItems || []} 
                      shippingCost={currentOrder.shippingPrice || 0} 
                    />
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;
