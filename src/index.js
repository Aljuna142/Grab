


/*import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

const app = (
  <Router>
    <App />
  </Router>
);

// Use createRoot from react-dom/client to render the app
ReactDOM.createRoot(rootElement).render(app);*/




/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.createRoot(rootElement).render(app);*/


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    
      <App />
   
  </React.StrictMode>,
  rootElement
);
