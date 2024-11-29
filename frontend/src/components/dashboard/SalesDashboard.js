/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SalesDashboard.css'; // Import your styles

const SalesDashboard = () => {
    const navigate = useNavigate();

    const handleSalesEntryClick = () => {
        navigate('/dashboard/sales-entry'); // This route should point to your SalesEntry component
    };

    return (
        <div className="sales-dashboard">
            <h1>Sales Dashboard</h1>
            <div className="button-container">
                <button className="sales-entry-button" onClick={handleSalesEntryClick}>
                    Sales Entry
                </button>
            </div>
            <div className="navigation-buttons">
                <button onClick={() => navigate('/dashboard/sales-report')}>Sales Report</button>
                <button onClick={() => navigate('/dashboard/return-orders')}>Return Orders</button>
                <button onClick={() => navigate('/dashboard/online-orders')}>Online Orders</button>
                {/* Add other buttons as required }
            </div>
        </div>
    );
};

export default SalesDashboard;*/
/*last import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SalesDashboard.css'; // Import your styles
import DashboardSidebar from '../dashboard/DashboardSidebar';

const SalesDashboard = () => {
    const navigate = useNavigate();

    const handleSalesEntryClick = () => {
        navigate('/dashboard/sales-entry'); // This route should point to your SalesEntry component
    };

    return (
        <div className="sales-dashboard">
            <DashboardSidebar className="sales-sidebar" /> {/* Sidebar for the Sales Dashboard }
            <div className="sales-content">
                <h1>Sales Dashboard</h1>
                <div className="button-container">
                    <button className="sales-entry-button" onClick={handleSalesEntryClick}>
                        Sales Entry
                    </button>
                    <button onClick={() => navigate('/dashboard/sales-report')}>Sales Report</button>
                    <button onClick={() => navigate('/dashboard/return-orders')}>Return Orders</button>
                    <button onClick={() => navigate('/dashboard/online-orders')}>Online Orders</button>
                    {/* Add other buttons as required }
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;last*/

// SalesDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SalesDashboard.css'; // Import your styles
import DashboardSidebar from '../dashboard/DashboardSidebar';

const SalesDashboard = () => {
    const navigate = useNavigate();

    const handleSalesEntryClick = () => {
        navigate('/dashboard/sales-entry'); // This route should point to your SalesEntry component
    };

    return (
        <div className="sales-dashboard">
            <DashboardSidebar className="sales-sidebar" /> {/* Sidebar for the Sales Dashboard */}
            <div className="sales-content">
                <h1>Sales Dashboard</h1>
                <div className="button-container">
                    <button className="sales-entry-button" onClick={handleSalesEntryClick}>
                        Sales Entry
                    </button>
                    <button onClick={() => navigate('/dashboard/sales-report')}>Sales Report</button>
                    <button onClick={() => navigate('/dashboard/return-orders')}>Return Orders</button>
                    <button onClick={() => navigate('/dashboard/online-orders')}>Online Orders</button>
                    {/* Add other buttons as required */}
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;