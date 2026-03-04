import { useState } from 'react'
import { Link } from 'react-router-dom'
import { fornecedores, nomeExibivel, iniciaisFornecedor, type Fornecedor } from '../data/fornecedores'

function searchSuppliers(query: string): Fornecedor[] {
  const q = (query || '').toLowerCase().trim()
  if (!q) return fornecedores
  return fornecedores.filter((s) => {
    const fields = [s.name || '', s.insta || '', s.phone || '', s.address || '', s.site || ''].join(' ').toLowerCase()
    return fields.includes(q)
  })
}

const IconInstagram = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const IconWhatsApp = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconEndereco = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconSite = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)
const IconPhoto = () => (
  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
)

function PhotoSlot({ src }: { src: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden relative flex items-center justify-center">
      {!failed ? (
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : null}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-hidden>
          <IconPhoto />
        </div>
      )}
    </div>
  )
}

function Card({ s, id }: { s: Fornecedor; id: number }) {
  const nome = nomeExibivel(s)
  const iniciais = iniciaisFornecedor(s)
  const idStr = String(id).padStart(2, '0')

  const [avatarError, setAvatarError] = useState(false)
  const avatarSrc = s.avatarUrl || `/fornecedores/id${idStr}/avatar.jpg`

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

  const hasInsta = Boolean(s.insta?.trim())
  const hasPhone = Boolean(s.phone?.trim())
  const hasAddress = Boolean(s.address?.trim())
  const hasSite = Boolean(s.site?.trim())

  const btnBase = 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors '
  const btnEnabled = {
    insta: 'bg-gray-100 text-gray-700 hover:bg-rose-50 hover:text-rose-700 cursor-pointer',
    phone: 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 cursor-pointer',
    address: 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer',
    site: 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer',
  }
  const btnDisabled = 'bg-gray-50 text-gray-400 cursor-not-allowed pointer-events-none'

  const getPhotoSrc = (i: number) => s.photoUrls?.[i] ?? `/fornecedores/id${idStr}/${i + 1}.jpg`

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:border-rose-200 hover:shadow-md transition-all">
      {/* Header: avatar + nome + ID + 4 botões */}
      <div className="p-4 flex gap-4">
        <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 overflow-hidden font-display font-bold text-lg">
          {!avatarError ? (
            <img
              src={avatarSrc}
              alt=""
              className="w-full h-full object-cover"
              onError={() => setAvatarError(true)}
            />
          ) : (
            <span>{iniciais}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-semibold text-gray-800 truncate">{nome}</h3>
          <p className="text-xs text-gray-500 mt-0.5">ID: {idStr}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              type="button"
              onClick={() => hasInsta && openLink(s.insta)}
              disabled={!hasInsta}
              className={btnBase + (hasInsta ? btnEnabled.insta : btnDisabled)}
              title={hasInsta ? 'Instagram' : 'Instagram não disponível'}
            >
              <IconInstagram />
              Instagram
            </button>
            <button
              type="button"
              onClick={() => hasPhone && openLink(s.phone)}
              disabled={!hasPhone}
              className={btnBase + (hasPhone ? btnEnabled.phone : btnDisabled)}
              title={hasPhone ? 'WhatsApp' : 'WhatsApp não disponível'}
            >
              <IconWhatsApp />
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => hasAddress && openAddress(s.address)}
              disabled={!hasAddress}
              className={btnBase + (hasAddress ? btnEnabled.address : btnDisabled)}
              title={hasAddress ? 'Endereço' : 'Endereço não disponível'}
            >
              <IconEndereco />
              Endereço
            </button>
            <button
              type="button"
              onClick={() => hasSite && openLink(s.site)}
              disabled={!hasSite}
              className={btnBase + (hasSite ? btnEnabled.site : btnDisabled)}
              title={hasSite ? 'Site' : 'Site não disponível'}
            >
              <IconSite />
              Site
            </button>
          </div>
        </div>
      </div>

      {/* Grid 3x2 com 6 imagens de posts */}
      <div className="grid grid-cols-3 gap-1 sm:gap-2 p-4 pt-0">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <PhotoSlot key={i} src={getPhotoSrc(i)} />
        ))}
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

        {/* O que é isso? */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-8">
          <h2 className="font-heading font-bold text-lg text-gray-800 mb-2">O que é isso?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Esta é uma <strong>lista de fornecedores</strong> de maquiagem e cosméticos para você comprar direto da fonte, seja no <strong>atacado ou varejo</strong>!
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold flex-shrink-0">1</div>
              <div>
                <strong className="text-gray-800 text-sm">Escolha um fornecedor</strong>
                <span className="block text-gray-500 text-xs mt-0.5">Navegue pela lista abaixo e encontre fornecedores de maquiagem</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold flex-shrink-0">2</div>
              <div>
                <strong className="text-gray-800 text-sm">Clique nos botões</strong>
                <span className="block text-gray-500 text-xs mt-0.5">Acesse o Instagram, WhatsApp, site ou endereço do fornecedor</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold flex-shrink-0">3</div>
              <div>
                <strong className="text-gray-800 text-sm">Compre direto</strong>
                <span className="block text-gray-500 text-xs mt-0.5">Negocie e compre produtos no atacado ou varejo para revender</span>
              </div>
            </div>
          </div>
        </section>

        {/* Barra de busca + link Calculadora */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Buscar por fornecedor, Instagram, cidade ou parte do link..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
              aria-label="Buscar fornecedores"
            />
          </div>
          <Link
            to="/calculadora"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-500 text-white font-heading font-medium text-sm hover:bg-rose-600 transition-colors whitespace-nowrap"
          >
            Calculadora
          </Link>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          <strong>{list.length}</strong> fornecedor{list.length !== 1 ? 'es' : ''} {isFiltered ? 'encontrado' + (list.length !== 1 ? 's' : '') : 'disponíveis'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((s, idx) => (
            <Card key={s.insta || `f-${idx}`} s={s} id={fornecedores.indexOf(s) + 1} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-gray-500 py-8">Nenhum fornecedor encontrado. Tente outro termo na busca.</p>
        )}

        <Link to="/" className="inline-block mt-8 text-rose-600 hover:text-rose-700 font-heading text-sm font-medium">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}
