import { Phone, FileText, Stack, RocketLaunch, Lifebuoy } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

// One icon per step, same order as portfolio.json
const ICONS = [Phone, FileText, Stack, RocketLaunch, Lifebuoy]

// Bottom edge of the slip, cut like a receipt
function zigzag(teeth = 28, depth = 10) {
  const points = ['0 0', '100% 0']
  for (let i = teeth; i >= 0; i--) {
    points.push(`${(i / teeth) * 100}% ${i % 2 === 0 ? '100%' : `calc(100% - ${depth}px)`}`)
  }
  return `polygon(${points.join(', ')})`
}

export default function Process() {
  const { process } = portfolioData
  const last = process.length - 1

  return (
    <section id="process" data-chapter="denim" className="ch-denim bg-ground text-ink py-24 md:py-28">
      <div className="frame grid md:grid-cols-12 gap-x-6 gap-y-12 items-start">
        <h2 data-reveal className="t-head md:col-span-5">How we work together</h2>

        <ol
          data-reveal
          style={{ '--d': '100ms', clipPath: zigzag() } as React.CSSProperties}
          className="ch-paper bg-ground text-ink md:col-start-7 md:col-span-6 lg:col-span-5 max-w-[520px] w-full px-6 sm:px-8 pt-4 pb-14"
        >
          {process.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            const icon = <Icon aria-hidden weight="duotone" size={24} className="shrink-0" />
            return (
              <li key={step.title} className="mt-7">
                {i === last ? (
                  <p className="-mx-6 sm:-mx-8 px-6 sm:px-8 min-h-11 flex items-center gap-2.5 bg-eclipse text-paper font-semibold">
                    {icon}
                    {step.title}
                  </p>
                ) : (
                  <p className="flex items-center gap-2.5 font-semibold">
                    {icon}
                    {step.title}
                  </p>
                )}
                <p className="mt-1 pl-8 text-soft">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
