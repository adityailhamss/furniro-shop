import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import Sofa5 from "../../assets/image/products/productsDetail/sofa5.png";
import { Rating } from "primereact/rating";

export default function Compare(){
  return(
    <section>
    <div class="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold">Product Comparasion</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1>Home</h1><IoIosArrowForward />
        <p>Comparasion</p>
      </div>
    </div>

    
    <div className="min-h-screen">

    
    <div className="flex flex-row justify-evenly px-6 py-6 h-[400px]">

      <div className="p-4">
        <h1 className="font-semibold text-3xl w-[223px] mb-4">Go to Product page for more Products</h1>
        <button className="border-b-2 border-black">View More</button>
      </div>

      <div className="p-4">
        <div className="bg-[#F9F1E7] w-[280px] h-[220px]">
          <img src={Sofa5}/>
          <h1>Asgaard Sofa</h1>
          <p>Rp. 250,000,00</p>
          <div className="card flex justify-content-center items-center">
            <h1 className="mr-2">4,7</h1>
            <Rating value={4} readOnly cancel={false} className="text-[#FFC700]"/>
            <div class="ml-4 border-l-2 h-[35px] border-gray-400 mr-4"></div>
              <h1 className="text-center">204 Review</h1>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-[#F9F1E7] w-[280px] h-[220px]">
          <img src={Sofa5}/>
          <h1>Outdoor Sofa Set</h1>
          <p>Rp. 224,000,00</p>
          <div className="card flex justify-content-center items-center">
            <h1 className="mr-2">4,2</h1>
            <Rating value={4} readOnly cancel={false} className="text-[#FFC700]"/>
            <div class="ml-4 border-l-2 h-[35px] border-gray-400 mr-4"></div>
              <h1 className="text-center">145 Review</h1>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Add A Product</h1>
          <select className="w-full h-10 p-2 bg-[#B88E2F] mb-2 text-white">
            <option value="">Choose product</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="IN">India</option>
              {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="">
          <h1>General</h1>
          <ul>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
          </ul>
        </div>
        <div className="">
          <h1>General</h1>
          <ul>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
          </ul>
        </div>
        <div className="">
          <h1>General</h1>
          <ul>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Sales Package</li>
          </ul>
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

    </section>
  )
}

