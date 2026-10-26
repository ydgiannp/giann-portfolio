import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="ch-eclipse bg-ground text-ink min-h-[100dvh] flex items-center">
      <div className="frame py-32">
        <h1 className="t-display">
          <span className="block text-soft">Page</span>
          <span className="block">not found</span>
        </h1>
        <p className="mt-10 max-w-[44ch]">
          This page doesn&apos;t exist. It may have been moved or the URL is incorrect.
        </p>
        <Link href="/" className="btn mt-10">
          Back to home
        </Link>
      </div>
    </main>
  )
}
