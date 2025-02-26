import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Content from "../../data/contentData";
import ContentList from "./components/ContentList";
import Sidebar from "./components/Sidebar";

export default function About() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState(Content);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = Content.filter((item) =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContent(filtered);
  };

  return (
    <>
      <div className="h-[316px] w-full bg-shop flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold">About</h1>
        <div className="flex flex-row gap-2 items-center mt-2">
          <h1>Home</h1>
          <IoIosArrowForward />
          <p>About</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:px-12 py-8 lg:py-16">
        <div className="w-full lg:w-2/3">
          <ContentList content={filteredContent} />
        </div>
        
        <div className="w-full lg:w-1/3">
          <Sidebar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </>
  );
}
