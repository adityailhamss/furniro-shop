import React, { useState} from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useLocation} from 'react-router-dom';
import FeaturesSection from '../../components/common/FeaturesSection';

export default function Checkout() {
  const [showDescription, setShowDescription] = useState(false);
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // Calculate totals
  // Update the subtotal calculation
    const subtotal = cartItems.reduce((total, item) => {
      const itemPrice = typeof item.price === 'number' ? item.price : Number(item.price);
      return total + (itemPrice * (item.quantity || 1));
    }, 0);
  // Update the price display in the product list
  
  // Remove login check
  /* Remove this useEffect
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (!userLoggedIn) {
      navigate('/login');
    }
    setIsLoggedIn(!!userLoggedIn);
  }, [navigate]);
  */
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <>
    <div className="h-[200px] md:h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl md:text-4xl font-bold">Checkout</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1 className="text-sm md:text-base">Home</h1><IoIosArrowForward />
        <p className="text-sm md:text-base">Checkout</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center py-8 md:py-14 px-4 md:px-14 gap-8 md:gap-14">
      {/* Billing Details Section */}
      <div className="w-full md:w-1/2 px-2 py-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Billing details</h1>
        <form className="flex flex-col gap-4 items-start mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-3">
              <label className="text-sm md:text-base font-semibold">First Name</label>
              <input type="text" className="w-full h-10 p-2 border rounded-lg border-gray-300" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm md:text-base font-semibold">Last Name</label>
              <input type="text" className="w-full h-10 p-2 border rounded-lg border-gray-300" />
            </div>
          </div>
          {/* Other form fields */}
          {/* ... Keep other input fields with these classes ... */}
          <div className="w-full flex flex-col gap-3">
            <label className="text-sm md:text-base font-semibold">Company Name (Optional)</label>
            <input type="text" className="w-full h-10 p-2 border rounded-lg border-gray-300" />
          </div>
          <label className="text-base font-semibold">Company Name (Optional)</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />
          <label className="text-base font-semibold">Country / Region</label>
          <select className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="IN">India</option>
              {/* Add more options as needed */}
          </select>

          <label className="text-base font-semibold">Street Address</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Town City</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Province</label>
          <select className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2">
            <option value="">Select Province</option>
            <option value="CA-ON">Ontario</option>
            <option value="CA-BC">British Columbia</option>
            <option value="CA-QC">Quebec</option>
            <option value="US-CA">California</option>
            <option value="US-NY">New York</option>
            {/* Add more options as needed */}
          </select>

          <label className="text-base font-semibold">Zip Code</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Phone</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Email Address</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />    
          
          <input
            type="text"
            placeholder="Additional Information"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />    
        </form>
      </div>
      {/* Order Summary Section */}
      <div className="w-full md:w-[608px] p-6 bg-[#ffffff] rounded-lg">
        <div className="text-xl font-bold mb-4">Product</div>
        <div className="max-h-[300px] overflow-y-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>{item.name}</span>
                <span className="text-gray-600">x {item.quantity}</span>
              </div>
              <div>Rp.{typeof item.price === 'number' ? 
                item.price.toLocaleString() : 
                Number(item.price).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        
        <div className="flex justify-between mb-4 text-sm md:text-base">
          <div>Subtotal</div>
          <div>Rp.{subtotal.toLocaleString()}</div>
        </div>
        <div className="flex justify-between text-lg md:text-xl font-bold mb-4">
          <div>Total</div>
          <div className="text-[#B88E2F]">Rp.{subtotal.toLocaleString()}</div>
        </div>
        {/* Payment Methods */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDescription}>
            <input
              type="radio"
              name="paymentMethod"
              className="mr-2"
              checked={showDescription}
              onChange={toggleDescription}
            />
            <span className="font-semibold text-sm md:text-base">Direct Bank Transfer</span>
          </div>
          {showDescription && (
            <div className="pl-6 text-gray-600 text-sm md:text-base">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            </div>
          )}
          
          <div className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              className="mr-2"
              checked={!showDescription}
              onChange={toggleDescription}
            />
            <span className="font-semibold text-sm md:text-base">Cash On Delivery</span>
          </div>
        </div>
        <div className="text-sm md:text-base text-gray-600 my-4">
          Your personal data will be used to support your experience throughout this website.
        </div>
        <button className="w-full md:w-2/3 mx-auto block bg-white text-black hover:text-white hover:bg-[#B88E2F] border-2 border-black py-3 md:py-4 rounded-lg transition-colors">
          Place order
        </button>
      </div>
    </div>
    {/* Replace the features section with: */}
    <FeaturesSection />
    </>
  )
}