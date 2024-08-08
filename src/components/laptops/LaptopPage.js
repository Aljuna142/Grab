import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../cards/ProductCard';
import '../../assets/styles/LaptopPage.css'; // Import CSS for styling

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/v1/products/category/laptop');
                setLaptops(data.products);
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    return (
        <div className="laptop-page">
            <h2>Laptops</h2>
            <div className="laptop-cards-container">
                {laptops.map((laptop) => (
                    <ProductCard
                        key={laptop.id}
                        id={laptop.id}
                        image={laptop.image}
                        name={laptop.name}
                        rating={laptop.rating}
                        reviews={laptop.reviews}
                        price={laptop.price}
                        originalPrice={laptop.originalPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default LaptopPage;
