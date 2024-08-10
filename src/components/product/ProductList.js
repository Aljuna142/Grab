// src/components/product/ProductList.js
/*old import React, { useEffect, useState } from 'react';
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

export default ProductList;old*/


import React, { useEffect, useState } from 'react';
import api from '../../utils/api'; // Adjust the path if necessary

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/v1/products');
        setData(response.data.products || response.data); // Adjust based on response structure
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>{error}</p>; // Handle error state

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.name}</div> // Adjust according to your data structure
      ))}
    </div>
  );
};

export default ProductList;
