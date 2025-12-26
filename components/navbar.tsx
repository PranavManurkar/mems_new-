"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "About Us", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Academics", href: "/academics" },
    { label: "Research", href: "/research" },
    { label: "Outreach Activities", href: "/outreach" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-primary/10">
      <div className="bg-gradient-to-r from-primary to-blue-900 text-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* IIT Logo */}
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                src="/logo.png"
                alt="IIT Indore Logo"
                width={64}
                height={64}
                className="w-16 h-16"
                />
            </div>

            {/* Bilingual Header */}
            <div className="flex flex-col leading-tight">
              <div className="text-xl md:text-base font-bold">भारतीय प्रौद्योगिकी संस्थान इंदौर</div>
              <div className="text-xl md:text-sm text-blue-50">Indian Institute of Technology Indore</div>
            </div>
          </div>

          {/* Department Name */}
          <div className="hidden md:flex flex-col text-right text-sm">
            <div className="font-bold text-accent text-xl">धातु अभियांत्रिकी और सामग्री विज्ञान</div>
            <div className="text-l text-blue-50">Metalllurgical Engineering & Materials Science</div>
          </div>

          {/* Quick Links */}
        </div>
      </div>

      <div className="bg-white px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300 relative group py-4"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 transition-transform duration-300" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 animate-in fade-in-up">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-blue-50 hover:text-primary rounded-lg transition-colors duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
