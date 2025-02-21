import React, { useState } from 'react';
import Modal from './Modal';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt with:', formData);
    // Add registration logic here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-[#a17a25] transition-colors duration-300 mt-4"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onClose}
              className="text-[#B88E2F] hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;