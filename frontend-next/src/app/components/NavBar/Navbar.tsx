'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="fixed w-full z-10 bg-[#1c6204] shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex-shrink-0 text-white font-bold text-xl font-serif">NJOKARU</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <NavMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#164f03] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </nav>
  );
};

export default NavBar;
