import { Instagram, MapPin, Globe } from 'lucide-react'
import WhatsAppBrandIcon from '../icons/WhatsAppBrandIcon'
import { nomeExibivel, type Fornecedor } from '../../data/fornecedores'

function getInstagramUsername(instaUrl: string | undefined): string | null {
  if (!instaUrl?.trim()) return null
  try {
    const url = instaUrl.startsWith('http') ? instaUrl : `https://${instaUrl}`
    const parsed = new URL(url)
    if (!/instagram\.com|instagr\.am/i.test(parsed.hostname)) return null
    const p = parsed.pathname.replace(/^\/+|\/+$/g, '').split('/')[0]
    return p || null
  } catch {
    return null
  }
}

function openUrl(url: string) {
  const href = url.startsWith('http') ? url : `https://${url}`
  window.open(href, '_blank', 'noopener,noreferrer')
}

function openAddress(address: string) {
  if (address.startsWith('http')) {
    window.open(address, '_blank', 'noopener,noreferrer')
  } else {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank', 'noopener,noreferrer')
  }
}

export type FornecedorCardProps = {
  supplier: Fornecedor
  displayIndex: number
}

const headerThemes = [
  'from-rose-100/90 via-rose-50/80 to-cream-200',
  'from-amber-100/70 via-cream-200 to-white',
  'from-violet-100/50 via-fuchsia-50/40 to-cream-200',
] as const

function CardHeaderArt({ seed }: { seed: number }) {
  const r = (seed % 7) + 3
  return (
    <svg className="absolute right-0 top-0 h-32 w-32 -translate-y-2 translate-x-4 text-[#D4AF37]/15" viewBox="0 0 100 100" fill="none" aria-hidden>
      <circle cx="70" cy="28" r={r * 3} fill="currentColor" className="text-[#D5004D]/10" />
      <circle cx="40" cy="70" r="18" stroke="currentColor" strokeWidth="1.2" className="text-[#D4AF37]/25" />
      <path d="M10 55 Q35 35 55 55 T95 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#D5004D]/15" />
    </svg>
  )
}

/**
 * Card luxuoso: nome Playfair, badge #ID, rodapé só com ícones (sem texto nos botões).
 */
export default function FornecedorCard({ supplier, displayIndex }: FornecedorCardProps) {
  const nome = nomeExibivel(supplier)
  const idStr = String(displayIndex).padStart(2, '0')
  const instaUser = getInstagramUsername(supplier.insta)
  const instaHref = instaUser
    ? supplier.insta?.startsWith('http')
      ? supplier.insta
      : `https://instagram.com/${instaUser}`
    : null
  const hasPhone = Boolean(supplier.phone?.trim())
  const hasAddress = Boolean(supplier.address?.trim())
  const hasSite = Boolean(supplier.site?.trim())

  const theme = headerThemes[displayIndex % headerThemes.length]

  const iconBtn =
    'group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100/90 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#D5004D] hover:text-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]'

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/12 bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/28 hover:shadow-[0_24px_56px_-24px_rgba(213,0,77,0.1)]">
      <div className={`relative min-h-[120px] bg-gradient-to-br ${theme} px-6 pb-5 pt-6`}>
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D5004D\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <CardHeaderArt seed={displayIndex} />
        <span className="relative inline-flex items-center rounded-full border border-[#D5004D]/20 bg-white/80 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#D5004D] shadow-sm backdrop-blur-sm">
          #{idStr}
        </span>
        <h2 className="relative mt-4 max-w-[95%] font-display text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">{nome}</h2>
      </div>

      <div className="relative mt-auto border-t border-gray-100/90 bg-gradient-to-b from-cream-200/80 to-white px-5 py-5">
        <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
          {instaHref && (
            <a href={instaHref} target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label={`Instagram — ${nome}`}>
              <Instagram className="h-5 w-5" strokeWidth={2} />
            </a>
          )}
          {hasPhone && (
            <button type="button" onClick={() => openUrl(supplier.phone!)} className={iconBtn} aria-label={`WhatsApp — ${nome}`}>
              <WhatsAppBrandIcon className="h-[22px] w-[22px]" />
            </button>
          )}
          {hasAddress && (
            <button type="button" onClick={() => openAddress(supplier.address!)} className={iconBtn} aria-label={`Endereço no mapa — ${nome}`}>
              <MapPin className="h-5 w-5" strokeWidth={2} />
            </button>
          )}
          {hasSite && (
            <button type="button" onClick={() => openUrl(supplier.site!)} className={iconBtn} aria-label={`Site — ${nome}`}>
              <Globe className="h-5 w-5" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
