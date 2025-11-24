'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="GK Pvt Industries Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback to text logo if image fails
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center space-x-2">
                      <div class="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                        GK
                      </div>
                      <span class="text-xl font-bold text-gray-900 hidden sm:block">
                        Pvt Industries
                      </span>
                    </div>
                  `
                }
              }}
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Pvt Industries
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#facilities"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Facilities
            </Link>
            <Link
              href="#gallery"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#locations"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Locations
            </Link>
            <Link
              href="#contact"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="#home"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#facilities"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link
              href="#gallery"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#locations"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="#contact"
              className="block btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
