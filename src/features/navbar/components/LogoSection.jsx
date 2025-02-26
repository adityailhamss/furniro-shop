import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';

const LogoSection = () => {
  return (
    <div className="flex-shrink-0 flex items-center justify-center lg:justify-start lg:w-1/4">
      <NavLink to="/">
        <img src={Logo} alt="Your Company" className="h-8 w-auto" />
      </NavLink>
    </div>
  );
};

export default LogoSection;
