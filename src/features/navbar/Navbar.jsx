import React from 'react';
import { Disclosure } from '@headlessui/react';
import CartModal from './components/modal/CartModal';
import LoginModal from './components/modal/LoginModal';
import MobileMenuButton from './components/MobileMenuButton';
import MobileMenu from './components/MobileMenu';
import LogoSection from './components/LogoSection';
import NavigationMenu from './components/NavigationMenu';
import IconSection from './components/IconSection';
import useNavbar from './hooks/useNavbar';

const Navbar = ({ cartItems, setCartItems }) => {
  const {
    scrollPosition,
    isCartModalOpen,
    isLoginModalOpen,
    setIsCartModalOpen,
    setIsLoginModalOpen
  } = useNavbar();

  return (
    <>
      <Disclosure as="nav" className={`sticky top-0 w-full p-2 z-50 ${scrollPosition > 0 ? 'bg-white bg-opacity-75 backdrop-blur-md' : 'bg-white'}`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <MobileMenuButton open={open} />
                <LogoSection />
                <NavigationMenu />
                <IconSection
                  cartItems={cartItems}
                  setIsCartModalOpen={setIsCartModalOpen}
                  setIsLoginModalOpen={setIsLoginModalOpen}
                />
              </div>
            </div>
            <MobileMenu />
          </>
        )}
      </Disclosure>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};

export default Navbar;