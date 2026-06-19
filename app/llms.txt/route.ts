import portfolioData from '@/data/portfolio.json'

export const dynamic = 'force-static'

export function GET() {
  const { personal, skills, projects, experience } = portfolioData

  const skillLines = skills
    .map((s) => `- ${s.category}: ${s.items.join(', ')}`)
    .join('\n')

  const experienceLines = experience
    .map((job) => {
      const achievements = job.achievements.map((a) => `- ${a}`).join('\n')
      return `### ${job.position} — ${job.company}\n${job.duration}\n${achievements}`
    })
    .join('\n\n')

  const projectLines = projects
    .map((p) => {
      const featured = p.featured ? ' (Featured)' : ''
      const problem = 'problem' in p ? `- **Problem:** ${(p as { problem: string }).problem}\n` : ''
      const outcome = 'outcome' in p ? `- **Outcome:** ${(p as { outcome: string }).outcome}\n` : ''
      return `### ${p.title}${featured}\n${p.description}\n${problem}${outcome}- **Tech:** ${p.technologies.join(', ')}\n- **Live:** ${p.demo}`
    })
    .join('\n\n')

  const body = `# ${personal.name} — ${personal.title}

> ${personal.bio}

## About

**Skills:**
${skillLines}

## Work Experience

${experienceLines}

## Projects

${projectLines}

## Contact

- **Email:** ${personal.email}
- **GitHub:** ${personal.social.github}
- **LinkedIn:** ${personal.social.linkedin}
- **Location:** ${personal.location} — available remotely
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
