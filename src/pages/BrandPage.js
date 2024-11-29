/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';
import '../assets/styles/BrandPage.css'; // Ensure this path is correct

const BrandPage = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandProducts = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/v1/products?brand=${brandName}`);
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching brand products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchBrandProducts();
    }, [brandName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="brand-page-container">
            <h1>{brandName} Products</h1>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <div>No products available for {brandName}</div>
                )}
            </div>
        </div>
    );
};

export default BrandPage;*/

  /*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';

const BrandPage = () => {
    const { brandName } = useParams(); // Get the brand name from the URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products and filter by brand name
                const { data } = await axios.get('http://localhost:5000/api/v1/products');
                const filteredProducts = data.products.filter(
                    product => product.brand.toLowerCase() === brandName.toLowerCase()
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [brandName]); // Re-run effect when brandName changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            
            <div className="product-cards-container">
                {products.map(product => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        image={product.image}
                        name={product.name}
                        rating={product.rating}
                        reviews={product.numOfReviews}
                        price={product.price}
                        originalPrice={product.originalPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandPage;without side bar*/


/*sidebarimport React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';
import SidebarFilter from '../components/filters/SidebarFilter';

const BrandPage = () => {
    const { brandName } = useParams(); // Get the brand name from the URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Dummy data for sidebar filters (Replace these with actual data or props as needed)
    const brands = ['Asus', 'Lenovo', 'MSI']; // Example brands
    const minPrice = 0;
    const maxPrice = 5000;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products and filter by brand name
                const { data } = await axios.get('http://localhost:5000/api/v1/products');
                const filteredProducts = data.products.filter(
                    product => product.brand.toLowerCase() === brandName.toLowerCase()
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [brandName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter 
                brands={brands}
                onBrandChange={() => {}} // Implement brand change handler as needed
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={() => {}} // Implement price change handler as needed
                onStockChange={() => {}} // Implement stock change handler as needed
                onRatingChange={() => {}} // Implement rating change handler as needed
                onProcessorChange={() => {}} // Implement processor change handler as needed
                onProcessorTypeChange={() => {}} // Implement processor type change handler as needed
                onMemoryChange={() => {}} // Implement memory change handler as needed
                onStorageChange={() => {}} // Implement storage change handler as needed
                onGraphicsChange={() => {}} // Implement graphics change handler as needed
                onGraphicsCardChange={() => {}} // Implement graphics card change handler as needed
                onScreenSizeChange={() => {}} // Implement screen size change handler as needed
            />
            <div className="product-cards-container">
                
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available for this brand.</p>
                )}
            </div>
        </div>
    );
};

export default BrandPage;sidebar*/

/*side bar filtr lite work import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';
import SidebarFilter from '../components/filters/SidebarFilter';

const BrandPage = () => {
    const { brandName } = useParams(); // Get the brand name from the URL
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // State for sidebar filters
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products');
                setProducts(data.products);
                filterProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts(products);
    }, [brandName, selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes]);

    const filterProducts = (products) => {
        let filtered = products.filter(
            product => product.brand.toLowerCase() === brandName.toLowerCase()
        );

        if (selectedBrands.length > 0) {
            filtered = filtered.filter(product => selectedBrands.includes(product.brand));
        }

        filtered = filtered.filter(product => 
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        if (selectedRatings.length > 0) {
            filtered = filtered.filter(product => selectedRatings.includes(product.rating));
        }

        // Add additional filtering logic here based on other sidebar filters
        // For example, filtering by stock status, processors, memory, etc.

        setFilteredProducts(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Asus', 'Lenovo', 'MSI']} // Example brands
                onBrandChange={setSelectedBrands}
                minPrice={0}
                maxPrice={5000}
                onPriceChange={setPriceRange}
                onStockChange={setStockStatus}
                onRatingChange={setSelectedRatings}
                onProcessorChange={setSelectedProcessors}
                onProcessorTypeChange={setSelectedProcessorTypes}
                onMemoryChange={setSelectedMemory}
                onStorageChange={setSelectedStorage}
                onGraphicsChange={setSelectedGraphics}
                onGraphicsCardChange={setSelectedGraphicsCards}
                onScreenSizeChange={setSelectedScreenSizes}
            />
            <div className="product-cards-container">
                <h1>{brandName} Products</h1>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available for this brand.</p>
                )}
            </div>
        </div>
    );
};

export default BrandPage;*/


/*filteric logic little import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';
import SidebarFilter from '../components/filters/SidebarFilter';

const BrandPage = () => {
    const { brandName } = useParams(); // Get the brand name from the URL
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for sidebar filters
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products');
                setProducts(data.products);
                filterProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts(products);
    }, [brandName, selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes]);

    const filterProducts = (products) => {
        let filtered = products;

        // Apply brand filter
        if (brandName) {
            filtered = filtered.filter(
                product => product.brand.toLowerCase() === brandName.toLowerCase()
            );
        }

        // Apply sidebar filters
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(product => selectedBrands.includes(product.brand));
        }

        filtered = filtered.filter(product => 
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        if (selectedRatings.length > 0) {
            filtered = filtered.filter(product => selectedRatings.includes(product.rating));
        }

        if (selectedProcessors.length > 0) {
            filtered = filtered.filter(product => selectedProcessors.includes(product.processor));
        }

        if (selectedProcessorTypes.length > 0) {
            filtered = filtered.filter(product => selectedProcessorTypes.includes(product.processorType));
        }

        if (selectedMemory.length > 0) {
            filtered = filtered.filter(product => selectedMemory.includes(product.memory));
        }

        if (selectedStorage.length > 0) {
            filtered = filtered.filter(product => selectedStorage.includes(product.storage));
        }

        if (selectedGraphics.length > 0) {
            filtered = filtered.filter(product => selectedGraphics.includes(product.graphics));
        }

        if (selectedGraphicsCards.length > 0) {
            filtered = filtered.filter(product => selectedGraphicsCards.includes(product.graphicsCard));
        }

        if (selectedScreenSizes.length > 0) {
            filtered = filtered.filter(product => selectedScreenSizes.includes(product.screenSize));
        }

        // Apply stock status filters
        if (stockStatus.onSale) {
            filtered = filtered.filter(product => product.onSale);
        }
        if (stockStatus.inStock) {
            filtered = filtered.filter(product => product.inStock);
        }
        if (stockStatus.outOfStock) {
            filtered = filtered.filter(product => !product.inStock);
        }

        setFilteredProducts(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Asus', 'Lenovo', 'MSI']} // Example brands
                onBrandChange={setSelectedBrands}
                minPrice={0}
                maxPrice={5000}
                onPriceChange={setPriceRange}
                onStockChange={setStockStatus}
                onRatingChange={setSelectedRatings}
                onProcessorChange={setSelectedProcessors}
                onProcessorTypeChange={setSelectedProcessorTypes}
                onMemoryChange={setSelectedMemory}
                onStorageChange={setSelectedStorage}
                onGraphicsChange={setSelectedGraphics}
                onGraphicsCardChange={setSelectedGraphicsCards}
                onScreenSizeChange={setSelectedScreenSizes}
            />
            <div className="product-cards-container">
                <h1>{brandName ? `${brandName} Products` : 'Products'}</h1>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))
                ) : (
                    <p>No products available with the selected filters.</p>
                )}
            </div>
        </div>
    );
};

export default BrandPage;*/


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/cards/ProductCard';
import SingleBanner from '../components/banners/SingleBanner'; // Import the SingleBanner component
import bannerLED from '../components/banners/images/led.png'; // Import the banner image
const BrandPage = () => {
    const { brandName } = useParams(); // Get the brand name from the URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products from the API
                const { data } = await axios.get('http://localhost:5000/api/v1/products');

                // Debugging: Log the fetched data
                console.log('Fetched products:', data.products);

                // Filter products by the brand name from the URL
                const filteredProducts = data.products.filter(
                    product => product.brand.trim().toLowerCase() === brandName.trim().toLowerCase()
                );

                // Debugging: Log the filtered products
                console.log('Filtered products:', filteredProducts);

                // Set the filtered products to state
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [brandName]); // Re-run effect when brandName changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (products.length === 0) return <div>No products found for {brandName}</div>;

    return (
        <div>
            {/* Render the SingleBanner component at the top of the page */}
            <SingleBanner 
                imageUrl={bannerLED} 
                altText={`Banner for ${brandName}`} 
            />

           {/* <h1>Products for {brandName}</h1>*/}
            <div className="product-cards-container">
                {products.map(product => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        image={product.image}
                        name={product.name}
                        rating={product.rating}
                        reviews={product.numOfReviews}
                        price={product.price}
                        originalPrice={product.originalPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandPage;
