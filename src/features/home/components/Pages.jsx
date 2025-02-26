import React from "react";
import pagesData from "../../../data/pagesData"; // Import data

function Pages() {
  return (
    <section className="p-6" data-aos="fade-left">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Browse The Range</h1>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-10">
        {pagesData.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            {/* Image Wrapper */}
            <div className="w-full max-w-xs h-full overflow-hidden rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            {/* Title */}
            <h1 className="mt-4 font-bold text-2xl">{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pages;
