import { Phone, FileText, Stack, RocketLaunch, Lifebuoy } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

// One icon per step, same order as portfolio.json
const ICONS = [Phone, FileText, Stack, RocketLaunch, Lifebuoy]

export default function Process() {
  const { process } = portfolioData
  const last = process.length - 1

  return (
    <section id="process" data-chapter="denim" className="ch-denim bg-ground text-ink py-24 md:py-28">
      <div className="frame">
        <h2 data-reveal className="t-head">How we work together</h2>

        <ol data-reveal style={{ '--d': '100ms' } as React.CSSProperties} className="mt-12 md:mt-16 grid gap-2 lg:grid-cols-5">
          {process.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            // The last step (support after launch) is what sets this apart, so it stands out
            const key = i === last
            return (
              <li
                key={step.title}
                className={`${key ? 'bg-eclipse text-paper' : 'bg-tone'} grid grid-cols-[auto_1fr] lg:grid-cols-1 content-start gap-x-3 gap-y-1 p-4 lg:px-4 lg:py-6`}
              >
                <Icon aria-hidden weight="duotone" size={24} className={`row-span-2 lg:row-span-1 ${key ? 'text-honey' : ''}`} />
                <p className="font-semibold lg:mt-3">{step.title}</p>
                <p className={`t-small ${key ? 'text-[#B4C3D8]' : 'text-soft'}`}>{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
