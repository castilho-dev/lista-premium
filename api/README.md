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
| `ALLOWED_TEST_EMAILS` | Não | E-mails de teste (separados por vírgula), sem consultar a API |

A verificação consulta vendas em janelas de 90 dias (limite da API) e vai até **2 anos atrás**, então quem comprou há mais de 90 dias continua com acesso.

### Teste rápido

Para testar sem depender da API, adicione por exemplo:

- **`ALLOWED_TEST_EMAILS`** = `seu@email.com`

Quem estiver nessa lista recebe acesso direto, sem chamar a Kiwify.
