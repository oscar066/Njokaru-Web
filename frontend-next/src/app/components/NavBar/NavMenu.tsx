"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();

  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`text-white hover:text-green-300 px-3 py-2 rounded-md text-opacity-85 font-medium font-serif ${
          pathname === href ? "bg-green-700" : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

interface NavMenuProps {
  isLoggedIn: boolean;
  isAdmin?: boolean;
  handleLogout: () => void;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({
  isLoggedIn,
  isAdmin,
  handleLogout,
  isMobile,
  onItemClick,
}) => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contacts", label: "Contact" },
  ];

  const authItems = isLoggedIn
    ? [
        { href: "/profile", label: "Profile" },
        { href: "#", label: "Logout", onClick: handleLogout },
      ]
    : [
        { href: "/auth/login", label: "Login" },
        { href: "/auth/signup", label: "Sign Up" },
      ];

  if (isAdmin) {
    authItems.unshift({ href: "/admin/dashboard", label: "Admin Dashboard" });
  }

  return (
    <div
      className={`${
        isMobile ? "flex flex-col space-y-4" : "flex items-center space-x-4"
      }`}
    >
      {menuItems.map((item) => (
        <NavItem key={item.href} href={item.href} onClick={onItemClick}>
          {item.label}
        </NavItem>
      ))}
      {isMobile ? (
        authItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            onClick={() => {
              if (item.onClick) item.onClick();
              if (onItemClick) onItemClick();
            }}
          >
            {item.label}
          </NavItem>
        ))
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:text-green-800">
              Account <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 text-green-800">
            {authItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href} onClick={item.onClick}>
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default NavMenu;
