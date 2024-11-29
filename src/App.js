
/*import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Grabatoz</h1>
    </div>
  );
}

export default App;*/


/*import React from 'react';
import './App.css';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Grabatoz</h1>
      {/* Other components can be added here }
    </div>
  );
}

export default App;*/

// src/App.js

/*001import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import Header from './components/common/Header'; // Import your Header component // Assuming you have an App.css for global styles
import Footer from './components/common/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add more routes for other pages }
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;*/

// src/App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import Header from './components/common/Header'; // Import your Header component
import Footer from './components/common/Footer'; // Import your Footer component
import SignUp from './components/register/SignUp'; // Import SignUp component
import Login from './components/register/Login'; // Import Login component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add more routes for other pages }
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;*/

/*
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails'; // Import ProductDetails component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} /> {/* Add this route }
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;*/
/*// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; // Your CheckoutPage component
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} /> {/* Change component to element }
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-confirmation" component={OrderConfirmation} />
                    <Route path="/products/category/Accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    {/* Other Routes }
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;*/



/*good import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage';// Your CheckoutPage component
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';



const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} /> 
                    <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Update to element }
                    <Route path="/products/category/Accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    
                    {/* Other Routes }
                </Routes>
                <Footer />
                <ToastContainer /> {/* Add ToastContainer }
            </div>
        </Router>
    );
}

export default App;good*/

/*no userimport React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} /> 
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} /> {/* Update to handle orderId }
                    <Route path="/products/category/Accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    
                    {/* Other Routes }
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;*/




/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} />
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                    <Route path="/products/category/Accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    {/* Other Routes }
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;without brand page*/


/*hp and dell import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} />
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                    <Route path="/products/category/accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />  {/* Add this route for BrandPage }
                    {/* Other Routes }
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;*/



/*no private route normal import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} />
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                    <Route path="/products/category/accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />  {/* Add this route for BrandPage }
                    {/* Other Routes }
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;normal*/




/*privt route again redirecting import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Public Routes }
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/products/category/accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    
                    {/* Protected Routes }
                    <Route element={<PrivateRoute />}>
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/order-summary" element={<OrderSummaryPage />} />
                        <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                        <Route path="/shipping" element={<ShippingPage />} />
                    </Route>
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;*/


/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Public Routes }
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/products/category/accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    
                    {/* Protected Routes }
                    <Route element={<PrivateRoute />}>
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/order-summary" element={<OrderSummaryPage />} />
                        <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                        <Route path="/shipping" element={<ShippingPage />} />
                    </Route>
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;wait provte confusion*/
/*good side bar import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import Dashboard from './pages/Dashboard';  // Import the Dashboard component
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderSummaryPage />} />
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                    <Route path="/products/category/accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/brand/:brandName" element={<BrandPage />} />
                    <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route for Dashboard }
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;*/

/*normal import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import Dashboard from './pages/Dashboard'; // Import the Dashboard page

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Routes for pages with Header and Footer}
                <Route path="/" element={<><Header /><Home /><Footer /></>} />
                <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
                <Route path="/login" element={<><Header /><Login /><Footer /></>} />
                <Route path="/product/:id" element={<><Header /><ProductDetails /><Footer /></>} />
                <Route path="/wishlist" element={<><Header /><WishlistPage /><Footer /></>} />
                <Route path="/cart" element={<><Header /><CartPage /><Footer /></>} />
                <Route path="/checkout" element={<><Header /><CheckoutPage /><Footer /></>} />
                <Route path="/order-summary" element={<><Header /><OrderSummaryPage /><Footer /></>} />
                <Route path="/order-confirmation/:orderId" element={<><Header /><OrderConfirmation /><Footer /></>} />
                <Route path="/products/category/accessories" element={<><Header /><Accessories /><Footer /></>} />
                <Route path="/products/category/networking" element={<><Header /><Networking /><Footer /></>} />
                <Route path="/products/category/laptop" element={<><Header /><LaptopPage /><Footer /></>} />
                <Route path="/information" element={<><Header /><InformationPage /><Footer /></>} />
                <Route path="/shipping" element={<><Header /><ShippingPage /><Footer /></>} />
                <Route path="/brand/:brandName" element={<><Header /><BrandPage /><Footer /></>} />

                {/* Routes for Dashboard without Header and Footer }
                <Route path="/dashboard/*" element={<Dashboard />} />
                {/* Other Routes }
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;normal*/



/*theme import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your theme
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import Dashboard from './pages/Dashboard'; // Import the Dashboard page

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    {/* Routes for pages with Header and Footer }
                    <Route path="/" element={<><Header /><Home /><Footer /></>} />
                    <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
                    <Route path="/login" element={<><Header /><Login /><Footer /></>} />
                    <Route path="/product/:id" element={<><Header /><ProductDetails /><Footer /></>} />
                    <Route path="/wishlist" element={<><Header /><WishlistPage /><Footer /></>} />
                    <Route path="/cart" element={<><Header /><CartPage /><Footer /></>} />
                    <Route path="/checkout" element={<><Header /><CheckoutPage /><Footer /></>} />
                    <Route path="/order-summary" element={<><Header /><OrderSummaryPage /><Footer /></>} />
                    <Route path="/order-confirmation/:orderId" element={<><Header /><OrderConfirmation /><Footer /></>} />
                    <Route path="/products/category/accessories" element={<><Header /><Accessories /><Footer /></>} />
                    <Route path="/products/category/networking" element={<><Header /><Networking /><Footer /></>} />
                    <Route path="/products/category/laptop" element={<><Header /><LaptopPage /><Footer /></>} />
                    <Route path="/information" element={<><Header /><InformationPage /><Footer /></>} />
                    <Route path="/shipping" element={<><Header /><ShippingPage /><Footer /></>} />
                    <Route path="/brand/:brandName" element={<><Header /><BrandPage /><Footer /></>} />

                    {/* Routes for Dashboard without Header and Footer }
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    {/* Other Routes }
                </Routes>
                <ToastContainer />
            </Router>
        </ThemeProvider>
    );
}

export default App;theme*/



/*good working with dashoard import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage'; 
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';  // Import the BrandPage component
import { ToastContainer } from 'react-toastify';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import Dashboard from './pages/Dashboard'; // Import the Dashboard page
import { setUser } from './store/slices/authSlice'; // Import setUser from the authSlice

const App = () => {
    const dispatch = useDispatch(); // Initialize dispatch

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            dispatch(setUser({ token })); // Dispatch setUser with the token from localStorage
            // Optionally, fetch the user's details from your server using the token here
        }
    }, [dispatch]);



    return (
        <Router>
            <Routes>
                {/* Routes for pages with Header and Footer }
                <Route path="/" element={<><Header /><Home /><Footer /></>} />
                <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
                <Route path="/login" element={<><Header /><Login /><Footer /></>} />
                <Route path="/product/:id" element={<><Header /><ProductDetails /><Footer /></>} />
                <Route path="/wishlist" element={<><Header /><WishlistPage /><Footer /></>} />
                <Route path="/cart" element={<><Header /><CartPage /><Footer /></>} />
                <Route path="/checkout" element={<><Header /><CheckoutPage /><Footer /></>} />
                <Route path="/order-summary" element={<><Header /><OrderSummaryPage /><Footer /></>} />
                <Route path="/order-confirmation/:orderId" element={<><Header /><OrderConfirmation /><Footer /></>} />
                <Route path="/products/category/accessories" element={<><Header /><Accessories /><Footer /></>} />
                <Route path="/products/category/networking" element={<><Header /><Networking /><Footer /></>} />
                <Route path="/products/category/laptop" element={<><Header /><LaptopPage /><Footer /></>} />
                <Route path="/information" element={<><Header /><InformationPage /><Footer /></>} />
                <Route path="/shipping" element={<><Header /><ShippingPage /><Footer /></>} />
                <Route path="/brand/:brandName" element={<><Header /><BrandPage /><Footer /></>} />

                {/* Routes for Dashboard without Header and Footer }
                <Route path="/dashboard/*" element={<Dashboard />} />
                {/* Other Routes }
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;good dashboard */




import  {React, useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SignUp from './components/register/SignUp';
import Login from './components/register/Login';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import BrandPage from './pages/BrandPage';
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
//import Dashboard from './pages/Dashboard';
import DashboardRoutes from './components/dashboard/DashboardRoutes';
import { ToastContainer } from 'react-toastify';
import { setUser } from './store/slices/authSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            dispatch(setUser({ token }));
        }
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                {/* Routes for pages with Header and Footer */}
                <Route path="/" element={<><Header /><Home /><Footer /></>} />
                <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
                <Route path="/login" element={<><Header /><Login /><Footer /></>} />
                <Route path="/product/:id" element={<><Header /><ProductDetails /><Footer /></>} />
                <Route path="/wishlist" element={<><Header /><WishlistPage /><Footer /></>} />
                <Route path="/cart" element={<><Header /><CartPage /><Footer /></>} />
                <Route path="/checkout" element={<><Header /><CheckoutPage /><Footer /></>} />
                <Route path="/order-summary" element={<><Header /><OrderSummaryPage /><Footer /></>} />
                <Route path="/order-confirmation/:orderId" element={<><Header /><OrderConfirmation /><Footer /></>} />
                <Route path="/products/category/accessories" element={<><Header /><Accessories /><Footer /></>} />
                <Route path="/products/category/networking" element={<><Header /><Networking /><Footer /></>} />
                <Route path="/products/category/laptop" element={<><Header /><LaptopPage /><Footer /></>} />
                <Route path="/information" element={<><Header /><InformationPage /><Footer /></>} />
                <Route path="/shipping" element={<><Header /><ShippingPage /><Footer /></>} />
                <Route path="/brand/:brandName" element={<><Header /><BrandPage /><Footer /></>} />

                {/* Routes for Dashboard */}
                <Route path="/dashboard/*" element={<DashboardRoutes />}>
                    
                </Route>
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;
