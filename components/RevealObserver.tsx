'use client'

import { useEffect } from 'react'

// Adds .is-in to every [data-reveal] as it enters the viewport (see globals.css).
// Content is only hidden once this runs (html.js), and whatever is already on screen stays visible.
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in')
    })
    document.documentElement.classList.add('js')

    let reported = false
    const observer = new IntersectionObserver(
      (entries) => {
        reported = true
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    els.forEach((el) => {
      if (!el.classList.contains('is-in')) observer.observe(el)
    })

    // Some renderers (background tabs, embedded previews) never deliver observer callbacks.
    // Show everything then, rather than leaving the page blank.
    const failsafe = setTimeout(() => {
      if (reported) return
      els.forEach((el) => el.classList.add('is-in'))
      observer.disconnect()
    }, 1500)

    return () => {
      clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])

  return null
}
