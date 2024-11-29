



/*import React from 'react';
import { Table, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsFilter, BsPrinter, BsFileEarmarkExcel } from 'react-icons/bs'; // Assuming you're using react-icons for the icons

const Products = () => {
    return (
        <div className="products-container">
            <div className="header d-flex justify-content-between align-items-center mb-3">
                <h2>Products</h2>
                <div className="actions">
                    <DropdownButton id="filter-button" title={<span><BsFilter /> Filter</span>} variant="outline-danger" className="me-2">
                        {/* Add filter options here }
                    </DropdownButton>
                    <DropdownButton id="export-button" title={<span>Export</span>} variant="outline-danger" className="me-2">
                        <Dropdown.Item href="#"><BsPrinter /> Print</Dropdown.Item>
                        <Dropdown.Item href="#"><BsFileEarmarkExcel /> XLS</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="danger" style={{ backgroundColor: '#F45631', borderColor: '#F45631' }}>
                        + Add Product
                    </Button>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Buying Price</th>
                        <th>Selling Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data will be dynamically inserted here}
                    <tr>
                        <td colSpan="6" className="text-center">Showing 0 of 0 entries</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Products;*/

/*without card import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Products.css'; // Assuming you have a CSS file for specific styling

const Products = () => {
    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-product-button">Add Product</button>
                </div>
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Buying Price</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Product</td>
                            <td>Category 1</td>
                            <td>$80</td>
                            <td>$100</td>
                            <td>Available</td>
                            <td>
                                <button className="action-button">Edit</button>
                                <button className="action-button">Delete</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;without card */
/*basic table headder orange import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Products.css'; // Assuming you have a CSS file for specific styling

const Products = () => {
    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-product-button">Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sample Product</td>
                                <td>Category 1</td>
                                <td>$80</td>
                                <td>$100</td>
                                <td>Available</td>
                                <td>
                                    <button className="action-button">Edit</button>
                                    <button className="action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;*/







/*without form import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Products.css'; // Assuming you have a CSS file for specific styling

const Products = () => {
    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="btn btn-outline-danger">Filter</button>
                    <button className="btn btn-outline-danger">Export</button>
                    <button className="btn btn-danger">Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sample Product</td>
                                <td>Category 1</td>
                                <td>$80</td>
                                <td>$100</td>
                                <td>Available</td>
                                <td>
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Products;without form */







/*firm good import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import ProductFormModal from './forms/ProductFormModal'; // Import the modal component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Products.css'; // Assuming you have a CSS file for specific styling

const Products = () => {
    const [showModal, setShowModal] = useState(false);

    // Function to show the modal
    const handleShow = () => setShowModal(true);
    
    // Function to hide the modal
    const handleClose = () => setShowModal(false);

    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="btn btn-outline-danger">Filter</button>
                    <button className="btn btn-outline-danger">Export</button>
                    <button className="btn btn-danger" onClick={handleShow}>Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sample Product</td>
                                <td>Category 1</td>
                                <td>$80</td>
                                <td>$100</td>
                                <td>Available</td>
                                <td>
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Include the modal component and pass the state and handlers }
            <ProductFormModal show={showModal} handleClose={handleClose} />
        </div>
    );
}

export default Products;*/






/*without submit import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import ProductFormModal from './forms/ProductFormModal'; // Import the modal component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Products.css'; // Assuming you have a CSS file for specific styling

const Products = () => {
    const [showModal, setShowModal] = useState(false);

    // Function to show the modal
    const handleShow = () => setShowModal(true);
    
    // Function to hide the modal
    const handleClose = () => setShowModal(false);

    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="btn btn-outline-danger">Filter</button>
                    <button className="btn btn-outline-danger">Export</button>
                    <button className="btn btn-danger" onClick={handleShow}>Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sample Product</td>
                                <td>Category 1</td>
                                <td>$80</td>
                                <td>$100</td>
                                <td>Available</td>
                                <td>
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Include the modal component and pass the state and handlers }
            <ProductFormModal show={showModal} handleClose={handleClose} />
        </div>
    );
}

export default Products;withou submit*/





/*api linking not submit product import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import ProductFormModal from './forms/ProductFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
import axios from 'axios';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/v1/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts(); // Fetch products when component mounts
    }, []);

    const handleProductAdded = () => {
        fetchProducts(); // Refresh the product list after adding a new product
    };

    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="btn btn-outline-danger">Filter</button>
                    <button className="btn btn-outline-danger">Export</button>
                    <button className="btn btn-danger" onClick={handleShow}>Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.originalPrice}</td>
                                    <td>{product.price}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ProductFormModal show={showModal} handleClose={handleClose} onProductAdded={handleProductAdded} />
        </div>
    );
}

export default Products;*/

import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import ProductFormModal from './forms/ProductFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/v1/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts(); // Fetch products when component mounts
    }, []);

    const handleProductAdded = () => {
        fetchProducts(); // Refresh the product list after adding a new product
    };

    const handleAddProduct = async (productData) => {
        try {
            // Send a POST request to add the new product
            await axios.post('/api/v1/product/new', productData);
            handleProductAdded(); // Refresh the product list
            handleClose(); // Close the modal after submission
            toast.success('Product successfully added!'); // Show success toast
        } catch (error) {
            console.error('Error adding product:', error);

            // Extract the error message from the response or fallback to a generic message
            const errorMessage = error.response?.data?.message || 'Error adding product. Please try again.';
            toast.error(errorMessage); // Show error toast with the specific message
        }
    };

    return (
        <div className="products-page">
            <DashboardSidebar />
            <div className="products-content">
                <div className="products-header">
                    <button className="btn btn-outline-danger">Filter</button>
                    <button className="btn btn-outline-danger">Export</button>
                    <button className="btn btn-danger" onClick={handleShow}>Add Product</button>
                </div>
                
                <div className="products-card">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Buying Price</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.originalPrice}</td>
                                    <td>{product.price}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ProductFormModal
                show={showModal}
                handleClose={handleClose}
                onSubmit={handleAddProduct} // Pass the onSubmit function to handle form submission
            />
            <ToastContainer /> {/* Add ToastContainer here */}
        </div>
    );
};

export default Products;
