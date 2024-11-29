import React from 'react';
import '../../assets/styles/Brands.css'; // Ensure this path is correct

import Asus from '../../assets/images/BrandImg/asus-1-1.png';
import Lenovo from '../../assets/images/BrandImg/lenovo-2-1.png';
import MSI from '../../assets/images/BrandImg/msi-1.png';

const brands = [
    { name: 'Asus', image: Asus },
    { name: 'Lenovo', image: Lenovo },
    { name: 'MSI', image: MSI }
];

const Brands = () => {
    return (
        <div className="brands-container">
            {brands.map((brand, index) => (
                <div key={index} className="brand-item">
                    <img src={brand.image} alt={brand.name} className="brand-image" />
                </div>
            ))}
        </div>
    );
};

export default Brands;
