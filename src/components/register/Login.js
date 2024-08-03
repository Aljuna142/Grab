// src/components/register/Login.js
/*import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../../assets/styles/SignUp.css';

const Login = () => {
    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;*/


/*import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/SignUp.css';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;*/




/*import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css'; // Import the common CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login;*/


/*goodimport React from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css'; // Import the common CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                    <Form.Text className="forgot-password-link">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Form.Text>
                </Form.Group>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login;*/
/*import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css'; // Import the common CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                    <Form.Text className="forgot-password-link">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Form.Text>
                </Form.Group>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login;*/



/*import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css'; // Import the common CSS

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <h2>🤩Welcome Grabians🤩</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                    <Form.Text className="forgot-password-link">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Form.Text>
                </Form.Group>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login;*/


/* without connection import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png'; // Updated path for the image

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Handle login logic here
        
        // Redirect to home page after login
        navigate('/');
    };

    return (
        <Container className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Welcome Grabians🤩</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                    <Form.Text className="forgot-password-link">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Form.Text>
                </Form.Group>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login; without connection*/

import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png'; // Updated path for the image

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); // Store JWT
                navigate('/');
            } else {
                // Handle errors
                const errorData = await response.json();
                setError(errorData.message); // Show error message
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!'); // Show error message
        }
    };

    return (
        <Container className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Welcome Grabians🤩</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Form.Text className="forgot-password-link">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Form.Text>
                </Form.Group>
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default Login;
