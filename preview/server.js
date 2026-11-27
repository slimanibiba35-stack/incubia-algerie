// Local preview of the LIVE incubia-algerie.com homepage + our new sections.
// Pages are fetched from the live site; our additions (CSS/JS/images) are injected locally.
// Run: node preview/server.js  ->  http://localhost:4000
const http = require('http');
const fs = require('fs');
const path = require('path');

const LIVE = 'https://www.incubia-algerie.com';
const PORT = process.env.PORT || 4000;
const DIR = __dirname;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

// The live site sometimes drops proxied requests: retry, and cache immutable Next.js assets in memory.
const cache = new Map();
async function upstreamFetch(url, opts) {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(url, opts);
      if (r.status < 500 || i >= 3) return r;
    } catch (e) { if (i >= 3) throw e; }
    await new Promise(r => setTimeout(r, 400 * (i + 1)));
  }
}

http.createServer(async (req, res) => {
  try {
    // Local additions
    if (req.url.startsWith('/__preview/')) {
      const file = path.join(DIR, req.url.replace('/__preview/', '').split('?')[0]);
      if (!file.startsWith(DIR) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      return fs.createReadStream(file).pipe(res);
    }

    // Everything else: proxy to the live site
    const isStatic = req.url.startsWith('/_next/static/');
    if (isStatic && cache.has(req.url)) {
      const c = cache.get(req.url);
      res.writeHead(200, { 'Content-Type': c.type, 'Cache-Control': 'no-store' });
      return res.end(c.body);
    }
    const upstream = await upstreamFetch(LIVE + req.url, { headers: { 'user-agent': req.headers['user-agent'] || 'preview', accept: req.headers.accept || '*/*', rsc: req.headers.rsc || '' }, redirect: 'manual' });
    const type = upstream.headers.get('content-type') || '';
    const headers = { 'Content-Type': type, 'Cache-Control': 'no-store' };

    if (upstream.status >= 300 && upstream.status < 400) {
      const loc = (upstream.headers.get('location') || '/').replace(/^https?:\/\/(www\.)?incubia-algerie\.com/, '');
      res.writeHead(upstream.status, { Location: loc || '/' });
      return res.end();
    }

    if (type.includes('text/html')) {
      let html = await upstream.text();
      // Injected on every page: the site navigates without reloading, so the homepage script must be
      // present wherever the visit starts. additions.js only acts when the path is '/'.
      const css = '<link rel="stylesheet" href="/__preview/additions.css"><link rel="stylesheet" href="/__preview/pages.css">';
      const js = '<script src="/__preview/additions.js" defer></script><script src="/__preview/pages.js" defer></script><script src="/__preview/pricing.js" defer></script>';
      // Phone number changed by the owner 20/11/2026: 042 05 51 88. WhatsApp (wa.me/213542999301) is unchanged;
      // its links never use the "+213…" forms below, so they are not affected.
      // Owner: show it as 042055188, without +213.
      html = html.split('tel:+213542999301').join('tel:042055188')
        .split('+213 (0) 542 99 93 01').join('042 05 51 88')
        .split('+213 542 99 93 01').join('042 05 51 88')
        .split('+213542999301').join('042055188');
      html = html.replace('</head>', css + '</head>').replace('</body>', js + '</body>');
      res.writeHead(upstream.status, headers);
      return res.end(html);
    }

    const body = Buffer.from(await upstream.arrayBuffer());
    if (isStatic && upstream.status === 200) cache.set(req.url, { type, body });
    res.writeHead(upstream.status, headers);
    res.end(body);
  } catch (e) {
    res.writeHead(502); res.end('Preview proxy error: ' + e.message);
  }
}).listen(PORT, () => console.log(`Preview running at http://localhost:${PORT}`));
