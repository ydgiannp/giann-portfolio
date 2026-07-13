import portfolioData from '@/data/portfolio.json'

type FaqItem = { question: string; answer: string }

export default function FAQ() {
  const { faq } = portfolioData as unknown as { faq: FaqItem[] }

  return (
    <section id="faq" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          Common questions
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {faq.map((item, index) => (
            <div key={index}>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-base font-semibold text-snow mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-sm text-snow/50 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
