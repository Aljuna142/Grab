import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Purchases.css'; // Assuming you have a CSS file for specific styling

const Purchases = () => {
    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="btn btn-outline-danger filter-button">Filter</button>
                    <button className="btn btn-outline-danger export-button">Export</button>
                    <button className="btn btn-danger add-purchase-button">Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="table table-bordered table-transparent purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-success btn-sm action-button">Edit</button>
                                    <button className="btn btn-danger btn-sm action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchases;
