/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root'); 

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [productInput, setProductInput] = useState(''); // State for product input

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                setProducts(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    // Check if the entered product name matches any product in the database
    const handleProductInputChange = (e) => {
        const input = e.target.value;
        setProductInput(input);

        const matchingProduct = products.find(product => 
            product.name.toLowerCase() === input.toLowerCase()
        );
        
        if (matchingProduct) {
            setSelectedProduct(matchingProduct);
        } else {
            setSelectedProduct(null); // Clear selected product if no match
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedProduct) {
            alert('Please select a valid product or enter a valid product name.');
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct._id,
            productName: selectedProduct.name,
            price: selectedProduct.price, // Use selected product price
            originalPrice: selectedProduct.originalPrice, // Use selected product original price
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            onRequestClose(); // Close the modal after submission
            resetForm(); // Reset form fields after submission
        } catch (error) {
            console.error('Error recording sale:', error);
        }
    };

    // Reset form fields after submission
    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setProductInput(''); // Reset product input
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Sales Entry Modal"
            className="salesEntryModal"
        >
            <h1>Sales Entry</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Store:</label>
                    <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)} required>
                        <option value="">Select a store</option>
                        {stores.map((store) => (
                            <option key={store._id} value={store.name}>{store.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Product Name:</label>
                    <input 
                        type="text"
                        value={productInput}
                        onChange={handleProductInputChange} // Update input change handler
                        required
                    />
                </div>

                <div>
                    <label>Price:</label>
                    <input 
                        type="text" 
                        value={selectedProduct ? selectedProduct.price : ''} 
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })} // Allow manual price input
                        required 
                    />
                </div>

                <div>
                    <label>Original Price:</label>
                    <input 
                        type="text" 
                        value={selectedProduct ? selectedProduct.originalPrice : ''} 
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, originalPrice: e.target.value })} // Allow manual original price input
                        required 
                    />
                </div>

                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        max={selectedProduct ? selectedProduct.countInStock : 1}
                        required
                    />
                </div>

                <div>
                    <label>Salesperson:</label>
                    <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                </div>

                <div>
                    <label>Customer:</label>
                    <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                </div>

                <div>
                    <label>Payment Status:</label>
                    <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Credit">Credit</option>
                    </select>
                </div>

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
        </Modal>
    );
};

export default SalesModalForm;*/


/*q1import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root'); 

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [productInput, setProductInput] = useState(''); // State for product input

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                setProducts(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    // Check if the entered product name matches any product in the database
    const handleProductInputChange = (e) => {
        const input = e.target.value;
        setProductInput(input);

        const matchingProduct = products.find(product => 
            product.name.toLowerCase() === input.toLowerCase()
        );
        
        if (matchingProduct) {
            setSelectedProduct(matchingProduct);
        } else {
            setSelectedProduct(null); // Clear selected product if no match
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedProduct) {
            toast.error('Please select a valid product or enter a valid product name.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct._id,
            productName: selectedProduct.name,
            price: selectedProduct.price, // Use selected product price
            originalPrice: selectedProduct.originalPrice, // Use selected product original price
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!'); // Toast for success
            onRequestClose(); // Close the modal after submission
            resetForm(); // Reset form fields after submission
        } catch (error) {
            console.error('Error recording sale:', error);
            // Check if error response exists
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`); // Show error from backend
            } else {
                toast.error('Error: Unable to submit sale. Please try again.'); // Generic error message
            }
        }
    };

    // Reset form fields after submission
    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setProductInput(''); // Reset product input
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)} required>
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product Name:</label>
                        <input 
                            type="text"
                            value={productInput}
                            onChange={handleProductInputChange} // Update input change handler
                            required
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })} // Allow manual price input
                            required 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            onChange={(e) => setSelectedProduct({ ...selectedProduct, originalPrice: e.target.value })} // Allow manual original price input
                            required 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;q1*/




/*00import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root'); 

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data); // Debugging
                if (response.data && Array.isArray(response.data.products)) {
                    setProducts(response.data.products); // Adjust based on your API response structure
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log('Current products state:', products); // Debugging
    }, [products]);

    const handleProductChange = (e) => {
        const productId = e.target.value;
        const product = products.find(p => p._id === productId);
        setSelectedProduct(product);
        console.log('Selected product:', product); // Debugging
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct._id,
            productName: selectedProduct.name,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <select
                            value={selectedProduct ? selectedProduct._id : ''}
                            onChange={handleProductChange}
                            required
                            className="scrollable-dropdown"
                            style={{ maxHeight: '200px', overflowY: 'scroll' }} // Ensure scrollability
                        >
                            <option value="">Select a product</option>
                            {products.map((product) => (
                                <option key={product._id} value={product._id}>{product.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;00*/


 /*product dropdown pakka import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-windowed-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data); // Debugging
                if (response.data && Array.isArray(response.data.products)) {
                    // Prepare products for React-Select format
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        console.log('Selected product:', selectedOption); // Debugging
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,  // Use `value` for product ID
            productName: selectedProduct.label, // Use `label` for product name
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;dropdown pakka*/

/*pakka total import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [total, setTotal] = useState(0); // State for total

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data);
                if (response.data && Array.isArray(response.data.products)) {
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    // Effect to calculate total whenever selected product or quantity changes
    useEffect(() => {
        if (selectedProduct) {
            setTotal(selectedProduct.price * quantity);
        } else {
            setTotal(0);
        }
    }, [selectedProduct, quantity]);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        console.log('Selected product:', selectedOption);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.');
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,
            productName: selectedProduct.label,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            total, // Include total in the sale data
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
        setTotal(0); // Reset total
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="scrollable-dropdown"
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Total:</label>
                        <input
                            type="text"
                            value={total}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;pakka total */





/*remaing stock import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [total, setTotal] = useState(0); // State for total
    const [remainingStock, setRemainingStock] = useState(0); // State for remaining stock

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data);
                if (response.data && Array.isArray(response.data.products)) {
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    // Effect to calculate total whenever selected product or quantity changes
    useEffect(() => {
        if (selectedProduct) {
            setTotal(selectedProduct.price * quantity);
            setRemainingStock(selectedProduct.countInStock); // Set remaining stock on product selection
        } else {
            setTotal(0);
            setRemainingStock(0);
        }
    }, [selectedProduct, quantity]);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setQuantity(1); // Reset quantity when product is changed
    };

    const handleQuantityChange = (e) => {
        const enteredQuantity = Number(e.target.value);
        setQuantity(enteredQuantity);

        // Calculate remaining stock based on quantity
        if (selectedProduct) {
            const newRemainingStock = selectedProduct.countInStock - enteredQuantity;
            setRemainingStock(newRemainingStock >= 0 ? newRemainingStock : 0); // Ensure stock doesn't go negative
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.');
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,
            productName: selectedProduct.label,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            total, // Include total in the sale data
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
        setTotal(0); // Reset total
        setRemainingStock(0); // Reset remaining stock
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="scrollable-dropdown"
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Remaining Stock:</label>
                        <input
                            type="text"
                            value={remainingStock}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Total:</label>
                        <input
                            type="text"
                            value={total}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;remaing stock*/



/*r stock import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'; // Ensure you're using the correct Select component
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [total, setTotal] = useState(0);
    const [remainingStock, setRemainingStock] = useState(0);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                if (response.data && Array.isArray(response.data.products)) {
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    useEffect(() => {
        if (selectedProduct) {
            setTotal(selectedProduct.price * quantity);
            setRemainingStock(selectedProduct.countInStock); // Set remaining stock on product selection
        } else {
            setTotal(0);
            setRemainingStock(0);
        }
    }, [selectedProduct, quantity]);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setQuantity(1);
        setRemainingStock(selectedOption ? selectedOption.countInStock : 0); // Reset remaining stock when product is changed
    };

    const handleQuantityChange = (e) => {
        const enteredQuantity = Number(e.target.value);
        setQuantity(enteredQuantity);

        if (selectedProduct) {
            const newRemainingStock = selectedProduct.countInStock - enteredQuantity;
            setRemainingStock(newRemainingStock >= 0 ? newRemainingStock : 0); // Ensure stock doesn't go negative
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct || selectedStore === '') {
            toast.error('Please select a valid product and store.');
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,
            productName: selectedProduct.label,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            total,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
        setTotal(0);
        setRemainingStock(0);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="scrollable-dropdown"
                            styles={{
                                menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                }),
                                control: (provided) => ({
                                    ...provided,
                                    marginTop: '8px', // Adding space above the dropdown
                                }),
                            }}
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Remaining Stock:</label>
                        <input
                            type="text"
                            value={remainingStock}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Total:</label>
                        <input
                            type="text"
                            value={total}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;r stocj showing but drop */

/*pakka final search isssue  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-windowed-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data); // Debugging
                if (response.data && Array.isArray(response.data.products)) {
                    // Prepare products for React-Select format
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setQuantity(1); // Reset quantity when a new product is selected
        console.log('Selected product:', selectedOption); // Debugging
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,  // Use `value` for product ID
            productName: selectedProduct.label, // Use `label` for product name
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    const total = selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : 0;
    const remainingStock = selectedProduct ? (selectedProduct.countInStock - quantity).toFixed(0) : 0;

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="salesEntryModal"
            >
                <h1>Sales Entry</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="scrollable-dropdown"
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                        />
                    </div>

                    <div>
                        <label>Remaining Stock:</label>
                        <input 
                            type="text" 
                            value={remainingStock} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Total:</label>
                        <input 
                            type="text" 
                            value={total} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>Salesperson:</label>
                        <input type="text" value={salesperson} onChange={(e) => setSalesperson(e.target.value)} />
                    </div>

                    <div>
                        <label>Customer:</label>
                        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </div>

                    <div>
                        <label>Payment Status:</label>
                        <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

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
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;pakka final search icon */




/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-windowed-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data); // Debugging
                if (response.data && Array.isArray(response.data.products)) {
                    // Prepare products for React-Select format
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setQuantity(1); // Reset quantity when a new product is selected
        console.log('Selected product:', selectedOption); // Debugging
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,  // Use `value` for product ID
            productName: selectedProduct.label, // Use `label` for product name
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    const total = selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : 0;
    const remainingStock = selectedProduct ? (selectedProduct.countInStock - quantity).toFixed(0) : 0;

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="sales-modal__entryModal" // Updated class name
            >
                <h1 className="sales-modal__title">Sales Entry</h1> {/* Updated class name }
                <form onSubmit={handleSubmit} className="sales-modal__form"> {/* Updated class name }
                    <div>
                        <label className="sales-modal__label">Store:</label> {/* Updated class name }
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="sales-modal__scrollable-dropdown" 
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="sales-modal__label">Product:</label> {/* Updated class name }
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="sales-modal__scrollable-dropdown" // Updated class name
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Price:</label> {/* Updated class name }
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Original Price:</label> {/* Updated class name 
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Quantity:</label> {/* Updated class name }
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                            className="sales-modal__input-number" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Remaining Stock:</label> {/* Updated class name }
                        <input 
                            type="text" 
                            value={remainingStock} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Total:</label> {/* Updated class name }
                        <input 
                            type="text" 
                            value={total} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Salesperson:</label> {/* Updated class name }
                        <input 
                            type="text" 
                            value={salesperson} 
                            onChange={(e) => setSalesperson(e.target.value)}
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Customer:</label> {/* Updated class name /}
                        <input 
                            type="text" 
                            value={customer} 
                            onChange={(e) => setCustomer(e.target.value)}
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Payment Status:</label> {/* Updated class name }
                        <select 
                            value={paymentStatus} 
                            onChange={(e) => setPaymentStatus(e.target.value)}
                            className="sales-modal__select" 
                        >
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

                    <div>
                        <label className="sales-modal__label">Date/Time:</label> {/* Updated class name }
                        <input
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            className="sales-modal__input-datetime" 
                        />
                    </div>

                    <button type="submit" className="sales-modal__submit-btn">Submit Sale</button> {/* Updated class name }
                </form>
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;PAKKA REMAING STOCK CALCULATION AND WITHOUT ORDER CONNECTION*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-windowed-select';
import 'react-toastify/dist/ReactToastify.css';
import './SalesModalForm.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const SalesModalForm = ({ isOpen, onRequestClose }) => {
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Cash');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                console.log('Fetched products:', response.data); // Debugging
                if (response.data && Array.isArray(response.data.products)) {
                    const formattedProducts = response.data.products.map(product => ({
                        value: product._id,
                        label: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        countInStock: product.countInStock
                    }));
                    setProducts(formattedProducts);
                } else {
                    console.error('Unexpected product structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchStores();
        fetchProducts();
    }, []);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setQuantity(1); // Reset quantity when a new product is selected
        console.log('Selected product:', selectedOption); // Debugging
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            toast.error('Please select a valid product.'); // Toast for error
            return;
        }

        const saleData = {
            storeName: selectedStore,
            productId: selectedProduct.value,
            productName: selectedProduct.label,
            price: selectedProduct.price,
            originalPrice: selectedProduct.originalPrice,
            quantity,
            salesperson,
            customer,
            paymentStatus,
            dateTime,
            // Add a field to track if the order is completed, if needed
            // orderStatus: 'Pending' or similar
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/stores/${selectedStore}/sales`, saleData);
            console.log('Sale recorded:', response.data);
            toast.success('Sale submitted successfully!');
            onRequestClose();
            resetForm();
        } catch (error) {
            console.error('Error recording sale:', error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                toast.error('Error: Unable to submit sale. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setSelectedStore('');
        setSelectedProduct(null);
        setQuantity(1);
        setSalesperson('');
        setCustomer('');
        setPaymentStatus('Cash');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    const total = selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : 0;

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Sales Entry Modal"
                className="sales-modal__entryModal"
            >
                <h1 className="sales-modal__title">Sales Entry</h1>
                <form onSubmit={handleSubmit} className="sales-modal__form">
                    <div>
                        <label className="sales-modal__label">Store:</label>
                        <select
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            required
                            className="sales-modal__scrollable-dropdown" 
                        >
                            <option value="">Select a store</option>
                            {stores.map((store) => (
                                <option key={store._id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="sales-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="sales-modal__scrollable-dropdown"
                            menuPortalTarget={document.body}
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                            }}
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.price : ''} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Original Price:</label>
                        <input 
                            type="text" 
                            value={selectedProduct ? selectedProduct.originalPrice : ''} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={selectedProduct ? selectedProduct.countInStock : 1}
                            required
                            className="sales-modal__input-number" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Total:</label>
                        <input 
                            type="text" 
                            value={total} 
                            readOnly 
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Salesperson:</label>
                        <input 
                            type="text" 
                            value={salesperson} 
                            onChange={(e) => setSalesperson(e.target.value)}
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Customer:</label>
                        <input 
                            type="text" 
                            value={customer} 
                            onChange={(e) => setCustomer(e.target.value)}
                            className="sales-modal__input-text" 
                        />
                    </div>

                    <div>
                        <label className="sales-modal__label">Payment Status:</label>
                        <select 
                            value={paymentStatus} 
                            onChange={(e) => setPaymentStatus(e.target.value)}
                            className="sales-modal__select" 
                        >
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit">Credit</option>
                        </select>
                    </div>

                    <div>
                        <label className="sales-modal__label">Date/Time:</label>
                        <input
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            className="sales-modal__input-datetime" 
                        />
                    </div>

                    <button type="submit" className="sales-modal__submit-btn">Submit Sale</button>
                </form>
            </Modal>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default SalesModalForm;


