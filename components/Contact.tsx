'use client'

import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const { personal } = portfolioData
  const [message, setMessage] = useState('')

  // Sends what the visitor typed straight into a WhatsApp chat
  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = message.trim()
    // encodeURIComponent, not URLSearchParams: WhatsApp can show "+" literally instead of a space
    const url = text ? `${personal.whatsapp.split('?')[0]}?text=${encodeURIComponent(text)}` : personal.whatsapp
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const phoneHref = `tel:${personal.phone.replace(/[^+\d]/g, '')}`

  return (
    <section id="contact" data-chapter="eclipse" className="ch-eclipse bg-ground text-ink pt-28 md:pt-36 pb-24 md:pb-28">
      <div className="frame">
        <h2 id="contact-title" data-reveal className="t-head max-w-[20ch]">
          Tell me what&apos;s slowing your business down
        </h2>
        <p data-reveal style={{ '--d': '80ms' } as React.CSSProperties} className="mt-6 max-w-[52ch]">
          The first call is free and takes 30 minutes. You&apos;ll leave with clear next steps, whether or not
          we work together.
        </p>

        <form
          onSubmit={send}
          data-reveal
          style={{ '--d': '160ms' } as React.CSSProperties}
          className="mt-10 max-w-[640px]"
        >
          <div className="relative">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-labelledby="contact-title"
              aria-describedby="contact-help"
              className="w-full h-16 bg-paper text-eclipse placeholder:text-[#4F5F78] pl-5 pr-20 t-body outline-none focus:ring-2 focus:ring-inset focus:ring-honey"
              placeholder="e.g. Bookings come in by WhatsApp and get lost"
            />
            <button
              type="submit"
              aria-label="Send on WhatsApp"
              className="btn absolute right-2 top-2 !min-h-0 h-12 w-12 !p-0"
            >
              <ArrowRight size={20} weight="bold" aria-hidden />
            </button>
          </div>
          <p id="contact-help" className="mt-4 t-small text-soft">
            Opens WhatsApp with your message.
          </p>
        </form>

        <dl data-reveal style={{ '--d': '240ms' } as React.CSSProperties} className="mt-16 grid sm:grid-cols-3 gap-6 max-w-[860px]">
          <div>
            <dt className="t-small text-soft">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${personal.email}`} className="link">{personal.email}</a>
            </dd>
          </div>
          <div>
            <dt className="t-small text-soft">WhatsApp</dt>
            <dd className="mt-1">
              <a href={phoneHref} className="link tabular">{personal.phone}</a>
            </dd>
          </div>
          <div>
            <dt className="t-small text-soft">Based in</dt>
            <dd className="mt-1">{personal.location}. Available remotely.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
