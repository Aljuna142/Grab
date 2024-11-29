/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdersData, setFilterOptions } from '../../../store/slices/orderSlice';
import OrdersModalForm from '../forms/OrdersModalForm'; // Create this modal form for adding/editing orders
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const ordersData = useSelector((state) => state.orders.ordersData);
    const filter = useSelector((state) => state.orders.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Mock data for demonstration
    useEffect(() => {
        const fetchOrdersData = async () => {
            // Simulating fetching data
            const mockData = [
                {
                    _id: '1',
                    sku: 'SKU123',
                    productName: 'Product A',
                    price: 1000,
                    quantity: 2,
                    salesperson: 'John Doe',
                    customerName: 'Jane Smith',
                    companyName: 'XYZ Corp',
                    mobileNumber: '1234567890',
                    address: '123 Street, City',
                    orderStatus: 'Pending',
                    paymentStatus: 'Cash',
                    targetPrice: 996, // Example for target/bargain price
                    dateTime: new Date().toISOString(),
                },
                // Add more mock orders as needed
            ];
            dispatch(setOrdersData(mockData));
            setLoading(false);
        };

        fetchOrdersData();
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = Array.isArray(ordersData) ? ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    }) : [];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFilterOptions({ [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        // Logic to delete order (for frontend, just remove from state)
        dispatch(setOrdersData((prev) => prev.filter((order) => order._id !== orderId)));
        // Display success toast (implement with toast library if desired)
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    dispatch(setOrdersData((prev) => [...prev, order]));
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>Aed {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/


// components/orders/OrdersDetail.js
/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdersData, setFilterOptions } from '../../../store/slices/orderSlice';
import OrdersModalForm from '../forms/OrdersModalForm'; // Make sure to create this modal form component
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const ordersData = useSelector((state) => state.orders?.ordersData || []);
    const filter = useSelector((state) => state.orders.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Mock data for demonstration
    useEffect(() => {
        const fetchOrdersData = async () => {
            // Simulating fetching data
            const mockData = [
                {
                    _id: '1',
                    sku: 'SKU123',
                    productName: 'Product A',
                    price: 1000,
                    quantity: 2,
                    salesperson: 'John Doe',
                    customerName: 'Jane Smith',
                    companyName: 'XYZ Corp',
                    mobileNumber: '1234567890',
                    address: '123 Street, City',
                    orderStatus: 'Pending',
                    paymentStatus: 'Cash',
                    targetPrice: 996, // Example for target/bargain price
                    dateTime: new Date().toISOString(),
                },
                // Add more mock orders as needed
            ];
            dispatch(setOrdersData(mockData));
            setLoading(false);
        };

        fetchOrdersData();
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFilterOptions({ [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        // Logic to delete order (for frontend, just remove from state)
        dispatch(setOrdersData((prev) => prev.filter((order) => order._id !== orderId)));
        // Display success toast (implement with toast library if desired)
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    dispatch(setOrdersData((prev) => [...prev, order]));
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>Aed {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;2*/

/*3 design CAMEimport React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import OrdersModalForm from '../forms/OrdersModalForm'; // Make sure to create this modal form component
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext();
    
    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Mock data for demonstration
    useEffect(() => {
        const fetchOrdersData = async () => {
            // Simulating fetching data
            const mockData = [
                {
                    _id: '1',
                    sku: 'SKU123',
                    productName: 'Product A',
                    price: 1000,
                    quantity: 2,
                    salesperson: 'John Doe',
                    customerName: 'Jane Smith',
                    companyName: 'XYZ Corp',
                    mobileNumber: '1234567890',
                    address: '123 Street, City',
                    orderStatus: 'Pending',
                    paymentStatus: 'Cash',
                    targetPrice: 996, // Example for target/bargain price
                    dateTime: new Date().toISOString(),
                },
                // Add more mock orders as needed
            ];
            setOrdersData(mockData);
            setLoading(false);
        };

        fetchOrdersData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        // Logic to delete order (for frontend, just remove from state)
        setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
        // Display success toast (implement with toast library if desired)
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    setOrdersData((prev) => [...prev, order]);
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>Aed {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;3*/



/*PAKKA WITHOUIT BACKEND import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import OrdersModalForm from '../forms/OrdersModalForm'; // Make sure to create this modal form component
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext();
    
    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Mock data for demonstration
    useEffect(() => {
        const fetchOrdersData = async () => {
            // Simulating fetching data
            const mockData = [
                {
                    _id: '1',
                    sku: 'SKU123',
                    productName: 'Product A',
                    price: 1000,
                    quantity: 2,
                    salesperson: 'John Doe',
                    customerName: 'Jane Smith',
                    companyName: 'XYZ Corp',
                    mobileNumber: '1234567890',
                    address: '123 Street, City',
                    orderStatus: 'Pending',
                    paymentStatus: 'Cash',
                    targetPrice: 996, // Example for target/bargain price
                    dateTime: new Date().toISOString(),
                },
                // Add more mock orders as needed
            ];
            setOrdersData(mockData);
            setLoading(false);
        };

        fetchOrdersData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        // Logic to delete order (for frontend, just remove from state)
        setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
        // Display success toast (implement with toast library if desired)
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    setOrdersData((prev) => [...prev, order]);
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>Aed {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/

/*not delete import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm'; // Make sure to create this modal form component
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context
    
    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                // Log the storeName from context
                console.log("Store Name from context:", storeName);

                // Format storeName to fit the backend expected format (replace hyphens with spaces)
                const formattedStoreName = storeName.replace(/-/g, ' '); // Adjust formatting as needed
                
                console.log("Formatted Store Name for API:", formattedStoreName);
                
                // API call to fetch orders based on store name
                const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
                console.log("API Response:", response.data);
                
                setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [storeName]); // Fetch orders when storeName changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        // Logic to delete order (for frontend, just remove from state)
        setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
        // Display success toast (implement with toast library if desired)
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    setOrdersData((prev) => [...prev, order]);
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>AED {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;not delte*/

/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm'; // Make sure to create this modal form component
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify'; // Import toast
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                // Log the storeName from context
                console.log("Store Name from context:", storeName);

                // Format storeName to fit the backend expected format (replace hyphens with spaces)
                const formattedStoreName = storeName.replace(/-/g, ' '); // Adjust formatting as needed

                console.log("Formatted Store Name for API:", formattedStoreName);

                // API call to fetch orders based on store name
                const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
                console.log("API Response:", response.data);

                setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [storeName]); // Fetch orders when storeName changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        try {
            // API call to delete the order
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);

            // Logic to remove the order from local state
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));

            // Show success toast message
            toast.success("Order deleted successfully!");
        } catch (error) {
            console.error('Error deleting order:', error.message);
            toast.error("Failed to delete order."); // Show error toast if delete fails
        }
    };

    return (
        <div className="orders-detail-container">
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm 
                isOpen={showOrderEntry} 
                onRequestClose={toggleOrderEntryForm} 
                orderData={currentOrder} 
                onSave={(order) => {
                    setOrdersData((prev) => [...prev, order]);
                    setShowOrderEntry(false);
                }} 
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>AED {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/



/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                console.log("Store Name from context:", storeName);
                const formattedStoreName = storeName.replace(/-/g, ' '); // Adjust formatting as needed
                console.log("Formatted Store Name for API:", formattedStoreName);

                const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
                console.log("API Response:", response.data);

                setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            console.error('Error deleting order:', error.message);
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        // Ensure storeName is included in the order object
        const orderData = {
            ...order,
            storeName: storeName.replace(/-/g, ' '), // Adjust formatting as needed
        };

        try {
            let response;
            if (currentOrder) {
                // Update existing order
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                // Add new order
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            // Update local orders data
            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            console.error('Error saving order:', error.message);
            toast.error("Failed to save order.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer /> {/* Add ToastContainer here }
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>AED {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/







/*pakka without remaing stock import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                const formattedStoreName = storeName.replace(/-/g, ' '); // Adjust formatting as needed
                const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
                setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            console.error('Error deleting order:', error.message);
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = {
            ...order,
            storeName: storeName.replace(/-/g, ' '), // Adjust formatting as needed
        };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            // Update local orders data
            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            console.error('Error saving order:', error.message);
            toast.error("Failed to save order.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>AED {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>AED {(order.price * order.quantity).toFixed(2)}</td> {/* Total Price Calculation }
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;pakka without remaing stock*/

/*pakkaimport React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState([]);

    // Fetch orders based on storeName
    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                const formattedStoreName = storeName.replace(/-/g, ' '); // Adjust formatting as needed
                const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
                setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            console.error('Error deleting order:', error.message);
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = {
            ...order,
            storeName: storeName.replace(/-/g, ' '), // Adjust formatting as needed
        };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            // Update local orders data
            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            console.error('Error saving order:', error.message);
            toast.error("Failed to save order.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th> {/* New column for Remaining Stock }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>AED {order.price.toFixed(2)}</td>
                                <td>{order.quantity}</td>
                                <td>AED {(order.price * order.quantity).toFixed(2)}</td> {/* Total Price Calculation }
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td> {/* Assuming remaining stock is included in order data }
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/




/*wait import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            console.log("Fetching orders for store:", formattedStoreName); // Log the store name

            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            console.log("Response:", response.data); // Log the response
            setOrdersData(response.data.orders); // Assuming API sends `orders` array in response
        } catch (error) {
            console.error("Error fetching orders:", error.response ? error.response.data : error.message); // Log complete error object
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) {
            console.error('Order ID is undefined.');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            console.error('Error deleting order:', error.response ? error.response.data : error.message);
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = {
            ...order,
            storeName: storeName.replace(/-/g, ' '), // Adjust formatting as needed
        };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            // Update local orders data
            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            console.error('Error saving order:', error.response ? error.response.data : error.message);
            toast.error("Failed to save order.");
        }
    };

    // New function to handle return action
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");
            // Refresh the orders data after returning
            await fetchOrdersData();
        } catch (error) {
            console.error('Error processing return:', error.response ? error.response.data : error.message);
            toast.error("Failed to process return.");
        }
    };

    // New function to handle refund action
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");
            // Refresh the orders data after refunding
            await fetchOrdersData();
        } catch (error) {
            console.error('Error processing refund:', error.response ? error.response.data : error.message);
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th> {/* New column for Remaining Stock }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td> {/* Display remaining stock }
                                <td>
                                    <button onClick={() => handleEdit(order)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(order._id)}><FaTrash /></button>
                                    <button onClick={() => handleReturn(order._id)}>Return</button> {/* Return button }
                                    <button onClick={() => handleRefund(order._id)}>Refund</button> {/* Refund button }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/


/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            setOrdersData(response.data.orders);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");
            await fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");
            await fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button onClick={() => handleEdit(order)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(order._id)}><FaTrash /></button>
                                    <button onClick={() => handleReturn(order._id)} disabled={order.isReturned}>Return</button>
                                    <button onClick={() => handleRefund(order._id)} disabled={order.isRefunded}>Refund</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/



/*pakka local state only return import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            setOrdersData(response.data.orders);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");

            // Update the order status to 'Returned' in the local state
            setOrdersData((prev) => 
                prev.map((order) => 
                    order._id === orderId ? { ...order, orderStatus: 'Returned', isReturned: true } : order
                )
            );
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");

            // Update the order status to 'Refunded' in the local state
            setOrdersData((prev) => 
                prev.map((order) => 
                    order._id === orderId ? { ...order, orderStatus: 'Refunded', isRefunded: true } : order
                )
            );
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>
                                    {/* Show the returned or refunded status }
                                    {order.orderStatus === 'Returned'
                                        ? 'Returned'
                                        : order.orderStatus === 'Refunded'
                                        ? 'Refunded'
                                        : order.orderStatus}
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button onClick={() => handleEdit(order)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(order._id)}><FaTrash /></button>
                                    <button 
                                        onClick={() => handleReturn(order._id)} 
                                        disabled={order.isReturned}
                                    >
                                        Return
                                    </button>
                                    <button 
                                        onClick={() => handleRefund(order._id)} 
                                        disabled={order.isRefunded}
                                    >
                                        Refund
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;pakka but only local state return*/




/*import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            setOrdersData(response.data.orders);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");

            // Update the order status to 'Returned' in the local state
            setOrdersData((prev) => 
                prev.map((order) => 
                    order._id === orderId ? { ...order, orderStatus: 'Returned', isReturned: true } : order
                )
            );
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");

            // Update the order status to 'Refunded' in the local state
            setOrdersData((prev) => 
                prev.map((order) => 
                    order._id === orderId ? { ...order, orderStatus: 'Refunded', isRefunded: true } : order
                )
            );
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>
                                    {/* Show the returned or refunded status }
                                    {order.orderStatus === 'Returned'
                                        ? 'Returned'
                                        : order.orderStatus === 'Refunded'
                                        ? 'Refunded'
                                        : order.orderStatus}
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button onClick={() => handleEdit(order)}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(order._id)}>
                                        <FaTrash />
                                    </button>
                                    <button onClick={() => handleReturn(order._id)}>
                                        Return
                                    </button>
                                    <button onClick={() => handleRefund(order._id)}>
                                        Refund
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/




/*pakkaimport React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            setOrdersData(response.data.orders);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>
                                    {order.orderStatus === 'Returned'
                                        ? 'Returned'
                                        : order.orderStatus === 'Refunded'
                                        ? 'Refunded'
                                        : order.orderStatus}
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button onClick={() => handleEdit(order)}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(order._id)}>
                                        <FaTrash />
                                    </button>
                                    <button onClick={() => handleReturn(order._id)}>Return</button>
                                    <button onClick={() => handleRefund(order._id)}>Refund</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;*/

/*pakkka   import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context

    // Local state
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = storeName.replace(/-/g, ' ').toLowerCase().trim(); 
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            setOrdersData(response.data.orders);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
                <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>
                                    {order.orderStatus === 'Returned'
                                        ? 'Returned'
                                        : order.orderStatus === 'Refunded'
                                        ? 'Refunded'
                                        : order.orderStatus}
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash />
                                    </button>
                                    <button className="return-button" onClick={() => handleReturn(order._id)}>Return</button>
                                    <button className="refund-button" onClick={() => handleRefund(order._id)}>Refund</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;pakka */

import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import OrdersModalForm from '../forms/OrdersModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersDetail.css';

// Function to format store names
const formatStoreName = (name) => {
    const storeMap = {
        'crown excel': 'Crown Excel',
        'al jasara': 'Al-Jasara',
        // Add more stores if needed
    };
    return storeMap[name.toLowerCase()] || name;
};

const OrdersDetail = () => {
    const { storeName } = useOutletContext(); // Access store name from the outlet context
    const [ordersData, setOrdersData] = useState([]);
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        customerName: '',
        productName: '',
        salesperson: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOrderEntry, setShowOrderEntry] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Fetch orders based on storeName
    const fetchOrdersData = async () => {
        try {
            const formattedStoreName = formatStoreName(storeName.replace(/-/g, ' ')); // Format store name
            console.log("Fetching orders for store:", formattedStoreName); // Log the formatted store name
            const response = await axios.get(`http://localhost:5000/api/v1/pos-orders/storeName/${formattedStoreName}`);
            console.log("Fetched Orders Data:", response.data.orders); // Log the fetched orders
            setOrdersData(response.data.orders);
        } catch (error) {
            console.error("Error fetching orders data:", error); // Log any errors
            setError(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersData(); // Call the fetch function when the component mounts
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredOrdersData = ordersData.filter(order => {
        const orderDate = new Date(order.dateTime);
        const dateFromValid = !filter.dateFrom || orderDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || orderDate <= new Date(filter.dateTo);
        const customerNameValid = !filter.customerName || (order.customerName && order.customerName.toLowerCase().includes(filter.customerName.toLowerCase()));
        const productNameValid = !filter.productName || (order.productName && order.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (order.salesperson && order.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && customerNameValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const toggleOrderEntryForm = () => {
        setShowOrderEntry(!showOrderEntry);
        setCurrentOrder(null);
    };

    const handleEdit = (order) => {
        setCurrentOrder(order);
        setShowOrderEntry(true);
    };

    const handleDelete = async (orderId) => {
        if (!orderId) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/pos-orders/${orderId}`);
            setOrdersData((prev) => prev.filter((order) => order._id !== orderId));
            toast.success("Order deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete order.");
        }
    };

    const handleSaveOrder = async (order) => {
        const orderData = { ...order, storeName: storeName.replace(/-/g, ' ') };

        try {
            let response;
            if (currentOrder) {
                response = await axios.put(`http://localhost:5000/api/v1/pos-orders/${currentOrder._id}`, orderData);
                toast.success("Order updated successfully!");
            } else {
                response = await axios.post(`http://localhost:5000/api/v1/pos-orders`, orderData);
                toast.success("Order placed successfully!");
            }

            setOrdersData((prev) => {
                if (currentOrder) {
                    return prev.map((o) => (o._id === currentOrder._id ? response.data : o));
                } else {
                    return [...prev, response.data];
                }
            });

            setShowOrderEntry(false);
        } catch (error) {
            toast.error("Failed to save order.");
        }
    };

    // Handle return
    const handleReturn = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/return/${orderId}`);
            toast.success("Order returned successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process return.");
        }
    };

    // Handle refund
    const handleRefund = async (orderId) => {
        try {
            await axios.post(`http://localhost:5000/api/v1/pos-orders/refund/${orderId}`);
            toast.success("Order refunded successfully!");

            // Refetch orders to reflect changes
            fetchOrdersData();
        } catch (error) {
            toast.error("Failed to process refund.");
        }
    };

    return (
        <div className="orders-detail-container">
            <ToastContainer />
            <div className="orders-header">
               {/* <h2>Orders Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>*/}
                <div className="orders-controls">
                    <button onClick={toggleOrderEntryForm}>
                        {showOrderEntry ? 'Close Order Form' : 'Add Order'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <OrdersModalForm
                isOpen={showOrderEntry}
                onRequestClose={toggleOrderEntryForm}
                orderData={currentOrder}
                onSave={handleSaveOrder}
            />

            <div className="orders-filters">
                <div className="filter-row">
                    <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                    <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                    <input type="text" name="customerName" value={filter.customerName} onChange={handleFilterChange} placeholder="Customer Name" />
                    <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
                    <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                </div>
            </div>

            {filteredOrdersData.length === 0 ? (
                <p>No orders data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrdersData.map((order) => (
                            <tr key={order._id}>
                                <td>{order.sku}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td>{order.salesperson}</td>
                                <td>{order.customerName}</td>
                                <td>{order.companyName}</td>
                                <td>{order.mobileNumber}</td>
                                <td>{order.address}</td>
                                <td>
                                    {order.orderStatus === 'Returned'
                                        ? 'Returned'
                                        : order.orderStatus === 'Refunded'
                                        ? 'Refunded'
                                        : order.orderStatus}
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.dateTime).toLocaleString()}</td>
                                <td>{order.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(order)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(order._id)}>
                                        <FaTrash color="red" />
                                    </button>
                                    {order.orderStatus === 'Returned' ? null : (
                                        <button className="return-button" onClick={() => handleReturn(order._id)}>
                                            Return
                                        </button>
                                    )}
                                    {order.orderStatus === 'Refunded' ? null : (
                                        <button className="refund-button" onClick={() => handleRefund(order._id)}>
                                            Refund
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersDetail;
     