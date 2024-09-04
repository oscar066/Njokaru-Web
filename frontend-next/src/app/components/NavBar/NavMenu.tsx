
import React from 'react';
import NavItem from './NavItem';

interface NavMenuProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isLoggedIn, handleLogout }) => (
  <div className="ml-10 flex items-baseline space-x-4">
    <NavItem href="/">Home</NavItem>
    <NavItem href="/about">About</NavItem>
    <NavItem href="/services">Services</NavItem>
    <NavItem href="/products">Products</NavItem>
    <NavItem href="/blog">Blog</NavItem>
    <NavItem href="/contacts">Contact</NavItem>
    {isLoggedIn ? (
      <>
        <NavItem href="/profile">Profile</NavItem>
        <button
          onClick={handleLogout}
          className="text-white hover:text-green-500 px-3 py-2 rounded-md text-opacity-85 font-medium"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <NavItem href="/auth/login">Login</NavItem>
        <NavItem href="/auth/signup">Sign Up</NavItem>
      </>
    )}
  </div>
);

export default NavMenu;
