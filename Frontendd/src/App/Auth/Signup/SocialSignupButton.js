import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialSignupButton = () => {
  return (
    <button
      className="w-full border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300 mb-2"
    >
      <FaGoogle className="mr-2" /> Google
    </button>
  );
};

export default SocialSignupButton;
