

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



/*till ratingsimport React, { useState } from 'react';
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

export default SidebarFilter;till ratings*/


/*noimport React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Ensure this CSS handles the invisible scroll bar
import { FaStar } from 'react-icons/fa';

const SidebarFilter = ({
    brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange,
    onProcessorChange, onProcessorTypeChange, onMemoryChange, onStorageChange, onGraphicsChange, onGraphicsCardChange, onScreenSizeChange
}) => {
    // States for the different filters
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false,
        rating4Star: false,
        rating45Star: false,
    });
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    // Generic handler for checkbox changes
    const handleCheckboxChange = (selectedItems, setSelectedItems, onChange, item) => {
        const updatedItems = selectedItems.includes(item)
            ? selectedItems.filter(i => i !== item)
            : [...selectedItems, item];
        setSelectedItems(updatedItems);
        onChange(updatedItems);
    };

    const handleBrandChange = (brand) => handleCheckboxChange(selectedBrands, setSelectedBrands, onBrandChange, brand);
    const handleProcessorChange = (processor) => handleCheckboxChange(selectedProcessors, setSelectedProcessors, onProcessorChange, processor);
    const handleProcessorTypeChange = (type) => handleCheckboxChange(selectedProcessorTypes, setSelectedProcessorTypes, onProcessorTypeChange, type);
    const handleMemoryChange = (memory) => handleCheckboxChange(selectedMemory, setSelectedMemory, onMemoryChange, memory);
    const handleStorageChange = (storage) => handleCheckboxChange(selectedStorage, setSelectedStorage, onStorageChange, storage);
    const handleGraphicsChange = (graphics) => handleCheckboxChange(selectedGraphics, setSelectedGraphics, onGraphicsChange, graphics);
    const handleGraphicsCardChange = (card) => handleCheckboxChange(selectedGraphicsCards, setSelectedGraphicsCards, onGraphicsCardChange, card);
    const handleScreenSizeChange = (size) => handleCheckboxChange(selectedScreenSizes, setSelectedScreenSizes, onScreenSizeChange, size);

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
                <Slider range min={minPrice} max={maxPrice} value={priceRange} onChange={handlePriceChange} />
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
                <h3>Processor</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'Qualcomm'].map(processor => (
                        <li key={processor}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessors.includes(processor)}
                                    onChange={() => handleProcessorChange(processor)}
                                />
                                {processor}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Processor Type</h3>
                <ul className="filter-scroll">
                    {['Celeron', 'Core i3', 'Core i5', 'Core i7', 'Core i9', 'Core Ultra 5', 'Core Ultra 7', 'M2', 'M3', 'M3 Pro', 'Pentium', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9', 'Ryzen Z1', 'SQ3'].map(type => (
                        <li key={type}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorTypes.includes(type)}
                                    onChange={() => handleProcessorTypeChange(type)}
                                />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Memory RAM</h3>
                <ul className="filter-scroll">
                    {['4GB', '8GB', '12GB', '16GB', '18GB', '32GB', '64GB'].map(memory => (
                        <li key={memory}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedMemory.includes(memory)}
                                    onChange={() => handleMemoryChange(memory)}
                                />
                                {memory}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Storage</h3>
                <ul className="filter-scroll">
                    {['512 GB SSD', '1TB SSD', '1TB HDD', '1TB HDD +12G GB SSD', '1TB HDD+256GB SSD', '2TB SSD'].map(storage => (
                        <li key={storage}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => handleStorageChange(storage)}
                                />
                                {storage}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'NVIDIA', 'Qualcomm'].map(graphics => (
                        <li key={graphics}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphics.includes(graphics)}
                                    onChange={() => handleGraphicsChange(graphics)}
                                />
                                {graphics}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics Card</h3>
                <ul className="filter-scroll">
                    {['2GB', '4GB', '6GB', '8GB', '12GB', '16GB'].map(card => (
                        <li key={card}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphicsCards.includes(card)}
                                    onChange={() => handleGraphicsCardChange(card)}
                                />
                                {card}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Screen Size</h3>
                <ul className="filter-scroll">
                    {['12.4"', '13.3"', '13.4"', '13.5"', '13.6"', '13"', '14"', '15.3"', '15.6"', '16.2"', '16.2"', '16"', '17.3"', '18"'].map(size => (
                        <li key={size}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedScreenSizes.includes(size)}
                                    onChange={() => handleScreenSizeChange(size)}
                                />
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarFilter;no*/




/*filter working import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Ensure this CSS handles the invisible scroll bar
import { FaStar } from 'react-icons/fa';

const SidebarFilter = ({
    brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange,
    onProcessorChange, onProcessorTypeChange, onMemoryChange, onStorageChange, onGraphicsChange, onGraphicsCardChange, onScreenSizeChange
}) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false,
        rating4Star: false,
        rating45Star: false,
    });
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    // Generic handler for checkbox changes
    const handleCheckboxChange = (selectedItems, setSelectedItems, onChange, item) => {
        const updatedItems = selectedItems.includes(item)
            ? selectedItems.filter(i => i !== item)
            : [...selectedItems, item];
        setSelectedItems(updatedItems);
        onChange(updatedItems);
    };

    const handleBrandChange = (brand) => handleCheckboxChange(selectedBrands, setSelectedBrands, onBrandChange, brand);
    const handleProcessorChange = (processor) => handleCheckboxChange(selectedProcessors, setSelectedProcessors, onProcessorChange, processor);
    const handleProcessorTypeChange = (type) => handleCheckboxChange(selectedProcessorTypes, setSelectedProcessorTypes, onProcessorTypeChange, type);
    const handleMemoryChange = (memory) => handleCheckboxChange(selectedMemory, setSelectedMemory, onMemoryChange, memory);
    const handleStorageChange = (storage) => handleCheckboxChange(selectedStorage, setSelectedStorage, onStorageChange, storage);
    const handleGraphicsChange = (graphics) => handleCheckboxChange(selectedGraphics, setSelectedGraphics, onGraphicsChange, graphics);
    const handleGraphicsCardChange = (card) => handleCheckboxChange(selectedGraphicsCards, setSelectedGraphicsCards, onGraphicsCardChange, card);
    const handleScreenSizeChange = (size) => handleCheckboxChange(selectedScreenSizes, setSelectedScreenSizes, onScreenSizeChange, size);

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
                <Slider range min={minPrice} max={maxPrice} value={priceRange} onChange={handlePriceChange} />
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
                <h3>Processor</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'Qualcomm'].map(processor => (
                        <li key={processor}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessors.includes(processor)}
                                    onChange={() => handleProcessorChange(processor)}
                                />
                                {processor}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Processor Type</h3>
                <ul className="filter-scroll">
                    {['Celeron', 'Core i3', 'Core i5', 'Core i7', 'Core i9', 'Core Ultra 5', 'Core Ultra 7', 'M2', 'M3', 'M3 Pro', 'Pentium', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9', 'Ryzen Z1', 'SQ3'].map(type => (
                        <li key={type}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorTypes.includes(type)}
                                    onChange={() => handleProcessorTypeChange(type)}
                                />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Memory RAM</h3>
                <ul className="filter-scroll">
                    {['4GB', '8GB', '12GB', '16GB', '18GB', '32GB', '64GB'].map(memory => (
                        <li key={memory}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedMemory.includes(memory)}
                                    onChange={() => handleMemoryChange(memory)}
                                />
                                {memory}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Storage</h3>
                <ul className="filter-scroll">
                    {['512 GB SSD', '1TB SSD', '1TB HDD', '1TB HDD +12G GB SSD', '1TB HDD+256GB SSD', '2TB SSD'].map(storage => (
                        <li key={storage}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => handleStorageChange(storage)}
                                />
                                {storage}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'NVIDIA', 'Qualcomm'].map(graphics => (
                        <li key={graphics}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphics.includes(graphics)}
                                    onChange={() => handleGraphicsChange(graphics)}
                                />
                                {graphics}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics Card</h3>
                <ul className="filter-scroll">
                    {['2GB', '4GB', '6GB', '8GB', '12GB', '16GB'].map(card => (
                        <li key={card}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphicsCards.includes(card)}
                                    onChange={() => handleGraphicsCardChange(card)}
                                />
                                {card}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Screen Size</h3>
                <ul className="filter-scroll">
                    {['12.4"', '13.3"', '13.4"', '13.5"', '13.6"', '13"', '14"', '15.3"', '15.6"', '16.2"', '16.2"', '16"', '17.3"', '18"'].map(size => (
                        <li key={size}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedScreenSizes.includes(size)}
                                    onChange={() => handleScreenSizeChange(size)}
                                />
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarFilter;*/



/*ratings belowimport React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Ensure this CSS handles the invisible scroll bar
import { FaStar } from 'react-icons/fa';

const SidebarFilter = ({
    brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange,
    onProcessorChange, onProcessorTypeChange, onMemoryChange, onStorageChange, onGraphicsChange, onGraphicsCardChange, onScreenSizeChange
}) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false,
    });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    // Generic handler for checkbox changes
    const handleCheckboxChange = (selectedItems, setSelectedItems, onChange, item) => {
        const updatedItems = selectedItems.includes(item)
            ? selectedItems.filter(i => i !== item)
            : [...selectedItems, item];
        setSelectedItems(updatedItems);
        onChange(updatedItems);
    };

    const handleBrandChange = (brand) => handleCheckboxChange(selectedBrands, setSelectedBrands, onBrandChange, brand);
    const handleProcessorChange = (processor) => handleCheckboxChange(selectedProcessors, setSelectedProcessors, onProcessorChange, processor);
    const handleProcessorTypeChange = (type) => handleCheckboxChange(selectedProcessorTypes, setSelectedProcessorTypes, onProcessorTypeChange, type);
    const handleMemoryChange = (memory) => handleCheckboxChange(selectedMemory, setSelectedMemory, onMemoryChange, memory);
    const handleStorageChange = (storage) => handleCheckboxChange(selectedStorage, setSelectedStorage, onStorageChange, storage);
    const handleGraphicsChange = (graphics) => handleCheckboxChange(selectedGraphics, setSelectedGraphics, onGraphicsChange, graphics);
    const handleGraphicsCardChange = (card) => handleCheckboxChange(selectedGraphicsCards, setSelectedGraphicsCards, onGraphicsCardChange, card);
    const handleScreenSizeChange = (size) => handleCheckboxChange(selectedScreenSizes, setSelectedScreenSizes, onScreenSizeChange, size);

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
        handleCheckboxChange(selectedRatings, setSelectedRatings, onRatingChange, rating);
    };

    return (
        <div className="sidebar-filter">
            <div className="filter-section">
                <h3>Price</h3>
                <Slider range min={minPrice} max={maxPrice} value={priceRange} onChange={handlePriceChange} />
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
                <h3>Processor</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'Qualcomm'].map(processor => (
                        <li key={processor}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessors.includes(processor)}
                                    onChange={() => handleProcessorChange(processor)}
                                />
                                {processor}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Processor Type</h3>
                <ul className="filter-scroll">
                    {['Celeron', 'Core i3', 'Core i5', 'Core i7', 'Core i9', 'Core Ultra 5', 'Core Ultra 7', 'M2', 'M3', 'M3 Pro', 'Pentium', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9', 'Ryzen Z1', 'SQ3'].map(type => (
                        <li key={type}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorTypes.includes(type)}
                                    onChange={() => handleProcessorTypeChange(type)}
                                />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Memory RAM</h3>
                <ul className="filter-scroll">
                    {['4GB', '8GB', '12GB', '16GB', '18GB', '32GB', '64GB'].map(memory => (
                        <li key={memory}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedMemory.includes(memory)}
                                    onChange={() => handleMemoryChange(memory)}
                                />
                                {memory}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Storage</h3>
                <ul className="filter-scroll">
                    {['512 GB SSD', '1TB SSD', '1TB HDD', '1TB HDD +12G GB SSD', '1TB HDD+256GB SSD', '2TB SSD'].map(storage => (
                        <li key={storage}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => handleStorageChange(storage)}
                                />
                                {storage}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'NVIDIA', 'Qualcomm'].map(graphics => (
                        <li key={graphics}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphics.includes(graphics)}
                                    onChange={() => handleGraphicsChange(graphics)}
                                />
                                {graphics}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics Card</h3>
                <ul className="filter-scroll">
                    {['2GB', '4GB', '6GB', '8GB', '12GB', '16GB'].map(card => (
                        <li key={card}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphicsCards.includes(card)}
                                    onChange={() => handleGraphicsCardChange(card)}
                                />
                                {card}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Screen Size</h3>
                <ul className="filter-scroll">
                    {['12.4"', '13.3"', '13.4"', '13.5"', '13.6"', '13"', '14"', '15.3"', '15.6"', '16.2"', '16.2"', '16"', '17.3"', '18"'].map(size => (
                        <li key={size}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedScreenSizes.includes(size)}
                                    onChange={() => handleScreenSizeChange(size)}
                                />
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ratings Filter Section }
            <div className="filter-section">
                <h3>Ratings</h3>
                <ul>
                    {[5, 4, 3, 2, 1].map(star => (
                        <li key={star}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedRatings.includes(star)}
                                    onChange={() => handleRatingChange(star)}
                                />
                                {[...Array(star)].map((_, i) => (
                                    <FaStar key={i} color="gold" />
                                ))}
                                & Up
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarFilter;ratings below*/

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../assets/styles/SidebarFilter.css'; // Ensure this CSS handles the invisible scroll bar
import { FaStar } from 'react-icons/fa';

const SidebarFilter = ({
    brands, onBrandChange, minPrice, maxPrice, onPriceChange, onStockChange, onRatingChange,
    onProcessorChange, onProcessorTypeChange, onMemoryChange, onStorageChange, onGraphicsChange, onGraphicsCardChange, onScreenSizeChange
}) => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [stockStatus, setStockStatus] = useState({
        onSale: false,
        inStock: false,
        outOfStock: false,
    });
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedProcessorTypes, setSelectedProcessorTypes] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedGraphics, setSelectedGraphics] = useState([]);
    const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);

    // Generic handler for checkbox changes
    const handleCheckboxChange = (selectedItems, setSelectedItems, onChange, item) => {
        const updatedItems = selectedItems.includes(item)
            ? selectedItems.filter(i => i !== item)
            : [...selectedItems, item];
        setSelectedItems(updatedItems);
        onChange(updatedItems);
    };

    const handleBrandChange = (brand) => handleCheckboxChange(selectedBrands, setSelectedBrands, onBrandChange, brand);
    const handleProcessorChange = (processor) => handleCheckboxChange(selectedProcessors, setSelectedProcessors, onProcessorChange, processor);
    const handleProcessorTypeChange = (type) => handleCheckboxChange(selectedProcessorTypes, setSelectedProcessorTypes, onProcessorTypeChange, type);
    const handleMemoryChange = (memory) => handleCheckboxChange(selectedMemory, setSelectedMemory, onMemoryChange, memory);
    const handleStorageChange = (storage) => handleCheckboxChange(selectedStorage, setSelectedStorage, onStorageChange, storage);
    const handleGraphicsChange = (graphics) => handleCheckboxChange(selectedGraphics, setSelectedGraphics, onGraphicsChange, graphics);
    const handleGraphicsCardChange = (card) => handleCheckboxChange(selectedGraphicsCards, setSelectedGraphicsCards, onGraphicsCardChange, card);
    const handleScreenSizeChange = (size) => handleCheckboxChange(selectedScreenSizes, setSelectedScreenSizes, onScreenSizeChange, size);

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
        handleCheckboxChange(selectedRatings, setSelectedRatings, onRatingChange, rating);
    };

    return (
        <div className="sidebar-filter" style={{ backgroundColor: 'white' }}>
            <div className="filter-section">
                <h3>Price</h3>
                <Slider range min={minPrice} max={maxPrice} value={priceRange} onChange={handlePriceChange} />
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
                <h3>Ratings</h3>
                <ul>
                    {[5, 4, 3, 2, 1].map(star => (
                        <li key={star}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedRatings.includes(star)}
                                    onChange={() => handleRatingChange(star)}
                                />
                                {[...Array(star)].map((_, i) => (
                                    <FaStar key={i} color="gold" />
                                ))}
                                & Up
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Processor</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'Qualcomm'].map(processor => (
                        <li key={processor}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessors.includes(processor)}
                                    onChange={() => handleProcessorChange(processor)}
                                />
                                {processor}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Processor Type</h3>
                <ul className="filter-scroll">
                    {['Celeron', 'Core i3', 'Core i5', 'Core i7', 'Core i9', 'Core Ultra 5', 'Core Ultra 7', 'M2', 'M3', 'M3 Pro', 'Pentium', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9', 'Ryzen Z1', 'SQ3'].map(type => (
                        <li key={type}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorTypes.includes(type)}
                                    onChange={() => handleProcessorTypeChange(type)}
                                />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Memory RAM</h3>
                <ul className="filter-scroll">
                    {['4GB', '8GB', '12GB', '16GB', '18GB', '32GB', '64GB'].map(memory => (
                        <li key={memory}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedMemory.includes(memory)}
                                    onChange={() => handleMemoryChange(memory)}
                                />
                                {memory}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Storage</h3>
                <ul className="filter-scroll">
                    {['512 GB SSD', '1TB SSD', '1TB HDD', '1TB HDD +12G GB SSD', '1TB HDD+256GB SSD', '2TB SSD'].map(storage => (
                        <li key={storage}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => handleStorageChange(storage)}
                                />
                                {storage}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics</h3>
                <ul className="filter-scroll">
                    {['Amd', 'Apple', 'Intel', 'NVIDIA', 'Qualcomm'].map(graphics => (
                        <li key={graphics}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphics.includes(graphics)}
                                    onChange={() => handleGraphicsChange(graphics)}
                                />
                                {graphics}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Graphics Card</h3>
                <ul className="filter-scroll">
                    {['2GB', '4GB', '6GB', '8GB', '12GB', '16GB'].map(card => (
                        <li key={card}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphicsCards.includes(card)}
                                    onChange={() => handleGraphicsCardChange(card)}
                                />
                                {card}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3>Screen Size</h3>
                <ul className="filter-scroll">
                    {['12.4"', '13.3"', '13.4"', '13.5"', '13.6"', '13"', '14"', '15.3"', '15.6"', '16.2"', '16.2"', '16"', '17.3"', '18"'].map(size => (
                        <li key={size}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedScreenSizes.includes(size)}
                                    onChange={() => handleScreenSizeChange(size)}
                                />
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarFilter;
