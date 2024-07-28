import React from 'react';
import { Link } from 'react-router-dom';

const SignupHeader = () => {
  return (
    <div className="text-right">
      <Link to="/login" className="text-gray-600 hover:text-gray-900">
        Log in
      </Link>
    </div>
  );
};

export default SignupHeader;
