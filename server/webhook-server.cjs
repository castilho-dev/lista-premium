/**
 * Servidor local só para TESTAR o webhook da Kiwify.
 * Rode: node server/webhook-server.cjs
 * Depois use ngrok: ngrok http 3333
 * Na Kiwify, use a URL do ngrok + /webhook/kiwify (ex: https://xxx.ngrok.io/webhook/kiwify)
 */

const http = require('http');

const PORT = 3333;
const WEBHOOK_PATH = '/webhook/kiwify';

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({ raw: body });
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  // CORS para o Kiwify conseguir chamar (em teste local não costuma ser necessário)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/webhook/kiwify') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, message: 'Webhook endpoint ativo. Use POST para testar.' }));
    return;
  }

  if (req.method === 'POST' && req.url === WEBHOOK_PATH) {
    try {
      const body = await parseBody(req);
      const token = req.headers['x-webhook-token'] || req.headers['x-kiwify-token'] || '(não enviado)';

      console.log('\n========== WEBHOOK RECEBIDO ==========');
      console.log('Horário:', new Date().toISOString());
      console.log('Token no header:', token);
      console.log('Body:', JSON.stringify(body, null, 2));
      console.log('========================================\n');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ received: true }));
    } catch (err) {
      console.error('Erro ao processar webhook:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro interno' }));
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found. Use POST ' + WEBHOOK_PATH }));
});

server.listen(PORT, () => {
  console.log(`Webhook rodando em http://localhost:${PORT}`);
  console.log(`URL do webhook: http://localhost:${PORT}${WEBHOOK_PATH}`);
  console.log('\nPara a Kiwify alcançar este PC, use ngrok:');
  console.log(`  ngrok http ${PORT}`);
  console.log('Depois coloque no Kiwify: https://SEU-ID.ngrok.io/webhook/kiwify\n');
});
