/*import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            {/* Main Header }
            <Navbar bg="light" expand="lg" className="header">
                <Container fluid className="header-container">
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={Logo} alt="Logo" className="logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Form inline className="search-form mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"><FaSearch /></Button>
                    </Form>
                    <Nav className="ml-auto align-items-center">
                        <LinkContainer to="/wishlist">
                            <Nav.Link><FaHeart className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><FaUser className="nav-icon" />Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Button variant="primary" className="sign-up-btn">Sign Up</Button>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

            {/* Additional Header }
            <Navbar bg="dark" variant="dark" expand="lg" className="additional-header">
                <Container fluid>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <LinkContainer to="/desktops">
                                <Nav.Link className="additional-nav-link">All in One Desktop</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/laptops">
                                <Nav.Link className="additional-nav-link">Laptops</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/monitors">
                                <Nav.Link className="additional-nav-link">Monitors</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/printers">
                                <Nav.Link className="additional-nav-link">Printers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/copiers">
                                <Nav.Link className="additional-nav-link">Copiers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/routers">
                                <Nav.Link className="additional-nav-link">Routers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/networking">
                                <Nav.Link className="additional-nav-link">Networking Accessories</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;*/


/*import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            {/* Main Header }
            <Navbar bg="light" expand="lg" className="header">
                <Container fluid className="header-container">
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={Logo} alt="Logo" className="logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Form inline className="search-form mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"><FaSearch /></Button>
                    </Form>
                    <Nav className="ml-auto align-items-center">
                        <LinkContainer to="/wishlist">
                            <Nav.Link><FaHeart className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link><FaShoppingCart className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Button variant="primary" className="sign-up-btn">Sign Up</Button>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Button variant="link" className="login-btn">Login</Button>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

            {/* Additional Header }
            <Navbar bg="dark" variant="dark" expand="lg" className="additional-header">
                <Container fluid>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <LinkContainer to="/desktops">
                                <Nav.Link className="additional-nav-link">All in One Desktop</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/laptops">
                                <Nav.Link className="additional-nav-link">Laptops</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/monitors">
                                <Nav.Link className="additional-nav-link">Monitors</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/printers">
                                <Nav.Link className="additional-nav-link">Printers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/copiers">
                                <Nav.Link className="additional-nav-link">Copiers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/routers">
                                <Nav.Link className="additional-nav-link">Routers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/networking">
                                <Nav.Link className="additional-nav-link">Networking Accessories</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;*/


import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            {/* Main Header */}
            <Navbar bg="light" expand="lg" className="header">
                <Container fluid className="header-container">
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={Logo} alt="Logo" className="logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Form inline className="search-form mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"><FaSearch /></Button>
                    </Form>
                    <Nav className="ml-auto align-items-center">
                        <LinkContainer to="/wishlist">
                            <Nav.Link><FaHeart className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link><FaShoppingCart className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Button variant="primary" className="sign-up-btn">Sign Up</Button>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Button variant="link" className="login-btn">Login</Button>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

            {/* Additional Header */}
            <Navbar bg="dark" variant="dark" expand="lg" className="additional-header">
                <Container fluid>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <LinkContainer to="/">
                                <Nav.Link className="additional-nav-link">Home</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/desktops">
                                <Nav.Link className="additional-nav-link">All in One Desktop</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/laptops">
                                <Nav.Link className="additional-nav-link">Laptops</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/monitors">
                                <Nav.Link className="additional-nav-link">Monitors</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/printers">
                                <Nav.Link className="additional-nav-link">Printers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/copiers">
                                <Nav.Link className="additional-nav-link">Copiers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/routers">
                                <Nav.Link className="additional-nav-link">Routers</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/networking">
                                <Nav.Link className="additional-nav-link">Networking Accessories</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
