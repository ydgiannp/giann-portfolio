'use client'

import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

const navLinks = [
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#projects', label: 'Work', id: 'projects' },
  { href: '#experience', label: 'Track record', id: 'experience' },
  { href: '#process', label: 'Process', id: 'process' },
  { href: '#faq', label: 'FAQ', id: 'faq' },
]

export default function Navigation() {
  const { personal } = portfolioData
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [chapter, setChapter] = useState('eclipse')

  // The bar takes the colours of the chapter passing under it
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setChapter((entry.target as HTMLElement).dataset.chapter || 'eclipse')
        }
      },
      { rootMargin: '0px 0px -94% 0px' }
    )
    document.querySelectorAll('[data-chapter]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`ch-${chapter} fixed top-0 inset-x-0 z-40 bg-ground text-ink transition-colors duration-300`}
    >
      <nav className="frame flex items-center justify-between h-[var(--header)]" aria-label="Main">
        <a href="#home" className="font-display font-bold t-body tracking-tight">
          {personal.name}
          <span className="font-text font-normal text-soft t-small ml-2 hidden sm:inline">{personal.title}</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={href}
              href={href}
              aria-current={activeSection === id ? 'true' : undefined}
              className={`t-small transition-colors duration-200 ${
                activeSection === id ? 'text-ink font-semibold' : 'text-soft hover:text-ink'
              }`}
            >
              {label}
            </a>
          ))}
          <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">
            Book a free 30-min call
          </a>
        </div>

        <button
          className="lg:hidden -mr-2 p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-ground frame pb-6">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 t-lead font-display font-bold tracking-tight ${
                activeSection === id ? 'text-ink' : 'text-soft'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn mt-4 w-full"
          >
            Book a free 30-min call
          </a>
        </div>
      )}
    </header>
  )
}
