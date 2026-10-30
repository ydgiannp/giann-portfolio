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
          <label htmlFor="contact-message" className="block t-small text-soft">
            Your message
          </label>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <input
              id="contact-message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby="contact-help"
              className="flex-1 min-w-0 h-14 bg-paper text-eclipse placeholder:text-[#4F5F78] px-5 t-body outline-none focus:ring-2 focus:ring-inset focus:ring-honey"
              placeholder="e.g. Bookings come in by WhatsApp and get lost"
            />
            <button type="submit" className="btn !min-h-14">
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
