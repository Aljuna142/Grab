/*import React from 'react';
import { useParams } from 'react-router-dom';

const StoreDetails = () => {
    const { storeName } = useParams(); // Get store name from URL

    // For now, use mock data
    const mockData = {
        stock: [
            { product: 'Product 1', quantity: 50 },
            { product: 'Product 2', quantity: 30 },
        ],
        sales: 1200,
        orders: {
            pending: 5,
            completed: 20,
        },
        products: [
            { name: 'Product 1', stock: 50 },
            { name: 'Product 2', stock: 30 },
        ],
    };

    console.log(`Store Details for: ${storeName}`); // Log the store name for debugging

    return (
        <div>
            <h1>{storeName} - Store Details</h1>

            <h2>Stock Levels</h2>
            <ul>
                {mockData.stock.map((item, index) => (
                    <li key={index}>{item.product}: {item.quantity}</li>
                ))}
            </ul>

            <h2>Sales Data</h2>
            <p>Total Sales: ${mockData.sales}</p>

            <h2>Orders</h2>
            <p>Pending Orders: {mockData.orders.pending}</p>
            <p>Completed Orders: {mockData.orders.completed}</p>

            <h2>Product Details</h2>
            <ul>
                {mockData.products.map((product, index) => (
                    <li key={index}>{product.name}: {product.stock} units</li>
                ))}
            </ul>
        </div>
    );
};

export default StoreDetails;*/




/*boximport React from 'react';
import { Link } from 'react-router-dom'; // Assuming you will use this for future linking
import { FaBox, FaChartLine, FaClipboardList, FaProductHunt } from 'react-icons/fa'; // Import icons
import './StoreDetails.css'; // Custom CSS for styling

const StoreDetails = () => {
    return (
        <div className="store-details">
            <h1>Store Name - Store Details</h1>
            
            <div className="store-features-grid">
                {/* Stock Levels }
                <Link to="#" className="feature-box" onClick={() => alert('Redirecting to Stock Levels')}>
                    <FaBox className="feature-icon" />
                    <h3>Stock Levels</h3>
                </Link>
                
                {/* Sales Data }
                <Link to="#" className="feature-box" onClick={() => alert('Redirecting to Sales Data')}>
                    <FaChartLine className="feature-icon" />
                    <h3>Sales Data</h3>
                </Link>

                {/* Orders }
                <Link to="#" className="feature-box" onClick={() => alert('Redirecting to Orders')}>
                    <FaClipboardList className="feature-icon" />
                    <h3>Orders</h3>
                </Link>

                {/* Product Details }
                <Link to="#" className="feature-box" onClick={() => alert('Redirecting to Product Details')}>
                    <FaProductHunt className="feature-icon" />
                    <h3>Product Details</h3>
                </Link>
            </div>
        </div>
    );
};

export default StoreDetails;*/



/*redirecting working import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBox, FaChartLine, FaClipboardList, FaProductHunt } from 'react-icons/fa';
import './StoreDetails.css'; // Custom CSS for styling

const StoreDetail = ({ storeName }) => {
    const [storeData, setStoreData] = useState(null);
    const [filter, setFilter] = useState('all'); // Filter state
    const [sortOrder, setSortOrder] = useState('asc'); // Sorting state

    useEffect(() => {
        const fetchStoreData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}`);
                setStoreData(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
        };
        fetchStoreData();
    }, [storeName]);

    useEffect(() => {
        if (storeData) {
            storeData.products.forEach((product) => {
                if (product.stock < 10) {
                    alert(`Low stock alert for ${product.name}`);
                }
            });
        }
    }, [storeData]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const filteredProducts = storeData?.products.filter((product) => {
        if (filter === 'low-stock') {
            return product.stock < 10;
        }
        return true;
    });

    const sortedProducts = filteredProducts?.sort((a, b) => {
        return sortOrder === 'asc' ? a.stock - b.stock : b.stock - a.stock;
    });

    if (!storeData) return <div>Loading...</div>;

    return (
        <div className="store-detail">
            <h1>{storeName} - Store Overview</h1>

            <div className="store-overview">
                <div className="overview-item">
                    <FaBox className="icon" />
                    <p>Total Stock Available: {storeData.totalStock}</p>
                </div>
                <div className="overview-item">
                    <FaChartLine className="icon" />
                    <p>Total Sales: ${storeData.totalSales}</p>
                </div>
                <div className="overview-item">
                    <FaClipboardList className="icon" />
                    <p>Pending Orders: {storeData.pendingOrders}</p>
                    <p>Completed Orders: {storeData.completedOrders}</p>
                </div>
            </div>

            <h2>Product List</h2>
            <div className="product-controls">
                <select onChange={handleFilterChange}>
                    <option value="all">All Products</option>
                    <option value="low-stock">Low Stock</option>
                </select>

                <select onChange={handleSortChange}>
                    <option value="asc">Sort by Stock (Ascending)</option>
                    <option value="desc">Sort by Stock (Descending)</option>
                </select>
            </div>

            <ul className="product-list">
                {sortedProducts.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.stock} units
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoreDetail;redirected */




/*good showing icons import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBox, FaChartLine, FaClipboardList, FaProductHunt } from 'react-icons/fa';
import './StoreDetails.css'; // Custom CSS for styling

const StoreDetail = ({ storeName }) => {
    const [storeData, setStoreData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchStoreData = async () => {
            setIsLoading(true); // Set loading true while fetching data
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}`);
                setStoreData(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            } finally {
                setIsLoading(false); // Turn off loading after data fetch
            }
        };
        fetchStoreData();
    }, [storeName]);

    const handleClick = (type) => {
        if (!storeData || isLoading) {
            alert(`Loading ${type}...`); // Show loading if data is not available yet
        } else {
            alert(`Displaying ${type}: ${JSON.stringify(storeData[type])}`);
        }
    };

    return (
        <div className="store-detail">
            <h1>{storeName} - Store Overview</h1>

            <div className="store-boxes">
                <div className="store-box" onClick={() => handleClick('totalStock')}>
                    <FaBox className="icon" />
                    <p>Stock Levels</p>
                </div>
                <div className="store-box" onClick={() => handleClick('totalSales')}>
                    <FaChartLine className="icon" />
                    <p>Sales Data</p>
                </div>
                <div className="store-box" onClick={() => handleClick('pendingOrders')}>
                    <FaClipboardList className="icon" />
                    <p>Orders</p>
                </div>
                <div className="store-box" onClick={() => handleClick('products')}>
                    <FaProductHunt className="icon" />
                    <p>Product Details</p>
                </div>
            </div>
            
            {/* Display loading state if fetching data }
            {isLoading && <p>Loading store data...</p>}
        </div>
    );
};

export default StoreDetail;*/



/*good basic// StoreDetail.js
import React from 'react';
import StoreSidebar from './StoreSidebar';

const StoreDetail = ({ storeName }) => {
    return (
        <div className="store-detail">
            <StoreSidebar storeName={storeName} />
            {/* This area will render the selected store data }
            <div className="store-data">
                {/* You can load the corresponding data here based on the current route }
                {/* Example: <StockData />, <SalesData />, etc. }
            </div>
        </div>
    );
};

export default StoreDetail;*/


/*// StoreDetail.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import StoreSidebar from './StoreSidebar';

const StoreDetail = () => {
    return (
        <div className="store-detail">
            <StoreSidebar /> {/* This is always visible}
            {/* This area will render the selected store data *}
            <div className="store-data">
                <Outlet /> {/* This will render the nested routes like StockDetail, SalesDetail, etc.}
            </div>
        </div>
    );
};

export default StoreDetail;*/





/*import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import StoreSidebar from './StoreSidebar';

const StoreDetail = () => {
    const { storeName } = useParams(); // Extract storeName from the URL

    return (
        <div className="store-detail">
            <StoreSidebar />
            <div className="store-data">
                <h1>Details for {storeName}</h1>
                <Outlet context={{ storeName }} /> {/* Pass storeName to nested routes }
            </div>
        </div>
    );
};

export default StoreDetail;*/



import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import StoreSidebar from './StoreSidebar';

const StoreDetail = () => {
    const { storeName } = useParams(); // Extract store from the URL

    return (
        <div className="store-detail">
            <StoreSidebar />
            <div className="store-data">
                {/*<h1>Details for {storeName}</h1>*/}
                <Outlet context={{ storeName }} /> {/* Pass store to nested routes */}
            </div>
        </div>
    );
};

export default StoreDetail;


















