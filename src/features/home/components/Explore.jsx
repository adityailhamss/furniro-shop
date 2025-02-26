import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "../../../utils/sliderSettings"; // Import setting slider
import explore1 from "../../../assets/image/explore.png";
import explore2 from "../../../assets/image/explore2.png";
import image1 from "../../../assets/image/Image-1.png";

export default function Explore() {
  const images = [explore1, explore2, image1];

  return (
    <section className="bg-[#FCF8F3] py-12" data-aos="fade-up">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Bagian Kiri - Teks */}
        <div className="text-center lg:text-left w-full lg:w-1/3 px-6">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#3A3A3A] leading-tight">
            50+ Beautiful rooms <br className="hidden lg:block" /> inspiration
          </h1>
          <p className="font-normal text-sm md:text-base text-[#616161] mt-4">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="mt-6 bg-[#B88E2F] px-6 py-3 text-white text-lg font-semibold rounded-lg hover:bg-[#a17a25] transition duration-300">
            Explore More
          </button>
        </div>

        {/* Bagian Kanan - Slider */}
        <div className="w-full lg:w-2/3 px-4">
          <div className="px-12 relative">
            <Slider {...sliderSettings} className="explore-slider">
              {images.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Explore ${index + 1}`}
                    className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
