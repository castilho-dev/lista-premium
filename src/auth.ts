const STORAGE_KEY = 'lista_premium_member'

export interface MemberSession {
  email: string
  name: string | null
}

export function setMemberSession(session: MemberSession): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  } catch {
    // ignore
  }
}

export function getMemberSession(): MemberSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as MemberSession
    if (!data || typeof data.email !== 'string') return null
    return { email: data.email, name: data.name ?? null }
  } catch {
    return null
  }
}

export function clearMemberSession(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function isMemberLoggedIn(): boolean {
  return getMemberSession() !== null
}
