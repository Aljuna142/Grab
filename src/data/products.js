// src/data/products.js



import HpImage from '../assets/images/ProductImages/HPProductImage.jpg';
import DellImage from '../assets/images/ProductImages/DellProductImage.jpeg';
import AcerImage from '../assets/images/ProductImages/AcerProductImage.webp';
import AsusImage from '../assets/images/ProductImages/AsusProductImage.jpeg';
import MsiImage from '../assets/images/ProductImages/MsiProductImage.jpeg';
import LenovoImage from '../assets/images/ProductImages/LenovoProductImage.jpeg';
import AppleImage from '../assets/images/ProductImages/AppleProductImage.webp';
import SamsungImage from '../assets/images/ProductImages/SamsungProductImage.jpg';
import AspireImage from '../assets/images/ProductImages/Aspire-3-1.png';
import AspireImage1 from '../assets/images/Aspire/Aspire-3-3-1.png';
import AspireImage2 from '../assets/images/Aspire/Aspire-3-5-1.png';
import AspireImage3 from '../assets/images/Aspire/Aspire-3-7-1.png';
import AspireImage4 from '../assets/images/Aspire/Aspire-3-8-1.png';
import AspireBlack from '../assets/images/Aspire/colors/Aspire-3-black.jpg';
import AspireBlack2 from '../assets/images/Aspire/colors/Aspire-3-black-2.jpeg';

const products = {


    popular: [
        {
            id: 'LAC01',
            image:  AspireImage,
            images: [AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color",
            rating: "5.00",
            reviews: "1",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "1,480.00 AED",
            originalPrice: "2,099.00 AED ",
            description: `The Acer Aspire 3 is a powerhouse designed to handle a wide range of computing tasks with ease. Featuring the Intel Core i5-1135G7 processor, this laptop delivers impressive performance for both everyday tasks and more demanding applications. With 8GB of RAM and a 1TB HDD, you’ll have plenty of memory and storage to keep your files and applications running smoothly. The NVIDIA MX350 2GB graphics card ensures that you can enjoy enhanced visuals and a better overall gaming experience, making this laptop an excellent choice for both work and leisure.

            The 15.6-inch Full HD display offers crisp, clear visuals with vibrant colors, making it ideal for multimedia consumption, whether you're watching movies or working on detailed graphics projects. The laptop's sleek, silver color and modern design add a touch of elegance to your tech gear, while its robust build ensures durability. Windows 11 is pre-installed, providing the latest features and security updates to keep your system running efficiently.

            With a range of connectivity options and a comfortable keyboard for long typing sessions, the Acer Aspire 3 is designed to meet the needs of a diverse range of users. Whether you're a student, professional, or casual user, this laptop combines style, performance, and functionality to deliver an exceptional computing experience. Plus, the ample storage and high-performance specs make it a reliable choice for handling both work and play with ease.`,
            countInStock: 5,
            brand: "Acer",
            category: "Laptop",
            colors: [
                { name: 'Silver', images: [AspireImage,AspireImage1,AspireImage2,AspireImage3,AspireImage4] },
                { name: 'Black', images: [AspireBlack, AspireBlack2] }
            ]
            
        }
    ],

    hp: [
        {
            id: 'LHP01',
            image: HpImage,
            images: [HpImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "HP Pavilion 15 Laptop – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.50",
            reviews: "30",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "2,299.00 AED",
            originalPrice: "2,799.00 AED ",
            description: `The HP Pavilion 15 is a high-performance laptop engineered to meet the demands of modern computing. Equipped with an Intel Core i7 processor, this laptop offers lightning-fast performance and responsiveness, making it ideal for power users who require a reliable machine for demanding applications. With 16GB of RAM and a 512GB SSD, you'll experience rapid data access and seamless multitasking, whether you’re working on complex projects or streaming high-definition content.

            The 15.6-inch Full HD display provides stunning visuals with sharp clarity and vibrant colors, enhancing your viewing experience whether you’re watching videos or working on detailed graphics. Its sleek, modern design not only looks great but also ensures that the HP Pavilion 15 remains cool and quiet even during intense use. The inclusion of Windows 11 means you'll benefit from the latest features and improvements, ensuring your laptop remains up-to-date and secure.

            Designed with both style and functionality in mind, the HP Pavilion 15 offers a comfortable typing experience and a range of connectivity options to keep you connected and productive. The laptop’s lightweight and durable build makes it perfect for professionals and students on the go, while its impressive performance ensures that you can handle all your computing needs with ease. The HP Pavilion 15 is a top choice for anyone seeking a powerful, reliable, and stylish laptop.`,
            countInStock: 3,
            brand: "HP",
            category: "Laptop",
            colors: [
                { name: 'Silver', images: [AspireImage,AspireImage1,AspireImage2,AspireImage3,AspireImage4] },
                { name: 'Black', images: [AspireBlack, AspireBlack2] }
            ]
            
        }
    ],
    dell: [
        {
            id: 'LDE01',
            image: DellImage,
            images: [DellImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Dell Inspiron 14 – Intel Core i5, 8GB RAM, 256GB SSD, 14-inch Full HD",
            rating: "4.20",
            reviews: "25",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "1,799.00 AED",
            originalPrice: "2,299.00 AED Inclusive VAT",
            description: `The Dell Inspiron 14 is a versatile and reliable laptop that combines performance and portability for a wide range of users. Powered by an Intel Core i5 processor, this laptop delivers solid performance for everyday computing tasks, from browsing the web to running productivity applications. With 8GB of RAM and a 256GB SSD, you can enjoy fast boot times and quick access to your files and applications, making it an excellent choice for both work and entertainment.

            Featuring a 14-inch Full HD display, the Dell Inspiron 14 offers clear and vibrant visuals that enhance your viewing experience whether you're working on documents or enjoying multimedia content. Its compact and lightweight design makes it easy to carry, making it an ideal option for students and professionals who need a portable yet powerful machine. The laptop also comes with Windows 11 pre-installed, providing you with the latest features and security updates to keep your system running smoothly.

            The Dell Inspiron 14 is designed with user comfort and convenience in mind, featuring a comfortable keyboard for extended typing sessions and a range of connectivity options to keep you connected. Its sleek design and robust build ensure that it can withstand daily use while maintaining its stylish appearance. Whether you're looking for a reliable laptop for everyday tasks or a portable machine for on-the-go productivity, the Dell Inspiron 14 offers a perfect balance of performance, portability, and style.`,
            countInStock: 4,
            brand: "Dell",
            category: "Laptop"
        }
    ],
    acer: [
        {
            id: 'LAC02',
            image: AcerImage,
            images: [AcerImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Acer Nitro 5 – Intel Core i7, 16GB RAM, 1TB HDD + 512GB SSD, 15.6-inch Full HD",
            rating: "4.60",
            reviews: "40",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED ",
            description: `The Acer Nitro 5 is a gaming laptop designed to deliver top-notch performance for gamers and power users alike. Featuring an Intel Core i7 processor, 16GB of RAM, and a dual storage configuration with 1TB HDD and 512GB SSD, this laptop ensures fast load times and ample storage for all your games and multimedia files. The 15.6-inch Full HD display offers a vibrant and immersive visual experience, allowing you to fully enjoy your gaming sessions and multimedia content.

            With its NVIDIA GeForce GTX 1650 graphics card, the Acer Nitro 5 provides enhanced graphics performance for smooth gameplay and better visual quality in demanding applications. The laptop’s design includes a backlit keyboard and a cooling system to keep temperatures down during intense gaming sessions. The inclusion of Windows 11 ensures that you have the latest features and security updates for a smooth and secure gaming experience.

            The Acer Nitro 5 combines powerful hardware with a sleek and stylish design, making it an excellent choice for gamers who demand high performance and reliability. Its robust build and advanced cooling technology ensure that it can handle extended gaming sessions without overheating. Whether you're a casual gamer or a dedicated esports enthusiast, the Acer Nitro 5 delivers the performance and features needed to take your gaming to the next level.`,
            countInStock: 2,
            brand: "Acer",
            category: "Laptop"
        }
    ],
    asus: [
        {
            id: 'LAS01',
            image: AsusImage,
            images: [AsusImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Asus ZenBook 14 – Intel Core i7, 8GB RAM, 512GB SSD, 14-inch Full HD",
            rating: "4.70",
            reviews: "35",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "2,699.00 AED",
            originalPrice: "2,999.00 AED ",
            description: `The Asus ZenBook 14 is a stylish and portable laptop designed for professionals who need a reliable and high-performance machine. Powered by an Intel Core i7 processor, this laptop offers exceptional performance for a variety of tasks, from productivity to multimedia. With 8GB of RAM and a 512GB SSD, you’ll experience fast boot times and ample storage for your files and applications. The 14-inch Full HD display provides sharp and vibrant visuals, enhancing your viewing experience whether you're working on documents or enjoying media.

            The ZenBook 14 features a sleek and lightweight design that makes it easy to carry, while its robust build ensures durability and longevity. The laptop’s backlit keyboard offers a comfortable typing experience, and the inclusion of Windows 11 provides you with the latest features and security updates. With its high-resolution display and powerful hardware, the Asus ZenBook 14 is well-suited for professionals who require both performance and portability.

                        Designed with a focus on both performance and aesthetics, the Asus ZenBook 14 offers a premium experience with its slim profile and elegant finish. The laptop’s efficient cooling system ensures optimal performance even during extended use, while its long battery life allows for productive work on the go. Whether you’re a business professional, student, or creative individual, the Asus ZenBook 14 delivers the power and style needed to excel in any environment.`,

            countInStock: 6,
            brand: "Asus",
            category: "Laptop"
        }
    ],
    msi: [
        {
            id: 'LMS01',
            image: MsiImage,
            images: [MsiImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "MSI GF63 Thin – Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Full HD",
            rating: "4.40",
            reviews: "20",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "2,099.00 AED",
            originalPrice: "2,499.00 AED ",
            description: `The MSI GF63 Thin is a gaming laptop designed to provide exceptional performance in a compact and lightweight package. Equipped with an Intel Core i5 processor and 8GB of RAM, this laptop delivers smooth and responsive performance for a variety of applications, from gaming to multimedia editing. The 512GB SSD ensures quick load times and ample storage for your games and files, while the 15.6-inch Full HD display offers clear and vibrant visuals for an immersive gaming experience.

            The MSI GF63 Thin features a sleek and modern design with a backlit keyboard that enhances the gaming experience. Its cooling system is engineered to handle extended gaming sessions, keeping the laptop cool and ensuring consistent performance. The laptop comes pre-installed with Windows 11, providing you with the latest features and security updates to keep your system running smoothly.

            Whether you’re a casual gamer or a dedicated esports enthusiast, the MSI GF63 Thin offers the performance and portability you need. Its slim profile and lightweight design make it easy to carry, while its powerful hardware ensures that you can handle demanding games and applications with ease. The MSI GF63 Thin is the perfect choice for gamers looking for a high-performance laptop that doesn’t compromise on style or functionality.`,

            countInStock: 4,
            brand: "MSI",
            category: "Laptop"
        }
    ],
    lenovo: [
        {
            id: 'LLE01',
            image: LenovoImage,
            images: [LenovoImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Lenovo IdeaPad 3 – Intel Core i5, 8GB RAM, 256GB SSD, 15.6-inch Full HD",
            rating: "4.30",
            reviews: "22",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "1,899.00 AED",
            originalPrice: "2,199.00 AED ",
            description: `The Lenovo IdeaPad 3 is an affordable and efficient laptop designed to meet the needs of everyday users. Powered by an Intel Core i5 processor, this laptop provides reliable performance for a range of tasks, from browsing the web to working on documents. With 8GB of RAM and a 256GB SSD, you’ll benefit from fast load times and sufficient storage for your files and applications. The 15.6-inch Full HD display delivers clear and vibrant visuals, making it ideal for both work and entertainment.

            Its sleek design and durable build ensure that the Lenovo IdeaPad 3 is well-suited for daily use, whether you’re at home, at school, or on the go. The laptop’s comfortable keyboard and responsive touchpad enhance your productivity, while its range of connectivity options allows you to stay connected and productive. Windows 11 is pre-installed, providing you with the latest features and security updates to keep your system up-to-date.

            The Lenovo IdeaPad 3 offers a great balance of performance, affordability, and style. Its lightweight design and efficient hardware make it an excellent choice for students, professionals, and casual users who need a reliable laptop for everyday tasks. With its combination of performance and value, the Lenovo IdeaPad 3 is a top choice for anyone seeking an effective and budget-friendly laptop.`,

            countInStock: 7,
            brand: "Lenovo",
            category: "Laptop"
        }
    ],
    apple: [
        {
            id: 'LAP01',
            image: AppleImage,
            images: [AppleImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey",
            rating: "4.80",
            reviews: "50",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "4,299.00 AED",
            originalPrice: "4,799.00 AED ",
            description: `The MacBook Air MQKP3 is a stunning laptop that combines cutting-edge technology with a sleek design. Featuring the powerful Apple M2 chip, this laptop offers exceptional performance with its 8-core CPU and 10-core GPU, making it ideal for everything from everyday tasks to professional-grade applications. The 256GB SSD provides ample storage and ensures fast boot times and quick access to your files, while the 15-inch display delivers crisp, vibrant visuals that enhance your overall computing experience.

            With its slim and lightweight design, the MacBook Air MQKP3 is perfect for users who need a portable and stylish laptop without compromising on performance. The laptop’s high-resolution display offers excellent color accuracy and clarity, making it ideal for creative professionals and multimedia enthusiasts. The inclusion of the latest version of macOS ensures you have access to the latest features and security updates, providing a seamless and secure computing experience.

            Designed with both elegance and functionality in mind, the MacBook Air MQKP3 features a backlit keyboard for comfortable typing and a large trackpad for precise control. Its impressive battery life ensures that you can work or play for extended periods without needing to recharge. Whether you're a student, professional, or creative individual, the MacBook Air MQKP3 offers the perfect blend of performance, portability, and style.`,

            countInStock: 5,
            brand: "Apple",
            category: "Laptop"
        }
    ],
    samsung: [
        {
            id: 'LSAM01',
            image: SamsungImage,
            images: [SamsungImage,AspireImage1,AspireImage1,AspireImage2,AspireImage3,AspireImage4
            ],
            name: "Samsung Galaxy Book Pro – Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch AMOLED",
            rating: "4.70",
            reviews: "30",
            reviewText: [
                "Amazing performance and battery life. The design is also very sleek!",
                "Great laptop for both work and play. The display quality is top-notch.",
                "This a fantastic laptop with a premium feel. Highly recommended."
            ],
            price: "3,299.00 AED",
            originalPrice: "3,799.00 AED ",
            description: `The Samsung Galaxy Book Pro is a premium laptop that offers top-tier performance and stunning visuals. Equipped with an Intel Core i7 processor and 16GB of RAM, this laptop delivers powerful performance for both professional and personal use. The 512GB SSD provides ample storage space and ensures quick access to your files and applications. 
            
            
            
            The 15.6-inch AMOLED display offers exceptional color accuracy and contrast, providing an immersive viewing experience for multimedia and creative work.

            Designed with a sleek and modern aesthetic, the Galaxy Book Pro features a lightweight and portable build that makes it easy to carry wherever you go. The laptop’s high-resolution display and slim profile make it perfect for professionals who need a powerful machine that doesn’t compromise on style. Windows 11 is pre-installed, giving you access to the latest features and security updates for a smooth and secure computing experience.

            The Samsung Galaxy Book Pro is equipped with a range of features that enhance both performance and usability. Its comfortable keyboard and responsive trackpad ensure efficient and precise input, while its robust build and advanced cooling system ensure reliable performance even during extended use. Whether you're working on demanding tasks or enjoying multimedia content, the Galaxy Book Pro delivers a premium computing experience that meets the needs of modern users.`,

            countInStock: 8,
            brand: "Samsung",
            category: "Laptop"
        }
    ]
};


export default products;




