import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
