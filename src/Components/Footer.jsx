import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export default function Footer(){
  const links = [
    { name: 'Home', href: '#'},
    { name: 'Shop', href: '#'},
    { name: 'About', href: '#'},
    { name: 'Contact', href: '#'},
  ]

const help = [
    { name: 'Help', href: '#'},
    { name: 'Payment Options', href: '#'},
    { name: 'Return', href: '#'},
    { name: 'Privacy Policy', href: '#'},
  ]
  return(
    <footer className="w-full">
      <div class="border-b-2 border-gray-300 mb-10"></div>

      <div className="flex flex-col lg:flex-row lg:text-start text-center lg:justify-around ">

      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-2xl">Funiro.</h1>
        <p className="font-light">400 University Drive Suite 200 Coral<br></br>Gables,
        FL 33134 USA</p>
      </div>

      <div className="flex flex-col gap-10 py-5 lg:py-0">
        <h1 className="font-light text-2xl">Links</h1>
        {links.map((item) => (
          <a key={item.name}
          href={item.href}
          className="font-semibold text-lg"
          >{item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-10 py-5 lg:py-0">
        <h1 className="font-light text-2xl">Help</h1>
        {help.map((item) => (
          <a key={item.name}
          href={item.href}
          className="font-semibold text-lg"
          >{item.name}
          </a>
        ))}
      </div>


      {/* Newsletter */}
          <div className="w-full md:w-1/4 py-5 lg:py-0">
            <h2 className="font-bold text-lg mb-4">Newsletter</h2>
            <form className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-64 lg:w-full h-10 p-2 border-b-2 border-gray-300 mb-2"
              />
              <button
                type="submit"
                className="text-base w-52 h-10 border-b-2 p-0 font-bold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

      </div>

      
      <div className="pb-4 px-20 pt-10">
        <div class="border-b-2 border-gray-300 mb-6"></div>
        <div className="flex justify-between">
          <p className="text-gray-500">&copy; 2023 funiro. All rights reserved.</p>
          <div className="flex flex-row gap-4 items-center">
            <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer"><button><FaFacebook /></button></a>
            <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer"><button><FaInstagram /></button></a>
            <a href="https://www.tiktok.com/@yourtiktokpage" target="_blank" rel="noopener noreferrer"><button><FaTiktok /></button></a>
            <a href="https://www.shopee.com/yourshopeepage" target="_blank" rel="noopener noreferrer"><button><SiShopee /></button></a>
          </div>
        </div>
      </div>

      <div>
      </div>
    </footer>
  )
}
