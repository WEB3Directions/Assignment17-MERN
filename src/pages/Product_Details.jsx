// src/pages/ProductDetails.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cards2 from '../components/Cards2'; // Import Cards component

const Product_Details = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      {productDetails ? (
        <div>
         
          <Cards2
            title={productDetails.title}
            price={productDetails.price}
            image={productDetails.image}
          />
          <h2>{productDetails.title}</h2>
          <p>{productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product_Details;
