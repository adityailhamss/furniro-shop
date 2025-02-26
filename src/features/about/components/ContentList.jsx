import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";

export default function ContentList({ content }) {
  return (
    <div className="flex flex-col">
      {content.map((item, index) => (
        <div key={index} className="mt-10 mb-2">
          <img src={item.image} alt="Content" className="w-full h-auto" />
          <div className="flex flex-wrap gap-4 mt-2">
            <InfoItem icon={<IoPerson />} text="Admin" />
            <InfoItem icon={<FaCalendar />} text="14 Oct 2022" />
            <InfoItem icon={<BsFillTagsFill />} text="Wood" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold my-4">{item.title}</h1>
          <p className="font-light text-justify max-w-full">{item.description}</p>
          <button className="mt-6 text-lg font-semibold hover:opacity-80">Read More</button>
          <div className="border-b-2 border-black mb-6 w-[90px] mt-3"></div>
        </div>
      ))}
    </div>
  );
}
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <h1>{text}</h1>
  </div>
);