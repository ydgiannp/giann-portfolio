import { MapTrifold, Code, GitFork, Heartbeat } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

// Colour of each band
const BAND_CHAPTERS = ['ch-honey', 'ch-paper', 'ch-denim', 'ch-deep']
// One icon per service, same order as portfolio.json
const ICONS = [MapTrifold, Code, GitFork, Heartbeat]

export default function Services() {
  const { services } = portfolioData

  return (
    <section id="services" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink pt-24 md:pt-28">
      <div className="frame">
        <h2 data-reveal className="t-head max-w-[16ch]">What I do for your business</h2>
      </div>

      <ul className="mt-16 md:mt-20">
        {services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <li key={service.title} className={`${BAND_CHAPTERS[i % BAND_CHAPTERS.length]} bg-ground text-ink`}>
              <div
                data-reveal
                style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
                className="frame min-h-32 md:min-h-[20vh] py-8"
              >
                <h3 className="flex items-center gap-[0.35em] text-[6.4vw] md:t-head">
                  <Icon aria-hidden weight="duotone" className="shrink-0 w-[0.85em] h-[0.85em]" />
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[60ch] t-body">{service.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
