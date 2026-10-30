import portfolioData from '@/data/portfolio.json'

type FaqItem = { question: string; answer: string }

export const dynamic = 'force-static'

export function GET() {
  const { personal, services, process, projects, experience } = portfolioData
  const faq = (portfolioData as unknown as { faq: FaqItem[] }).faq

  const serviceLines = services
    .map((s) => `- **${s.title}:** ${s.description}`)
    .join('\n')

  const processLines = process
    .map((s, i) => `${i + 1}. **${s.title}:** ${s.description}`)
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
      const tech = p.technologies.length ? `- **Tech:** ${p.technologies.join(', ')}\n` : ''
      const live = 'demo' in p ? `- **Live:** ${(p as { demo: string }).demo}\n` : ''
      const t = (p as { testimonial?: { quote: string; author: string; role: string } }).testimonial
      const quote = t ? `- **Client says:** "${t.quote}" — ${t.author}, ${t.role}` : ''
      return `### ${p.title}${featured}\n${p.description}\n${problem}${outcome}${tech}${live}${quote}`.trimEnd()
    })
    .join('\n\n')

  const faqLines = faq
    .map((item) => `**${item.question}**\n${item.answer}`)
    .join('\n\n')

  const body = `# ${personal.name} — ${personal.title}

> ${personal.bio}

## Services

${serviceLines}

## How we work

${processLines}

## FAQ

${faqLines}

## Work Experience

${experienceLines}

## Projects

${projectLines}

## Contact

- **WhatsApp:** ${personal.whatsapp}
- **Email:** ${personal.email}
- **GitHub:** ${personal.social.github}
- **LinkedIn:** ${personal.social.linkedin}
- **Location:** ${personal.location} — available remotely
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
