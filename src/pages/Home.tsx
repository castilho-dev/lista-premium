import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import Comparison from '../components/Comparison'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials />
        <Benefits />
        <Comparison />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
