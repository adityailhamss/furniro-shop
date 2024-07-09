import React from "react";
import Image1 from "../../assets/image/Image-1.png";
import Image2 from "../../assets/image/Image-living room.png";
import Image3 from "../../assets/image/Mask Group.png";

function Pages(){

  const pages = [
    {
      image: Image1,
      title: "Dining"
    },
    {
      image: Image2,
      title: "Living"
    },
    {
      image: Image3,
      title: "Bedroom"
    }
  ]
  return(
    <div className="p-6" data-aos="fade-left">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 items-center">
        {pages.map((item) => (
        <div className="justify-self-center">
          <img src={item.image}/>
          <h1 className="font-bold text-2xl text-center">{item.title}</h1>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Pages;