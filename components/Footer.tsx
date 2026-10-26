import portfolioData from '@/data/portfolio.json'

export default function Footer() {
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()
  const [user, domain] = personal.email.split('@')

  return (
    <footer data-chapter="honey" className="ch-honey bg-ground text-ink">
      <div className="frame lg:min-h-[72svh] flex flex-col justify-between gap-16 pt-16 pb-8">
        <div className="flex items-start justify-between gap-6 t-small">
          <p>
            <span className="font-semibold">{personal.name}</span>
            <br />
            {personal.title}, {personal.location}
          </p>
          <a href="#home" className="link">Back to top</a>
        </div>

        <div>
          <a
            href={`mailto:${personal.email}`}
            data-reveal
            className="block font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(2.4rem,9vw,9rem)] hover:text-denim transition-colors duration-200"
          >
            {user}
            <wbr />@{domain}
          </a>

          <div className="mt-12 grid sm:grid-cols-3 gap-3 t-small">
            <p className="flex gap-5">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
              <a href={`mailto:${personal.email}?subject=Privacy`} className="link">Privacy</a>
            </p>
            <p className="sm:text-center">&copy; {currentYear} Yulius Giann. Built with Next.js and Tailwind CSS.</p>
            <p className="sm:text-right">Jakarta, {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
