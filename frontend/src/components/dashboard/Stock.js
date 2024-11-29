// src/components/dashboard/Stock.js



// src/components/dashboard/Stock.js
/*import React from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import './Stock.css'; // Assuming you have a CSS file for styling

const Stock = () => {
    return (
        <div className="stock-page">
            <div className="stock-header">
                <h1>Stock Management</h1>
                <div className="stock-actions">
                    <button className="filter-btn">Filter</button>
                    <button className="export-btn">Export</button>
                    <button className="add-stock-btn">Add Stock</button>
                </div>
            </div>

            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Count in Stock</th>
                        <th>Status</th>
                        <th>Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 1</td>
                        <td>50</td>
                        <td>In Stock</td>
                        <td>
                            <FaEdit className="action-icon" />
                            <FaSave className="action-icon" />
                            <FaTrashAlt className="action-icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>20</td>
                        <td>Low Stock</td>
                        <td>
                            <FaEdit className="action-icon" />
                            <FaSave className="action-icon" />
                            <FaTrashAlt className="action-icon" />
                        </td>
                    </tr>
                    {/* Add more rows as needed }
                </tbody>
            </table>
        </div>
    );
};

export default Stock;*/


/*without side bar import React from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import './Stock.css'; // Custom CSS for styling

const Stock = () => {
    return (
        <div className="stock-page">
            <div className="stock-header">
                <h1>Stock Management</h1>
                <div className="stock-actions">
                    <button className="filter-btn">Filter</button>
                    <button className="export-btn">Export</button>
                    <button className="add-stock-btn">Add Stock</button>
                </div>
            </div>

            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Count in Stock</th>
                        <th>Status</th>
                        <th>Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 1</td>
                        <td>50</td>
                        <td>In Stock</td>
                        <td className="actions-col">
                            <FaEdit className="action-icon edit-icon" />
                            <FaSave className="action-icon save-icon" />
                            <FaTrashAlt className="action-icon delete-icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>20</td>
                        <td>Low Stock</td>
                        <td className="actions-col">
                            <FaEdit className="action-icon edit-icon" />
                            <FaSave className="action-icon save-icon" />
                            <FaTrashAlt className="action-icon delete-icon" />
                        </td>
                    </tr>
                    {/* Add more rows as needed }
                </tbody>
            </table>
        </div>
    );
};

export default Stock;*/


// src/components/dashboard/Stock.js
/*without connection import React from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import DashboardSidebar from '../dashboard/DashboardSidebar';// Assuming you have a common sidebar component
import './Stock.css'; // Styling file

const Stock = () => {
    return (
        <div className="stock-page">
            <DashboardSidebar /> {/* Sidebar included }
            <div className="stock-content"> {/* Main content area }
                <div className="stock-header">
                  
                    <div className="stock-actions">
                        <button className="filter-btn">Filter</button>
                        <button className="export-btn">Export</button>
                        <button className="add-stock-btn">Add Stock</button>
                    </div>
                </div>

                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Count in Stock</th>
                            <th>Status</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product 1</td>
                            <td>50</td>
                            <td>In Stock</td>
                            <td>
                                <FaEdit className="edit-icon" />
                                <FaSave className="save-icon" />
                                <FaTrashAlt className="delete-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>Product 2</td>
                            <td>20</td>
                            <td>Low Stock</td>
                            <td>
                                <FaEdit className="edit-icon" />
                                <FaSave className="save-icon" />
                                <FaTrashAlt className="delete-icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Stock;*/






/*without edit the count import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Assuming you have a common sidebar component
import './Stock.css'; // Styling file

const Stock = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/v1/products');
                const result = await response.json();
                console.log(result); // Log result to inspect data structure
                const data = Array.isArray(result) ? result : result.products; // Adjust based on your API response
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const renderStockCount = (count) => {
        return count > 0 ? count : 'Out of Stock';
    };

    return (
        <div className="stock-page">
            <DashboardSidebar /> {/* Sidebar included }
            <div className="stock-content"> {/* Main content area }
                <div className="stock-header">
                    <div className="stock-actions">
                        <button className="filter-btn">Filter</button>
                        <button className="export-btn">Export</button>
                        <button className="add-stock-btn">Add Stock</button>
                    </div>
                </div>

                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Count in Stock</th>
                            <th>Status</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id}> {/* Use a unique identifier }
                                    <td>{product.name}</td>
                                    <td>{renderStockCount(product.countInStock)}</td>
                                    <td>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</td>
                                    <td>
                                        <FaEdit className="edit-icon" />
                                        <FaSave className="save-icon" />
                                        <FaTrashAlt className="delete-icon" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No products available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Stock;*/



/*form not updating import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Assuming you have a common sidebar component
import './Stock.css'; // Styling file

const Stock = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newStockCount, setNewStockCount] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/v1/products');
                const result = await response.json();
                const data = Array.isArray(result) ? result : result.products;
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setNewStockCount(product.countInStock);
        setShowModal(true);
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`/api/v1/products/${selectedProduct._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ countInStock: newStockCount }),
            });
            const updatedProduct = await response.json();
            setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product));
            setShowModal(false);
        } catch (error) {
            console.error('Error updating stock count:', error);
        }
    };

    const renderStockCount = (count) => {
        return count > 0 ? count : 'Out of Stock';
    };

    return (
        <div className="stock-page">
            <DashboardSidebar /> {/* Sidebar included }
            <div className="stock-content"> {/* Main content area }
                <div className="stock-header">
                    <div className="stock-actions">
                        <button className="filter-btn">Filter</button>
                        <button className="export-btn">Export</button>
                        <button className="add-stock-btn">Add Stock</button>
                    </div>
                </div>

                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Count in Stock</th>
                            <th>Status</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id}> {/* Use a unique identifier }
                                    <td>{product.name}</td>
                                    <td>{renderStockCount(product.countInStock)}</td>
                                    <td>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</td>
                                    <td>
                                        <FaEdit className="edit-icon" onClick={() => handleEditClick(product)} />
                                        <FaSave className="save-icon" />
                                        <FaTrashAlt className="delete-icon" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No products available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Edit Stock Count</h2>
                            <label>
                                Product Name: {selectedProduct?.name}
                            </label>
                            <label>
                                New Stock Count:
                                <input
                                    type="number"
                                    value={newStockCount}
                                    onChange={(e) => setNewStockCount(e.target.value)}
                                />
                            </label>
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Stock;form not updating */


import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import DashboardSidebar from '../dashboard/DashboardSidebar'; // Assuming you have a common sidebar component
import './Stock.css'; // Styling file
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stock = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newStockCount, setNewStockCount] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/v1/products');
                const result = await response.json();
                console.log(result); // Log result to inspect data structure
                const data = Array.isArray(result) ? result : result.products; // Adjust based on your API response
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setNewStockCount(product.countInStock);
    };

    const handleSaveClick = async () => {
        if (editingProduct) {
            try {
                const response = await fetch(`/api/v1/product/${editingProduct._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ countInStock: newStockCount }),
                });

                if (response.ok) {
                    // Update local state
                    const updatedProducts = products.map((product) =>
                        product._id === editingProduct._id
                            ? { ...product, countInStock: newStockCount }
                            : product
                    );
                    setProducts(updatedProducts);
                    setEditingProduct(null);
                    setNewStockCount('');
                    toast.success('Count changed successfully');
                } else {
                    throw new Error('Failed to update stock');
                }
            } catch (error) {
                console.error('Error updating stock:', error);
                toast.error('Failed to update stock');
            }
        }
    };

    return (
        <div className="stock-page">
            <DashboardSidebar /> {/* Sidebar included */}
            <div className="stock-content"> {/* Main content area */}
                <div className="stock-header">
                    <div className="stock-actions">
                        <button className="filter-btn">Filter</button>
                        <button className="export-btn">Export</button>
                        <button className="add-stock-btn">Add Stock</button>
                    </div>
                </div>

                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Count in Stock</th>
                            <th>Status</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id}> {/* Use a unique identifier */}
                                    <td>{product.name}</td>
                                    <td>
                                        {editingProduct && editingProduct._id === product._id ? (
                                            <input
                                                type="number"
                                                value={newStockCount}
                                                onChange={(e) => setNewStockCount(e.target.value)}
                                            />
                                        ) : (
                                            product.countInStock
                                        )}
                                    </td>
                                    <td>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</td>
                                    <td>
                                        {editingProduct && editingProduct._id === product._id ? (
                                            <>
                                                <button onClick={handleSaveClick}>
                                                    <FaSave className="save-icon" />
                                                </button>
                                                <button onClick={() => setEditingProduct(null)}>
                                                    <FaTrashAlt className="cancel-icon" />
                                                </button>
                                            </>
                                        ) : (
                                            <button onClick={() => handleEditClick(product)}>
                                                <FaEdit className="edit-icon" />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No products available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <ToastContainer /> {/* Toast container */}
            </div>
        </div>
    );
};

export default Stock;
