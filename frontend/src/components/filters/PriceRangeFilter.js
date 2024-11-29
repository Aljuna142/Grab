/*import React, { useState } from 'react';

const PriceRangeFilter = ({ onFilterChange }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(15950); // Set default range based on your data

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        if (name === 'min') setMinPrice(value);
        if (name === 'max') setMaxPrice(value);
        onFilterChange(minPrice, maxPrice);
    };

    return (
        <div className="price-filter">
            <label>Price: {minPrice} AED — {maxPrice} AED</label>
            <input 
                type="range" 
                name="min"
                min="0"
                max="30000"
                value={minPrice}
                onChange={handleRangeChange}
            />
            <input 
                type="range" 
                name="max"
                min="0"
                max="30000"
                value={maxPrice}
                onChange={handleRangeChange}
            />
        </div>
    );
};

export default PriceRangeFilter;*/



import React, { useState } from 'react';
import '../../assets/styles/PriceRangeFilter.css'; // Create this CSS file for styling

const PriceRangeFilter = ({ minPrice, maxPrice, onFilterChange }) => {
    const [range, setRange] = useState({ min: minPrice, max: maxPrice });

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setRange((prevRange) => ({
            ...prevRange,
            [name]: value
        }));
        onFilterChange(range.min, range.max);
    };

    return (
        <div className="price-range-filter">
            <label>
                Price: {range.min} AED — {range.max} AED
            </label>
            <input 
                type="range" 
                name="min" 
                min={minPrice} 
                max={maxPrice} 
                value={range.min}
                onChange={handleRangeChange}
                className="price-slider"
            />
            <input 
                type="range" 
                name="max" 
                min={minPrice} 
                max={maxPrice} 
                value={range.max}
                onChange={handleRangeChange}
                className="price-slider"
            />
        </div>
    );
};

export default PriceRangeFilter;
