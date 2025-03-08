import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Sofa from "../../../assets/image/products/productsDetail/sofa1.png";
import Sofa1 from "../../../assets/image/products/productsDetail/sofa2.png";
import Sofa2 from "../../../assets/image/products/productsDetail/sofa3.png";
import Sofa3 from "../../../assets/image/products/productsDetail/sofa4.png";
import Sofa5 from "../../../assets/image/products/productsDetail/sofa6.png";
import Sofa6 from "../../../assets/image/products/productsDetail/sofa7.png";
import { Rating } from "primereact/rating";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProductShop from "../../shop/components/ProductShop";
import { addToCartSuccess } from "../../../alerts";
import { formatPrice } from "../../../utils/formatPrice"; // Fix the import path

export default function ProductDetails({ addToCart }){
  const { state } = useLocation();
  const { product } = state || {};
  const [count, setCount] = useState(1); // Start from 1 instead of 0
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) { // Prevent going below 1
      setCount(count - 1);
    }
  };
  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = (product) => {
    console.log('Adding to cart with quantity:', count); // Debug log
    const cartProduct = {
      ...product,
      id: product.id,
      quantity: count, // Use count directly
      rawPrice: product.price,
      price: product.price, // Keep price as number
      displayPrice: formatPrice(product.price) // Add formatted price for display
    };
    console.log('Cart product:', cartProduct); // Debug log
    addToCart(cartProduct);
    addToCartSuccess();
  };
  return(
    <>
    <div className="bg-[#F9F1E7] flex h-[100px] w-full gap-4 md:gap-8 items-center px-4 md:px-20">
      <div className="flex flex-row items-center gap-2 overflow-x-auto whitespace-nowrap">
        <h1 className="text-center font-light text-sm md:text-lg">Home</h1>
        <IoIosArrowForward />
        <h2 className="text-center font-light text-sm md:text-lg">Shop</h2>
        <IoIosArrowForward />
        <div className="ml-2 md:ml-4 border-l-2 h-[35px] border-gray-400 mr-2 md:mr-4"></div>
        <h1 className="text-center font-normal text-sm md:text-lg">{product.name}</h1>
      </div>
    </div>
    <div className="px-4 md:px-16 py-4 md:py-7">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Thumbnail images */}
        <div className="hidden md:flex flex-col gap-8 p-4">
          {[Sofa, Sofa1, Sofa2, Sofa3].map((img, index) => (
            <div key={index} className="bg-[#F9F1E7] rounded-xl w-auto h-auto">
              <img src={img} className="px-2 py-4" alt={`Product view ${index + 1}`}/>
            </div>
          ))}
        </div>
        {/* Main product image */}
        <div className="bg-[#F9F1E7] rounded-xl w-full md:w-[500px] h-[300px] md:h-[500px] flex justify-center">
          <img src={product.image_url} className="px-2 py-6 object-contain" alt={product.name}/>
        </div>
        {/* Product details */}
        <div className="flex flex-col gap-4 px-4 md:pl-6">
          <h1 className="text-3xl md:text-5xl">{product.name}</h1>
          <p className="text-2xl md:text-3xl text-[#9F9F9F]">Rp. {product.price}</p>
          
          <div className="card flex flex-wrap justify-content-center items-center gap-2">
            <Rating value={product.avg_rating} readOnly cancel={false} className="text-[#FFC700]"/>
            <div className="hidden md:block ml-4 border-l-2 h-[35px] border-gray-400 mr-4"></div>
            <h1 className="text-center text-sm md:text-base">{product.review_count} Customer Review</h1>
          </div>
          <h1 className="w-full md:w-[424px] text-sm md:text-base">{product.moreDescription}</h1>
          {/* Size selector */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1>Size</h1>
            <div className="flex flex-row gap-2 md:gap-4">
              {['L', 'XL', 'XS'].map((size) => (
                <button key={size} className="bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-xl px-3 py-2 hover:text-white text-black">
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Color selector */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1>Color</h1>
            <div className="flex flex-row gap-2 md:gap-4">
              {['#816DFA', '#000000', '#B88E2F'].map((color) => (
                <button key={color} className={`bg-[${color}] rounded-full px-3 md:px-4 py-3 md:py-4`}></button>
              ))}
            </div>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 my-4 md:my-6">
            <div className="bg-white rounded-lg px-2 py-2 border-2 border-black hover:border-[#9F9F9F] flex justify-between items-center w-[120px]">
              <button onClick={decrement} className="bg-white text-black hover:text-white px-2 py-1 rounded hover:bg-[#B88E2F]">-</button>
              <h1 className="text-xl md:text-2xl px-4">{count}</h1>
              <button onClick={increment} className="bg-white text-black hover:text-white px-2 py-1 rounded hover:bg-[#B88E2F]">+</button>
            </div>
            <button 
              onClick={() => handleAddToCart(product)} 
              className="bg-white rounded-lg px-4 py-2 md:py-4 border-2 border-black hover:border-[#9F9F9F] flex justify-between items-center text-base md:text-xl hover:text-[#B88E2F]"
            >
              Add To Cart ({count})
            </button>
          </div>
          {/* Product info */}
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <p className="font-light">SKU : SS001</p>
            <p className="font-light">Category : Sofas</p>
            <p className="font-light">Tags : Sofa, Chair, Home, Shop</p>
            <div className="flex flex-row items-center gap-2">
              <p className="font-light">Share :</p>
              <button><FaFacebook /></button>
              <button><FaLinkedin /></button>
              <button><AiFillTwitterCircle /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Description section */}
    <div className="border-b-2 border-gray-300 my-4 md:my-6"></div>
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center my-4 md:my-8">
        <h1 className="text-xl md:text-2xl hover:font-semibold font-light">Description</h1>
        <h1 className="text-xl md:text-2xl hover:font-semibold font-light">Additional Information</h1>
        <h1 className="text-xl md:text-2xl hover:font-semibold font-light">Reviews {product.review_count}</h1>
      </div>
      <p className="w-full md:w-[1026px] font-light mb-4 md:mb-6 text-sm md:text-base px-4 md:px-0">
        Embodying the raw, wayward spirit of rock 'n' roll...
      </p>
      <p className="w-full md:w-[1026px] font-light mb-4 md:mb-6 text-sm md:text-base px-4 md:px-0">
        Weighing in under 7 pounds...
      </p>
      
      {/* Product images */}
      <div className="flex flex-col md:flex-row gap-4 my-4 md:my-8 px-4 md:px-0">
        <div className="rounded-xl w-full h-full bg-[#F9F1E7]">
          <img src={Sofa5} alt="Product view" className="w-full"/>
        </div>
        <div className="rounded-xl w-full h-auto md:h-[348px] bg-[#F9F1E7]">
          <img src={Sofa6} alt="Product view" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
    {/* Related products section */}
    <div className="border-b-2 border-gray-300 my-4 md:my-6"></div>
    <div className="flex justify-center mt-4 md:mt-8">
      <h1 className="text-3xl md:text-4xl font-bold">Related Product</h1>
    </div>
    <ProductShop/>
    </>
  );
}