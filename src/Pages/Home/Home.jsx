import React from "react";
import Pages from "./Pages";
import Products from "./Products";
import Explore from "./Explore";
import Furniture from "./Furniture";

function Home({ addToCart }){
  return(
    <>
    <div className="lg:min-h-screen bg-home mb-4" data-aos="fade-left">
      <div class="grid place-items-center lg:place-items-end h-auto lg:h-96 pt-4 lg:pt-36 px-4 lg:px-32">
        <div className="inline rounded-lg bg-[#FFF3E3] w-auto lg:w-[643px] h-auto lg:h-[443px] mb-4" data-aos="fade-up">
          <div className="p-4 lg:p-10">
            <h1 className="text-black font-semibold mb-2 text-lg lg:text-2xl">New Arival</h1>
            <h1 className="text-[#B88E2F] font-bold text-2xl lg:text-6xl mb-2">Discover Our<br></br>New Collection</h1>
            <p className="mb-2 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <a href="shop">
              <button className="text-base lg:text-xl my-6 rounded-lg bg-[#B88E2F] w-[100px] lg:w-[120px] h-[30px] lg:h-[60px] text-white items-center" data-aos="fade-up">BUY NOW</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Pages/>
    <Products addToCart={addToCart}/>
    <Explore/>
    <Furniture/>
    </>
  )
}

export default Home;