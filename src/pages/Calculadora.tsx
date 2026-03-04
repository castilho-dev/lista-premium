import { Link } from 'react-router-dom'
import CalculadoraPrecos from '../components/CalculadoraPrecos'

export default function Calculadora() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-l-4 border-rose-500/60 pl-6 mb-8">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Calculadora de vendas
          </h1>
          <p className="mt-1 text-gray-500 text-sm">Lista Premium</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <CalculadoraPrecos />
        </div>

        <Link to="/" className="inline-block mt-8 text-rose-600 hover:text-rose-700 font-heading text-sm font-medium">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}
