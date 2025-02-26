import React from 'react';
import { BsPersonExclamation } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';

const IconSection = ({ cartItems, setIsCartModalOpen, setIsLoginModalOpen, isMobile }) => {
  if (isMobile) {
    return (
      <div className="w-full flex justify-between gap-2">
        <button onClick={() => setIsLoginModalOpen(true)} className="flex-1 flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200">
          <BsPersonExclamation size={20} className="mr-2" />
          <span>Login</span>
        </button>
        <button className="flex-1 flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200">
          <CiHeart size={20} className="mr-2" />
          <span>Wishlist</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => setIsLoginModalOpen(true)} className="p-2 hover:text-[#B88E2F] hidden lg:block">
        <BsPersonExclamation size={20} />
      </button>
      <button className="p-2 hover:text-[#B88E2F] hidden lg:block">
        <CiHeart size={20} />
      </button>
      <button onClick={() => setIsCartModalOpen(true)} className="p-2 hover:text-[#B88E2F] relative">
        <MdOutlineShoppingCart size={20} />
        <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      </button>
    </div>
  );
};

export default IconSection;
