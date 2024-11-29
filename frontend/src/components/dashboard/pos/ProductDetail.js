// ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ storeName }) => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/stores/${storeName}/products`);
                setProductsData(response.data);
            } catch (error) {
                console.error('Error fetching products data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsData();
    }, [storeName]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Products for {storeName}</h2>
            <ul>
                {productsData.map((product) => (
                    <li key={product.id}>
                        {product.name}: ${product.price} (Stock: {product.stock})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDetail;
