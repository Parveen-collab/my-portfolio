'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname()

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

        {/* Left Section */}
        <div className="flex flex-col text-white">
          <span className="text-lg font-bold tracking-wide">
            Parveen Kumar
          </span>
          <span className="text-sm text-gray-400">
            Full-Stack Engineer | AI Integration
          </span>
        </div>

        {/* Right Section */}
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

      </div>
    </nav>
  )
}

export default Navbar