import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <span
        className={`text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium ${
          pathname === href ? 'bg-[#164f03]' : ''
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavItem;
