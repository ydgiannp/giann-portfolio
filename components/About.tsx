import Image from 'next/image'
import portfolioData from '@/data/portfolio.json'

const mark = 'bg-honey text-eclipse px-[0.1em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]'

// Marks the phrases a scanning reader wants, like a highlighter
export function highlight(text: string, marks: string[]) {
  const pattern = new RegExp(`(${marks.map((m) => m.replace(/[.+]/g, '\\$&')).join('|')})`)
  return text.split(pattern).map((part, i) =>
    marks.includes(part) ? (
      <span key={i} className={mark}>
        {part}
      </span>
    ) : (
      part
    )
  )
}

// Facts a scanning reader wants in the bio
const MARKS = ['10+ years', 'Software Engineer Lead at Kompas.id', 'part-time CTO']

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

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 md:gap-8">
          <div data-reveal className="md:col-span-4 flex md:flex-col items-center md:items-start gap-5">
            <Image
              src="/about/yulius-portrait.jpg"
              alt="Yulius Giann"
              width={480}
              height={480}
              sizes="(min-width: 768px) 240px, 96px"
              className="w-24 h-24 md:w-60 md:h-60 object-cover"
            />
            <div>
              <p className="font-display font-bold t-lead tracking-tight">{personal.name}</p>
              <p className="text-soft">{personal.title}</p>
            </div>
          </div>

          <p
            data-reveal
            style={{ '--d': '80ms' } as React.CSSProperties}
            className="md:col-span-8 t-lead !leading-[1.3] text-soft"
          >
            {highlight(body, MARKS)}{' '}
            <a href="#contact" className="link text-ink">
              {closing}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
