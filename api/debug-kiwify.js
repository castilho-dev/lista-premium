/**
 * Debug da integração Kiwify – só funciona se DEBUG_ACCESS_KEY estiver definido na Vercel.
 * POST { "email": "seu@email.com", "key": "sua-debug-key" }
 * Resposta: tokenOk, salesCount, yourEmailFound, etc. (para descobrir por que o acesso não libera)
 */

export const config = {
  api: { bodyParser: true },
}

const KIWIFY_API = 'https://public-api.kiwify.com/v1'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const expectedKey = process.env.DEBUG_ACCESS_KEY
  if (!expectedKey) {
    res.status(404).json({ error: 'Debug não habilitado' })
    return
  }

  const body = req.body || {}
  const key = body.key || req.headers['x-debug-key'] || ''
  if (key !== expectedKey) {
    res.status(401).json({ error: 'Chave inválida' })
    return
  }

  const email = (body.email || '').trim().toLowerCase()
  if (!email) {
    res.status(400).json({ error: 'Envie { "email": "seu@email.com", "key": "..." }' })
    return
  }

  const debug = {
    tokenOk: false,
    accountIdSet: false,
    productIdSet: false,
    salesCount: 0,
    yourEmailFound: false,
    error: null,
  }

  try {
    const clientId = process.env.KIWIFY_CLIENT_ID
    const clientSecret = process.env.KIWIFY_CLIENT_SECRET
    const accountId = process.env.KIWIFY_ACCOUNT_ID
    const productId = (process.env.KIWIFY_PRODUCT_ID || '').trim()

    debug.accountIdSet = Boolean(accountId)
    debug.productIdSet = Boolean(productId)

    const tokenRes = await fetch(`${KIWIFY_API}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret }),
    })

    if (!tokenRes.ok) {
      const text = await tokenRes.text()
      debug.error = `Token: ${tokenRes.status} ${text.slice(0, 200)}`
      return res.status(200).json({ debug })
    }

    const tokenData = await tokenRes.json()
    const token = tokenData.access_token
    if (!token) {
      debug.error = 'Resposta da Kiwify sem access_token'
      return res.status(200).json({ debug })
    }

    debug.tokenOk = true

    const end = new Date()
    const start = new Date()
    start.setDate(start.getDate() - 90)
    const startDate = start.toISOString().slice(0, 10)
    const endDate = end.toISOString().slice(0, 10)

    const url = new URL(`${KIWIFY_API}/sales`)
    url.searchParams.set('start_date', startDate)
    url.searchParams.set('end_date', endDate)
    // Sem filtro de status (consideramos paid e approved no check-access)
    url.searchParams.set('page_number', '1')
    url.searchParams.set('page_size', '50')
    if (productId) url.searchParams.set('product_id', productId)

    const salesRes = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-kiwify-account-id': accountId,
      },
    })

    if (!salesRes.ok) {
      debug.error = `Vendas: ${salesRes.status} ${await salesRes.text().then((t) => t.slice(0, 200))}`
      return res.status(200).json({ debug })
    }

    const salesData = await salesRes.json()
    const sales = salesData.data || []
    debug.salesCount = sales.length
    const statusOk = (s) => s === 'paid' || s === 'approved'

    for (const sale of sales) {
      if (!statusOk(sale.status)) continue
      if (sale.refunded_at != null && sale.refunded_at !== '') continue
      const saleEmail = (sale.customer && sale.customer.email) || ''
      if (saleEmail.trim().toLowerCase() === email) {
        debug.yourEmailFound = true
        break
      }
    }

    res.status(200).json({ debug })
  } catch (err) {
    debug.error = err.message || String(err)
    res.status(200).json({ debug })
  }
}
