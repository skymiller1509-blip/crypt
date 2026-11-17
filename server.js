// Crypt - tiny static server for local testing only.
// Run: node server.js   (port 4193). The live site needs no server.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4193;
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

const server = http.createServer((req, res) => {
  const file = req.url === "/" ? "index.html" : req.url.split("?")[0].slice(1);
  const safe = path.normalize(file).replace(/^(\.\.[\/\\])+/, "");
  const full = path.join(__dirname, safe);
  if (!full.startsWith(__dirname) || !fs.existsSync(full) || fs.statSync(full).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, { "Content-Type": MIME[path.extname(full)] || "text/plain" });
  res.end(fs.readFileSync(full));
});

server.listen(PORT, () => {
  console.log("Crypt prototype on http://localhost:" + PORT);
});
