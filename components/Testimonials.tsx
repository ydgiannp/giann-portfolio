import portfolioData from '@/data/portfolio.json'
import type { Project } from '@/components/Projects'

export default function Testimonials() {
  const { projects } = portfolioData as { projects: Project[] }
  const quoted = projects.filter((p) => p.testimonial)

  return (
    <section id="testimonials" data-chapter="denim" className="ch-denim bg-ground text-ink py-24 md:py-28">
      <div className="frame">
        <h2 data-reveal className="t-head">What clients say</h2>

        <div className="mt-12 md:mt-16 space-y-16 md:space-y-20">
          {quoted.map((project) => {
            const t = project.testimonial!
            return (
              <figure key={project.id} data-reveal className="grid md:grid-cols-12 gap-x-8 gap-y-5">
                {/* One verbatim line carries the point; the full review stays one click away */}
                <blockquote className="md:col-span-8 md:col-start-5 md:row-start-1 t-lead !leading-[1.3]">
                  <span aria-hidden className="text-honey">“</span>
                  {t.excerpt}
                  <span aria-hidden className="text-honey">”</span>
                </blockquote>
                <figcaption className="md:col-span-4 md:row-start-1 md:row-span-2">
                  <span className="block font-semibold">{t.author}</span>
                  <span className="block text-soft">{t.role}</span>
                  {t.role !== project.title && (
                    <span className="block mt-2 t-small text-soft">on {project.title}</span>
                  )}
                </figcaption>
                <details className="md:col-span-8 md:col-start-5 md:row-start-2">
                  <summary className="link t-small cursor-pointer w-fit">Read the full review</summary>
                  <p className="mt-4 text-soft max-w-[60ch]">{t.quote}</p>
                </details>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
