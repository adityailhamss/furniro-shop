import React, { useState } from 'react';
import Modal from './Modal';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password attempt for:', email);
    // Add password reset logic here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        <p className="text-gray-600 mb-6">Enter your email address and we'll send you a link to reset your password.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-[#a17a25] transition-colors duration-300 mt-4"
          >
            Send Reset Link
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-[#B88E2F] hover:underline mt-4"
          >
            Back to Login
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;