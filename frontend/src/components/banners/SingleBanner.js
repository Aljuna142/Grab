
// src/components/banners/SingleBanner.js

import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/SingleBanner.css'; // Ensure you have this CSS file for styling

const SingleBanner = ({ imageUrl, altText }) => {
    return (
        <div className="single-banner">
            <img src={imageUrl} alt={altText} className="banner-image" />
        </div>
    );
};

SingleBanner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

export default SingleBanner;
