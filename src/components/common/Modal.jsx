import React, { useEffect, useRef } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  // Close modal if clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start bg-black/25 p-2">
      <div
        ref={modalRef}
        className="relative bg-white p-6 rounded-md shadow-lg w-[417px] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[600px]"
      >
        <button
          className="absolute top-7 right-8 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <IoIosCloseCircle />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
