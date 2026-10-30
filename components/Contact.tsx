'use client'

import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const { personal } = portfolioData
  const [message, setMessage] = useState('')
  const [sentUrl, setSentUrl] = useState('')

  // Sends what the visitor typed straight into a WhatsApp chat
  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = message.trim()
    // encodeURIComponent, not URLSearchParams: WhatsApp can show "+" literally instead of a space
    const url = text ? `${personal.whatsapp.split('?')[0]}?text=${encodeURIComponent(text)}` : personal.whatsapp
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
  }

  const phoneHref = `tel:${personal.phone.replace(/[^+\d]/g, '')}`

  return (
    <section id="contact" data-chapter="honey" className="ch-honey bg-ground text-ink pt-28 md:pt-36 pb-24 md:pb-28">
      <div className="frame">
        <h2 id="contact-title" data-reveal className="t-head max-w-[20ch]">
          Tell me what&apos;s slowing your business down
        </h2>
        <p data-reveal style={{ '--d': '80ms' } as React.CSSProperties} className="mt-6 t-lead max-w-[52ch]">
          The first call is free and takes 30 minutes.
        </p>

        <div data-reveal style={{ '--d': '120ms' } as React.CSSProperties} className="mt-8">
          <a href={personal.booking || personal.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Book a free 30-min call
          </a>
        </div>

        <form
          onSubmit={send}
          data-reveal
          style={{ '--d': '160ms' } as React.CSSProperties}
          className="mt-10 max-w-[640px]"
        >
          <label htmlFor="contact-message" className="block t-small font-semibold">
            Or send it on WhatsApp
          </label>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <input
              id="contact-message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby="contact-help"
              className="sm:flex-1 min-w-0 h-14 bg-paper text-eclipse placeholder:text-[#4F5F78] px-5 t-body outline-none focus:ring-2 focus:ring-inset focus:ring-eclipse"
              placeholder="e.g. Bookings come in by WhatsApp and get lost"
            />
            <button type="submit" className="btn btn-dark !min-h-14">
              Send on WhatsApp
              <ArrowRight size={20} aria-hidden />
            </button>
          </div>
          <p id="contact-help" role="status" className="mt-4 t-small text-soft">
            {sentUrl ? (
              <>
                WhatsApp opened in a new tab. Didn&apos;t open?{' '}
                <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="link text-ink">
                  Use this link
                </a>
                .
              </>
            ) : (
              'Opens WhatsApp with your message.'
            )}
          </p>
        </form>

        <p data-reveal style={{ '--d': '240ms' } as React.CSSProperties} className="mt-10 t-small">
          <a href={`mailto:${personal.email}`} className="link">{personal.email}</a>
          {' · '}
          <a href={phoneHref} className="link tabular">{personal.phone}</a>
          {' · '}
          Jakarta, available remotely
        </p>
      </div>
    </section>
  )
}
