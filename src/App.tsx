import Hero from './components/Hero'
import VSL from './components/VSL'
import Benefits from './components/Benefits'
import ProductGrid from './components/ProductGrid'
import ProductGallery from './components/ProductGallery'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <VSL />
        <Benefits />
        <ProductGrid />
        <ProductGallery />
        <Testimonials />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
