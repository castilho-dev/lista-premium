import CalculadoraPrecos from '../components/CalculadoraPrecos'

export default function Calculadora() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <CalculadoraPrecos />
        </div>
      </div>
    </div>
  )
}
