import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <ProductGrid />
        <Testimonials variant="main" />
        <FinalCTA variant="main" />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
