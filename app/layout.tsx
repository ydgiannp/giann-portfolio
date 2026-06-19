import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yuliusgiann.vercel.app'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yulius Giann',
  jobTitle: 'Software Developer',
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
  name: 'Yulius Giann — Software Developer',
  url: siteUrl,
  author: {
    '@type': 'Person',
    name: 'Yulius Giann',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Yulius Giann — Software Developer',
  description: 'Full-stack developer in Jakarta building Vue frontends, Go backends, and GCP-deployed production systems.',
  keywords: [
    'Software Developer', 'Full-stack Developer', 'Vue.js', 'Nuxt.js', 'Go', 'Golang',
    'React', 'Next.js', 'TypeScript', 'Google Cloud Platform', 'Jakarta', 'Indonesia',
    'Web Developer', 'Frontend Developer', 'Backend Developer',
  ],
  authors: [{ name: 'Yulius Giann', url: siteUrl }],
  creator: 'Yulius Giann',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Yulius Giann — Software Developer',
    description: 'Full-stack developer in Jakarta building fast, reliable web products with Vue, Go, and GCP.',
    url: siteUrl,
    siteName: 'Yulius Giann Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yulius Giann — Software Developer',
    description: 'Full-stack developer in Jakarta. Vue frontends, Go backends, GCP-deployed.',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-snow`}>
        {children}
      </body>
    </html>
  )
}
