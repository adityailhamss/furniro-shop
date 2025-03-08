import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import FeaturesSection from '../../components/common/FeaturesSection';
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
    <div className="h-[200px] md:h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl md:text-4xl font-bold">Cart</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1 className="text-sm md:text-base">Home</h1><IoIosArrowForward />
        <p className="text-sm md:text-base">Cart</p>
      </div>
    </div>
  
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 py-8 md:py-16 px-4 md:px-[100px]">
      <div className="w-full overflow-x-auto">
        <table className="table-auto min-w-full md:w-[817px] justify-center">
          <thead>
            <tr className="bg-[#F9F1E7] h-[55px]">
              <th className="px-2 md:px-4">Product</th>
              <th className="px-2 md:px-4">Price</th>
              <th className="px-2 md:px-4">Quantity</th>
              <th className="px-2 md:px-4">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {consolidatedItems.map((item, index) => (
              <tr key={`${item.id}-${index}`}>
                <td className="flex flex-col md:flex-row gap-2 md:gap-6 items-center p-2 md:p-4 pl-8">
                  <div className="bg-[#F9F1E7] h-[80px] w-[80px] md:h-[105px] md:w-[108px] my-2 md:my-10 rounded-xl">
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-xl"/>
                  </div>
                  <span className="text-sm md:text-base text-center md:text-left">{item.name}</span>
                </td>
                <td className="text-sm md:text-base">Rp.{typeof item.price === 'number' ? 
                  item.price.toLocaleString() : 
                  Number(item.price).toLocaleString()}
                </td>
                <td className="text-sm md:text-base">{item.quantity}</td>
                <td className="text-sm md:text-base">Rp.{(
                  (typeof item.price === 'number' ? item.price : Number(item.price)) * 
                  item.quantity
                ).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div className="bg-[#F9F1E7] px-6 md:px-12 py-4 text-center w-full md:w-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-10">Cart Totals</h1>
        <p className="font-semibold mb-4 text-sm md:text-base">Subtotal: Rp.{subtotal.toLocaleString()}</p>
        <p className="font-semibold mb-4 text-sm md:text-base text-[#B88E2F]">Total: Rp.{subtotal.toLocaleString()}</p>
        <button 
          onClick={handleCheckoutClick}
          className="w-full md:w-auto rounded-xl border-2 border-black hover:bg-[#B88E2F] hover:text-white px-4 py-2 my-6"
        >
          Check Out
        </button>
      </div>
    </div>
  {/* Replace the features section with: */}
    <FeaturesSection />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}