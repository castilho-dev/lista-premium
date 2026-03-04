import { Link } from 'react-router-dom'

export default function WhatsAppLucrativo() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-l-4 border-rose-500/60 pl-6 mb-8">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            WhatsApp Lucrativo
          </h1>
          <p className="mt-1 text-gray-500 text-sm">Lista Premium</p>
        </div>

        <div className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100">
          <iframe
            title="WhatsApp Lucrativo - visualização"
            src="/pdf/whatsapp-lucrativo.pdf#toolbar=0"
            className="w-full h-[calc(100vh-12rem)] min-h-[500px] border-0"
          />
        </div>

        <Link to="/" className="inline-block mt-8 text-rose-600 hover:text-rose-700 font-heading text-sm font-medium">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}
