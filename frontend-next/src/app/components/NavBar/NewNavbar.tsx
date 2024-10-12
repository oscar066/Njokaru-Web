'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItemProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  const pathname = usePathname()

  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`text-white hover:text-green-500 px-3 py-2 rounded-md text-opacity-85 font-medium font-serif ${
          pathname === href ? 'bg-[#164f03]' : ''
        }`}
      >
        {children}
      </span>
    </Link>
  )
}

interface NavMenuProps {
  isLoggedIn: boolean
  handleLogout: () => void
  isMobile?: boolean
  onItemClick?: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isLoggedIn, handleLogout, isMobile, onItemClick }) => {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacts', label: 'Contact' },
  ]

  const authItems = isLoggedIn
    ? [
        { href: '/profile', label: 'Profile' },
        { href: '#', label: 'Logout', onClick: handleLogout },
      ]
    : [
        { href: '/auth/login', label: 'Login' },
        { href: '/auth/signup', label: 'Sign Up' },
      ]

  const allItems = [...menuItems, ...authItems]

  return (
    <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex items-baseline space-x-4'}`}>
      {allItems.map((item) => (
        <NavItem key={item.href} href={item.href} onClick={() => {
          if (item.onClick) item.onClick()
          if (onItemClick) onItemClick()
        }}>
          {item.label}
        </NavItem>
      ))}
    </div>
  )
}

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = useCallback((): void => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/')
  }, [router])

  return (
    <nav className="fixed w-full z-10 bg-[#1c6204] shadow-2xl transition-all duration-300">
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1c6204]">
                <NavMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} isMobile onItemClick={() => {}} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar