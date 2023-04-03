import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(endpoint);
    console.log(response);
    setProducts(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { products };
};

export default useFetch;
