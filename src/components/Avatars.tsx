/**
 * Avatares ilustrados (personagens femininos) para a área do usuário.
 * Cada um é um SVG com viewBox 0 0 80 80, para usar em círculos.
 */

import React from 'react'

const size = 80

const avatars: { id: string; label: string; component: React.ReactNode }[] = [
  {
    id: '1',
    label: 'Cabelo longo',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        {/* cabelo longo atrás */}
        <path d="M40 12c-12 0-20 10-20 22 0 6 3 11 8 14v18h24V48c5-3 8-8 8-14 0-12-8-22-20-22z" fill="currentColor" opacity="0.9" />
        {/* rosto */}
        <ellipse cx="40" cy="38" rx="14" ry="16" fill="#fce7e7" />
        {/* cabelo na frente - franja */}
        <path d="M28 24 Q40 18 52 24 L48 38 Q40 34 32 38 Z" fill="currentColor" opacity="0.95" />
        {/* olhos */}
        <ellipse cx="35" cy="37" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="45" cy="37" rx="2" ry="2.5" fill="#374151" />
        {/* sorriso */}
        <path d="M35 44 Q40 48 45 44" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: '2',
    label: 'Cabelo cacheado',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        {/* cabelo cacheado */}
        <path d="M40 10c-14 0-24 12-24 26 0 4 1 8 3 11l-2 21h46l-2-21c2-3 3-7 3-11 0-14-10-26-24-26z" fill="currentColor" opacity="0.9" />
        <ellipse cx="40" cy="42" rx="12" ry="14" fill="#fce7e7" />
        <path d="M26 28 Q30 22 38 26 Q44 24 52 28 L50 40 Q40 36 30 40 Z" fill="currentColor" opacity="0.95" />
        <ellipse cx="35" cy="41" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="45" cy="41" rx="2" ry="2.5" fill="#374151" />
        <path d="M35 47 Q40 51 45 47" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* laço */}
        <ellipse cx="40" cy="18" rx="8" ry="5" fill="#e11d48" opacity="0.9" />
        <ellipse cx="40" cy="18" rx="4" ry="3" fill="#fce7e7" />
      </svg>
    ),
  },
  {
    id: '3',
    label: 'Cabelo curto',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        <path d="M40 14c-11 0-18 9-18 20v24h36V34c0-11-7-20-18-20z" fill="currentColor" opacity="0.9" />
        <ellipse cx="40" cy="40" rx="13" ry="15" fill="#fce7e7" />
        <path d="M28 28 Q40 22 52 28 L48 38 Q40 34 32 38 Z" fill="currentColor" opacity="0.95" />
        {/* óculos */}
        <circle cx="35" cy="39" r="5" stroke="#374151" strokeWidth="1.5" fill="none" />
        <circle cx="45" cy="39" r="5" stroke="#374151" strokeWidth="1.5" fill="none" />
        <path d="M40 39 h4" stroke="#374151" strokeWidth="1.5" />
        <ellipse cx="35" cy="39" rx="2" ry="2" fill="#374151" />
        <ellipse cx="45" cy="39" rx="2" ry="2" fill="#374151" />
        <path d="M35 46 Q40 50 45 46" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: '4',
    label: 'Coque',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        <path d="M40 12c-12 0-20 9-20 21 0 5 2 10 6 13v20h28V46c4-3 6-8 6-13 0-12-8-21-20-21z" fill="currentColor" opacity="0.9" />
        <ellipse cx="40" cy="52" rx="14" ry="8" fill="currentColor" opacity="0.85" />
        <ellipse cx="40" cy="38" rx="14" ry="16" fill="#fce7e7" />
        <path d="M26 26 Q40 14 54 26 Q52 32 50 38 Q40 34 30 38 Q28 32 26 26 Z" fill="currentColor" opacity="0.95" />
        <circle cx="40" cy="22" r="9" fill="currentColor" opacity="0.9" />
        <ellipse cx="35" cy="37" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="45" cy="37" rx="2" ry="2.5" fill="#374151" />
        <path d="M35 44 Q40 48 45 44" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* brincos */}
        <circle cx="26" cy="42" r="2.5" fill="#e11d48" opacity="0.8" />
        <circle cx="54" cy="42" r="2.5" fill="#e11d48" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: '5',
    label: 'Lenço',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        {/* lenço */}
        <path d="M20 16 L40 8 L60 16 L60 28 Q40 22 20 28 Z" fill="#e11d48" opacity="0.85" />
        <path d="M40 8 L40 42 L28 48 L20 42 Z" fill="#fce7e7" opacity="0.5" />
        <path d="M40 12c-11 0-18 8-18 18v22h36V30c0-10-7-18-18-18z" fill="currentColor" opacity="0.75" />
        <ellipse cx="40" cy="40" rx="13" ry="15" fill="#fce7e7" />
        <path d="M28 28 Q40 24 52 28 L50 38 Q40 34 30 38 Z" fill="currentColor" opacity="0.8" />
        <ellipse cx="35" cy="39" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="45" cy="39" rx="2" ry="2.5" fill="#374151" />
        <path d="M35 46 Q40 50 45 46" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: '6',
    label: 'Tranças e flor',
    component: (
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full" aria-hidden>
        {/* tranças */}
        <path d="M24 20 Q22 35 26 50 L28 52 Q26 38 28 24 Z" fill="currentColor" opacity="0.9" />
        <path d="M56 20 Q58 35 54 50 L52 52 Q54 38 52 24 Z" fill="currentColor" opacity="0.9" />
        <path d="M40 12c-10 0-18 8-18 18v26h36V30c0-10-8-18-18-18z" fill="currentColor" opacity="0.9" />
        <ellipse cx="40" cy="40" rx="13" ry="15" fill="#fce7e7" />
        <path d="M27 26 Q40 20 53 26 L50 36 Q40 32 30 36 Z" fill="currentColor" opacity="0.95" />
        {/* flor */}
        <circle cx="40" cy="16" r="6" fill="#e11d48" opacity="0.9" />
        <circle cx="34" cy="20" r="4" fill="#fce7e7" />
        <circle cx="46" cy="20" r="4" fill="#fce7e7" />
        <circle cx="40" cy="24" r="4" fill="#fce7e7" />
        <ellipse cx="35" cy="39" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="45" cy="39" rx="2" ry="2.5" fill="#374151" />
        <path d="M35 45 Q40 49 45 45" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
]

const AVATAR_STORAGE_KEY = 'lista-premium-avatar'

export function getStoredAvatarId(email: string): string | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(AVATAR_STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as Record<string, string>
    return data[email] || data.default || null
  } catch {
    return null
  }
}

export function setStoredAvatarId(email: string, avatarId: string): void {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(AVATAR_STORAGE_KEY)
    const data = (raw ? JSON.parse(raw) : {}) as Record<string, string>
    data[email] = avatarId
    localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(data))
  } catch {
    // ignore
  }
}

export function getAvatarById(id: string) {
  if (id === 'initials') return null
  return avatars.find((a) => a.id === id) ?? avatars[0]
}

export const INITIALS_AVATAR_ID = 'initials'

export { avatars }

export function AvatarIcon({
  avatarId,
  className,
  color = 'text-rose-700',
}: {
  avatarId: string
  className?: string
  color?: string
}) {
  const avatar = getAvatarById(avatarId)
  if (!avatar) return null
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-full bg-rose-100 ${color} ${className ?? ''}`}>
      {avatar.component}
    </div>
  )
}
