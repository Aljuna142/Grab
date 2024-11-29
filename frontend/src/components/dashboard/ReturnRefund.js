

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReturnRefund = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
        productName: '',
        salesperson: '',
        customerName: '',
        dateFrom: '',
        dateTo: '',
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/v1/pos-orders');
                const filteredOrders = response.data.orders.filter(order => order.returnStatus || order.refundAmount > 0);
                setOrders(filteredOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Filter orders based on search criteria
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));

        return dateFromValid && dateToValid && productNameValid && salespersonValid && customerNameValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h2>Returned and Refunded Products</h2>
            <div className="filter-row">
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
            </div>

            {filteredOrders.length === 0 ? (
                <p>No returned or refunded products found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Refund Amount</th>
                            <th>Store Name</th>
                            <th>Customer Name</th>
                            <th>Salesperson</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order._id}>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.returnStatus ? 'Returned' : 'Refunded'}</td>
                                <td>{order.refundAmount > 0 ? order.refundAmount : '-'}</td>
                                <td>{order.storeName}</td>
                                <td>{order.customerName}</td>
                                <td>{order.salesperson}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReturnRefund;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReturnRefund = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
        productName: '',
        salesperson: '',
        customerName: '',
        storeName: '', // Added storeName to filter
        dateFrom: '',
        dateTo: '',
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/v1/pos-orders');
                const filteredOrders = response.data.orders.filter(order => order.returnStatus || order.refundAmount > 0);
                setOrders(filteredOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Filter orders based on search criteria
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const storeNameValid = !filter.storeName || (order.storeName && order.storeName.toLowerCase().includes(filter.storeName.toLowerCase())); // New filtering condition

        return dateFromValid && dateToValid && productNameValid && salespersonValid && customerNameValid && storeNameValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h2>Returned and Refunded Products</h2>
            <div className="filter-row">
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                <input type="text" name="storeName" value={filter.storeName} onChange={handleFilterChange} placeholder="Store Name" /> {/* New input field }
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
            </div>

            {filteredOrders.length === 0 ? (
                <p>No returned or refunded products found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Refund Amount</th>
                            <th>Store Name</th>
                            <th>Customer Name</th>
                            <th>Salesperson</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order._id}>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.returnStatus ? 'Returned' : 'Refunded'}</td>
                                <td>{order.refundAmount > 0 ? order.refundAmount : '-'}</td>
                                <td>{order.storeName}</td>
                                <td>{order.customerName}</td>
                                <td>{order.salesperson}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReturnRefund;*/




/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardSidebar from './DashboardSidebar'; // Import your sidebar component

const ReturnRefund = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
        productName: '',
        salesperson: '',
        customerName: '',
        storeName: '', // Added storeName to filter
        dateFrom: '',
        dateTo: '',
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/v1/pos-orders');
                const filteredOrders = response.data.orders.filter(order => order.returnStatus || order.refundAmount > 0);
                setOrders(filteredOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Filter orders based on search criteria
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const storeNameValid = !filter.storeName || (order.storeName && order.storeName.toLowerCase().includes(filter.storeName.toLowerCase())); // New filtering condition

        return dateFromValid && dateToValid && productNameValid && salespersonValid && customerNameValid && storeNameValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div style={{ display: 'flex' }}> {/* Use flex to layout sidebar and content }
            <DashboardSidebar /> {/* Render your sidebar here }
            <div style={{ flex: 1, padding: '20px' }}> {/* Content area }
                <h2>Returned and Refunded Products</h2>
                <div className="filter-row">
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="storeName" value={filter.storeName} onChange={handleFilterChange} placeholder="Store Name" /> {/* New input field }
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                </div>

                {filteredOrders.length === 0 ? (
                    <p>No returned or refunded products found.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Refund Amount</th>
                                <th>Store Name</th>
                                <th>Customer Name</th>
                                <th>Salesperson</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order._id}>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.returnStatus ? 'Returned' : 'Refunded'}</td>
                                    <td>{order.refundAmount > 0 ? order.refundAmount : '-'}</td>
                                    <td>{order.storeName}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.salesperson}</td>
                                    <td>{new Date(order.dateTime).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ReturnRefund;*/




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardSidebar from './DashboardSidebar'; // Import your sidebar component
import './ReturnRefund.css'; // Import the updated CSS file

const ReturnRefund = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
        productName: '',
        salesperson: '',
        customerName: '',
        storeName: '', // Added storeName to filter
        dateFrom: '',
        dateTo: '',
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/v1/pos-orders');
                const filteredOrders = response.data.orders.filter(order => order.returnStatus || order.refundAmount > 0);
                setOrders(filteredOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Filter orders based on search criteria
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const storeNameValid = !filter.storeName || (order.storeName && order.storeName.toLowerCase().includes(filter.storeName.toLowerCase())); // New filtering condition

        return dateFromValid && dateToValid && productNameValid && salespersonValid && customerNameValid && storeNameValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="return-refund-container"> {/* Container for sidebar and content */}
            <DashboardSidebar className="return-refund-sidebar" /> {/* Sidebar */}
            <div className="return-refund-content"> {/* Content area */}
                <h2 className="return-refund-header"></h2>
                <div className="filter-row">
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="storeName" value={filter.storeName} onChange={handleFilterChange} placeholder="Store Name" /> {/* New input field */}
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                </div>

                {filteredOrders.length === 0 ? (
                    <p>No returned or refunded products found.</p>
                ) : (
                    <table className="return-refund-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Refund Amount</th>
                                <th>Store Name</th>
                                <th>Customer Name</th>
                                <th>Salesperson</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order._id}>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.returnStatus ? 'Returned' : 'Refunded'}</td>
                                    <td>{order.refundAmount > 0 ? order.refundAmount : '-'}</td>
                                    <td>{order.storeName}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.salesperson}</td>
                                    <td>{new Date(order.dateTime).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ReturnRefund;
