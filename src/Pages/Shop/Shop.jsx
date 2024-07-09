import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import ProductShop from "./ProductShop";

const Shop = ({addToCart}) => {
  return(
    <>
    <div class="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold">Shop</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1>Home</h1><IoIosArrowForward />
        <p>Shop</p>
      </div>
    </div>

    <div className="bg-[#F9F1E7] w-full h-[100px] flex justify-between items-center">
      <div className="flex flex-row justify-around px-16">

        <button className="flex flex-row items-center gap-2 px-4"><IoFilter size={20}/>Filter</button>
        
        <button className="flex items-center gap-2 px-4">
        <BsFillGridFill size={20}/>
        </button>

        <button className="flex items-center gap-2 px-4">
        <MdOutlineViewDay size={20}/>
        </button>

        <div class="ml-4 border-l-2 border-gray-400 ..."></div>

        <div className="flex items-center gap-2 px-4">
        <h1>Showing 1–16 of 32 results</h1>
        </div>

      </div>

      <div className="flex justify-end">
        <div className="flex flex-row items-center pr-16 gap-6">
          <h1 className="text-lg font-semibold">Show</h1>
          <select className="border border-gray-300 rounded px-2 py-1">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
        </div>

        <div className="flex flex-row items-center pr-16 gap-6">
          <h1 className="text-lg font-semibold">Short by</h1>
          <select className="border border-gray-300 rounded px-2 py-1">
              <option value="10">Default</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
        </div>
      </div>
    </div>

    <ProductShop addToCart={addToCart}/>

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

export default Shop;