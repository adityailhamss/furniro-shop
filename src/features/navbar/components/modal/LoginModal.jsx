import React, { useState } from 'react';
import Modal from '../../../../components/common/Modal';
import ForgotPasswordModal from './ForgotPassword';
import RegisterModal from './RegisterModal';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <>
      <Modal isOpen={isOpen && !showForgotPassword && !showRegister} onClose={onClose}>
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          
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
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B88E2F]"
                required
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#B88E2F]" />
                <span className="text-sm">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={() => setShowForgotPassword(true)} 
                className="text-sm text-[#B88E2F] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-[#a17a25] transition-colors duration-300 mt-4"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setShowRegister(true)} 
                className="text-[#B88E2F] hover:underline"
              >
                Register
              </button>
            </p>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
      <ForgotPasswordModal 
        isOpen={isOpen && showForgotPassword} 
        onClose={() => setShowForgotPassword(false)} 
      />
      <RegisterModal 
        isOpen={isOpen && showRegister} 
        onClose={() => setShowRegister(false)} 
      />
    </>
  );
};

export default LoginModal;