import { useState } from 'react'

export default function Suporte() {
  const [titulo, setTitulo] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const t = titulo.trim()
    const m = mensagem.trim()
    if (!t || !m) {
      setStatus('error')
      setErrorMsg('Preencha o título e a mensagem.')
      return
    }
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/suporte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: t, message: m }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        const msg = data.detail || data.error || 'Não foi possível enviar. Tente de novo.'
        setErrorMsg(msg)
        return
      }
      setStatus('success')
      setTitulo('')
      setMensagem('')
    } catch {
      setStatus('error')
      setErrorMsg('Erro de conexão. Tente de novo.')
    }
  }

  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-l-4 border-rose-500/60 pl-6 mb-8">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Suporte
          </h1>
          <p className="mt-1 text-gray-500 text-sm">Lista Premium</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
          <p className="text-gray-600 text-sm mb-6">
            Envie sua dúvida ou solicitação. Sua mensagem será enviada para nossa equipe e responderemos em breve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="suporte-titulo" className="block font-heading font-medium text-gray-800 text-sm mb-1.5">
                Título
              </label>
              <input
                id="suporte-titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Dúvida sobre entrega"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
                maxLength={200}
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="suporte-mensagem" className="block font-heading font-medium text-gray-800 text-sm mb-1.5">
                Mensagem
              </label>
              <textarea
                id="suporte-mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Descreva sua dúvida ou pedido..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all resize-y min-h-[120px]"
                maxLength={5000}
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
            )}
            {status === 'success' && (
              <p className="text-sm text-green-700 bg-green-50 px-4 py-2 rounded-lg">
                Mensagem enviada. Responderemos em breve no e-mail da sua compra.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full font-heading font-semibold text-white bg-rose-600 hover:bg-rose-500 disabled:bg-gray-400 py-3.5 px-4 rounded-xl transition-colors"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
