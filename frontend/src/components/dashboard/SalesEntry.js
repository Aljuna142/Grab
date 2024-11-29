// SalesEntry.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesEntry = () => {
    const [stores, setStores] = useState([]); // State for stores
    const [products, setProducts] = useState([]); // State for products
    const [selectedStore, setSelectedStore] = useState(''); // Selected store
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product
    const [quantity, setQuantity] = useState(1); // Quantity
    const [salesperson, setSalesperson] = useState(''); // Salesperson
    const [customer, setCustomer] = useState(''); // Customer details
    const [paymentStatus, setPaymentStatus] = useState('Cash'); // Payment status
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16)); // Date/Time

    useEffect(() => {
        // Fetch stores
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        // Fetch products
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products'); // Adjust your API endpoint
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    const handleProductChange = (e) => {
        const productId = e.target.value;
        const product = products.find(prod => prod._id === productId);
        setSelectedProduct(product);
        setQuantity(1); // Reset quantity
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (send data to backend)
        const saleData = {
            store: selectedStore,
            product: selectedProduct._id,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/v1/sales', saleData); // Adjust your API endpoint
            console.log('Sale recorded:', response.data);
            // Reset form or provide feedback to user
        } catch (error) {
            console.error('Error recording sale:', error);
        }
    };

    return (
        <div>
            <h1>Sales Entry</h1>
            <form onSubmit={handleSubmit}>
                {/* Store Dropdown }
                <div>
                    <label>Store:</label>
                    <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
                        <option value="">Select a store</option>
                        {stores.map((store) => (
                            <option key={store._id} value={store.name}>{store.name}</option>
                        ))}
                    </select>
                </div>

                {/* Product Dropdown }
                <div>
                    <label>Product Name:</label>
                    <select onChange={handleProductChange}>
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price }
                <div>
                    <label>Price:</label>
                    <input type="text" value={selectedProduct ? selectedProduct.price : ''} readOnly />
                </div>

                {/* Original Price }
                <div>
                    <label>Original Price:</label>
                    <input type="text" value={selectedProduct ? selectedProduct.originalPrice : ''} readOnly />
                </div>

                {/* Quantity }
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                        max={selectedProduct ? selectedProduct.quantity : 1}
                    />
                </div>

                {/* Salesperson Input }
                <div>
                    <label>Salesperson:</label>
                    <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                </div>

                {/* Customer Input }
                <div>
                    <label>Customer:</label>
                    <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                </div>

                {/* Payment Status Dropdown }
                <div>
                    <label>Payment Status:</label>
                    <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Credit">Credit</option>
                    </select>
                </div>

                {/* Date/Time }
                <div>
                    <label>Date/Time:</label>
                    <input
                        type="datetime-local"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                </div>

                <button type="submit">Submit Sale</button>
            </form>
        </div>
    );
};

export default SalesEntry;*/

/*workingimport React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SalesDetail from './pos/SalesDetail'; // Adjust the import path as necessary
import { setSalesData, setStoreName } from '../../store/slices/salesSlice';
import axios from 'axios';
import './SalesEntry.css'; // Make sure this file exists and is styled as needed

const SalesEntry = () => {
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const storeName = useSelector((state) => state.sales.storeName);
    const [stores, setStores] = useState([]);
    const [loadingStores, setLoadingStores] = useState(true);
    const [errorStores, setErrorStores] = useState(null);

    // Fetch stores from the backend
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
                setErrorStores(error.response?.data?.message || 'Error loading stores.');
            } finally {
                setLoadingStores(false);
            }
        };

        fetchStores();
    }, []);

    // Fetch sales data when a store is selected
    useEffect(() => {
        const fetchSalesData = async () => {
            if (!storeName) return;

            try {
                console.log(`Fetching sales data for store: ${storeName}`);
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/sales`);
                dispatch(setSalesData(response.data));
                console.log('Sales data fetched:', response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, [dispatch, storeName]);

    const handleStoreChange = (e) => {
        const selectedStoreName = e.target.value;
        dispatch(setStoreName(selectedStoreName));
        dispatch(setSalesData([])); // Clear previous sales data
    };

    if (loadingStores) return <div>Loading stores...</div>;
    if (errorStores) return <div>{errorStores}</div>;

    return (
        <div className="sales-entry-container">
            <h1>Sales Entry</h1>
            <div className="store-selection">
                <label htmlFor="store-select">Select Store:</label>
                <select id="store-select" value={storeName} onChange={handleStoreChange}>
                    <option value="">Select a store</option>
                    {stores.map(store => (
                        <option key={store._id} value={store.name}>{store.name}</option>
                    ))}
                </select>
            </div>
            {storeName && <SalesDetail storeName={storeName} />}
        </div>
    );
};

export default SalesEntry;working*/
/*working1import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SalesDetail from './pos/SalesDetail'; // Adjust the import path as necessary
import { setSalesData, setStoreName } from '../../store/slices/salesSlice';
import axios from 'axios';
import './SalesEntry.css'; // Ensure this file exists and is styled as needed

const SalesEntry = () => {
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const storeName = useSelector((state) => state.sales.storeName);
    const [stores, setStores] = useState([]);
    const [loadingStores, setLoadingStores] = useState(true);
    const [errorStores, setErrorStores] = useState(null);

    // Fetch stores from the backend
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
                console.log('Fetched stores:', response.data); // Log fetched stores
            } catch (error) {
                console.error('Error fetching stores:', error);
                setErrorStores(error.response?.data?.message || 'Error loading stores.');
            } finally {
                setLoadingStores(false);
                console.log('Loading stores state set to false'); // Log loading completion
            }
        };

        fetchStores();
    }, []);

    // Fetch sales data when a store is selected
    useEffect(() => {
        const fetchSalesData = async () => {
            if (!storeName) return;

            try {
                console.log(`Fetching sales data for store: ${storeName}`); // Fixed string interpolation
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/sales`); // Fixed URL
                dispatch(setSalesData(response.data));
                console.log('Sales data fetched:', response.data); // Log fetched sales data
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, [dispatch, storeName]);

    const handleStoreChange = (e) => {
        const selectedStoreName = e.target.value;
        console.log(`Selected store: ${selectedStoreName}`); // Log the selected store
        dispatch(setStoreName(selectedStoreName));
        dispatch(setSalesData([])); // Clear previous sales data
    };

    if (loadingStores) {
        console.log('Loading stores...'); // Log loading state
        return <div>Loading stores...</div>;
    }
    
    if (errorStores) {
        console.error('Error loading stores:', errorStores); // Log error state
        return <div>{errorStores}</div>;
    }

    return (
        <div className="sales-entry-container">
            <h1>Sales Entry</h1>
            <div className="store-selection">
                <label htmlFor="store-select">Select Store:</label>
                <select id="store-select" value={storeName} onChange={handleStoreChange}>
                    <option value="">Select a store</option>
                    {stores.map(store => (
                        <option key={store._id} value={store.name}>{store.name}</option>
                    ))}
                </select>
            </div>
            {storeName && salesData.length > 0 && <SalesDetail storeName={storeName} />} {/* Ensure sales data is available }
            {storeName && salesData.length === 0 && <div>No sales data available for this store.</div>} {/* No data case }
        </div>
    );
};

export default SalesEntry;*/



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SalesDetail from './pos/SalesDetail'; // Adjust the import path as necessary
import { setSalesData, setStoreName } from '../../store/slices/salesSlice';
import axios from 'axios';
import './SalesEntry.css'; // Ensure this file exists and is styled as needed

const SalesEntry = () => {
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);
    const storeName = useSelector((state) => state.sales.storeName);
    const [stores, setStores] = useState([]);
    const [loadingStores, setLoadingStores] = useState(true);
    const [errorStores, setErrorStores] = useState(null);

    // Fetch stores from the backend
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
                console.log('Fetched stores:', response.data); // Log fetched stores
            } catch (error) {
                console.error('Error fetching stores:', error);
                setErrorStores(error.response?.data?.message || 'Error loading stores.');
            } finally {
                setLoadingStores(false);
                console.log('Loading stores state set to false'); // Log loading completion
            }
        };

        fetchStores();
    }, []);

    // Fetch sales data when a store is selected
    useEffect(() => {
        const fetchSalesData = async () => {
            if (!storeName) return;

            try {
                console.log(`Fetching sales data for store: ${storeName}`); // Fixed string interpolation
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/sales`); // Fixed URL
                dispatch(setSalesData(response.data));
                console.log('Sales data fetched:', response.data); // Log fetched sales data
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, [dispatch, storeName]);

    const handleStoreChange = (e) => {
        const selectedStoreName = e.target.value;
        console.log(`Selected store: ${selectedStoreName}`); // Log the selected store
        dispatch(setStoreName(selectedStoreName));
        dispatch(setSalesData([])); // Clear previous sales data when store changes
    };

    if (loadingStores) {
        console.log('Loading stores...'); // Log loading state
        return <div>Loading stores...</div>;
    }
    
    if (errorStores) {
        console.error('Error loading stores:', errorStores); // Log error state
        return <div>{errorStores}</div>;
    }

    return (
        <div className="sales-entry-container">
            <h1>Sales Entry</h1>
            <div className="store-selection">
                <label htmlFor="store-select">Select Store:</label>
                <select id="store-select" value={storeName} onChange={handleStoreChange}>
                    <option value="">Select a store</option>
                    {stores.map(store => (
                        <option key={store._id} value={store.name}>{store.name}</option>
                    ))}
                </select>
            </div>
            {/* Show SalesDetail component only if storeName is selected */}
            {storeName && (
                <>
                    {salesData.length > 0 ? (
                        <SalesDetail storeName={storeName} />
                    ) : (
                        <div>No sales data available for this store.</div>
                    )}
                </>
            )}
        </div>
    );
};

export default SalesEntry;



