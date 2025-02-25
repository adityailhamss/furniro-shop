import React, { useState} from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useLocation} from 'react-router-dom';
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Checkout() {
  const [showDescription, setShowDescription] = useState(false);
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/\./g, ''));
    return total + (price * item.quantity);
  }, 0);
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
    <div class="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold">Checkout</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1>Home</h1><IoIosArrowForward />
        <p>Checkout</p>
      </div>
    </div>
    <div className="flex flex-row justify-evenly py-14 px-14 gap-14">
      <div className="px-2 py-2">
        <h1 className="text-3xl font-bold mb-6">Billing details</h1>
        <form className="flex flex-col gap-4 items-center lg:items-start mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
          <label className="text-base font-semibold">First Name</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />
          </div>
          <div className="flex flex-col gap-3">
          <label className="text-base font-semibold">Last Name</label>
          <input
            type="text"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />
          </div>
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
    
      <div className="p-4 justify-end w-[608px]">
        <div className="text-xl font-bold mb-4">Product</div>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div>{item.name} x {item.quantity}</div>
            <div>Rp.{item.price}</div>
          </div>
        ))}
        <div className="flex justify-between mb-4">
          <div>Subtotal</div>
          <div>Rp.{subtotal.toLocaleString()}</div>
        </div>
        <div className="flex justify-between text-xl font-bold mb-4">
          <div>Total</div>
          <div className="text-[#B88E2F]">Rp.{subtotal.toLocaleString()}</div>
        </div>
      <div className="border-b-2 border-grey-300 my-4"></div>
      <div className="mb-4">
        <div className="flex items-center mb-2 cursor-pointer" onClick={toggleDescription}>
          <input
            type="radio"
            name="paymentMethod"
            className="mr-2"
            checked={showDescription}
            onChange={toggleDescription}
          />
          <span className="font-semibold">Direct Bank Transfer</span>
        </div>
        {showDescription && (
          <div className="pl-6 text-gray-600">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </div>
        )}
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          className="mr-2"
          checked={!showDescription}
          onChange={toggleDescription}
        />
        <span className="font-semibold">Cash On Delivery</span>
      </div>
      <div className="text-base text-gray-600 mb-4">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
      </div>
      <div className="flex justify-center">
      <button className="bg-white text-black hover:text-white hover:border-white border-2 border-black py-4 w-6/12 rounded-lg hover:bg-yellow-600">
        Place order
      </button>
      </div>
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
    </>
  )
}