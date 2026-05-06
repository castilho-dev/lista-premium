import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { fornecedores, type Fornecedor } from '../../data/fornecedores'
import FornecedorCard from './FornecedorCard'

function searchSuppliers(query: string): Fornecedor[] {
  const q = (query || '').toLowerCase().trim()
  if (!q) return fornecedores
  return fornecedores.filter((s) => {
    const fields = [s.name || '', s.insta || '', s.phone || '', s.address || '', s.site || ''].join(' ').toLowerCase()
    return fields.includes(q)
  })
}

export default function FornecedoresList() {
  const [query, setQuery] = useState('')
  const list = useMemo(() => searchSuppliers(query), [query])
  const filtered = query.trim() !== ''

  return (
    <div className="relative flex min-h-screen flex-col bg-cream-200">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-rose-100/40 via-transparent to-transparent"
        aria-hidden
      />

      <div className="sticky top-24 z-20 border-b border-[#D4AF37]/10 bg-cream-200/90 px-4 py-5 backdrop-blur-md md:top-[4.5rem] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-center md:text-left">
            <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fornecedores</h1>
          </div>

          <label htmlFor="busca-fornecedores" className="sr-only">
            Buscar fornecedores
          </label>
          <div className="relative flex items-center overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03] transition-shadow focus-within:border-[#D4AF37]/40 focus-within:shadow-[0_16px_48px_-16px_rgba(212,175,55,0.15)]">
            <Search className="pointer-events-none absolute left-5 h-5 w-5 text-[#D5004D]/40" strokeWidth={2} aria-hidden />
            <input
              id="busca-fornecedores"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome, produto, estado..."
              className="min-h-[58px] w-full rounded-2xl border-0 bg-transparent py-3.5 pl-14 pr-5 font-heading text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
              autoComplete="off"
            />
          </div>
          {(list.length === 0 || filtered) && (
            <p className="mt-3 text-center font-heading text-sm text-gray-600 md:text-left">
              {list.length === 0
                ? 'Nenhum fornecedor encontrado para essa busca.'
                : `${list.length} resultado${list.length !== 1 ? 's' : ''}`}
            </p>
          )}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {list.map((s, idx) => (
            <FornecedorCard key={s.insta || `f-${idx}`} supplier={s} displayIndex={fornecedores.indexOf(s) + 1} />
          ))}
        </div>

        {list.length === 0 && (
          <div className="mx-auto mt-8 max-w-md rounded-3xl border border-[#D4AF37]/20 bg-white p-10 text-center shadow-[0_20px_50px_-24px_rgba(0,0,0,0.08)]">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D5004D]/10 text-[#D5004D]">
              <Search className="h-7 w-7" strokeWidth={2} aria-hidden />
            </div>
            <p className="font-display text-xl font-semibold text-gray-900">Nenhum fornecedor encontrado</p>
            <p className="mt-2 font-heading text-sm text-gray-600">Tente outro nome, produto ou estado na busca acima.</p>
          </div>
        )}
      </div>
    </div>
  )
}
