'use client';

import React from 'react';
import LoginSideImage from '../../components/Login/loginSideImage';
import LoginHeader from '../../components/Login/loginHeader';
import LoginForm from '../../components/Login/loginForm';
import SocialLoginButton from '../../components/Login/socialLoginButton';
import LoginPage from '@/app/components/Login/login';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <LoginPage />    
    </div>
  );
};

export default Login;
