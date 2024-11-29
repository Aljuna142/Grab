/*import React from 'react';
import '../../assets/styles/ShopSection.css';
import ProductCard from '../cards/ProductCard';

const ShopSection = ({ title, products = [] }) => { // Default products to an empty array if not provided
    return (
        <div className="shop-section">
            <h2 className="shop-title">{title}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ShopSection;*/





/*import React from 'react';
import '../../assets/styles/ShopSection.css';
import ProductCard from '../cards/ProductCard';

const ShopSection = ({ title, products }) => {
    return (
        <div className="shop-section">
            <h2 className="shop-title">{title}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ShopSection;*/


/*import React from 'react';
import '../../assets/styles/ShopSection.css';
import ProductCard from '../cards/ProductCard';

const ShopSection = ({ title, products = [] }) => {
    return (
        <div className="shop-section">
            <h2 className="shop-title">{title}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ShopSection;*/

/*import React from 'react';
import '../../assets/styles/ShopSection.css';
import ProductCard from '../cards/ProductCard';

const ShopSection = ({ title, products = [] }) => {
    return (
        <div className="shop-section">
            <h2 className="shop-title">{title}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}  // Use product.id for the key
                            id={product.id}  // Pass the id prop
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ShopSection;*/
import React from 'react';
import '../../assets/styles/ShopSection.css';
import ProductCard from '../cards/ProductCard';

const ShopSection = ({ title, products = [] }) => {
    return (
        <div className="shop-section">
            <h2 className="shop-title">{title}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}  // Use product.id for the key
                            id={product.id}  // Pass the id prop
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ShopSection;

