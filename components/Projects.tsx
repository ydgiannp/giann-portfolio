import portfolioData from '@/data/portfolio.json'

const TECH_SLUGS: Record<string, string | null> = {
  'Nuxt.js': 'nuxtdotjs',
  'Vue.js': 'vuedotjs',
  'TypeScript': 'typescript',
  'Tailwind CSS': 'tailwindcss',
  'Firebase': 'firebase',
  'React': 'react',
  'Node.js': 'nodedotjs',
  'Next.js': 'nextdotjs',
  'Python': 'python',
  'PostgreSQL': 'postgresql',
  'FastAPI': 'fastapi',
  'Nuxt/UI': 'nuxtdotjs',
  'Supabase': 'supabase',
  'Vercel': 'vercel',
  'Netlify': 'netlify',
  'Prisma': 'prisma',
  'Go': 'go',
  'Docker': 'docker',
  'Redis': 'redis',
}

type Project = {
  id: number
  title: string
  description: string
  problem: string
  outcome: string
  technologies: string[]
  github?: string
  demo: string
  featured: boolean
}

export default function Projects() {
  const { projects } = portfolioData as { projects: Project[] }

  return (
    <section id="projects" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          Selected projects
        </h2>
        <div className="divide-y divide-white/5">
          {projects.map((project, index) => (
            <article key={project.id} className="py-12 first:pt-0 last:pb-0">

              {/* Number + title block */}
              <div className="flex items-start gap-4 mb-3">
                <span className="font-mono text-xs text-snow/50 mt-1.5 shrink-0 w-6">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-snow tracking-tight">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 font-mono text-xs text-accent border border-accent/30 rounded shrink-0">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-snow/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Links — sit below title, indented to match */}
              <div className="flex gap-2 mb-8 ml-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-snow/50 hover:text-snow border border-white/8 hover:border-white/20 px-3 py-2 rounded-lg transition-all duration-200 active:scale-95"
                  >
                    GitHub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-accent border border-accent/30 hover:bg-accent hover:text-white hover:border-accent px-3 py-2 rounded-lg transition-all duration-200 active:scale-95"
                >
                  Live
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Case study grid */}
              <div className="ml-10 grid sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl p-5 bg-ink border border-white/5">
                  <p className="font-mono text-xs text-snow/50 uppercase tracking-widest mb-3">Problem</p>
                  <p className="text-sm text-snow/70 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-xl p-5 bg-ink border border-accent/10">
                  <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Outcome</p>
                  <p className="text-sm text-snow/70 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="ml-10 flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const slug = TECH_SLUGS[tech]
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-ink rounded-lg border border-white/5"
                    >
                      {slug && (
                        <img
                          src={`https://cdn.simpleicons.org/${slug}/5a5a5a`}
                          alt=""
                          width={11}
                          height={11}
                          className="shrink-0"
                        />
                      )}
                      <span className="font-mono text-xs text-muted">{tech}</span>
                    </div>
                  )
                })}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
