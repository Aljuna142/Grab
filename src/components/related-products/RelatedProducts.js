// src/components/related-products/RelatedProducts.js
/*import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../cards/ProductCard'; // Adjust path as necessary

const RelatedProducts = ({ relatedProducts }) => {
    return (
        <Container className="related-products mt-5">
            <div>
            <h3 className="related-products-title">Related Products</h3>
            </div>
            
            <Row>
                {relatedProducts.map((product) => (
                    <Col md={3} key={product.id} className="mb-4">
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RelatedProducts;*/


// src/components/related-products/RelatedProducts.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../cards/ProductCard'; // Adjust path as necessary
import '../../assets/styles/RelatedProducts.css'; // Import the CSS file

const RelatedProducts = ({ relatedProducts }) => {
    return (
        <Container className="related-products mt-5">
            <div className="related-products-title-container">
                <h3 className="related-products-title">Related Products</h3>
            </div>
            
            <Row>
                {relatedProducts.map((product) => (
                    <Col md={3} key={product.id} className="mb-4">
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RelatedProducts;
