// src/components/register/SignUp.js
import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import '../../assets/styles/SignUp.css';

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleCreateAccount = () => {
        // Handle account creation logic
        setShowAlert(true); // Show popup
    };

    return (
        <Container className="sign-up-container">
            <h2>Create Account</h2>
            {showAlert && <Alert variant="success">Your account has been successfully created!</Alert>}
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                        <option>Select your gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" onClick={handleCreateAccount}>
                    Create Account
                </Button>
                <Button variant="link" className="login-link">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default SignUp;
