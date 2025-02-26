import React, { useState, useEffect } from 'react';
import ProductCard from '../../product/components/ProductCard';
import products from '../../../data/productData';
import { IoMdShare } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { formatPrice } from '../../../utils/formatPrice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductShop = ({ addToCart, viewMode, itemsPerPage, sortBy }) => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  // Single useEffect for sorting
  useEffect(() => {
    let sorted = [...products];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted = [...products];
    }
    setFilteredProducts(sorted);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, [sortBy]);
  // Calculate pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const GridView = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 justify-items-center">
        {currentProducts.map((product, index) => (
          <div key={index} className="w-full max-w-[300px]">
            <ProductCard 
              product={{
                ...product,
                displayPrice: formatPrice(product.price),
                displayOriginalPrice: product.originalPrice ? formatPrice(product.originalPrice) : ''
              }} 
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
  const ListView = () => (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      {currentProducts.map((product, index) => (
        <Link 
          to="/productdetails" 
          state={{ product: product }}
          key={index}
          className="no-underline text-inherit"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white p-4 rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full md:w-48 h-48 object-cover rounded-md"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4 md:mt-0">
                <div className="flex gap-2">
                  <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }} 
                    className="bg-[#B88E2F] text-white px-4 py-2 rounded w-full md:w-auto"
                  >
                    Add to Cart
                  </button>
                  <div className="flex gap-2 justify-center">
                    <button className="p-2 hover:text-[#B88E2F]"><IoMdShare /></button>
                    <button className="p-2 hover:text-[#B88E2F]"><CiHeart /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  const Pagination = () => (
    <div className="flex justify-center gap-2 my-6 flex-wrap px-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-3 md:px-4 py-2 rounded text-sm md:text-base ${
            currentPage === number
              ? 'bg-[#B88E2F] text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
  return (
    <div className="container mx-auto">
      {viewMode === 'grid' ? <GridView /> : <ListView />}
      <Pagination />
    </div>
  );
};

export default ProductShop;
