import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex items-center bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-8">404</p>
        <h1 className="text-8xl md:text-9xl font-bold text-snow leading-[0.88] tracking-tight mb-10">
          Not<br />found
        </h1>
        <p className="text-base text-snow/50 max-w-md mb-12 leading-relaxed">
          This page doesn&apos;t exist. It may have been moved or the URL is incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 font-outfit font-semibold text-sm bg-accent text-white rounded-lg hover:bg-[#c9570e] transition-colors duration-200"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
