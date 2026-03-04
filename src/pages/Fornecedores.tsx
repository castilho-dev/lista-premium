import { useState, useMemo } from 'react'
import { fornecedores, nomeExibivel, type Fornecedor } from '../data/fornecedores'

/** Extrai o username do Instagram a partir da URL (ex: instagram.com/afife.oficial -> afife.oficial) */
function getInstagramUsername(instaUrl: string | undefined): string | null {
  if (!instaUrl?.trim()) return null
  try {
    const url = instaUrl.startsWith('http') ? instaUrl : `https://${instaUrl}`
    const parsed = new URL(url)
    if (!/instagram\.com|instagr\.am/i.test(parsed.hostname)) return null
    const path = parsed.pathname.replace(/^\/+|\/+$/g, '').split('/')[0]
    return path || null
  } catch {
    return null
  }
}

function searchSuppliers(query: string): Fornecedor[] {
  const q = (query || '').toLowerCase().trim()
  if (!q) return fornecedores
  return fornecedores.filter((s) => {
    const fields = [s.name || '', s.insta || '', s.phone || '', s.address || '', s.site || ''].join(' ').toLowerCase()
    return fields.includes(q)
  })
}

const IconInstagram = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)
const IconWhatsApp = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
const IconEndereco = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconSite = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

function Card({ s, id }: { s: Fornecedor; id: number }) {
  const nome = nomeExibivel(s)
  const idStr = String(id).padStart(2, '0')
  const instaUsername = getInstagramUsername(s.insta)

  const openLink = (url: string | undefined) => {
    if (!url) return
    const href = url.startsWith('http') ? url : `https://${url}`
    window.open(href, '_blank', 'noopener,noreferrer')
  }
  const openAddress = (address: string | undefined) => {
    if (!address) return
    if (address.startsWith('http')) {
      window.open(address, '_blank', 'noopener,noreferrer')
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank', 'noopener,noreferrer')
    }
  }

  const hasPhone = Boolean(s.phone?.trim())
  const hasAddress = Boolean(s.address?.trim())
  const hasSite = Boolean(s.site?.trim())

  return (
    <article className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden hover:shadow-md hover:border-rose-200/80 transition-all duration-200">
      <div className="p-5 sm:p-6">
        {/* Nome + ID */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight">{nome}</h3>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded shrink-0">#{idStr}</span>
        </div>

        {/* @ Instagram com cores e ícone */}
        {instaUsername && (
          <div className="mb-4">
            <a
              href={s.insta?.startsWith('http') ? s.insta : `https://instagram.com/${instaUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <IconInstagram />
              <span>@{instaUsername}</span>
            </a>
          </div>
        )}

        {/* WhatsApp, Endereço, Site */}
        <div className="space-y-2.5">
          {hasPhone && (
            <button
              type="button"
              onClick={() => openLink(s.phone)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 text-green-800 hover:bg-green-100 transition-colors text-left"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500/15 text-green-600 shrink-0">
                <IconWhatsApp />
              </span>
              <span className="text-sm font-medium">WhatsApp</span>
            </button>
          )}
          {hasAddress && (
            <button
              type="button"
              onClick={() => openAddress(s.address)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors text-left"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-200/80 text-slate-600 shrink-0">
                <IconEndereco />
              </span>
              <span className="text-sm font-medium truncate">{s.address}</span>
            </button>
          )}
          {hasSite && (
            <button
              type="button"
              onClick={() => openLink(s.site)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors text-left"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/15 text-amber-600 shrink-0">
                <IconSite />
              </span>
              <span className="text-sm font-medium truncate">Site / Link</span>
            </button>
          )}
        </div>

        {!hasPhone && !hasAddress && !hasSite && (
          <p className="text-sm text-gray-400 italic">Apenas Instagram disponível</p>
        )}
      </div>
    </article>
  )
}

export default function Fornecedores() {
  const [query, setQuery] = useState('')
  const list = useMemo(() => searchSuppliers(query), [query])
  const isFiltered = query.trim() !== ''

  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-l-4 border-rose-500/60 pl-6 mb-8">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Lista de Fornecedores
          </h1>
          <p className="mt-1 text-gray-500 text-sm">Lista Premium — maquiagem e cosméticos</p>
        </div>

        <div className="mb-6">
          <input
            type="search"
            placeholder="Buscar por nome, @ do Instagram, cidade..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
            aria-label="Buscar fornecedores"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">
          <strong>{list.length}</strong> fornecedor{list.length !== 1 ? 'es' : ''} {isFiltered ? 'encontrado' + (list.length !== 1 ? 's' : '') : 'disponíveis'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((s: Fornecedor, idx: number) => (
            <Card key={s.insta || `f-${idx}`} s={s} id={fornecedores.indexOf(s) + 1} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-gray-500 py-8">Nenhum fornecedor encontrado. Tente outro termo na busca.</p>
        )}
      </div>
    </div>
  )
}
