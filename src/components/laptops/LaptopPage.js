

/*showing brands import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarFilter from '../filters/SidebarFilter'; // Import the updated SidebarFilter component
import ProductCard from '../cards/ProductCard'; // Import ProductCard for rendering products
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products); // Initially, all products are shown
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(laptop => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
            const matchesPrice = laptop.price >= priceRange[0] && laptop.price <= priceRange[1];
            return matchesBrand && matchesPrice;
        });
        setFilteredLaptops(filtered);
    }, [selectedBrands, priceRange, laptops]);

    const handleBrandChange = (selectedBrands) => {
        setSelectedBrands(selectedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']} // List of brands
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((laptop) => (
                            <ProductCard
                                key={laptop.id}
                                id={laptop.id}
                                image={laptop.image}
                                name={laptop.name}
                                rating={laptop.rating}
                                reviews={laptop.reviews}
                                price={laptop.price}
                                originalPrice={laptop.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LaptopPage; showing brands */







/*without stock import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarFilter from '../filters/SidebarFilter'; // Import the SidebarFilter component
import ProductCard from '../cards/ProductCard'; // Import ProductCard for rendering products
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products); // Initially, all products are shown
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.inStock) ||
                (stockStatus.outOfStock && product.outOfStock);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true);
        });
        setFilteredLaptops(filtered);
    }, [selectedBrands, priceRange, stockStatus, laptops]);

    const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleStockChange = (status) => {
        setStockStatus(status);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']} // Adjust if needed
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((product) => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LaptopPage;*/


/* without toast import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarFilter from '../filters/SidebarFilter'; // Import the SidebarFilter component
import ProductCard from '../cards/ProductCard'; // Import ProductCard for rendering products
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products); // Initially, all products are shown
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true);
        });
        setFilteredLaptops(filtered);
    }, [selectedBrands, priceRange, stockStatus, laptops]);

    const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleStockChange = (status) => {
        setStockStatus(status);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']} // Adjust if needed
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((product) => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LaptopPage;without toast*/


/*without ratings import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify'; // Import toast
import SidebarFilter from '../filters/SidebarFilter'; // Import the SidebarFilter component
import ProductCard from '../cards/ProductCard'; // Import ProductCard for rendering products
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

// Import ToastContainer to display toast messages
import 'react-toastify/dist/ReactToastify.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products); // Initially, all products are shown
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true);
        });
        setFilteredLaptops(filtered);

        // Display toast message if out-of-stock filter is applied and no products are found
        if (stockStatus.outOfStock && filtered.length === 0) {
            toast.info('We will notify you when out-of-stock products are available.');
        }
    }, [selectedBrands, priceRange, stockStatus, laptops]);

    const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleStockChange = (status) => {
        setStockStatus(status);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']} // Adjust if needed
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((product) => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
            {/* Add ToastContainer to display toast messages }
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;without ratings */




/*without 4.5 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import SidebarFilter from '../filters/SidebarFilter'; // Import the SidebarFilter component
import ProductCard from '../cards/ProductCard'; // Import ProductCard for rendering products
import ProductRatings from '../cards/ProductRatings'; // Import ProductRatings component
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

// Import ToastContainer to display toast messages
import 'react-toastify/dist/ReactToastify.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });
    const [ratings, setRatings] = useState({
        4: false,
        5: false
    });

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products); // Initially, all products are shown
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = 
                (ratings[5] && product.rating === 5) ||
                (ratings[4] && product.rating === 4);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true) && (Object.values(ratings).includes(true) ? matchesRating : true);
        });
        setFilteredLaptops(filtered);

        // Display toast message if out-of-stock filter is applied and no products are found
        if (stockStatus.outOfStock && filtered.length === 0) {
            toast.info('We will notify you when out-of-stock products are available.');
        }
    }, [selectedBrands, priceRange, stockStatus, ratings, laptops]);

    const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleStockChange = (status) => {
        setStockStatus(status);
    };

    const handleRatingChange = (ratings) => {
        setRatings(ratings);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']} // Adjust if needed
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
                onRatingChange={handleRatingChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((product) => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
            {/* Add ToastContainer to display toast messages }
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;without 4.5*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import '../../assets/styles/LaptopPage.css';
import 'react-toastify/dist/ReactToastify.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });
    const [selectedRatings, setSelectedRatings] = useState([]);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    useEffect(() => {
        const filtered = laptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(product.rating);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true) && matchesRating;
        });
        setFilteredLaptops(filtered);

        if (stockStatus.outOfStock && filtered.length === 0) {
            toast.info('We will notify you when out-of-stock products are available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, laptops]);

    const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleStockChange = (status) => {
        setStockStatus(status);
    };

    const handleRatingChange = (ratings) => {
        setSelectedRatings(ratings);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                onBrandChange={handleBrandChange}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
                onRatingChange={handleRatingChange}
            />
            <div style={{ flexGrow: 1 }}>
                <h2>Laptops</h2>
                <div className="laptop-cards-container">
                    {filteredLaptops.length > 0 ? (
                        filteredLaptops.map((product) => (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;






