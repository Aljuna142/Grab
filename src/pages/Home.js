
// src/pages/Home.js

// src/pages/Home.js

// src/pages/Home.js
import React from 'react';
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
                <Accessories /> {/* Add the Accessories component here */}
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

export default Home;


// src/pages/Home.js
/*import React from 'react';
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
import Accessories from '../components/accessories/Accessories';  // Import the Accessories component
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';
import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import Networking from '../components/networking/Networking';
import LogoSection from '../components/logosection/Logosection';
import CoreAspects from '../components/core/CoreAspects';


const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    
    const bannerHpandDellImages = [BannerHpandDell];
    const bannerAccImages = [BannerAcc];
    const bannerAcerAsusImages = [BannerAcerAsus];
    const bannerNetAccImages = [BannerNetAcc];
    const bannerMsiLenovoImages = [BannerMsiLenovo];
    const bannerAppleSamsungImages = [BannerAppleSamsung];


    const hpProducts = [
        {
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
        }
    ];

    const dellProducts = [
        {
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
        }
    ];

    const acerProducts = [
        {
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];

    const asusProducts = [
        {
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
        }
    ];

    const msiProducts = [
        {
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
        }
    ];

    const lenovoProducts = [
        {
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
        }
    ];

    const appleProducts = [
        {
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
        }
    ];

    const samsungProducts = [
        {
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];
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
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                </div>
                
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop HP" products={hpProducts} />
                    <ShopSection title="Shop Dell" products={dellProducts} />
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
                    <ShopSection title="Shop Acer" products={acerProducts} />
                    <ShopSection title="Shop Asus" products={asusProducts} />
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <div>
                <Networking />

                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop MSI" products={msiProducts} />
                    <ShopSection title="Shop Lenovo" products={lenovoProducts} />
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Apple" products={appleProducts} />
                    <ShopSection title="Shop Samsung" products={samsungProducts} />
                </div>
                <div>
                <LogoSection />
                </div>
                <div>
                <CoreAspects />
                </div>
            </div>
        </div>
    );
};

export default Home;*/



 /*import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner';
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png';
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

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';
import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew];
    const bannerHpandDellImages = [BannerHpandDell];
    const bannerAccImages = [BannerAcc];
    const bannerAcerAsusImages = [BannerAcerAsus];
    const bannerNetAccImages = [BannerNetAcc];
    const bannerMsiLenovoImages = [BannerMsiLenovo];
    const bannerAppleSamsungImages = [BannerAppleSamsung];

    const hpProducts = [
        {
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
        }
    ];

    const dellProducts = [
        {
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
        }
    ];

    const acerProducts = [
        {
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];

    const asusProducts = [
        {
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
        }
    ];

    const msiProducts = [
        {
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
        }
    ];

    const lenovoProducts = [
        {
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
        }
    ];

    const appleProducts = [
        {
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
        }
    ];

    const samsungProducts = [
        {
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];

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
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                </div>
                <div>
                    <h1>Shop</h1>
                </div>
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop HP" products={hpProducts} />
                    <ShopSection title="Shop Dell" products={dellProducts} />
                </div>
                <div>
                    <Link to="/new-products">
                        <Banners imageUrls={newBannerImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <div> Accessories here 



                </div>

                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Acer" products={acerProducts} />
                    <ShopSection title="Shop Asus" products={asusProducts} />
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop MSI" products={msiProducts} />
                    <ShopSection title="Shop Lenovo" products={lenovoProducts} />
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <div className="shop-sections row">
                    <ShopSection title="Shop Apple" products={appleProducts} />
                    <ShopSection title="Shop Samsung" products={samsungProducts} />
                </div>
            </div>
        </div>
    );
};

export default Home;


/*order colapseimport React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner';
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png';
import BannerHpandDell from '../assets/images/Banners/hpanddellbanner-5.png';
import BannerAcc from '../assets/images/Banners/bannerAcc-6.jpg';
import BannerAcerAsus from '../assets/images/Banners/ACER-ASUSBanner-7.webp';
import BannerNetAcc from '../assets/images/Banners/NetAccBanner-8.webp';
import BannerMsiLenovo from '../assets/images/Banners/Msi-LenovoBanner.webp';
import BannerAppleSamsung from '../assets/images/Banners/Apple-SamsungBanner.webp';
import Category from '../components/category/Category';
import Brands from '../components/brands/Brands';
import ProductCard from '../components/cards/ProductCard';
import ShopSection from '../components/shop/ShopSection';

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';
import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew];
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
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                </div>

                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>

                {/* Container for Shop HP and Shop Dell }
                <div className="shop-sections-row">
                    <ShopSection title="Shop HP" products={[
                        {
                            image: HpImage,
                            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
                            rating: "4.50",
                            reviews: "30",
                            price: "2,299.00 AED",
                            originalPrice: "2,799.00 AED Inclusive VAT"
                        },
                        {
                            image: DellImage,
                            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
                            rating: "4.20",
                            reviews: "25",
                            price: "1,799.00 AED",
                            originalPrice: "2,299.00 AED Inclusive VAT"
                        }
                    ]} />

                    <ShopSection title="Shop Dell" products={[
                        {
                            image: DellImage,
                            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
                            rating: "4.20",
                            reviews: "25",
                            price: "1,799.00 AED",
                            originalPrice: "2,299.00 AED Inclusive VAT"
                        }
                        // Add more Dell products if available
                    ]} />
                </div>

                <div>
                    <Link to="/new-products">
                        <Banners imageUrls={newBannerImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <ShopSection title="Shop Acer" products={[
                    {
                        image: AcerImage,
                        name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
                        rating: "4.60",
                        reviews: "40",
                        price: "3,299.00 AED",
                        originalPrice: "3,799.00 AED Inclusive VAT"
                    }
                ]} />
                <ShopSection title="Shop Asus" products={[
                    {
                        image: AsusImage,
                        name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
                        rating: "4.70",
                        reviews: "35",
                        price: "2,699.00 AED",
                        originalPrice: "2,999.00 AED Inclusive VAT"
                    }
                ]} />

                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <ShopSection title="Shop MSI" products={[
                    {
                        image: MsiImage,
                        name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
                        rating: "4.40",
                        reviews: "20",
                        price: "2,099.00 AED",
                        originalPrice: "2,499.00 AED Inclusive VAT"
                    }
                ]} />
                <ShopSection title="Shop Lenovo" products={[
                    {
                        image: LenovoImage,
                        name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
                        rating: "4.30",
                        reviews: "22",
                        price: "1,899.00 AED",
                        originalPrice: "2,199.00 AED Inclusive VAT"
                    }
                ]} />

                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <ShopSection title="Shop Apple" products={[
                    {
                        image: AppleImage,
                        name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
                        rating: "4.80",
                        reviews: "50",
                        price: "4,299.00 AED",
                        originalPrice: "4,799.00 AED Inclusive VAT"
                    }
                ]} />
                <ShopSection title="Shop Samsung" products={[
                    {
                        image: SamsungImage,
                        name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
                        rating: "4.70",
                        reviews: "30",
                        price: "3,299.00 AED",
                        originalPrice: "3,799.00 AED Inclusive VAT"
                    }
                ]} />
            </div>
        </div>
    );
};

export default Home;*/




/*import banner from Banners
const Home =()=>{
    }






/*import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner'; // Correct path and default import
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Correct path
import BannerHpandDell from '../assets/images/Banners/hpanddellbanner-5.png'; // Import the HP and Dell banner image
import BannerAcc from '../assets/images/Banners/bannerAcc-6.jpg'; // Import the additional banner image
import BannerAcerAsus from '../assets/images/Banners/ACER-ASUSBanner-7.webp'; // Ensure correct case
import BannerNetAcc from '../assets/images/Banners/NetAccBanner-8.webp'; // Ensure correct case
import BannerMsiLenovo from '../assets/images/Banners/Msi-LenovoBanner.webp'; // Import the MSI and Lenovo banner image
import BannerAppleSamsung from '../assets/images/Banners/Apple-SamsungBanner.webp'; // Import the Apple and Samsung banner image
import Category from '../components/category/Category'; // Correct path and default import
import Brands from '../components/brands/Brands'; // Correct path and default import
import ProductCard from '../components/cards/ProductCard'; // Correct path and default import
import ShopSection from '../components/shop/ShopSection'; // Import ShopSection component

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Correct path
import HpImage from '../assets/images/ProductImages/HPProductImage.jpg'; // Replace with actual HP image path
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg'; // Replace with actual Dell image path
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp'; // Replace with actual Acer image path
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg'; // Replace with actual Asus image path
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg'; // Replace with actual Msi image path
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg'; // Replace with actual Lenovo image path
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp'; // Replace with actual Apple image path
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg'; // Replace with actual Samsung image path

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image
    const bannerHpandDellImages = [BannerHpandDell]; // Single image for HP and Dell banner
    const bannerAccImages = [BannerAcc]; // Single image for additional banner
    const bannerAcerAsusImages = [BannerAcerAsus]; // Single image for Acer and Asus banner
    const bannerNetAccImages = [BannerNetAcc]; // Single image for NetAcc banner
    const bannerMsiLenovoImages = [BannerMsiLenovo]; // Single image for MSI and Lenovo banner
    const bannerAppleSamsungImages = [BannerAppleSamsung]; // Single image for Apple and Samsung banner

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
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                </div>

                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <ShopSection title="Shop HP">
                    <ProductCard
                        image={HpImage}
                        name="HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD"
                        rating="4.50"
                        reviews="30"
                        price="2,299.00 AED"
                        originalPrice="2,799.00 AED Inclusive VAT"
                    />
                    <ProductCard
                        image={DellImage}
                        name="Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD"
                        rating="4.20"
                        reviews="25"
                        price="1,799.00 AED"
                        originalPrice="2,299.00 AED Inclusive VAT"
                    />
                </ShopSection>

                <div>
                    <Link to="/new-products">
                        <Banners imageUrls={newBannerImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <ShopSection title="Shop Acer">
                    <ProductCard
                        image={AcerImage}
                        name="Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD"
                        rating="4.60"
                        reviews="40"
                        price="3,299.00 AED"
                        originalPrice="3,799.00 AED Inclusive VAT"
                    />
                </ShopSection>
                <ShopSection title="Shop Asus">
                    <ProductCard
                        image={AsusImage}
                        name="Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD"
                        rating="4.70"
                        reviews="35"
                        price="2,699.00 AED"
                        originalPrice="2,999.00 AED Inclusive VAT"
                    />
                </ShopSection>

                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <ShopSection title="Shop MSI">
                    <ProductCard
                        image={MsiImage}
                        name="MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD"
                        rating="4.40"
                        reviews="20"
                        price="2,099.00 AED"
                        originalPrice="2,499.00 AED Inclusive VAT"
                    />
                </ShopSection>
                <ShopSection title="Shop Lenovo">
                    <ProductCard
                        image={LenovoImage}
                        name="Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD"
                        rating="4.30"
                        reviews="22"
                        price="1,899.00 AED"
                        originalPrice="2,199.00 AED Inclusive VAT"
                    />
                </ShopSection>

                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <ShopSection title="Shop Apple">
                    <ProductCard
                        image={AppleImage}
                        name="MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey"
                        rating="4.80"
                        reviews="50"
                        price="4,299.00 AED"
                        originalPrice="4,799.00 AED Inclusive VAT"
                    />
                </ShopSection>
                <ShopSection title="Shop Samsung">
                    <ProductCard
                        image={SamsungImage}
                        name="Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED"
                        rating="4.70"
                        reviews="30"
                        price="3,299.00 AED"
                        originalPrice="3,799.00 AED Inclusive VAT"
                    />
                </ShopSection>
            </div>
        </div>
    );
};

export default Home;*/


/*correct import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner';
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png';
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

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew];
    const bannerHpandDellImages = [BannerHpandDell];
    const bannerAccImages = [BannerAcc];
    const bannerAcerAsusImages = [BannerAcerAsus];
    const bannerNetAccImages = [BannerNetAcc];
    const bannerMsiLenovoImages = [BannerMsiLenovo];
    const bannerAppleSamsungImages = [BannerAppleSamsung];

    const hpProducts = [
        {
            image: AspireImage,
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED Inclusive VAT",
        },
        // Add more HP products here
    ];

    const dellProducts = [
        {
            image: AspireImage, // Replace with Dell product image
            name: "Dell XPS 13 8GB RAM 256GB SSD",
            rating: "4.5",
            reviews: "12",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
        }
    ];

    const acerProducts = [
        {
            image: AspireImage, // Replace with Acer product image
            name: "Acer Predator Helios 300 16GB RAM 512GB SSD",
            rating: "4.8",
            reviews: "8",
            price: "3,199.00 AED",
            originalPrice: "3,499.00 AED Inclusive VAT",
        }
    ];

    const asusProducts = [
        {
            image: AspireImage, // Replace with Asus product image
            name: "Asus ROG Zephyrus G14 16GB RAM 1TB SSD",
            rating: "4.7",
            reviews: "15",
            price: "3,599.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];

    const msiProducts = [
        {
            image: AspireImage, // Replace with MSI product image
            name: "MSI GS66 Stealth 32GB RAM 1TB SSD",
            rating: "4.6",
            reviews: "10",
            price: "3,499.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ];

    const lenovoProducts = [
        {
            image: AspireImage, // Replace with Lenovo product image
            name: "Lenovo ThinkPad X1 Carbon 16GB RAM 512GB SSD",
            rating: "4.9",
            reviews: "5",
            price: "2,999.00 AED",
            originalPrice: "3,299.00 AED Inclusive VAT",
        }
    ];

    const appleProducts = [
        {
            image: AspireImage, // Replace with Apple product image
            name: "Apple MacBook Air M2 16GB RAM 256GB SSD",
            rating: "4.8",
            reviews: "8",
            price: "4,299.00 AED",
            originalPrice: "4,499.00 AED Inclusive VAT",
        }
    ];

    const samsungProducts = [
        {
            image: AspireImage, // Replace with Samsung product image
            name: "Samsung Galaxy Book Pro 15.6\" 16GB RAM 512GB SSD",
            rating: "4.7",
            reviews: "12",
            price: "3,299.00 AED",
            originalPrice: "3,599.00 AED Inclusive VAT",
        }
    ];

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
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                </div>
                <div>
                    <h1>Shop</h1>
                </div>
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} />
                    </Link>
                </div>
                <div className="shop-sections">
                    <ShopSection title="Shop HP" products={hpProducts} />
                    <ShopSection title="Shop Dell" products={dellProducts} />
                </div>
                <div>
                    <Link to="/new-products">
                        <Banners imageUrls={newBannerImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} />
                    </Link>
                </div>
                <div className="shop-sections">
                    <ShopSection title="Shop Acer" products={acerProducts} />
                    <ShopSection title="Shop Asus" products={asusProducts} />
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} />
                    </Link>
                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} />
                    </Link>
                </div>
                <div className="shop-sections">
                    <ShopSection title="Shop MSI" products={msiProducts} />
                    <ShopSection title="Shop Lenovo" products={lenovoProducts} />
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} />
                    </Link>
                </div>
                <div className="shop-sections">
                    <ShopSection title="Shop Apple" products={appleProducts} />
                    <ShopSection title="Shop Samsung" products={samsungProducts} />
                </div>
            </div>
        </div>
    );
};

export default Home;correct alignment*/




/* all banners inserted import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/banners/Banner'; // Correct path and default import
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Correct path
import BannerHpandDell from '../assets/images/Banners/hpanddellbanner-5.png'; // Import the HP and Dell banner image
import BannerAcc from '../assets/images/Banners/bannerAcc-6.jpg'; // Import the additional banner image
import BannerAcerAsus from '../assets/images/Banners/ACER-ASUSBanner-7.webp'; // Ensure correct case
import BannerNetAcc from '../assets/images/Banners/NetAccBanner-8.webp'; // Ensure correct case
import BannerMsiLenovo from '../assets/images/Banners/Msi-LenovoBanner.webp'; // Import the MSI and Lenovo banner image
import BannerAppleSamsung from '../assets/images/Banners/Apple-SamsungBanner.webp'; // Import the Apple and Samsung banner image
import Category from '../components/category/Category'; // Correct path and default import
import Brands from '../components/brands/Brands'; // Correct path and default import
import ProductCard from '../components/cards/ProductCard'; // Correct path and default import

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Correct path

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image
    const bannerHpandDellImages = [BannerHpandDell]; // Single image for HP and Dell banner
    const bannerAccImages = [BannerAcc]; // Single image for additional banner
    const bannerAcerAsusImages = [BannerAcerAsus]; // Single image for Acer and Asus banner
    const bannerNetAccImages = [BannerNetAcc]; // Single image for NetAcc banner
    const bannerMsiLenovoImages = [BannerMsiLenovo]; // Single image for MSI and Lenovo banner
    const bannerAppleSamsungImages = [BannerAppleSamsung]; // Single image for Apple and Samsung banner

    return (
        <div>
            <div>
                <Banners imageUrls={initialBannerImages} />
            </div>
            <Category /> {/* Add the Category component below the initial banners }
            <Brands /> {/* Add the Brands component below the Category }

            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                    {/* Add more ProductCard components with different data as needed }
                </div>
                <div>
                    <h1>Shop</h1>
                </div>
                <div>
                    <Link to="/hp-and-dell">
                        <Banners imageUrls={bannerHpandDellImages} /> {/* Reuse the HP and Dell banner }
                    </Link>
                </div>
                <div>
                    <Link to="/new-products">
                        <Banners imageUrls={newBannerImages} /> {/* Use the new banner image }
                    </Link>
                </div>
                <div>
                    <Link to="/accessories">
                        <Banners imageUrls={bannerAccImages} /> {/* Use the additional banner image }
                    </Link>
                </div>
                <div>
                    <Link to="/acer-asus">
                        <Banners imageUrls={bannerAcerAsusImages} /> {/* Use the Acer and Asus banner image }
                    </Link>
                </div>
                <div>
                    <Link to="/net-acc">
                        <Banners imageUrls={bannerNetAccImages} /> {/* Use the NetAcc banner image }
                    </Link>
                </div>
                <div>
                    <Link to="/msi-lenovo">
                        <Banners imageUrls={bannerMsiLenovoImages} /> {/* Use the MSI and Lenovo banner image }
                    </Link>
                </div>
                <div>
                    <Link to="/apple-samsung">
                        <Banners imageUrls={bannerAppleSamsungImages} /> {/* Use the Apple and Samsung banner image }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;



/*import React from 'react';
import Banners from '../components/banners/Banner'; // Import Banners component
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Import the new banner image
import Category from '../components/category/Category'; // Import Category component
import Brands from '../components/brands/Brands'; // Import Brands component
import ProductCard from '../components/cards/ProductCard'; // Import ProductCard component

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Example image
// Import other product images as needed

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image

    return (
        <div>
            <Banners imageUrls={initialBannerImages} />
            <Category /> {/* Add the Category component below the initial banners }
            <Brands /> {/* Add the Brands component below the Category }

            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                    {/* Add more ProductCard components with different data as needed }
                </div>

                <Banners imageUrls={newBannerImages} /> {/* Single image }
            </div>
        </div>
    );
};

export default Home;*/


/*perfect import React from 'react';
import Banners from '../components/banners/Banner'; // Correct path and default import
import BannerLaptop from '../assets/images/Banners/banner laptop.png';
import BannerLED from '../assets/images/Banners/banner led 2.png';
import BannerMicrosoftSurface from '../assets/images/Banners/banner microsoft surface.png';
import BannerNew from '../assets/images/Banners/banner-3.png'; // Correct path
import Category from '../components/category/Category'; // Correct path and default import
import Brands from '../components/brands/Brands'; // Correct path and default import
import ProductCard from '../components/cards/ProductCard'; // Correct path and default import

import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png'; // Correct path

const Home = () => {
    const initialBannerImages = [BannerLaptop, BannerLED, BannerMicrosoftSurface];
    const newBannerImages = [BannerNew]; // Single image

    return (
        <div>
            <Banners imageUrls={initialBannerImages} />
            <Category /> {/* Add the Category component below the initial banners }
            <Brands /> {/* Add the Brands component below the Category }

            <div className="main-content">
                <h1>Today's Popular Picks</h1>
                <div className="product-cards-container">
                    <ProductCard
                        image={AspireImage}
                        name="Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color"
                        rating="5.00"
                        reviews="1"
                        price="1,480.00 AED"
                        originalPrice="2,099.00 AED Inclusive VAT"
                    />
                    {/* Add more ProductCard components with different data as needed }
                </div>
<div>
    <h1>Shop</h1>
</div>
                <Banners imageUrls={newBannerImages} /> {/* Single image }
            </div>
        </div>
    );
};

export default Home;*/





