'use client'

import { motion, useReducedMotion } from 'motion/react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function Hero() {
  const { personal } = portfolioData
  const shouldReduce = useReducedMotion()

  const spring = { type: 'spring', stiffness: 400, damping: 28 } as const

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduce ? 0 : 0.09 } },
  }

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number]

  const fadeUp = {
    hidden: shouldReduce ? {} : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  }

  return (
    <section id="home" className="min-h-[100dvh] flex items-center bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <motion.div
          className="max-w-5xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-8"
          >
            {personal.title} &middot; {personal.location}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-8xl md:text-9xl font-bold text-snow leading-[0.88] tracking-tight mb-10"
          >
            Yulius<br />Giann
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl font-medium text-snow/80 mb-4 max-w-2xl leading-snug"
          >
            You run the business.{' '}
            <span className="text-accent">I&apos;ll handle the tech.</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base text-snow/50 max-w-lg mb-12 leading-relaxed"
          >
            I turn the way your business runs into software: booking systems, dashboards, online payments. Then I keep it running. I also work as a Software Engineer Lead at Kompas.id, where my team runs a payment system that handles 12,500+ transactions a month.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 font-outfit font-semibold text-sm bg-accent text-white rounded-lg"
              whileHover={shouldReduce ? {} : { scale: 1.03, backgroundColor: '#c9570e' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={spring}
            >
              Book a free 30-min call
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 font-outfit font-semibold text-sm text-snow border border-white/10 rounded-lg hover:border-accent/50 hover:text-accent transition-colors duration-200"
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={spring}
            >
              See client work
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-5 mt-12">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-snow/50 hover:text-snow transition-colors duration-200"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-snow/50 hover:text-snow transition-colors duration-200"
            >
              <LinkedinLogo size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
