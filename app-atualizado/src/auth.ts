const KEY = 'lista_premium_member';

export type MemberSession = {
  email: string;
  name?: string;
};

export function getMemberSession(): MemberSession | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MemberSession;
  } catch {
    return null;
  }
}

export function setMemberSession(session: MemberSession) {
  sessionStorage.setItem(KEY, JSON.stringify(session));
}

export function clearMemberSession() {
  sessionStorage.removeItem(KEY);
}

export function isAuthenticated(): boolean {
  return !!getMemberSession();
}

export function firstName(name?: string): string {
  if (!name) return '';
  return name.trim().split(/\s+/)[0] ?? '';
}
