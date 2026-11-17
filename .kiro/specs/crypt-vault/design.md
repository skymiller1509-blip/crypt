# Crypt vault - design

Spec: crypt-vault. Status: DRAFT for Dec build.

## Architecture

Static site, zero dependencies. Two files do all the work.

- `index.html` - the page: form, vault display, vault list,
  fake data warning, demo controls.
- `app.js` - the logic: create vault, compute stage, open vault,
  render. Storage is `localStorage` in the browser only.
- `server.js` - tiny static server for local testing only.
  The live site needs no server at all.

## Data model

One vault, stored as JSON in `localStorage` under key `crypt-vaults`:

```
{
  "id": "v-1730000000000",
  "name": "Birthday note for Ada",
  "secret": "SAMPLE: the cake is in the oven",
  "createdAt": 1730000000000,
  "expiresAt": 1730604800000,
  "opened": false
}
```

No real secrets are ever stored. Sample secrets carry the SAMPLE label.

## Decay calculation

```
lifeLeft = (expiresAt - now) / (expiresAt - createdAt)
```

- lifeLeft >= 0.75: Fresh
- lifeLeft >= 0.50: Dusty
- lifeLeft >= 0.25: Cracked
- lifeLeft >= 0.05: Rotting
- lifeLeft < 0.05, or now past expiresAt: Ghost

The page re-checks every 10 seconds and on every tap, so the
stage moves on its own as time passes.

## Rendering

Each stage is a CSS class on the vault element: `stage-fresh`,
`stage-dusty`, `stage-cracked`, `stage-rotting`, `stage-ghost`.
The class changes the stone colour, the cracks (CSS borders and
shadows), the cobwebs (CSS pseudo elements), and the ghost eye.
No images are needed. That keeps the site light and the demo honest:
what you see is CSS and JS, not a picture.

Time left is shown in plain words: "6 days left", "2 hours left",
"9 minutes left", "Too late".

## Error handling

- Empty name or secret: show "Give the vault a name and a secret first."
  Do not seal.
- Expiry in the past: not offered. The shortest choice is 2 minutes.
- `localStorage` full or blocked: show "This browser will not store
  the vault. Try another browser." Do not crash.
- A rotted vault that is tapped: show the rotted message. The secret
  stays hidden even in the page source view for that vault's card,
  because the render step never writes it out for a Ghost vault.

## Testing strategy

- Node syntax check on `app.js` and `server.js`.
- Serve locally, load the page, HTTP 200.
- Manual pass: seal a 2 minute vault, watch all five stages,
  open one alive, let one rot. That is the demo.
- In Dec, Kiro adds the hook that runs the syntax check after
  each change (see `.kiro/hooks/crypt-quality-check.json`).
