'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="w-full bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <div className="flex flex-col text-white">
          <span className="text-lg font-bold tracking-wide">
            Parveen Kumar
          </span>
          <span className="text-sm text-gray-400">
            Full-Stack Engineer | AI Integration
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {navLinks.map((link) => {

            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path))

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">

            {navLinks.map((link) => {

              const isActive =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path))

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar