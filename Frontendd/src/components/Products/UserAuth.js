import React, { useState } from 'react';

const UserAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => setShowLoginForm(true)}
        >
          Login / Sign Up
        </button>
      )}
      {showLoginForm && !isLoggedIn && (
        <div className="border mt-2 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              className="mb-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="mb-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              placeholder="Password"
              required
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
