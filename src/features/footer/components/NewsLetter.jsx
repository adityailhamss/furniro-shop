import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full md:w-1/4 py-5 lg:py-0">
      <h2 className="font-bold text-lg mb-4">Newsletter</h2>
      <form className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-64 lg:w-full h-10 p-2 border-b-2 border-gray-300 mb-2"
        />
        <button
          type="submit"
          className="text-base w-52 h-10 border-b-2 p-0 font-bold"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
