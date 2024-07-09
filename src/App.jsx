import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import ProductDetails from './Pages/Home/ProductDetails';
import CartDetails from './Pages/Cart/CartDetail';
import Checkout from './Pages/Cart/Checkout';
import Compare from './Pages/Compare/Compare';
import Preloader from "./Pages/Pre";
import ScrollToTop from "./Pages/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [load, upadateLoad] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Preloader load={load} />
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <div className="scroll-smooth">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/> }/>
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/productdetails" element={<ProductDetails addToCart={addToCart}/>} />
        <Route path="/cartdetails" element={<CartDetails cartItems={cartItems}/>} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
        <Route path="/compareproduct" element={<Compare/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
