/*import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const CheckoutBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item as={Link} to="/information" active>
        Information
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} to="/shipping">
        Shipping
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CheckoutBreadcrumb;*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Breadcrumb.css'; // Import your custom CSS

const CheckoutBreadcrumb = () => {
  return (
    <nav className="breadcrumb-container">
      <span className="breadcrumb-item">Information</span> &gt;
      <Link to="/shipping" className="breadcrumb-item-link">Shipping</Link>
    </nav>
  );
};

export default CheckoutBreadcrumb;*/


/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Breadcrumb.css';

const CheckoutBreadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="breadcrumb-container">
      <Link
        to="/information"
        className={`breadcrumb-item-link ${
          location.pathname === '/information' ? 'active' : ''
        }`}
      >
        Information
      </Link>
      &gt;
      <Link
        to="/shipping"
        className={`breadcrumb-item-link ${
          location.pathname === '/shipping' ? 'active' : ''
        }`}
      >
        Shipping
      </Link>
    </nav>
  );
};

export default CheckoutBreadcrumb;*/








/*okayimport React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Breadcrumb.css';

const CheckoutBreadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="breadcrumb-container">
      <Link
        to="/information"
        className={`breadcrumb-item-link ${
          location.pathname === '/information' ? 'active' : ''
        }`}
      >
        Information
      </Link>
      &gt;
      <Link
        to="/shipping"
        className={`breadcrumb-item-link ${
          location.pathname === '/shipping' ? 'active' : ''
        }`}
      >
        Shipping
      </Link>
      &gt;
      <Link
        to="/payment"
        className={`breadcrumb-item-link ${
          location.pathname === '/payment' ? 'active' : ''
        }`}
      >
        Payment
      </Link>
    </nav>
  );
};

export default CheckoutBreadcrumb;*/



/*pakka import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Breadcrumb.css';

const CheckoutBreadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="breadcrumb-container">
      <Link
        to="/order-summary"
        className={`breadcrumb-item-link ${
          location.pathname === '/order-summary' ? 'active' : ''
        }`}
      >
        Order Summary
      </Link>
      &gt;
      <Link
        to="/information"
        className={`breadcrumb-item-link ${
          location.pathname === '/information' ? 'active' : ''
        }`}
      >
        Information
      </Link>
      &gt;
      <Link
        to="/shipping"
        className={`breadcrumb-item-link ${
          location.pathname === '/shipping' ? 'active' : ''
        }`}
      >
        Shipping
      </Link>
      &gt;
      <Link
        to="/payment"
        className={`breadcrumb-item-link ${
          location.pathname === '/payment' ? 'active' : ''
        }`}
      >
        Payment
      </Link>
    </nav>
  );
};

export default CheckoutBreadcrumb;pakka*/



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Breadcrumb.css';

const CheckoutBreadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="breadcrumb-container">
      <Link
        to="/order-summary"
        className={`breadcrumb-item-link ${
          location.pathname === '/order-summary' ? 'active' : ''
        }`}
      >
        Order Summary
      </Link>
      &gt;
      <Link
        to="/information"
        className={`breadcrumb-item-link ${
          location.pathname === '/information' ? 'active' : ''
        }`}
      >
        Information
      </Link>
      &gt;
      <Link
        to="/payment"
        className={`breadcrumb-item-link ${
          location.pathname === '/payment' ? 'active' : ''
        }`}
      >
        Payment
      </Link>
      &gt;
      <Link
        to="/shipping"
        className={`breadcrumb-item-link ${
          location.pathname === '/shipping' ? 'active' : ''
        }`}
      >
        Shipping
      </Link>
    </nav>
  );
};

export default CheckoutBreadcrumb;

