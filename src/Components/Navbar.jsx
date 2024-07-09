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
  
  useEffect(() => {
    console.log('Cart Items in navbar:', cartItems);
  }, [cartItems]);

  return (
    <>
      <Disclosure as="nav" className={`sticky top-0 w-full p-2 z-50 ${scrollPosition > 0 ? 'bg-white bg-opacity-75 backdrop-blur-md' : 'bg-white'}`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#28CB8B] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <NavLink to="/" onClick={() => handleSetActiveLink('/')}>
                      <img src={Logo} alt="Your Company" />
                    </NavLink>
                  </div>
                  <div className="hidden sm:block pt-2">
                    <div className="flex justify-center space-x-4 gap-6">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              'rounded-md px-3 py-2 text-base font-semibold',
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
                  <div className="flex flex-row self-center gap-4">
                    <button onClick={() => setIsPersonModalOpen(true)}><BsPersonExclamation size={25} /></button>
                    <button><CiSearch size={25} /></button>
                    <button><CiHeart size={25} /></button>
                    <button onClick={() => setIsCartModalOpen(true)}><MdOutlineShoppingCart size={25} /></button>
                    {/* Display cart items count */}
                    <div className="relative">
                    <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        'block rounded-md px-3 py-2 text-base font-medium',
                        isActive || item.href === activeLink ? 'text-[#B88E2F]' : 'text-black',
                        'hover:text-[#B88E2F]'
                      )
                    }
                    onClick={() => handleSetActiveLink(item.href)}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <div className="flex flex-row gap-4 mt-4">
                  <button onClick={() => setIsPersonModalOpen(true)}><BsPersonExclamation size={25} /></button>
                  <button><CiSearch size={25} /></button>
                  <button><CiHeart size={25} /></button>
                  <button onClick={() => setIsCartModalOpen(true)}><MdOutlineShoppingCart size={25} /></button>
                  {/* Display cart items count */}
                  <div className="relative">
                    <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </span>
                  </div>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Person Modal */}
      <Modal isOpen={isPersonModalOpen} onClose={() => setIsPersonModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">User Information</h2>
        <p>Content for user information modal goes here.</p>
      </Modal>

      {/* Cart Modal */}
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default Navbar;
