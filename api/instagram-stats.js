/**
 * Dados do perfil Instagram da sua conta (via Instagram Graph API).
 * Usa INSTAGRAM_ACCESS_TOKEN (token de usuário com página + IG vinculado).
 * GET /api/instagram-stats → { username, followers_count, media_count, profile_picture_url, ... }
 */

const GRAPH = 'https://graph.facebook.com/v21.0'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) {
    return res.status(503).json({
      error: 'Instagram não configurado',
      detail: 'Defina INSTAGRAM_ACCESS_TOKEN na Vercel.',
    })
  }

  try {
    // 1) Páginas do Facebook do usuário (com conta IG vinculada)
    const pagesRes = await fetch(
      `${GRAPH}/me/accounts?fields=id,name,instagram_business_account&access_token=${encodeURIComponent(token)}`,
      { signal: AbortSignal.timeout(10000) }
    )
    const pagesData = await pagesRes.json()
    if (!pagesRes.ok) {
      return res.status(pagesRes.status).json({
        error: 'Falha ao obter páginas',
        detail: pagesData.error?.message || pagesRes.statusText,
      })
    }

    const pages = pagesData.data || []
    const pageWithIg = pages.find((p) => p.instagram_business_account?.id)
    if (!pageWithIg?.instagram_business_account?.id) {
      return res.status(503).json({
        error: 'Nenhuma conta Instagram vinculada',
        detail: 'Conecte uma conta Instagram Business/Creator à sua Página do Facebook.',
      })
    }

    const igUserId = pageWithIg.instagram_business_account.id

    // 2) Perfil da conta Instagram (seguidores, publicações, etc.)
    const fields = 'id,username,profile_picture_url,followers_count,media_count,follows_count'
    const igRes = await fetch(
      `${GRAPH}/${igUserId}?fields=${fields}&access_token=${encodeURIComponent(token)}`,
      { signal: AbortSignal.timeout(10000) }
    )
    const igData = await igRes.json()
    if (!igRes.ok) {
      return res.status(igRes.status).json({
        error: 'Falha ao obter perfil Instagram',
        detail: igData.error?.message || igRes.statusText,
      })
    }

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    return res.status(200).json({
      username: igData.username,
      profile_picture_url: igData.profile_picture_url,
      followers_count: igData.followers_count ?? 0,
      media_count: igData.media_count ?? 0,
      follows_count: igData.follows_count ?? 0,
      id: igData.id,
    })
  } catch (err) {
    console.error('[instagram-stats]', err.message)
    return res.status(502).json({
      error: 'Erro ao consultar Instagram',
      detail: err.message,
    })
  }
}
