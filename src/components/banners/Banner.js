// src/components/banners/Banner.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerLaptop from '../../assets/images/Banners/banner laptop.png';
import BannerLED from '../../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../../assets/images/Banners/banner microsoft surface.png';
import '../../assets/styles/Banners.css';

const Banners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                <div>
                    <img src={BannerLaptop} alt="Banner Laptop" className="banner-image" />
                </div>
                <div>
                    <img src={BannerLED} alt="Banner LED" className="banner-image" />
                </div>
                <div>
                    <img src={BannerMicrosoftSurface} alt="Banner Microsoft Surface" className="banner-image" />
                </div>
            </Slider>
        </div>
    );
};

export default Banners;
