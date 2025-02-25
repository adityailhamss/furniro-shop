import React from "react";
import Pages from "./components/Pages";
import Products from "../product/Products";
import Explore from "./components/Explore";
import Furniture from "./components/Furniture";

function Home({ addToCart }) {
  return (
    <>
      {/* Hero Section */}
      <section className="lg:min-h-screen bg-home mb-4" data-aos="fade-left">
        <div className="grid place-items-center lg:place-items-end h-auto lg:h-96 pt-4 lg:pt-36 px-4 lg:px-10">
          <div
            className="inline-block rounded-lg bg-[#FFF3E3] w-auto lg:w-[643px] h-auto lg:h-[443px] mb-4 shadow-lg"
            data-aos="fade-up"
          >
            <div className="p-4 lg:p-10">
              <h1 className="text-black font-semibold mb-2 text-lg lg:text-2xl">
                New Arrival
              </h1>
              <h2 className="text-[#B88E2F] font-bold text-2xl lg:text-6xl mb-2">
                Discover Our<br />New Collection
              </h2>
              <p className="mb-2 text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <a href="shop">
                <button
                  className="text-base lg:text-xl my-6 rounded-lg bg-[#B88E2F] w-[120px] lg:w-[140px] h-[40px] lg:h-[60px] text-white flex justify-center items-center hover:bg-[#a1782c] transition duration-300"
                  data-aos="fade-up"
                >
                  BUY NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Pages />
      <Products addToCart={addToCart} />
      <Explore />
      <Furniture />
    </>
  );
}

export default Home;
