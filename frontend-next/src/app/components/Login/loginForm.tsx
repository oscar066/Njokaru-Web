'use client';

import React, { useState, FormEvent } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError('Email entered is not valid');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/accounts/auth/login/', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.key); // Save the token
      router.push('/'); // Redirect to the home page
    } catch (error) {
      console.error('There was an error!', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        {emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
      </div>
      <div className="mb-4 relative">
        <div className="flex items-center">
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible((prev) => !prev)}
            className="absolute right-2 text-gray-600"
          >
            {passwordVisible ? (
              <BsEyeFill size={20} />
            ) : (
              <BsEyeSlashFill size={20} />
            )}
          </button>
        </div>
        {passwordError && (
          <span className="text-red-500 text-sm">{passwordError}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-customGreen text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300"
      >
        Sign In with Email
      </button>
    </form>
  );
};

export default LoginForm;
