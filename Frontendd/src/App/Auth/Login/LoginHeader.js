// src/components/LoginHeader.js

import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
  return (
    <div className="text-right">
      <Link to="/signup" className="text-gray-600 hover:text-gray-900">
        Sign up
      </Link>
    </div>
  );
};

export default LoginHeader;
