import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Digite seu e-mail.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/check-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.access) {
        navigate('/app/area', { state: { email: trimmed } })
        return
      }
      setError(data.error || 'E-mail não encontrado ou sem acesso. Confira se comprou com este e-mail.')
    } catch {
      setError('Erro ao verificar. Tente de novo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 to-cream-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
            <img
              src="/logo-1.png"
              alt="Lista Premium"
              className="h-20 sm:h-24 w-auto mx-auto mb-8"
            />
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 text-center">
              Acessar minha área
            </h1>
            <p className="mt-2 text-gray-500 text-sm text-center">
              Use o e-mail da compra para entrar.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="block font-heading font-medium text-gray-700 text-sm mb-1.5">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all font-sans text-gray-800 placeholder:text-gray-400 disabled:opacity-60"
                />
              </div>
              {error && (
                <p className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Verificando...' : 'Entrar'}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-gray-500 text-xs">
            Problemas para acessar? Entre em contato:{' '}
            <a href="mailto:fornecedoresmake.list@gmail.com" className="text-rose-600 hover:underline">
              fornecedoresmake.list@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
