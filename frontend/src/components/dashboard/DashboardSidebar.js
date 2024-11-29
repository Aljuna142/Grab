/*import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog } from 'react-icons/fa'; // Example icons, adjust as needed
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="sidebar-link">Dashboard</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/products" className="sidebar-link"><FaBox /> Products</Link></li>
                    <li><Link to="/purchase" className="sidebar-link"><FaBox /> Purchase</Link></li>
                    <li><Link to="/damages" className="sidebar-link"><FaBox /> Damages</Link></li>
                    <li><Link to="/stock" className="sidebar-link"><FaBox /> Stock</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/pos" className="sidebar-link"><FaShoppingCart /> POS</Link></li>
                    <li><Link to="/pos-orders" className="sidebar-link"><FaShoppingCart /> POS Orders</Link></li>
                    <li><Link to="/online-orders" className="sidebar-link"><FaShoppingCart /> Online Orders</Link></li>
                    <li><Link to="/return-orders" className="sidebar-link"><FaShoppingCart /> Return Orders</Link></li>
                    <li><Link to="/return-refunds" className="sidebar-link"><FaShoppingCart /> Return and Refunds</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/coupons" className="sidebar-link"><FaGift /> Coupons</Link></li>
                    <li><Link to="/promotions" className="sidebar-link"><FaGift /> Promotions</Link></li>
                    <li><Link to="/product-sections" className="sidebar-link"><FaGift /> Product Sections</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/push-notifications" className="sidebar-link"><FaBell /> Push Notification</Link></li>
                    <li><Link to="/subscribers" className="sidebar-link"><FaBell /> Subscriber</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/administrators" className="sidebar-link"><FaUsers /> Administrators</Link></li>
                    <li><Link to="/customers" className="sidebar-link"><FaUsers /> Customers</Link></li>
                    <li><Link to="/employees" className="sidebar-link"><FaUsers /> Employees</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/transactions" className="sidebar-link"><FaMoneyBill /> Transactions</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/sales-report" className="sidebar-link"><FaChartBar /> Sales Report</Link></li>
                    <li><Link to="/products-report" className="sidebar-link"><FaChartBar /> Products Report</Link></li>
                    <li><Link to="/credit-balance-report" className="sidebar-link"><FaChartBar /> Credit Balance Report</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/settings" className="sidebar-link"><FaCog /> Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;*/
/*difrnt icons import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog, FaTags, FaWarehouse, FaTools, FaRegStickyNote } from 'react-icons/fa'; // Updated icons
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="sidebar-link">Dashboard</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/products" className="sidebar-link"><FaBox /> Products</Link></li>
                    <li><Link to="/purchase" className="sidebar-link"><FaTags /> Purchase</Link></li>
                    <li><Link to="/damages" className="sidebar-link"><FaTools /> Damages</Link></li>
                    <li><Link to="/stock" className="sidebar-link"><FaWarehouse /> Stock</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/pos" className="sidebar-link"><FaShoppingCart /> POS</Link></li>
                    <li><Link to="/pos-orders" className="sidebar-link"><FaShoppingCart /> POS Orders</Link></li>
                    <li><Link to="/online-orders" className="sidebar-link"><FaShoppingCart /> Online Orders</Link></li>
                    <li><Link to="/return-orders" className="sidebar-link"><FaShoppingCart /> Return Orders</Link></li>
                    <li><Link to="/return-refunds" className="sidebar-link"><FaShoppingCart /> Return and Refunds</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/coupons" className="sidebar-link"><FaGift /> Coupons</Link></li>
                    <li><Link to="/promotions" className="sidebar-link"><FaGift /> Promotions</Link></li>
                    <li><Link to="/product-sections" className="sidebar-link"><FaGift /> Product Sections</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/push-notifications" className="sidebar-link"><FaBell /> Push Notification</Link></li>
                    <li><Link to="/subscribers" className="sidebar-link"><FaBell /> Subscriber</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/administrators" className="sidebar-link"><FaUsers /> Administrators</Link></li>
                    <li><Link to="/customers" className="sidebar-link"><FaUsers /> Customers</Link></li>
                    <li><Link to="/employees" className="sidebar-link"><FaUsers /> Employees</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/transactions" className="sidebar-link"><FaMoneyBill /> Transactions</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/sales-report" className="sidebar-link"><FaChartBar /> Sales Report</Link></li>
                    <li><Link to="/products-report" className="sidebar-link"><FaChartBar /> Products Report</Link></li>
                    <li><Link to="/credit-balance-report" className="sidebar-link"><FaChartBar /> Credit Balance Report</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/settings" className="sidebar-link"><FaCog /> Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;dfrnt icons*/

/*import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog, FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt, FaCalendarAlt, FaWrench } from 'react-icons/fa'; // Updated icons
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="sidebar-link">Dashboard</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/products" className="sidebar-link"><FaBox /> Products</Link></li>
                    <li><Link to="/purchase" className="sidebar-link"><FaReceipt /> Purchase</Link></li>
                    <li><Link to="/damages" className="sidebar-link"><FaWrench /> Damages</Link></li>
                    <li><Link to="/stock" className="sidebar-link"><FaWarehouse /> Stock</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/pos" className="sidebar-link"><FaCreditCard /> POS</Link></li>
                    <li><Link to="/pos-orders" className="sidebar-link"><FaRegStickyNote /> POS Orders</Link></li>
                    <li><Link to="/online-orders" className="sidebar-link"><FaShoppingCart /> Online Orders</Link></li>
                    <li><Link to="/return-orders" className="sidebar-link"><FaBoxOpen /> Return Orders</Link></li>
                    <li><Link to="/return-refunds" className="sidebar-link"><FaTicketAlt /> Return and Refunds</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/coupons" className="sidebar-link"><FaTags /> Coupons</Link></li>
                    <li><Link to="/promotions" className="sidebar-link"><FaCalendarAlt /> Promotions</Link></li>
                    <li><Link to="/product-sections" className="sidebar-link"><FaBoxOpen /> Product Sections</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/push-notifications" className="sidebar-link"><FaBell /> Push Notification</Link></li>
                    <li><Link to="/subscribers" className="sidebar-link"><FaBell /> Subscriber</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/administrators" className="sidebar-link"><FaUsers /> Administrators</Link></li>
                    <li><Link to="/customers" className="sidebar-link"><FaUsers /> Customers</Link></li>
                    <li><Link to="/employees" className="sidebar-link"><FaUsers /> Employees</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/transactions" className="sidebar-link"><FaMoneyBill /> Transactions</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/sales-report" className="sidebar-link"><FaChartBar /> Sales Report</Link></li>
                    <li><Link to="/products-report" className="sidebar-link"><FaChartBar /> Products Report</Link></li>
                    <li><Link to="/credit-balance-report" className="sidebar-link"><FaChartBar /> Credit Balance Report</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/settings" className="sidebar-link"><FaCog /> Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;*/


/*perfect but without redirecting pages import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog, FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt, FaUserShield, FaUser, FaUserTie, FaTools } from 'react-icons/fa'; // Updated icons
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="sidebar-link">Dashboard</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard/products" className="sidebar-link"><FaBox /> Products</Link></li>
                    <li><Link to="/purchase" className="sidebar-link"><FaReceipt /> Purchase</Link></li>
                    <li><Link to="/damages" className="sidebar-link"><FaTools /> Damages</Link></li>
                    <li><Link to="/stock" className="sidebar-link"><FaWarehouse /> Stock</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/pos" className="sidebar-link"><FaCreditCard /> POS</Link></li>
                    <li><Link to="/pos-orders" className="sidebar-link"><FaRegStickyNote /> POS Orders</Link></li>
                    <li><Link to="/online-orders" className="sidebar-link"><FaShoppingCart /> Online Orders</Link></li>
                    <li><Link to="/return-orders" className="sidebar-link"><FaBoxOpen /> Return Orders</Link></li>
                    <li><Link to="/return-refunds" className="sidebar-link"><FaTicketAlt /> Return and Refunds</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/coupons" className="sidebar-link"><FaTags /> Coupons</Link></li>
                    <li><Link to="/promotions" className="sidebar-link"><FaGift /> Promotions</Link></li>
                    <li><Link to="/product-sections" className="sidebar-link"><FaBoxOpen /> Product Sections</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/push-notifications" className="sidebar-link"><FaBell /> Push Notification</Link></li>
                    <li><Link to="/subscribers" className="sidebar-link"><FaBell /> Subscriber</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/administrators" className="sidebar-link"><FaUserShield /> Administrators</Link></li>
                    <li><Link to="/customers" className="sidebar-link"><FaUser /> Customers</Link></li>
                    <li><Link to="/employees" className="sidebar-link"><FaUserTie /> Employees</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/transactions" className="sidebar-link"><FaMoneyBill /> Transactions</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/sales-report" className="sidebar-link"><FaShoppingCart /> Sales Report</Link></li>
                    <li><Link to="/products-report" className="sidebar-link"><FaBox /> Products Report</Link></li>
                    <li><Link to="/credit-balance-report" className="sidebar-link"><FaMoneyBill /> Credit Balance Report</Link></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li><Link  to="/settings" className="sidebar-link"><FaCog /> Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;perfect but woithout redirecting pages */




/*without pos import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog,
    FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt,
    FaUserShield, FaUser, FaUserTie, FaTools
} from 'react-icons/fa';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const handleLinkClick = (path) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard')}
                            activeClassName="active"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/products" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products')}
                            activeClassName="active"
                        >
                            <FaBox /> Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/purchases" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/purchase')}
                            activeClassName="active"
                        >
                            <FaReceipt /> Purchase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/damages" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/damages')}
                            activeClassName="active"
                        >
                            <FaTools /> Damages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/stock" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/stock')}
                            activeClassName="active"
                        >
                            <FaWarehouse /> Stock
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/pos" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/pos')}
                            activeClassName="active"
                        >
                            <FaCreditCard /> POS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/pos-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/pos-orders')}
                            activeClassName="active"
                        >
                            <FaRegStickyNote /> POS Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/online-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/online-orders')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Online Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/return-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/return-orders')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Return Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/return-refunds" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/return-refunds')}
                            activeClassName="active"
                        >
                            <FaTicketAlt /> Return and Refunds
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/coupons" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/coupons')}
                            activeClassName="active"
                        >
                            <FaTags /> Coupons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/promotions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/promotions')}
                            activeClassName="active"
                        >
                            <FaGift /> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/product-sections" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/product-sections')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Product Sections
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/push-notifications" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/push-notifications')}
                            activeClassName="active"
                        >
                            <FaBell /> Push Notification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/subscribers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/subscribers')}
                            activeClassName="active"
                        >
                            <FaBell /> Subscriber
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/administrators" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/administrators')}
                            activeClassName="active"
                        >
                            <FaUserShield /> Administrators
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/customers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/customers')}
                            activeClassName="active"
                        >
                            <FaUser /> Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/employees" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/employees')}
                            activeClassName="active"
                        >
                            <FaUserTie /> Employees
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/transactions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/transactions')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Transactions
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/sales-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/sales-report')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Sales Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/products-report')}
                            activeClassName="active"
                        >
                            <FaBox /> Products Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/credit-balance-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/credit-balance-report')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Credit Balance Report
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/settings" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/settings')}
                            activeClassName="active"
                        >
                            <FaCog /> Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;without pos */


/*import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog,
    FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt,
    FaUserShield, FaUser, FaUserTie, FaTools
} from 'react-icons/fa';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const handleLinkClick = (path) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard')}
                            activeClassName="active"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/products" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products')}
                            activeClassName="active"
                        >
                            <FaBox /> Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/purchases" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/purchases')}
                            activeClassName="active"
                        >
                            <FaReceipt /> Purchase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/damages" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/damages')}
                            activeClassName="active"
                        >
                            <FaTools /> Damages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/stock" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/stock')}
                            activeClassName="active"
                        >
                            <FaWarehouse /> Stock
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/pos/multistore" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/multistore')}
                            activeClassName="active"
                        >
                            <FaCreditCard /> POS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/pos-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/pos-orders')}
                            activeClassName="active"
                        >
                            <FaRegStickyNote /> POS Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/online-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/online-orders')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Online Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/return-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-orders')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Return Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/return-refunds" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-refunds')}
                            activeClassName="active"
                        >
                            <FaTicketAlt /> Return and Refunds
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/coupons" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/coupons')}
                            activeClassName="active"
                        >
                            <FaTags /> Coupons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/promotions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/promotions')}
                            activeClassName="active"
                        >
                            <FaGift /> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/product-sections" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/product-sections')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Product Sections
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/push-notifications" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/push-notifications')}
                            activeClassName="active"
                        >
                            <FaBell /> Push Notification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/subscribers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/subscribers')}
                            activeClassName="active"
                        >
                            <FaBell /> Subscriber
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/administrators" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/administrators')}
                            activeClassName="active"
                        >
                            <FaUserShield /> Administrators
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/customers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/customers')}
                            activeClassName="active"
                        >
                            <FaUser /> Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/employees" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/employees')}
                            activeClassName="active"
                        >
                            <FaUserTie /> Employees
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/transactions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/transactions')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Transactions
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/sales-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/sales-report')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Sales Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/products-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products-report')}
                            activeClassName="active"
                        >
                            <FaBox /> Products Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/credit-balance-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/credit-balance-report')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Credit Balance Report
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/settings" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/settings')}
                            activeClassName="active"
                        >
                            <FaCog /> Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;good sidebar*/


 /*good sidebar 1 import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog,
    FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt,
    FaUserShield, FaUser, FaUserTie, FaTools
} from 'react-icons/fa';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const handleLinkClick = (path) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard')}
                            activeClassName="active"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/products" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products')}
                            activeClassName="active"
                        >
                            <FaBox /> Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/purchases" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/purchases')}
                            activeClassName="active"
                        >
                            <FaReceipt /> Purchase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/damages" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/damages')}
                            activeClassName="active"
                        >
                            <FaTools /> Damages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/stock" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/stock')}
                            activeClassName="active"
                        >
                            <FaWarehouse /> Stock
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/pos/multistore" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/multistore')}
                            activeClassName="active"
                        >
                            <FaCreditCard /> POS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/sales-management" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/sales-management')}
                            activeClassName="active"
                        >
                            <FaChartBar /> Sales Management {/* Icon can be updated as needed}
                        </NavLink>
                    </li>
                   {/* <li>
                        <NavLink 
                            to="/dashboard/pos-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/pos-orders')}
                            activeClassName="active"
                        >
                            <FaRegStickyNote /> POS Orders
                        </NavLink>
                    </li>}
                    <li>
                        <NavLink 
                            to="/dashboard/online-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/online-orders')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Online Orders
                        </NavLink>
                    </li>
                   {/* <li>
                        <NavLink 
                            to="/dashboard/return-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-orders')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Return Orders
                        </NavLink>
                    </li>}
                    <li>
                        <NavLink 
                            to="/dashboard/return-refunds" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-refunds')}
                            activeClassName="active"
                        >
                            <FaTicketAlt /> Return and Refunds
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/coupons" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/coupons')}
                            activeClassName="active"
                        >
                            <FaTags /> Coupons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/promotions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/promotions')}
                            activeClassName="active"
                        >
                            <FaGift /> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/product-sections" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/product-sections')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Product Sections
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/push-notifications" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/push-notifications')}
                            activeClassName="active"
                        >
                            <FaBell /> Push Notification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/subscribers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/subscribers')}
                            activeClassName="active"
                        >
                            <FaBell /> Subscriber
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/administrators" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/administrators')}
                            activeClassName="active"
                        >
                            <FaUserShield /> Administrators
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/customers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/customers')}
                            activeClassName="active"
                        >
                            <FaUser /> Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/employees" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/employees')}
                            activeClassName="active"
                        >
                            <FaUserTie /> Employees
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/accounts" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/accounts')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/transactions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/transactions')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Transactions
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/sales-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/sales-report')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Sales Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/products-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products-report')}
                            activeClassName="active"
                        >
                            <FaBox /> Products Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/credit-balance-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/credit-balance-report')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Credit Balance Report
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/settings" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/settings')}
                            activeClassName="active"
                        >
                            <FaCog /> Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;good sidebar 1*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBox, FaShoppingCart, FaGift, FaBell, FaUsers, FaMoneyBill, FaChartBar, FaCog,
    FaTags, FaWarehouse, FaReceipt, FaCreditCard, FaRegStickyNote, FaBoxOpen, FaTicketAlt,
    FaUserShield, FaUser, FaUserTie, FaTools
} from 'react-icons/fa';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const handleLinkClick = (path) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard')}
                            activeClassName="active"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Product and Stock</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/products" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products')}
                            activeClassName="active"
                        >
                            <FaBox /> Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/purchases" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/purchases')}
                            activeClassName="active"
                        >
                            <FaReceipt /> Purchase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/damages" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/damages')}
                            activeClassName="active"
                        >
                            <FaTools /> Damages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/stock" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/stock')}
                            activeClassName="active"
                        >
                            <FaWarehouse /> Stock
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">POS & Orders</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/pos/multistore" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/pos/multistore')}
                            activeClassName="active"
                        >
                            <FaCreditCard /> POS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/sales-management" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/sales-management')}
                            activeClassName="active"
                        >
                            <FaChartBar /> Sales Management {/* Icon can be updated as needed*/ }
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink 
                            to="/dashboard/pos-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/pos-orders')}
                            activeClassName="active"
                        >
                            <FaRegStickyNote /> POS Orders
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink 
                            to="/dashboard/online-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/online-orders')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Online Orders
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink 
                            to="/dashboard/return-orders" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-orders')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Return Orders
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink 
                            to="/dashboard/return-refunds" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/return-refunds')}
                            activeClassName="active"
                        >
                            <FaTicketAlt /> Return and Refunds
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Promo</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/coupons" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/coupons')}
                            activeClassName="active"
                        >
                            <FaTags /> Coupons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/promotions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/promotions')}
                            activeClassName="active"
                        >
                            <FaGift /> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/product-sections" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/product-sections')}
                            activeClassName="active"
                        >
                            <FaBoxOpen /> Product Sections
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Communications</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/push-notifications" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/push-notifications')}
                            activeClassName="active"
                        >
                            <FaBell /> Push Notification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/subscribers" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/subscribers')}
                            activeClassName="active"
                        >
                            <FaBell /> Subscriber
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Users</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/administrators" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/administrators')}
                            activeClassName="active"
                        >
                            <FaUserShield /> Administrators
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/users" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/users')}
                            activeClassName="active"
                        >
                            <FaUser /> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/employees" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/employees')}
                            activeClassName="active"
                        >
                            <FaUserTie /> Employees
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Accounts</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/accounts" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/accounts')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/transactions" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/transactions')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Transactions
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Reports</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/sales-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/sales-report')}
                            activeClassName="active"
                        >
                            <FaShoppingCart /> Sales Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/products-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/products-report')}
                            activeClassName="active"
                        >
                            <FaBox /> Products Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/credit-balance-report" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/credit-balance-report')}
                            activeClassName="active"
                        >
                            <FaMoneyBill /> Credit Balance Report
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Setup</h3>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/dashboard/store-setup" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/store-setup')}
                            activeClassName="active"
                        >
                            <FaWarehouse /> Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/setup" 
                            className="sidebar-link" 
                            onClick={() => handleLinkClick('/dashboard/setup')}
                            activeClassName="active"
                        >
                            <FaCog /> Setup
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;
