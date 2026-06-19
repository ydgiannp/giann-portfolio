'use client'

import { motion, useReducedMotion } from 'motion/react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const { personal } = portfolioData
  const shouldReduce = useReducedMotion()
  const spring = { type: 'spring', stiffness: 400, damping: 28 } as const

  return (
    <section id="contact" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-snow tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-snow/50 mb-10 leading-relaxed">
            Open to new projects and opportunities. Send me an email and I&apos;ll respond within a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <motion.a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 font-outfit font-semibold text-sm bg-accent text-white rounded-lg"
              whileHover={shouldReduce ? {} : { scale: 1.03, backgroundColor: '#ea6e0e' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={spring}
            >
              Send an email
            </motion.a>
            <div className="flex items-center gap-4 sm:border-l sm:border-white/8 sm:pl-4">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-snow transition-colors duration-200 active:scale-90"
              >
                <GithubLogo size={18} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-snow transition-colors duration-200 active:scale-90"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
