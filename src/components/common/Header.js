




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

 /*dashbord profile import React, { useState } from 'react';
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
                        <CartIcon /> {/* Use the CartIcon component }
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

export default Header;dashboard profile*/


/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { logoutUser } from '../../store/actions/authActions'; // Import logout action
import axios from 'axios';
import CartIcon from '../CartIcon.js';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(state => state.auth.user); // Get user from Redux store
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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

    const handleLogout = () => {
        dispatch(logoutUser());
        // Optionally redirect the user after logout
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
                        </Link>
                        <CartIcon />
                        {isAuthenticated ? (
                            <div className="profile-menu">
                                <span className="profile-icon-link" onClick={toggleDropdown} onMouseEnter={toggleDropdown}>
                                    <FaUser className="profile-icon" />
                                    <span className="username">{user.username}</span> {/* Display username }
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                                <Link to="/login" className="login-btn">Login</Link>
                            </>
                        )}
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

/*username import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        dispatch(logout());
        setShowDropdown(false);
        navigate('/login');
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
            </div>

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

export default Header;username */



/*username dropdown import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        dispatch(logout());
        setShowDropdown(false);
        navigate('/login');
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <span className="dropdown-username">{user.username}</span>
                                    </div>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
            </div>

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

export default Header;dropdown username*/



/*token not remove 
            </div>
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            setShowDropdown(false);
            navigate('/login');
        });
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <span className="dropdown-username">{user.username}</span>
                                    </div>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
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




/*without purge import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        dispatch(logout()).then(() => {
           
            navigate('/'); // Redirect to home page after logout
        });
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <span className="dropdown-username">{user.username}</span>
                                    </div>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
            </div>

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

export default Header;without purge*/
/*tokrn import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store'; // Import persistor
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            persistor.purge(); // Clear the persisted state
            navigate('/'); // Redirect to home page after logout
        });
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <span className="dropdown-username">{user.username}</span>
                                    </div>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
            </div>

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


/* 
const header()={
const header =(searchfunction,make sure that reducerroot setup )
    searchQuery:'',
    isSearching:false,
    showDropdown:false,
    user:null,
    searchResults:[],searchQQuery is Searching :false}
shown dropdown false user:null
searchResults :false 
hader function()={
constructor
is slice =(x,y) (y,x)+a3000}
{
function have any effect on users especially those using redux {store+store+index.js }}

shown drop don false  slice user especially 
 //create a redux store holding the state of your app
 its api is{subscribe,dispatch,getstate}
 let store = createStore(counterReducer)
 //you can use subscribe() to update the ui in response to state changes
 // normally you had use a view binding library (eg react redux rathe than)subscribers
 //there may be additional use cases where its helpful to subscribe asw well

store.subscriber(())=>console.log (store.getState())

store.dispatcg({type:'counter/incremented'})
store.dispatch ({type:'counter/incremented '})
store.dispatch (header )


*/

/*logout import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store'; // Import persistor
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        console.log('Logout button clicked');
        dispatch(logout()).then(() => {
            console.log('Token removed, purging state');
            setTimeout(() => {
                persistor.purge(); // Clear the persisted state
                console.log('State purged, navigating to home');
                navigate('/'); // Redirect to home page after logout
            }, 500); // Add a small delay to ensure token removal
        }).catch((error) => {
            console.error('Error during logout process:', error);
        });
    };
    
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        <div className="profile-menu">
                            <span 
                                className="profile-icon-link" 
                                onClick={toggleDropdown} 
                                onMouseEnter={toggleDropdown}
                            >
                                <FaUser className="profile-icon" />
                                {user && <span className="username">{user.username}</span>}
                            </span>
                            {showDropdown && user && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <span className="dropdown-username">{user.username}</span>
                                    </div>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                    <span className="dropdown-item" onClick={handleLogout}>Logout</span>
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

            <div className="auth-buttons">
                {!user && (
                    <>
                        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                        <Link to="/login" className="login-btn">Login</Link>
                    </>
                )}
            </div>

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

export default Header;logout*/


/*token good import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store'; // Import persistor
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser); // Get user from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = () => {
        console.log('Logout button clicked');
        dispatch(logout()).then(() => {
            console.log('Token removed, purging state');
            setTimeout(() => {
                persistor.purge(); // Clear the persisted state
                console.log('State purged, navigating to home');
                navigate('/'); // Redirect to home page after logout
            }, 500); // Add a small delay to ensure token removal
        }).catch((error) => {
            console.error('Error during logout process:', error);
        });
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
                        <CartIcon />
                        {user && (
                            <div className="profile-menu">
                                <span 
                                    className="profile-icon-link" 
                                    onClick={toggleDropdown} 
                                    onMouseEnter={toggleDropdown}
                                >
                                    <FaUser className="profile-icon" />
                                    <span className="username">{user.username}</span>
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <span className="dropdown-username">{user.username}</span>
                                        </div>
                                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </div>
                                )}
                            </div>
                        )}
                        {!user && (
                            <div className="auth-buttons">
                                <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                                <Link to="/login" className="login-btn">Login</Link>
                            </div>
                        )}
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

export default Header;token good */

/*token but refresh username import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = async () => {
        console.log('Logout button clicked');
        try {
            await dispatch(logout());
            console.log('Logout successful, purging state');
            await persistor.purge(); // Clear the persisted state
            navigate('/'); // Redirect to home page after logout
        } catch (error) {
            console.error('Error during logout process:', error);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
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
                        <CartIcon />
                        {user ? (
                            <div className="profile-menu">
                                <span 
                                    className="profile-icon-link" 
                                    onClick={toggleDropdown} 
                                    onMouseEnter={toggleDropdown}
                                >
                                    <FaUser className="profile-icon" />
                                    <span className="username">{user.username}</span>
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <span className="dropdown-username">{user.username}</span>
                                        </div>
                                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                                <Link to="/login" className="login-btn">Login</Link>
                            </div>
                        )}
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
        </>
    );
};

export default Header;username refresh*/



 /*username refresh import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = async () => {
        try {
            await dispatch(logout());
            await persistor.purge(); // Clear the persisted state
            navigate('/'); // Redirect to home page after logout
        } catch (error) {
            console.error('Error during logout process:', error);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
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
                        <CartIcon />
                        {user ? (
                            <div className="profile-menu">
                                <span 
                                    className="profile-icon-link" 
                                    onClick={toggleDropdown} 
                                    onMouseEnter={toggleDropdown}
                                >
                                    <FaUser className="profile-icon" />
                                    <span className="username">{user.username}</span>
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <span className="dropdown-username">{user.username}</span>
                                        </div>
                                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                                <Link to="/login" className="login-btn">Login</Link>
                            </div>
                        )}
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
        </>
    );
};

export default Header;username refresh*/



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/Lgo.png';
import '../../assets/styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../store/slices/authSlice';
import { setSearchQuery, setSearchResults } from '../../store/actions/searchActions';
import { persistor } from '../../store/store';
import CartIcon from '../CartIcon';
import axios from 'axios';

const Header = () => {
    const searchQuery = useSelector(state => state.search.query);
    const searchResults = useSelector(state => state.search.results);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleLogout = async () => {
        try {
            await dispatch(logout());
            await persistor.purge(); // Clear the persisted state
            navigate('/'); // Redirect to home page after logout
        } catch (error) {
            console.error('Error during logout process:', error);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-menu')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
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
                        <CartIcon />
                        {user ? (
                            <div className="profile-menu">
                                <span 
                                    className="profile-icon-link" 
                                    onClick={toggleDropdown} 
                                    onMouseEnter={toggleDropdown}
                                >
                                    <FaUser className="profile-icon" />
                                    <span className="username">{user.username}</span>
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <span className="dropdown-username">{user.username}</span>
                                        </div>
                                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/signup" className="sign-up-btn">Sign Up</Link>
                                <Link to="/login" className="login-btn">Login</Link>
                            </div>
                        )}
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
        </>
    );
};

export default Header;




























