import portfolioData from '@/data/portfolio.json'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          Work experience
        </h2>
        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/8" />

          <div className="space-y-12 pl-8">
            {experience.map((job) => (
              <div key={job.id} className="relative">
                {/* Dot */}
                <div className="absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-4 border-ink" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-snow tracking-tight">
                      {job.position}
                    </h3>
                    <p className="font-mono text-sm text-accent mt-0.5">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {job.duration}
                  </span>
                </div>

                <p className="text-sm text-snow/60 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
