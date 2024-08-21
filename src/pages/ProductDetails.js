


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

export default ProductDetails;tdy*/

/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form ,Table} from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';


const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

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
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>



            <Row>
                <Col md={12} className="product-description-col">
                    <h3>Product Description</h3>
                    <p>{product.description}</p>
                </Col>
                
                <Col md={6} className="product-specifications-col">
    <h3>Product Specifications</h3>
    <Table striped bordered hover>
        <tbody>
            <tr>
                <td><strong>Brand</strong></td>
                <td>{product.specifications?.brand || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Model Number</strong></td>
                <td>{product.specifications?.modelNumber || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Processor</strong></td>
                <td>{product.specifications?.processor || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Memory RAM</strong></td>
                <td>{product.specifications?.memoryRam || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Storage</strong></td>
                <td>{product.specifications?.storage || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Graphics</strong></td>
                <td>{product.specifications?.graphics || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Keyboard</strong></td>
                <td>{product.specifications?.keyboard || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>WiFi</strong></td>
                <td>{product.specifications?.wifi || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Battery</strong></td>
                <td>{product.specifications?.battery || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Resolution</strong></td>
                <td>{product.specifications?.resolution || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Power Supply</strong></td>
                <td>{product.specifications?.powerSupply || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Bluetooth</strong></td>
                <td>{product.specifications?.bluetooth || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Webcam</strong></td>
                <td>{product.specifications?.webcam || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Speaker</strong></td>
                <td>{product.specifications?.speaker || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Ports</strong></td>
                <td>{product.specifications?.ports || 'N/A'}</td>
            </tr>
            <tr>
                <td><strong>Color</strong></td>
                <td>{product.specifications?.color || 'N/A'}</td>
            </tr>
        </tbody>
    </Table>
</Col>


            </Row>

            




        </Container>
    );
};

export default ProductDetails;good*/



/*formnoimport React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Table, ProgressBar } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    // Ensure product.reviews is an array
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    // Function to calculate rating percentage
    const calculateRatingPercentage = (rating) => {
        if (reviews.length === 0) return 0;
        const ratingCount = reviews.filter(review => review.rating === rating).length;
        return (ratingCount / reviews.length) * 100;
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h3>Reviews Summary</h3>
                    <p>Ratings: {product.rating}</p>
                    <p>Rated {product.rating} out of 5</p>
                    <p>{reviews.length} Product Ratings</p>
                    {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="rating-bar">
                            <span>{rating} star</span>
                            <ProgressBar
                                now={calculateRatingPercentage(rating)}
                                label={`${calculateRatingPercentage(rating).toFixed(2)}%`}
                                style={{ height: '25px' }}
                                variant="info"
                            />
                        </div>
                    ))}
                    <p>Review this product</p>
                    <Button variant="dark">Write a review</Button>
                </Col>
                <Col md={6}>
                    <h3>Reviews</h3>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index}>
                                <strong>{review.name}</strong>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;*/



/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, ProgressBar } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import '../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    // Ensure product.reviews is an array
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    // Function to calculate rating percentage
    const calculateRatingPercentage = (rating) => {
        if (reviews.length === 0) return 0;
        const ratingCount = reviews.filter(review => review.rating === rating).length;
        return (ratingCount / reviews.length) * 100;
    };

    // Handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1; // Ensure quantity is at least 1
        });
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <ReviewSection />
            
        </Container>
    );
};

export default ProductDetails;*/



/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import '../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    // Ensure product.reviews is an array
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    // Handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1; // Ensure quantity is at least 1
        });
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews}  />
        </Container>
    );
};

export default ProductDetails;*/



/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import '../assets/styles/ReviewSection.css'; // Import the combined CSS file
import ProductTable from '../components/product/ProductTable';


const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    // Ensure product.reviews is an array
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    // Handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1; // Ensure quantity is at least 1
        });
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
        </Container>
    );
};

export default ProductDetails;good*/

/*goodd tdy 11import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts'
import '../assets/styles/ReviewSection.css'; // Import the combined CSS file
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    // Ensure product.reviews is an array
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    // Handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1; // Ensure quantity is at least 1
        });
    };

    // Example specifications object, replace with dynamic data from your source
    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };
    // Find related products
    /*const relatedProducts = allProducts
        .filter(p => p.id !== product.id) // Exclude the current product
        .slice(0, 4); // Get the first 4 related products

    // Find all related products except the current product
    const relatedProducts = allProducts
        .filter(p => p.id !== product.id); 
    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-zoom">
                        <Image src={product.image} alt={product.name} fluid />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. Userfriendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which take place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts  relatedProducts={relatedProducts}/>
        </Container>
    );
};

export default ProductDetails; gt11*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                            {product.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Image src={image} alt={product.name} fluid />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div className="product-thumbnails">
                            {product.images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={product.name}
                                    fluid
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/



/*goodgt2 import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                            {product.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Image src={image} alt={product.name} fluid />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div className="product-thumbnails-container">
                            <div className="product-thumbnails">
                                {product.images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={product.name}
                                        fluid
                                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;gt2*/


/*good import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={2} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {product.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={10}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {product.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    return (
        <Container>
            <Row>
                <Col md={5} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {product.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {product.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={4} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches'; // Import ColorSwatches
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    // Default to first color if no color selected
    const color = product.colors[selectedColorIndex] || product.colors[0];
    const images = color ? color.images : product.images;

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/







 /*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches'; // Import ColorSwatches
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    // Default to first color if no color selected
    const color = product.colors[selectedColorIndex] || product.colors[0];
    const images = color ? color.images : product.images;

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="no-border">
                            <h3 className="product-title">{product.name}</h3>
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
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/




/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches'; // Import ColorSwatches
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    // Default to first color if no color selected
    const color = product.colors[selectedColorIndex] || product.colors[0];
    const images = color ? color.images : product.images;

    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',
        'Arabic keyboard'
    ];
    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>
                
                





<Col md={5} className="product-details-col">
            <h3 className="product-title">{product.name}</h3>
            <div className="product-rating">
                <ProductRatings rating={product.rating} reviews={product.reviews} />
            </div>
            <div className="price-container">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
            </div>
            <div className="details-info">
                <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span></div>
                <div><strong>SKU:</strong> {product.id}</div>
                <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                <div><strong>Brand:</strong> {product.brand}</div>
            </div>
            <div className="qty-selector">
                <Row>
                    <Col xs={12}>
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
                </Row>
            </div>
            <div className='button-container' >
                <Button
                    className="AddToCart"
                    variant='warning'
                    type="button"
                    disabled={product.countInStock === 0}
                >
                    Add to Cart
                </Button>
                <Button
                    
                    className="BuyNow"
                    variant='success'
                    type="button"
                    disabled={product.countInStock === 0}
                >
                    Buy Now
                </Button>
            </div>
            <div className="actions-row">
                <Button variant="light">
                    <i className="fas fa-comments"></i> Chat with Specialist
                </Button>
                <Button variant="light">
                    <i className="fas fa-phone"></i> Request a Callback
                </Button>
                <Button variant="light">
                    <i className="fas fa-bulk"></i> Request Bulk Purchase
                </Button>
            </div>
            <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

        </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/


/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches'; // Import ColorSwatches
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
    const images = color.images || product.images || [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',
        'Arabic keyboard'
    ];

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.length > 0 && images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                    {images.length > 0 && images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Image src={image} alt={product.name} fluid />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>
                <Col md={5} className="product-details-col">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                        <ProductRatings rating={product.rating} reviews={product.reviews} />
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                        <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="details-info">
                        <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></div>
                        <div><strong>SKU:</strong> {product.id}</div>
                        <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                        <div><strong>Brand:</strong> {product.brand}</div>
                    </div>
                    <div className="qty-selector">
                        <Row>
                            <Col xs={12}>
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
                        </Row>
                    </div>
                    <div className='button-container'>
                        <Button
                            className="AddToCart"
                            variant='warning'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            className="BuyNow"
                            variant='success'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="actions-row">
                        <Button variant="light">
                            <i className="fas fa-comments"></i> Chat with Specialist
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-phone"></i> Request a Callback
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-bulk"></i> Request Bulk Purchase
                        </Button>
                    </div>
                    <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/


/*okimport React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import products from '../data/products';
import accessories from '../data/accessories';
import networkingProducts from '../data/networking';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const allProducts = [
        ...Object.values(products).flat(),
        ...accessories,
        ...networkingProducts
    ];
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
    const images = color.images || product.images || [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const relatedProducts = allProducts.filter(p => p.id !== product.id);

    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',


        'Arabic keyboard'
    ];

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.length > 0 && images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div className="product-image-zoom">
                                    <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                        {images.length > 0 && images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <Image src={image} alt={product.name} fluid />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>

                <Col md={5} className="product-details-col">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                        <ProductRatings rating={product.rating} reviews={product.reviews} />
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                        <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="details-info">
                        <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></div>
                        <div><strong>SKU:</strong> {product.id}</div>
                        <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                        <div><strong>Brand:</strong> {product.brand}</div>
                    </div>
                    <div className="qty-selector">
                        <Row>
                            <Col xs={12}>
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
                        </Row>
                    </div>
                    <div className='button-container'>
                        <Button
                            className="AddToCart"
                            variant='warning'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            className="BuyNow"
                            variant='success'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="actions-row">
                        <Button variant="light">
                            <i className="fas fa-comments"></i> Chat with Specialist
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-phone"></i> Request a Callback
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-boxes"></i> Request Bulk Purchase
                        </Button>
                    </div>
                    <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="product-description">
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-table">
                        <h4>More Information</h4>
                        <ProductTable specifications={specifications} />
                    </div>
                </Col>
            </Row>
            <ReviewSection reviews={reviews} />
            <RelatedProducts relatedProducts={relatedProducts} />
        </Container>
    );
};

export default ProductDetails;*/


  /*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image,  Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import RelatedProducts from '../components/related-products/RelatedProducts';
import '../assets/styles/ReviewSection.css';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
                setProduct(data.product);

                

                setLoading(false);
            } catch (error) {
                setError('Product not found');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    


    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
    const images = color.images || product.images || [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

   
    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',
        'Arabic keyboard'
    ];

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.length > 0 && images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div className="product-image-zoom">
                                    <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                        {images.length > 0 && images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <Image src={image} alt={product.name} fluid />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>

                <Col md={5} className="product-details-col">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                        <ProductRatings rating={product.rating} reviews={product.reviews} />
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                        <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="details-info">
                        <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></div>
                        <div><strong>SKU:</strong> {product._id}</div>
                        <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                        <div><strong>Brand:</strong> {product.brand}</div>
                    </div>
                    <div className="qty-selector">
                        <Row>
                            <Col xs={12}>
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
                        </Row>
                    </div>
                    <div className='button-container'>
                        <Button
                            className="AddToCart"
                            variant='warning'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            className="BuyNow"
                            variant='success'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="actions-row">
                        <Button variant="light">
                            <i className="fas fa-comments"></i> Chat with Specialist
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-phone"></i> Request a Callback
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-boxes"></i> Request Bulk Purchase
                        </Button>
                    </div>
                    <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.                        </p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="product-description">
                        <h4>Product Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ProductTable specifications={specifications} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ReviewSection reviews={reviews} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <RelatedProducts relatedProducts={relatedProducts} />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
*/

/*perfectimport React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';

import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
                setProduct(data.product);
                setLoading(false);
            } catch (error) {
                setError('Product not found');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
    const images = color.images || product.images || [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',
        'Arabic keyboard'
    ];
   
    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.length > 0 && images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div className="product-image-zoom">
                                    <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                        {images.length > 0 && images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <Image src={image} alt={product.name} fluid />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>

                <Col md={5} className="product-details-col">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                        <ProductRatings rating={product.rating} reviews={product.reviews} />
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                        <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="details-info">
                        <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></div>
                        <div><strong>SKU:</strong> {product._id}</div>
                        <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                        <div><strong>Brand:</strong> {product.brand}</div>
                    </div>
                    <div className="qty-selector">
                        <Row>
                            <Col xs={12}>
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
                        </Row>
                    </div>
                    <div className='button-container'>
                        <Button
                            className="AddToCart"
                            variant='warning'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            className="BuyNow"
                            variant='success'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="actions-row">
                        <Button variant="light">
                            <i className="fas fa-comments"></i> Chat with Specialist
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-phone"></i> Request a Callback
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-boxes"></i> Request Bulk Purchase
                        </Button>
                    </div>
                    <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="product-description">
                        <h4>Product Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ProductTable specifications={specifications} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ReviewSection reviews={reviews} />
                </Col>
            </Row>
            
        </Container>
    );
};

export default ProductDetails;perfect with connection*/




/*---import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../store/actions/cartActions'; 
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';

import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook for navigation
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
                setProduct(data.product);
                setLoading(false);
            } catch (error) {
                setError('Product not found');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
    const images = color.images || product.images || [];

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setCurrentImageIndex(0); // Reset to the first image of the selected color
    };

    const specifications = {
        Brand: product.brand || 'N/A',
        'Model Number': product.modelNumber || 'N/A',
        Processor: product.processor || 'N/A',
        'Memory RAM': product.memoryRam || 'N/A',
        Storage: product.storage || 'N/A',
        Graphics: product.graphics || 'N/A',
        Keyboard: product.keyboard || 'N/A',
        Wifi: product.wifi || 'N/A',
        Battery: product.battery || 'N/A',
        Resolution: product.resolution || 'N/A',
        'Power Supply': product.powerSupply || 'N/A',
        Bluetooth: product.bluetooth || 'N/A',
        Webcam: product.webcam || 'N/A',
        Speaker: product.speaker || 'N/A',
        Ports: product.ports || 'N/A',
        Color: product.color || 'N/A'
    };

    const keyPoints = [
        'HP 255 G8',
        'AMD Ryzen 5-5500U',
        '8GB RAM',
        '256GB SSD',
        '15.6” FHD',
        'Arabic keyboard'
    ];

    
    // Handler for Add to Cart button
   
    const handleAddToCart = () => {
     dispatch(addToCart({...product,quantity}));
     alert('Your item is added to the cart');
     // Redirect to cart page
     navigate('/cart');
 };

    

    return (
        <Container>
            <Row>
                <Col md={4} className="product-image-col">
                    <div className="product-image-carousel">
                        <Row>
                            <Col xs={3} className="product-thumbnails-container">
                                <div className="product-thumbnails">
                                    {images.length > 0 && images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={product.name}
                                            fluid
                                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div className="product-image-zoom">
                                    <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}>
                                        {images.length > 0 && images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <Image src={image} alt={product.name} fluid />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                        <ColorSwatches
                            colors={product.colors}
                            selectedColorIndex={selectedColorIndex}
                            onColorClick={handleColorClick}
                        />
                    </div>
                </Col>

                <Col md={5} className="product-details-col">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                        <ProductRatings rating={product.rating} reviews={product.reviews} />
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
                        <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="details-info">
                        <div><strong>Status:</strong> <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></div>
                        <div><strong>SKU:</strong> {product._id}</div>
                        <div><strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}</div>
                        <div><strong>Brand:</strong> {product.brand}</div>
                    </div>

                       
                    


                    <div className="qty-selector">
                        <Row>
                            <Col xs={12}>
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
                        </Row>
                    </div>






                    <div className='button-container'>
                        <Button
                            className="AddToCart"
                            variant='warning'
                            type="button"
                            disabled={product.countInStock === 0}
                            onClick={handleAddToCart} // Added handler
                        >
                            Add to Cart
                        </Button>
                        <Button
                            className="BuyNow"
                            variant='success'
                            type="button"
                            disabled={product.countInStock === 0}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="actions-row">
                        <Button variant="light">
                            <i className="fas fa-comments"></i> Chat with Specialist
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-phone"></i> Request a Callback
                        </Button>
                        <Button variant="light">
                            <i className="fas fa-boxes"></i> Request Bulk Purchase
                        </Button>
                    </div>
                    <ul className="key-points">
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={3} className="empty-col">
                    <div className="first-div">
                        This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
                    </div>
                    <div className="second-div">
                        For other countries, our agent will contact you for delivery estimation.
                    </div>
                    <div className="third-div">
                        <div className="icon-container">
                            <img src={iconstabby} alt="Icon" />
                        </div>
                    </div>
                    <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="product-description">
                        <h4>Product Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ProductTable specifications={specifications} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ReviewSection reviews={reviews} />
                </Col>
            </Row>
            
        </Container>
    );
};

export default ProductDetails;----*/

/*string id start import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        setError('Product not found');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
  const images = color.images || product.images || [];

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
  };

  const specifications = {
    Brand: product.brand || 'N/A',
    'Model Number': product.modelNumber || 'N/A',
    Processor: product.processor || 'N/A',
    'Memory RAM': product.memoryRam || 'N/A',
    Storage: product.storage || 'N/A',
    Graphics: product.graphics || 'N/A',
    Keyboard: product.keyboard || 'N/A',
    Wifi: product.wifi || 'N/A',
    Battery: product.battery || 'N/A',
    Resolution: product.resolution || 'N/A',
    'Power Supply': product.powerSupply || 'N/A',
    Bluetooth: product.bluetooth || 'N/A',
    Webcam: product.webcam || 'N/A',
    Speaker: product.speaker || 'N/A',
    Ports: product.ports || 'N/A',
    Color: product.color || 'N/A'
  };

  const keyPoints = [
    'HP 255 G8',
    'AMD Ryzen 5-5500U',
    '8GB RAM',
    '256GB SSD',
    '15.6” FHD',
    'Arabic keyboard'
  ];

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert('Your item is added to the cart');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  return (
    <Container>
      <Row>
        <Col md={4} className="product-image-col">
          <div className="product-image-carousel">
            <Row>
              <Col xs={3} className="product-thumbnails-container">
                <div className="product-thumbnails">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={product.name}
                        fluid
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                </div>
              </Col>
              <Col xs={9}>
                <div className="product-image-zoom">
                  <Carousel
                    activeIndex={currentImageIndex}
                    onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
                  >
                    {images.length > 0 &&
                      images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <Image src={image} alt={product.name} fluid />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
            <ColorSwatches
              colors={product.colors}
              selectedColorIndex={selectedColorIndex}
              onColorClick={handleColorClick}
            />
          </div>
        </Col>

        <Col md={5} className="product-details-col">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-rating">
            <ProductRatings rating={product.rating} reviews={product.reviews} />
          </div>
          <div className="price-container">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
            <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
          </div>
          <div className="details-info">
            <div>
              <strong>Status:</strong>{' '}
              <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div>
              <strong>SKU:</strong> {product._id}
            </div>
            <div>
              <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
            </div>
            <div>
              <strong>Brand:</strong> {product.brand}
            </div>
          </div>

          <div className="qty-selector">
            <Row>
              <Col xs={12}>
                <Form.Group controlId="quantity">
                  <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantity}
                      readOnly
                      style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                    />
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="button-container">
            <Button
              className="AddToCart"
              variant="warning"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              className="BuyNow"
              variant="success"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
          <div className="actions-row">
            <Button variant="light">
              <i className="fas fa-comments"></i> Chat with Specialist
            </Button>
            <Button variant="light">
              <i className="fas fa-phone"></i> Request a Callback
            </Button>
            <Button variant="light">
              <i className="fas fa-boxes"></i> Request Bulk Purchase
            </Button>
          </div>
          <ul className="key-points">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Col>
        <Col md={3} className="empty-col">
          <div className="first-div">
            This item can be changed, replaced, or refunded within 15 days of the purchase day for
            Free.
          </div>
          <div className="second-div">
            For other countries, our agent will contact you for delivery estimation.
          </div>
          <div className="third-div">
            <div className="icon-container">
              <img src={iconstabby} alt="Icon" />
            </div>
          </div>
          <div className="fourth-div">
                        <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
                            Get My Coupon
                        </Button>
                    </div>
                    <div className="fifth-div">
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
                    </div>
                    <div className="sixth-div">
                        <h5>Express delivery Within All Mobile Cities In UAE</h5>
                        <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
                        <h5>Delivery in remote areas</h5>
                        <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="product-description">
                        <h4>Product Description</h4>
                        <p>{product.description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ProductTable specifications={specifications} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ReviewSection reviews={reviews} />
                </Col>
            </Row>
            
        </Container>
    );
};

export default ProductDetails;string id */






/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        setError('Product not found');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
  const images = color.images || product.images || [];

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
  };

  const specifications = {
    Brand: product.brand || 'N/A',
    'Model Number': product.modelNumber || 'N/A',
    Processor: product.processor || 'N/A',
    'Memory RAM': product.memoryRam || 'N/A',
    Storage: product.storage || 'N/A',
    Graphics: product.graphics || 'N/A',
    Keyboard: product.keyboard || 'N/A',
    Wifi: product.wifi || 'N/A',
    Battery: product.battery || 'N/A',
    Resolution: product.resolution || 'N/A',
    'Power Supply': product.powerSupply || 'N/A',
    Bluetooth: product.bluetooth || 'N/A',
    Webcam: product.webcam || 'N/A',
    Speaker: product.speaker || 'N/A',
    Ports: product.ports || 'N/A',
    Color: product.color || 'N/A'
  };

  const keyPoints = [
    'HP 255 G8',
    'AMD Ryzen 5-5500U',
    '8GB RAM',
    '256GB SSD',
    '15.6” FHD',
    'Arabic keyboard'
  ];

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert('Your item is added to the cart');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  return (
    <Container>
      <Row>
        <Col md={4} className="product-image-col">
          <div className="product-image-carousel">
            <Row>
              <Col xs={3} className="product-thumbnails-container">
                <div className="product-thumbnails">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={product.name}
                        fluid
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                </div>
              </Col>
              <Col xs={9}>
                <div className="product-image-zoom">
                  <Carousel
                    activeIndex={currentImageIndex}
                    onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
                  >
                    {images.length > 0 &&
                      images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <Image src={image} alt={product.name} fluid />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
            <ColorSwatches
              colors={product.colors}
              selectedColorIndex={selectedColorIndex}
              onColorClick={handleColorClick}
            />
          </div>
        </Col>

        <Col md={5} className="product-details-col">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-rating">
            <ProductRatings rating={product.rating} reviews={reviews} />
          </div>
          <div className="price-container">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice.split(' ')[0]}</span>
            <span className="inclusive-vat">{product.originalPrice.split(' ').slice(1).join(' ')}</span>
          </div>
          <div className="details-info">
            <div>
              <strong>Status:</strong>{' '}
              <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div>
              <strong>SKU:</strong> {product._id}
            </div>
            <div>
              <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
            </div>
            <div>
              <strong>Brand:</strong> {product.brand}
            </div>
          </div>

          <div className="qty-selector">
            <Row>
              <Col xs={12}>
                <Form.Group controlId="quantity">
                  <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantity}
                      readOnly
                      style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                    />
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="button-container">
            <Button
              className="AddToCart"
              variant="warning"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              className="BuyNow"
              variant="success"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
          <div className="actions-row">
            <Button variant="light">
              <i className="fas fa-comments"></i> Chat with Specialist
            </Button>
            <Button variant="light">
              <i className="fas fa-phone"></i> Request a Callback
            </Button>
            <Button variant="light">
              <i className="fas fa-boxes"></i> Request Bulk Purchase
            </Button>
          </div>
          <ul className="key-points">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Col>
        <Col md={3} className="empty-col">
          <div className="first-div">
            This item can be changed, replaced, or refunded within 15 days of the purchase day for
            Free.
          </div>
          <div className="second-div">
            For other countries, our agent will contact you for delivery estimation.
          </div>
          <div className="third-div">
            <div className="icon-container">
              <img src={iconstabby} alt="Icon" />
            </div>
          </div>
          <div className="fourth-div">
            <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
              Get My Coupon
            </Button>
          </div>
          <div className="fifth-div">
            <h5>TRUSTED SHIPPING</h5>
            <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
          </div>
          <div className="sixth-div">
            <h5>Express delivery Within All Mobile Cities In UAE</h5>
            <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
            <h5>Delivery in remote areas</h5>
            <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-description">
            <h4>Product Description</h4>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ProductTable specifications={specifications} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ReviewSection reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;new1*/




/*new2 workingimport React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        setError('Product not found');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
  const images = color.images || product.images || [];

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
  };

  const specifications = {
    Brand: product.brand || 'N/A',
    'Model Number': product.modelNumber || 'N/A',
    Processor: product.processor || 'N/A',
    'Memory RAM': product.memoryRam || 'N/A',
    Storage: product.storage || 'N/A',
    Graphics: product.graphics || 'N/A',
    Keyboard: product.keyboard || 'N/A',
    Wifi: product.wifi || 'N/A',
    Battery: product.battery || 'N/A',
    Resolution: product.resolution || 'N/A',
    'Power Supply': product.powerSupply || 'N/A',
    Bluetooth: product.bluetooth || 'N/A',
    Webcam: product.webcam || 'N/A',
    Speaker: product.speaker || 'N/A',
    Ports: product.ports || 'N/A',
    Color: product.color || 'N/A'
  };

  const keyPoints = [
    'HP 255 G8',
    'AMD Ryzen 5-5500U',
    '8GB RAM',
    '256GB SSD',
    '15.6” FHD',
    'Arabic keyboard'
  ];

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert('Your item is added to the cart');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  // Ensure originalPrice is a string
  const originalPrice = typeof product.originalPrice === 'string' ? product.originalPrice : '';
  const [priceAmount, ...priceRest] = originalPrice.split(' ');

  return (
    <Container>
      <Row>
        <Col md={4} className="product-image-col">
          <div className="product-image-carousel">
            <Row>
              <Col xs={3} className="product-thumbnails-container">
                <div className="product-thumbnails">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={product.name}
                        fluid
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                </div>
              </Col>
              <Col xs={9}>
                <div className="product-image-zoom">
                  <Carousel
                    activeIndex={currentImageIndex}
                    onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
                  >
                    {images.length > 0 &&
                      images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <Image src={image} alt={product.name} fluid />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
            <ColorSwatches
              colors={product.colors}
              selectedColorIndex={selectedColorIndex}
              onColorClick={handleColorClick}
            />
          </div>
        </Col>

        <Col md={5} className="product-details-col">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-rating">
            <ProductRatings rating={product.rating} reviews={product.reviews} />
          </div>
          <div className="price-container">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{priceAmount}</span>
            <span className="inclusive-vat">{priceRest.join(' ')}</span>
          </div>
          <div className="details-info">
            <div>
              <strong>Status:</strong>{' '}
              <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div>
              <strong>SKU:</strong> {product._id}
            </div>
            <div>
              <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
            </div>
            <div>
              <strong>Brand:</strong> {product.brand}
            </div>
          </div>

          <div className="qty-selector">
            <Row>
              <Col xs={12}>
                <Form.Group controlId="quantity">
                  <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantity}
                      readOnly
                      style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                    />
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="button-container">
            <Button
              className="AddToCart"
              variant="warning"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              className="BuyNow"
              variant="success"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
          <div className="actions-row">
            <Button variant="light">
              <i className="fas fa-comments"></i> Chat with Specialist
            </Button>
            <Button variant="light">
              <i className="fas fa-phone"></i> Request a Callback
            </Button>
            <Button variant="light">
              <i className="fas fa-boxes"></i> Request Bulk Purchase
            </Button>
          </div>
          <ul className="key-points">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Col>
        
        <Col md={3} className="empty-col">
          <div className="first-div">
            This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
          </div>
          <div className="second-div">
            For other countries, our agent will contact you for delivery estimation.
          </div>
          <div className="third-div">
            <div className="icon-container">
              <img src={iconstabby} alt="Icon" />
            </div>
          </div>
          <div className="fourth-div">
            <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
              Get My Coupon
            </Button>
          </div>
          <div className="fifth-div">
            <h5>TRUSTED SHIPPING</h5>
            <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to Grab your AtoZ technology products.</p>
          </div>
          <div className="sixth-div">
            <h5>Express delivery Within All Mobile Cities In UAE</h5>
            <p>Grabatoz offers express delivery for all our customers to grab your orders in quick time without any further delay.</p>
            <h5>Delivery in remote areas</h5>
            <p>Delivery in remote areas will be considered as normal delivery which takes place within 3 working days. Click for more details.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-description">
            <h4>Product Description</h4>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ProductTable specifications={specifications} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ReviewSection reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;new2*/

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,updateCart } from '../store/slices/cartSlice';

//import { addToCart } from '../store/actions/cartActions';
import { Container, Row, Col, Image, Button, Form,Modal, Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductRatings from '../components/cards/ProductRatings';
import ColorSwatches from '../components/ColorSwatches';
import '../assets/styles/ProductDetails.css';
import iconstabby from '../assets/images/icons/iconstabby.svg';
import ReviewSection from '../components/reviews/ReviewSection';
import ProductTable from '../components/product/ProductTable';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CartPreviewModal from '../components/modals/cartPreviewModal';
//import CartSidebar from '../components/sidebar/cartSidebar';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import style
import QuantitySelector from '../components/Qty'; // Import QuantitySelector
import ProductInquiry from '../components/ProductInquiry';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
 const [showCartModal, setShowCartModal] = useState(false);
 const [showInquiryModal, setShowInquiryModal] = useState(false);

 const handleEnquire = () => {
    setShowInquiryModal(true);
  };

  // Retrieve cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        setError('Product not found');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  useEffect(() => {
    if (product) {
      // Find cart item for the current product
      const cartItem = cartItems.find((item) => item.id === product._id.toString());
      if (cartItem) {
        setQuantity(cartItem.quantity);
      } else {
        setQuantity(1); // Default to 1 if not found in cart
      }
    }
  }, [product, cartItems]);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  // Ensure product is defined before accessing its properties
  if (!product) {
    return <div>Product not available</div>;
  }

  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const color = product.colors && product.colors[selectedColorIndex] ? product.colors[selectedColorIndex] : product.colors ? product.colors[0] : {};
  const images = color.images || product.images || [];

  /*const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };*/

  /* ok const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateCart({ id: product._id.toString(), quantity: newQuantity }));
  };
  */

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateCart({ id: product._id.toString(), quantity: newQuantity }));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
  };

  const specifications = {
    Brand: product.brand || 'N/A',
    'Model Number': product.modelNumber || 'N/A',
    Processor: product.processor || 'N/A',
    'Memory RAM': product.memoryRam || 'N/A',
    Storage: product.storage || 'N/A',
    Graphics: product.graphics || 'N/A',
    Keyboard: product.keyboard || 'N/A',
    Wifi: product.wifi || 'N/A',
    Battery: product.battery || 'N/A',
    Resolution: product.resolution || 'N/A',
    'Power Supply': product.powerSupply || 'N/A',
    Bluetooth: product.bluetooth || 'N/A',
    Webcam: product.webcam || 'N/A',
    Speaker: product.speaker || 'N/A',
    Ports: product.ports || 'N/A',
    Color: product.color || 'N/A'
  };

  const keyPoints = [
    'HP 255 G8',
    'AMD Ryzen 5-5500U',
    '8GB RAM',
    '256GB SSD',
    '15.6” FHD',
    'Arabic keyboard'
  ];



  /*const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setShowCartModal(true); // Show the cart preview modal
  };*/
 /* const handleAddToCart = () => {
    dispatch(addToCart({ 
      id: product._id.toString(), 
      image: product.image, 
      name: product.name, 
      price: product.price, 
      quantity 
    }));
    setShowCartModal(true); // Show the cart preview modal
  };*/

  /*const handleAddToCart = () => {
    dispatch(addToCart({ 
      id: product._id.toString(), 
      image: product.image, 
      name: product.name, 
      price: product.price, 
      quantity 
    }));
    setShowCartModal(true); // Show the cart preview modal
  };*/



/*const handleAddToCart = () => {
  dispatch(addToCart({ 
    id: product._id.toString(), 
    image: product.image, 
    name: product.name, 
    price: product.price, 
    quantity: 1 // Always add 1 item initially
  }));
  setQuantity(1); // Ensure the quantity selector reflects this change
  setShowCartModal(true); // Show the cart preview modal
};*/

const handleAddToCart = () => {
    dispatch(addToCart({ 
      id: product._id.toString(), 
      image: product.image, 
      name: product.name, 
      price: product.price, 
      originalPrice: product.originalPrice,
      quantity: 1 // Always add 1 item initially
    }));
    
    // Show the success notification
    toast.success('Your item has been successfully added to the cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
    setQuantity(1); // Ensure the quantity selector reflects this change
    setShowCartModal(true); // Show the cart preview modal
  };
  

  
  

  const handleCloseCartModal = () => setShowCartModal(false);


/*
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert('Your item is added to the cart');
    navigate('/cart');
  };*/
  

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  
 
  {/*const handleEnquire = () => {
    toast.info('Please contact us for more information.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };*/}


  // Ensure originalPrice is a string
  const originalPrice = typeof product.originalPrice === 'string' ? product.originalPrice : '';
  const [priceAmount, ...priceRest] = originalPrice.split(' ');

  return (
    <Container>
      <Row>
        <Col md={4} className="product-image-col">
          <div className="product-image-carousel">
            <Row>
              <Col xs={3} className="product-thumbnails-container">
                <div className="product-thumbnails">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={product.name}
                        fluid
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                </div>
              </Col>
              <Col xs={9}>
                <div className="product-image-zoom">
                  <Carousel
                    activeIndex={currentImageIndex}
                    onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
                  >
                    {images.length > 0 &&
                      images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <Image src={image} alt={product.name} fluid />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
            <ColorSwatches
              colors={product.colors}
              selectedColorIndex={selectedColorIndex}
              onColorClick={handleColorClick}
            />
          </div>
        </Col>

        <Col md={5} className="product-details-col">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-rating">
            <ProductRatings rating={product.rating} reviews={reviews} />
          </div>
          
          <div className="price-container">
  <span className="current-price">{product.price}AED</span>
  {product.originalPrice && (
    <span  style={{  fontSize: '1em' }}className="original-price">{product.originalPrice}AED</span>
  )}
  <span  style={{ fontSize: '0.8em', color: 'gray', textDecoration: 'none' }}className="inclusive-vat">Inclusive VAT</span>
</div>

         

          {/*<div className="price-container">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{price.originalPrice}</span>
            <span className="inclusive-vat">{priceRest.join(' ')}</span>
          </div>*/}




          <div className="details-info">
            <div>
              <strong>Status:</strong>{' '}
              <span style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div>
              <strong>SKU:</strong> {product._id}
            </div>
            <div>
              <strong>Categories:</strong> {product.categories ? product.categories.join(', ') : 'N/A'}
            </div>
            <div>
              <strong>Brand:</strong> {product.brand}
            </div>
          </div>

          {/*<div className="qty-selector">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>*/}

     <QuantitySelector
  productId={product._id.toString()}
  quantity={quantity}
  onQuantityChange={handleQuantityChange}
    />



        {/*<div className="qty-selector">
            <Row>
              <Col xs={12}>
                <Form.Group controlId="quantity">
                  <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantity}
                      readOnly
                      style={{ width: '60px', textAlign: 'center', margin: '0 10px' }}
                    />
                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </div>*/}

          <div className="button-container">
          <div className="button-group">
            {product.countInStock > 0 ? (
              <>
                <Button
                  className="add-to-cart-btn"
                  variant="warning"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  className="buy-now-btn"
                  variant="success"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </>
            ) : (
                <>
                <Button
                  className="enquire-btn"
                  variant="danger"
                  onClick={handleEnquire}
                  style={{
                    border: '2px solid red',
                    borderRadius: '0',
                    backgroundColor: 'red',
                    color: '#fff',
                    fontSize: '16px',
                    padding: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    width: '100%',
                    textAlign: 'center',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8abf1c';
                    e.currentTarget.style.borderColor = '#8abf1c';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'red';
                    e.currentTarget.style.borderColor = 'red';
                  }}
                >
                  Want this? Send Us Inquiry Now!
                </Button>
        
                {/* Modal for Product Inquiry */}
                <ProductInquiry 
                  show={showInquiryModal} 
                  onHide={() => setShowInquiryModal(false)} 
                />
              </>
                
               /*<Button
                className="enquire-btn"
                variant="danger"
                onClick={handleEnquire}
                style={{
                  border: '2px solid red', /* Border color 
                  borderRadius: '0', /* No border radius 
                  backgroundColor: 'red', /* Button background color 
                  color: '#fff', /* Text color 
                  fontSize: '16px', /* Font size 
                  padding: '10px', /* Padding 
                  fontWeight: 'bold', /* Font weight 
                  cursor: 'pointer', /* Pointer cursor on hover 
                  transition: 'background-color 0.3s ease, border-color 0.3s ease', /* Smooth transition for color changes 
                  width: '100%', /* Full width to make the button extend 
                  textAlign: 'center', /* Center text alignment 
                  display: 'inline-block', /* Ensure button fits its content 
                  whiteSpace: 'nowrap', /* Prevent text wrapping 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#8abf1c'; /* Darker background color on hover 
                  e.currentTarget.style.borderColor = '#8abf1c'; /* Darker border color on hover 
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'red'; /* Original background color 
                  e.currentTarget.style.borderColor = 'red'; /* Original border color 
                }}
              >
                Want this? Send Us Inquiry Now!
              </Button>*/
              
            )}
          </div>


           {/* <Button
              className="AddToCart"
              variant="warning"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>*/}
          

            
           {/* <Button
              className="BuyNow"
              variant="success"
              type="button"
              disabled={product.countInStock === 0}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>*/}
            <CartPreviewModal show={showCartModal} handleClose={handleCloseCartModal} />
          </div>
          <div className="actions-row">
            <Button variant="light">
              <i className="fas fa-comments"></i> Chat with Specialist
            </Button>
            <Button variant="light">
              <i className="fas fa-phone"></i> Request a Callback
            </Button>
            <Button variant="light">
              <i className="fas fa-boxes"></i> Request Bulk Purchase
            </Button>
          </div>
          <ul className="key-points">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Col>
        
        <Col md={3} className="empty-col">
          <div className="first-div">
            This item can be changed, replaced, or refunded within 15 days of the purchase day for Free.
          </div>
          <div className="second-div">
            For other countries, our agent will contact you for delivery estimation.
          </div>
          <div className="third-div">
            <div className="icon-container">
              <img src={iconstabby} alt="Icon" />
            </div>
          </div>
          <div className="fourth-div">
            <Button style={{ backgroundColor: '#FCDC00', borderRadius: '5px' }}>
              Get My Coupon
            </Button>
          </div>
          <div className="fifth-div">
            <h5>TRUSTED SHIPPING</h5>
            <p>Free shipping when you spend AED500 & above. User-friendly atmosphere to grab your A to Z technology products.</p>
          </div>
          <div className="sixth-div">
            <h5>Express Delivery Within All Mobile Cities In UAE</h5>
            <p>Grabatoz offers express delivery for all our customers to receive your orders in quick time without any further delay.</p>
            <h5>Delivery in Remote Areas</h5>
            <p>Delivery in remote areas will be considered as normal delivery, which takes place within 3 working days. Click for more details.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-description">
            <h4>Product Description</h4>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ProductTable specifications={specifications} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ReviewSection reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};


export default ProductDetails;


