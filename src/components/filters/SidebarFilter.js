

/*showing brands import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Create this CSS file for styling

const SidebarFilter = ({ brands, onBrandChange, minPrice, maxPrice, onPriceChange }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

    const handleBrandChange = (e) => {
        const brand = e.target.value;
        const updatedBrands = e.target.checked
            ? [...selectedBrands, brand]
            : selectedBrands.filter(b => b !== brand);
        setSelectedBrands(updatedBrands);
        onBrandChange(updatedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        onPriceChange(range);
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p>Price: {priceRange[0]} AED - {priceRange[1]} AED</p>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                {brands.map(brand => (
                    <div key={brand} className="brand-checkbox">
                        <input
                            type="checkbox"
                            id={brand}
                            value={brand}
                            checked={selectedBrands.includes(brand)}
                            onChange={handleBrandChange}
                        />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarFilter;showing brands only*/



/*without ratings import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Make sure this CSS file exists and is properly imported

const SidebarFilter = ({ brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        
        setSelectedBrands(updatedBrands);
        onBrandChange(updatedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        onPriceChange(range);
    };

    const handleStockChange = (e) => {
        const { name, checked } = e.target;
        const updatedStockStatus = { ...stockStatus, [name]: checked };
        setStockStatus(updatedStockStatus);
        onStockChange(updatedStockStatus);
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p>Price: {priceRange[0]} AED - {priceRange[1]} AED</p>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                <ul>
                    {brands.map(brand => (
                        <li key={brand}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Stock </h3>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="onSale"
                            checked={stockStatus.onSale}
                            onChange={handleStockChange}
                        />
                        On Sale
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="inStock"
                            checked={stockStatus.inStock}
                            onChange={handleStockChange}
                        />
                        InStock
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="outOfStock"
                            checked={stockStatus.outOfStock}
                            onChange={handleStockChange}
                        />
                        Out of Stock
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;without ratings*/



/*without 4.5 import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Make sure this CSS file exists and is properly imported

const SidebarFilter = ({ brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });
    const [ratings, setRatings] = useState({
        4: false,
        5: false
    });

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        
        setSelectedBrands(updatedBrands);
        onBrandChange(updatedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        onPriceChange(range);
    };

    const handleStockChange = (e) => {
        const { name, checked } = e.target;
        const updatedStockStatus = { ...stockStatus, [name]: checked };
        setStockStatus(updatedStockStatus);
        onStockChange(updatedStockStatus);
    };

    const handleRatingChange = (rating) => {
        const updatedRatings = { ...ratings, [rating]: !ratings[rating] };
        setRatings(updatedRatings);
        onRatingChange(updatedRatings);
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p>Price: {priceRange[0]} AED - {priceRange[1]} AED</p>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                <ul>
                    {brands.map(brand => (
                        <li key={brand}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Stock</h3>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="onSale"
                            checked={stockStatus.onSale}
                            onChange={handleStockChange}
                        />
                        On Sale
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="inStock"
                            checked={stockStatus.inStock}
                            onChange={handleStockChange}
                        />
                        In Stock
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="outOfStock"
                            checked={stockStatus.outOfStock}
                            onChange={handleStockChange}
                        />
                        Out of Stock
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Ratings</h3>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleRatingChange(5)}
                            checked={ratings[5]}
                        />
                        5 Stars
                    </label>
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleRatingChange(4)}
                            checked={ratings[4]}
                        />
                        4 Stars
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;without 4.5*/

/*without sym import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Make sure this CSS file exists and is properly imported

const SidebarFilter = ({ brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false
    });
    const [selectedRatings, setSelectedRatings] = useState([]);

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        
        setSelectedBrands(updatedBrands);
        onBrandChange(updatedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        onPriceChange(range);
    };

    const handleStockChange = (e) => {
        const { name, checked } = e.target;
        const updatedStockStatus = { ...stockStatus, [name]: checked };
        setStockStatus(updatedStockStatus);
        onStockChange(updatedStockStatus);
    };

    const handleRatingChange = (rating) => {
        const updatedRatings = selectedRatings.includes(rating)
            ? selectedRatings.filter(r => r !== rating)
            : [...selectedRatings, rating];

        setSelectedRatings(updatedRatings);
        onRatingChange(updatedRatings);
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p>Price: {priceRange[0]} AED - {priceRange[1]} AED</p>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                <ul>
                    {brands.map(brand => (
                        <li key={brand}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Stock</h3>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="onSale"
                            checked={stockStatus.onSale}
                            onChange={handleStockChange}
                        />
                        On Sale
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="inStock"
                            checked={stockStatus.inStock}
                            onChange={handleStockChange}
                        />
                        In Stock
                    </label>
                </div>
                <div className="stock-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="outOfStock"
                            checked={stockStatus.outOfStock}
                            onChange={handleStockChange}
                        />
                        Out of Stock
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Ratings</h3>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedRatings.includes(4)}
                            onChange={() => handleRatingChange(4)}
                        />
                        4 Stars
                    </label>
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedRatings.includes(4.5)}
                            onChange={() => handleRatingChange(4.5)}
                        />
                        4.5 Stars
                    </label>
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedRatings.includes(5)}
                            onChange={() => handleRatingChange(5)}
                        />
                        5 Stars
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;without sym*/



import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Make sure this CSS file exists and is properly imported
import { FaStar } from 'react-icons/fa'; // React Icons for star ratings

const SidebarFilter = ({ brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false,
        rating4Star: false,
        rating45Star: false,
    });

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        
        setSelectedBrands(updatedBrands);
        onBrandChange(updatedBrands);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        onPriceChange(range);
    };

    const handleStockChange = (e) => {
        const { name, checked } = e.target;
        const updatedStockStatus = { ...stockStatus, [name]: checked };
        setStockStatus(updatedStockStatus);
        onStockChange(updatedStockStatus);
    };

    const renderStarRating = (rating) => {
        return (
            <div className="rating-stars">
                {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className="star-icon" style={{ opacity: i < rating ? 1 : 0.5 }} />
                ))}
            </div>
        );
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p>Price: {priceRange[0]} AED - {priceRange[1]} AED</p>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                <ul>
                    {brands.map(brand => (
                        <li key={brand}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Stock</h3>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="onSale"
                            checked={stockStatus.onSale}
                            onChange={handleStockChange}
                        />
                        On Sale
                    </label>
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="inStock"
                            checked={stockStatus.inStock}
                            onChange={handleStockChange}
                        />
                        In Stock
                    </label>
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="outOfStock"
                            checked={stockStatus.outOfStock}
                            onChange={handleStockChange}
                        />
                        Out of Stock
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Ratings</h3>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="rating4Star"
                            checked={stockStatus.rating4Star}
                            onChange={handleStockChange}
                        />
                        
                    </label>
                    {renderStarRating(4)}
                </div>
                <div className="rating-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="rating45Star"
                            checked={stockStatus.rating45Star}
                            onChange={handleStockChange}
                        />
                        
                    </label>
                    {renderStarRating(4.5)}
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;



