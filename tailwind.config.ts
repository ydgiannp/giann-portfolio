import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // brand
        eclipse: '#213555',
        denim: '#4F709C',
        honey: '#E5D283',
        paper: '#F3F5F8',
        // chapter roles, set by .ch-* classes in globals.css
        ground: 'var(--ground)',
        ink: 'var(--ink)',
        soft: 'var(--soft)',
        tone: 'var(--tone)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        text: ['var(--font-text)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
