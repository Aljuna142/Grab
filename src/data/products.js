// src/data/products.js
/*import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';

const products = {
    popular: [
        {
            id: 1,
            image: AspireImage,
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED Inclusive VAT",
        }
    ],
    hp: [
        {
            id: 2,
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
        }
    ],
    dell: [
        {
            id: 3,
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
        }
    ],
    acer: [
        {
            id: 4,
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ],
    asus: [
        {
            id: 5,
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
        }
    ],
    msi: [
        {
            id: 6,
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
        }
    ],
    lenovo: [
        {
            id: 7,
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
        }
    ],
    apple: [
        {
            id: 8,
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
        }
    ],
    samsung: [
        {
            id: 9,
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
        }
    ]
};

export default products;*/


// src/data/products.js
/*import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';
const products = {
    popular: [
        {
            id: 1,
            image: AspireImage,
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED Inclusive VAT",
            description: "A powerful and versatile laptop suitable for all your needs.",
            countInStock: 5
        }
    ],
    hp: [
        {
            id: 2,
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with a sleek design.",
            countInStock: 3
        }
    ],
    dell: [
        {
            id: 3,
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
            description: "A reliable and efficient laptop for everyday use.",
            countInStock: 4
        }
    ],
    acer: [
        {
            id: 4,
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A gaming laptop with powerful specifications.",
            countInStock: 2
        }
    ],
    asus: [
        {
            id: 5,
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
            description: "A stylish and portable laptop for professionals.",
            countInStock: 6
        }
    ],
    msi: [
        {
            id: 6,
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
            description: "A thin and lightweight gaming laptop.",
            countInStock: 4
        }
    ],
    lenovo: [
        {
            id: 7,
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
            description: "An affordable and efficient laptop for everyday tasks.",
            countInStock: 7
        }
    ],
    apple: [
        {
            id: 8,
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
            description: "A powerful and sleek laptop with the latest technology.",
            countInStock: 5
        }
    ],
    samsung: [
        {
            id: 9,
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with an immersive display.",
            countInStock: 8
        }
    ]
};

export default products;*/



/*import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';

const products = {
    popular: [
        {
            id: 'LAC01', // L for Laptop, AC for Acer, 01 for first product
            image: AspireImage,
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED Inclusive VAT",
            description: "A powerful and versatile laptop suitable for all your needs.",
            countInStock: 5
        }
    ],
    hp: [
        {
            id: 'LHP01', // L for Laptop, HP for HP, 01 for first product
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with a sleek design.",
            countInStock: 3
        }
    ],
    dell: [
        {
            id: 'LDE01', // L for Laptop, DE for Dell, 01 for first product
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
            description: "A reliable and efficient laptop for everyday use.",
            countInStock: 4
        }
    ],
    acer: [
        {
            id: 'LAC02', // L for Laptop, AC for Acer, 02 for second product
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A gaming laptop with powerful specifications.",
            countInStock: 2
        }
    ],
    asus: [
        {
            id: 'LAS01', // L for Laptop, AS for Asus, 01 for first product
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
            description: "A stylish and portable laptop for professionals.",
            countInStock: 6
        }
    ],
    msi: [
        {
            id: 'LMS01', // L for Laptop, MS for MSI, 01 for first product
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
            description: "A thin and lightweight gaming laptop.",
            countInStock: 4
        }
    ],
    lenovo: [
        {
            id: 'LLE01', // L for Laptop, LE for Lenovo, 01 for first product
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
            description: "An affordable and efficient laptop for everyday tasks.",
            countInStock: 7
        }
    ],
    apple: [
        {
            id: 'LAP01', // L for Laptop, AP for Apple, 01 for first product
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
            description: "A powerful and sleek laptop with the latest technology.",
            countInStock: 5
        }
    ],
    samsung: [
        {
            id: 'LSAM01', // L for Laptop, SAM for Samsung, 01 for first product
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with an immersive display.",
            countInStock: 8
        }
    ]
};

export default products;without brand */



import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';

const products = {
    popular: [
        {
            id: 'LAC01',
            image: AspireImage,
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED Inclusive VAT",
            description: "A powerful and versatile laptop suitable for all your needs.",
            countInStock: 5,
            brand: "Acer",
            category: "Laptop"
        }
    ],
    hp: [
        {
            id: 'LHP01',
            image: HpImage,
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with a sleek design.",
            countInStock: 3,
            brand: "HP",
            category: "Laptop"
        }
    ],
    dell: [
        {
            id: 'LDE01',
            image: DellImage,
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
            description: "A reliable and efficient laptop for everyday use.",
            countInStock: 4,
            brand: "Dell",
            category: "Laptop"
        }
    ],
    acer: [
        {
            id: 'LAC02',
            image: AcerImage,
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A gaming laptop with powerful specifications.",
            countInStock: 2,
            brand: "Acer",
            category: "Laptop"
        }
    ],
    asus: [
        {
            id: 'LAS01',
            image: AsusImage,
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED Inclusive VAT",
            description: "A stylish and portable laptop for professionals.",
            countInStock: 6,
            brand: "Asus",
            category: "Laptop"
        }
    ],
    msi: [
        {
            id: 'LMS01',
            image: MsiImage,
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED Inclusive VAT",
            description: "A thin and lightweight gaming laptop.",
            countInStock: 4,
            brand: "MSI",
            category: "Laptop"
        }
    ],
    lenovo: [
        {
            id: 'LLE01',
            image: LenovoImage,
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED Inclusive VAT",
            description: "An affordable and efficient laptop for everyday tasks.",
            countInStock: 7,
            brand: "Lenovo",
            category: "Laptop"
        }
    ],
    apple: [
        {
            id: 'LAP01',
            image: AppleImage,
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED Inclusive VAT",
            description: "A powerful and sleek laptop with the latest technology.",
            countInStock: 5,
            brand: "Apple",
            category: "Laptop"
        }
    ],
    samsung: [
        {
            id: 'LSAM01',
            image: SamsungImage,
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED Inclusive VAT",
            description: "A high-performance laptop with an immersive display.",
            countInStock: 8,
            brand: "Samsung",
            category: "Laptop"
        }
    ]
};

export default products;
