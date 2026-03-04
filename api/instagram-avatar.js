/**
 * Proxy para foto de perfil do Instagram (evita CORS e permite cache).
 * GET /api/instagram-avatar?username=afife.oficial
 * Opcional: header x-api-key com MICROLINK_API_KEY para Unavatar (Instagram).
 */

const UNAVATAR_URL = 'https://unavatar.io/instagram'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const username = (req.query.username || '').toString().trim()
  if (!username) {
    return res.status(400).json({ error: 'Query "username" is required' })
  }

  const url = `${UNAVATAR_URL}/${encodeURIComponent(username)}`
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    Accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
  }
  const apiKey = process.env.MICROLINK_API_KEY || process.env.UNAVATAR_API_KEY
  if (apiKey) headers['x-api-key'] = apiKey

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers,
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      return res.status(response.status).end()
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg'
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400')
    res.setHeader('Content-Type', contentType)
    const buffer = Buffer.from(await response.arrayBuffer())
    return res.send(buffer)
  } catch (err) {
    console.error('[instagram-avatar]', err.message)
    return res.status(502).end()
  }
}
