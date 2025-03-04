import React from 'react';
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function FeaturesSection() {
  const features = [
    {
      Icon: GoTrophy,
      title: "High Quality",
      description: "Crafted from top materials"
    },
    {
      Icon: BsPatchCheck,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      Icon: FaShippingFast,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      Icon: MdOutlineSupportAgent,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <div className="bg-[#F9F1E7] w-full">
      <div className="container mx-auto flex justify-center px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center">
          {features.map(({ Icon, title, description }, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <Icon size={35} className="text-black"/>
              <div className="flex flex-col">
                <h1 className="font-medium text-lg md:text-xl">{title}</h1>
                <p className="text-base md:text-lg text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}