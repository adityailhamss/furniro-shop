import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import IconSection from './IconSection';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const MobileMenu = ({ setIsLoginModalOpen }) => {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-[#B88E2F]'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200'
            }
          >
            {item.name}
          </NavLink>
        ))}
        <div className="border-t border-gray-200 mt-2 pt-2">
          <IconSection isMobile={true} setIsLoginModalOpen={setIsLoginModalOpen} />
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default MobileMenu;
