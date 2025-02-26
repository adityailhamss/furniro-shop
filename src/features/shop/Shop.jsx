import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import ProductShop from "./components/ProductShop";

const Shop = ({addToCart}) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('default');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    categories: [],
    colors: [],
    tags: []
  });
  
  const handleViewChange = (mode) => {
    setViewMode(mode);
  };
  
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  return(
    <>
      <div className="h-[200px] md:h-[316px] w-full bg-shop flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl md:text-4xl font-bold">Shop</h1>
        <div className="flex flex-row gap-2 items-center mt-2">
          <h1>Home</h1><IoIosArrowForward />
          <p>Shop</p>
        </div>
      </div>
      <div className="bg-[#F9F1E7] w-full min-h-[100px] flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex flex-row justify-around gap-4 w-full md:w-auto md:px-16">
          <button 
            onClick={() => setShowFilter(!showFilter)}
            className={`flex flex-row items-center gap-2 px-2 md:px-4 ${showFilter ? 'text-[#B88E2F]' : ''}`}
          >
            <IoFilter size={20}/>
            <span className="hidden md:inline">Filter</span>
          </button>
          
          <button 
            onClick={() => handleViewChange('grid')}
            className={`flex items-center gap-2 px-2 md:px-4 ${viewMode === 'grid' ? 'text-[#B88E2F]' : ''}`}
          >
            <BsFillGridFill size={20}/>
          </button>

          <button 
            onClick={() => handleViewChange('list')}
            className={`flex items-center gap-2 px-2 md:px-4 ${viewMode === 'list' ? 'text-[#B88E2F]' : ''}`}
          >
            <MdOutlineViewDay size={20}/>
          </button>

          <div className="hidden md:block ml-4 border-l-2 border-gray-400"></div>

          <div className="hidden md:flex items-center gap-2 px-4">
            <h1>Showing 1–{itemsPerPage} of 32 results</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto">
          <div className="flex flex-row items-center justify-between md:pr-16 gap-6">
            <h1 className="text-base md:text-lg font-semibold">Show</h1>
            <select 
              className="border border-gray-300 rounded px-2 py-1"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div className="flex flex-row items-center justify-between md:pr-16 gap-6">
            <h1 className="text-base md:text-lg font-semibold">Sort by</h1>
            <select 
              className="border border-gray-300 rounded px-2 py-1"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>
{showFilter && (
  <div className="bg-white shadow-lg p-4 md:p-6 mb-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="flex flex-col gap-2">
          <input 
            type="range" 
            min="0" 
            max="10000000" 
            className="accent-[#B88E2F]"
          />
          <div className="flex justify-between text-sm md:text-base">
            <span>Rp 0</span>
            <span>Rp 10.000.000</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#B88E2F]" />
            Dining
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#B88E2F]" />
            Living
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#B88E2F]" />
            Bedroom
          </label>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-3">Colors</h3>
        <div className="flex gap-2">
          <button className="w-6 h-6 rounded-full bg-[#816DFA]"></button>
          <button className="w-6 h-6 rounded-full bg-black"></button>
          <button className="w-6 h-6 rounded-full bg-[#B88E2F]"></button>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-full hover:border-[#B88E2F] hover:text-[#B88E2F]">
            New
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-full hover:border-[#B88E2F] hover:text-[#B88E2F]">
            Sale
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-full hover:border-[#B88E2F] hover:text-[#B88E2F]">
            Hot
          </button>
        </div>
      </div>
    </div>
  </div>
)}
      <ProductShop 
        addToCart={addToCart} 
        viewMode={viewMode}
        itemsPerPage={itemsPerPage}
        sortBy={sortBy}
      />
{/* High Quality */}
      <div className="bg-[#F9F1E7] py-8 md:py-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 justify-items-center">
            {/* High Quality */}
            <div className="flex items-center gap-4 w-full max-w-[300px]">
              <GoTrophy size={40} className="md:w-[50px]"/>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg md:text-xl">High Quality</h1>
                <h2 className="font-light text-sm md:text-base">Crafted from top materials</h2>
              </div>
            </div>
            
            {/* Warranty Protection */}
            <div className="flex items-center gap-4 w-full max-w-[300px]">
              <BsPatchCheck size={40} className="md:w-[50px]"/>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg md:text-xl">Warranty Protection</h1>
                <h2 className="font-light text-sm md:text-base">Over 2 years</h2>
              </div>
            </div>
            
            {/* Free Shipping */}
            <div className="flex items-center gap-4 w-full max-w-[300px]">
              <FaShippingFast size={40} className="md:w-[50px]"/>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg md:text-xl">Free Shipping</h1>
                <h2 className="font-light text-sm md:text-base">Order over 150 $</h2>
              </div>
            </div>
            
            {/* 24/7 Support */}
            <div className="flex items-center gap-4 w-full max-w-[300px]">
              <MdOutlineSupportAgent size={40} className="md:w-[50px]"/>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg md:text-xl">24 / 7 Support</h1>
                <h2 className="font-light text-sm md:text-base">Dedicated support</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;