import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Sofa from "../../assets/image/products/productsDetail/sofa1.png";
import Sofa1 from "../../assets/image/products/productsDetail/sofa2.png";
import Sofa2 from "../../assets/image/products/productsDetail/sofa3.png";
import Sofa3 from "../../assets/image/products/productsDetail/sofa4.png";
import Sofa5 from "../../assets/image/products/productsDetail/sofa6.png";
import Sofa6 from "../../assets/image/products/productsDetail/sofa7.png";
import { Rating } from "primereact/rating";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProductShop from "../Shop/ProductShop";
import { addToCartSuccess } from "../../alerts";


export default function ProductDetails({ addToCart }){
  const { state } = useLocation();
  const { product } = state || {};
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    addToCartSuccess(); // Show the success alert
  };
  return(
    <>
    <div className="bg-[#F9F1E7] flex h-[100px] w-full gap-8 items-center px-20">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-center font-light text-lg">Home</h1>
        <IoIosArrowForward />
        <h2 className="text-center font-light text-lg">Shop</h2>
        <IoIosArrowForward />
        <div class="ml-4 border-l-2 h-[35px] border-gray-400 mr-4"></div>
        <h1 className="text-center font-normal text-lg">{product.name}</h1>
      </div>
    </div>

    <div className="px-16 py-7">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-8 p-4">
          <div className="bg-[#F9F1E7] rounded-xl w-auto h-auto">
            <img src={Sofa} className="px-2 py-4"/>
          </div>
          <div className="bg-[#F9F1E7] rounded-xl w-auto h-auto">
            <img src={Sofa1} className="px-2 py-4"/>
          </div>
          <div className="bg-[#F9F1E7] rounded-xl w-auto h-auto">
            <img src={Sofa2} className="px-2 py-4"/>
          </div>
          <div className="bg-[#F9F1E7] rounded-xl w-auto h-auto">
            <img src={Sofa3} className="px-2 py-4"/>
          </div>
        </div>
        <div className="bg-[#F9F1E7] rounded-xl w-[500px] h-[500px] flex justify-center">
          <img src={product.image} className="px-2 py-6 items-center justify-center"/>
        </div>
        <div className="flex flex-col gap-4 pl-6">
          <h1 className="text-5xl">{product.name}</h1>
          <p className="text-3xl text-[#9F9F9F]">Rp. {product.price}</p>
          <div className="card flex justify-content-center items-center">
            <Rating value={product.review} readOnly cancel={false} className="text-[#FFC700]"/>
            <div class="ml-4 border-l-2 h-[35px] border-gray-400 mr-4"></div>
              <h1 className="text-center">{product.countReview} Customer Review</h1>
          </div>
          <h1 className="w-[424px]">{product.moreDescription}</h1>
          <div className="flex flex-col gap-3">
            <h1>Size</h1>
            <div className="flex flex-row gap-4">
              <button className="bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-xl px-3 py-2 hover:text-white text-black ">L</button>
              <button className="bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-xl px-3 py-2 hover:text-white text-black ">XL</button>
              <button className="bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-xl px-3 py-2 hover:text-white text-black ">XS</button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Color</h1>
            <div className="flex flex-row gap-4">
              <button className="bg-[#816DFA] rounded-full px-4 py-4"></button>
              <button className="bg-black rounded-full px-4 py-4"></button>
              <button className="bg-[#B88E2F] rounded-full px-4 py-4"></button>
            </div>
          </div>
          <div className="flex flex-row gap-6 my-6">
           <div className="bg-white rounded-lg px-2 py-2 border-2 border-black hover:border-[#9F9F9F] flex justify-between items-center">
           <button 
            onClick={decrement} 
            className="bg-white text-black hover:text-white px-2 py-2 rounded hover:bg-[#B88E2F]"
          >
            -
          </button>
          <h1 className="text-2xl px-4" >{count}</h1>
          <button 
            onClick={increment} 
            className="bg-white text-black hover:text-white px-2 py-2 rounded hover:bg-[#B88E2F]"
          >
            +
          </button>
           </div>

          <button onClick={() => handleAddToCart(product)} className="bg-white rounded-lg px-4 py-4 border-2 border-black hover:border-[#9F9F9F] flex justify-between items-center text-xl hover:text-[#B88E2F]">
            Add To Cart
          </button>
          {/* <div className="bg-white rounded-lg px-2 py-2 border-2 border-black hover:border-[#9F9F9F] flex justify-between items-center">
            <h1 className="text-2xl px-4" >+ Compare</h1>
          </div> */}
          </div>

          
          <div className="flex flex-col gap-2">
            <p className="font-light text-lg">SKU : SS001</p>
            <p className="font-light text-lg">Category : Sofas</p>
            <p className="font-light text-lg">Tags : Sofa, Chair, Home, Shop</p>
            <div className="flex flex-row items-center gap-2">
            <p className="font-light text-lg">Share :</p>
            <button><FaFacebook /></button>
            <button><FaLinkedin /></button>
            <button><AiFillTwitterCircle /></button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <div className="border-b-2 border-gray-300 my-6"></div>
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-8 justify-center my-8">
        <h1 className="text-2xl hover:font-semibold font-light">Description</h1>
        <h1 className="text-2xl hover:font-semibold font-light">Additional Information</h1>
        <h1 className="text-2xl hover:font-semibold font-light">Reviews [5]</h1>
      </div>
      <p className="w-[1026px] font-light mb-6">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p className="w-[1026px] font-light mb-6">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      <div className="flex gap-4 my-8">
        <div className="rounded-xl w-full h-full bg-[#F9F1E7]">
          <img src={Sofa5}/>
        </div>
        <div className="rounded-xl w-full h-[348px] bg-[#F9F1E7]">
          <img src={Sofa6}/>
        </div>
      </div>
    </div>
    <div className="border-b-2 border-gray-300 my-6"></div>
    <div className="flex justify-center mt-8">
      <h1 className="text-4xl font-bold">Related Product</h1>
    </div>
    <ProductShop/>
    </>
  )
}