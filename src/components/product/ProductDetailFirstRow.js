// src/components/product/ProductDetailFirstRow.js
// src/components/product/ProductDetailFirstRow.js
import React from 'react';
import { Row, Col, Image, Button, Form, ListGroup, Carousel } from 'react-bootstrap'; // Import missing components
import ColorSwatches from '../ColorSwatches'; // Adjust path if necessary
import iconstabby from '../../assets/images/icons/iconstabby.svg'; // Ensure the path is correct
import '../../assets/styles/ProductDetails.css';

import ProductRatings from '../components/cards/ProductRatings';

const ProductDetailFirstRow = ({
    product,
    quantity,
    setQuantity,
    currentImageIndex,
    setCurrentImageIndex,
    selectedColorIndex,
    setSelectedColorIndex
}) => {
    const images = product.colors[selectedColorIndex]?.images || product.images;

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

    return (
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
    );
};

export default ProductDetailFirstRow;
