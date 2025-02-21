import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo/logo.png';
import { BsPersonExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart, MdOutlineInsertChart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import CartModal from './CartModal';
import LoginModal from './LoginModal';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ cartItems, setCartItems }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActiveLink = (href) => {
    setActiveLink(href);
  };

  return (
    <>
      <Disclosure as="nav" className={`sticky top-0 w-full p-2 z-50 ${scrollPosition > 0 ? 'bg-white bg-opacity-75 backdrop-blur-md' : 'bg-white'}`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button - adjusted positioning */}
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#B88E2F] hover:text-white focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Logo and Navigation - improved responsive layout */}
                <div className="flex flex-1 items-center justify-between">
                  {/* Left space to balance the layout */}
                  <div className="w-20 lg:w-auto"></div>
                  
                  <div className="flex-shrink-0 items-center absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                    <NavLink to="/" onClick={() => handleSetActiveLink('/')}>
                      <img src={Logo} alt="Your Company" className="h-8 w-auto" />
                    </NavLink>
                  </div>
                  {/* Desktop Navigation */}
                  <div className="hidden lg:block lg:ml-auto">
                    <div className="flex space-x-8">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              'px-3 py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-200',
                              isActive || item.href === activeLink ? 'text-[#B88E2F]' : 'text-black',
                              'hover:text-[#B88E2F]'
                            )
                          }
                          onClick={() => handleSetActiveLink(item.href)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  {/* Icons Section - fixed positioning */}
                  <div className="flex items-center space-x-4 w-20 justify-end lg:w-auto">
                    <div className="hidden sm:flex space-x-4">
                      <button onClick={() => setIsLoginModalOpen(true)} className="p-2 hover:text-[#B88E2F] transition-colors duration-200">
                        <BsPersonExclamation size={20} />
                      </button>
                      <button className="p-2 hover:text-[#B88E2F] transition-colors duration-200">
                        <CiSearch size={20} />
                      </button>
                      <button className="p-2 hover:text-[#B88E2F] transition-colors duration-200">
                        <CiHeart size={20} />
                      </button>
                    </div>
                    <div className="relative">
                      <button onClick={() => setIsCartModalOpen(true)} className="p-2 hover:text-[#B88E2F] transition-colors duration-200">
                        <MdOutlineShoppingCart size={20} />
                      </button>
                      <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                        {cartItems.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel - improved styling and transitions */}
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 px-4 pb-3 pt-2 bg-white shadow-lg">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        'block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                        isActive || item.href === activeLink ? 'text-[#B88E2F] bg-gray-50' : 'text-black',
                        'hover:text-[#B88E2F] hover:bg-gray-50'
                      )
                    }
                    onClick={() => handleSetActiveLink(item.href)}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                {/* Mobile Icons */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 mt-4">
                  <button onClick={() => setIsLoginModalOpen(true)} className="p-2 hover:text-[#B88E2F]">
                    <BsPersonExclamation size={20} />
                  </button>
                  <button className="p-2 hover:text-[#B88E2F]">
                    <CiSearch size={20} />
                  </button>
                  <button className="p-2 hover:text-[#B88E2F]">
                    <CiHeart size={20} />
                  </button>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Modals remain the same */}
      {/* Remove this modal since we're using LoginModal */}
      {/* <Modal isOpen={isPersonModalOpen} onClose={() => setIsPersonModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">User Information</h2>
        <p>Content for user information modal goes here.</p>
      </Modal> */}

      {/* Replace the existing person modal with LoginModal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      
      {/* Keep the CartModal */}
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};

export default Navbar;
