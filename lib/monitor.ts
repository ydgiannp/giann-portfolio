import tls from 'node:tls'

const TIMEOUT_MS = 10_000

export type Site = { name: string; url: string }

export type SiteCheck = Site & {
  up: boolean
  status: number | null
  ms: number | null
  error: string | null
  sslExpires: Date | null
  domainExpires: Date | null
}

async function checkHttp(url: string) {
  const start = Date.now()
  try {
    const res = await fetch(url, {
      cache: 'no-store',
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': 'giann-monitor/1.0' },
    })
    return { up: res.ok, status: res.status, ms: Date.now() - start, error: res.ok ? null : `HTTP ${res.status}` }
  } catch (e) {
    return { up: false, status: null, ms: null, error: e instanceof Error ? e.message : 'Tidak bisa dihubungi' }
  }
}

function checkSsl(hostname: string): Promise<Date | null> {
  return new Promise((resolve) => {
    const socket = tls.connect({ host: hostname, port: 443, servername: hostname, timeout: TIMEOUT_MS }, () => {
      const cert = socket.getPeerCertificate()
      socket.end()
      resolve(cert?.valid_to ? new Date(cert.valid_to) : null)
    })
    socket.on('error', () => resolve(null))
    socket.on('timeout', () => {
      socket.destroy()
      resolve(null)
    })
  })
}

// RDAP is the JSON successor of WHOIS; rdap.org forwards to the right registry
async function checkDomain(hostname: string): Promise<Date | null> {
  const domain = hostname.replace(/^www\./, '')
  try {
    const res = await fetch(`https://rdap.org/domain/${domain}`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      // rdap.org answers 403 to requests without a user-agent
      headers: { 'user-agent': 'giann-monitor/1.0', accept: 'application/rdap+json' },
    })
    if (!res.ok) return null
    const data: { events?: { eventAction: string; eventDate: string }[] } = await res.json()
    const expiry = data.events?.find((e) => e.eventAction === 'expiration')
    return expiry ? new Date(expiry.eventDate) : null
  } catch {
    return null
  }
}

export async function checkSite(site: Site): Promise<SiteCheck> {
  const { hostname } = new URL(site.url)
  const [http, sslExpires, domainExpires] = await Promise.all([
    checkHttp(site.url),
    checkSsl(hostname),
    checkDomain(hostname),
  ])
  return { ...site, ...http, sslExpires, domainExpires }
}

export function daysUntil(date: Date) {
  return Math.floor((date.getTime() - Date.now()) / 86_400_000)
}
