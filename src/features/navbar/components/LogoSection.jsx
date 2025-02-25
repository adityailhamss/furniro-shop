import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png';

const LogoSection = () => {
  return (
    <div className="flex-shrink-0 items-center absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
      <NavLink to="/">
        <img src={Logo} alt="Your Company" className="h-8 w-auto" />
      </NavLink>
    </div>
  );
};

export default LogoSection;
