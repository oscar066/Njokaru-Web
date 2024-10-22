'use client';

import React from 'react';
import SignupHeader from '../../components/Signup/signupHeader';
import SignupForm from '../../components/Signup/signupForm';
import SignupSideImage from '../../components/Signup/signupSideImage';
import SocialSignupButton from '../../components/Signup/socialSignupButton';
import SignupPage from '@/app/components/Signup/signup';

const Signup: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <SignupPage />
    </div>
  );
};

export default Signup;
