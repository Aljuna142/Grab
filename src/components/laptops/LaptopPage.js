

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




 /*import React, { useState, useEffect } from 'react';
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
            {/* Add ToastContainer to display toast messages}
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;*/


/*import React, { useState, useEffect } from 'react';
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
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [ratings, setRatings] = useState({ 4: false, 5: false });
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

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
            const matchesRating = 
                (ratings[5] && product.rating === 5) ||
                (ratings[4] && product.rating === 4);
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return matchesBrand && matchesPrice && (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                   (Object.values(ratings).includes(true) ? matchesRating : true) &&
                   matchesProcessor && matchesProcessorType && matchesMemory &&
                   matchesStorage && matchesGraphics && matchesGraphicsCard && matchesScreenSize;
        });
        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, ratings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                onBrandChange={setSelectedBrands}
                minPrice={0}
                maxPrice={27330}
                onPriceChange={setPriceRange}
                onStockChange={setStockStatus}
                onRatingChange={setRatings}
                onProcessorChange={setSelectedProcessors}
                onProcessorTypeChange={setSelectedProcessorTypes}
                onMemoryChange={setSelectedMemory}
                onStorageChange={setSelectedStorage}
                onGraphicsChange={setSelectedGraphics}
                onGraphicsCardChange={setSelectedGraphicsCards}
                onScreenSizeChange={setSelectedScreenSizes}
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

export default LaptopPage;*/


/*rating order import React, { useState, useEffect } from 'react';
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
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                onBrandChange={setSelectedBrands}
                minPrice={0}
                maxPrice={27330}
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

export default LaptopPage;rating order okay*/


/*not showing import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import Banners from '../banners/Banner'; // Import the Banners component
import '../../assets/styles/LaptopPage.css';
import 'react-toastify/dist/ReactToastify.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
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
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    return (
        <div>
            <Banners imageUrls={['url1.jpg', 'url2.jpg', 'url3.jpg']} /> {/* Add your banner URLs here }
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;not showing bannner*/


// src/components/laptops/LaptopPage.js

/*goodimport React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner'; // Import the SingleBanner component
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
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
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
            <ToastContainer />
        </div>
    );
};

export default LaptopPage;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';


import bannerLED from '../banners/images/led.png'; // Import the banner image


import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options">
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;ok*/



/*11import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';

import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options">
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
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
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options">
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average-rating">Average Rating</option>
                        <option value="default">Default</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;4*/


/*6import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout
    const [sortOption, setSortOption] = useState('default'); // Default sort option

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
            }
        };
        fetchLaptops();
    }, []);

    useEffect(() => {
        let sortedLaptops = [...laptops];

        if (sortOption === 'popularity') {
            sortedLaptops.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'low-to-high') {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high-to-low') {
            sortedLaptops.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'latest') {
            sortedLaptops.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortOption === 'average rating') {
            sortedLaptops.sort((a, b) => b.rating - a.rating);
        }

        const filtered = sortedLaptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops, sortOption]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options" value={sortOption} onChange={handleSortChange}>
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average rating">Average Rating</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                    <button 
                        className={layout === 'grid-6' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-6')}
                    >
                        6
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;6*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout
    const [sortOption, setSortOption] = useState('default'); // Default sort option

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
            }
        };
        fetchLaptops();
    }, []);

    useEffect(() => {
        let sortedLaptops = [...laptops];

        if (sortOption === 'popularity') {
            sortedLaptops.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'low-to-high') {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high-to-low') {
            sortedLaptops.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'latest') {
            sortedLaptops.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortOption === 'average rating') {
            sortedLaptops.sort((a, b) => b.rating - a.rating);
        }

        const filtered = sortedLaptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops, sortOption]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options" value={sortOption} onChange={handleSortChange}>
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average rating">Average Rating</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                    <button 
                        className={layout === 'grid-6' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-6')}
                    >
                        6
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-2'); // Default layout
    const [sortOption, setSortOption] = useState('default'); // Default sort option

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
            }
        };
        fetchLaptops();
    }, []);

    useEffect(() => {
        let sortedLaptops = [...laptops];

        if (sortOption === 'popularity') {
            sortedLaptops.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'low-to-high') {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high-to-low') {
            sortedLaptops.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'latest') {
            sortedLaptops.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortOption === 'average rating') {
            sortedLaptops.sort((a, b) => b.rating - a.rating);
        }

        const filtered = sortedLaptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops, sortOption]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options" value={sortOption} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average rating">Average Rating</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                    <button 
                        className={layout === 'grid-6' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-6')}
                    >
                        6
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;*/


/*cARD SIZE ISSUE import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-3'); // Default layout to 3 columns
    const [sortOption, setSortOption] = useState('default'); // Default sort option

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
            }
        };
        fetchLaptops();
    }, []);

    useEffect(() => {
        let sortedLaptops = [...laptops];

        if (sortOption === 'popularity') {
            sortedLaptops.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'low-to-high') {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high-to-low') {
            sortedLaptops.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'latest') {
            sortedLaptops.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortOption === 'average rating') {
            sortedLaptops.sort((a, b) => b.rating - a.rating);
        }

        const filtered = sortedLaptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops, sortOption]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options" value={sortOption} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average rating">Average Rating</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                    <button 
                        className={layout === 'grid-6' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-6')}
                    >
                        6
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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

export default LaptopPage;*/



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SidebarFilter from '../filters/SidebarFilter';
import ProductCard from '../cards/ProductCard';
import SingleBanner from '../banners/SingleBanner';
import bannerLED from '../banners/images/led.png'; // Import the banner image
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/LaptopPage.css';

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 27330]);
    const [stockStatus, setStockStatus] = useState({ onSale: false, inStock: false, outOfStock: false });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [layout, setLayout] = useState('grid-3'); // Default layout to 3 columns
    const [sortOption, setSortOption] = useState('default'); // Default sort option

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
                setFilteredLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
                toast.error('Failed to fetch laptops. Please try again later.');
            }
        };
        fetchLaptops();
    }, []);

    useEffect(() => {
        let sortedLaptops = [...laptops];

        if (sortOption === 'popularity') {
            sortedLaptops.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'low-to-high') {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high-to-low') {
            sortedLaptops.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'latest') {
            sortedLaptops.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (sortOption === 'average rating') {
            sortedLaptops.sort((a, b) => b.rating - a.rating);
        }

        const filtered = sortedLaptops.filter(product => {
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesStock = 
                (stockStatus.onSale && product.onSale) ||
                (stockStatus.inStock && product.countInStock > 0) ||
                (stockStatus.outOfStock && product.countInStock === 0);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating));
            const matchesProcessor = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
            const matchesProcessorType = selectedProcessorTypes.length === 0 || selectedProcessorTypes.includes(product.processorType);
            const matchesMemory = selectedMemory.length === 0 || selectedMemory.includes(product.memory);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
            const matchesGraphics = selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics);
            const matchesGraphicsCard = selectedGraphicsCards.length === 0 || selectedGraphicsCards.includes(product.graphicsCard);
            const matchesScreenSize = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize);

            return (
                matchesBrand &&
                matchesPrice &&
                (Object.values(stockStatus).includes(true) ? matchesStock : true) &&
                matchesRating &&
                matchesProcessor &&
                matchesProcessorType &&
                matchesMemory &&
                matchesStorage &&
                matchesGraphics &&
                matchesGraphicsCard &&
                matchesScreenSize
            );
        });

        setFilteredLaptops(filtered);

        if (filtered.length === 0) {
            toast.info('No products available.');
        }
    }, [selectedBrands, priceRange, stockStatus, selectedRatings, selectedProcessors, selectedProcessorTypes, selectedMemory, selectedStorage, selectedGraphics, selectedGraphicsCards, selectedScreenSizes, laptops, sortOption]);

    const handleLayoutChange = (layoutClass) => {
        setLayout(layoutClass);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <SingleBanner 
                imageUrl={bannerLED} 
                altText="Microsoft Surface Banner"
            />
            <div className="sort-container">
                <div className="sort-dropdown">
                    <label htmlFor="sort-options">Sort by:</label>
                    <select id="sort-options" value={sortOption} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="popularity">Popularity</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="latest">Latest</option>
                        <option value="average rating">Average Rating</option>
                    </select>
                </div>
                <div className="layout-selector">
                    <button 
                        className={layout === 'grid-2' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-2')}
                    >
                        2
                    </button>
                    <button 
                        className={layout === 'grid-3' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-3')}
                    >
                        3
                    </button>
                    <button 
                        className={layout === 'grid-4' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-4')}
                    >
                        4
                    </button>
                    <button 
                        className={layout === 'grid-6' ? 'selected' : ''} 
                        onClick={() => handleLayoutChange('grid-6')}
                    >
                        6
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <SidebarFilter
                    brands={['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell']}
                    onBrandChange={setSelectedBrands}
                    minPrice={0}
                    maxPrice={27330}
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
                <div className={`laptop-cards-container ${layout}`}>
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
                                countInStock={product.countInStock}
                                size="expanded" 
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
