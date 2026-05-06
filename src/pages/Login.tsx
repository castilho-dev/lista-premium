import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Loader2 } from 'lucide-react'
import Logo from '../components/Logo'
import { setMemberSession } from '../auth'
import { SUPPORT_EMAIL } from '../constants'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isDev = import.meta.env.DEV

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setError('Informe um e-mail válido.')
      return
    }
    setLoading(true)
    try {
      let access = false
      let name: string | undefined

      try {
        const res = await fetch('/api/check-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed }),
        })
        if (res.ok) {
          const data = await res.json()
          access = !!data?.access
          name = data?.customer?.name
        }
      } catch {
        // fallback handled below
      }

      if (!access && isDev) access = true

      if (!access) {
        setError('E-mail não encontrado. Verifique ou contate o suporte.')
        return
      }

      setMemberSession({ email: trimmed, name })
      navigate('/inicio', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  const entrarDev = () => {
    setMemberSession({ email: 'dev@listapremium.local', name: 'Convidada' })
    navigate('/inicio', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#EADBC5] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#F5E6D0] blur-3xl" />
      </div>

      <div className="relative flex-1 flex items-center justify-center px-5 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <div className="flex flex-col items-center text-center">
            <Logo size={56} />
            <p className="mt-6 text-[11px] tracking-[0.4em] uppercase text-[#8C5E33] font-medium">
              Área de Membros
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-serif font-medium tracking-tight text-neutral-900">
              Lista Premium
            </h1>
            <p className="mt-3 text-sm text-neutral-500 max-w-xs leading-relaxed">
              Acesse com o e-mail utilizado na compra para entrar no seu diretório exclusivo.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-white rounded-2xl shadow-xl shadow-amber-900/5 border border-neutral-200/70 p-6 md:p-7"
          >
            <label className="block">
              <span className="block text-xs font-medium text-neutral-600 mb-1.5">E-mail</span>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="email"
                  autoFocus
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#FAF7F2] border border-neutral-200 focus:border-[#B88A56] focus:ring-4 focus:ring-[#B88A56]/10 outline-none text-sm transition-all"
                />
              </div>
            </label>

            {error && (
              <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-xs text-rose-600">
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.99] disabled:opacity-70 transition-all"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Entrar
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {isDev && (
              <button
                type="button"
                onClick={entrarDev}
                className="mt-3 w-full text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                Entrar sem login (dev)
              </button>
            )}
          </form>

          <p className="mt-8 text-center text-xs text-neutral-500">
            Problemas para acessar? Fale com{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#8C5E33] font-medium hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
