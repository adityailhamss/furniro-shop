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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="bg-[#FCF8F3]" data-aos="fade-up">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 h-[500px] lg:min-h-screen items-center">
        <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-1/3">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#3A3A3A]">
            50+ Beautiful rooms<br className="hidden lg:block" />
            inspiration
          </h1>
          <p className="font-normal text-sm md:text-base text-[#616161]">
            Our designer already made a lot of beautiful<br className="hidden lg:block" />
            prototypes of rooms that inspire you
          </p>
          <button className="w-[150px] bg-[#B88E2F] px-4 py-4 text-white hover:bg-[#a17a25] transition-colors duration-300 mx-auto lg:mx-0">
            Explore More
          </button>
        </div>

        <div className="w-full lg:w-2/3 px-4">
          <Slider {...settings} className="explore-slider">
            {[explore1, explore2, image1].map((image, index) => (
              <div key={index} className="px-2">
                <img 
                  src={image} 
                  alt={`Explore ${index + 1}`} 
                  className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}