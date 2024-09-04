'use client';

import React from 'react';
import SignupHeader from '../../components/Signup/signupHeader';
import SignupForm from '../../components/Signup/signupForm';
import SignupSideImage from '../../components/Signup/signupSideImage';
import SocialSignupButton from '../../components/Signup/socialSignupButton';

const Signup: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <SignupSideImage />
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <SignupHeader />
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an account</h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your details below to create your account
          </p>
          <SignupForm />
          <div className="text-center my-4 text-gray-500">OR CONTINUE WITH</div>
          <SocialSignupButton />
        </div>
      </div>
    </div>
  );
};

export default Signup;
