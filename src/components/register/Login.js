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

/*without token import React, { useState } from 'react';
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

export default Login; token e*/

// src/components/Login.js
/*import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

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

                localStorage.setItem('token', data.token); 
                console.log('JWT Token:', data.token);
// Store JWT token in localStorage
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!');
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

export default Login;*/
// src/components/Login.js
/*no user import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
                localStorage.setItem('token', data.token); 
                console.log('JWT Token:', data.token);
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!');
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

export default Login;no user */
/*invalidimport React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Email and password are required';
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return 'Invalid email format';
        }
        return '';
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

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
                // Store token in HTTP-only cookie (backend handles this)
                console.log('JWT Token:', data.token);
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!');
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
                    <Alert variant="danger">
                        {error}
                    </Alert>
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

export default Login;invalid credentilas*/
/*import React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Email and password are required';
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return 'Invalid email format';
        }
        return '';
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            toast.error(validationError);
            return;
        }

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
                console.log('Login successful:', data);
                toast.success('Login successful!');
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
                toast.error(errorData.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!');
            toast.error('Something went wrong!');
        }
    };

    return (
        <Container className="login-container">
            <ToastContainer />
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
                    <Alert variant="danger">
                        {error}
                    </Alert>
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

export default Login;*/

/*goodimport React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Email and password are required';
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return 'Invalid email format';
        }
        return '';
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setSuccess('');
            return;
        }

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
                console.log('Login successful:', data);
                setSuccess('Login successful!');
                setError('');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.message);
                setSuccess('');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Something went wrong!');
            setSuccess('');
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
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert variant="success">
                        {success}
                    </Alert>
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

export default Login;good*/



import React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthStatus, selectAuthError } from '../../store/slices/authSlice'; // Adjust path as necessary
import '../../assets/styles/Login.css';
import logo from '../../assets/images/grab.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStatus = useSelector(selectAuthStatus);
    const authError = useSelector(selectAuthError);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Email and password are required';
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return 'Invalid email format';
        }
        return '';
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setSuccess('');
            return;
        }

        // Dispatch the login action
        try {
            await dispatch(login(formData)).unwrap();
            setSuccess('Login successful!');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            setError(authError || 'Something went wrong!');
            setSuccess('');
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
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert variant="success">
                        {success}
                    </Alert>
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

