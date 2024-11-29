

/*correctimport React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css';

const ProductFormModal = ({ show, handleClose, onSubmit, initialData }) => {
    const [description, setDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        price: '',
        originalPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        image: '',
        rating: '',
        reviews: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
    });

    useEffect(() => {
        if (initialData) {
            setProductData(initialData);
            setDescription(initialData.description || '');
        } else {
            setProductData({
                name: '',
                SKU: '',
                category: '',
                barcode: '',
                price: '',
                originalPrice: '',
                tax: '',
                brand: '',
                status: 'Active',
                canPurchasable: 'Yes',
                tags: '',
                image: '',
                rating: '',
                reviews: '',
                countInStock: '',
                maxPurchaseQuantity: '',
                lowStockQuantityWarning: '',
                weight: '',
                unit: '',
                refundable: 'No',
                showStockOut: 'Disable',
                isActive: 'Active',
            });
            setDescription('');
        }
    }, [initialData, show]);

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData({ ...productData, description: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductData({ ...productData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{initialData ? 'Edit Product' : 'Add New Product'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formProductName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter product name"
                                    value={productData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSku">
                                <Form.Label>SKU *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SKU"
                                    placeholder="Enter SKU"
                                    value={productData.SKU}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category *</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={productData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>-- Select Category --</option>
                                    <option>All in One</option>
                                    <option>Monitor</option>
                                    <option>Printer</option>
                                    <option>Laptop</option>
                                    <option>Desktop</option>
                                    <option>Routers</option>
                                    <option>Projects</option>
                                    <option>Laptops</option>
                                    <option>Tablets</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBarcode">
                                <Form.Label>Barcode *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="barcode"
                                    placeholder="Enter barcode"
                                    value={productData.barcode}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formTax">
                                <Form.Label>Tax</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="tax"
                                    value={productData.tax}
                                    onChange={handleChange}
                                >
                                    <option>-- Select Tax --</option>
                                    <option>5%</option>
                                    <option>12%</option>
                                    <option>18%</option>
                                    <option>28%</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="brand"
                                    value={productData.brand}
                                    onChange={handleChange}
                                >
                                    <option>-- Select Brand --</option>
                                    <option>Asus</option>
                                    <option>Acer</option>
                                    <option>Msi</option>
                                    <option>Lenovo</option>
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Hp</option>
                                    <option>Dell</option>
                                    <option>Microsoft</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formStatus">
                                <Form.Label>Status *</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Active"
                                    name="status"
                                    value="Active"
                                    checked={productData.status === "Active"}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Check
                                    type="radio"
                                    label="Inactive"
                                    name="status"
                                    value="Inactive"
                                    checked={productData.status === "Inactive"}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formCanPurchasable">
                                <Form.Label>Can Purchasable *</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="canPurchasable"
                                    value="Yes"
                                    checked={productData.canPurchasable === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="canPurchasable"
                                    value="No"
                                    checked={productData.canPurchasable === "No"}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {productData.image && (
                                    <img
                                        src={productData.image}
                                        alt="Product Preview"
                                        style={{ maxWidth: '100%', marginTop: '10px' }}
                                    />
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formRating">
                                <Form.Label>Rating *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="rating"
                                    placeholder="Enter rating"
                                    value={productData.rating}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formReviews">
                                <Form.Label>Reviews *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="reviews"
                                    placeholder="Enter reviews"
                                    value={productData.reviews}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrice">
                                <Form.Label>Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    placeholder="Enter price"
                                    value={productData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formOriginalPrice">
                                <Form.Label>Original Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="originalPrice"
                                    placeholder="Enter original price"
                                    value={productData.originalPrice}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {initialData ? 'Update Product' : 'Add Product'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductFormModal;correct*/


/*add seo fieldsimport React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Ensure this file has appropriate styling

// Required for screen reader accessibility
Modal.setAppElement('#root');

const ProductFormModal = ({ show, handleClose, onSubmit, initialData }) => {
    const [description, setDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        price: '',
        originalPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        images: [],
        rating: '',
        reviews: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
    });

    useEffect(() => {
        if (initialData) {
            setProductData({ ...initialData, images: initialData.images || [] });
            setDescription(initialData.description || '');
        } else {
            setProductData({
                name: '',
                SKU: '',
                category: '',
                barcode: '',
                price: '',
                originalPrice: '',
                tax: '',
                brand: '',
                status: 'Active',
                canPurchasable: 'Yes',
                tags: '',
                images: [],
                rating: '',
                reviews: '',
                countInStock: '',
                maxPurchaseQuantity: '',
                lowStockQuantityWarning: '',
                weight: '',
                unit: '',
                refundable: 'No',
                showStockOut: 'Disable',
                isActive: 'Active',
            });
            setDescription('');
        }
    }, [initialData, show]);

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData({ ...productData, description: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...productData.images];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedImages.push(reader.result);
                setProductData({ ...productData, images: updatedImages });
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index) => {
        const updatedImages = productData.images.filter((_, i) => i !== index);
        setProductData({ ...productData, images: updatedImages });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
        handleClose();
    };




   return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel={initialData ? 'Edit Product' : 'Add New Product'}
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div className="product-modal-header">
                <h2>{initialData ? 'Edit Product' : 'Add New Product'}</h2>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                value={productData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="SKU">SKU *</label>
                            <input
                                type="text"
                                id="SKU"
                                name="SKU"
                                placeholder="Enter SKU"
                                value={productData.SKU}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                required
                            >
                                <option>-- Select Category --</option>
                                <option>All in One</option>
                                <option>Monitor</option>
                                <option>Printer</option>
                                <option>Laptop</option>
                                <option>Desktop</option>
                                <option>Routers</option>
                                <option>Projects</option>
                                <option>Laptops</option>
                                <option>Tablets</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="barcode">Barcode *</label>
                            <input
                                type="text"
                                id="barcode"
                                name="barcode"
                                placeholder="Enter barcode"
                                value={productData.barcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="price">Price *</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={productData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalPrice">Original Price *</label>
                            <input
                                type="number"
                                id="originalPrice"
                                name="originalPrice"
                                placeholder="Enter original price"
                                value={productData.originalPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tax">Tax</label>
                            <select
                                id="tax"
                                name="tax"
                                value={productData.tax}
                                onChange={handleChange}
                            >
                                <option>-- Select Tax --</option>
                                <option>5%</option>
                                <option>12%</option>
                                <option>18%</option>
                                <option>28%</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleChange}
                            >
                                <option>-- Select Brand --</option>
                                <option>Asus</option>
                                <option>Acer</option>
                                <option>Msi</option>
                                <option>Lenovo</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Hp</option>
                                <option>Dell</option>
                                <option>Microsoft</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusActive"
                                    name="status"
                                    value="Active"
                                    checked={productData.status === "Active"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusActive">Active</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusInactive"
                                    name="status"
                                    value="Inactive"
                                    checked={productData.status === "Inactive"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusInactive">Inactive</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="canPurchasable">Can Purchasable *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableYes"
                                    name="canPurchasable"
                                    value="Yes"
                                    checked={productData.canPurchasable === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="canPurchasableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableNo"
                                    name="canPurchasable"
                                    value="No"
                                    checked={productData.canPurchasable === "No"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="canPurchasableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Enter tags (comma separated)"
                                value={productData.tags}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="images">Images</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                            />
                            <div className="image-preview-container">
                                {productData.images.map((image, index) => (
                                    <div key={index} className="image-preview-wrapper">
                                        <img src={image} alt={`Product ${index}`} className="image-preview" />
                                        <button
                                            type="button"
                                            className="image-remove-btn"
                                            onClick={() => removeImage(index)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="countInStock">Count in Stock *</label>
                            <input
                                type="number"
                                id="countInStock"
                                name="countInStock"
                                placeholder="Enter count in stock"
                                value={productData.countInStock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxPurchaseQuantity">Max Purchase Quantity</label>
                            <input
                                type="number"
                                id="maxPurchaseQuantity"
                                name="maxPurchaseQuantity"
                                placeholder="Enter max purchase quantity"
                                value={productData.maxPurchaseQuantity}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="lowStockQuantityWarning">Low Stock Quantity Warning</label>
                            <input
                                type="number"
                                id="lowStockQuantityWarning"
                                name="lowStockQuantityWarning"
                                placeholder="Enter low stock quantity warning"
                                value={productData.lowStockQuantityWarning}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                name="weight"
                                placeholder="Enter weight"
                                value={productData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="unit">Unit</label>
                            <input
                                type="text"
                                id="unit"
                                name="unit"
                                placeholder="Enter unit"
                                value={productData.unit}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="refundable">Refundable *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableYes"
                                    name="refundable"
                                    value="Yes"
                                    checked={productData.refundable === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="refundableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableNo"
                                    name="refundable"
                                    value="No"
                                    checked={productData.refundable === "No"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="refundableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                value={description}
                                onChange={handleDescriptionChange}
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1'}, { 'header': '2' }],
                                        ['bold', 'italic', 'underline'],
                                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                        ['link'],
                                        ['clean']
                                    ],
                                }}
                            />
                        </div>
                    </div>



 {/* Optional SEO Fields }
 <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="metaTitle">Meta Title</label>
                        <input
                            type="text"
                            id="metaTitle"
                            name="metaTitle"
                            placeholder="Enter meta title"
                            value={productData.metaTitle || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="metaDescription">Meta Description</label>
                        <input
                            type="text"
                            id="metaDescription"
                            name="metaDescription"
                            placeholder="Enter meta description"
                            value={productData.metaDescription || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="urlCorrection">URL Correction</label>
                        <input
                            type="text"
                            id="urlCorrection"
                            name="urlCorrection"
                            placeholder="Enter URL correction"
                            value={productData.urlCorrection || ''}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {initialData ? 'Save Changes' : 'Add Product'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProductFormModal;*/

 /*import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Ensure this file has appropriate styling

// Required for screen reader accessibility
Modal.setAppElement('#root');

const ProductFormModal = ({ show, handleClose, onSubmit, initialData }) => {
    const [description, setDescription] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        price: '',
        originalPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        images: [],
        rating: '',
        reviews: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
        metaTitle: '',
        metaDescription: '',
        urlCorrection: ''
    });

    useEffect(() => {
        if (initialData) {
            setProductData({ ...initialData, images: initialData.images || [] });
            setDescription(initialData.description || '');
            setMetaDescription(initialData.metaDescription || '');
        } else {
            setProductData({
                name: '',
                SKU: '',
                category: '',
                barcode: '',
                price: '',
                originalPrice: '',
                tax: '',
                brand: '',
                status: 'Active',
                canPurchasable: 'Yes',
                tags: '',
                images: [],
                rating: '',
                reviews: '',
                countInStock: '',
                maxPurchaseQuantity: '',
                lowStockQuantityWarning: '',
                weight: '',
                unit: '',
                refundable: 'No',
                showStockOut: 'Disable',
                isActive: 'Active',
                metaTitle: '',
                metaDescription: '',
                urlCorrection: ''
            });
            setDescription('');
            setMetaDescription('');
        }
    }, [initialData, show]);

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData((prevData) => ({ ...prevData, description: value }));
    };

    const handleMetaDescriptionChange = (value) => {
        setMetaDescription(value);
        setProductData((prevData) => ({ ...prevData, metaDescription: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...productData.images];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedImages.push(reader.result);
                setProductData((prevData) => ({ ...prevData, images: updatedImages }));
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index) => {
        const updatedImages = productData.images.filter((_, i) => i !== index);
        setProductData((prevData) => ({ ...prevData, images: updatedImages }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
        handleClose();
    };

    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel={initialData ? 'Edit Product' : 'Add New Product'}
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div className="product-modal-header">
                <h2>{initialData ? 'Edit Product' : 'Add New Product'}</h2>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                value={productData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="SKU">SKU *</label>
                            <input
                                type="text"
                                id="SKU"
                                name="SKU"
                                placeholder="Enter SKU"
                                value={productData.SKU}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                required
                            >
                                <option>-- Select Category --</option>
                                <option>All in One</option>
                                <option>Monitor</option>
                                <option>Printer</option>
                                <option>Laptop</option>
                                <option>Desktop</option>
                                <option>Routers</option>
                                <option>Projects</option>
                                <option>Laptops</option>
                                <option>Tablets</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="barcode">Barcode *</label>
                            <input
                                type="text"
                                id="barcode"
                                name="barcode"
                                placeholder="Enter barcode"
                                value={productData.barcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="price">Price *</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={productData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalPrice">Original Price *</label>
                            <input
                                type="number"
                                id="originalPrice"
                                name="originalPrice"
                                placeholder="Enter original price"
                                value={productData.originalPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tax">Tax</label>
                            <select
                                id="tax"
                                name="tax"
                                value={productData.tax}
                                onChange={handleChange}
                            >
                                <option>-- Select Tax --</option>
                                <option>5%</option>
                                <option>12%</option>
                                <option>18%</option>
                                <option>28%</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleChange}
                            >
                                <option>-- Select Brand --</option>
                                <option>Asus</option>
                                <option>Acer</option>
                                <option>Msi</option>
                                <option>Lenovo</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Hp</option>
                                <option>Dell</option>
                                <option>Microsoft</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusActive"
                                    name="status"
                                    value="Active"
                                    checked={productData.status === "Active"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusActive">Active</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusInactive"
                                    name="status"
                                    value="Inactive"
                                    checked={productData.status === "Inactive"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusInactive">Inactive</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="canPurchasable">Can Purchasable *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableYes"
                                    name="canPurchasable"
                                    value="Yes"
                                    checked={productData.canPurchasable === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="canPurchasableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableNo"
                                    name="canPurchasable"
                                    value="No"
                                    checked={productData.canPurchasable === "No"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="canPurchasableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Enter tags"
                                value={productData.tags}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="images">Images</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                            />
                            <div className="image-preview">
                                {productData.images.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image} alt={`Product Image ${index + 1}`} />
                                        <button type="button" onClick={() => removeImage(index)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                placeholder="Enter rating"
                                value={productData.rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviews">Reviews</label>
                            <input
                                type="number"
                                id="reviews"
                                name="reviews"
                                placeholder="Enter number of reviews"
                                value={productData.reviews}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="countInStock">Count in Stock</label>
                            <input
                                type="number"
                                id="countInStock"
                                name="countInStock"
                                placeholder="Enter count in stock"
                                value={productData.countInStock}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxPurchaseQuantity">Max Purchase Quantity</label>
                            <input
                                type="number"
                                id="maxPurchaseQuantity"
                                name="maxPurchaseQuantity"
                                placeholder="Enter max purchase quantity"
                                value={productData.maxPurchaseQuantity}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="lowStockQuantityWarning">Low Stock Quantity Warning</label>
                            <input
                                type="number"
                                id="lowStockQuantityWarning"
                                name="lowStockQuantityWarning"
                                placeholder="Enter low stock quantity warning"
                                value={productData.lowStockQuantityWarning}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                name="weight"
                                placeholder="Enter weight"
                                value={productData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="unit">Unit</label>
                            <input
                                type="text"
                                id="unit"
                                name="unit"
                                placeholder="Enter unit"
                                value={productData.unit}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="refundable">Refundable *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableYes"
                                    name="refundable"
                                    value="Yes"
                                    checked={productData.refundable === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="refundableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableNo"
                                    name="refundable"
                                    value="No"
                                    checked={productData.refundable === "No"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="refundableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="showStockOut">Show Stock Out *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutEnable"
                                    name="showStockOut"
                                    value="Enable"
                                    checked={productData.showStockOut === "Enable"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="showStockOutEnable">Enable</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutDisable"
                                    name="showStockOut"
                                    value="Disable"
                                    checked={productData.showStockOut === "Disable"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="showStockOutDisable">Disable</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isActive">Is Active *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveYes"
                                    name="isActive"
                                    value="Yes"
                                    checked={productData.isActive === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="isActiveYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveNo"
                                    name="isActive"
                                    value="No"
                                    checked={productData.isActive === "No"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="isActiveNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                                type="text"
                                id="metaTitle"
                                name="metaTitle"
                                placeholder="Enter meta title"
                                value={productData.metaTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="urlCorrection">URL Correction</label>
                            <input
                                type="text"
                                id="urlCorrection"
                                name="urlCorrection"
                                placeholder="Enter URL correction"
                                value={productData.urlCorrection}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                value={description}
                                onChange={handleDescriptionChange}
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1'}, { 'header': '2' }],
                                        ['bold', 'italic', 'underline'],
                                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                        ['link', 'image'],
                                        ['clean']
                                    ],
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaDescription">Meta Description</label>
                            <ReactQuill
                                value={metaDescription}
                                onChange={handleMetaDescriptionChange}
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1'}, { 'header': '2' }],
                                        ['bold', 'italic', 'underline'],
                                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                        ['link', 'image'],
                                        ['clean']
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {initialData ? 'Save Changes' : 'Add Product'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProductFormModal;base64*/

/*import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Ensure this file has appropriate styling
import { FaYenSign } from 'react-icons/fa';

// Required for screen reader accessibility
Modal.setAppElement('#root');
// Define modules for ReactQuill editor
const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
    ]
};


const ProductFormModal = ({ show, handleClose, onSubmit, initialData }) => {
    const [description, setDescription] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    
    
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        price: '',
        originalPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        images: [], // URLs instead of Base64 data
        rating: '',
        reviews: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
        metaTitle: '',
        metaDescription: '',
        urlCorrection: ''
    });

    useEffect(() => {
        if (initialData) {
            setProductData({ ...initialData, images: initialData.images || [] });
            setDescription(initialData.description || '');
            setMetaDescription(initialData.metaDescription || '');
        } else {
            setProductData({
                name: '',
                SKU: '',
                category: '',
                barcode: '',
                price: '',
                originalPrice: '',
                tax: '',
                brand: '',
                status: 'Active',
                canPurchasable: 'Yes',
                tags: '',
                images: [], // URLs instead of Base64 data
                rating: '',
                reviews: '',
                countInStock: '',
                maxPurchaseQuantity: '',
                lowStockQuantityWarning: '',
                weight: '',
                unit: '',
                refundable: 'No',
                showStockOut: 'Disable',
                isActive: 'Active',
                metaTitle: '',
                metaDescription: '',
                urlCorrection: ''
            });
            setDescription('');
            setMetaDescription('');
        }
    }, [initialData, show]);

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData((prevData) => ({ ...prevData, description: value }));
    };

    const handleMetaDescriptionChange = (value) => {
        setMetaDescription(value);
        setProductData((prevData) => ({ ...prevData, metaDescription: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };



    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files); // Handle multiple files
        const updatedImages = [...productData.images];
        const formData = new FormData(); // Create one FormData object
    
        files.forEach(file => {
            formData.append('images', file); // Use 'images' to match backend array
        });
    
        try {
            const response = await fetch('http://localhost:5000/api/v1/uploads/upload', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const result = await response.json();
                result.filePaths.forEach((url) => {
                    updatedImages.push(url); // Assuming the server responds with an array of file paths
                });
    
                // Update product data with the uploaded image URLs
                setProductData((prevData) => ({ ...prevData, images: updatedImages }));
            } else {
                console.error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    
    // Remove an image from the list
    const removeImage = (index) => {
        const updatedImages = productData.images.filter((_, i) => i !== index);
        setProductData((prevData) => ({ ...prevData, images: updatedImages }));
    };
   
    
    
    // Submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData); // Submit product data with image URLs
        handleClose();
    };



    

    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel={initialData ? 'Edit Product' : 'Add New Product'}
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div className="product-modal-header">
                <h2>{initialData ? 'Edit Product' : 'Add New Product'}</h2>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="form-row">
                        {/* Form fields for product details }
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                value={productData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="SKU">SKU *</label>
                            <input
                                type="text"
                                id="SKU"
                                name="SKU"
                                placeholder="Enter SKU"
                                value={productData.SKU}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                required
                            >
                                <option>-- Select Category --</option>
                                <option>All in One</option>
                                <option>Monitor</option>
                                <option>Printer</option>
                                <option>Laptop</option>
                                <option>Desktop</option>
                                <option>Routers</option>
                                <option>Projects</option>
                                <option>Laptops</option>
                                <option>Tablets</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="barcode">Barcode *</label>
                            <input
                                type="text"
                                id="barcode"
                                name="barcode"
                                placeholder="Enter barcode"
                                value={productData.barcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="price">Price *</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={productData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalPrice">Original Price *</label>
                            <input
                                type="number"
                                id="originalPrice"
                                name="originalPrice"
                                placeholder="Enter original price"
                                value={productData.originalPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tax">Tax</label>
                            <select
                                id="tax"
                                name="tax"
                                value={productData.tax}
                                onChange={handleChange}
                            >
                                <option>-- Select Tax --</option>
                                <option>5%</option>
                                <option>12%</option>
                                <option>18%</option>
                                <option>28%</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleChange}
                            >
                                <option>-- Select Brand --</option>
                                <option>Asus</option>
                                <option>Acer</option>
                                <option>Msi</option>
                                <option>Lenovo</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Hp</option>
                                <option>Dell</option>
                                <option>Microsoft</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusActive"
                                    name="status"
                                    value="Active"
                                    checked={productData.status === "Active"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusActive">Active</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusInactive"
                                    name="status"
                                    value="Inactive"
                                    checked={productData.status === "Inactive"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="statusInactive">Inactive</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="canPurchasable">Can Purchasable</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableYes"
                                    name="canPurchasable"
                                    value="Yes"
                                    checked={productData.canPurchasable === "Yes"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="canPurchasableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableNo"
                                    name="canPurchasable"
                                    value="No"
                                    checked={productData.canPurchasable === "No"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="canPurchasableNo">No</label>
                            </div>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Enter tags (comma separated)"
                                value={productData.tags}
                                onChange={handleChange}
                            />
                        </div>




<div className="form-group">
    <label htmlFor="images">Images</label>
    <input
        type="file"
        id="images"
        name="images"  // Change this to 'images' to match backend field
        accept="image/*"
        multiple       // Allow multiple images
        onChange={handleImageChange}
    />
    <div className="image-preview">
        {productData.images.map((url, index) => (
            <div key={index} className="image-item">
                <img src={url} alt={`Preview ${index}`} />
                <button type="button" onClick={() => removeImage(index)}>Remove</button>
            </div>
        ))}
    </div>
</div>
  </div>



                





                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="Enter rating"
                                value={productData.rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviews">Reviews</label>
                            <input
                                type="number"
                                id="reviews"
                                name="reviews"
                                min="0"
                                placeholder="Enter number of reviews"
                                value={productData.reviews}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="countInStock">Count in Stock</label>
                            <input
                                type="number"
                                id="countInStock"
                                name="countInStock"
                                placeholder="Enter stock count"
                                value={productData.countInStock}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxPurchaseQuantity">Max Purchase Quantity</label>
                            <input
                                type="number"
                                id="maxPurchaseQuantity"
                                name="maxPurchaseQuantity"
                                placeholder="Enter max purchase quantity"
                                value={productData.maxPurchaseQuantity}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="lowStockQuantityWarning">Low Stock Quantity Warning</label>
                            <input
                                type="number"
                                id="lowStockQuantityWarning"
                                name="lowStockQuantityWarning"
                                placeholder="Enter low stock warning quantity"
                                value={productData.lowStockQuantityWarning}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                name="weight"
                                placeholder="Enter weight"
                                value={productData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="unit">Unit</label>
                            <input
                                type="text"
                                id="unit"
                                name="unit"
                                placeholder="Enter unit"
                                value={productData.unit}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="refundable">Refundable</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableYes"
                                    name="refundable"
                                    value="Yes"
                                    checked={productData.refundable === "Yes"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="refundableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableNo"
                                    name="refundable"
                                    value="No"
                                    checked={productData.refundable === "No"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="refundableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="showStockOut">Show Stock Out</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutEnable"
                                    name="showStockOut"
                                    value="Enable"
                                    checked={productData.showStockOut === "Enable"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="showStockOutEnable">Enable</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutDisable"
                                    name="showStockOut"
                                    value="Disable"
                                    checked={productData.showStockOut === "Disable"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="showStockOutDisable">Disable</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isActive">Is Active</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveYes"
                                    name="isActive"
                                    value="Active"
                                    checked={productData.isActive === "Active"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="isActiveYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveNo"
                                    name="isActive"
                                    value="Inactive"
                                    checked={productData.isActive === "Inactive"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="isActiveNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                                type="text"
                                id="metaTitle"
                                name="metaTitle"
                                placeholder="Enter meta title"
                                value={productData.metaTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="urlCorrection">URL Correction</label>
                            <input
                                type="text"
                                id="urlCorrection"
                                name="urlCorrection"
                                placeholder="Enter URL correction"
                                value={productData.urlCorrection}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                value={description}
                                onChange={handleDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaDescription">Meta Description</label>
                            <ReactQuill
                                value={metaDescription}
                                onChange={handleMetaDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    




                </div>
                <div className="modal-footer">
                    <button type="button" className="cancel-btn" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="submit-btn">
                        {initialData ? 'Update Product' : 'Add Product'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProductFormModal; gooddddd*/









import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Ensure this file has appropriate styling
import { FaYenSign } from 'react-icons/fa';

// Required for screen reader accessibility
Modal.setAppElement('#root');
// Define modules for ReactQuill editor
const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
    ]
};


const ProductFormModal = ({ show, handleClose, onSubmit, initialData }) => {
    const [description, setDescription] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    
    
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        price: '',
        originalPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        images: [], // URLs instead of Base64 data
        rating: '',
        reviews: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
        metaTitle: '',
        metaDescription: '',
        urlCorrection: '',
        storeName: '' // Add stockLocation field here
    });

    useEffect(() => {
        if (initialData) {
            setProductData({ ...initialData, images: initialData.images || [] });
            setDescription(initialData.description || '');
            setMetaDescription(initialData.metaDescription || '');
        } else {
            setProductData({
                name: '',
                SKU: '',
                category: '',
                barcode: '',
                price: '',
                originalPrice: '',
                tax: '',
                brand: '',
                status: 'Active',
                canPurchasable: 'Yes',
                tags: '',
                images: [], // URLs instead of Base64 data
                rating: '',
                reviews: '',
                countInStock: '',
                maxPurchaseQuantity: '',
                lowStockQuantityWarning: '',
                weight: '',
                unit: '',
                refundable: 'No',
                showStockOut: 'Disable',
                isActive: 'Active',
                metaTitle: '',
                metaDescription: '',
                urlCorrection: '',
                storeName: '' // Add stockLocation field here
            });
            setDescription('');
            setMetaDescription('');
        }
    }, [initialData, show]);

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData((prevData) => ({ ...prevData, description: value }));
    };

    const handleMetaDescriptionChange = (value) => {
        setMetaDescription(value);
        setProductData((prevData) => ({ ...prevData, metaDescription: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };



    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files); // Handle multiple files
        const updatedImages = [...productData.images];
        const formData = new FormData(); // Create one FormData object
    
        files.forEach(file => {
            formData.append('images', file); // Use 'images' to match backend array
        });
    
        try {
            const response = await fetch('http://localhost:5000/api/v1/uploads/upload', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const result = await response.json();
                result.filePaths.forEach((url) => {
                    updatedImages.push(url); // Assuming the server responds with an array of file paths
                });
    
                // Update product data with the uploaded image URLs
                setProductData((prevData) => ({ ...prevData, images: updatedImages }));
            } else {
                console.error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    
    // Remove an image from the list
    const removeImage = (index) => {
        const updatedImages = productData.images.filter((_, i) => i !== index);
        setProductData((prevData) => ({ ...prevData, images: updatedImages }));
    };
   
    const handleStoreChange = (e) => {
        setProductData((prev) => ({ ...prev, storeName: e.target.value }));
    };

    const handleAddStore = () => {
        // Logic to open a modal or navigate to add a new store
        alert("Add new store functionality coming soon!");
    };

    
    // Submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData); // Submit product data with image URLs
        handleClose();
    };



    

    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel={initialData ? 'Edit Product' : 'Add New Product'}
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div className="product-modal-header">
                <h2>{initialData ? 'Edit Product' : 'Add New Product'}</h2>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="form-row">
                        {/* Form fields for product details */}
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                value={productData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="SKU">SKU *</label>
                            <input
                                type="text"
                                id="SKU"
                                name="SKU"
                                placeholder="Enter SKU"
                                value={productData.SKU}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                required
                            >
                                <option>-- Select Category --</option>
                                <option>All in One</option>
                                <option>Monitor</option>
                                <option>Printer</option>
                                <option>Laptop</option>
                                <option>Desktop</option>
                                <option>Routers</option>
                                <option>Projects</option>
                                <option>Laptops</option>
                                <option>Tablets</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="barcode">Barcode *</label>
                            <input
                                type="text"
                                id="barcode"
                                name="barcode"
                                placeholder="Enter barcode"
                                value={productData.barcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="price">Price *</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={productData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalPrice">Original Price *</label>
                            <input
                                type="number"
                                id="originalPrice"
                                name="originalPrice"
                                placeholder="Enter original price"
                                value={productData.originalPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tax">Tax</label>
                            <select
                                id="tax"
                                name="tax"
                                value={productData.tax}
                                onChange={handleChange}
                            >
                                <option>-- Select Tax --</option>
                                <option>5%</option>
                                <option>12%</option>
                                <option>18%</option>
                                <option>28%</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleChange}
                            >
                                <option>-- Select Brand --</option>
                                <option>Asus</option>
                                <option>Acer</option>
                                <option>Msi</option>
                                <option>Lenovo</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Hp</option>
                                <option>Dell</option>
                                <option>Microsoft</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status *</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusActive"
                                    name="status"
                                    value="Active"
                                    checked={productData.status === "Active"}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="statusActive">Active</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="statusInactive"
                                    name="status"
                                    value="Inactive"
                                    checked={productData.status === "Inactive"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="statusInactive">Inactive</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="canPurchasable">Can Purchasable</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableYes"
                                    name="canPurchasable"
                                    value="Yes"
                                    checked={productData.canPurchasable === "Yes"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="canPurchasableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="canPurchasableNo"
                                    name="canPurchasable"
                                    value="No"
                                    checked={productData.canPurchasable === "No"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="canPurchasableNo">No</label>
                            </div>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Enter tags (comma separated)"
                                value={productData.tags}
                                onChange={handleChange}
                            />
                        </div>




<div className="form-group">
    <label htmlFor="images">Images</label>
    <input
        type="file"
        id="images"
        name="images"  // Change this to 'images' to match backend field
        accept="image/*"
        multiple       // Allow multiple images
        onChange={handleImageChange}
    />
    <div className="image-preview">
        {productData.images.map((url, index) => (
            <div key={index} className="image-item">
                <img src={url} alt={`Preview ${index}`} />
                <button type="button" onClick={() => removeImage(index)}>Remove</button>
            </div>
        ))}
    </div>
</div>
  </div>



                





                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="Enter rating"
                                value={productData.rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviews">Reviews</label>
                            <input
                                type="number"
                                id="reviews"
                                name="reviews"
                                min="0"
                                placeholder="Enter number of reviews"
                                value={productData.reviews}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="countInStock">Count in Stock</label>
                            <input
                                type="number"
                                id="countInStock"
                                name="countInStock"
                                placeholder="Enter stock count"
                                value={productData.countInStock}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxPurchaseQuantity">Max Purchase Quantity</label>
                            <input
                                type="number"
                                id="maxPurchaseQuantity"
                                name="maxPurchaseQuantity"
                                placeholder="Enter max purchase quantity"
                                value={productData.maxPurchaseQuantity}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="lowStockQuantityWarning">Low Stock Quantity Warning</label>
                            <input
                                type="number"
                                id="lowStockQuantityWarning"
                                name="lowStockQuantityWarning"
                                placeholder="Enter low stock warning quantity"
                                value={productData.lowStockQuantityWarning}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                name="weight"
                                placeholder="Enter weight"
                                value={productData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="unit">Unit</label>
                            <input
                                type="text"
                                id="unit"
                                name="unit"
                                placeholder="Enter unit"
                                value={productData.unit}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="refundable">Refundable</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableYes"
                                    name="refundable"
                                    value="Yes"
                                    checked={productData.refundable === "Yes"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="refundableYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="refundableNo"
                                    name="refundable"
                                    value="No"
                                    checked={productData.refundable === "No"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="refundableNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="showStockOut">Show Stock Out</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutEnable"
                                    name="showStockOut"
                                    value="Enable"
                                    checked={productData.showStockOut === "Enable"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="showStockOutEnable">Enable</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="showStockOutDisable"
                                    name="showStockOut"
                                    value="Disable"
                                    checked={productData.showStockOut === "Disable"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="showStockOutDisable">Disable</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isActive">Is Active</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveYes"
                                    name="isActive"
                                    value="Active"
                                    checked={productData.isActive === "Active"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="isActiveYes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="isActiveNo"
                                    name="isActive"
                                    value="Inactive"
                                    checked={productData.isActive === "Inactive"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="isActiveNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                                type="text"
                                id="metaTitle"
                                name="metaTitle"
                                placeholder="Enter meta title"
                                value={productData.metaTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="urlCorrection">URL Correction</label>
                            <input
                                type="text"
                                id="urlCorrection"
                                name="urlCorrection"
                                placeholder="Enter URL correction"
                                value={productData.urlCorrection}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                value={description}
                                onChange={handleDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaDescription">Meta Description</label>
                            <ReactQuill
                                value={metaDescription}
                                onChange={handleMetaDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    

                    <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="storeName">Store</label>
                        <select
                            id="storeName"
                            name="storeName"
                            value={productData.storeName}
                            onChange={handleStoreChange}
                        >
                            <option value="">Select Store</option>
                            <option value="Crown Excel">Crown Excel</option>
                            <option value="Aljasara">Aljasara</option>
                            <option value="WH1">WH1</option>
                            {/* Add more store options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={handleAddStore}>
                            Add New Store
                        </button>
                    </div>
                </div>



                </div>
                <div className="modal-footer">
                    <button type="button" className="cancel-btn" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="submit-btn">
                        {initialData ? 'Update Product' : 'Add Product'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProductFormModal;

  

/*

import react from react;
import toastifier from toast;
import { Modal, Button, }

import default modal,
import productpage from product.css
import productform from productform.css

const ProductFormModal = ({ open, onClose, initialData, onsubmit =>
    productData, setProductData, onImageChange, onGalleryChange }) => {
      setProduct Data, setTimer Data, set newChange, Image ,
      const [description, setDescription] = useState(initialData?.description?? ''
);
)
const  product form modal =({open, onCLose, initialData, onSubmit })
  }})

<div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                                type="text"
                                id="metaTitle"
                                name="metaTitle"
                                placeholder="Enter meta title"
                                value={productData.metaTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="urlCorrection">URL Correction</label>
                            <input
                                type="text"
                                id="urlCorrection"
                                name="urlCorrection"
                                placeholder="Enter URL correction"
                                value={productData.urlCorrection}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                value={description}
                                onChange={handleDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="metaDescription">Meta Description</label>
                            <ReactQuill
                                value={metaDescription}
                                onChange={handleMetaDescriptionChange}
                                modules={modules}
                            />
                        </div>
                    </div>
                    




                </div>
                <div className="modal-footer">
                    <button type="button" className="cancel-btn" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="submit-btn">
                        {initialData ? 'Update Product' : 'Add Product'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProductFormModal;

  

/*

import react from react;
import toastifier from toast;
import { Modal, Button, }

import default modal,
import productpage from product.css
import productform from productform.css

const ProductFormModal = ({ open, onClose, initialData, onsubmit =>
    productData, setProductData, onImageChange, onGalleryChange }) => {
      setProduct Data, setTimer Data, set newChange, Image ,
      const [description, setDescription] = useState(initialData?.description?? ''
);
)
const  product form modal =({open, onCLose, initialData, onSubmit })
  }})
     const productFormModal =({
     setProduct,newTime, setDate
     newDate, newDate,
     import default modal,
import productpage from product.css
import productform from productform.css
     import laptopPage from product.css
     import ReactQuill from 'quill';
     import modules from './quill-modules';
     import formats from './quill-formats';
     import { Modal, Button, Form, Input, Select, } from 'react-bootstrap';
     import 'bootstrap/dist/css/bootstrap.min.css';
     import 'quill/dist/quill.snow.css';
     import { useEffect,useState, useState}
     import [toastifier,rectifier,useState,
     
     import (effect,Hook,
     useState, useEffect, useState} from'react';)
     
     
     })







*/





  









  
