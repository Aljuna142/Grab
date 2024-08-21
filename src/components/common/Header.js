




/*oldimport React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const wishlistItems = useSelector(state => state.wishlist.items);

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
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
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

export default Header;old*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/products/search?query=${searchQuery}`);
            setSearchResults(data.products);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
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

            {/* Display search results }
            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}

export default Header;*/


/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions'; // Adjust path as needed
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/products/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
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

            {/* Display search results }
            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}

export default Header;*/

/*without cart icon update import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions'; // Adjust path as needed
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
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
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link> {/* Updated Link }
                </div>
            </nav>

            {/* Display search results }
            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}

export default Header;without cart icon update */



/*countimport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions'; // Adjust path as needed
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const cartItems = useSelector(state => state.cart.items); // Get cart items from store
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
                        <Link to="/cart" className="nav-link">
                            <FaShoppingCart className="nav-icon" />
                            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} {/* Display cart count }
                        </Link>
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
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>

            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}

export default Header;*/




/*badge round countimport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/logo.jpg';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);
    const cartItems = useSelector(state => state.cart.items); // Ensure this reflects the current cart items

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                        </Link>
                        <Link to="/cart" className="nav-link cart-icon-container">
                            <FaShoppingCart className="nav-icon" />
                            {cartItems.length > 0 && (
                                <span className="cart-badge">{cartItems.length}</span>
                            )}
                        </Link>
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
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>

            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}

export default Header;round*/

/*wishlist count removeimport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import axios from 'axios';
import CartIcon from '../CartIcon.js'; // Import the CartIcon component

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items); // Retrieve wishlist items

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {/* Removed wishlist count }
                        </Link>
                        <CartIcon /> {/* Use the CartIcon component }
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
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>

            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default Header;*/


/*icon primport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import axios from 'axios';
import CartIcon from '../CartIcon.js'; // Import the CartIcon component

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items); // Retrieve wishlist items

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                            {/* Removed wishlist count }
                        </Link>
                        <CartIcon /> {/* Use the CartIcon component }
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                        <Link to="/profile" className="profile-icon-link">
                            <FaUser className="profile-icon" />
                        </Link>
                    </nav>
                </div>
            </header>

            <nav className="additional-header">
                <div className="additional-header-container">
                    <Link to="/" className="additional-nav-link">Home</Link>
                    <Link to="/all-in-one" className="additional-nav-link">All in One</Link>
                    <Link to="/desktops" className="additional-nav-link">Desktops</Link>
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>

            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default Header;profile*/

 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import axios from 'axios';
import CartIcon from '../CartIcon.js'; // Import the CartIcon component

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/search?query=${searchQuery}`);
            dispatch(setSearchResults(data.products));
        } catch (error) {
            console.error('Error fetching search results:', error);
            dispatch(setSearchResults([]));
        }
        setIsSearching(false);
    };

    const toggleDropdown = () => setShowDropdown(prev => !prev);

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <nav className="nav-icons">
                        <Link to="/wishlist" className="nav-link">
                            <FaHeart className="nav-icon" />
                        </Link>
                        <CartIcon /> {/* Use the CartIcon component */}
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                        <div className="profile-menu">
                            <Link to="/" className="profile-icon-link" onClick={toggleDropdown}>
                                <FaUser className="profile-icon" />
                            </Link>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <Link to="/logout" className="dropdown-item">Logout</Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            <nav className="additional-header">
                <div className="additional-header-container">
                    <Link to="/" className="additional-nav-link">Home</Link>
                    <Link to="/all-in-one" className="additional-nav-link">All in One</Link>
                    <Link to="/desktops" className="additional-nav-link">Desktops</Link>
                    <Link to="/products/category/laptop" className="additional-nav-link">Laptops</Link>
                    <Link to="/monitors" className="additional-nav-link">Monitors</Link>
                    <Link to="/printers" className="additional-nav-link">Printers</Link>
                    <Link to="/copiers" className="additional-nav-link">Copiers</Link>
                    <Link to="/routers" className="additional-nav-link">Routers</Link>
                    <Link to="/products/category/Networking" className="additional-nav-link">Networking</Link>
                    <Link to="/products/category/Accessories" className="additional-nav-link">Accessories</Link>
                </div>
            </nav>

            {isSearching && <div>Searching...</div>}
            {!isSearching && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(product => (
                        <Link key={product._id} to={`/product/${product._id}`} className="search-result-item">
                            <img src={product.image} alt={product.name} className="search-result-image" />
                            <span className="search-result-name">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default Header;

