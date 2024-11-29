


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Alert, Spinner, Table } from 'react-bootstrap'; // Adjust import as necessary
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice'; // Adjust path as necessary
import './OnlineOrders.css'; // Your CSS file

const OnlineOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const user = useSelector(selectUser); // Get user from Redux state

    useEffect(() => {
        const fetchOrders = async () => {
            // Fetch the token here
            const token = localStorage.getItem('authToken'); // Match with your login slice

            console.log('Token retrieved:', token); // Log the retrieved token

            if (!token) {
                console.error('No token provided!');
                setError('No token provided. Please log in again.');
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching orders...'); // Log when fetching starts
                const response = await axios.get('http://localhost:5000/api/v1/orders', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in headers
                    },
                });
                console.log('Orders fetched successfully:', response.data); // Log successful fetch
                setOrders(response.data);
            } catch (err) {
                console.error('Error fetching orders:', err);
                if (err.response) {
                    setError(err.response.data.message || 'Failed to fetch orders.');
                } else {
                    setError('Failed to fetch orders. Please try again later.');
                }
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchOrders();
    }, []); // Run effect only once when the component mounts

    return (
        <Container className="online-orders-container">
            <h2>Your Orders</h2>
            {loading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {orders.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.status}</td>
                                <td>${order.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                !loading && <Alert variant="info">No orders found.</Alert>
            )}
        </Container>
    );
};

export default OnlineOrders;
