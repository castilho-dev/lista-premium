import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  avatars,
  AvatarIcon,
  getStoredAvatarId,
  setStoredAvatarId,
  INITIALS_AVATAR_ID,
} from '../components/Avatars'

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
  const email = state?.email ?? ''
  const name = state?.name ?? null
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
