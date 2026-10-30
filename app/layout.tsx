import type { Metadata } from 'next'
import { Crimson_Pro, Manrope } from 'next/font/google'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yuliusgiann.vercel.app'

const display = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
  display: 'swap',
})

const text = Manrope({
  subsets: ['latin'],
  variable: '--font-text',
  weight: ['400', '600'],
  display: 'swap',
})

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yulius Giann',
  jobTitle: 'Part-time CTO',
  url: siteUrl,
  email: 'ydgiannp@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://github.com/ydgiannp',
    'https://www.linkedin.com/in/yulius-giann-951677124/',
    'https://x.com/ydgiannp',
  ],
  knowsAbout: [
    'Vue.js', 'Nuxt.js', 'TypeScript', 'Go', 'React', 'Next.js',
    'Google Cloud Platform', 'Docker', 'Firebase', 'Python',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yulius Giann | Part-time CTO',
  url: siteUrl,
  author: {
    '@type': 'Person',
    name: 'Yulius Giann',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Yulius Giann | Part-time CTO for Growing Businesses',
  description: "I turn how your business runs into software and keep it running after launch. 10+ years building products, including Kompas.id's payment system.",
  keywords: [
    'Part-time CTO', 'Fractional CTO', 'IT Partner', 'Software Developer', 'Web Developer',
    'Booking System', 'Business Software', 'Jakarta', 'Indonesia',
  ],
  authors: [{ name: 'Yulius Giann', url: siteUrl }],
  creator: 'Yulius Giann',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Yulius Giann | Part-time CTO for Growing Businesses',
    description: "I turn how your business runs into software and keep it running after launch. 10+ years building products, including Kompas.id's payment system.",
    url: siteUrl,
    siteName: 'Yulius Giann Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yulius Giann | Part-time CTO for Growing Businesses',
    description: "I turn how your business runs into software and keep it running after launch. 10+ years building products, including Kompas.id's payment system.",
    creator: '@ydgiannp',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
      </head>
      <body className="ch-eclipse bg-ground text-ink antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:btn"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
