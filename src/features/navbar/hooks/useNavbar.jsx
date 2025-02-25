import { useState, useEffect } from 'react';

const useNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollPosition,
    isCartModalOpen,
    isLoginModalOpen,
    setIsCartModalOpen,
    setIsLoginModalOpen,
  };
};

export default useNavbar; //
