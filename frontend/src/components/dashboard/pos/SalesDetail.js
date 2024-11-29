/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext

const SalesDetail = () => {
    const { store } = useOutletContext(); // Get store from the Outlet context
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalesData = async () => {
            console.log('Fetching sales data for store:', store); // Log the store name
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${store}/sales`);
                console.log('Fetched Sales Data:', response.data);
                setSalesData(response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.'); // Display specific error message if available
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [store]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (salesData.length === 0) {
        return <p>No sales data available for {store}.</p>;
    }

    return (
        <div>
            <h2>Sales Data for {store}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((sale) => (
                        <tr key={sale._id}>
                            <td>{sale.productName}</td>
                            <td>${sale.price.toFixed(2)}</td> {/* Format price to 2 decimal places }
                            <td>{sale.quantity}</td>
                            <td>{sale.salesperson}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.paymentStatus}</td>
                            <td>{new Date(sale.dateTime).toLocaleString()}</td> {/* Include date and time }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesDetail;*/





/*goood store op came import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext

const SalesDetail = () => {
    const { storeName } = useOutletContext(); // Get storeName from the Outlet context
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalesData = async () => {
            console.log('Fetching sales data for storeName:', storeName); // Log the storeName
            try {
                const formattedStoreName = storeName.replace(/ /g, '-').toLowerCase(); // Format storeName for URL
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                console.log('Fetched Sales Data:', response.data);
                setSalesData(response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
                // Handle error more gracefully
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (salesData.length === 0) {
        return <p>No sales data available for {storeName}.</p>;
    }

    return (
        <div>
            <h2>Sales Data for {storeName}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((sale) => (
                        <tr key={sale._id}>
                            <td>{sale.productName}</td>
                            <td>${sale.price.toFixed(2)}</td> {/* Format price to 2 decimal places }
                            <td>{sale.quantity}</td>
                            <td>{sale.salesperson}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.paymentStatus}</td>
                            <td>{new Date(sale.dateTime).toLocaleString()}</td> {/* Include date and time }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesDetail;op came*/




/*op 1import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const SalesDetail = () => {
    const { storeName } = useOutletContext(); // Get storeName from the Outlet context
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalesData = async () => {
            // Format storeName to match backend
            const formattedStoreName = storeName.replace(/-/g, ' '); // Replace hyphens with spaces
            console.log('Fetching sales data for storeName:', formattedStoreName); // Log the formatted storeName
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                console.log('Fetched Sales Data:', response.data);
                setSalesData(response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
                // Handle error more gracefully
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (salesData.length === 0) {
        return <p>No sales data available for {storeName.replace(/-/g, ' ').toUpperCase()}.</p>;
    }

    return (
        <div>
            <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((sale) => (
                        <tr key={sale._id}>
                            <td>{sale.productName}</td>
                            <td>${sale.price.toFixed(2)}</td> {/* Format price to 2 decimal places }
                            <td>{sale.quantity}</td>
                            <td>{sale.salesperson}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.paymentStatus}</td>
                            <td>{new Date(sale.dateTime).toLocaleString()}</td> {/* Include date and time }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesDetail;*/




/*d1import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import './SalesDetail.css'; // Assuming you have styles for the component

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' '); // Replace hyphens with spaces
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                setSalesData(response.data);
                setFilteredData(response.data); // Initialize filteredData with salesData
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName]);

    const handleSort = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            const dateA = new Date(a.dateTime);
            const dateB = new Date(b.dateTime);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setFilteredData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    };

    const handleFilter = (criteria) => {
        const filtered = salesData.filter(sale => sale.paymentStatus === criteria);
        setFilteredData(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (filteredData.length === 0) {
        return <p>No sales data available for {storeName.replace(/-/g, ' ').toUpperCase()}.</p>;
    }

    return (
        <div className="sales-detail-container">
            <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
            <button onClick={handleSort}>Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})</button>
            <button onClick={() => handleFilter('completed')}>Show Completed Sales</button>
            <button onClick={() => handleFilter('pending')}>Show Pending Sales</button>

            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((sale) => (
                        <tr key={sale._id}>
                            <td>{sale.productName}</td>
                            <td>${sale.price.toFixed(2)}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.salesperson}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.paymentStatus}</td>
                            <td>{new Date(sale.dateTime).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesDetail;d1*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import './SalesDetail.css'; // Import CSS for styling

const SalesDetail = () => {
    const { storeName } = useOutletContext(); // Get storeName from the Outlet context
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Filter states
    const [filter, setFilter] = useState({
        dateFrom: '',
        dateTo: '',
        brand: '',
        category: '',
        minPrice: '',
        maxPrice: ''
    });

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' '); // Format storeName
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                setSalesData(response.data);
            } catch (error) {
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        // Implement filtering logic here
        // For example:
        const withinDateRange = (!filter.dateFrom || new Date(sale.date) >= new Date(filter.dateFrom)) &&
                                 (!filter.dateTo || new Date(sale.date) <= new Date(filter.dateTo));
        
        const withinPriceRange = (!filter.minPrice || sale.price >= filter.minPrice) &&
                                 (!filter.maxPrice || sale.price <= filter.maxPrice);
        
        const matchesBrand = !filter.brand || sale.brand === filter.brand;
        const matchesCategory = !filter.category || sale.category === filter.category;

        return withinDateRange && withinPriceRange && matchesBrand && matchesCategory;
    });

    return (
        <div>
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button>Add Sale</button> {/* Implement add sale functionality }
                    <button>Export</button> {/* Implement export functionality }
                </div>
            </div>
            
            <div className="sales-filters">
                <input
                    type="date"
                    value={filter.dateFrom}
                    onChange={(e) => setFilter({ ...filter, dateFrom: e.target.value })}
                    placeholder="From Date"
                />
                <input
                    type="date"
                    value={filter.dateTo}
                    onChange={(e) => setFilter({ ...filter, dateTo: e.target.value })}
                    placeholder="To Date"
                />
                <input
                    type="text"
                    value={filter.brand}
                    onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
                    placeholder="Brand"
                />
                <input
                    type="text"
                    value={filter.category}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                    placeholder="Category"
                />
                <input
                    type="number"
                    value={filter.minPrice}
                    onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    value={filter.maxPrice}
                    onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
                    placeholder="Max Price"
                />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>${sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesDetail;good*/


/*without total import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice'; // Adjusted import path
import SalesModalForm from '../forms/SalesModalForm'; // Import the SalesModalForm component
import './SalesDetail.css'; // Import CSS for styling

const SalesDetail = () => {
    const { storeName } = useOutletContext(); // Get storeName from the Outlet context
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false); // State to toggle SalesEntry form visibility

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' '); // Format storeName
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                dispatch(setSalesData(response.data)); // Dispatch action to set sales data
            } catch (error) {
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    // Toggle SalesEntry form visibility
    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    return (
        <div>
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button> {/* Implement export functionality }
                </div>
            </div>

            {/* Conditionally render the SalesModalForm }
            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>${sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesDetail;*/

/*with total pakka but icons missing import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice'; // Adjusted import path
import SalesModalForm from '../forms/SalesModalForm'; // Import the SalesModalForm component
import './SalesDetail.css'; // Import CSS for styling

const SalesDetail = () => {
    const { storeName } = useOutletContext(); // Get storeName from the Outlet context
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false); // State to toggle SalesEntry form visibility

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' '); // Format storeName
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                dispatch(setSalesData(response.data)); // Dispatch action to set sales data
            } catch (error) {
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    // Toggle SalesEntry form visibility
    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        // Implement edit functionality here
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        // Implement save functionality here
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        // Implement delete functionality here
        console.log('Delete Sale:', saleId);
    };

    return (
        <div>
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button> {/* Implement export functionality }
                </div>
            </div>

            {/* Conditionally render the SalesModalForm }
            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th> {/* New Total Column }
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th> {/* New Actions Column }
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>${sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>${(sale.price * sale.quantity).toFixed(2)}</td> {/* Total Calculation }
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => handleEdit(sale)}>Edit</button>
                                    <button onClick={() => handleSave(sale)}>Save</button>
                                    <button onClick={() => handleDelete(sale._id)}>Delete</button>
                                </td> {/* Actions Column }
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesDetail;*/


/*without stock import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa'; // Importing icons from react-icons
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' ');
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                dispatch(setSalesData(response.data));
            } catch (error) {
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        // Implement edit functionality here
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        // Implement save functionality here
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        // Implement delete functionality here
        console.log('Delete Sale:', saleId);
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>${sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>${(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>
                                    <button 
                                        className="edit-button" 
                                        onClick={() => handleEdit(sale)}
                                    >
                                        <FaEdit color="gray" />
                                    </button>
                                    <button 
                                        className="save-button" 
                                        onClick={() => handleSave(sale)}
                                    >
                                        <FaSave color="green" />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDelete(sale._id)}
                                    >
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

export default SalesDetail;*/



/*crown excel pakka import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa'; // Importing icons from react-icons
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);

    useEffect(() => {
        const fetchSalesData = async () => {
            const formattedStoreName = storeName.replace(/-/g, ' ');
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`);
                dispatch(setSalesData(response.data));
            } catch (error) {
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        // Implement edit functionality here
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        // Implement save functionality here
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        // Implement delete functionality here
        console.log('Delete Sale:', saleId);
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th> {/* New column for remaining stock }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed{sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed{(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock} {/* Displaying remaining stock here }</td>
                                <td>
                                    <button 
                                        className="edit-button" 
                                        onClick={() => handleEdit(sale)}
                                    >
                                        <FaEdit color="gray" />
                                    </button>
                                    <button 
                                        className="save-button" 
                                        onClick={() => handleSave(sale)}
                                    >
                                        <FaSave color="green" />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDelete(sale._id)}
                                    >
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

export default SalesDetail;crown excel pakka */

/*pakka code dynamicimport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa'; // Importing icons from react-icons
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);

    // Function to format store name for API call
    const formatStoreName = (name) => {
        // Map to normalize store names based on backend
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara', // Updated to ensure correct formatting
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name; // Default to original if not found
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase(); // Log original store name
            console.log('Original Store Name:', originalStoreName); // Log the original store name
            
            const formattedStoreName = formatStoreName(originalStoreName);
            console.log('Formatted Store Name:', formattedStoreName); // Log the formatted store name
            
            const apiUrl = `http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`;
            console.log('API URL:', apiUrl); // Log the API URL being called
            
            try {
                const response = await axios.get(apiUrl);
                dispatch(setSalesData(response.data));
            } catch (error) {
                console.error('Error fetching sales data:', error); // Log the error
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        // Implement edit functionality here
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        // Implement save functionality here
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        // Implement delete functionality here
        console.log('Delete Sale:', saleId);
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th> {/* New column for remaining stock }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td> {/* Displaying remaining stock here }
                                <td>
                                    <button 
                                        className="edit-button" 
                                        onClick={() => handleEdit(sale)}
                                    >
                                        <FaEdit color="gray" />
                                    </button>
                                    <button 
                                        className="save-button" 
                                        onClick={() => handleSave(sale)}
                                    >
                                        <FaSave color="green" />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDelete(sale._id)}
                                    >
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

export default SalesDetail;*/


//api congig .js wise attaching storeName 
/*pakka working import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl } from '../../../api/apiConfig'; // Import the API function
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);

    // Function to format store name for API call
    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            console.log('Original Store Name:', originalStoreName);
            
            const formattedStoreName = formatStoreName(originalStoreName);
            console.log('Formatted Store Name:', formattedStoreName);
            
            const apiUrl = getStoreSalesUrl(formattedStoreName); // Use the API function
            console.log('API URL:', apiUrl);
            
            try {
                const response = await axios.get(apiUrl);
                dispatch(setSalesData(response.data));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        // Implement edit functionality here
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        // Implement save functionality here
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        // Implement delete functionality here
        console.log('Delete Sale:', saleId);
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button 
                                        className="edit-button" 
                                        onClick={() => handleEdit(sale)}
                                    >
                                        <FaEdit color="gray" />
                                    </button>
                                    <button 
                                        className="save-button" 
                                        onClick={() => handleSave(sale)}
                                    >
                                        <FaSave color="green" />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDelete(sale._id)}
                                    >
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

export default SalesDetail;*/






/*pakka everything without acrtionsimport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl } from '../../../api/apiConfig'; // Import the API function
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);

    // Function to format store name for API call
    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = getStoreSalesUrl(formattedStoreName); // Use the API function
            
            try {
                const response = await axios.get(apiUrl);
                dispatch(setSalesData(response.data));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
    };

    const handleEdit = (sale) => {
        console.log('Edit Sale:', sale);
    };

    const handleSave = (sale) => {
        console.log('Save Sale:', sale);
    };

    const handleDelete = (saleId) => {
        console.log('Delete Sale:', saleId);
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th> {/* Added column header for remaining stock }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td> {/* Display remaining stock }
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="save-button" onClick={() => handleSave(sale)}>
                                        <FaSave color="green" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;pakka everything but without actions */





 /*delete problem import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl, deleteSaleUrl, updateSaleUrl } from '../../../api/apiConfig';
import { toast } from 'react-toastify'; 
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = getStoreSalesUrl(formattedStoreName);
            
            try {
                const response = await axios.get(apiUrl);
                dispatch(setSalesData(response.data));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = updateSaleUrl(sale._id);
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        console.log('Deleting sale with ID:', saleId); // Debugging line
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return; // Exit if saleId is not provided
        }

        try {
            const apiUrl = deleteSaleUrl(storeName, saleId);
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;del prblm */



/*Url wise fetching import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl, deleteSaleUrl, updateSaleUrl } from '../../../api/apiConfig';
import { toast } from 'react-toastify'; 
import './SalesDetail.css';

const SalesDetail = () => {
    const { storeName } = useOutletContext();
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = getStoreSalesUrl(formattedStoreName);
            
            try {
                const response = await axios.get(apiUrl);
                // Ensure the data is an array, fallback to empty array if not
                const sales = Array.isArray(response.data) ? response.data : [];
                dispatch(setSalesData(sales));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = Array.isArray(salesData) ? salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const brandValid = !filter.brand || (sale.brand && sale.brand.toLowerCase().includes(filter.brand.toLowerCase()));
        const categoryValid = !filter.category || (sale.category && sale.category.toLowerCase().includes(filter.category.toLowerCase()));
        const productNameValid = !filter.productName || (sale.productName && sale.productName.toLowerCase().includes(filter.productName.toLowerCase()));
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && brandValid && categoryValid && productNameValid && salespersonValid;
    }) : [];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = updateSaleUrl(sale._id);
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        console.log('Deleting sale with ID:', saleId); // Debugging line
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return; // Exit if saleId is not provided
        }

        try {
            const apiUrl = deleteSaleUrl(storeName, saleId);
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="brand" value={filter.brand} onChange={handleFilterChange} placeholder="Brand" />
                <input type="text" name="category" value={filter.category} onChange={handleFilterChange} placeholder="Category" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="productName" value={filter.productName} onChange={handleFilterChange} placeholder="Product Name" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;url wise fetching*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl, deleteSaleUrl, updateSaleUrl } from '../../../api/apiConfig';
import { toast } from 'react-toastify'; 
import './SalesDetail.css';

const SalesDetail = () => {
    const outletContext = useOutletContext();
    const storeName = outletContext?.storeName || ''; // Fallback to an empty string if context is null
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        if (!storeName) return; // Exit if storeName is not available

        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = getStoreSalesUrl(formattedStoreName);
            
            try {
                const response = await axios.get(apiUrl);
                const sales = Array.isArray(response.data) ? response.data : [];
                dispatch(setSalesData(sales));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = Array.isArray(salesData) ? salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerValid = !filter.customer || (sale.customer && sale.customer.toLowerCase().includes(filter.customer.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && salespersonValid && customerValid;
    }) : [];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = updateSaleUrl(sale._id);
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
            toast.success('Sale updated successfully.');
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return;
        }

        try {
            const apiUrl = deleteSaleUrl(storeName, saleId);
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase() || 'Unknown Store'}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="customer" value={filter.customer} onChange={handleFilterChange} placeholder="Customer" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;redux wise*/



/*showing like 9import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { getStoreSalesUrl, deleteSaleUrl, updateSaleUrl } from '../../../api/apiConfig';
import { toast } from 'react-toastify'; 
import './SalesDetail.css';

const SalesDetail = () => {
    const outletContext = useOutletContext();
    const storeName = outletContext?.storeName || ''; // Fallback to an empty string if context is null
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        if (!storeName) return; // Exit if storeName is not available

        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = getStoreSalesUrl(formattedStoreName);
            
            console.log(`Fetching sales data for store: ${formattedStoreName}`);
            try {
                const response = await axios.get(apiUrl);
                const sales = Array.isArray(response.data) ? response.data : [];
                console.log('Sales data fetched:', sales);
                dispatch(setSalesData(sales));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    useEffect(() => {
        console.log('Sales Data from Redux:', salesData);
    }, [salesData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filteredSalesData = Array.isArray(salesData) ? salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerValid = !filter.customer || (sale.customer && sale.customer.toLowerCase().includes(filter.customer.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && salespersonValid && customerValid;
    }) : [];

    console.log('Filtered Sales Data:', filteredSalesData);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = updateSaleUrl(sale._id);
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
            toast.success('Sale updated successfully.');
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return;
        }

        try {
            const apiUrl = deleteSaleUrl(storeName, saleId);
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase() || 'Unknown Store'}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                    <button>
                        <FaSave color="green" /> Save
                    </button>
                    <button>Export</button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="customer" value={filter.customer} onChange={handleFilterChange} placeholder="Customer" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail; showing nine like */





/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify'; 
import './SalesDetail.css';

const SalesDetail = ({ storeName }) => { // Get storeName from props
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        if (!storeName) return; // Exit if storeName is not available

        const fetchSalesData = async () => {
            const originalStoreName = storeName.replace(/-/g, ' ').toLowerCase();
            const formattedStoreName = formatStoreName(originalStoreName);
            const apiUrl = `http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`;
            
            console.log(`Fetching sales data for store: ${formattedStoreName}`);
            try {
                const response = await axios.get(apiUrl);
                const sales = Array.isArray(response.data) ? response.data : [];
                console.log('Sales data fetched:', sales);
                dispatch(setSalesData(sales));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    const filteredSalesData = Array.isArray(salesData) ? salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        const dateFromValid = !filter.dateFrom || saleDate >= new Date(filter.dateFrom);
        const dateToValid = !filter.dateTo || saleDate <= new Date(filter.dateTo);
        const salePrice = Number(sale.price);
        const priceFromValid = !filter.minPrice || salePrice >= filter.minPrice;
        const priceToValid = !filter.maxPrice || salePrice <= filter.maxPrice;
        const salespersonValid = !filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()));
        const customerValid = !filter.customer || (sale.customer && sale.customer.toLowerCase().includes(filter.customer.toLowerCase()));

        return dateFromValid && dateToValid && priceFromValid && priceToValid && salespersonValid && customerValid;
    }) : [];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = `http://localhost:5000/api/v1/sales/${sale._id}`; // Adjust the endpoint as needed
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
            toast.success('Sale updated successfully.');
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return;
        }

        try {
            const apiUrl = `http://localhost:5000/api/v1/sales/${saleId}`; // Adjust the endpoint as needed
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase() || 'Unknown Store'}</h2>
                <div className="sales-controls">
                    <button onClick={toggleSalesEntryForm}>
                        {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                    </button>
                </div>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} placeholder="From Date" />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} placeholder="To Date" />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} placeholder="Salesperson" />
                <input type="text" name="customer" value={filter.customer} onChange={handleFilterChange} placeholder="Customer" />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;reuse*/







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSalesData, setFilterOptions } from '../../../store/slices/salesSlice';
import SalesModalForm from '../forms/SalesModalForm';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify'; 
import { useOutletContext } from 'react-router-dom';
import './SalesDetail.css';

const SalesDetail = ({ storeName: propStoreName }) => {
    const outletContext = useOutletContext();
    const storeName = propStoreName || (outletContext ? outletContext.storeName : '');
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const filter = useSelector((state) => state.sales.filterOptions);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSalesEntry, setShowSalesEntry] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);

    const formatStoreName = (name) => {
        const storeMap = {
            'crown excel': 'Crown Excel',
            'al jasara': 'Al-Jasara',
            'wh1': 'WH1',
            'tripio': 'Tripio',
            'ggg': 'ggg'
        };
        return storeMap[name.toLowerCase()] || name;
    };

    useEffect(() => {
        if (!storeName) return;

        const fetchSalesData = async () => {
            const formattedStoreName = formatStoreName(storeName.replace(/-/g, ' ').toLowerCase());
            const apiUrl = `http://localhost:5000/api/v1/stores/${formattedStoreName}/sales`;
            
            try {
                const response = await axios.get(apiUrl);
                dispatch(setSalesData(Array.isArray(response.data) ? response.data : []));
            } catch (error) {
                console.error('Error fetching sales data:', error);
                setError(error.response?.data?.message || 'Error loading sales data.');
            } finally {
                setLoading(false);
            }
        };

        fetchSalesData();
    }, [storeName, dispatch]);

    const filteredSalesData = salesData.filter(sale => {
        const saleDate = new Date(sale.dateTime);
        return (
            (!filter.dateFrom || saleDate >= new Date(filter.dateFrom)) &&
            (!filter.dateTo || saleDate <= new Date(filter.dateTo)) &&
            (!filter.minPrice || Number(sale.price) >= filter.minPrice) &&
            (!filter.maxPrice || Number(sale.price) <= filter.maxPrice) &&
            (!filter.salesperson || (sale.salesperson && sale.salesperson.toLowerCase().includes(filter.salesperson.toLowerCase()))) &&
            (!filter.customer || (sale.customer && sale.customer.toLowerCase().includes(filter.customer.toLowerCase())))
        );
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = (name === 'minPrice' || name === 'maxPrice') ? Number(value) : value;
        dispatch(setFilterOptions({ [name]: updatedValue }));
    };

    const toggleSalesEntryForm = () => {
        setShowSalesEntry(!showSalesEntry);
        setCurrentSale(null);
    };

    const handleEdit = (sale) => {
        setCurrentSale(sale);
        setShowSalesEntry(true);
    };

    const handleSave = async (sale) => {
        try {
            const apiUrl = `http://localhost:5000/api/v1/sales/${sale._id}`;
            await axios.put(apiUrl, sale);
            dispatch(setSalesData((prev) => prev.map((s) => (s._id === sale._id ? sale : s))));
            setShowSalesEntry(false);
            toast.success('Sale updated successfully.');
        } catch (error) {
            console.error('Error saving sale:', error);
            setError(error.response?.data?.message || 'Error saving sale.');
        }
    };

    const handleDelete = async (saleId) => {
        if (!saleId) {
            toast.error('Sale ID is undefined.');
            return;
        }

        try {
            const apiUrl = `http://localhost:5000/api/v1/sales/${saleId}`;
            await axios.delete(apiUrl);
            dispatch(setSalesData((prev) => prev.filter((sale) => sale._id !== saleId)));
            toast.success('Sale deleted successfully.');
        } catch (error) {
            console.error('Error deleting sale:', error);
            setError(error.response?.data?.message || 'Error deleting sale.');
        }
    };

    return (
        <div className="sales-detail-container">
            <div className="sales-header">
                <h2>Sales Data for {storeName.replace(/-/g, ' ').toUpperCase() || 'Unknown Store'}</h2>
                <button onClick={toggleSalesEntryForm}>
                    {showSalesEntry ? 'Close Sale Form' : 'Add Sale'}
                </button>
            </div>

            <SalesModalForm 
                isOpen={showSalesEntry} 
                onRequestClose={toggleSalesEntryForm} 
                saleData={currentSale} 
                onSave={handleSave} 
            />

            <div className="sales-filters">
                <input type="date" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} />
                <input type="date" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} />
                <input type="text" name="salesperson" value={filter.salesperson} onChange={handleFilterChange} />
                <input type="text" name="customer" value={filter.customer} onChange={handleFilterChange} />
                <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} />
                <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} />
            </div>

            {filteredSalesData.length === 0 ? (
                <p>No sales data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Payment Status</th>
                            <th>Date</th>
                            <th>Remaining Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalesData.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.productName}</td>
                                <td>Aed {sale.price.toFixed(2)}</td>
                                <td>{sale.quantity}</td>
                                <td>Aed {(sale.price * sale.quantity).toFixed(2)}</td>
                                <td>{sale.salesperson}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.paymentStatus}</td>
                                <td>{new Date(sale.dateTime).toLocaleString()}</td>
                                <td>{sale.remainingStock}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(sale)}>
                                        <FaEdit color="gray" />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(sale._id)}>
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

export default SalesDetail;
