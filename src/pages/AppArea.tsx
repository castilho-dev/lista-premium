import { Link, useLocation } from 'react-router-dom'

export default function AppArea() {
  const location = useLocation()
  const email = (location.state as { email?: string })?.email

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 to-cream-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-rose-600 text-sm font-heading font-medium mb-8 transition-colors"
          >
            ← Voltar ao site
          </Link>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-800">
              Acesso liberado
            </h1>
            {email && (
              <p className="mt-2 text-gray-500 text-sm">
                Logado com <span className="font-medium text-gray-700">{email}</span>
              </p>
            )}
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Em breve você terá aqui o conteúdo exclusivo da Lista Premium.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 btn-primary"
            >
              Ir para o site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
