# Tech - Crypt

## Stack

- Static site. HTML, CSS, and plain JavaScript. Zero dependencies.
- No build step, no framework, no database, no server in production.
- Storage: `localStorage` in the browser only.
- Local test server: `node server.js`, zero dependency Node, port 4193.

## Rules for this repo

- Fake demo data only. Every sample secret starts with SAMPLE.
- Never store a real password or a real secret, in code, in tests,
  or in the demo.
- One flow only. Nothing outside `.kiro/specs/crypt-vault/`
  gets built in Dec unless Eddie approves it first.
- Plain language in the UI. Short lines. One idea at a time.
- No em dashes or en dashes in submission text.
- The `.kiro` directory stays in the repo and out of `.gitignore`.
  The Kiroween rules say ignoring it can disqualify the entry.
- Node syntax check must pass on `app.js` and `server.js` before
  any demo is recorded.
