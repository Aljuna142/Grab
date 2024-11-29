// StoreSidebar.js
/*import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './StoreSidebar.css'; // Add styles as needed

const StoreSidebar = () => {
    const { storeName } = useParams(); // Get storeName from the URL parameters

    return (
        <div className="store-sidebar">
            <h2 className="store-sidebar-title">{storeName} </h2>
            <div className="section-separator"></div> {/* Separator under the title }
            <ul>
                <li><Link to={`/dashboard/pos/${storeName}/stock`} className="store-sidebar-link">Stock Levels</Link></li>
                <li><Link to={`/dashboard/pos/${storeName}/sales`} className="store-sidebar-link">Sales Data</Link></li>
                <li><Link to={`/dashboard/pos/${storeName}/orders`} className="store-sidebar-link">Orders</Link></li>
                <li><Link to={`/dashboard/pos/${storeName}/products`} className="store-sidebar-link">Product Details</Link></li>
            </ul>
        </div>
    );
};

export default StoreSidebar;*/



// StoreSidebar.js
/*good import React from 'react';
import { NavLink, useParams } from 'react-router-dom'; // Import NavLink
import './StoreSidebar.css'; // Add styles as needed

const StoreSidebar = () => {
    const { storeName } = useParams(); // Get storeName from the URL parameters

    return (
        <div className="store-sidebar">
            <h2 className="store-sidebar-title">{storeName}</h2>
            <div className="section-separator"></div> {/* Separator under the title }
            <ul>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/stock`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Stock Levels
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/sales`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Sales Data
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/orders`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/products`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Product Details
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default StoreSidebar;*/



/*// StoreSidebar.js
import React from 'react';
import { NavLink, useParams } from 'react-router-dom'; // Import NavLink
import './StoreSidebar.css'; // Add styles as needed

const StoreSidebar = () => {
    const { storeName } = useParams(); // Get storeName from the URL parameters

    return (
        <div className="store-sidebar">
            <h2 className="store-sidebar-title">{storeName}</h2>
            <div className="section-separator"></div> {/* Separator under the title }
            <ul>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/stock`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Stock Levels
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/sales`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Sales Data
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/orders`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/products`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Product Details
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/damages`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Damages
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/purchases`} 
                        className="store-sidebar-link" 
                        activeClassName="active" // Add active class for styling
                    >
                        Purchases
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default StoreSidebar;*/



// StoreSidebar.js
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './StoreSidebar.css';

const StoreSidebar = () => {
    const { storeName } = useParams(); // Get storeName from the URL parameters

    return (
        <div className="store-sidebar">
            <h2 className="store-sidebar-title">{storeName}</h2>
            <div className="section-separator"></div>
            <ul>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/stock`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Stock Levels
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/sales`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Sales Data
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/orders`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/products`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Product Details
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/damages`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Damages
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`/dashboard/pos/${storeName}/purchases`} 
                        className="store-sidebar-link" 
                        activeClassName="active"
                    >
                        Purchases
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default StoreSidebar;
