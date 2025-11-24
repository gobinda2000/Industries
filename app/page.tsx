import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Facilities />
      <Gallery />
      <Locations />
      <Contact />
    </main>
  )
}
