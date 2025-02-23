import React from 'react';
import Modal from './Modal';
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { showDeleteConfirmation } from '../alerts';

const CartModal = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const consolidatedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const handleCheckoutClick = () => {
    // Use navigate with replace option to ensure direct navigation
    navigate('/checkout', { 
      state: { cartItems: consolidatedItems },
      replace: true
    });
    onClose();
  };
  // Alternative approach using Link component
  // Replace the button with Link if navigate doesn't work
  /*
  <Link to="/checkout" state={{ cartItems: consolidatedItems }}>
    <button 
      onClick={onClose}
      className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600"
    >
      Checkout
    </button>
  </Link>
  */
  const handleDelete = (id) => {
    showDeleteConfirmation(() => {
      setCartItems(cartItems.filter(item => item.id !== id));
    });
  };
  // Update subtotal calculation
  const subtotal = consolidatedItems.length > 0 ? consolidatedItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/\./g, ''));
    return total + (price * item.quantity);
  }, 0) : 0;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <div className="border-b-2 border-gray-300 mb-6"></div>
        <div className="flex-grow flex flex-col gap-6 overflow-auto">
          {consolidatedItems.map(item => (
            <div key={item.id} className="flex flex-row items-center gap-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex flex-col flex-grow">
                <h1>{item.name}</h1>
                <p className="text-[#B88E2F]">{item.quantity} X Rp.{item.price}</p>
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
            <Link to="/cartdetails" state={{ cartItems: cartItems }}>
              <button className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600">
                Cart
              </button>
            </Link>
            <button 
              onClick={handleCheckoutClick}
              className="bg-white hover:bg-[#B88E2F] hover:text-white text-black py-2 px-6 rounded-full ring-2 ring-gray-600"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
