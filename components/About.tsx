'use client'

import { EnvelopeSimple, MapPin } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: large typographic display */}
          <div className="relative select-none" aria-hidden="true">
            <p className="font-outfit font-bold text-[clamp(6rem,14vw,11rem)] leading-none tracking-tight text-snow/5">
              YG
            </p>
            <div className="absolute inset-0 flex items-center">
              <div className="space-y-1 pl-2">
                <p className="font-mono text-xs text-muted uppercase tracking-widest">
                  Based in Jakarta
                </p>
                <p className="font-mono text-xs text-muted uppercase tracking-widest">
                  Available remotely
                </p>
              </div>
            </div>
          </div>

          {/* Right: bio and contact info */}
          <div className="md:pt-4">
            <h2 className="text-4xl font-bold text-snow tracking-tight mb-6">
              About me
            </h2>
            <p className="text-snow/70 leading-relaxed mb-8 max-w-md">
              {personal.bio}
            </p>
            <div className="space-y-3 pt-8 border-t border-white/5">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-snow transition-colors duration-200 group"
              >
                <EnvelopeSimple
                  size={14}
                  className="text-accent shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                {personal.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={14} className="text-accent shrink-0" />
                {personal.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
