// src/components/register/SignUp.js
/*import React, { useState } from 'react';
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

export default SignUp;*/

/*import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For redirection
import '../../assets/styles/SignUp.css';

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleCreateAccount = () => {
        // Handle account creation logic
        // Simulate account creation process (e.g., API call)
        setTimeout(() => {
            setShowAlert(true); // Show alert after account creation
        }, 500); // Simulate a delay for account creation
    };

    useEffect(() => {
        if (showAlert) {
            // Hide alert after 3 seconds and redirect
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate('/login'); // Redirect to login page
            }, 3000); // 3 seconds delay

            // Cleanup timer if component unmounts before the timer completes
            return () => clearTimeout(timer);
        }
    }, [showAlert, navigate]);

    return (
        <Container className="sign-up-container">
            <div className="form-wrapper">
                <h2>Create Account</h2>
                {showAlert && (
                    <Alert variant="success" dismissible>
                        Your account has been successfully created!
                    </Alert>
                )}
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
            </div>
        </Container>
    );
};

export default SignUp;*/

/*import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/SignUp.css'; // Import the common CSS

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateAccount = () => {
        // Handle account creation logic
        setShowAlert(true); // Show alert
    };

    // Hide alert and redirect after a delay
    React.useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate('/login'); // Redirect to login page
            }, 3000); // 3 seconds delay

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [showAlert, navigate]);

    return (
        <Container className="form-container">
            <h2>Create Account</h2>
            {showAlert && (
                <Alert variant="success" dismissible>
                    Your account has been successfully created!
                </Alert>
            )}
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
                <button
                    type="button"
                    className="custom-button"
                    style={{ backgroundColor: '#C5E1D8', border: 'none', padding: '10px 20px', color: '#333', cursor: 'pointer' }}
                    onClick={handleCreateAccount}
                >
                    Create Account
                </button>
                <button
                    type="button"
                    className="login-link"
                    style={{ backgroundColor: 'transparent', border: 'none', marginTop: '50px', color: '#C5E1D8', cursor: 'pointer' }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default SignUp;*/


/*import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/SignUp.css'; // Import the common CSS

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateAccount = () => {
        // Handle account creation logic
        setShowAlert(true); // Show alert
    };

    // Hide alert and redirect after a delay
    React.useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate('/login'); // Redirect to login page
            }, 3000); // 3 seconds delay

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [showAlert, navigate]);

    return (
        <Container className="form-container">
            <h2>Create Account</h2>
            {showAlert && (
                <Alert variant="success" dismissible>
                    Your account has been successfully created!
                </Alert>
            )}
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
                <button
                    type="button"
                    className="custom-button"
                    onClick={handleCreateAccount}
                >
                    Create Account
                </button>
                <button
                    type="button"
                    className="login-link"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </Form>
        </Container>
    );
};

export default SignUp;*/

/* without connection import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/SignUp.css'; // Import the common CSS

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateAccount = () => {
        // Handle account creation logic
        setShowAlert(true); // Show alert
    };

    // Hide alert and redirect after a delay
    React.useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate('/login'); // Redirect to login page
            }, 3000); // 3 seconds delay

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [showAlert, navigate]);

    return (
        <Container className="form-container">
            <h2>Create Account</h2>
            {showAlert && (
                <Alert variant="success" dismissible>
                    Your account has been successfully created!
                </Alert>
            )}
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
                <div className="button-group">
                    <button
                        type="button"
                        className="custom-button"
                        onClick={handleCreateAccount}
                    >
                        Create Account
                    </button>
                    <button
                        type="button"
                        className="login-link"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            </Form>
        </Container>
    );
};

export default SignUp;without connection*/


import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/styles/SignUp.css'; // Import the common CSS

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        gender: '',
        dob: '',
        mobile: '',
        email: ''
    });
    const [showAlert, setShowAlert] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleCreateAccount = async () => {
        console.log('Form Data Before Sending:', formData); // Log the form data
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                setShowAlert('success');
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                const errorData = await response.json();
                setShowAlert(`error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error creating account:', error);
            setShowAlert('error: Something went wrong!');
        }
    };
    
    

    return (
        <Container className="form-container">
            <h2>Create Account</h2>
            {showAlert && (
                <Alert variant={showAlert.startsWith('error') ? 'danger' : 'success'} dismissible>
                    {showAlert.replace('error: ', '')}
                </Alert>
            )}
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your username" 
                        name="username"
                        value={formData.username}
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
                </Form.Group>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your mobile number" 
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </Form.Group>
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
                <div className="button-group">
                    <button
                        type="button"
                        className="custom-button"
                        onClick={handleCreateAccount}
                    >
                        Create Account
                    </button>
                    <button
                        type="button"
                        className="login-link"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            </Form>
        </Container>
    );
};

export default SignUp;
