import { useState, useEffect } from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import {
  avatars,
  AvatarIcon,
  getStoredAvatarId,
  setStoredAvatarId,
  INITIALS_AVATAR_ID,
} from '../components/Avatars'
import CalculadoraPrecos from '../components/CalculadoraPrecos'
import { getMemberSession } from '../auth'
import { WHATSAPP_NUMBER } from '../constants'

function getInitials(name: string | null, email: string): string {
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase().slice(0, 2)
    }
    return name.trim().slice(0, 2).toUpperCase()
  }
  const local = email.split('@')[0] || ''
  return local.slice(0, 2).toUpperCase() || '?'
}

export default function AppArea() {
  const location = useLocation()
  const state = location.state as { email?: string; name?: string | null } | null
  const session = getMemberSession()
  const email = state?.email ?? session?.email ?? ''
  const name = state?.name ?? session?.name ?? null

  if (!session && !state?.email) {
    return <Navigate to="/app" replace />
  }
  const displayName = name && name.trim() ? name.trim() : null
  const initials = getInitials(displayName, email)

  const [selectedAvatarId, setSelectedAvatarId] = useState<string>(() =>
    getStoredAvatarId(email) || '1'
  )
  const [showPicker, setShowPicker] = useState(false)

  useEffect(() => {
    const stored = getStoredAvatarId(email)
    if (stored) setSelectedAvatarId(stored)
    else setSelectedAvatarId('1')
  }, [email])

  function handleSelectAvatar(id: string) {
    setSelectedAvatarId(id)
    setStoredAvatarId(email, id)
    setShowPicker(false)
  }

  const showInitials = selectedAvatarId === INITIALS_AVATAR_ID

  const tabs = [
    { id: 'fornecedores', label: 'Fornecedores' },
    { id: 'calculadora', label: 'Calculadora de vendas' },
    { id: 'instagram', label: 'Instagram 10K' },
    { id: 'whatsapp', label: 'WhatsApp Lucrativo' },
  ] as const
  type TabId = (typeof tabs)[number]['id']
  const [activeTab, setActiveTab] = useState<TabId>('fornecedores')

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
            <div className="relative inline-block">
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mx-auto bg-rose-100 text-rose-700">
                {showInitials ? (
                  <span className="font-display font-bold text-2xl">{initials}</span>
                ) : (
                  <AvatarIcon avatarId={selectedAvatarId} className="w-20 h-20" />
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowPicker(true)}
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow hover:bg-rose-600 transition-colors"
                title="Trocar avatar"
                aria-label="Trocar avatar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            {showPicker && (
              <>
                <div
                  className="fixed inset-0 bg-black/40 z-40"
                  aria-hidden
                  onClick={() => setShowPicker(false)}
                />
                <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[min(90vw,320px)] bg-white rounded-2xl shadow-xl p-6">
                  <p className="font-heading font-semibold text-gray-800 mb-4">Escolha seu avatar</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => handleSelectAvatar(INITIALS_AVATAR_ID)}
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all ${
                        selectedAvatarId === INITIALS_AVATAR_ID
                          ? 'ring-2 ring-rose-500 ring-offset-2 bg-rose-50 text-rose-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      title="Iniciais"
                    >
                      {initials}
                    </button>
                    {avatars.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => handleSelectAvatar(a.id)}
                        className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-rose-100 text-rose-700 transition-all ${
                          selectedAvatarId === a.id ? 'ring-2 ring-rose-500 ring-offset-2' : 'hover:bg-rose-200/80'
                        }`}
                        title={a.label}
                      >
                        <AvatarIcon avatarId={a.id} className="w-14 h-14" />
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPicker(false)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Fechar
                  </button>
                </div>
              </>
            )}

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mt-6">
              {displayName ? `Olá, ${displayName}` : 'Acesso liberado'}
            </h1>

            {/* Abas do app */}
            <nav className="mt-6 flex flex-wrap justify-center gap-1" aria-label="Abas do app">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Conteúdo da aba ativa */}
            <div className="mt-6 min-h-[200px] rounded-xl bg-gray-50 border border-gray-100 p-6 text-left">
              {activeTab === 'fornecedores' && (
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">Lista de fornecedores com busca, contatos e links diretos.</p>
                  <Link to="/fornecedores" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-heading font-medium text-sm">
                    Ver lista de fornecedores →
                  </Link>
                </div>
              )}
              {activeTab === 'calculadora' && <CalculadoraPrecos />}
              {activeTab === 'instagram' && (
                <div className="rounded-lg overflow-hidden border border-gray-200 bg-white" style={{ minHeight: 320 }}>
                  <iframe
                    title="Instagram 10K"
                    src="/pdf/instagram10k.pdf#toolbar=0"
                    className="w-full h-[320px] sm:h-[420px]"
                  />
                </div>
              )}
              {activeTab === 'whatsapp' && (
                <div className="rounded-lg overflow-hidden border border-gray-200 bg-white" style={{ minHeight: 320 }}>
                  <iframe
                    title="WhatsApp Lucrativo"
                    src="/pdf/whatsapp-lucrativo.pdf#toolbar=0"
                    className="w-full h-[320px] sm:h-[420px]"
                  />
                </div>
              )}
            </div>

            <Link
              to="/"
              className="inline-block mt-6 text-gray-500 hover:text-rose-600 text-sm font-heading"
            >
              Ir para o site
            </Link>
          </div>
        </div>
      </div>

      {/* Botão WhatsApp suporte - igual do site */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Preciso de suporte na minha área da Lista Premium.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Suporte no WhatsApp"
        title="Precisa de suporte? Fale no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
