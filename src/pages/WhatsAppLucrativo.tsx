const PDF_URL = '/pdf/whatsapp-lucrativo.pdf'

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

        <a
          href={`${PDF_URL}#toolbar=0`}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700"
        >
          Abrir PDF em nova aba (recomendado no celular)
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <div
          className="rounded-xl bg-white shadow-lg border border-gray-100 overflow-auto"
          style={{ WebkitOverflowScrolling: 'touch', minHeight: 'min(500px, 70vh)' }}
        >
          <iframe
            title="WhatsApp Lucrativo - visualização"
            src={`${PDF_URL}#toolbar=0`}
            className="w-full border-0"
            style={{ minHeight: 'min(500px, 70vh)', height: 'calc(100vh - 12rem)' }}
          />
        </div>
      </div>
    </div>
  )
}
