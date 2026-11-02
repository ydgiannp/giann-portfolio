import {
  ArrowClockwise,
  ArrowUpRight,
  CheckCircle,
  Globe,
  IdentificationCard,
  LockKey,
  SignOut,
  WarningCircle,
  XCircle,
} from '@phosphor-icons/react/dist/ssr'
import sites from '@/data/monitored-sites.json'
import { checkSite, daysUntil, type Site, type SiteCheck } from '@/lib/monitor'
import { signOut } from './actions'

// Every visit runs the checks again, so the page always shows the current state
export const dynamic = 'force-dynamic'

// Warn this many days before a certificate or domain runs out
const SSL_WARN_DAYS = 14
const DOMAIN_WARN_DAYS = 30

type Level = 'ok' | 'warn' | 'bad'

const LABEL: Record<Level, string> = { ok: 'Aman', warn: 'Perlu dicek', bad: 'Bermasalah' }

const TONE: Record<Level, string> = {
  ok: 'text-emerald-700',
  warn: 'text-amber-700',
  bad: 'text-red-700',
}

const PILL: Record<Level, string> = {
  ok: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
  warn: 'bg-amber-50 text-amber-800 ring-amber-600/25',
  bad: 'bg-red-50 text-red-800 ring-red-600/20',
}

const RAIL: Record<Level, string> = {
  ok: 'bg-emerald-500',
  warn: 'bg-amber-400',
  bad: 'bg-red-500',
}

// Problems first, so the card that needs attention is the one you see first
const ORDER: Record<Level, number> = { bad: 0, warn: 1, ok: 2 }

const ICON = { ok: CheckCircle, warn: WarningCircle, bad: XCircle }

function formatDate(date: Date) {
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' })
}

function expiryLevel(date: Date | null, warnDays: number): Level {
  if (!date) return 'warn'
  const days = daysUntil(date)
  if (days < 0) return 'bad'
  return days <= warnDays ? 'warn' : 'ok'
}

function siteLevel(check: SiteCheck): Level {
  if (!check.up) return 'bad'
  const levels = [expiryLevel(check.sslExpires, SSL_WARN_DAYS), expiryLevel(check.domainExpires, DOMAIN_WARN_DAYS)]
  if (levels.includes('bad')) return 'bad'
  return levels.includes('warn') ? 'warn' : 'ok'
}

function Status({ level, children }: { level: Level; children: React.ReactNode }) {
  const Icon = ICON[level]
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold ${TONE[level]}`}>
      <Icon size={18} weight="fill" aria-hidden />
      {children}
    </span>
  )
}

function Pill({ level }: { level: Level }) {
  const Icon = ICON[level]
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 t-small font-semibold ring-1 ring-inset ${PILL[level]}`}>
      <Icon size={16} weight="fill" aria-hidden />
      <span className="sr-only">Status keseluruhan: </span>
      {LABEL[level]}
    </span>
  )
}

function Metric({ icon: Icon, label, children }: { icon: typeof Globe; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[4px] bg-paper p-4">
      <dt className="flex items-center gap-2 text-soft">
        <Icon size={16} aria-hidden />
        {label}
      </dt>
      <dd className="mt-2">{children}</dd>
    </div>
  )
}

function Expiry({ date, warnDays }: { date: Date | null; warnDays: number }) {
  if (!date) return <Status level="warn">Tidak terbaca</Status>
  const days = daysUntil(date)
  return (
    <>
      <Status level={expiryLevel(date, warnDays)}>
        {days < 0 ? `Lewat ${-days} hari` : `${days} hari lagi`}
      </Status>
      <span className="mt-0.5 block text-soft tabular">{formatDate(date)}</span>
    </>
  )
}

function SiteCard({ check }: { check: SiteCheck }) {
  const level = siteLevel(check)
  return (
    <article className="relative overflow-hidden rounded-[4px] bg-white shadow-[0_1px_2px_rgba(33,53,85,0.06),0_8px_24px_-12px_rgba(33,53,85,0.18)]">
      <span className={`absolute inset-y-0 left-0 w-1 ${RAIL[level]}`} aria-hidden />
      <div className="p-6 pl-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-[1.75rem] break-words">{check.name}</h2>
            <a href={check.url} target="_blank" rel="noopener noreferrer" className="link mt-1 inline-flex items-center gap-1 t-small text-soft">
              {new URL(check.url).hostname}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
          <Pill level={level} />
        </div>

        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 t-small">
          <Metric icon={Globe} label="Website">
            {check.up ? (
              <>
                <Status level="ok">Online</Status>
                <span className="mt-0.5 block text-soft tabular">{check.ms} ms</span>
              </>
            ) : (
              <>
                <Status level="bad">Down</Status>
                <span className="mt-0.5 block text-soft break-words">{check.error}</span>
              </>
            )}
          </Metric>
          <Metric icon={LockKey} label="Sertifikat SSL">
            <Expiry date={check.sslExpires} warnDays={SSL_WARN_DAYS} />
          </Metric>
          <Metric icon={IdentificationCard} label="Domain">
            <Expiry date={check.domainExpires} warnDays={DOMAIN_WARN_DAYS} />
          </Metric>
        </dl>
      </div>
    </article>
  )
}

function Tally({ label, count, level }: { label: string; count: number; level?: Level }) {
  return (
    <div className="rounded-[4px] bg-white p-5 shadow-[0_1px_2px_rgba(33,53,85,0.06)]">
      <p className="flex items-center gap-2 t-small text-soft">
        {level && <span className={`size-2 rounded-full ${RAIL[level]}`} aria-hidden />}
        {label}
      </p>
      <p className={`mt-2 font-display text-[2.5rem] leading-none tabular ${level && count > 0 ? TONE[level] : ''}`}>{count}</p>
    </div>
  )
}

export default async function AdminPage() {
  const checks = await Promise.all((sites as Site[]).map(checkSite))
  const ranked = checks
    .map((check) => ({ check, level: siteLevel(check) }))
    .sort((a, b) => ORDER[a.level] - ORDER[b.level])
  const count = (level: Level) => ranked.filter((r) => r.level === level).length
  const checkedAt = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Jakarta' })

  return (
    <>
      <header className="ch-eclipse bg-ground text-ink">
        <div className="frame flex min-h-[var(--header)] items-center justify-between gap-4">
          <p className="font-display text-[1.5rem] font-extrabold tracking-[-0.04em]">
            Yulius Giann <span className="text-soft font-text text-[0.875rem] font-semibold tracking-normal">/ Admin</span>
          </p>
          <form action={signOut}>
            <button type="submit" className="btn min-h-[40px] px-4">
              <SignOut size={18} aria-hidden />
              Keluar
            </button>
          </form>
        </div>
      </header>

      <div className="frame py-10 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="t-head">Proyek klien</h1>
            <p className="mt-3 t-small text-soft">
              Dicek <span className="tabular">{checkedAt}</span> WIB
            </p>
          </div>
          <a href="/admin" className="btn btn-dark">
            <ArrowClockwise size={18} aria-hidden />
            Cek ulang
          </a>
        </div>

        <section aria-label="Ringkasan" className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Tally label="Total situs" count={ranked.length} />
          <Tally label="Aman" count={count('ok')} level="ok" />
          <Tally label="Perlu dicek" count={count('warn')} level="warn" />
          <Tally label="Bermasalah" count={count('bad')} level="bad" />
        </section>

        <div className="mt-8 grid xl:grid-cols-2 gap-5">
          {ranked.map(({ check }) => (
            <SiteCard key={check.url} check={check} />
          ))}
        </div>
      </div>
    </>
  )
}
