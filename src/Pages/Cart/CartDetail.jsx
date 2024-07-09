import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import sofa5 from "../../assets/image/products/productsDetail/sofa5.png";
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import {Link} from "react-router-dom";

export default function CartDetail(){
  return(
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
        <table class="table-auto h-[215px] w-[817px] justify-center">
          <thead>
            <tr className="bg-[#F9F1E7] h-[55px] w-[817px]">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-center py-10">
            <tr>
              <td className="flex flex-row gap-6 items-center">
              <div className="bg-[#F9F1E7] h-[105px] w-[108px] my-10 rounded-xl">
              <img src={sofa5}/>
              </div>Asgaard Sofa</td>
              <td>Rp.250,000.00</td>
              <td>1</td>
              <td>Rp.250,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F9F1E7] px-12 py-4 text-center">
        <h1 className="text-2xl font-bold mb-10">Cart Totals</h1>
        <p className="font-semibold mb-4">Subtotal: Rp.250,000.00</p>
        <p className="font-semibold mb-4 text-[#B88E2F]">Total: Rp.250,000.00</p>
        <Link to="checkout"> 
          <button className="rounded-xl border-2 border-black hover:bg-[#B88E2F] hover:text-white px-4 py-2 my-6">Check Out</button>
        </Link>
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