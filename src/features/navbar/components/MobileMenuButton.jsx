import React from 'react';
import { DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileMenuButton = ({ open }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
      <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#B88E2F] hover:text-white focus:outline-none">
        <span className="sr-only">Open main menu</span>
        {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
      </DisclosureButton>
    </div>
  );
};

export default MobileMenuButton;
