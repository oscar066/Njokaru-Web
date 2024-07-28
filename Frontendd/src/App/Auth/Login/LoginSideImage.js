// src/components/LoginSideImage.js

import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../../../Assets/daniel.jpg';

const LoginSideImage = () => {
  return (
    <div className="w-1/2 bg-black relative">
      <Link to="/" className="absolute inset-0">
        <img
          src={image3}
          alt="Company"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          NJOKARU
        </Link>
      </div>
    </div>
  );
};

export default LoginSideImage;
