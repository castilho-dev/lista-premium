/**
 * Verifica se o e-mail tem acesso ao conteúdo (comprou e não reembolsou).
 * POST { "email": "cliente@email.com" } -> { "access": true } ou { "access": false }
 * TODO: consultar banco/lista de e-mails liberados pelo webhook da Kiwify.
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
    const { email } = req.body || {}
    const normalized = typeof email === 'string' ? email.trim().toLowerCase() : ''

    if (!normalized) {
      res.status(400).json({ access: false, error: 'E-mail é obrigatório' })
      return
    }

    // TODO: checar em DB/KV se normalized está na lista de compradores ativos
    // Por enquanto: retorna false (sem acesso). Quando integrar webhook + storage, altere aqui.
    const hasAccess = false

    res.status(200).json({ access: hasAccess })
  } catch (err) {
    console.error('[check-access]', err)
    res.status(500).json({ access: false, error: 'Erro ao verificar acesso' })
  }
}
