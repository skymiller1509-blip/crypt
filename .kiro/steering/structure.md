# Structure - Crypt

```
crypt/
  README.md          - what it is, one flow, checklist
  DESIGN.md          - the five decay stages
  FLOW.md            - the one flow, step by step
  DEMO.md            - the under 3 minute demo script
  KIRO_SETUP.md      - install, sign in, credit form
  LICENSE            - MIT
  .gitignore         - ignores node_modules only, never .kiro
  index.html         - the page
  app.js             - vault logic and decay
  server.js          - local test server only, port 4193
  .kiro/
    specs/crypt-vault/
      requirements.md
      design.md
      tasks.md
    steering/
      product.md
      tech.md
      structure.md
    hooks/
      crypt-quality-check.json
    settings/
      mcp.json
```

## Naming

- Files are lowercase with hyphens.
- CSS stage classes: `stage-fresh`, `stage-dusty`, `stage-cracked`,
  `stage-rotting`, `stage-ghost`.
- `localStorage` key: `crypt-vaults`.
- Vault IDs: `v-` plus the created time in milliseconds.
