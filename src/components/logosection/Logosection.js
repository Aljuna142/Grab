

import React from 'react';
import '../../assets/styles/LogoSection.css';

// Importing images
import msiLogo from '../../assets/images/FeaturedBrands/msi logo.png';
import acerLogo from '../../assets/images/FeaturedBrands/acer logo.png';
import appleLogo from '../../assets/images/FeaturedBrands/apple logo.png';
import asusLogo from '../../assets/images/FeaturedBrands/asus logo.png';
import amdLogo from '../../assets/images/FeaturedBrands/Amd logo.png';
import dellLogo from '../../assets/images/FeaturedBrands/dell logo.png';
import hpLogo from '../../assets/images/FeaturedBrands/hp logo.png';
import intelLogo from '../../assets/images/FeaturedBrands/intel logo.png';
import lenovoLogo from '../../assets/images/FeaturedBrands/lenovo logo.png'; // Added Lenovo logo

const LogoSection = () => {
  const brands = [
    { src: acerLogo, alt: 'Acer logo' },
    { src: asusLogo, alt: 'Asus logo' },
    { src: appleLogo, alt: 'Apple logo' },
    { src: hpLogo, alt: 'HP logo' },
    { src: lenovoLogo, alt: 'Lenovo logo' }, // Added Lenovo logo
    { src: dellLogo, alt: 'Dell logo' },
    { src: msiLogo, alt: 'MSI logo' },
    { src: intelLogo, alt: 'Intel logo' },
    { src: amdLogo, alt: 'AMD logo' },
  ];

  return (
    <div className="logo-section">
      <h2>Featured Brands</h2>
      <div className="brands-row">
        {brands.map((brand, index) => (
          <div key={index} className="brand-logo">
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;

