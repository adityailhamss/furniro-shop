import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import products from '../../data/productData';


const Products = ({addToCart}) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const toggleShowMoreProducts = () => {
    setVisibleCount(showAll ? 8 : products.length);
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto px-4 items-center flex flex-col" data-aos="fade-up">
      <h1 className="text-4xl font-bold my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1" data-aos="fade-down-right">
        {products.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <button
          className="bg-white border-2 border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded"
          onClick={toggleShowMoreProducts}
        >
          {showAll ? 'Hide More' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Products;
