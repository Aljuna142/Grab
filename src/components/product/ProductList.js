// src/components/product/ProductList.js
import React, { useEffect, useState } from 'react';
import api from '../../utils/api'; // Adjust the path if necessary

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/v1/products'); // Example endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.name}</div> // Adjust according to your data structure
      ))}
    </div>
  );
};

export default ProductList;
