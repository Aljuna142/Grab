// src/data/accessories.js
import LaptopBag from '../assets/images/ProductImages/LaptopBag.webp';
import Keyboard from '../assets/images/ProductImages/keyboard.webp';
import HpGamingHeadset from '../assets/images/ProductImages/HpGamingHeadset.webp';
import DDR5 from '../assets/images/ProductImages/DDR5.webp';
import MicrosoftBluetoothMouse from '../assets/images/ProductImages/MicrosoftBluetoothMouse.webp';
import Mouse from '../assets/images/ProductImages/Mouse-1.webp';

const accessories = [
    {
        id: 'ACC01',
        image: LaptopBag,
        name: 'Laptop Bag',
        rating: '4.50',
        reviews: '15',
        price: '199.00 AED',
        originalPrice: '249.00 AED Inclusive VAT',
        description: 'A stylish and durable laptop bag.',
        countInStock: 10
    },
    {
        id: 'ACC02',
        image: Keyboard,
        name: 'Keyboard',
        rating: '4.30',
        reviews: '10',
        price: '99.00 AED',
        originalPrice: '149.00 AED Inclusive VAT',
        description: 'A high-quality keyboard for all your typing needs.',
        countInStock: 20
    },
    {
        id: 'ACC03',
        image: HpGamingHeadset,
        name: 'HP Gaming Headset',
        rating: '4.70',
        reviews: '20',
        price: '299.00 AED',
        originalPrice: '349.00 AED Inclusive VAT',
        description: 'A comfortable gaming headset with excellent sound quality.',
        countInStock: 15
    },
    {
        id: 'ACC04',
        image: DDR5,
        name: 'DDR5 RAM',
        rating: '4.80',
        reviews: '25',
        price: '399.00 AED',
        originalPrice: '449.00 AED Inclusive VAT',
        description: 'High-speed DDR5 RAM for improved performance.',
        countInStock: 12
    },
    {
        id: 'ACC05',
        image: MicrosoftBluetoothMouse,
        name: 'Microsoft Bluetooth Mouse',
        rating: '4.60',
        reviews: '18',
        price: '149.00 AED',
        originalPrice: '199.00 AED Inclusive VAT',
        description: 'A wireless mouse with Bluetooth connectivity.',
        countInStock: 25
    },
    {
        id: 'ACC06',
        image: Mouse,
        name: 'Wireless Mouse',
        rating: '4.20',
        reviews: '12',
        price: '79.00 AED',
        originalPrice: '99.00 AED Inclusive VAT',
        description: 'A compact and reliable wireless mouse.',
        countInStock: 30
    }
];

export default accessories;
