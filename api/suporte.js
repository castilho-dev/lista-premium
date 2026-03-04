/**
 * Envio do formulário de suporte para o e-mail da Lista Premium.
 * POST /api/suporte { "title": "...", "message": "..." }
 * Requer RESEND_API_KEY na Vercel (Resend.com).
 * Para enviar a e-mails externos (ex.: Gmail), é obrigatório verificar um domínio no Resend
 * e definir SUPPORT_FROM_EMAIL (ex.: Suporte <suporte@seudominio.com>).
 * Sem domínio verificado, o Resend só permite enviar para o e-mail da sua conta.
 */

const RESEND_URL = 'https://api.resend.com/emails'
const TO_EMAIL = 'fornecedoresmake.list@gmail.com'
const FROM_EMAIL_DEFAULT = 'Lista Premium <onboarding@resend.dev>'

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

  const fromEmail = (process.env.SUPPORT_FROM_EMAIL || '').trim() || FROM_EMAIL_DEFAULT

  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [TO_EMAIL],
        subject: `[Suporte Lista Premium] ${title}`,
        text: message,
      }),
      signal: AbortSignal.timeout(10000),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const msg = data.message || data.msg || data.error?.message || response.statusText
      console.error('[suporte] Resend', response.status, msg, data)

      let userMessage = msg
      if (response.status === 403 && /domain|verify|send.*own/i.test(String(msg))) {
        userMessage =
          'Para enviar a este e-mail é preciso verificar um domínio no Resend (resend.com/domains) e definir SUPPORT_FROM_EMAIL na Vercel com um e-mail desse domínio (ex: Suporte <suporte@seudominio.com>).'
      }

      return res.status(response.status).json({
        error: 'Falha ao enviar e-mail',
        detail: userMessage,
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
