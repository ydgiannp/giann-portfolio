'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const navLinks = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={href}
                href={href}
                className={`font-outfit text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? 'text-snow'
                    : 'text-snow/50 hover:text-snow'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="block h-px bg-accent mt-0.5 rounded-full" />
                )}
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-canvas/95 backdrop-blur-md border-t border-white/5 px-4 pb-4 overflow-hidden"
            initial={shouldReduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-outfit text-sm font-medium transition-colors duration-200 border-b border-white/5 last:border-0 ${
                  activeSection === id ? 'text-accent' : 'text-snow/50 hover:text-snow'
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
