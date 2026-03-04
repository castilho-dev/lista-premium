/**
 * Envio do formulário de suporte para o e-mail da Lista Premium.
 * POST /api/suporte { "title": "...", "message": "..." }
 * Requer RESEND_API_KEY na Vercel (Resend.com).
 */

const RESEND_URL = 'https://api.resend.com/emails'
const TO_EMAIL = 'fornecedoresmake.list@gmail.com'
const FROM_EMAIL = 'Lista Premium <onboarding@resend.dev>'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'Envio de e-mail não configurado',
      detail: 'Defina RESEND_API_KEY na Vercel (resend.com).',
    })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
  } catch {
    return res.status(400).json({ error: 'Body JSON inválido' })
  }

  const title = (body.title || '').toString().trim()
  const message = (body.message || '').toString().trim()

  if (!title || !message) {
    return res.status(400).json({ error: 'Envie "title" e "message".' })
  }

  if (title.length > 200) {
    return res.status(400).json({ error: 'Título com no máximo 200 caracteres.' })
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Mensagem com no máximo 5000 caracteres.' })
  }

  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `[Suporte Lista Premium] ${title}`,
        text: message,
      }),
      signal: AbortSignal.timeout(10000),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error('[suporte] Resend error', response.status, data)
      return res.status(response.status).json({
        error: 'Falha ao enviar e-mail',
        detail: data.message || data.msg || response.statusText,
      })
    }

    return res.status(200).json({ ok: true, id: data.id })
  } catch (err) {
    console.error('[suporte]', err.message)
    return res.status(502).json({
      error: 'Erro ao enviar',
      detail: err.message,
    })
  }
}
