import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function Contact(){
  return(
    <>
    <div class="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold">Contact</h1>
      <div className="flex flex-row gap-2 items-center mt-2">
        <h1>Home</h1><IoIosArrowForward />
        <p>Contact</p>
      </div>
    </div>

    <div className="pt-16">
      <h1 className="text-4xl font-bold text-center mb-2">Get In Touch With Us</h1>
      <p className="text-lg font-light text-center mb-10">For More Information About Our Product & Services. Please Feel Free To Drop Us<br></br>
      An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>

    <div className="flex flex-row justify-evenly py-16 ">

      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-6 items-center">
        <FaLocationDot size={30}/>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Address</h1>
          <p>236 5th SE Avenue, New<br></br>York NY10000, United<br></br>States</p>
        </div>
        </div>

        <div className="flex flex-row gap-6 items-center">
        <FaPhoneAlt size={30}/>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Phone</h1>
          <p>Mobile: +(84) 546-6789<br></br>Hotline: +(84) 456-6789
          </p>
        </div>
        </div>

        <div className="flex flex-row gap-6 items-center">
        <IoTime size={30}/>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Working Time</h1>
          <p>Monday-Friday: 9:00 - 22:00
          <br></br>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 gap-6">
        <form className="flex flex-col gap-4 items-center lg:items-start mb-6">
          <label className="text-base font-semibold">Your Name</label>
          <input
            type="email"
            placeholder="Eg. Udin Armain"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Eg. udinarmain@gmail.com"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Subject</label>
          <input
            type="email"
            placeholder="This is an optional"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />

          <label className="text-base font-semibold">Message</label>
          <input
            type="email"
            placeholder="Hi! i'd like to ask about"
            className="w-full h-10 p-2 border rounded-lg border-gray-300 mb-2"
          />
        </form>
        <button className="w-[200px] px-4 py-2 bg-[#B88E2F] text-white rounded-lg">Submit</button>
      </div>

    </div>
    </>
  )
}