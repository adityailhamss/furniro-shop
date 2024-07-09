import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { addToCartSuccess } from '../../alerts';

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const getTagBackgroundColor = (tag) => {
    switch (tag) {
      case 'New':
        return 'bg-green-500';
      case '-30%':
      case '-50%':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    addToCartSuccess(); // Show the success alert
  };

  const handleDetailsClick = (product) => {
    navigate('productdetails', { state: { product } });
  };

  return (
    <div
      className="relative w-72 max-w-sm rounded overflow-hidden shadow-lg m-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="flex flex-row gap-3">
        <p className="text-xl text-gray-900">Rp {product.price}</p>
        {product.originalPrice && (
          <p className="text-lg text-gray-400 line-through">Rp {product.originalPrice}</p>
          
        )}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {product.tags.map((tag) => (
          <span key={tag} className={`absolute top-0 right-0 ${getTagBackgroundColor(tag)} text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-2`}>
            {tag}
          </span>
        ))}
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col justify-center items-center text-white">
          
          <button onClick={() => handleDetailsClick(product)} className="mb-2 bg-blue-600 text-white font-bold py-2 px-4 rounded">
           Detail
          </button>
          
          <button onClick={() => handleAddToCart(product)} className="mb-2 bg-white text-[#B88E2F] font-bold py-2 px-4 rounded">
            Add to cart
          </button>
          <div className="flex flex-row gap-4">
          <a className="mb-2 text-white font-bold rounded">
            <button className="flex flex-row items-center gap-1">
            <IoMdShare />
            Share
            </button>
          </a>
          <a className="mb-2 text-white font-bold rounded">
            <button className="flex flex-row items-center gap-1">
            <GoArrowSwitch />
            Compare
            </button>
          </a>
          <a className="mb-2 text-white font-bold rounded">
            <button className="flex flex-row items-center gap-1">
            <CiHeart />
            Like
            </button>
          </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
