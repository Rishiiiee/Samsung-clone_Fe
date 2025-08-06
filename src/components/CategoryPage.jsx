import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCards from '../components/Productcard';

const CategoryPage = () => {
  const { category = 'mobile' } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let endpoint;
        switch (category.toLowerCase()) { 
          case 'mobile':
            endpoint = 'http://localhost:3000/allmobiles';
            break;
          case 'tv':
          case 'tv&av': 
            endpoint = 'http://localhost:3000/tv';
            break;
          case 'appliances':
            endpoint = 'http://localhost:3000/appliances';
            break;
          case 'display':
          case 'computing': 
            endpoint = 'http://localhost:3000/display';
            break;
          case 'accessories':
            endpoint = 'http://localhost:3000/accessories';
            break;
          case 'shop': 
            endpoint = 'http://localhost:3000/allmobiles'; 
            break;
          default:
            endpoint = 'http://localhost:3000/allmobiles';
        }

        const response = await axios.get(endpoint);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Loading products...</p>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger mx-3 my-5">
      Error loading products: {error}. Please try again later.
    </div>
  );

  return (
    <div className="container py-4">
      <h1 className="mb-4">
        {category ? 
          category.charAt(0).toUpperCase() + category.slice(1).replace('&', ' & ') : 
          'Products'
        }
      </h1>
      {products.length > 0 ? (
        <ProductCards products={products} />
      ) : (
        <div className="alert alert-info">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default CategoryPage;