import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import UnifiedSection from '../components/UnifiedSection'
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
        <UnifiedSection />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
