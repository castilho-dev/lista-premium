/**
 * Verifica se o e-mail tem acesso ao conteúdo (comprou e não reembolsou).
 * POST { "email": "cliente@email.com" } -> { "access": true } ou { "access": false }
 *
 * Ordem de verificação:
 * 1. ALLOWED_TEST_EMAILS (env) – lista separada por vírgula para testes
 * 2. API Kiwify – consulta vendas em janelas de 90 dias até 2 anos atrás
 */

export const config = {
  api: { bodyParser: true },
}

const KIWIFY_API = 'https://public-api.kiwify.com/v1'

function getTestEmails() {
  const raw = process.env.ALLOWED_TEST_EMAILS || ''
  return raw
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

async function getKiwifyToken() {
  const clientId = process.env.KIWIFY_CLIENT_ID
  const clientSecret = process.env.KIWIFY_CLIENT_SECRET
  if (!clientId || !clientSecret) return null

  const res = await fetch(`${KIWIFY_API}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret }),
  })
  if (!res.ok) {
    console.error('[check-access] Kiwify token error', res.status, await res.text())
    return null
  }
  const data = await res.json()
  return data.access_token || null
}

const DAYS_TO_LOOK_BACK = 730 // 2 anos; API Kiwify permite no máximo 90 dias por requisição
const WINDOW_DAYS = 90

// Kiwify doc: datas no formato "2020-07-10 15:00:00.000"
function formatKiwifyDate(d, endOfDay = false) {
  const x = new Date(d)
  if (endOfDay) {
    x.setUTCHours(23, 59, 59, 999)
  } else {
    x.setUTCHours(0, 0, 0, 0)
  }
  const Y = x.getUTCFullYear()
  const M = String(x.getUTCMonth() + 1).padStart(2, '0')
  const D = String(x.getUTCDate()).padStart(2, '0')
  const h = String(x.getUTCHours()).padStart(2, '0')
  const m = String(x.getUTCMinutes()).padStart(2, '0')
  const s = String(x.getUTCSeconds()).padStart(2, '0')
  return `${Y}-${M}-${D} ${h}:${m}:${s}.000`
}

async function findEmailInKiwifySales(normalizedEmail) {
  const token = await getKiwifyToken()
  const accountId = process.env.KIWIFY_ACCOUNT_ID
  if (!token || !accountId) return false

  const productId = process.env.KIWIFY_PRODUCT_ID || ''
  const now = new Date()

  // Janelas de 90 dias, de hoje até DAYS_TO_LOOK_BACK atrás
  for (let offset = 0; offset < DAYS_TO_LOOK_BACK; offset += WINDOW_DAYS) {
    const end = new Date(now)
    end.setDate(end.getDate() - offset)
    const start = new Date(now)
    start.setDate(start.getDate() - offset - WINDOW_DAYS)
    const startDate = formatKiwifyDate(start, false)
    const endDate = formatKiwifyDate(end, true)

    let page = 1
    const pageSize = 50

    while (true) {
      const url = new URL(`${KIWIFY_API}/sales`)
      url.searchParams.set('start_date', startDate)
      url.searchParams.set('end_date', endDate)
      // Não filtra por status para não perder vendas "approved" (compra aprovada)
      url.searchParams.set('page_number', String(page))
      url.searchParams.set('page_size', String(pageSize))
      if (productId) url.searchParams.set('product_id', productId)

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-kiwify-account-id': accountId,
        },
      })
      if (!res.ok) {
        console.error('[check-access] Kiwify sales error', res.status, await res.text())
        return false
      }

      const data = await res.json()
      const sales = data.data || []
      const statusOk = (s) => s === 'paid' || s === 'approved'
      for (const sale of sales) {
        if (!statusOk(sale.status)) continue
        if (sale.refunded_at != null && sale.refunded_at !== '') continue
        const email = (sale.customer && sale.customer.email) || ''
        if (email.trim().toLowerCase() === normalizedEmail) return true
      }

      const pagination = data.pagination || {}
      const total = pagination.count != null ? pagination.count : sales.length
      if (sales.length < pageSize || page * pageSize >= total) break
      page += 1
    }
  }

  return false
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const { email } = req.body || {}
    const normalized = typeof email === 'string' ? email.trim().toLowerCase() : ''

    if (!normalized) {
      res.status(400).json({ access: false, error: 'E-mail é obrigatório' })
      return
    }

    const testEmails = getTestEmails()
    if (testEmails.length > 0 && testEmails.includes(normalized)) {
      res.status(200).json({ access: true })
      return
    }

    const hasAccess = await findEmailInKiwifySales(normalized)
    res.status(200).json({ access: hasAccess })
  } catch (err) {
    console.error('[check-access]', err)
    res.status(500).json({ access: false, error: 'Erro ao verificar acesso' })
  }
}
