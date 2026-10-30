'use client'

import { useState } from 'react'
import { MapTrifold, Code, GitFork, Heartbeat } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

// Colour each band takes when its switch is on
const BAND_CHAPTERS = ['ch-honey', 'ch-paper', 'ch-denim', 'ch-deep']
// One icon per service, same order as portfolio.json
const ICONS = [MapTrifold, Code, GitFork, Heartbeat]

export default function Services() {
  const { services } = portfolioData
  const [on, setOn] = useState<boolean[]>(services.map((_, i) => i < 2))

  const toggle = (i: number) => setOn((prev) => prev.map((v, j) => (j === i ? !v : v)))

  return (
    <section id="services" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink pt-24 md:pt-28">
      <div className="frame">
        <h2 data-reveal className="t-head max-w-[16ch]">What I do for your business</h2>
      </div>

      <ul className="mt-16 md:mt-20">
        {services.map((service, i) => {
          const isOn = on[i]
          const id = `service-${i}`
          const Icon = ICONS[i % ICONS.length]
          return (
            <li
              key={service.title}
              className={`${isOn ? `${BAND_CHAPTERS[i % BAND_CHAPTERS.length]} bg-ground` : ''} text-ink transition-colors duration-300`}
            >
              <div
                data-reveal
                style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
                className="frame grid grid-cols-[1fr_auto] items-center gap-x-6 min-h-[132px] md:min-h-[20vh] py-8"
              >
                <h3
                  id={`${id}-title`}
                  className={`flex items-center gap-[0.35em] text-[6.4vw] md:t-head transition-colors duration-300 ${isOn ? 'text-ink' : 'text-soft'}`}
                >
                  <Icon aria-hidden weight="duotone" className="shrink-0 w-[0.85em] h-[0.85em]" />
                  {service.title}
                </h3>

                <button
                  type="button"
                  role="switch"
                  data-ui
                  aria-checked={isOn}
                  aria-labelledby={`${id}-title`}
                  aria-controls={`${id}-detail`}
                  onClick={() => toggle(i)}
                  className="grid place-items-center min-w-[44px] min-h-[44px] text-[clamp(1.75rem,1.3rem+1.6vw,3rem)]"
                >
                  <span
                    className={`relative block w-[2em] h-[1.1em] rounded-full transition-colors duration-300 ${
                      isOn ? 'bg-ink' : 'bg-transparent ring-2 ring-inset ring-current text-soft'
                    }`}
                  >
                    <span
                      className={`absolute top-[0.15em] left-[0.15em] block w-[0.8em] h-[0.8em] rounded-full transition-transform duration-300 ease-out ${
                        isOn ? 'translate-x-[0.9em] bg-ground' : 'bg-soft'
                      }`}
                    />
                  </span>
                </button>

                <p
                  id={`${id}-detail`}
                  hidden={!isOn}
                  className="col-span-2 mt-4 max-w-[60ch] t-body"
                >
                  {service.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
