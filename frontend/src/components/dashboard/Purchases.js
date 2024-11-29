/*import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Purchases.css'; // Assuming you have a CSS file for specific styling

const Purchases = () => {
    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="btn btn-outline-danger filter-button">Filter</button>
                    <button className="btn btn-outline-danger export-button">Export</button>
                    <button className="btn btn-danger add-purchase-button">Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="table table-bordered table-transparent purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-success btn-sm action-button">Edit</button>
                                    <button className="btn btn-danger btn-sm action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchases;*/

/*import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DashboardSidebar from '../dashboard/DashboardSidebar';
//import PurchaseForm from './forms/PurchaseForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Purchases.css'; // Custom CSS file

const Purchases = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <Button className="filter-button">Filter</Button>
                    <Button className="export-button">Export</Button>
                    <Button className="add-purchase-button" onClick={handleShow}>Add Purchase</Button>
                </div>
                
                <div className="purchases-card">
                    <table className="table table-bordered purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>
                                    <Button className="action-button edit-button">Edit</Button>
                                    <Button className="action-button delete-button">Delete</Button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PurchaseForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Purchases;*/


// Purchases.js
/*import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Purchases.css'; // Assuming you have a CSS file for specific styling
import PurchaseFormModal from './forms/PurchaseFormModal';

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="btn btn-outline-danger filter-button">Filter</button>
                    <button className="btn btn-outline-danger export-button">Export</button>
                    <button className="btn btn-danger add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="table table-bordered table-transparent purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-success btn-sm action-button">Edit</button>
                                    <button className="btn btn-danger btn-sm action-button">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default Purchases;ok*/

/*import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa'; // Example icons for actions

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Status</th>
                                <th>Subtotal</th>
                                <th>Payment Status</th>
                                <th>Note</th>
                                <th>Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Product X</td>
                                <td>10</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>Note about the product</td>
                                <td>
                                    <button className="action-button">
                                        <FaEdit />
                                    </button>
                                    <button className="action-button">
                                        <FaTrashAlt />
                                    </button>
                                    <button className="action-button">
                                        <FaSave />
                                    </button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default Purchases;*/




/*normal table import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Status</th>
                                <th>Subtotal</th>
                                <th>Payment Status</th>
                                <th>Note</th>
                                <th>Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier A</td>
                                <td>2024-08-26</td>
                                <td>12345</td>
                                <td>Product X</td>
                                <td>10</td>
                                <td>Completed</td>
                                <td>$500</td>
                                <td>Paid</td>
                                <td>Note about the product</td>
                                <td>
                                    <button className="action-button" onClick={() => openDetailModal({ productName: 'Product X', qty: 10 })}>
                                        <FaEye />
                                    </button>
                                    <button className="action-button">
                                        <FaEdit />
                                    </button>
                                    <button className="action-button">
                                        <FaTrashAlt />
                                    </button>
                                    <button className="action-button">
                                        <FaSave />
                                    </button>
                                </td>
                            </tr>
                            {/* Add more rows as needed }
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing 1 to 1 of 1 entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Purchases;*/


/*everything good import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    // Handle form submission
    const handleFormSubmit = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
        closeModal(); // Close the modal after submission
    };

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Status</th>
                                <th>Subtotal</th>
                                <th>Payment Status</th>
                                <th>Note</th>
                                <th>Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map((purchase, index) => (
                                <tr key={index}>
                                    <td>{purchase.supplier}</td>
                                    <td>{purchase.date}</td>
                                    <td>{purchase.refNo}</td>
                                    <td>{purchase.product}</td>
                                    <td>{purchase.qty}</td>
                                    <td>{purchase.status}</td>
                                    <td>${purchase.subtotal}</td>
                                    <td>{purchase.paymentStatus}</td>
                                    <td>{purchase.note}</td>
                                    <td>
                                        <button className="action-button" onClick={() => openDetailModal(purchase)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button">
                                            <FaEdit />
                                        </button>
                                        <button className="action-button">
                                            <FaTrashAlt />
                                        </button>
                                        <button className="action-button">
                                            <FaSave />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {purchases.length} entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Purchases;*/







/*import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    // Handle form submission
    const handleFormSubmit = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
        closeModal(); // Close the modal after submission
    };

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table 
                        className="purchases-table" 
                        style={{ 
                            borderCollapse: 'collapse', 
                            width: '100%', 
                            border: '1px solid #ddd' 
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    
                                }}>Supplier</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Date</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Reference No</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Product Name</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Qty</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Status</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Subtotal</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Payment Status</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Note</th>
                                <th style={{ 
                                    borderBottom: '2px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f4f4f4'
                                }}>Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map((purchase, index) => (
                                <tr key={index}>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.supplier}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.date}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.refNo}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.product}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.qty}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.status}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>${purchase.subtotal}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.paymentStatus}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{purchase.note}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                                        <button className="action-button" onClick={() => openDetailModal(purchase)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button">
                                            <FaEdit />
                                        </button>
                                        <button className="action-button">
                                            <FaTrashAlt />
                                        </button>
                                        <button className="action-button">
                                            <FaSave />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {purchases.length} entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Purchases;inline css */


/*good good import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    // Handle form submission
    const handleFormSubmit = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
        closeModal(); // Close the modal after submission
    };

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map((purchase, index) => (
                                <tr key={index}>
                                    <td>{purchase.supplier}</td>
                                    <td>{purchase.date}</td>
                                    <td>{purchase.refNo}</td>
                                    <td >{purchase.product}</td>
                                    <td>{purchase.qty}</td>
                                    <td>{purchase.status}</td>
                                    <td>${purchase.subtotal}</td>
                                    <td>{purchase.paymentStatus}</td>
                                    <td>{purchase.note}</td>
                                    <td>
                                        <button className="action-button" onClick={() => openDetailModal(purchase)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button">
                                            <FaEdit />
                                        </button>
                                        <button className="action-button">
                                            <FaTrashAlt />
                                        </button>
                                        <button className="action-button">
                                            <FaSave />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {purchases.length} entries
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Purchases;*/






/*import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10); // Number of entries per page

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    // Handle form submission
    const handleFormSubmit = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
        closeModal(); // Close the modal after submission
    };

    // Calculate paginated purchases
    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    // Calculate total pages
    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={openModal}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase, index) => (
                                <tr key={index}>
                                    <td>{purchase.supplier}</td>
                                    <td>{purchase.date}</td>
                                    <td>{purchase.refNo}</td>
                                    <td>{purchase.product}</td>
                                    <td>{purchase.qty}</td>
                                    <td>{purchase.status}</td>
                                    <td>${purchase.subtotal}</td>
                                    <td>{purchase.paymentStatus}</td>
                                    <td>{purchase.note}</td>
                                    <td>
                                        <button className="action-button" onClick={() => openDetailModal(purchase)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button">
                                            <FaEdit />
                                        </button>
                                        <button className="action-button">
                                            <FaTrashAlt />
                                        </button>
                                        <button className="action-button">
                                            <FaSave />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Purchases;without db */




/*product field not showing import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaSave, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
    const [editPurchase, setEditPurchase] = useState(null); // State for handling edit

    useEffect(() => {
        // Fetch purchases when the component mounts
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch('/api/v1/purchases');
            const data = await response.json();
            if (data.success) {
                setPurchases(data.data);
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openModal = (purchase = null) => {
        setEditPurchase(purchase);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPurchase(null);
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const handleFormSubmit = async (newPurchase) => {
        try {
            const response = editPurchase
                ? await fetch(`/api/v1/purchases/${editPurchase._id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  })
                : await fetch('/api/v1/purchases', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  });

            const data = await response.json();
            if (data.success) {
                if (editPurchase) {
                    // Edit purchase
                    setPurchases(purchases.map(purchase =>
                        purchase._id === editPurchase._id ? data.data : purchase
                    ));
                    toast.success('Purchase updated successfully!');
                } else {
                    // Add new purchase
                    setPurchases([...purchases, data.data]);
                    toast.success('Purchase saved successfully!');
                }
                closeModal();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={() => openModal()}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase) => (
                                <tr key={purchase._id}>
                                    <td>{purchase.supplier}</td>
                                    <td>{purchase.date}</td>
                                    <td>{purchase.refNo}</td>
                                    <td>{purchase.product}</td>
                                    <td>{purchase.qty}</td>
                                    <td>{purchase.status}</td>
                                    <td>${purchase.subtotal}</td>
                                    <td>{purchase.paymentStatus}</td>
                                    <td>{purchase.note}</td>
                                    <td>
                                        <button className="action-button" onClick={() => openDetailModal(purchase)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button" onClick={() => openModal(purchase)}>
                                            <FaEdit />
                                        </button>
                                        <button className="action-button" onClick={() => handleDelete(purchase._id)}>
                                            <FaTrashAlt />
                                        </button>
                                        {/* Save button can be removed if you're using the modal for both add and edit }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} purchase={editPurchase} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.productName}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default Purchases;product field not showing */



/*double time occuring import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
    const [editPurchase, setEditPurchase] = useState(null); // State for handling edit

    useEffect(() => {
        // Fetch purchases when the component mounts
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch('/api/v1/purchases');
            const data = await response.json();
            if (data.success) {
                setPurchases(data.data);
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openModal = (purchase = null) => {
        setEditPurchase(purchase);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPurchase(null);
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const handleFormSubmit = async (newPurchase) => {
        try {
            const response = editPurchase
                ? await fetch(`/api/v1/purchases/${editPurchase._id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  })
                : await fetch('/api/v1/purchases', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  });

            const data = await response.json();
            if (data.success) {
                if (editPurchase) {
                    // Edit purchase
                    setPurchases(purchases.map(purchase =>
                        purchase._id === editPurchase._id ? data.data : purchase
                    ));
                    toast.success('Purchase updated successfully!');
                } else {
                    // Add new purchase
                    setPurchases([...purchases, data.data]);
                    toast.success('Purchase saved successfully!');
                }
                closeModal();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={() => openModal()}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase) => (
                                purchase.products.map((product, index) => (
                                    <tr key={`${purchase._id}-${index}`}>
                                        <td>{purchase.supplier}</td>
                                        <td>{purchase.date}</td>
                                        <td>{purchase.refNo}</td>
                                        <td>{product.product}</td>
                                        <td>{product.qty}</td>
                                        <td>{purchase.status}</td>
                                        <td>${product.subtotal}</td>
                                        <td>{purchase.paymentStatus}</td>
                                        <td>{product.note}</td>
                                        <td>
                                            <button className="action-button" onClick={() => openDetailModal(product)}>
                                                <FaEye />
                                            </button>
                                            <button className="action-button" onClick={() => openModal(purchase)}>
                                                <FaEdit />
                                            </button>
                                            <button className="action-button" onClick={() => handleDelete(purchase._id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} purchase={editPurchase} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.product}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                        <p><strong>Note:</strong> {detailData.note}</p>
                        <p><strong>Subtotal:</strong> ${detailData.subtotal}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default Purchases;dob=uble time occuring*/




/*finalimport React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
    const [editPurchase, setEditPurchase] = useState(null); // State for handling edit

    useEffect(() => {
        // Fetch purchases when the component mounts
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch('/api/v1/purchases');
            const data = await response.json();
            if (data.success) {
                // Use a Set to remove duplicates based on a unique identifxier (e.g., refNo or _id)
                const uniquePurchases = Array.from(new Set(data.data.map(purchase => purchase._id)))
                    .map(id => data.data.find(purchase => purchase._id === id));
                
                setPurchases(uniquePurchases);
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openModal = (purchase = null) => {
        setEditPurchase(purchase);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPurchase(null);
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const handleFormSubmit = async (newPurchase) => {
        try {
            const response = editPurchase
                ? await fetch(`/api/v1/purchases/${editPurchase._id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  })
                : await fetch('/api/v1/purchases', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  });

            const data = await response.json();
            if (data.success) {
                if (editPurchase) {
                    // Edit purchase
                    setPurchases(purchases.map(purchase =>
                        purchase._id === editPurchase._id ? data.data : purchase
                    ));
                    toast.success('Purchase updated successfully!');
                } else {
                    // Add new purchase
                    setPurchases([...purchases, data.data]);
                    toast.success('Purchase saved successfully!');
                }
                closeModal();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={() => openModal()}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase) => (
                                purchase.products.map((product, index) => (
                                    <tr key={`${purchase._id}-${index}`}>
                                        <td>{purchase.supplier}</td>
                                        <td>{purchase.date}</td>
                                        <td>{purchase.refNo}</td>
                                        <td>{product.product}</td>
                                        <td>{product.qty}</td>
                                        <td>{purchase.status}</td>
                                        <td>${product.subtotal}</td>
                                        <td>{purchase.paymentStatus}</td>
                                        <td>{product.note}</td>
                                        <td>
                                            <button className="action-button" onClick={() => openDetailModal(product)}>
                                                <FaEye />
                                            </button>
                                            <button className="action-button" onClick={() => openModal(purchase)}>
                                                <FaEdit />
                                            </button>
                                            <button className="action-button" onClick={() => handleDelete(purchase._id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} purchase={editPurchase} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.product}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                        <p><strong>Note:</strong> {detailData.note}</p>
                        <p><strong>Subtotal:</strong> ${detailData.subtotal}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default Purchases;final without storename*/

/*import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
    const [editPurchase, setEditPurchase] = useState(null); // State for handling edit

    useEffect(() => {
        // Fetch purchases when the component mounts
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch('/api/v1/purchases');
            const data = await response.json();
            if (data.success) {
                const uniquePurchases = Array.from(new Set(data.data.map(purchase => purchase._id)))
                    .map(id => data.data.find(purchase => purchase._id === id));
                
                setPurchases(uniquePurchases);
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openModal = (purchase = null) => {
        setEditPurchase(purchase);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPurchase(null);
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const handleFormSubmit = async (newPurchase) => {
        try {
            const response = editPurchase
                ? await fetch(`/api/v1/purchases/${editPurchase._id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  })
                : await fetch('/api/v1/purchases', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  });

            const data = await response.json();
            if (data.success) {
                if (editPurchase) {
                    // Edit purchase
                    setPurchases(purchases.map(purchase =>
                        purchase._id === editPurchase._id ? data.data : purchase
                    ));
                    toast.success('Purchase updated successfully!');
                } else {
                    // Add new purchase
                    setPurchases([...purchases, data.data]);
                    toast.success('Purchase saved successfully!');
                }
                closeModal();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={() => openModal()}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>STORE NAME</th> {/* Added store name column }
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase) => (
                                purchase.products.map((product, index) => (
                                    <tr key={`${purchase._id}-${index}`}>
                                        <td>{purchase.storeName}</td> {/* Display store name /}
                                        <td>{purchase.supplier}</td>
                                        <td>{purchase.date}</td>
                                        <td>{purchase.refNo}</td>
                                        <td>{product.product}</td>
                                        <td>{product.qty}</td>
                                        <td>{purchase.status}</td>
                                        <td>${product.subtotal}</td>
                                        <td>{purchase.paymentStatus}</td>
                                        <td>{product.note}</td>
                                        <td>
                                            <button className="action-button" onClick={() => openDetailModal(product)}>
                                                <FaEye />
                                            </button>
                                            <button className="action-button" onClick={() => openModal(purchase)}>
                                                <FaEdit />
                                            </button>
                                            <button className="action-button" onClick={() => handleDelete(purchase._id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ))} 
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} purchase={editPurchase} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.product}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                        <p><strong>Note:</strong> {detailData.note}</p>
                        <p><strong>Subtotal:</strong> ${detailData.subtotal}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};






   toast contsinder  
   coincider export default Purchases;*/





 /*goodimport React, { useState, useEffect } from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import './Purchases.css'; // Your custom CSS file
import PurchaseFormModal from './forms/PurchaseFormModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Example icons for actions
import Modal from 'react-modal'; // Make sure you have react-modal installed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [purchases, setPurchases] = useState([]); // State to hold purchase data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
    const [editPurchase, setEditPurchase] = useState(null); // State for handling edit

    useEffect(() => {
        // Fetch purchases when the component mounts
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch('/api/v1/purchases');
            const data = await response.json();
            if (data.success) {
                const uniquePurchases = Array.from(new Set(data.data.map(purchase => purchase._id)))
                    .map(id => data.data.find(purchase => purchase._id === id));
                
                setPurchases(uniquePurchases);
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openModal = (purchase = null) => {
        setEditPurchase(purchase);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPurchase(null);
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const handleFormSubmit = async (newPurchase) => {
        try {
            const response = editPurchase
                ? await fetch(`/api/v1/purchases/${editPurchase._id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  })
                : await fetch('/api/v1/purchases', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(newPurchase)
                  });

            const data = await response.json();
            if (data.success) {
                if (editPurchase) {
                    // Edit purchase
                    setPurchases(purchases.map(purchase =>
                        purchase._id === editPurchase._id ? data.data : purchase
                    ));
                    toast.success('Purchase updated successfully!');
                } else {
                    // Add new purchase
                    setPurchases([...purchases, data.data]);
                    toast.success('Purchase saved successfully!');
                }
                closeModal();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const indexOfLastPurchase = currentPage * entriesPerPage;
    const indexOfFirstPurchase = indexOfLastPurchase - entriesPerPage;
    const currentPurchases = purchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

    const totalPages = Math.ceil(purchases.length / entriesPerPage);

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <button className="filter-button">Filter</button>
                    <button className="export-button">Export</button>
                    <button className="add-purchase-button" onClick={() => openModal()}>Add Purchase</button>
                </div>
                
                <div className="purchases-card">
                    <table className="purchases-table">
                        <thead>
                            <tr>
                                <th>STORE NAME</th> {/* Added store name column}
                                <th>SUPPLIER</th>
                                <th>DATE</th>
                                <th>REFERENCE_NO</th>
                                <th>PRODUCT_NAME</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                <th>SUBTOTAL</th>
                                <th>PAYMENT_STATUS</th>
                                <th>NOTE</th>
                                <th>QUICK ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPurchases.map((purchase) => (
                                purchase.products.map((product, index) => (
                                    <tr key={`${purchase._id}-${index}`}>
                                        <td>{purchase.storeName}</td> {/* Display store name }
                                        <td>{purchase.supplier}</td>
                                        <td>{purchase.date}</td>
                                        <td>{purchase.refNo}</td>
                                        <td>{product.product}</td>
                                        <td>{product.qty}</td>
                                        <td>{purchase.status}</td>
                                        <td>${product.subtotal}</td>
                                        <td>{purchase.paymentStatus}</td>
                                        <td>{product.note}</td>
                                        <td>
                                            <button className="action-button" onClick={() => openDetailModal(product)}>
                                                <FaEye />
                                            </button>
                                            <button className="action-button" onClick={() => openModal(purchase)}>
                                                <FaEdit />
                                            </button>
                                            <button className="action-button" onClick={() => handleDelete(purchase._id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ))} 
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing {indexOfFirstPurchase + 1} to {Math.min(indexOfLastPurchase, purchases.length)} of {purchases.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <PurchaseFormModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleFormSubmit} purchase={editPurchase} />

            <Modal
                isOpen={isDetailModalOpen}
                onRequestClose={closeDetailModal}
                className="detail-modal"
                overlayClassName="detail-modal-overlay"
                contentLabel="Product Details"
            >
                <h2>Product Details</h2>
                {detailData && (
                    <div className="detail-content">
                        <p><strong>Product Name:</strong> {detailData.product}</p>
                        <p><strong>Quantity:</strong> {detailData.qty}</p>
                        <p><strong>Note:</strong> {detailData.note}</p>
                        <p><strong>Subtotal:</strong> ${detailData.subtotal}</p>
                    </div>
                )}
                <button className="close-modal-button" onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default Purchases;*/



/*store view header import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Purchases.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import PurchaseFormModal from './forms/PurchaseFormModal'; // Import the PurchaseFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [purchases, setPurchases] = useState([]); // State to handle the list of purchases
  const [currentPurchase, setCurrentPurchase] = useState(null); // State to handle the purchase being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle purchase details
  const { storeName } = useParams(); // Get storeName from URL parameters

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        // Construct the full URL based on the storeName
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}`  // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/purchases'; // Fetch general purchases if storeName is not present

        console.log('Fetching from URL:', url); // Log the URL being used for the fetch

        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Response data:', data); // Log the response data

        if (data.success) {
          const uniquePurchases = Array.from(new Set(data.data.map(purchase => purchase._id)))
            .map(id => data.data.find(purchase => purchase._id === id));
          
          setPurchases(uniquePurchases);
          console.log('Unique purchases:', uniquePurchases); // Log unique purchases
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Fetch error:', error); // Log any errors during the fetch
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null); // Reset current purchase
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase); // Set current purchase for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  // Calculate total amount of products in a purchase
  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(purchase => (
                <React.Fragment key={purchase._id}>
                  {purchase.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                          <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                          <td rowSpan={purchase.products.length}>{purchase.customerName}</td>
                          <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                          <td rowSpan={purchase.products.length}>${calculateTotalAmount(purchase.products).toFixed(2)}</td>
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal.toFixed(2)}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PurchaseFormModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onSubmit={handlePurchaseSubmit} 
        purchase={currentPurchase} 
      />

      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Purchase Details</h2>
        {detailData && (
          <div>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Customer Name:</strong> {detailData.customerName}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p>
            <h4>Products:</h4>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>{product.product} - Quantity: {product.qty} - Total: ${product.subtotal.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Purchases; store view header only */ 

/*import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Purchases.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import PurchaseFormModal from './forms/PurchaseFormModal'; // Import the PurchaseFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [purchases, setPurchases] = useState([]); // State to handle the list of purchases
  const [currentPurchase, setCurrentPurchase] = useState(null); // State to handle the purchase being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle purchase details
  const { storeName } = useParams(); // Get storeName from URL parameters

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/purchases'; // Fetch general purchases if storeName is not present

        console.log('Fetching from URL:', url); // Log the URL being used for the fetch

        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Response data:', data); // Log the response data

        if (data.success) {
          // Filter out duplicate purchases by their ID
          const uniquePurchases = Array.from(new Set(data.purchases.map(purchase => purchase._id)))
            .map(id => data.purchases.find(purchase => purchase._id === id));
          
          setPurchases(uniquePurchases);
          console.log('Unique purchases:', uniquePurchases); // Log unique purchases
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Fetch error:', error); // Log any errors during the fetch
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null); // Reset current purchase
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase); // Set current purchase for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  // Calculate total amount of products in a purchase
  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(purchase => (
                <React.Fragment key={purchase._id}>
                  {purchase.products && purchase.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                          <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                          <td rowSpan={purchase.products.length}>{purchase.customerName}</td>
                          <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                          <td rowSpan={purchase.products.length}>${calculateTotalAmount(purchase.products).toFixed(2)}</td>
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal.toFixed(2)}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Purchase Form Modal }
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose} contentLabel="Purchase Form">
        <PurchaseFormModal
          purchase={currentPurchase}
          onSubmit={handlePurchaseSubmit}
          onClose={handleModalClose}
        />
      </Modal>

      {/* Detail Modal }
      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal} contentLabel="Purchase Details">
        {detailData && (
          <div>
            <h2>Purchase Details</h2>
            {/* Add your details rendering logic here}
            <button onClick={closeDetailModal}>Close</button>
          </div>
        )}
      </Modal>

      {/* Toast notifications}
      <ToastContainer />
    </div>
  );
};

export default Purchases;*/


/*store view pakka import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Purchases.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import PurchaseFormModal from './forms/PurchaseFormModal'; // Import the PurchaseFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [purchases, setPurchases] = useState([]); // State to handle the list of purchases
  const [currentPurchase, setCurrentPurchase] = useState(null); // State to handle the purchase being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle purchase details
  const { storeName } = useParams(); // Get storeName from URL parameters

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/purchases'; // Fetch general purchases if storeName is not present

        console.log('Fetching from URL:', url); // Log the URL being used for the fetch

        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Response data:', data); // Log the response data

        if (data.success) {
          // Filter out duplicate purchases by their ID
          const uniquePurchases = Array.from(new Set(data.purchases.map(purchase => purchase._id)))
            .map(id => data.purchases.find(purchase => purchase._id === id));
          
          setPurchases(uniquePurchases);
          console.log('Unique purchases:', uniquePurchases); // Log unique purchases
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Fetch error:', error); // Log any errors during the fetch
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null); // Reset current purchase
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase); // Set current purchase for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  // Calculate total amount of products in a purchase
  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases && purchases.length > 0 ? (
                purchases.map(purchase => (
                  <React.Fragment key={purchase._id}>
                    {purchase.products && purchase.products.length > 0 && purchase.products.map((product, index) => (
                      <tr key={index}>
                        {index === 0 && (
                          <>
                            <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                            <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                            <td rowSpan={purchase.products.length}>{purchase.customerName}</td>
                            <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                            <td rowSpan={purchase.products.length}>${calculateTotalAmount(purchase.products).toFixed(2)}</td>
                          </>
                        )}
                        <td>{product.product}</td>
                        <td>{product.qty}</td>
                        <td>${product.subtotal.toFixed(2)}</td>
                        <td>{product.note}</td>
                        <td>
                          <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                            <FaEye />
                          </button>
                          <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                            <FaEdit />
                          </button>
                          <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No purchases found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <ToastContainer /> {/* Render toast notifications }
        <PurchaseFormModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handlePurchaseSubmit}
          purchase={currentPurchase}
        />

        {/* Detail Modal for displaying purchase details }
        <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal} ariaHideApp={false}>
          <h2>Purchase Details</h2>
          {detailData && (
            <div>
              <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
              <p><strong>Reference No:</strong> {detailData.refNo}</p>
              <p><strong>Customer Name:</strong> {detailData.customerName}</p>
              <p><strong>Store Name:</strong> {detailData.storeName}</p>
              <h3>Products</h3>
              <ul>
                {detailData.products.map(product => (
                  <li key={product.product}>
                    {product.product} - {product.qty} - ${product.subtotal.toFixed(2)}
                  </li>
                ))}
              </ul>
              <button onClick={closeDetailModal}>Close</button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Purchases;*/




/*import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Purchases.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import PurchaseFormModal from './forms/PurchaseFormModal'; // Import the PurchaseFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [purchases, setPurchases] = useState([]); // State to handle the list of purchases
  const [currentPurchase, setCurrentPurchase] = useState(null); // State to handle the purchase being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle purchase details
  const { storeName } = useParams(); // Get storeName from URL parameters

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/purchases'; // Fetch general purchases if storeName is not present

        console.log('Fetching from URL:', url); // Log the URL being used for the fetch

        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Response data:', data); // Log the response data

        if (data.success) {
          // Check if purchases exist
          if (data.purchases && data.purchases.length > 0) {
            // Filter out duplicate purchases by their ID
            const uniquePurchases = Array.from(new Set(data.purchases.map(purchase => purchase._id)))
              .map(id => data.purchases.find(purchase => purchase._id === id));
            
            setPurchases(uniquePurchases);
            console.log('Unique purchases:', uniquePurchases); // Log unique purchases
          } else {
            console.log('No purchases found in the response data.');
            setPurchases([]); // Ensure purchases is an empty array
          }
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Fetch error:', error); // Log any errors during the fetch
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null); // Reset current purchase
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase); // Set current purchase for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  // Calculate total amount of products in a purchase
  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Customer Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases && purchases.length > 0 ? (
                purchases.map(purchase => (
                  <React.Fragment key={purchase._id}>
                    {purchase.products && purchase.products.length > 0 && purchase.products.map((product, index) => (
                      <tr key={index}>
                        {index === 0 && (
                          <>
                            <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                            <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                            <td rowSpan={purchase.products.length}>{purchase.customerName}</td>
                            <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                            <td rowSpan={purchase.products.length}>${calculateTotalAmount(purchase.products).toFixed(2)}</td>
                          </>
                        )}
                        <td>{product.product}</td>
                        <td>{product.qty}</td>
                        <td>${product.subtotal.toFixed(2)}</td>
                        <td>{product.note}</td>
                        <td>
                          <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                            <FaEye />
                          </button>
                          <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                            <FaEdit />
                          </button>
                          <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No purchases found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <PurchaseFormModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handlePurchaseSubmit}
          purchase={currentPurchase}
        />
        {/* Detail modal can be implemented here}
        <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
          <h2>Purchase Details</h2>
          {detailData && (
            <div>
              <p><strong>Reference No:</strong> {detailData.refNo}</p>
              <p><strong>Customer Name:</strong> {detailData.customerName}</p>
              <p><strong>Store Name:</strong> {detailData.storeName}</p>
              <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
              {/* Add more details as needed }
            </div>
          )}
          <button onClick={closeDetailModal}>Close</button>
        </Modal>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Purchases;good store*/




/*good store import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Purchases.css"; // Assuming you have a CSS file for specific styling
import { Dropdown } from "react-bootstrap"; // Import Dropdown from React Bootstrap
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import PurchaseFormModal from './forms/PurchaseFormModal'; // Import the PurchaseFormModal
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications
import Modal from 'react-modal'; // Import the Modal component
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [purchases, setPurchases] = useState([]); // State to handle the list of purchases
  const [currentPurchase, setCurrentPurchase] = useState(null); // State to handle the purchase being edited
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State to handle detail modal visibility
  const [detailData, setDetailData] = useState(null); // State to handle purchase details
  const { storeName } = useParams(); // Get storeName from URL parameters

  // Fetch purchases from the backend when component mounts or storeName changes
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        // Construct the full URL based on the storeName
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` // Use path segment for store-specific fetch
          : 'http://localhost:5000/api/v1/purchases'; // Fetch general purchases if storeName is not present

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setPurchases(data.purchases); // Update state with the fetched purchases
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases(); // Call the fetch function
  }, [storeName]); // Depend on storeName to re-fetch when it changes

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null); // Reset current purchase
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase); // Set current purchase for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        // If editing, make a PUT request
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        // If adding, make a POST request
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false); // Close the modal after successful submit
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="filter-dropdown"
              className="filter-button"
            >
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="outline-danger"
              id="export-dropdown"
              className="export-button"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Supplier Name</th>
                <th>Store Name</th> {/* New Store Name column }
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(purchase => (
                <React.Fragment key={purchase._id}>
                  {purchase.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                          <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                          <td rowSpan={purchase.products.length}>{purchase.supplierName}</td>
                          <td rowSpan={purchase.products.length}>{purchase.storeName}</td> {/* Display Store Name}
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal.toFixed(2)}</td> {/* Format total to 2 decimal places}
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))} 
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {purchases.length} entries</div>
        </div>
      </div>

      {/* PurchaseFormModal component}
      <PurchaseFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handlePurchaseSubmit}
        purchase={currentPurchase} // Pass the current purchase for editing
      />

      {/* Detail Modal for Purchase }
      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Purchase Details</h2>
        {detailData && (
          <div>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Supplier Name:</strong> {detailData.supplierName}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p>
            <p><strong>Products:</strong></p>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>{product.product} - {product.qty} x ${product.subtotal.toFixed(2)}</li>
              ))}
            </ul>
            <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer /> {/* Toast notifications}
    </div>
  );
};

export default Purchases;*/



/*showing 0 entriesimport React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Purchases.css";
import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import PurchaseFormModal from './forms/PurchaseFormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const { storeName } = useParams();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` 
          : 'http://localhost:5000/api/v1/purchases';

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setPurchases(data.purchases || []); // Ensure it's an array
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases();
  }, [storeName]);

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null);
    setIsModalOpen(true);
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.purchase : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.purchase]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="filter-dropdown" className="filter-button">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="export-dropdown" className="export-button">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Supplier Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(purchases) && purchases.map(purchase => (
                <React.Fragment key={purchase._id}>
                  {Array.isArray(purchase.products) && purchase.products.map((product, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                          <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                          <td rowSpan={purchase.products.length}>{purchase.supplierName}</td>
                          <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                        </>
                      )}
                      <td>{product.product}</td>
                      <td>{product.qty}</td>
                      <td>${product.subtotal.toFixed(2)}</td>
                      <td>{product.note}</td>
                      <td>
                        <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                          <FaEye />
                        </button>
                        <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))} 
                </React.Fragment>
              ))} 
            </tbody>
          </table>
          <div className="table-footer">Showing {purchases.length} entries</div>
        </div>
      </div>

      <PurchaseFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handlePurchaseSubmit}
        purchase={currentPurchase}
      />

      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Purchase Details</h2>
        {detailData && (
          <div>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Supplier Name:</strong> {detailData.supplierName}</p>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p>
            <p><strong>Products:</strong></p>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>
                  {product.product} - {product.qty} units - ${product.subtotal.toFixed(2)}
                </li>
              ))}
            </ul>
            <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Purchases; showing 0 entries*/ 


/* all code working  but store code not working import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Purchases.css";
import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import PurchaseFormModal from './forms/PurchaseFormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const Purchases = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchases, setPurchases] = useState([]);
    const [currentPurchase, setCurrentPurchase] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const { storeName } = useParams();

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const url = storeName 
                    ? `http://localhost:5000/api/v1/purchases/${storeName}` 
                    : 'http://localhost:5000/api/v1/purchases';

                const response = await fetch(url);
                const data = await response.json();

                // Log response for debugging
                console.log("Fetched Data:", data);

                if (data.success) {
                    setPurchases(data.data || []); // Ensure it's an array based on your response structure
                    if (data.data.length === 0) {
                        toast.info("No purchases found.");
                    }
                } else {
                    toast.error(`Error: ${data.error || 'Unable to fetch purchases.'}`);
                }
            } catch (error) {
                toast.error(`Error: ${error.message}`);
            }
        };

        fetchPurchases();
    }, [storeName]);

    const handleAddPurchaseClick = () => {
        setCurrentPurchase(null);
        setIsModalOpen(true);
    };

    const handleEditPurchaseClick = (purchase) => {
        setCurrentPurchase(purchase);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handlePurchaseSubmit = async (purchaseData) => {
        try {
            let response, result;

            if (currentPurchase) {
                response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(purchaseData)
                });
                result = await response.json();
                if (result.success) {
                    setPurchases(prevPurchases => 
                        prevPurchases.map(purchase => 
                            purchase._id === currentPurchase._id ? result.data : purchase
                        )
                    );
                    toast.success('Purchase updated successfully!');
                } else {
                    toast.error(`Error: ${result.error}`);
                }
            } else {
                response = await fetch('http://localhost:5000/api/v1/purchases', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(purchaseData)
                });
                result = await response.json();
                if (result.success) {
                    setPurchases(prevPurchases => [...prevPurchases, result.data]);
                    toast.success('Purchase added successfully!');
                } else {
                    toast.error(`Error: ${result.error}`);
                }
            }

            setIsModalOpen(false);
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.success) {
                setPurchases(purchases.filter(purchase => purchase._id !== id));
                toast.success('Purchase deleted successfully!');
            } else {
                toast.error(`Error: ${result.error}`);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const openDetailModal = (data) => {
        setDetailData(data);
        setIsDetailModalOpen(true);
    };

    const closeDetailModal = () => setIsDetailModalOpen(false);

    const calculateTotalAmount = (products) => {
        return products.reduce((total, product) => total + product.subtotal, 0);
    };

    return (
        <div className="purchases-page">
            <DashboardSidebar />
            <div className="purchases-content">
                <div className="purchases-header">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="filter-dropdown" className="filter-button">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="export-dropdown" className="export-button">
                            Export
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <i className="bi bi-printer"></i> Print
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <i className="bi bi-file-earmark-excel"></i> XLS
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
                        Add Purchase
                    </button>
                </div>

                <div className="purchases-card">
                    <table className="table table-responsive table-transparent purchases-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference No</th>
                                <th>Supplier Name</th>
                                <th>Store Name</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(purchases) && purchases.length > 0 ? (
                                purchases.map(purchase => (
                                    <React.Fragment key={purchase._id}>
                                        {Array.isArray(purchase.products) && purchase.products.map((product, index) => (
                                            <tr key={index}>
                                                {index === 0 && (
                                                    <>
                                                        <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                                                        <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                                                        <td rowSpan={purchase.products.length}>{purchase.supplierName}</td>
                                                        <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                                                    </>
                                                )}
                                                <td>{product.product}</td>
                                                <td>{product.qty}</td>
                                                <td>${product.subtotal.toFixed(2)}</td>
                                                <td>{product.note}</td>
                                                <td>
                                                    <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                                                        <FaEye />
                                                    </button>
                                                    <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                                                        <FaEdit />
                                                    </button>
                                                    <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                                                        <FaTrashAlt />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))} 
                                    </React.Fragment>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center">No purchases found.</td>
                                </tr>
                            )} 
                        </tbody>
                    </table>
                    <div className="table-footer">Showing {purchases.length} entries</div>
                </div>
            </div>

            <PurchaseFormModal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                onSubmit={handlePurchaseSubmit}
                purchase={currentPurchase}
            />

            <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
                <h2>Purchase Details</h2>
                {detailData && (
                    <div>
                        <p><strong>Reference No:</strong> {detailData.refNo}</p>
                        <p><strong>Supplier Name:</strong> {detailData.supplierName}</p>
                        <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
                        <p><strong>Store Name:</strong> {detailData.storeName}</p>
                        <p><strong>Products:</strong></p>
                        <ul>
                            {detailData.products.map((product, index) => (
                                <li key={index}>
                                    {product.product} - {product.qty} units - ${product.subtotal.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
                    </div>
                )}
                <button onClick={closeDetailModal}>Close</button>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default Purchases;*/

/*aware import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Purchases.css";
import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import PurchaseFormModal from './forms/PurchaseFormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const { storeName } = useParams();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` 
          : 'http://localhost:5000/api/v1/purchases';

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          // Check which structure you're receiving and set accordingly
          if (Array.isArray(data.data)) {
            setPurchases(data.data); // If purchases are directly in data
          } else if (Array.isArray(data.purchases)) {
            setPurchases(data.purchases); // If purchases are in data.purchases
          } else {
            toast.error(`No purchases found.`);
          }
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases();
  }, [storeName]);

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null);
    setIsModalOpen(true);
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.data : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.data]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="filter-dropdown" className="filter-button">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="export-dropdown" className="export-button">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Supplier Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(purchases) && purchases.length > 0 ? (
                purchases.map(purchase => (
                  <React.Fragment key={purchase._id}>
                    {Array.isArray(purchase.products) && purchase.products.length > 0 && purchase.products.map((product, index) => (
                      <tr key={index}>
                        {index === 0 && (
                          <>
                            <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                            <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                            <td rowSpan={purchase.products.length}>{purchase.supplierName}</td>
                            <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                          </>
                        )}
                        <td>{product.product}</td>
                        <td>{product.qty}</td>
                        <td>${product.subtotal.toFixed(2)}</td>
                        <td>{product.note}</td>
                        <td>
                          <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                            <FaEye />
                          </button>
                          <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                            <FaEdit />
                          </button>
                          <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))} 
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No purchases found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="table-footer">Showing {purchases.length} entries</div>
        </div>
      </div>

      <PurchaseFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handlePurchaseSubmit}
        purchase={currentPurchase}
      />

      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Purchase Details</h2>
        {detailData && (
          <div>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Supplier Name:</strong> {detailData.supplierName}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
            <h3>Products:</h3>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>{product.product} - {product.qty} - ${product.subtotal.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Purchases;aware*/




import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Purchases.css";
import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import PurchaseFormModal from './forms/PurchaseFormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const Purchases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const { storeName } = useParams();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const url = storeName 
          ? `http://localhost:5000/api/v1/purchases/${storeName}` 
          : 'http://localhost:5000/api/v1/purchases';

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          // Check which structure you're receiving and set accordingly
          if (Array.isArray(data.purchases)) {
            setPurchases(data.purchases); // If purchases are in data.purchases
          } else if (Array.isArray(data.data)) {
            setPurchases(data.data); // If purchases are directly in data.data
          } else {
            toast.error(`No purchases found.`);
          }
        } else {
          toast.error(`Error: ${data.error}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchPurchases();
  }, [storeName]);

  const handleAddPurchaseClick = () => {
    setCurrentPurchase(null);
    setIsModalOpen(true);
  };

  const handleEditPurchaseClick = (purchase) => {
    setCurrentPurchase(purchase);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseSubmit = async (purchaseData) => {
    try {
      let response, result;

      if (currentPurchase) {
        response = await fetch(`http://localhost:5000/api/v1/purchases/${currentPurchase._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => 
            prevPurchases.map(purchase => 
              purchase._id === currentPurchase._id ? result.data : purchase
            )
          );
          toast.success('Purchase updated successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      } else {
        response = await fetch('http://localhost:5000/api/v1/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(purchaseData)
        });
        result = await response.json();
        if (result.success) {
          setPurchases(prevPurchases => [...prevPurchases, result.data]);
          toast.success('Purchase added successfully!');
        } else {
          toast.error(`Error: ${result.error}`);
        }
      }

      setIsModalOpen(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/purchases/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setPurchases(purchases.filter(purchase => purchase._id !== id));
        toast.success('Purchase deleted successfully!');
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const openDetailModal = (data) => {
    setDetailData(data);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.subtotal, 0);
  };

  return (
    <div className="purchases-page">
      <DashboardSidebar />
      <div className="purchases-content">
        <div className="purchases-header">
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="filter-dropdown" className="filter-button">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="export-dropdown" className="export-button">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i className="bi bi-printer"></i> Print
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <i className="bi bi-file-earmark-excel"></i> XLS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn btn-danger add-purchase-button" onClick={handleAddPurchaseClick}>
            Add Purchase
          </button>
        </div>

        <div className="purchases-card">
          <table className="table table-responsive table-transparent purchases-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Supplier Name</th>
                <th>Store Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(purchases) && purchases.length > 0 ? (
                purchases.map(purchase => (
                  <React.Fragment key={purchase._id}>
                    {Array.isArray(purchase.products) && purchase.products.length > 0 && purchase.products.map((product, index) => (
                      <tr key={index}>
                        {index === 0 && (
                          <>
                            <td rowSpan={purchase.products.length}>{new Date(purchase.date).toLocaleDateString()}</td>
                            <td rowSpan={purchase.products.length}>{purchase.refNo}</td>
                            <td rowSpan={purchase.products.length}>{purchase.supplier}</td>
                            <td rowSpan={purchase.products.length}>{purchase.storeName}</td>
                          </>
                        )}
                        <td>{product.product}</td>
                        <td>{product.qty}</td>
                        <td>${product.subtotal.toFixed(2)}</td>
                        <td>{product.note}</td>
                        <td>
                          <button className="btn btn-success btn-sm action-button" onClick={() => openDetailModal(purchase)}>
                            <FaEye />
                          </button>
                          <button className="btn btn-success btn-sm action-button" onClick={() => handleEditPurchaseClick(purchase)}>
                            <FaEdit />
                          </button>
                          <button className="btn btn-danger btn-sm action-button" onClick={() => handleDeleteClick(purchase._id)}>
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))} 
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No purchases found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="table-footer">Showing {purchases.length} entries</div>
        </div>
      </div>

      <PurchaseFormModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handlePurchaseSubmit}
        purchase={currentPurchase}
      />

      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal}>
        <h2>Purchase Details</h2>
        {detailData && (
          <div>
            <p><strong>Reference No:</strong> {detailData.refNo}</p>
            <p><strong>Supplier Name:</strong> {detailData.supplier}</p>
            <p><strong>Store Name:</strong> {detailData.storeName}</p>
            <p><strong>Date:</strong> {new Date(detailData.date).toLocaleDateString()}</p>
            <p><strong>Total Amount:</strong> ${calculateTotalAmount(detailData.products).toFixed(2)}</p>
            <h3>Products:</h3>
            <ul>
              {detailData.products.map((product, index) => (
                <li key={index}>{product.product} - {product.qty} - ${product.subtotal.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={closeDetailModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Purchases;
