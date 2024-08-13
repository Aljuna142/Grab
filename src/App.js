
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
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSummaryPage from './pages/OrderSummaryPage';// Your CheckoutPage component
import OrderConfirmation from './pages/OrderConfirmation';
import Accessories from './components/accessories/Accessories';
import Networking from './components/networking/Networking';
import LaptopPage from './components/laptops/LaptopPage';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import InformationPage from './pages/InformationPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';


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
                    <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Update to element */}
                    <Route path="/products/category/Accessories" element={<Accessories />} />
                    <Route path="/products/category/networking" element={<Networking />} />
                    <Route path="/products/category/laptop" element={<LaptopPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    {/* Other Routes */}
                </Routes>
                <Footer />
                <ToastContainer /> {/* Add ToastContainer */}
            </div>
        </Router>
    );
}

export default App;

