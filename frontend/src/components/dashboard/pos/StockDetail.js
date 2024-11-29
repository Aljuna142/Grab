/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockDetail = ({ storeName }) => {
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                setError('Failed to fetch stock data.'); // Set error state
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>; // Loading state

    if (error) return <div>{error}</div>; // Show error if exists

    // Check if stockData is available and has products
    if (!stockData || !stockData.products || stockData.products.length === 0) {
        return <div>No stock data available for {storeName}.</div>; // No data message
    }

    return (
        <div>
            <h2>Stock Levels for {storeName}</h2>
            <ul>
                {stockData.products.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.stock} units
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockDetail;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './StockDetail.css'; // Assuming you have a CSS file for styles
import StoreSidebar from './StoreSidebar'; // Import the StoreSidebar

const StockDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error); // Log the full error object
                if (error.response) {
                    if (error.response.status === 404) {
                        setError(`No stock data available for ${storeName}.`);
                    } else {
                        setError('Failed to fetch stock data.');
                    }
                    console.error('Response data:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    setError('Failed to fetch stock data. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    setError('Failed to fetch stock data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    // Show loading state
    if (loading) return <div>Loading...</div>;

    // Show error if exists
    if (error) return <div className="error-message">{error}</div>;

    // Check if stockData is available and has products
    if (!stockData || !stockData.products || stockData.products.length === 0) {
        return <div>No stock data available for {storeName}.</div>;
    }

    return (
        <div className="stock-detail"> {/* Add a CSS class for styling }
            <StoreSidebar /> {/* Include the StoreSidebar }
            <h2>Stock Levels for {storeName}</h2>
            <ul>
                {stockData.products.map((product) => (
                    <li key={product.id || product.name}> {/* Use a unique identifier for keys }
                        {product.name}: {product.stock} units
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockDetail;*/



/*oldimport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockDetail.css'; // Assuming you have a CSS file for styles
import StoreSidebar from './StoreSidebar'; // Import the StoreSidebar

const StockDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                if (error.response) {
                    if (error.response.status === 404) {
                        setError(`No stock data available for ${storeName}.`);
                    } else {
                        setError('Failed to fetch stock data.');
                    }
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    setError('Failed to fetch stock data. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    setError('Failed to fetch stock data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    // Show loading state
    if (loading) return <div>Loading...</div>;

    // Show error if exists
    if (error) return <div className="error-message">{error}</div>;

    // Check if stockData is available and has products
    if (!stockData || !stockData.products || stockData.products.length === 0) {
        return <div>No stock data available for {storeName}.</div>;
    }

    return (
        <div className="stock-detail-container"> {/* Add a container for layout }
            <StoreSidebar /> {/* Include the StoreSidebar }
            <div className="stock-detail"> {/* Main content area }
                <h2>Stock Levels for {storeName}</h2>
                <ul>
                    {stockData.products.map((product) => (
                        <li key={product.id || product.name}>
                            {product.name}: {product.stock} units
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StockDetail;*/





/*19 tdy import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockDetail.css'; // Assuming you have a CSS file for styles
import StoreSidebar from './StoreSidebar'; // Import the StoreSidebar

const StockDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchStockData = async () => {
            // Format storeName to match backend
            const formattedStoreName = storeName.replace(/-/g, ' '); // Replace hyphens with spaces
            console.log('Fetching stock data for storeName:', formattedStoreName); // Log the formatted storeName
            
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                if (error.response) {
                    if (error.response.status === 404) {
                        setError(`No stock data available for ${formattedStoreName}.`);
                    } else {
                        setError('Failed to fetch stock data.');
                    }
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    setError('Failed to fetch stock data. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    setError('Failed to fetch stock data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    // Show loading state
    if (loading) return <div>Loading...</div>;

    // Show error if exists
    if (error) return <div className="error-message">{error}</div>;

    // Check if stockData is available and has products
    if (!stockData || !stockData.products || stockData.products.length === 0) {
        return <div>No stock data available for {storeName.replace(/-/g, ' ').toUpperCase()}.</div>;
    }

    return (
        <div className="stock-detail-container"> {/* Add a container for layout }
            <StoreSidebar /> {/* Include the StoreSidebar }
            <div className="stock-detail"> {/* Main content area }
                <h2>Stock Levels for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <ul>
                    {stockData.products.map((product) => (
                        <li key={product.id || product.name}>
                            {product.name}: {product.stock} units
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StockDetail;*/




/*good response came by good name import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockDetail.css'; // Assuming you have a CSS file for styles
import StoreSidebar from './StoreSidebar'; // Import the StoreSidebar

const StockDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchStockData = async () => {
            // Format storeName to match backend (case insensitive)
            const formattedStoreName = storeName.replace(/-/g, ' '); // Replace hyphens with spaces
            console.log('Fetching stock data for storeName:', formattedStoreName); // Log the formatted storeName
            
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                if (error.response) {
                    if (error.response.status === 404) {
                        setError(`No stock data available for ${formattedStoreName}.`);
                    } else {
                        setError('Failed to fetch stock data.');
                    }
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    setError('Failed to fetch stock data. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    setError('Failed to fetch stock data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    // Show loading state
    if (loading) return <div>Loading...</div>;

    // Show error if exists
    if (error) return <div className="error-message">{error}</div>;

    // Check if stockData is available and has products
    if (!stockData || !stockData.products || stockData.products.length === 0) {
        return <div>No stock data available for {storeName.replace(/-/g, ' ').toUpperCase()}.</div>;
    }

    return (
        <div className="stock-detail-container"> {/* Add a container for layout}
            <StoreSidebar /> {/* Include the StoreSidebar }
            <div className="stock-detail"> {/* Main content area}
                <h2>Stock Levels for {storeName.replace(/-/g, ' ').toUpperCase()}</h2>
                <ul>
                    {stockData.products.map((product) => (
                        <li key={product.id || product.name}>
                            {product.name}: {product.stock} units
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StockDetail;good response came by storename */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockDetail.css'; // Assuming you have a CSS file for styles

const StockDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    useEffect(() => {
        const fetchStockData = async () => {
            // Format storeName to match backend (case insensitive)
            const formattedStoreName = storeName.replace(/-/g, ' '); // Replace hyphens with spaces
            console.log('Fetching stock data for storeName:', formattedStoreName); // Log the formatted storeName
            
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${formattedStoreName}/stock`);
                setStockData(response.data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                if (error.response) {
                    if (error.response.status === 404) {
                        setError(`No stock data available for ${formattedStoreName}.`);
                    } else {
                        setError('Failed to fetch stock data.');
                    }
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    setError('Failed to fetch stock data. Please try again later.');
                } else {
                    console.error('Error message:', error.message);
                    setError('Failed to fetch stock data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [storeName]);

    // Handle search filter
    const filteredProducts = stockData?.products?.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    // Show loading state
    if (loading) return <div>Loading...</div>;

    // Show error if exists
    if (error) return <div className="error-message">{error}</div>;

    // Check if stockData is available and has products
    if (!filteredProducts.length) {
        return <div>No stock data available for {storeName.replace(/-/g, ' ').toUpperCase()}.</div>;
    }

    return (
        <div className="stock-detail-container">
            <div className="stock-detail">
                {/* Search Input for filtering product names */}
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search by product name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Stock Table */}
                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Stock</th>
                            <th>Store Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id || product.name}>
                                <td>{product.name}</td>
                                <td>{product.stock}</td>
                                <td>{product.storeName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockDetail;
