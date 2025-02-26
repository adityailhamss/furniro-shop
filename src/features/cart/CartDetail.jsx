import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '../navbar/components/modal/LoginModal';
// import { showLoginRequiredAlert } from '../../alerts';

export default function CartDetail() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const rawCartItems = location.state?.cartItems || [];
  // Consolidate duplicate items
  const consolidatedItems = rawCartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  const handleCheckoutClick = () => {
    navigate('/checkout', { state: { cartItems: consolidatedItems } });
  };
  // Update the calculateSubtotal function
  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => {
      const itemPrice = typeof item.price === 'number' ? item.price : Number(item.price);
      return total + (itemPrice * (item.quantity || 1));
    }, 0);
  };
  
  // Update the price display in the table
  
  const subtotal = calculateSubtotal(consolidatedItems);
  
  return (
    <>
    <div class="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1>Home</h1><IoIosArrowForward />
        <p>Cart</p>
      </div>
    </div>
  
    <div className="flex flex-row justify-center gap-10 py-16">
      <div className="flex gap-8">
        <table className="table-auto h-[215px] w-[817px] justify-center">
          <thead>
            <tr className="bg-[#F9F1E7] h-[55px] w-[817px]">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-center py-10">
            {consolidatedItems.map((item, index) => (
              // Update the table row price displays
              <tr key={`${item.id}-${index}`}>
                <td className="flex flex-row gap-6 items-center">
                  <div className="bg-[#F9F1E7] h-[105px] w-[108px] my-10 rounded-xl">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  {item.name}
                </td>
                <td>Rp.{typeof item.price === 'number' ? 
                  item.price.toLocaleString() : 
                  Number(item.price).toLocaleString()}
                </td>
                <td>{item.quantity}</td>
                <td>Rp.{(
                  (typeof item.price === 'number' ? item.price : Number(item.price)) * 
                  item.quantity
                ).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div className="bg-[#F9F1E7] px-12 py-4 text-center">
        <h1 className="text-2xl font-bold mb-10">Cart Totals</h1>
        <p className="font-semibold mb-4">Subtotal: Rp.{subtotal.toLocaleString()}</p>
        <p className="font-semibold mb-4 text-[#B88E2F]">Total: Rp.{subtotal.toLocaleString()}</p>
        <button 
          onClick={handleCheckoutClick}
          className="rounded-xl border-2 border-black hover:bg-[#B88E2F] hover:text-white px-4 py-2 my-6"
        >
          Check Out
        </button>
      </div>
    </div>
  
    <div className="bg-[#F9F1E7] h-[270px] w-full content-center">
      <div className="flex flex-row justify-center gap-20 items-center">
        
        <div className="flex items-center gap-4">
        <GoTrophy size={50}/>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">High Quality</h1>
          <h2 className="font-light text-base">Crafted from top materials</h2>
        </div>
        </div>
  
        <div className="flex items-center gap-4">
        <BsPatchCheck size={50}/>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Warranty Protection</h1>
          <h2 className="font-light text-base">Over 2 years</h2>
        </div>
        </div>
  
        <div className="flex items-center gap-4">
        <FaShippingFast size={50}/>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Free Shipping</h1>
          <h2 className="font-light text-base">Order over 150 $</h2>
        </div>
        </div>
  
        <div className="flex items-center gap-4">
        <MdOutlineSupportAgent size={50}/>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">24 / 7 Support</h1>
          <h2 className="font-light text-base">Dedicated support</h2>
        </div>
        </div>
  
      </div>
    </div>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}