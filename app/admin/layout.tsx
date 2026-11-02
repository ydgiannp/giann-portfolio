import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Yulius Giann',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // id="home" is where the root layout's skip link lands
  return (
    <main id="home" className="ch-paper bg-ground text-ink min-h-screen">
      {children}
    </main>
  )
}
