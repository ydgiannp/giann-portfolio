import portfolioData from '@/data/portfolio.json'

export default function Process() {
  const { process } = portfolioData

  return (
    <section id="process" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          How we work together
        </h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {process.map((step, index) => (
            <li key={step.title} className="border-t border-accent/30 pt-5">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                Step {index + 1}
              </p>
              <h3 className="text-base font-semibold text-snow mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-snow/50 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
