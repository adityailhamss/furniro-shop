import React from "react";
import image4 from "../../../assets/image/galery/Rectangle 36.png";
import image5 from "../../../assets/image/galery/Rectangle 37.png";
import image6 from "../../../assets/image/galery/Rectangle 38.png";
import image7 from "../../../assets/image/galery/Rectangle 39.png";
import image8 from "../../../assets/image/galery/Rectangle 40.png";
import image9 from "../../../assets/image/galery/Rectangle 41.png";
import image10 from "../../../assets/image/galery/Rectangle 43.png";
import image11 from "../../../assets/image/galery/Rectangle 44.png";
import image12 from "../../../assets/image/galery/Rectangle 45.png";

export default function Furniture(){
  return(
    <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8" data-aos="fade-right">
      <h1 className="text-xl md:text-2xl font-light text-center">Share your setup with</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">#FuniroFurniture</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        <img src={image4} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image6} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image8} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image10} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image12} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <img src={image5} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image7} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image9} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
        <img src={image11} alt="Furniture setup" className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"/>
      </div>
    </div>
  );
};