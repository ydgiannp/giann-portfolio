import portfolioData from '@/data/portfolio.json'

export default function Footer() {
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer data-chapter="eclipse" className="ch-eclipse bg-ground text-soft">
      <div className="frame flex flex-wrap items-center justify-between gap-4 py-8 t-small">
        <p>&copy; {currentYear} {personal.name} · {personal.title}</p>
        <p className="flex gap-6 text-ink">
          <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          <a href={`mailto:${personal.email}?subject=Privacy`} className="link">Privacy</a>
        </p>
      </div>
    </footer>
  )
}
