import React from "react";
import { CiSearch } from "react-icons/ci";
import Categories from "../../../data/categoriesData";
import Posts from "../../../data/postsData";


export default function Sidebar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-none">
      <form onSubmit={handleSearch} className="relative w-full mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-14 pl-10 border rounded-lg border-gray-300"
          placeholder="Search..."
        />
        <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
      </form>

      <Section title="Categories">
        {Categories.map((cat, index) => (
          <div key={index} className="flex justify-between p-2 hover:bg-gray-50">
            <h2 className="font-light">{cat.title}</h2>
            <p className="font-light">{cat.quantity}</p>
          </div>
        ))}
      </Section>

      <Section title="Recent Posts">
        {Posts.map((post, index) => (
          <div key={index} className="flex gap-4 py-4 hover:bg-gray-50">
            <img src={post.image} alt={post.title} className="w-20 h-20 object-cover" />
            <div>
              <h1 className="font-semibold hover:text-[#B88E2F] transition-colors">{post.title}</h1>
              <p className="font-light">{post.date}</p>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h1 className="text-xl font-semibold mb-4">{title}</h1>
    {children}
  </div>
);