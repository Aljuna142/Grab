
// src/pages/Home.js

// src/pages/Home.js

// src/pages/Home.js
/* without connection import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner';
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerHpandDell from '../assets/images/Banners/hpanddellbanner-5.png';
import BannerAcc from '../assets/images/Banners/bannerAcc-6.jpg';
import BannerAcerAsus from '../assets/images/Banners/ACER-ASUSBanner-7.webp';
import BannerNetAcc from '../assets/images/Banners/NetAccBanner-8.webp';
import BannerMsiLenovo from '../assets/images/Banners/Msi-LenovoBanner.webp';
import BannerAppleSamsung from '../assets/images/Banners/Apple-SamsungBanner.webp';
import Category from '../components/category/Category';
import Brands from '../components/brands/Brands';
import ShopSection from '../components/shop/ShopSection';
import ProductCard from '../components/cards/ProductCard';
import Accessories from '../components/accessories/Accessories';
import Networking from '../components/networking/Networking';
import LogoSection from '../components/logosection/Logosection';
import CoreAspects from '../components/core/CoreAspects';
import products from '../data/products';  // Import the products data

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const bannerHpandDellImages = [BannerHpandDell];
    const bannerAccImages = [BannerAcc];
    const bannerAcerAsusImages = [BannerAcerAsus];
    const bannerNetAccImages = [BannerNetAcc];
    const bannerMsiLenovoImages = [BannerMsiLenovo];
    const bannerAppleSamsungImages = [BannerAppleSamsung];

    return (
        <div>
            <div>
                <Banners imageUrls={initialBannerImages} />
            </div>
            <Category />
            <Brands />
            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    {products.popular.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}  // Pass the id to ProductCard
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop HP" products={products.hp} />
                    <ShopSection title="Shop Dell" products={products.dell} />
                </div>
                
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <Accessories /> {/* Add the Accessories component here }
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Acer" products={products.acer} />
                    <ShopSection title="Shop Asus" products={products.asus} />
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <Networking />
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop MSI" products={products.msi} />
                    <ShopSection title="Shop Lenovo" products={products.lenovo} />
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Apple" products={products.apple} />
                    <ShopSection title="Shop Samsung" products={products.samsung} />
                </div>
                <LogoSection />
                <CoreAspects />
            </div>
        </div>
    );
};

export default Home; without connection*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner';
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerHpandDell from '../assets/images/Banners/hpanddellbanner-5.png';
import BannerAcc from '../assets/images/Banners/bannerAcc-6.jpg';
import BannerAcerAsus from '../assets/images/Banners/ACER-ASUSBanner-7.webp';
import BannerNetAcc from '../assets/images/Banners/NetAccBanner-8.webp';
import BannerMsiLenovo from '../assets/images/Banners/Msi-LenovoBanner.webp';
import BannerAppleSamsung from '../assets/images/Banners/Apple-SamsungBanner.webp';
import Category from '../components/category/Category';
import Brands from '../components/brands/Brands';
import ShopSection from '../components/shop/ShopSection';
import ProductCard from '../components/cards/ProductCard';
import Accessories from '../components/accessories/Accessories';
import Networking from '../components/networking/Networking';
import LogoSection from '../components/logosection/Logosection';
import CoreAspects from '../components/core/CoreAspects';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/getAllProducts'); // Ensure the URL is correct
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const bannerHpandDellImages = [BannerHpandDell];
    const bannerAccImages = [BannerAcc];
    const bannerAcerAsusImages = [BannerAcerAsus];
    const bannerNetAccImages = [BannerNetAcc];
    const bannerMsiLenovoImages = [BannerMsiLenovo];
    const bannerAppleSamsungImages = [BannerAppleSamsung];

    return (
        <div>
            <div>
                <Banners imageUrls={initialBannerImages} />
            </div>
            <Category />
            <Brands />
            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    {products.map(product => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            reviews={product.numOfReviews}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
                
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop HP" products={products.filter(p => p.brand === 'HP')} />
                    <ShopSection title="Shop Dell" products={products.filter(p => p.brand === 'Dell')} />
                </div>
                
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <Accessories />
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Acer" products={products.filter(p => p.brand === 'Acer')} />
                    <ShopSection title="Shop Asus" products={products.filter(p => p.brand === 'Asus')} />
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <Networking />
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop MSI" products={products.filter(p => p.brand === 'MSI')} />
                    <ShopSection title="Shop Lenovo" products={products.filter(p => p.brand === 'Lenovo')} />
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Apple" products={products.filter(p => p.brand === 'Apple')} />
                    <ShopSection title="Shop Samsung" products={products.filter(p => p.brand === 'Samsung')} />
                </div>
                <LogoSection />
                <CoreAspects />
            </div>
        </div>
    );
};

export default Home; 


