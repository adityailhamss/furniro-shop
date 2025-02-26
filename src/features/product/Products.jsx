import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import products from '../../data/productData';
import { formatPrice } from '../../utils/formatPrice';

const Products = ({ addToCart }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const handleAddToCart = (product) => {
    try {
      if (!product || product.price == null) {
        console.error('Product or price is undefined/null:', product);
        return;
      }
  
      const numericPrice = typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[^\d]/g, ''))
        : Number(product.price);
  
      if (isNaN(numericPrice)) {
        console.error('Invalid price value:', product.price);
        return;
      }
  
      const cartProduct = {
        ...product,
        price: numericPrice,
        displayPrice: formatPrice(numericPrice),
        quantity: 1,
      };
  
      if (addToCart) {
        addToCart(cartProduct);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  

  const toggleShowMoreProducts = () => {
    setVisibleCount(showAll ? 8 : products.length);
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto px-4 items-center flex flex-col" data-aos="fade-up">
      <h1 className="text-4xl font-bold my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-down-right">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <button
          className="bg-white border-2 border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded hover:bg-[#B88E2F] hover:text-white transition-colors"
          onClick={toggleShowMoreProducts}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Products;
