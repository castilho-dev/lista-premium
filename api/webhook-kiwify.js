/**
 * Webhook da Kiwify - recebe Compra aprovada, Reembolso, etc.
 * URL na Kiwify: https://seu-dominio.vercel.app/api/webhook-kiwify
 * Em produção você pode validar o token (req.headers['x-webhook-token']) e salvar em DB.
 */

export const config = {
  api: { bodyParser: true },
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
    const body = req.body || {}
    const incomingToken = req.headers['x-webhook-token'] || req.headers['x-kiwify-token'] || ''
    const expectedToken = process.env.KIWIFY_WEBHOOK_TOKEN || ''

    if (expectedToken && incomingToken !== expectedToken) {
      console.warn('[webhook-kiwify] token inválido ou ausente')
      res.status(401).json({ error: 'Token inválido' })
      return
    }

    // TODO: se evento for compra aprovada -> salvar email como "tem acesso"
    // TODO: se evento for reembolso -> remover email do acesso

    console.log('[webhook-kiwify]', new Date().toISOString(), body)

    res.status(200).json({ received: true })
  } catch (err) {
    console.error('[webhook-kiwify]', err)
    res.status(500).json({ error: 'Erro interno' })
  }
}
