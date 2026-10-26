import portfolioData from '@/data/portfolio.json'

export default function Services() {
  const { services } = portfolioData

  return (
    <section id="services" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          What I do for your business
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl p-8 bg-canvas border border-white/8 hover:border-accent/30 transition-colors duration-200"
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xl font-bold text-snow tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-snow/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
