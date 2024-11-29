

/*import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa'; // Updated imports
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Existing Overview Boxes }
                    <div className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </div>
                    <div className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </div>
                    <div className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </div>
                    <div className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </div>
                </div>

                {/* Order Statistics Section }
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <div className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </div>
                    </div>
                    <div className="order-statistics-row">
                        <div className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </div>
                        <div className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/

/*okkkkimport React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Overview Boxes }
                    <Link to="/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

                {/* Order Statistics Section }
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/


/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import SalesSummary from '../components/dashboard/SalesSummary'; // Import SalesSummary
import OrdersSummary from '../components/dashboard/OrdersSummary'; // Import OrdersSummary
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Overview Boxes }
                    <Link to="/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

               

                {/* Order Statistics Section *
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>
                 { Sales Summary and Orders Summary Section }
                 <div className="row">
                    <SalesSummary />
                    <OrdersSummary />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/


/*without chart import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import SalesSummary from '../components/dashboard/SalesSummary'; // Import SalesSummary
import OrdersSummary from '../components/dashboard/OrdersSummary'; // Import OrdersSummary
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Overview Boxes }
                    <Link to="/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

                {/* Order Statistics Section }
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>
                 
                {/* Sales Summary and Orders Summary Section }
                <div className="row">
                    <div className="col-md-6">
                        <SalesSummary />
                    </div>
                    <div className="col-md-6">
                        <OrdersSummary />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/








/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import MonthlyChart from '../components/charts/MonthlyChart'; // Import MonthlyChart
import OrdersSummary from '../components/dashboard/OrdersSummary'; // Import OrdersSummary
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';
import CustomerStats from '../components/dashboard/CustomerStats'; 

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Overview Boxes }
                    <Link to="/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

                {/* Order Statistics Section }
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>
                 
                {/* Monthly Chart and Orders Summary Section }
                <div className="row">
                    <div className="col-md-6">
                        <MonthlyChart /> {/* Replace SalesSummary with MonthlyChart }
                    </div>
                    <div className="col-md-6">
                        <OrdersSummary />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <CustomerStats /> {/* New CustomerStats Component }
                    </div>
                    <div className="col-md-6">
                        {/* Add any additional content for the second column }
                        <div className="additional-content">
                            {/* Additional content goes here }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/



/*ok dashboard import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox, FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes } from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import MonthlyChart from '../components/charts/MonthlyChart'; // Import MonthlyChart
import OrdersSummary from '../components/dashboard/OrdersSummary'; // Import OrdersSummary
import CustomerStats from '../components/dashboard/CustomerStats'; // Import CustomerStats
import TopCustomers from '../components/dashboard/TopCustomers'; // Import TopCustomers
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section }
                <div className="overview-section">
                    {/* Overview Boxes }
                    <Link to="/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

                {/* Order Statistics Section }
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>

                {/* Monthly Chart and Orders Summary Section }
                <div className="row">
                    <div className="col-md-6">
                        <MonthlyChart /> {/* Replace SalesSummary with MonthlyChart }
                    </div>
                    <div className="col-md-6">
                        <OrdersSummary />
                    </div>
                </div>

                {/* Customer Stats and Top Customers Section }
                <div className="row mt-4">
                    <div className="col-md-6">
                        <CustomerStats /> {/* CustomerStats Component }
                    </div>
                    <div className="col-md-6">
                        <TopCustomers /> {/* TopCustomers Component }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;*/

import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaDollarSign, FaShoppingCart, FaUserFriends, FaTags, FaBox,
    FaClock, FaCheck, FaTruck, FaShippingFast, FaBan, FaUndo, FaTimes
} from 'react-icons/fa';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import MonthlyChart from '../components/charts/MonthlyChart'; // Import MonthlyChart
import OrdersSummary from '../components/dashboard/OrdersSummary'; // Import OrdersSummary
import CustomerStats from '../components/dashboard/CustomerStats'; // Import CustomerStats
import TopCustomers from '../components/dashboard/TopCustomers'; // Import TopCustomers
import '../assets/styles/Dashboard.css';
import { getGreeting } from '../utils/greetingUtils';

const Dashboard = () => {
    const greeting = getGreeting();

    return (
        <div className="dashboard">
            <DashboardSidebar />
            <main className="dashboard-content">
                {/* Welcome and Greeting */}
                <h2 className="welcome-text">Welcome to the Dashboard</h2>
                <h1 className="greeting-text">{greeting}!</h1>

                {/* Overview Section */}
                <div className="overview-section">
                    <Link to="/dashboard/total-earnings" className="overview-box total-earnings" style={{ backgroundColor: '#FD0063' }}>
                        <div className="icon-circle">
                            <FaDollarSign className="overview-icon" />
                        </div>
                        <p>Total Earnings</p>
                        <h3>$0.00</h3>
                    </Link>
                    <Link to="/dashboard/total-orders" className="overview-box total-orders" style={{ backgroundColor: '#F23E14' }}>
                        <div className="icon-circle">
                            <FaShoppingCart className="overview-icon" />
                        </div>
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </Link>
                    <Link to="/dashboard/total-customers" className="overview-box total-customers" style={{ backgroundColor: '#6A45FE' }}>
                        <div className="icon-circle">
                            <FaUserFriends className="overview-icon" />
                        </div>
                        <p>Total Customers</p>
                        <h3>1</h3>
                    </Link>
                    <Link to="/dashboard/total-products" className="overview-box total-products" style={{ backgroundColor: '#426EFF' }}>
                        <div className="icon-circle">
                            <FaTags className="overview-icon" />
                        </div>
                        <p>Total Products</p>
                        <h3>0</h3>
                    </Link>
                </div>

                {/* Order Statistics Section */}
                <div className="order-statistics-section">
                    <div className="order-statistics-row">
                        <Link to="/dashboard/total-orders-stats" className="order-box total-orders">
                            <FaBox className="order-icon" />
                            <p>Total Orders</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/pending-orders" className="order-box pending">
                            <FaClock className="order-icon" />
                            <p>Pending</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/confirmed-orders" className="order-box confirmed">
                            <FaCheck className="order-icon" />
                            <p>Confirmed</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/ongoing-orders" className="order-box ongoing">
                            <FaTruck className="order-icon" />
                            <p>Ongoing</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                    <div className="order-statistics-row">
                        <Link to="/dashboard/delivered-orders" className="order-box delivered">
                            <FaShippingFast className="order-icon" />
                            <p>Delivered</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/canceled-orders" className="order-box canceled">
                            <FaBan className="order-icon" />
                            <p>Canceled</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/returned-orders" className="order-box returned">
                            <FaUndo className="order-icon" />
                            <p>Returned</p>
                            <h4>0</h4>
                        </Link>
                        <Link to="/dashboard/rejected-orders" className="order-box rejected">
                            <FaTimes className="order-icon" />
                            <p>Rejected</p>
                            <h4>0</h4>
                        </Link>
                    </div>
                </div>

                {/* Monthly Chart and Orders Summary Section */}
                <div className="row">
                    <div className="col-md-6">
                        <MonthlyChart /> {/* MonthlyChart Component */}
                    </div>
                    <div className="col-md-6">
                        <OrdersSummary /> {/* OrdersSummary Component */}
                    </div>
                </div>

                {/* Customer Stats and Top Customers Section */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <CustomerStats /> {/* CustomerStats Component */}
                    </div>
                    <div className="col-md-6">
                        <TopCustomers /> {/* TopCustomers Component */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;



