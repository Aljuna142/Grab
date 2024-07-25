
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
                    <Route path="/product/:id" element={<ProductDetails />} /> {/* Route for ProductDetails */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

