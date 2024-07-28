// src/components/Login.js

import React from 'react';
import LoginSideImage from './LoginSideImage';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import SocialLoginButton from './SocialLoginButton';

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <LoginSideImage />
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <LoginHeader />
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In to Your Account</h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your email and password to sign in
          </p>
          <LoginForm />
          <div className="text-center my-4 text-gray-500">OR CONTINUE WITH</div>
          <SocialLoginButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
