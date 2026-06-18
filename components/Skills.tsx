import portfolioData from '@/data/portfolio.json'

const ICON_SLUGS: Record<string, string | null> = {
  'Vue.js': 'vuedotjs',
  'Nuxt.js': 'nuxtdotjs',
  'TypeScript': 'typescript',
  'Tailwind CSS': 'tailwindcss',
  'JavaScript': 'javascript',
  'Next.js': 'nextdotjs',
  'React': 'react',
  'Go': 'go',
  'Python': 'python',
  'Firebase': 'firebase',
  'Caching': null,
  'Logging': null,
  'Pub/Sub': 'googlepubsub',
  'Event Driven Architecture': null,
  'Clean Architecture': null,
  'Google Cloud Platform': 'googlecloud',
  'Docker': 'docker',
  'Git': 'git',
  'CI/CD': 'githubactions',
  'Agile Methodologies': null,
}

type SkillCategory = { category: string; items: string[] }

function TechChip({ name }: { readonly name: string }) {
  const slug = ICON_SLUGS[name]

  return (
    <div className="group flex items-center gap-2 px-3 py-2 bg-canvas rounded-lg border border-white/5 hover:border-accent/25 hover:bg-accent/5 transition-all duration-200 cursor-default">
      {slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/f0f0f0`}
          alt=""
          width={13}
          height={13}
          className="opacity-30 group-hover:opacity-80 transition-opacity duration-200 shrink-0"
        />
      ) : (
        <span className="w-[13px] h-[13px] shrink-0" />
      )}
      <span className="font-mono text-xs text-muted group-hover:text-snow transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function SkillCard({
  category,
  accent,
}: {
  readonly category: SkillCategory
  readonly accent?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-8 border ${
        accent
          ? 'bg-canvas border-accent/15'
          : 'bg-canvas border-white/5'
      }`}
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
        {category.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <TechChip key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { skills } = portfolioData
  const [frontend, backend, tools] = skills

  return (
    <section id="skills" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-snow tracking-tight mb-16">
          Skills & technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <SkillCard category={frontend} />
          <SkillCard category={tools} />
          <div className="md:col-span-2">
            <SkillCard category={backend} accent />
          </div>
        </div>
      </div>
    </section>
  )
}
