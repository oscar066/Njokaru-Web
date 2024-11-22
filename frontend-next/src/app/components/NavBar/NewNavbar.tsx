"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavMenu from "./NavMenu";
import { useAuth } from "@/app/contexts/AuthContext";
import Cart from "../Cart/cart";

const NavBar: React.FC = () => {
  const {
    state: { isAuthenticated, user },
    dispatch,
  } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    dispatch({ type: "LOGOUT" });
    router.push("/");
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-10 bg-green-800 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex-shrink-0 text-white font-bold text-xl font-serif">
                NJOKARU
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavMenu
              isLoggedIn={isAuthenticated}
              isAdmin={user?.isAdmin}
              handleLogout={handleLogout}
            />
            <div className="ml-4 flex items-center space-x-4">
              <Cart />
              {isAuthenticated && (
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-green-200">
                  <img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.email}`}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <div className="mr-2 flex items-center space-x-2">
              <Cart />
              {isAuthenticated && (
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-green-200">
                  <img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.email}`}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-green-800"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <NavMenu
                      isLoggedIn={isAuthenticated}
                      isAdmin={user?.isAdmin}
                      handleLogout={handleLogout}
                      isMobile
                      onItemClick={handleMobileMenuClose}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
