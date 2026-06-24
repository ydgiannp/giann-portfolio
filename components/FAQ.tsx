'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Plus, Minus } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

type FaqItem = { question: string; answer: string }

export default function FAQ() {
  const { faq } = portfolioData as unknown as { faq: FaqItem[] }
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const shouldReduce = useReducedMotion()

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number]

  return (
    <section id="faq" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          Common questions
        </h2>
        <div className="max-w-3xl divide-y divide-white/5">
          {faq.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-snow group-hover:text-accent transition-colors duration-200">
                  {item.question}
                </span>
                <span className="shrink-0 mt-0.5 text-snow/50 group-hover:text-accent transition-colors duration-200">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={shouldReduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: easing }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-snow/50 leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
