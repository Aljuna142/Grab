


/*import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
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

export default Header;*/



/*hamburger import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <React.Fragment>
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

            <Navbar bg="dark" variant="dark" expand="lg" className={`additional-header ${showMenu ? 'show' : ''}`}>
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
                    <FaBars className="hamburger-menu" onClick={toggleMenu} />
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;hamburger*/




/*not res import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
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

export default Header;not res*/




/* b00timport React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
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

            <Navbar bg="dark" variant="dark" expand="lg" className="additional-header">
                <Container fluid>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <LinkContainer to="/">
                                <Nav.Link className="additional-nav-link">Home</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/all-in-one">
                                <Nav.Link className="additional-nav-link">All in One</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/desktops">
                                <Nav.Link className="additional-nav-link">Desktops</Nav.Link>
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
                                <Nav.Link className="additional-nav-link">Networking</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/accessories">
                                <Nav.Link className="additional-nav-link">Accessories</Nav.Link>
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
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button type="submit" className="search-button"><FaSearch /></button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link"><FaHeart className="nav-icon" /></Link>
                        <Link to="/cart" className="nav-link"><FaShoppingCart className="nav-icon" /></Link>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </nav>
                </div>
            </header>

            <nav className="additional-header">
                <div className="additional-header-container">
                    <Link to="/" className="additional-nav-link">Home</Link>
                    <Link to="/all-in-one" className="additional-nav-link">All in One</Link>
                    <Link to="/desktops" className="additional-nav-link">Desktops</Link>
                    <Link to="/laptops" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/networking" className="additional-nav-link">Networking</Link>
                    <Link to="/accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;




