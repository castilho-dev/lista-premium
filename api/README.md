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

## suporte – formulário de contato

Envia o formulário da página **Suporte** para o e-mail **fornecedoresmake.list@gmail.com**.

- **POST** `/api/suporte` com body JSON: `{ "title": "Título", "message": "Mensagem" }`.

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `RESEND_API_KEY` | Sim (para este endpoint) | API Key do [Resend](https://resend.com). Crie uma conta, pegue a chave em API Keys e defina na Vercel. O e-mail será enviado de `onboarding@resend.dev` (plano free) para o endereço acima. |

---

## instagram-avatar – proxy da foto de perfil do Instagram (opcional)

A **lista de fornecedores** não usa mais fotos de perfil nem posts; exibe apenas nome, @ do Instagram (com link) e botões para WhatsApp, endereço e site. Este endpoint permanece disponível caso queira usá-lo em outra parte do app.

- **GET** `/api/instagram-avatar?username=afife.oficial` → retorna a imagem (ou 404/502).

Variáveis opcionais: `MICROLINK_API_KEY` ou `UNAVATAR_API_KEY` (Microlink/Unavatar).

### instagram-stats – dados da sua conta (Instagram Graph API)

Retorna dados do perfil Instagram da conta vinculada à sua Página do Facebook (seguidores, publicações, foto, etc.).

- **GET** `/api/instagram-stats` → JSON com `username`, `followers_count`, `media_count`, `profile_picture_url`, `follows_count`, `id`.

A API usa a **Instagram Graph API** (oficial Meta). O token deve ser de um usuário que tenha uma Página do Facebook com conta Instagram Business/Creator vinculada.

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `INSTAGRAM_ACCESS_TOKEN` | Sim (para este endpoint) | Token de acesso da Meta (User Access Token) com a Página e a conta IG vinculada. Configure na Vercel e **nunca** commite no repositório. |

Resposta é cacheada por 5 minutos (`s-maxage=300`) para não estourar limites da API.

---

### Instagram Graph API (oficial Meta)

A **Instagram Graph API** só funciona para contas **Instagram Business ou Creator** vinculadas a uma **Página do Facebook** e que **autorizem seu app** (via Facebook Login). Não é possível consultar perfis públicos de terceiros por username.

- **instagram-stats:** usa o token em `INSTAGRAM_ACCESS_TOKEN` para exibir dados da **sua** conta (ex.: página “Instagram 10K”).
- A lista de fornecedores não usa mais avatar por API; o endpoint `instagram-avatar` fica disponível para uso opcional em outras partes do app.

Documentação: [Meta for Developers – Instagram Graph API](https://developers.facebook.com/docs/instagram-api).
