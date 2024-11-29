/*pakka without toast msg import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import './OrdersModalForm.css'; // Ensure this file has your styles

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '',
        companyName: '',
        mobileNumber: '',
        address: '',
        orderStatus: 'Pending', // Default value
        paymentStatus: 'Cash', // Default value
        dateTime: new Date().toISOString().slice(0, 16),
        discount: '', // Changed targetPrice to discount
        totalPrice: '', // Added totalPrice field
        storeName: '', // Added store name field
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.sku, // Include SKU in the product object
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                ...orderData,
                dateTime: new Date(orderData.dateTime).toISOString().slice(0, 16), // Ensure correct date format
            });
            setSelectedProduct({ 
                value: orderData.productId, 
                label: orderData.productName, 
                price: orderData.price,
                sku: orderData.sku // Set the SKU in the selected product
            });
            setSelectedStore({
                value: orderData.storeId,
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    // Reset form function
    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '',
            companyName: '',
            mobileNumber: '',
            address: '',
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16),
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === 'quantity') {
            calculateTotalPrice(value, selectedProduct?.price, formData.discount); // Update total price when quantity changes
        }
    };

    // Handle product selection
    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Set the SKU when product is selected
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount); // Update total price when product changes
    };

    // Handle store selection
    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    // Handle discount selection
    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, selectedProduct?.price, discountValue); // Update total price when discount changes
    };

    // Calculate total price based on quantity and discount
    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0; // Handle optional discount
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2); // Calculate total price
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ 
            ...formData, 
            productId: selectedProduct?.value,
            storeId: selectedStore?.value // Pass store ID back to the parent component
        }); 
        onRequestClose(); // Close the modal
    };

    // Discount options for the dropdown
    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10, // Create values from 0.1% to 30%
        label: `${(i + 1) / 10}%`,
    }));

    if (!isOpen) return null; // Don't render anything if not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        required
                        className="order-modal__input-text"
                        readOnly // Make SKU read-only as it's auto-filled
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                        className="order-modal__input-text"
                        readOnly
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                        className="order-modal__input-number"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="order-modal__input-text"
                    />
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        required
                        className="order-modal__textarea"
                    ></textarea>

                    <div className="order-modal__select-container">
                        <label className="order-modal__label">Store Name:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select Store"
                            isSearchable
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body}
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                            }}
                        />
                    </div>

                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            onChange={handleDiscountChange}
                            options={discountOptions}
                            placeholder="Select Discount"
                            isSearchable
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body}
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                            }}
                        />
                    </div>

                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        onChange={handleChange}
                        placeholder="Total Price"
                        required
                        className="order-modal__input-text"
                        readOnly
                    />

                    <button type="submit" className="order-modal__button">
                        {orderData ? 'Update Order' : 'Add Order'}
                    </button>
                    <button type="button" onClick={onRequestClose} className="order-modal__button">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;*/







/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import './OrdersModalForm.css'; // Ensure this file has your styles

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '',
        companyName: '',
        mobileNumber: '',
        address: '',
        orderStatus: 'Pending', // Default value
        paymentStatus: 'Cash', // Default value
        dateTime: new Date().toISOString().slice(0, 16),
        discount: '', // Changed targetPrice to discount
        totalPrice: '', // Added totalPrice field
        storeName: '', // Added store name field
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.sku, // Include SKU in the product object
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                ...orderData,
                dateTime: new Date(orderData.dateTime).toISOString().slice(0, 16), // Ensure correct date format
            });
            setSelectedProduct({ 
                value: orderData.productId, 
                label: orderData.productName, 
                price: orderData.price,
                sku: orderData.sku // Set the SKU in the selected product
            });
            setSelectedStore({
                value: orderData.storeId,
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    // Reset form function
    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '',
            companyName: '',
            mobileNumber: '',
            address: '',
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16),
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === 'quantity') {
            calculateTotalPrice(value, selectedProduct?.price, formData.discount); // Update total price when quantity changes
        }
    };

    // Handle product selection
    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Set the SKU when product is selected
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount); // Update total price when product changes
    };

    // Handle store selection
    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    // Handle discount selection
    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, selectedProduct?.price, discountValue); // Update total price when discount changes
    };

    // Calculate total price based on quantity and discount
    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0; // Handle optional discount
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2); // Calculate total price
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSave({ 
                ...formData, 
                productId: selectedProduct?.value,
                storeId: selectedStore?.value // Pass store ID back to the parent component
            });

            // Show success message based on whether it's an update or new order
            if (orderData) {
                toast.success('Order updated successfully!'); // Show update success message
            } else {
                toast.success('Order placed successfully!'); // Show order placed message
            }

            onRequestClose(); // Close the modal
        } catch (error) {
            toast.error('Failed to place order. Please try again.'); // Show error message
            console.error(error);
        }
    };

    // Discount options for the dropdown
    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10, // Create values from 0.1% to 30%
        label: `${(i + 1) / 10}%`,
    }));

    if (!isOpen) return null; // Don't render anything if not open

    return (
        <div className="modal-overlay">
            <ToastContainer /> {/* Add the ToastContainer here }
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        required
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                            isSearchable
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                        className="order-modal__input-text"
                        readOnly
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                        className="order-modal__input-number"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        required
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Store:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select a store"
                            isSearchable
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            options={discountOptions}
                            onChange={handleDiscountChange}
                            placeholder="Select discount percentage"
                            className="order-modal__scrollable-dropdown"
                            menuPortalTarget={document.body} // Use this to render the menu in a portal
                            styles={{
                                menuPortal: base => ({ ...base, zIndex: 9999 }), // Adjust zIndex for the dropdown
                            }}
                        />
                    </div>
                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        readOnly
                        placeholder="Total Price"
                        className="order-modal__input-text"
                    />
                    <select
                        name="orderStatus"
                        value={formData.orderStatus}
                        onChange={handleChange}
                        className="order-modal__select"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                    <select
                        name="paymentStatus"
                        value={formData.paymentStatus}
                        onChange={handleChange}
                        className="order-modal__select"
                    >
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        className="order-modal__input-text"
                    />
                    <button type="submit" className="order-modal__button">
                        {orderData ? 'Update Order' : 'Place Order'}
                    </button>
                    <button type="button" onClick={onRequestClose} className="order-modal__button--cancel">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;*/

/*automated askuimport React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersModalForm.css';

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '', // Optional
        companyName: '', // Optional
        mobileNumber: '', // Optional
        address: '', // Optional
        orderStatus: 'Pending',
        paymentStatus: 'Cash',
        dateTime: new Date().toISOString().slice(0, 16),
        discount: '',
        totalPrice: '',
        storeName: '',
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.SKU,
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to fetch stores.');
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                sku: orderData.sku || '',
                productName: orderData.productName || '',
                price: orderData.price || '',
                quantity: orderData.quantity || '',
                salesperson: orderData.salesperson || '',
                customerName: orderData.customerName || '', // Optional
                companyName: orderData.companyName || '', // Optional
                mobileNumber: orderData.mobileNumber || '', // Optional
                address: orderData.address || '', // Optional
                orderStatus: orderData.orderStatus || 'Pending',
                paymentStatus: orderData.paymentStatus || 'Cash',
                dateTime: new Date(orderData.dateTime).toISOString().slice(0, 16),
                discount: orderData.discount || '',
                totalPrice: orderData.totalPrice || '',
                storeName: orderData.storeName || '',
            });
            setSelectedProduct({ 
                value: orderData.productId, 
                label: orderData.productName, 
                price: orderData.price,
                sku: orderData.sku
            });
            setSelectedStore({
                value: orderData.storeId || '', // Ensure you set the correct ID
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '', // Optional
            companyName: '', // Optional
            mobileNumber: '', // Optional
            address: '', // Optional
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16),
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'quantity') {
            calculateTotalPrice(value, selectedProduct?.price, formData.discount);
        }
    };

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Automatically fill SKU
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount);
    };

    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, selectedProduct?.price, discountValue);
    };

    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0;
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the current formData to check for optional fields
        console.log('Form Data Before Submit:', formData); 

        // Check for all required fields
        const requiredFields = ['productName', 'price', 'quantity', 'salesperson', 'storeName'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please enter the ${field}.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/pos-orders', { 
                ...formData, 
                productId: selectedProduct?.value,
                storeName: selectedStore?.label // Use storeName instead of storeId
            });

            console.log('Response from API:', response.data); // Log the response

            if (response.status === 200 || response.status === 201) {
                toast.success(orderData ? 'Order updated successfully!' : 'Order placed successfully!');
            }

            onRequestClose();
        } catch (error) {
            console.error('Error response:', error.response);
            const errorMessage = error.response?.data?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        }
    };

    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10,
        label: `${(i + 1) / 10}%`,
    }));

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <ToastContainer />
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU" 
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                        />
                    </div>
                    <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name" // Optional
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name" // Optional
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number" // Optional
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address" // Optional
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Store:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select Store"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            options={discountOptions}
                            onChange={handleDiscountChange}
                            placeholder="Select Discount"
                        />
                    </div>
                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        readOnly
                        className="order-modal__input-text"
                    />
                    <button type="submit" className="order-modal__button">
                        {orderData ? 'Update Order' : 'Place Order'}
                    </button>
                    <button type="button" onClick={onRequestClose} className="order-modal__button">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;automated sku*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersModalForm.css';

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '', // Optional
        companyName: '', // Optional
        mobileNumber: '', // Optional
        address: '', // Optional
        orderStatus: 'Pending',
        paymentStatus: 'Cash',
        dateTime: new Date().toISOString().slice(0, 16),
        discount: '',
        totalPrice: '',
        storeName: '',
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.SKU,
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to fetch stores.');
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                sku: orderData.sku || '',
                productName: orderData.productName || '',
                price: orderData.price || '',
                quantity: orderData.quantity || '',
                salesperson: orderData.salesperson || '',
                customerName: orderData.customerName || '', // Optional
                companyName: orderData.companyName || '', // Optional
                mobileNumber: orderData.mobileNumber || '', // Optional
                address: orderData.address || '', // Optional
                orderStatus: orderData.orderStatus || 'Pending',
                paymentStatus: orderData.paymentStatus || 'Cash',
                dateTime: new Date(orderData.dateTime).toISOString().slice(0, 16),
                discount: orderData.discount || '',
                totalPrice: orderData.totalPrice || '',
                storeName: orderData.storeName || '',
            });
            setSelectedProduct({ 
                value: orderData.productId, 
                label: orderData.productName, 
                price: orderData.price,
                sku: orderData.sku
            });
            setSelectedStore({
                value: orderData.storeId || '', // Ensure you set the correct ID
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '', // Optional
            companyName: '', // Optional
            mobileNumber: '', // Optional
            address: '', // Optional
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16),
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'quantity' || name === 'price') {
            calculateTotalPrice(formData.quantity, formData.price, formData.discount);
        }
    };

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Automatically fill SKU
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount);
    };

    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, formData.price, discountValue);
    };

    const handleOrderStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            orderStatus: selectedOption.value,
        }));
    };

    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0;
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the current formData to check for optional fields
        console.log('Form Data Before Submit:', formData); 

        // Check for all required fields
        const requiredFields = ['productName', 'price', 'quantity', 'salesperson', 'storeName'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please enter the ${field}.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/pos-orders', { 
                ...formData, 
                productId: selectedProduct?.value,
                storeName: selectedStore?.label // Use storeName instead of storeId
            });

            console.log('Response from API:', response.data); // Log the response

            if (response.status === 200 || response.status === 201) {
                toast.success(orderData ? 'Order updated successfully!' : 'Order placed successfully!');
            }

            onRequestClose();
        } catch (error) {
            console.error('Error response:', error.response);
            const errorMessage = error.response?.data?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        }
    };

    // Discount options from 0.1% to 30%
    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10,
        label: `${(i + 1) / 10}%`,
    }));

    const orderStatusOptions = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Canceled', label: 'Canceled' },
    ];

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <ToastContainer />
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU" 
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Search and select a product"
                        />
                    </div>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson Name"
                        required
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Order Status:</label>
                        <Select
                            value={orderStatusOptions.find(option => option.value === formData.orderStatus)}
                            onChange={handleOrderStatusChange}
                            options={orderStatusOptions}
                            placeholder="Select Order Status"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Store:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select Store"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            value={discountOptions.find(option => option.value === parseFloat(formData.discount))}
                            onChange={handleDiscountChange}
                            options={discountOptions}
                            placeholder="Select Discount"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Total Price:</label>
                        <input
                            type="text"
                            name="totalPrice"
                            value={formData.totalPrice}
                            readOnly
                            className="order-modal__input-text"
                        />
                    </div>
                    <button type="submit" className="order-modal__submit-btn">{orderData ? 'Update Order' : 'Place Order'}</button>
                    <button type="button" onClick={onRequestClose} className="order-modal__cancel-btn">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;order status pending */


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersModalForm.css';

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '', // Optional
        companyName: '', // Optional
        mobileNumber: '', // Optional
        address: '', // Optional
        orderStatus: 'Pending',
        paymentStatus: 'Cash',
        dateTime: new Date().toISOString().slice(0, 16),
        discount: '',
        totalPrice: '',
        storeName: '',
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.SKU,
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to fetch stores.');
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                sku: orderData.sku || '',
                productName: orderData.productName || '',
                price: orderData.price || '',
                quantity: orderData.quantity || '',
                salesperson: orderData.salesperson || '',
                customerName: orderData.customerName || '', // Optional
                companyName: orderData.companyName || '', // Optional
                mobileNumber: orderData.mobileNumber || '', // Optional
                address: orderData.address || '', // Optional
                orderStatus: orderData.orderStatus || 'Pending',
                paymentStatus: orderData.paymentStatus || 'Cash',
                dateTime: new Date(orderData.dateTime).toISOString().slice(0, 16),
                discount: orderData.discount || '',
                totalPrice: orderData.totalPrice || '',
                storeName: orderData.storeName || '',
            });
            setSelectedProduct({ 
                value: orderData.productId, 
                label: orderData.productName, 
                price: orderData.price,
                sku: orderData.sku
            });
            setSelectedStore({
                value: orderData.storeId || '', // Ensure you set the correct ID
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '', // Optional
            companyName: '', // Optional
            mobileNumber: '', // Optional
            address: '', // Optional
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16),
            discount: '',
            totalPrice: '',
            storeName: '',
        });





        setSelectedProduct(null);
        setSelectedStore(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'quantity' || name === 'price') {
            calculateTotalPrice(formData.quantity, formData.price, formData.discount);
        }
    };

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Automatically fill SKU
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount);
    };

    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, formData.price, discountValue);
    };

    const handleOrderStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            orderStatus: selectedOption.value, // Ensure this value is used to update orderStatus
        }));
    };

    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0;
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the current formData to check for optional fields
        console.log('Form Data Before Submit:', formData); 

        // Check for all required fields
        const requiredFields = ['productName', 'price', 'quantity', 'salesperson', 'storeName'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please enter the ${field}.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/pos-orders', { 
                ...formData, 
                productId: selectedProduct?.value,
                storeName: selectedStore?.label // Use storeName instead of storeId
            });

            console.log('Response from API:', response.data); // Log the response

            if (response.status === 200 || response.status === 201) {
                toast.success(orderData ? 'Order updated successfully!' : 'Order placed successfully!');
            }

            onRequestClose();
        } catch (error) {
            console.error('Error response:', error.response);
            const errorMessage = error.response?.data?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        }
    };

    // Discount options from 0.1% to 30%
    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10,
        label: `${(i + 1) / 10}%`,
    }));

    const orderStatusOptions = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Canceled', label: 'Canceled' },
    ];

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <ToastContainer />
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU" 
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Select a product..."
                            className="order-modal__select"
                        />
                    </div>
                    <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address (optional)"
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Order Status:</label>
                        <Select
                            value={orderStatusOptions.find(option => option.value === formData.orderStatus)}
                            onChange={handleOrderStatusChange}
                            options={orderStatusOptions}
                            placeholder="Select order status"
                            className="order-modal__select"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Payment Status:</label>
                        <Select
                            value={formData.paymentStatus}
                            onChange={handleDiscountChange}
                            options={[{ value: 'Cash', label: 'Cash' }, { value: 'Cheque', label: 'Cheque' }]}
                            className="order-modal__select"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Store:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select a store"
                            className="order-modal__select"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            onChange={handleDiscountChange}
                            options={discountOptions}
                            placeholder="Select a discount"
                            className="order-modal__select"
                        />
                    </div>
                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        readOnly
                        className="order-modal__input-text"
                        placeholder="Total Price"
                    />
                    <button type="submit" className="order-modal__button">
                        {orderData ? 'Update Order' : 'Place Order'}
                    </button>
                    <button type="button" onClick={onRequestClose} className="order-modal__button">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;*/

/*perfect import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersModalForm.css';

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '', // Optional
        companyName: '', // Optional
        mobileNumber: '', // Optional
        address: '', // Optional
        orderStatus: 'Pending',
        paymentStatus: 'Cash',
        dateTime: new Date().toISOString().slice(0, 16), // Initialize dateTime
        discount: '',
        totalPrice: '',
        storeName: '',
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.SKU,
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to fetch stores.');
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                sku: orderData.sku || '',
                productName: orderData.productName || '',
                price: orderData.price || '',
                quantity: orderData.quantity || '',
                salesperson: orderData.salesperson || '',
                customerName: orderData.customerName || '', // Optional
                companyName: orderData.companyName || '', // Optional
                mobileNumber: orderData.mobileNumber || '', // Optional
                address: orderData.address || '', // Optional
                orderStatus: orderData.orderStatus || 'Pending',
                paymentStatus: orderData.paymentStatus || 'Cash',
                // Ensure the dateTime is valid before setting
                dateTime: orderData.dateTime ? new Date(orderData.dateTime).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
                discount: orderData.discount || '',
                totalPrice: orderData.totalPrice || '',
                storeName: orderData.storeName || '',
            });
            setSelectedProduct({
                value: orderData.productId,
                label: orderData.productName,
                price: orderData.price,
                sku: orderData.sku,
            });
            setSelectedStore({
                value: orderData.storeId || '', // Ensure you set the correct ID
                label: orderData.storeName,
            });
        } else {
            resetForm();
        }
    }, [orderData]);

    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '', // Optional
            companyName: '', // Optional
            mobileNumber: '', // Optional
            address: '', // Optional
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16), // Initialize dateTime
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'quantity' || name === 'price') {
            calculateTotalPrice(formData.quantity, formData.price, formData.discount);
        }
    };

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Automatically fill SKU
        }));
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount);
    };

    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, formData.price, discountValue);
    };

    const handleOrderStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            orderStatus: selectedOption.value,
        }));
    };

    const handlePaymentStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            paymentStatus: selectedOption.value,
        }));
    };

    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0;
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['productName', 'price', 'quantity', 'salesperson', 'storeName'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please enter the ${field}.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/pos-orders', {
                ...formData,
                productId: selectedProduct?.value,
                storeName: selectedStore?.label // Use storeName instead of storeId
            });

            if (response.status === 200 || response.status === 201) {
                toast.success(orderData ? 'Order updated successfully!' : 'Order placed successfully!');
                onSave(response.data); // Optionally call onSave to pass the newly created order
            }

            onRequestClose();
        } catch (error) {
            console.error('Error response:', error.response);
            const errorMessage = error.response?.data?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        }
    };

    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10,
        label: `${(i + 1) / 10}%`,
    }));

    const orderStatusOptions = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Canceled', label: 'Canceled' },
    ];

    const paymentStatusOptions = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Cheque', label: 'Cheque' },
    ];

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <ToastContainer />
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Product:</label>
                        <Select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            options={products}
                            placeholder="Select a product"
                            className="order-modal__select"
                        />
                    </div>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="order-modal__input-text"
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number (optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address (optional)"
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Order Status:</label>
                        <Select
                            options={orderStatusOptions}
                            onChange={handleOrderStatusChange}
                            placeholder={formData.orderStatus}
                            className="order-modal__select"
                        />
                    </div>
                    <div>
                        <label className="order-modal__label">Payment Status:</label>
                        <Select
                            options={paymentStatusOptions}
                            onChange={handlePaymentStatusChange}
                            placeholder={formData.paymentStatus}
                            className="order-modal__select"
                        />
                    </div>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        className="order-modal__input-text"
                    />
                    <div>
                        <label className="order-modal__label">Discount:</label>
                        <Select
                            options={discountOptions}
                            onChange={handleDiscountChange}
                            placeholder="Select discount percentage"
                            className="order-modal__select"
                        />
                    </div>
                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        readOnly
                        className="order-modal__input-text"
                    />
                    <div className="order-modal__store-select">
                        <label className="order-modal__label">Store:</label>
                        <Select
                            value={selectedStore}
                            onChange={handleStoreChange}
                            options={stores}
                            placeholder="Select a store"
                            className="order-modal__select"
                        />
                    </div>
                    <button type="submit" className="order-modal__submit-button">Submit</button>
                </form>
                <button className="order-modal__close-button" onClick={onRequestClose}>Close</button>
            </div>
        </div>
    );
};

export default OrdersModalForm;perfect */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-windowed-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrdersModalForm.css';

const OrdersModalForm = ({ isOpen, onRequestClose, orderData, onSave }) => {
    const [formData, setFormData] = useState({
        sku: '',
        productName: '',
        price: '',
        quantity: '',
        salesperson: '',
        customerName: '', // Optional
        companyName: '', // Optional
        mobileNumber: '', // Optional
        address: '', // Optional
        orderStatus: 'Pending',
        paymentStatus: 'Cash',
        dateTime: new Date().toISOString().slice(0, 16), // Initialize dateTime
        discount: '',
        totalPrice: '',
        storeName: '',
    });

    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);
    const [remainingStock, setRemainingStock] = useState(0); // State for remaining stock

    // Fetch products for selection
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/products');
                const formattedProducts = response.data.products.map(product => ({
                    value: product._id,
                    label: product.name,
                    price: product.price,
                    sku: product.SKU,
                    countInStock: product.countInStock, // Include countInStock in product data
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    // Fetch stores for selection
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                const formattedStores = response.data.map(store => ({
                    value: store._id,
                    label: store.name,
                }));
                setStores(formattedStores);
            } catch (error) {
                console.error('Error fetching stores:', error);
                toast.error('Failed to fetch stores.');
            }
        };

        fetchStores();
    }, []);

    // Populate the form if orderData is provided
    useEffect(() => {
        if (orderData) {
            setFormData({
                sku: orderData.sku || '',
                productName: orderData.productName || '',
                price: orderData.price || '',
                quantity: orderData.quantity || '',
                salesperson: orderData.salesperson || '',
                customerName: orderData.customerName || '', // Optional
                companyName: orderData.companyName || '', // Optional
                mobileNumber: orderData.mobileNumber || '', // Optional
                address: orderData.address || '', // Optional
                orderStatus: orderData.orderStatus || 'Pending',
                paymentStatus: orderData.paymentStatus || 'Cash',
                // Ensure the dateTime is valid before setting
                dateTime: orderData.dateTime ? new Date(orderData.dateTime).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
                discount: orderData.discount || '',
                totalPrice: orderData.totalPrice || '',
                storeName: orderData.storeName || '',
            });
            setSelectedProduct({
                value: orderData.productId,
                label: orderData.productName,
                price: orderData.price,
                sku: orderData.sku,
                countInStock: orderData.countInStock || 0, // Optional field from orderData
            });
            setSelectedStore({
                value: orderData.storeId || '', // Ensure you set the correct ID
                label: orderData.storeName,
            });
            setRemainingStock(orderData.countInStock || 0); // Set remaining stock if available
        } else {
            resetForm();
        }
    }, [orderData]);

    const resetForm = () => {
        setFormData({
            sku: '',
            productName: '',
            price: '',
            quantity: '',
            salesperson: '',
            customerName: '', // Optional
            companyName: '', // Optional
            mobileNumber: '', // Optional
            address: '', // Optional
            orderStatus: 'Pending',
            paymentStatus: 'Cash',
            dateTime: new Date().toISOString().slice(0, 16), // Initialize dateTime
            discount: '',
            totalPrice: '',
            storeName: '',
        });
        setSelectedProduct(null);
        setSelectedStore(null);
        setRemainingStock(0); // Reset remaining stock
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'quantity' || name === 'price') {
            calculateTotalPrice(formData.quantity, formData.price, formData.discount);
        }
    };

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
        setFormData((prev) => ({
            ...prev,
            productName: selectedOption.label,
            price: selectedOption.price,
            sku: selectedOption.sku, // Automatically fill SKU
        }));
        setRemainingStock(selectedOption.countInStock); // Update remaining stock based on selected product
        calculateTotalPrice(formData.quantity, selectedOption.price, formData.discount);
    };

    const handleStoreChange = (selectedOption) => {
        setSelectedStore(selectedOption);
        setFormData((prev) => ({
            ...prev,
            storeName: selectedOption.label,
        }));
    };

    const handleDiscountChange = (selectedOption) => {
        const discountValue = selectedOption.value;
        setFormData((prev) => ({
            ...prev,
            discount: discountValue,
        }));
        calculateTotalPrice(formData.quantity, formData.price, discountValue);
    };

    const handleOrderStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            orderStatus: selectedOption.value,
        }));
    };

    const handlePaymentStatusChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            paymentStatus: selectedOption.value,
        }));
    };

    const calculateTotalPrice = (quantity, price, discount) => {
        if (quantity && price) {
            const discountAmount = discount ? (price * discount) / 100 : 0;
            const discountedPrice = price - discountAmount;
            const totalPrice = (discountedPrice * quantity).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                totalPrice: totalPrice,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                totalPrice: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['productName', 'price', 'quantity', 'salesperson', 'storeName'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please enter the ${field}.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/pos-orders', {
                ...formData,
                productId: selectedProduct?.value,
                storeName: selectedStore?.label // Use storeName instead of storeId
            });

            if (response.status === 200 || response.status === 201) {
                toast.success(orderData ? 'Order updated successfully!' : 'Order placed successfully!');
                onSave(response.data); // Optionally call onSave to pass the newly created order
            }

            onRequestClose();
        } catch (error) {
            console.error('Error response:', error.response);
            const errorMessage = error.response?.data?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        }
    };

    const discountOptions = Array.from({ length: 300 }, (_, i) => ({
        value: (i + 1) / 10,
        label: `${(i + 1) / 10}%`,
    }));

    const orderStatusOptions = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Canceled', label: 'Canceled' },
    ];

    const paymentStatusOptions = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Cheque', label: 'Cheque' },
    ];

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <ToastContainer />
            <div className="modal-content">
                <h2 className="order-modal__title">{orderData ? 'Edit Order' : 'Add Order'}</h2>
                <form onSubmit={handleSubmit} className="order-modal__form">
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        className="order-modal__input-text"
                    />
                    <Select
                        options={products}
                        value={selectedProduct}
                        onChange={handleProductChange}
                        placeholder="Select Product"
                        classNamePrefix="react-select"
                        className="order-modal__select"
                    />
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="order-modal__input-text"
                        readOnly
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="order-modal__input-text"
                    />
                    <div className="order-modal__remaining-stock">
                        <label>Remaining Stock:</label>
                        <input
                            type="text"
                            value={remainingStock}
                            readOnly
                            className="order-modal__input-text"
                        />
                    </div>
                    <Select
                        options={stores}
                        value={selectedStore}
                        onChange={handleStoreChange}
                        placeholder="Select Store"
                        classNamePrefix="react-select"
                        className="order-modal__select"
                    />
                    <Select
                        options={discountOptions}
                        value={{ value: formData.discount, label: `${formData.discount}%` }}
                        onChange={handleDiscountChange}
                        placeholder="Discount"
                        classNamePrefix="react-select"
                        className="order-modal__select"
                    />
                    <Select
                        options={orderStatusOptions}
                        value={orderStatusOptions.find(option => option.value === formData.orderStatus)}
                        onChange={handleOrderStatusChange}
                        placeholder="Order Status"
                        classNamePrefix="react-select"
                        className="order-modal__select"
                    />
                    <Select
                        options={paymentStatusOptions}
                        value={paymentStatusOptions.find(option => option.value === formData.paymentStatus)}
                        onChange={handlePaymentStatusChange}
                        placeholder="Payment Status"
                        classNamePrefix="react-select"
                        className="order-modal__select"
                    />
                    <input
                        type="text"
                        name="totalPrice"
                        value={formData.totalPrice}
                        readOnly
                        className="order-modal__input-text"
                        placeholder="Total Price"
                    />
                    <input
                        type="text"
                        name="salesperson"
                        value={formData.salesperson}
                        onChange={handleChange}
                        placeholder="Salesperson"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name (Optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name (Optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number (Optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address (Optional)"
                        className="order-modal__input-text"
                    />
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        className="order-modal__input-text"
                    />
                    <button type="submit" className="order-modal__button">{orderData ? 'Update Order' : 'Place Order'}</button>
                    <button type="button" onClick={onRequestClose} className="order-modal__button">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default OrdersModalForm;































