import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import explore1 from "../../assets/image/explore.png";
import explore2 from "../../assets/image/explore2.png";
import image1 from "../../assets/image/Image-1.png";

export default function Explore() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#FCF8F3]" data-aos="fade-up">
      <div className="flex flex-col lg:flex-row pl-4 lg:pl-32 gap-8 min-h-screen items-center">
        
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-[#3A3A3A]">
            50+ Beautiful rooms <br></br>
            inspiration
          </h1>
          <p className="font-normal text-base text-[#616161]">
            Our designer already made a lot of beautiful<br></br>prototypes of rooms that inspire you
          </p>
          <button className="w-[150px] bg-[#B88E2F] px-4 py-4 text-white">Explore More</button>
        </div>

        <div className="w-[400px] lg:w-[900px] gap-4 relative">
          <Slider {...settings} className="gap-4">
            <div>
              <img src={explore1} alt="Explore 2" className="w-full h-auto" />
            </div>
            <div>
              <img src={explore2} alt="Explore 2" className="w-full h-auto" />
            </div>
            <div>
              <img src={image1} alt="Image 1" className="w-full h-auto" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}