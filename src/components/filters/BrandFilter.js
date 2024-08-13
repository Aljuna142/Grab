import React, { useState } from 'react';
import '../../assets/styles/BrandFilter.css'

const BrandFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = ['Desktop', 'Monitor', 'Laptop', 'Networking', 'Accessories'];
  const brands = ['Acer', 'Asus', 'Apple', 'MSI', 'Samsung', 'Lenovo', 'HP', 'Dell'];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category, selectedBrands);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const updatedBrands = e.target.checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    setSelectedBrands(updatedBrands);
    onFilterChange(selectedCategory, updatedBrands);
  };

  return (
    <div className="brand-filter">
      <div className="filter-section">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h3>Brands:</h3>
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

export default BrandFilter;
