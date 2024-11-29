/*react quilll import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './ProductFormModal.css'; // Create a separate CSS file for custom styling

const ProductFormModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formProductName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSku">
                                <Form.Label>SKU *</Form.Label>
                                <Form.Control type="text" placeholder="Enter SKU" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category *</Form.Label>
                                <Form.Control as="select">
                                    <option>--</option>
                                    {/* Add options here }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBarcode">
                                <Form.Label>Barcode *</Form.Label>
                                <Form.Control type="text" placeholder="Enter barcode" />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Repeat similar structure for other fields }
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBuyingPrice">
                                <Form.Label>Buying Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter buying price" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSellingPrice">
                                <Form.Label>Selling Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter selling price" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formTax">
                                <Form.Label>Tax</Form.Label>
                                <Form.Control as="select">
                                    <option>--</option>
                                    {/* Add options here }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type="text" placeholder="Enter brand" />
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
                                    id="active"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Inactive"
                                    name="status"
                                    id="inactive"
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
                                    id="yes"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="canPurchasable"
                                    id="no"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Add other rows for fields like Show Stock Out, Refundable, etc. }
                    <Row>
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control type="text" placeholder="Enter tags" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter description" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductFormModal;form ok with react quill*/




/*without category options brnd import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Create a separate CSS file for custom styling

const ProductFormModal = ({ show, handleClose }) => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formProductName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSku">
                                <Form.Label>SKU *</Form.Label>
                                <Form.Control type="text" placeholder="Enter SKU" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category *</Form.Label>
                                <Form.Control as="select">
                                    <option>--</option>
                                    {/* Add options here }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBarcode">
                                <Form.Label>Barcode *</Form.Label>
                                <Form.Control type="text" placeholder="Enter barcode" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBuyingPrice">
                                <Form.Label>Buying Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter buying price" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSellingPrice">
                                <Form.Label>Selling Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter selling price" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formTax">
                                <Form.Label>Tax</Form.Label>
                                <Form.Control as="select">
                                    <option>--</option>
                                    {/* Add options here }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type="text" placeholder="Enter brand" />
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
                                    id="active"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Inactive"
                                    name="status"
                                    id="inactive"
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
                                    id="yes"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="canPurchasable"
                                    id="no"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Add other rows for fields like Show Stock Out, Refundable, etc. }
                    <Row>
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control type="text" placeholder="Enter tags" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <ReactQuill
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    theme="snow"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'align': [] }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ]
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductFormModal;without catgoey options */



/*add new without import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Create a separate CSS file for custom styling

const ProductFormModal = ({ show, handleClose }) => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formProductName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSku">
                                <Form.Label>SKU *</Form.Label>
                                <Form.Control type="text" placeholder="Enter SKU" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category *</Form.Label>
                                <Form.Control as="select">
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
                                <Form.Control type="text" placeholder="Enter barcode" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBuyingPrice">
                                <Form.Label>Buying Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter buying price" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSellingPrice">
                                <Form.Label>Selling Price *</Form.Label>
                                <Form.Control type="number" placeholder="Enter selling price" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formTax">
                                <Form.Label>Tax</Form.Label>
                                <Form.Control as="select">
                                    <option>-- Select Tax --</option>
                                    {/* Add tax options here }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control as="select">
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
                                    id="active"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Inactive"
                                    name="status"
                                    id="inactive"
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
                                    id="yes"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="canPurchasable"
                                    id="no"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Add other rows for fields like Show Stock Out, Refundable, etc. }
                    <Row>
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control type="text" placeholder="Enter tags" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <ReactQuill
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    theme="snow"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'align': [] }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ]
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductFormModal;*/




/*withouit submit import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Create a separate CSS file for custom styling

const ProductFormModal = ({ show, handleClose }) => {
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([
        'All in One', 'Monitor', 'Printer', 'Laptop', 'Desktop',
        'Routers', 'Projects', 'Laptops', 'Tablets'
    ]);
    const [brands, setBrands] = useState([
        'Asus', 'Acer', 'Msi', 'Lenovo', 'Apple', 'Samsung', 
        'Hp', 'Dell', 'Microsoft'
    ]);
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [showAddBrandModal, setShowAddBrandModal] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [newBrand, setNewBrand] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleAddCategory = () => {
        setShowAddCategoryModal(true);
    };

    const handleAddBrand = () => {
        setShowAddBrandModal(true);
    };

    const handleSaveCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
        }
        setNewCategory('');
        setShowAddCategoryModal(false);
    };

    const handleSaveBrand = () => {
        if (newBrand && !brands.includes(newBrand)) {
            setBrands([...brands, newBrand]);
        }
        setNewBrand('');
        setShowAddBrandModal(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formProductName">
                                    <Form.Label>Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formSku">
                                    <Form.Label>SKU *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter SKU" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category *</Form.Label>
                                    <Form.Control as="select">
                                        <option>-- Select Category --</option>
                                        {categories.map((cat, index) => (
                                            <option key={index}>{cat}</option>
                                        ))}
                                        <option value="add-new" onClick={handleAddCategory}>Add New...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBarcode">
                                    <Form.Label>Barcode *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter barcode" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formBuyingPrice">
                                    <Form.Label>Buying Price *</Form.Label>
                                    <Form.Control type="number" placeholder="Enter buying price" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formSellingPrice">
                                    <Form.Label>Selling Price *</Form.Label>
                                    <Form.Control type="number" placeholder="Enter selling price" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formTax">
                                    <Form.Label>Tax</Form.Label>
                                    <Form.Control as="select">
                                        <option>-- Select Tax --</option>
                                        {/* Add tax options here }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBrand">
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control as="select">
                                        <option>-- Select Brand --</option>
                                        {brands.map((brand, index) => (
                                            <option key={index}>{brand}</option>
                                        ))}
                                        <option value="add-new" onClick={handleAddBrand}>Add New...</option>
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
                                        id="active"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Inactive"
                                        name="status"
                                        id="inactive"
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
                                        id="yes"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="canPurchasable"
                                        id="no"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* Add other rows for fields like Show Stock Out, Refundable, etc. }
                        <Row>
                            <Col>
                                <Form.Group controlId="formTags">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tags" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <ReactQuill
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        theme="snow"
                                        modules={{
                                            toolbar: [
                                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                [{ 'align': [] }],
                                                ['link', 'image', 'video'],
                                                ['clean']
                                            ]
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Adding Category }
            <Modal show={showAddCategoryModal} onHide={() => setShowAddCategoryModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNewCategory">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new category"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddCategoryModal(false)}>
                        Close
                    </Button>``
                    <Button variant="danger" onClick={handleSaveCategory}>
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Adding Brand }
            <Modal show={showAddBrandModal} onHide={() => setShowAddBrandModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNewBrand">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new brand"
                                value={newBrand}
                                onChange={(e) => setNewBrand(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddBrandModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSaveBrand}>
                        Add Brand
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductFormModal;without submission*/
/*some field missing cant add product import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css'; // Create a separate CSS file for custom styling

const ProductFormModal = ({ show, handleClose, addProduct }) => {
    const [description, setDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        sku: '',
        category: '',
        barcode: '',
        originalPrice: '',
        price: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        // Add other fields as needed
    });
    const [categories, setCategories] = useState([
        'All in One', 'Monitor', 'Printer', 'Laptop', 'Desktop',
        'Routers', 'Projects', 'Laptops', 'Tablets'
    ]);
    const [brands, setBrands] = useState([
        'Asus', 'Acer', 'Msi', 'Lenovo', 'Apple', 'Samsung', 
        'Hp', 'Dell', 'Microsoft'
    ]);
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [showAddBrandModal, setShowAddBrandModal] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [newBrand, setNewBrand] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleAddCategory = () => {
        setShowAddCategoryModal(true);
    };

    const handleAddBrand = () => {
        setShowAddBrandModal(true);
    };

    const handleSaveCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
        }
        setNewCategory('');
        setShowAddCategoryModal(false);
    };

    const handleSaveBrand = () => {
        if (newBrand && !brands.includes(newBrand)) {
            setBrands([...brands, newBrand]);
        }
        setNewBrand('');
        setShowAddBrandModal(false);
    };

    const handleSubmit = () => {
        // Call addProduct function passed via props to add the product
        addProduct(productData);
        handleClose(); // Close modal after adding product
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formSku">
                                    <Form.Label>SKU *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="sku"
                                        placeholder="Enter SKU"
                                        value={productData.sku}
                                        onChange={handleChange}
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
                                    >
                                        <option>-- Select Category --</option>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat}>{cat}</option>
                                        ))}
                                        <option value="add-new" onClick={handleAddCategory}>Add New...</option>
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
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formOriginalPrice">
                                    <Form.Label>Original Price *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="originalPrice"
                                        placeholder="Enter original price"
                                        value={productData.originalPrice}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        placeholder="Enter selling price"
                                        value={productData.price}
                                        onChange={handleChange}
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
                                        {/* Add tax options here }
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
                                        {brands.map((brand, index) => (
                                            <option key={index} value={brand}>{brand}</option>
                                        ))}
                                        <option value="add-new" onClick={handleAddBrand}>Add New...</option>
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
                                        checked={productData.status === 'Active'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Inactive"
                                        name="status"
                                        value="Inactive"
                                        checked={productData.status === 'Inactive'}
                                        onChange={handleChange}
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
                                        checked={productData.canPurchasable === 'Yes'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="canPurchasable"
                                        value="No"
                                        checked={productData.canPurchasable === 'No'}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* Add other rows for fields like Show Stock Out, Refundable, etc. }
                        <Row>
                            <Col>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <ReactQuill
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        theme="snow"
                                        modules={{
                                            toolbar: [
                                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                [{ 'align': [] }],
                                                ['link', 'image', 'video'],
                                                ['clean']
                                            ]
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Adding Category }
            <Modal show={showAddCategoryModal} onHide={() => setShowAddCategoryModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNewCategory">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new category"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddCategoryModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSaveCategory}>
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Adding Brand }
            <Modal show={showAddBrandModal} onHide={() => setShowAddBrandModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNewBrand">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new brand"
                                value={newBrand}
                                onChange={(e) => setNewBrand(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddBrandModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSaveBrand}>
                        Add Brand
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductFormModal;*/




/*import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css';

const ProductFormModal = ({ show, handleClose, onSubmit }) => {
    const [description, setDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        buyingPrice: '',
        sellingPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
    });

    const handleDescriptionChange = (value) => {
        setDescription(value);
        setProductData({ ...productData, description: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
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
                            <Form.Group controlId="formBuyingPrice">
                                <Form.Label>Buying Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="buyingPrice"
                                    placeholder="Enter buying price"
                                    value={productData.buyingPrice}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSellingPrice">
                                <Form.Label>Selling Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="sellingPrice"
                                    placeholder="Enter selling price"
                                    value={productData.sellingPrice}
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
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tags"
                                    placeholder="Enter tags"
                                    value={productData.tags}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <ReactQuill
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    theme="snow"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'align': [] }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ]
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductFormModal;*/



import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ProductFormModal.css';

const ProductFormModal = ({ show, handleClose, onSubmit }) => {
    const [description, setDescription] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        SKU: '',
        category: '',
        barcode: '',
        buyingPrice: '',
        sellingPrice: '',
        tax: '',
        brand: '',
        status: 'Active',
        canPurchasable: 'Yes',
        tags: '',
        image: '',
        rating: '',
        reviews: '',
        price: '',
        originalPrice: '',
        countInStock: '',
        maxPurchaseQuantity: '',
        lowStockQuantityWarning: '',
        weight: '',
        unit: '',
        refundable: 'No',
        showStockOut: 'Disable',
        isActive: 'Active',
    });

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
                <Modal.Title>Add New Product</Modal.Title>
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
                            <Form.Group controlId="formBuyingPrice">
                                <Form.Label>Buying Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="buyingPrice"
                                    placeholder="Enter buying price"
                                    value={productData.buyingPrice}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSellingPrice">
                                <Form.Label>Selling Price *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="sellingPrice"
                                    placeholder="Enter selling price"
                                    value={productData.sellingPrice}
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
                            <Form.Group controlId="formCountInStock">
                                <Form.Label>Count in Stock *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="countInStock"
                                    placeholder="Enter count in stock"
                                    value={productData.countInStock}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formMaxPurchaseQuantity">
                                <Form.Label>Max Purchase Quantity *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="maxPurchaseQuantity"
                                    placeholder="Enter max purchase quantity"
                                    value={productData.maxPurchaseQuantity}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formLowStockQuantityWarning">
                                <Form.Label>Low Stock Quantity Warning *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="lowStockQuantityWarning"
                                    placeholder="Enter low stock quantity warning"
                                    value={productData.lowStockQuantityWarning}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formWeight">
                                <Form.Label>Weight *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="weight"
                                    placeholder="Enter weight"
                                    value={productData.weight}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formUnit">
                                <Form.Label>Unit *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="unit"
                                    placeholder="Enter unit"
                                    value={productData.unit}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formRefundable">
                                <Form.Label>Refundable *</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="refundable"
                                    value={productData.refundable}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formShowStockOut">
                                <Form.Label>Show Stock Out *</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="showStockOut"
                                    value={productData.showStockOut}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>Enable</option>
                                    <option>Disable</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tags"
                                    placeholder="Enter tags"
                                    value={productData.tags}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <ReactQuill
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    theme="snow"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'align': [] }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ]
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductFormModal;





