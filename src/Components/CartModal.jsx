import React from 'react';
import Modal from './Modal';
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { showDeleteConfirmation } from '../alerts';

const CartModal = ({ isOpen, onClose, cartItems, setCartItems }) => {
  if (!isOpen) return null;

  const handleDelete = (id) => {
    showDeleteConfirmation(() => {
      setCartItems(cartItems.filter(item => item.id !== id));
    });
  };

  // Calculate subtotal only if cartItems has items
  const subtotal = cartItems.length > 0 ? cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace(/\./g, ''));
  }, 0) : 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <div className="border-b-2 border-gray-300 mb-6"></div>
        <div className="flex-grow flex flex-col gap-6 overflow-auto">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-row items-center gap-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex flex-col flex-grow">
                <h1>{item.name}</h1>
                <p className="text-[#B88E2F]">1 X Rp.{item.price}</p>
              </div>
              <button onClick={() => handleDelete(item.id)} className="text-gray-500 hover:text-gray-700 pr-4">
                <IoIosCloseCircle size={24} />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Subtotal</span>
            <span className="text-[#B88E2F]">Rp.{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-evenly">
          <Link to="/cartdetails">
            <button className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600">Cart</button>
          </Link>
          <Link to="/checkout">
            <button className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600">Checkout</button>
          </Link>
          {/* <Link to="/compareproduct">
            <button className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600">Comparison</button>
          </Link> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
