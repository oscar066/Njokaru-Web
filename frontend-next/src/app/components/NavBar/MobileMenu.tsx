
import React from 'react';
import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, isLoggedIn, handleLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#1c6204]">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        {isLoggedIn ? (
          <>
            <NavItem href="/profile">Profile</NavItem>
            <button
              onClick={handleLogout}
              className="block w-full text-left text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/signup">Sign Up</NavItem>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
