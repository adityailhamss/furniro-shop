import React from "react";
import image4 from "../../assets/image/galery/Rectangle 36.png";
import image5 from "../../assets/image/galery/Rectangle 37.png";
import image6 from "../../assets/image/galery/Rectangle 38.png";
import image7 from "../../assets/image/galery/Rectangle 39.png";
import image8 from "../../assets/image/galery/Rectangle 40.png";
import image9 from "../../assets/image/galery/Rectangle 41.png";
import image10 from "../../assets/image/galery/Rectangle 43.png";
import image11 from "../../assets/image/galery/Rectangle 44.png";
import image12 from "../../assets/image/galery/Rectangle 45.png";

export default function Furniture(){
  return(
    <div className="py-10 flex flex-col justify-center items-center gap-2" data-aos="fade-right">
      <h1 className="text-2xl font-light">Share your setup with</h1>
      <p className="text-3xl font-semibold mb-2">#FuniroFurniture</p>
      <div className="flex flex-col lg:flex-row gap-4">
        <img src={image4}/>
        <img src={image6}/>
        <img src={image8}/>
        <img src={image10}/>
        <img src={image12}/>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <img src={image5}/>
        <img src={image7}/>
        <img src={image9}/>
        <img src={image11}/>
      </div>
    </div>
  );
};
