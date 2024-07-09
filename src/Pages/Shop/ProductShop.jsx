import React, { useState } from 'react';
import ProductCard from '../Home/ProductCard';
import products from '../Data/ProductData';

const itemsPerPage = 16;

const ProductShop = ({addToCart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 items-center flex flex-col pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart}/>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <button
          className="bg-white border-2 border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-4 rounded mx-1"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`bg-[#F9F1E7] text-black font-bold py-2 px-4 rounded mx-1 ${
              currentPage === index + 1 ? 'bg-[#bb9336] text-white' : ''
            }`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-white border-2 border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-4 rounded mx-1"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductShop;
