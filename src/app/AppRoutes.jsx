import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home";
import Shop from "../features/shop/Shop";
import Contact from "../features/contact/Contact";
import About from "../features/about/About";
import ProductDetails from "../features/product/components/ProductDetails";
import CartDetails from "../features/cart/CartDetail";
import Checkout from "../features/checkout/Checkout";

const AppRoutes = ({ addToCart, cartItems }) => {
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/productdetails" element={<ProductDetails addToCart={addToCart} />} />
      <Route path="/cartdetails" element={<CartDetails cartItems={cartItems} />} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
    </Routes>
  );
};

export default AppRoutes;
