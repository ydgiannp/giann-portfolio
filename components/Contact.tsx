'use client'

import { motion, useReducedMotion } from 'motion/react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const { personal } = portfolioData
  const shouldReduce = useReducedMotion()
  const spring = { type: 'spring', stiffness: 400, damping: 28 } as const

  return (
    <section id="contact" className="relative py-24 bg-ink overflow-hidden">
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(224,101,26,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-snow tracking-tight mb-4">
            Tell me what&apos;s slowing your business down
          </h2>
          <p className="text-snow/50 mb-10 leading-relaxed">
            The first call is free and takes 30 minutes. You&apos;ll leave with clear next steps, whether or not we work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <motion.a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-outfit font-semibold text-sm bg-accent text-white rounded-lg"
              whileHover={shouldReduce ? {} : { scale: 1.03, backgroundColor: '#c9570e' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={spring}
            >
              Chat on WhatsApp
            </motion.a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center px-8 py-3.5 font-outfit font-semibold text-sm text-snow border border-white/10 rounded-lg hover:border-accent/50 hover:text-accent transition-colors duration-200"
            >
              Send an email
            </a>
            <div className="flex items-center gap-4 sm:border-l sm:border-white/8 sm:pl-4">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-snow/50 hover:text-snow transition-colors duration-200 active:scale-90"
              >
                <GithubLogo size={18} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-snow/50 hover:text-snow transition-colors duration-200 active:scale-90"
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
