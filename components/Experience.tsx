import { Fragment } from 'react'
import { Briefcase, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

export default function Experience() {
  const { experience } = portfolioData
  let row = 0

  return (
    <section id="experience" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink py-24 md:py-28">
      <div className="frame">
        <h2 data-reveal className="t-head">
          Track
          <span className="block md:pl-[16.66%]">record</span>
        </h2>
        <p data-reveal style={{ '--d': '80ms' } as React.CSSProperties} className="mt-10 t-lead max-w-[40ch]">
          I also work as a Software Engineer Lead at Kompas.id, where my team runs a payment system that
          handles 12,500+ transactions a month.
        </p>

        <table data-reveal style={{ '--d': '160ms' } as React.CSSProperties} className="mt-20 w-full border-collapse text-left max-md:block">
          <caption className="sr-only">Roles and what I delivered in each</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Role</th>
              <th scope="col">Work</th>
            </tr>
          </thead>
          <tbody className="max-md:block">
            {experience.map((job, j) => {
              const lines = [job.description, ...job.achievements]
              return (
                <Fragment key={job.id}>
                  {j > 0 && (
                    <tr aria-hidden="true" className="max-md:block">
                      <td colSpan={3} className="h-10 max-md:block" />
                    </tr>
                  )}
                  {lines.map((line, k) => {
                    const tone = row++ % 2 === 1 ? 'bg-tone' : ''
                    return (
                      <tr key={line} className={`${tone} max-md:block max-md:px-4 max-md:py-3 max-md:-mx-4`}>
                        <td className="md:w-[16%] md:py-3.5 md:pl-4 align-top tabular text-soft max-md:block">
                          {k === 0 ? job.duration : null}
                        </td>
                        <td className="md:w-[30%] md:py-3.5 md:pr-6 align-top max-md:block">
                          {k === 0 ? (
                            <>
                              <Briefcase aria-hidden weight="duotone" className="inline w-[1.1em] h-[1.1em] mr-1.5 -mt-[0.2em]" />
                              <span className="font-semibold">{job.position}</span>
                              <span className="text-soft">, {job.company}</span>
                            </>
                          ) : null}
                        </td>
                        <td className={`md:py-3.5 md:pr-4 align-top max-md:block ${k === 0 ? 'max-md:mt-2' : ''}`}>
                          {k === 0 ? (
                            line
                          ) : (
                            <span className="flex gap-2">
                              <CheckCircle aria-hidden weight="duotone" className="shrink-0 w-[1.1em] h-[1.1em] mt-[0.2em] text-soft" />
                              {line}
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
