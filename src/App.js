
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

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import Header from './components/common/Header'; // Import your Header component
import './App.css'; // Assuming you have an App.css for global styles

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add more routes for other pages */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
