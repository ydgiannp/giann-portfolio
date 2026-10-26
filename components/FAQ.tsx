import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

type FaqItem = { question: string; answer: string }

export default function FAQ() {
  const { faq } = portfolioData as unknown as { faq: FaqItem[] }

  return (
    <section id="faq" data-chapter="paper" className="ch-paper bg-ground text-ink py-24 md:py-28">
      <div className="frame grid md:grid-cols-12 gap-x-6">
        <h2 data-reveal className="t-head md:col-span-9">Questions business owners ask</h2>

        <div className="mt-14 md:mt-20 md:col-start-5 md:col-span-8 space-y-3">
          {faq.map((item, i) => (
            <details
              key={item.question}
              data-reveal
              style={{ '--d': `${i * 50}ms` } as React.CSSProperties}
              className="group -mx-4 lg:-mx-6 open:bg-tone transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none px-4 lg:px-6 py-4 t-lead [&::-webkit-details-marker]:hidden">
                {item.question}
                <CaretDown
                  size={22}
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-4 lg:px-6 pb-6 max-w-[56ch]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
