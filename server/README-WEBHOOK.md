# Testar webhook da Kiwify

## 1. Subir o servidor

No terminal, na pasta do projeto:

```bash
npm run webhook
```

Ou:

```bash
node server/webhook-server.cjs
```

Vai aparecer algo como: `Webhook rodando em http://localhost:3333`

## 2. Expor na internet (ngrok)

A Kiwify precisa de uma URL pública. Use o [ngrok](https://ngrok.com):

```bash
ngrok http 3333
```

O ngrok vai mostrar uma URL **https** tipo: `https://abc123.ngrok.io`

## 3. Preencher no formulário da Kiwify

- **Nome:** ex: `Teste Lista Premium`
- **URL do Webhook:** `https://SEU-ID.ngrok.io/webhook/kiwify`  
  (troque `SEU-ID` pelo que o ngrok mostrou)
- **Eventos:** marque pelo menos **Compra aprovada** e **Reembolso** para testar.
- Clique em **Criar**.

## 4. Testar

- Use o botão **Testar Webhook** no painel da Kiwify, ou
- Faça uma compra de teste / reembolso.

No terminal onde está rodando `npm run webhook` você verá o JSON que a Kiwify enviou (horário, token, body).

## Observação

Esse servidor é só para **teste local**. Em produção você precisará de um backend deployado (ex.: Vercel serverless, Railway, Render) com uma URL fixa para configurar na Kiwify.
