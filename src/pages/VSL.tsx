import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import UnifiedSection from '../components/UnifiedSection'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

/**
 * Cópia da landing principal para teste A/B.
 * Rota: /vsl
 * Mesma estrutura e componentes da Home.
 */
export default function VSL() {
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
