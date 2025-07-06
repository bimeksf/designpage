'use client'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" ,delay:0.5}} 
>



<header className="bg-black rounded-3xl p-4 w-[98%] mx-auto fixed top-0 left-0 right-0 z-50 mt-4 ">
        <nav className="flex justify-between items-center relative">
        <Link
          href="/"
          className="bg-[#a3bde4] text-black font-bold px-4 py-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
          Find More
        </Link>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-2 justify-center items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg border-solid border-2 border-white"
                >
                {link.label}
              </Link>
            </li>
          ))}
               <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </ul>

        {/* Mobile menu icon */}
        <button onClick={toggleMenu} className="sm:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <ul className="absolute top-16 right-4 bg-[#1a1a1a] rounded-2xl p-4 space-y-2 sm:hidden shadow-xl z-50 w-48">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black"
                  >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
 
    </header>
        </motion.div>
  )
}

export default Navbar
