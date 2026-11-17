# Crypt - a vault that visibly decays

Kiroween 2026 entry, Costume Contest.
Status: PREP ONLY. The build window is Dec 1-4, 2026.
This folder holds the plan, the Kiro spec, and a working static
prototype. The full build happens in Dec, through Kiro.

## The one flow

1. Create a vault. Give it a name, type a FAKE secret, pick an expiry.
2. The vault seals. A stone crypt appears on screen.
3. As the expiry nears, the vault visibly decays. Fresh stone turns
   dusty, then cracked, then rotting, then a ghost.
4. Open the vault before it rots to read the secret.
   Open it too late and the secret has rotted away.

That is the whole product. One flow, end to end.

## Why the spooky design does real work

A normal vault hides its deadline. You forget it, then it is too late.
Crypt shows the deadline on the vault itself. The worse the vault looks,
the sooner you must open it. The decay IS the warning. That is the
Costume Contest fit: the haunting design enhances the function.

## Fake data only

Crypt is a demo vault. It stores nothing on a server and no account
is needed. Everything lives in your own browser.

- Never type a real password or a real secret into Crypt.
- Every sample secret in this repo is labelled SAMPLE.
- The demo vaults use made up text like "SAMPLE: the cake is in the oven".

## Files

- `index.html` + `app.js` - the static prototype. Zero dependencies.
  Open it with `node server.js` and go to http://localhost:4193.
- `server.js` - tiny static server for local testing only.
- `DESIGN.md` - the five decay stages, in plain words.
- `FLOW.md` - the one flow, step by step.
- `DEMO.md` - the under 3 minute demo script.
- `KIRO_SETUP.md` - install Kiro CLI, sign in, credit form, user ID.
- `.kiro/` - specs, steering, hooks, settings. Kiro reads this.
  Do NOT add `.kiro` to `.gitignore`. The rules say that can
  disqualify the submission.
- `LICENSE` - MIT, as the rules require an open source licence.

## Kiro plan (Dec build, through Kiro CLI)

1. Install Kiro CLI, Eddie signs in with device flow (see KIRO_SETUP.md).
2. Steering first, then spec, then tasks. The starter files are in
   `.kiro/` and Kiro refines them with Eddie before any code changes.
3. Kiro implements the tasks in order, one at a time.
4. A Kiro hook runs a syntax and smoke check after each change.
5. The Kiro use write-up is drafted from the real `.kiro` history,
   not written from memory. No claim is made about Kiro use that
   did not happen.

## Costume Contest fit

- Category: Costume Contest. Prize: $5,000, one winner.
- The app is any app with a polished, haunting UI. Crypt is a vault,
  and its decay is the haunting part.
- Judging (five parts, 20 percent each): Potential Impact,
  Technological Implementation (how well Kiro was used), Design,
  Innovation/Idea, Presentation.

## Submission checklist (from the live rules)

- [ ] Public GitHub repo (Eddie creates it, on or after Oct 30, 2026)
- [ ] MIT licence file at repo root (included here)
- [ ] `.kiro` directory at repo root (included here, never gitignored)
- [ ] Working app URL (static site, no login needed)
- [ ] Text description on Devpost
- [ ] Demo video, under 3 minutes, public on YouTube
- [ ] Write-up on how Kiro was used (from real Dec work)
- [ ] Category: Costume Contest
- [ ] Submit before Fri Dec 4, 2026, 23:00 WAT (2:00 pm PT)
- [ ] Disclosure: this repo is new, built in the Submission Period.
      List any pre-existing code used (starter templates only, if any).

## What still needs Eddie

1. Kiro CLI sign-in on his phone (device flow, about 2 minutes).
2. The 4,000 free credit form, filed by about Nov 27.
   It closes Tue Dec 1, 2026, 21:00 WAT (12:00 pm PT).
3. Create the public GitHub repo in Dec.
4. Record the demo video and post it public on YouTube.
5. Read back the Devpost submission, then submit.
