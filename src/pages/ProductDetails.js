


/* id only import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component

const ProductDetails = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10); // Ensure base 10 is specified

    // Flatten the array of products and find the product by id
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);

    // Debug logs
    console.log('Requested Product ID:', productId);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description || 'No description available'}</ListGroup.Item>
                    </ListGroup>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;id only*/

/*import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component

const ProductDetails = () => {
    const { id } = useParams();
    // Use string comparison if IDs are strings
    //const productId = parseInt(id, 10); // Ensure Id Number Format 
   // const product = allProducts.find(p => p.id === productId);//number format

    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description || 'No description available'}</ListGroup.Item>
                    </ListGroup>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;string id only*/



/* without layout import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component

const ProductDetails = () => {
    const { id } = useParams();

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(), 
        ...accessories, 
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description || 'No description available'}</ListGroup.Item>
                    </ListGroup>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;without layout */


/*import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component

const ProductDetails = () => {
    const { id } = useParams();

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(), 
        ...accessories, 
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row className="product-details">
                <Col md={6} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description || 'No description available'}</ListGroup.Item>
                    </ListGroup>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={3} className="empty-col">
                    {/* Empty column for future content }
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;vertical layout*/



/*three col import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component
import '../assets/styles/ProductDetails.css'; // Ensure CSS is correctly imported

const ProductDetails = () => {
    const { id } = useParams();

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description || 'No description available'}</ListGroup.Item>
                    </ListGroup>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={2} className="empty-col">
                    {/* This column is currently empty }
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;thrre col format*/


/*import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component
import '../assets/styles/ProductDetails.css'; // Ensure CSS is correctly imported

const ProductDetails = () => {
    const { id } = useParams();

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>Price:</strong> {product.price}
                                </Col>
                                <Col>
                                    <strong>Original Price:</strong> {product.originalPrice}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>Status:</strong>
                                    <span style={{ color: product.countInStock > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                                        {product.countInStock > 0 ? ' In Stock' : ' Out of Stock'}
                                    </span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>SKU:</strong> {product.id}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Brand:</strong> {product.brand}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <input type="number" defaultValue="1" min="1" />
                                </Col>
                                <Col>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-comments"></i> Chat with Specialist
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-phone"></i> Request a Callback
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-bulk"></i> Request Bulk Purchase
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2} className="empty-col">
                    {/* This column is currently empty}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component
import '../assets/styles/ProductDetails.css'; // Ensure CSS is correctly imported

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item className="hidden-line">
                            <Row>
                                <Col>
                                    <strong style={{ fontWeight: 'bold' }}>Price:</strong> 
                                    <span style={{ fontWeight: 'bold' }}> {product.price}</span>
                                </Col>
                                <Col>
                                    <strong>Original Price:</strong> 
                                    <span style={{ textDecoration: 'line-through' }}> {product.originalPrice}</span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>Status:</strong>
                                    <span style={{ color: product.countInStock > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                                        {product.countInStock > 0 ? ' In Stock' : ' Out of Stock'}
                                    </span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="hidden-line">
                            <strong>SKU:</strong> {product.id}
                        </ListGroup.Item>
                        <ListGroup.Item className="hidden-line">
                            <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
                        </ListGroup.Item>
                        <ListGroup.Item className="hidden-line">
                            <strong>Brand:</strong> {product.brand}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <Form.Group controlId="quantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <div className="d-flex align-items-center">
                                            <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
                                            <Form.Control
                                                type="text"
                                                value={quantity}
                                                readOnly
                                                style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                                            />
                                            <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>+</Button>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                    <Button variant="success" className="btn-block mt-2" type="button" disabled={product.countInStock === 0}>
                                        Buy Now
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-comments"></i> Chat with Specialist
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-phone"></i> Request a Callback
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-bulk"></i> Request Bulk Purchase
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2} className="empty-col">
                    {/* This column is currently empty }
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component
import '../assets/styles/ProductDetails.css'; // Ensure CSS is correctly imported

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <span className="current-price">{product.price}</span>
                                </Col>
                                <Col>
                                    <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                                    <span className="inclusive-vat"> {product.originalPrice.split(' ').slice(1).join(' ')}</span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <strong>Status:</strong>
                                    <span style={{ color: product.countInStock > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                                        {product.countInStock > 0 ? ' In Stock' : ' Out of Stock'}
                                    </span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>SKU:</strong> {product.id}
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>Brand:</strong> {product.brand}
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row className="align-items-center">
                                <Col md={3}>
                                    <Form.Group controlId="quantity">
                                        <div className="d-flex align-items-center">
                                            <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
                                            <Form.Control
                                                type="text"
                                                value={quantity}
                                                readOnly
                                                style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                                            />
                                            <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>+</Button>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                </Col>
                                <Col md={4}>
                                    <Button variant="success" className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Buy Now
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-comments"></i> Chat with Specialist
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-phone"></i> Request a Callback
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="">
                                        <i className="fas fa-bulk"></i> Request Bulk Purchase
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2} className="empty-col">
                <div className='#'>
                This item can be change or replaced or refund within 15 days of the of purchase day for Free 
                
                </div>
                <div className='#'>
                Other Country our agent will contact for delivery Estimation
                </div>
            <div className='#'>

            </div>

                    {/* This column is currently empty }
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;*/


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products'; // Import your main products data
import accessories from '../data/accessories'; // Import your accessories data
import networkingProducts from '../data/networking'; // Import networking products data
import ProductRatings from '../components/cards/ProductRatings'; // Import ProductRatings component
import '../assets/styles/ProductDetails.css'; // Ensure CSS is correctly imported

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    // Combine all products into one array
    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    // Debug logs
    console.log('Requested Product ID:', id);
    console.log('All Products:', allProducts);
    console.log('Found Product:', product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-name">{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <ProductRatings rating={product.rating} reviews={product.reviews} />
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <span className="current-price">{product.price}</span>
                                </Col>
                                <Col>
                                    <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                                    <span className="inclusive-vat"> {product.originalPrice.split(' ').slice(1).join(' ')}</span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <strong>Status:</strong>
                                    <span style={{ color: product.countInStock > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                                        {product.countInStock > 0 ? ' In Stock' : ' Out of Stock'}
                                    </span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>SKU:</strong> {product.id}
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
                        </ListGroup.Item>
                        <ListGroup.Item className="no-border">
                            <strong>Brand:</strong> {product.brand}
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="qty-selector">
                        <Row className="align-items-center">
                            <Col md={3}>
                                <Form.Group controlId="quantity">
                                    <div className="d-flex align-items-center">
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
                                        <Form.Control
                                            type="text"
                                            value={quantity}
                                            readOnly
                                            style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                                        />
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>+</Button>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={5}>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </Col>
                            <Col md={4}>
                                <Button variant="success" className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Buy Now
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <Row>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-comments"></i> Chat with Specialist
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <i className="fas fa-phone"></i> Request a Callback
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="">
                                        <i className="fas fa-bulk"></i> Request Bulk Purchase
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2} className="empty-col">
                    <div>
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div>
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;











