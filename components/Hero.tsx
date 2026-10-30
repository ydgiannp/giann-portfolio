import portfolioData from '@/data/portfolio.json'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink">
      <div className="frame lg:min-h-[100dvh] flex flex-col lg:justify-center gap-10 lg:gap-12 pt-[calc(var(--header)+14vh)] lg:pt-[var(--header)] pb-24 lg:pb-12">
        <h1 className="t-display">
          <span data-rise className="block text-soft">You run the business.</span>
          <span data-rise style={{ '--d': '90ms' } as React.CSSProperties} className="block">
            I&apos;ll handle the tech.
          </span>
        </h1>

        <div data-rise style={{ '--d': '180ms' } as React.CSSProperties}>
          <p className="t-lead max-w-[34ch]">
            I turn the way your business runs into software: booking systems, dashboards, online
            payments. Then I keep it running.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={personal.booking || personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book a free 30-min call
            </a>
            {/* ponytail: second path only once a booking page exists; until then the button already opens WhatsApp */}
            {personal.booking && (
              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="link t-small">
                or message me on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
