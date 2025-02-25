import React from 'react';
import { BsPersonExclamation } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';

const IconSection = ({ cartItems, setIsCartModalOpen, setIsLoginModalOpen }) => {
  return (
    <div className="flex items-center space-x-4 w-20 justify-end lg:w-auto">
      <button onClick={() => setIsLoginModalOpen(true)} className="p-2 hover:text-[#B88E2F]">
        <BsPersonExclamation size={20} />
      </button>
      <button className="p-2 hover:text-[#B88E2F]">
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
