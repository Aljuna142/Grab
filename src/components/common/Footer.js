// src/components/common/Footer.js
/*import React from 'react';
import '../../assets/styles/Footer.css';
import logo from '../../assets/images/Landscap.png';

const Footer = () => {
    return (
        <div>
            <div className="footer-top d-flex justify-content-center align-items-center">
                <img src={logo} alt="Grabatoz Logo" className="footer-logo" />
            </div>
            <div className="footer-bottom text-center">
                © 2024-2025 Grabatoz powered by Crown Excel
            </div>
        </div>
    );
};

export default Footer;*/

// src/components/common/Footer.js
/*import React from 'react';
import '../../assets/styles/Footer.css';
import logo from '../../assets/images/Landscap.png';
import { ReactComponent as Icon } from '../../assets/images/Color-Icon-1.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/socialmedia/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/socialmedia/x.svg'; // Assuming 'x.svg' is for Twitter
import { ReactComponent as PinterestIcon } from '../../assets/images/socialmedia/pinterest.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/socialmedia/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/socialmedia/instagram.svg';

const Footer = () => {
    return (
        <div>
            <div className="footer-top d-flex flex-column align-items-start">
                <img src={logo} alt="Grabatoz Logo" className="footer-logo" />
                <div className="subscription-section">
                    <h5 className="subscription-text">Subscribe to our newsletter</h5>
                    <div className="subscription-form d-flex">
                        <input
                            type="email"
                            className="subscription-input"
                            placeholder="Enter your email"
                        />
                        <button className="subscription-button">Subscribe</button>
                    </div>
                    <div className="social-media-icons d-flex">
                        <FacebookIcon className="social-icon" />
                        <TwitterIcon className="social-icon" />
                        <PinterestIcon className="social-icon" />
                        <LinkedInIcon className="social-icon" />
                        <InstagramIcon className="social-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom d-flex flex-column align-items-start">
                <div className="footer-text">© 2024-2025 Grabatoz powered by Crown Excel</div>
                <div className="footer-icon-wrapper">
                    <Icon className="footer-icon" />
                </div>
            </div>
        </div>
    );
};

export default Footer;*/


// src/components/common/Footer.js
/*import React from 'react';
import '../../assets/styles/Footer.css';
import logo from '../../assets/images/Landscap.png';
import { ReactComponent as Icon } from '../../assets/images/Color-Icon-1.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/socialmedia/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/socialmedia/x.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/socialmedia/pinterest.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/socialmedia/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/socialmedia/instagram.svg';

const categories = {
    topCategories: [
        'Laptops',
        'Routers',
        'Gaming Hub',
        'Tablets',
        'Desktop',
        'Mobile',
    ],
    moreCategories: [
        'Projector',
        'Monitors',
        'Scanners',
        'Copier',
        'Printers',
        'Storage Solution',
    ],
    support: [
        'Refund and Returns',
        'Cookies Policies',
        'Exchange Policies',
        'Sitemaps',
        'Bulk Purchase',
        'Corporate Deal',
    ],
};

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <div className="footer-column">
                    <div className="subscription-section">
                        <h5 className="subscription-text">Subscribe to our newsletter</h5>
                        <div className="subscription-form">
                            <input
                                type="email"
                                className="subscription-input"
                                placeholder="Enter your email"
                            />
                            <button className="subscription-button">Subscribe</button>
                        </div>
                        <div className="social-media-icons">
                            <FacebookIcon className="social-icon" />
                            <TwitterIcon className="social-icon" />
                            <PinterestIcon className="social-icon" />
                            <LinkedInIcon className="social-icon" />
                            <InstagramIcon className="social-icon" />
                        </div>
                    </div>
                    <img src={logo} alt="Grabatoz Logo" className="footer-logo" />
                </div>
                <div className="footer-column">
                    <h5>Top Categories</h5>
                    <ul>
                        {categories.topCategories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>More Categories</h5>
                    <ul>
                        {categories.moreCategories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Support</h5>
                    <ul>
                        {categories.support.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text">© 2024-2025 Grabatoz powered by Crown Excel</div>
                <div className="footer-icon-wrapper">
                    <Icon className="footer-icon" />
                </div>
            </div>
        </>
    );
};

export default Footer;layot good*/

import React from 'react';
import '../../assets/styles/Footer.css';
import logo from '../../assets/images/Landscap.png';
import { ReactComponent as Icon } from '../../assets/images/Color-Icon-1.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/socialmedia/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/socialmedia/x.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/socialmedia/pinterest.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/socialmedia/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/socialmedia/instagram.svg';

const categories = {
    topCategories: [
        'Laptops',
        'Routers',
        'Gaming Hub',
        'Tablets',
        'Desktop',
        'Mobile',
    ],
    moreCategories: [
        'Projector',
        'Monitors',
        'Scanners',
        'Copier',
        'Printers',
        'Storage Solution',
    ],
    support: [
        'Refund and Returns',
        'Cookies Policies',
        'Exchange Policies',
        'Sitemaps',
        'Bulk Purchase',
        'Corporate Deal',
    ],
    legal: [
        'About us',
        'Contact us',
        'Terms & Condition',
        'Privacy Policies',
        '(+971) 4-354 0566',
        'Support@grabatoz.com',
    ],
};

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                {/* First Column */}
                <div className="footer-column logo-column">
                    <img src={logo} alt="Grabatoz Logo" className="footer-logo" />
                    <div className="subscription-section">
                        <h5 className="subscription-text">Subscribe to our newsletter</h5>
                        <div className="subscription-form">
                            <input
                                type="email"
                                className="subscription-input"
                                placeholder="Enter your email"
                            />
                            <button className="subscription-button">Subscribe</button>
                        </div>
                        <div className="social-media-icons">
                            <FacebookIcon className="social-icon" />
                            <TwitterIcon className="social-icon" />
                            <PinterestIcon className="social-icon" />
                            <LinkedInIcon className="social-icon" />
                            <InstagramIcon className="social-icon" />
                        </div>
                    </div>
                </div>
                
                {/* Second Column */}
                <div className="footer-column">
                    <h5>Top Categories</h5>
                    <ul>
                        {categories.topCategories.map((category, index) => (
                            <li key={index}><a href="#">{category}</a></li>
                        ))}
                    </ul>
                </div>
                
                {/* Third Column */}
                <div className="footer-column">
                    <h5>More Categories</h5>
                    <ul>
                        {categories.moreCategories.map((category, index) => (
                            <li key={index}><a href="#">{category}</a></li>
                        ))}
                    </ul>
                </div>
                
                {/* Fourth Column */}
                <div className="footer-column">
                    <h5>Support</h5>
                    <ul>
                        {categories.support.map((item, index) => (
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
                
                {/* Fifth Column */}
                <div className="footer-column">
                    <h5>Legal</h5>
                    <ul>
                        {categories.legal.map((item, index) => (
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-text">© 2024-2025 Grabatoz powered by Crown Excel</div>
                <div className='text'></div>
                <div className="footer-icon-wrapper">
                    <Icon className="footer-icon" />
                </div>
            </div>
        </>
    );
};

export default Footer;
