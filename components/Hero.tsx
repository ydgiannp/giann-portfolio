import portfolioData from '@/data/portfolio.json'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink">
      <div className="frame lg:min-h-[100dvh] flex flex-col lg:justify-between gap-12 lg:gap-16 pt-[calc(var(--header)+14vh)] lg:pt-[calc(var(--header)+12vh)] pb-24 lg:pb-12">
        <h1 className="t-display">
          <span data-rise className="block text-soft">You run the business.</span>
          <span data-rise style={{ '--d': '90ms' } as React.CSSProperties} className="block">
            I&apos;ll handle the tech.
          </span>
        </h1>

        <div className="grid md:grid-cols-12 gap-6">
          <div
            data-rise
            style={{ '--d': '180ms' } as React.CSSProperties}
            className="md:col-start-7 md:col-span-6 lg:col-start-8 lg:col-span-5"
          >
            <p className="t-lead max-w-[34ch]">
              I turn the way your business runs into software: booking systems, dashboards, online
              payments. Then I keep it running.
            </p>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8"
            >
              Book a free 30-min call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
