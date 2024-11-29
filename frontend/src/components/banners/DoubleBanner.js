/*import React from 'react';
import '../../assets/styles/DoubleBanner.css'; // Path to your custom DoubleBanner.css
import HpBanner from '../../assets/images/Banners/hp-banner.webp';
import DellBanner from '../../assets/images/Banners/dell-banner.webp';

const DoubleBanner = () => {
    return (
        <div className="double-banner-wrapper">
            <img src={HpBanner} alt="HP Banner" className="double-banner-image" />
            <img src={DellBanner} alt="Dell Banner" className="double-banner-image" />
        </div>
    );
};

export default DoubleBanner;*/



// src/components/DoubleBanner.js
/*import React from 'react';
import '../../assets/styles/DoubleBanner.css'; // Path to your custom DoubleBanner.css

const DoubleBanner = ({ image1, image2 }) => {
    return (
        <div className="double-banner-container">
            <img src={image1} alt="Banner 1" className="double-banner-image" />
            <img src={image2} alt="Banner 2" className="double-banner-image" />
        </div>
    );
};

export default DoubleBanner;*/


import React from 'react';
import '../../assets/styles/DoubleBanner.css'; // Path to your custom DoubleBanner.css

const DoubleBanner = ({ image1, image2, link1, link2 }) => {
    return (
        <div className="double-banner-container">
            <a href={link1 || '#'} className="banner-link" target="_blank" rel="noopener noreferrer">
                <img src={image1} alt="Banner 1" className="double-banner-image" />
            </a>
            <a href={link2 || '#'} className="banner-link" target="_blank" rel="noopener noreferrer">
                <img src={image2} alt="Banner 2" className="double-banner-image" />
            </a>
        </div>
    );
};

export default DoubleBanner;
