import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";
import Preloader from "../components/common/Pre";
import ScrollToTop from "../components/common/ScrollToTop";
import AppRoutes from "./AppRoutes";
import { CartProvider } from "../context/cart/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  const handleAddToCart = (product) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartProvider>
      <Router>
        <Preloader load={load} />
        <Navbar cartItems={cartItems} setCartItems={setCartItems} />
        <div className="scroll-smooth">
          <ScrollToTop />
          <AppRoutes addToCart={handleAddToCart} cartItems={cartItems} />
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
