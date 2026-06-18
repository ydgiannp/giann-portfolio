import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Yulius Giann — Software Developer',
  description: 'Full-stack developer in Jakarta building Vue frontends, Go backends, and GCP-deployed production systems.',
  openGraph: {
    title: 'Yulius Giann — Software Developer',
    description: 'Full-stack developer in Jakarta building fast, reliable web products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-snow`}>
        {children}
      </body>
    </html>
  )
}
