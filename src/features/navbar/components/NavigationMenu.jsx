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
    <div className="hidden lg:block lg:ml-auto">
      <div className="flex space-x-8">
        {navigation.map((item) => (
          <NavLink key={item.name} to={item.href} className="px-3 py-2 text-sm font-semibold rounded-md hover:text-[#B88E2F]">
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
