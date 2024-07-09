// Modal.js
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start bg-black bg-opacity-50 p-2">
      <div className="relative bg-white p-6 rounded-md shadow-lg w-[417px] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[600px]">
        <button className="absolute top-7 right-8 text-gray-600 hover:text-gray-900" onClick={onClose}>
        <IoIosCloseCircle />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
