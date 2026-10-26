import portfolioData from '@/data/portfolio.json'

// Facts a scanning reader wants, marked like a highlighter
const MARKS: { phrase: string; className: string }[] = [
  { phrase: '9+ years', className: 'bg-honey text-eclipse' },
  { phrase: 'Software Engineer Lead at Kompas.id', className: 'bg-denim text-white' },
  { phrase: 'part-time CTO', className: 'bg-honey text-eclipse' },
]

const mark = 'px-[0.1em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]'

function highlight(text: string) {
  const pattern = new RegExp(`(${MARKS.map((m) => m.phrase.replace(/[.+]/g, '\\$&')).join('|')})`)
  return text.split(pattern).map((part, i) => {
    const m = MARKS.find((x) => x.phrase === part)
    return m ? (
      <span key={i} className={`${m.className} ${mark}`}>
        {part}
      </span>
    ) : (
      part
    )
  })
}

export default function About() {
  const { personal } = portfolioData
  // The last sentence is the invitation, so it links to contact
  const lastStop = personal.bio.lastIndexOf('. ', personal.bio.length - 2)
  const body = personal.bio.slice(0, lastStop + 1)
  const closing = personal.bio.slice(lastStop + 2)

  return (
    <section id="about" data-chapter="paper" className="ch-paper bg-ground text-ink py-24 md:py-28">
      <div className="frame">
        <h2 data-reveal className="t-head">Who you&apos;ll work with</h2>
        <p
          data-reveal
          style={{ '--d': '80ms' } as React.CSSProperties}
          className="mt-12 md:mt-16 t-lead !leading-[1.3] md:columns-2 gap-8 text-soft"
        >
          {highlight(body)}{' '}
          <a href="#contact" className={`bg-eclipse text-paper ${mark} hover:bg-denim transition-colors duration-200`}>
            {closing}
          </a>
        </p>
      </div>
    </section>
  )
}
