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
