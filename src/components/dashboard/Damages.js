/*import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Damages.css'; // Assuming you have a CSS file for specific styling
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from React Bootstrap

const Damages = () => {
    return (
        <div className="damages-page">
            <DashboardSidebar />
            <div className="damages-content">
                <div className="damages-header">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className="filter-button">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className="export-button">
                            Export
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <i className="bi bi-printer"></i> Print
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <i className="bi bi-file-earmark-excel"></i> XLS
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button className="btn btn-danger add-damage-button">Add Damage</button>
                </div>

                <div className="damages-card">
                    <table className="table table-bordered table-transparent damages-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>$100</td>
                                <td>Sample Note</td>
                                <td>
                                    <button className="btn btn-success btn-sm action-button">Edit</button>
                                    <button className="btn btn-danger btn-sm action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
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

export default Damages;*/






import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Damages.css'; // Assuming you have a CSS file for specific styling
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from React Bootstrap

const Damages = () => {
    return (
        <div className="damages-page">
            <DashboardSidebar />
            <div className="damages-content">
                <div className="damages-header">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="filter-dropdown" className="filter-button">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="export-dropdown" className="export-button">
                            Export
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <i className="bi bi-printer"></i> Print
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <i className="bi bi-file-earmark-excel"></i> XLS
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button className="btn btn-danger add-damage-button">Add Damage</button>
                </div>

                <div className="damages-card">
                    <table className="table table-responsive  table-transparent damages-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>$100</td>
                                <td>Sample Note</td>
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

export default Damages;
