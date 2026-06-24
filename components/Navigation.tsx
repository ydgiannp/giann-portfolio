'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="font-mono text-sm font-medium text-snow hover:text-accent transition-colors duration-200"
          >
            YG
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-outfit text-sm font-medium text-snow/50 hover:text-snow transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-snow/50 hover:text-snow transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-md border-t border-white/5 px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-outfit text-sm font-medium text-snow/50 hover:text-snow transition-colors duration-200 border-b border-white/5 last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
