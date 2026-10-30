import { Phone, FileText, Stack, RocketLaunch, Lifebuoy } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

// One icon per step, same order as portfolio.json
const ICONS = [Phone, FileText, Stack, RocketLaunch, Lifebuoy]

export default function Process() {
  const { process } = portfolioData
  const last = process.length - 1

  return (
    <section id="process" data-chapter="denim" className="ch-denim bg-ground text-ink py-24 md:py-28 overflow-hidden">
      <div className="frame">
        <h2 data-reveal className="t-head">How we work together</h2>

        {/* One route from the first call to support; the line keeps going after launch */}
        <ol className="mt-12 md:mt-20 grid lg:grid-cols-5">
          {process.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            const key = i === last
            return (
              <li
                key={step.title}
                data-reveal
                style={{ '--d': `${i * 150}ms` } as React.CSSProperties}
                className={`relative grid grid-cols-[24px_1fr] gap-x-5 lg:block lg:pr-6 ${key ? 'pb-16 lg:pb-0' : 'pb-10 lg:pb-0'}`}
              >
                <span
                  aria-hidden
                  className={`route-line absolute left-[11px] top-7 bottom-0 lg:left-7 lg:top-[11px] lg:bottom-auto ${
                    key
                      ? 'w-0 border-l-2 border-dashed border-honey lg:border-l-0 lg:border-t-2 lg:h-0 lg:-right-[var(--frame)]'
                      : 'w-0.5 bg-[rgba(243,245,248,0.45)] lg:right-0 lg:w-auto lg:h-0.5'
                  }`}
                />
                <span
                  aria-hidden
                  className={`route-dot relative block w-6 h-6 rounded-full border-2 ${key ? 'border-honey bg-honey' : 'border-paper bg-paper'}`}
                />
                <div className="lg:mt-6">
                  <h3 className={`flex items-center gap-2.5 t-lead ${key ? 'text-honey' : ''}`}>
                    <Icon aria-hidden weight="duotone" size={24} className="shrink-0" />
                    {step.title}
                  </h3>
                  <p className="mt-2 t-small text-soft max-w-[34ch]">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
