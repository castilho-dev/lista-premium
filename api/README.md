# APIs (Vercel)

## check-access – verificação de acesso por e-mail

Acesso é liberado pela **API Kiwify** (vendas pagas, sem reembolso). O webhook não é usado para liberar acesso.

### Variáveis na Vercel

Em **Settings → Environment Variables** use:

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `KIWIFY_CLIENT_ID` | Sim | Client ID da integração API (Kiwify) |
| `KIWIFY_CLIENT_SECRET` | Sim | Client Secret da integração |
| `KIWIFY_ACCOUNT_ID` | Sim | Account ID (header `x-kiwify-account-id`) |
| `KIWIFY_PRODUCT_ID` | Não | ID do produto; se vazio, considera todas as vendas pagas |
| `ALLOWED_TEST_EMAILS` | Não | E-mails que recebem acesso sem consultar a API (separados por vírgula) |

A verificação consulta vendas em janelas de 90 dias (limite da API) e vai até **2 anos atrás**. Considera vendas com status **paid** ou **approved** (e sem reembolso). Se você tiver `KIWIFY_PRODUCT_ID` e não aparecer venda, remova essa variável para listar todas as vendas da conta.

### Debug – acesso não liberando

1. Na Vercel, crie a variável **`DEBUG_ACCESS_KEY`** com um valor secreto qualquer (ex.: `minha-chave-debug-123`).
2. Faça deploy e chame a API de debug:

```bash
curl -X POST https://listapremium.vercel.app/api/debug-kiwify \
  -H "Content-Type: application/json" \
  -d '{"email":"seu@email.com","key":"minha-chave-debug-123"}'
```

3. A resposta traz:
   - **tokenOk**: se as credenciais da Kiwify estão ok
   - **accountIdSet**: se `KIWIFY_ACCOUNT_ID` está definido
   - **productIdSet**: se você está filtrando por produto (se estiver e for o ID errado, pode zerar vendas)
   - **salesCount**: quantas vendas vieram na primeira página (últimos 90 dias)
   - **yourEmailFound**: se seu e-mail apareceu nessa página
   - **error**: mensagem se algo falhou

Se `tokenOk` for false, revise Client ID / Client Secret. Se `salesCount` for 0 e você tem venda, **remova** `KIWIFY_PRODUCT_ID` (deixe em branco) para listar todas as vendas. Depois de resolver, remova `DEBUG_ACCESS_KEY` se quiser.

---

## instagram-avatar – proxy da foto de perfil do Instagram

Usado na página de Fornecedores para exibir a foto de perfil de cada fornecedor a partir do @ do Instagram.

- **GET** `/api/instagram-avatar?username=afife.oficial` → retorna a imagem (ou 404/502).

### Variáveis opcionais

| Variável | Descrição |
|----------|-----------|
| `MICROLINK_API_KEY` ou `UNAVATAR_API_KEY` | Chave do [Microlink](https://microlink.io) para uso do Unavatar com Instagram (plano Pro). Sem a chave, o Unavatar pode não retornar foto para Instagram. |

Se as fotos não aparecerem, você pode: (1) adicionar a chave acima na Vercel; ou (2) preencher o campo `avatarUrl` de cada fornecedor no dado (CSV/`fornecedores.ts`) com uma URL direta da imagem.

**Sobre os 6 posts:** o Instagram não oferece API pública para listar posts. Para exibir fotos de posts, preencha o campo `photoUrls` (até 6 URLs) no dado do fornecedor, ou coloque imagens em `public/fornecedores/id01/1.jpg` … `6.jpg` (e id02, id03, etc.).
