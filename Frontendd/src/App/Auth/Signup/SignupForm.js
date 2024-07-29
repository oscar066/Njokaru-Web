import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
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

    if (!username) {
      setUsernameError('Username is required');
      hasError = true;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/accounts/register/', {
        email,
        username,
        password,
      });
      navigate('/login'); // Redirect to login page or auto-login
    } catch (error) {
      console.error('There was an error!', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-customGreen"
          required
        />
        {emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-customGreen"
          required
        />
        {usernameError && (
          <span className="text-red-500 text-sm">{usernameError}</span>
        )}
      </div>
      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-gray-700">
          Password:
        </label>
        <div className="flex items-center">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-customGreen"
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible((prev) => !prev)}
            className="absolute right-2 text-gray-800"
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
        className="w-full bg-customGreen text-white py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
