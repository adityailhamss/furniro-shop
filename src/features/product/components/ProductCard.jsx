import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { addToCartSuccess } from '../../../alerts';
import { formatPrice } from '../../../utils/formatPrice';

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const getTagBackgroundColor = (tag) => {
    switch (tag) {
      case 'NEW':
        return 'bg-green-500';
      case '30%':
      case '50%':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const handleAddToCart = () => {
    try {
      // Pastikan product dan product.price valid
      if (!product || product.price == null) {
        console.error('Product or price is undefined/null:', product);
        return;
      }
  
      // Konversi harga menjadi angka dengan validasi tipe data
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
  
      addToCart(cartProduct);
      addToCartSuccess();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  
  
  const handleDetailsClick = () => {
    navigate('/productdetails', { state: { product } });
  };
  
  const displayPrice = React.useMemo(() => {
    try {
      return formatPrice(product.price);
    } catch (error) {
      console.error('Error formatting price:', error);
      return '0';
    }
  }, [product.price]);

  const displayOriginalPrice = React.useMemo(() => {
    try {
      return product.original_price ? formatPrice(product.original_price) : null;
    } catch (error) {
      console.error('Error formatting original price:', error);
      return null;
    }
  }, [product.original_price]);
  
  return (
    <div
      className="relative w-72 max-w-sm rounded overflow-hidden shadow-lg m-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-default">
        <img className="w-full" src={product.image_url} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="flex flex-row gap-3">
            <div className="flex gap-2">
              <span className="text-xl font-bold">{displayPrice}</span>
              {displayOriginalPrice && (
                <span className="text-gray-400 line-through">
                  {displayOriginalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {product.tag_names && product.tag_names.split(',').map((tag) => (
            <span key={tag} className={`absolute top-0 right-0 ${getTagBackgroundColor(tag)} text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-2`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-gray-800/50 flex flex-col justify-center items-center text-white ">
          <button onClick={handleDetailsClick} className="mb-2 bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer ...">
            Detail
          </button>
          <button 
            onClick={handleAddToCart} 
            className="mb-2 bg-white text-[#B88E2F] font-bold py-2 px-4 rounded cursor-pointer ..."
          >
            Add to cart
          </button>
          <div className="flex flex-row gap-4">
            <button className="mb-2 text-white font-bold rounded flex flex-row items-center gap-1">
              <IoMdShare />
              Share
            </button>
            <button className="mb-2 text-white font-bold rounded flex flex-row items-center gap-1">
              <CiHeart />
              Like
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
