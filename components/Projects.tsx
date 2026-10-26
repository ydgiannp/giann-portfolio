import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import portfolioData from '@/data/portfolio.json'

type Project = {
  id: number
  title: string
  description: string
  problem?: string
  outcome: string
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
}

type Shots = {
  big: { src: string; alt: string; width: number; height: number }
  small: { src: string; alt: string; width: number; height: number }
  height: string
}

// Screenshots taken from the live client sites
const SHOTS: Record<string, Shots> = {
  'Rentalnow.id': {
    big: { src: '/work/rentalnow-home.jpg', alt: 'Rentalnow.id home page with the booking form for motorbikes, cars and laptops', width: 2520, height: 2600 },
    small: { src: '/work/rentalnow-fleet.jpg', alt: 'Rentalnow.id list of motorbikes with daily prices', width: 1440, height: 900 },
    height: 'lg:min-h-[80svh]',
  },
  'Prophack Japan': {
    big: { src: '/work/prophack-search.jpg', alt: 'Prophack Japan property search with filters for purpose, type, price and prefecture', width: 1748, height: 1194 },
    small: { src: '/work/prophack-portal.jpg', alt: 'Prophack Japan member portal with saved favourites and quick search', width: 1748, height: 1092 },
    height: 'lg:min-h-[64svh]',
  },
}

function CaseText({ project }: { project: Project }) {
  return (
    <>
      <p className="mt-3 text-soft">{project.description}</p>
      {project.problem && (
        <p className="mt-6">
          <strong className="font-semibold">Before. </strong>
          {project.problem}
        </p>
      )}
      <p className="mt-4">
        <strong className="font-semibold">After. </strong>
        {project.outcome}
      </p>
      <p className="mt-6 t-small text-soft">{project.technologies.join(', ')}</p>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-4 inline-flex items-center gap-1 font-semibold"
        >
          {new URL(project.demo).hostname}
          <ArrowUpRight size={16} aria-hidden />
        </a>
      )}
    </>
  )
}

export default function Projects() {
  const { projects } = portfolioData as { projects: Project[] }
  const shown = projects.filter((p) => SHOTS[p.title])
  const rest = projects.filter((p) => !SHOTS[p.title])

  return (
    <section id="projects" data-chapter="paper" className="ch-paper bg-ground text-ink py-24 md:py-28 overflow-hidden">
      <div className="frame">
        <h2 data-reveal className="t-head">Client work</h2>
      </div>

      <div className="mt-16 md:mt-24 space-y-24 md:space-y-36">
        {shown.map((project) => {
          const shots = SHOTS[project.title]
          return (
            <article key={project.id} className="frame grid lg:grid-cols-12 gap-x-6">
              <div
                data-reveal
                className={`relative overflow-hidden aspect-[4/5] md:aspect-[16/10] lg:aspect-auto ${shots.height} w-[110%] md:w-[calc(100%+var(--frame))] lg:w-auto -ml-[var(--frame)] lg:col-span-7`}
              >
                <Image
                  src={shots.big.src}
                  alt={shots.big.alt}
                  width={shots.big.width}
                  height={shots.big.height}
                  sizes="(min-width: 1024px) 60vw, 110vw"
                  className="drift absolute inset-0 h-full w-full object-cover object-left-top mix-blend-multiply"
                />
              </div>

              <div className="lg:col-start-9 lg:col-span-4 lg:self-end mt-10 lg:mt-0 max-w-[60ch] lg:max-w-none">
                <h3 data-reveal className="t-head">{project.title}</h3>
                <div data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
                  <CaseText project={project} />
                </div>
                <div
                  data-reveal
                  style={{ '--d': '160ms' } as React.CSSProperties}
                  className="mt-10 ml-auto lg:ml-0 w-[70%] lg:w-full aspect-[16/10] relative overflow-hidden"
                >
                  <Image
                    src={shots.small.src}
                    alt={shots.small.alt}
                    width={shots.small.width}
                    height={shots.small.height}
                    sizes="(min-width: 1024px) 30vw, 70vw"
                    className="absolute inset-0 h-full w-full object-cover object-left-top mix-blend-multiply"
                  />
                </div>
              </div>
            </article>
          )
        })}

        {rest.length > 0 && (
          <div className="frame grid md:grid-cols-2 gap-x-6 gap-y-16">
            {rest.map((project, i) => (
              <article
                key={project.id}
                data-reveal
                style={{ '--d': `${i * 80}ms` } as React.CSSProperties}
                className="bg-tone p-6 md:p-10"
              >
                <h3 className="t-head">{project.title}</h3>
                <div className="max-w-[48ch]">
                  <CaseText project={project} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
