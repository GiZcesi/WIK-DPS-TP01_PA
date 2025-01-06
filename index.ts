import { createServer } from 'http';
const PORT = process.env.PING_LISTEN_PORT || 3000;

createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers, null, 2));
  } else {
    res.writeHead(404).end();
  }
}).listen(PORT, () => console.log(`Serveur écoute sur PORT ${PORT}`));