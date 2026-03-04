const fs = require('fs')
const path = require('path')

const csvPath = process.argv[2] || path.join(__dirname, '../../fornecedores/fornecedores_completo.csv')
const raw = fs.readFileSync(csvPath, 'utf8')
const lines = raw.split(/\r?\n/).filter(Boolean)
const rows = lines.slice(1)

function parseCSVLine(line) {
  const out = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      inQ = !inQ
      continue
    }
    if (c === ',' && !inQ) {
      out.push(cur.trim())
      cur = ''
      continue
    }
    cur += c
  }
  out.push(cur.trim())
  return out
}

const list = rows.map((line) => {
  const f = parseCSVLine(line)
  return {
    name: (f[0] || '').trim(),
    insta: (f[1] || '').trim(),
    phone: (f[2] || '').trim(),
    address: (f[4] || '').trim(),
    site: (f[5] || '').trim(),
  }
})

function escape(s) {
  if (!s) return ''
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const linesOut = list.map((o) => {
  const parts = []
  if (o.name) parts.push(`name: '${escape(o.name)}'`)
  if (o.insta) parts.push(`insta: '${escape(o.insta)}'`)
  if (o.phone) parts.push(`phone: '${escape(o.phone)}'`)
  if (o.address) parts.push(`address: '${escape(o.address)}'`)
  if (o.site) parts.push(`site: '${escape(o.site)}'`)
  return '  { ' + parts.join(', ') + ' }'
})

const header = `/**
 * Lista de fornecedores (maquiagem e cosméticos).
 * Gerado a partir de fornecedores_completo.csv
 */
export interface Fornecedor {
  name?: string
  insta?: string
  phone?: string
  address?: string
  site?: string
  avatarUrl?: string
  photoUrls?: string[]
}

export const fornecedores: Fornecedor[] = [
${linesOut.join(',\n')},
]

/** Nome exibível a partir do nome ou URL do Instagram */
export function nomeExibivel(s: Fornecedor): string {
  if (s.name && s.name.trim()) return s.name.trim()
  const url = s.insta || ''
  if (!url) return 'Fornecedor'
  try {
    const u = new URL(url.replace(/=.*/, ''))
    const p = u.pathname.replace(/\\//g, '').replace(/[_.]/g, ' ').trim()
    return p ? p.charAt(0).toUpperCase() + p.slice(1) : 'Fornecedor'
  } catch {
    return 'Fornecedor'
  }
}

/** Iniciais para avatar (2 letras) */
export function iniciaisFornecedor(s: Fornecedor): string {
  const nome = nomeExibivel(s)
  const parts = nome.split(/\\s+/).filter(Boolean)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase().slice(0, 2)
  return nome.slice(0, 2).toUpperCase() || '??'
}
`

const outPath = path.join(__dirname, '../src/data/fornecedores.ts')
fs.writeFileSync(outPath, header, 'utf8')
console.log('Written', list.length, 'suppliers to', outPath)
