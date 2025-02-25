import React, { useState } from "react";
import About1 from "../../assets/image/About1.png";
import About2 from "../../assets/image/About2.png";
import About3 from "../../assets/image/About3.png";
import About4 from "../../assets/image/About4.png";
import About5 from "../../assets/image/About5.png";
import About6 from "../../assets/image/About6.png";
import About7 from "../../assets/image/About7.png";
import About8 from "../../assets/image/About8.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function About() {
  const content = [
    {
      image: About1,
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      image: About2,
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      image: About3,
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
  ];

  const categories = [
    {
      title: 'Crafts',
      quantity: 2,
    },
    {
      title: 'Design',
      quantity: 8,
    },
    {
      title: 'Handmade',
      quantity: 7,
    },
    {
      title: 'Interior',
      quantity: 1,
    },
    {
      title: 'Wood',
      quantity: 6,
    },
  ];

  const posts = [
    {
      image: About4,
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
    },
    {
      image: About5,
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
    },
    {
      image: About6,
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
    },
    {
      image: About7,
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
    },
    {
      image: About8,
      title: 'Colorful office redesign',
      date: '03 Aug 2022',
    },
  ]

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState(content);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = content.filter((item) =>
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

      <div className="flex flex-row gap-16 px-12 py-16">
      <div className="flex flex-col">
        {content.map((item, index) => (
          <div key={index} className="mt-10 mb-2">
            <img src={item.image} alt="Content Image" />
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2 mt-2 mx-2 items-center">
                <IoPerson />
                <h1>Admin</h1>
              </div>
              <div className="flex flex-row gap-2 mt-2 mx-2 items-center">
                <FaCalendar />
                <h1>14 Oct 2022</h1>
              </div>
              <div className="flex flex-row gap-2 mt-2 mx-2 items-center">
                <BsFillTagsFill />
                <h1>Wood</h1>
              </div>
            </div>
            <h1 className="text-4xl font-semibold my-4">{item.title}</h1>
            <p className="font-light text-justify w-[817px]">
              {item.description}
            </p>
            <button className="mt-6 text-lg font-semibold">Read More</button>
            <div className="border-b-2 border-black mb-6 w-[90px] mt-3"></div>
          </div>
        ))}
      </div>
      
      <div className="w-full">

      <div className="p-2">
      <form onSubmit={handleSearch} className="flex flex-row gap-4 items-center lg:items-start mt-10 w-full">
          <div className="relative w-4/5 lg:w-3/5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-10 p-2 border rounded-lg border-gray-300 mb-2"
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={30}/>
          </div>
        </form>
        <div className="px-4 py-4 w-3/5">
          <h1 className="text-xl font-semibold">Categories</h1>
          {categories.map((categories) => (
          <div className="flex justify-between mb-1 mt-2 p-2">
            <h2 className="font-light">{categories.title}</h2>
            <p className="font-light">{categories.quantity}</p>
          </div>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-4">
        <h1 className="text-xl font-semibold">Recent Posts</h1>
        <div className="flex flex-col mt-6">
          {posts.map((post)=> (
            <div className="flex flex-row w-[300px] gap-4 py-4 px-4">
            <img src={post.image}></img>
            <div className="flex flex-col">
              <h1 className="font-semibold">{post.title}</h1>
              <p className="font-light">{post.date}</p>
            </div>
          </div>
          ))}
          
          
        </div>
      </div>
      </div>
      
      </div>
    </>
  );
}
