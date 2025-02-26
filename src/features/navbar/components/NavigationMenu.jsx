import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const NavigationMenu = () => {
  return (
    <div className="hidden lg:flex lg:flex-1">
      <div className="flex justify-center items-center space-x-12">
        {navigation.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.href} 
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold rounded-md ${
                isActive ? 'text-[#B88E2F]' : 'hover:text-[#B88E2F]'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
