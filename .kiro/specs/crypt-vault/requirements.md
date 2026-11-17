# Crypt vault - requirements

Spec: crypt-vault. Status: DRAFT for Dec build. Kiro refines this
with Eddie before any code changes in Dec.

## User stories

1. As a person with a secret to keep for a while, I want to seal it
   in a vault with an expiry date, so it is kept until I need it.
2. As a person who forgets deadlines, I want the vault itself to
   show how urgent it is, so I open it before it is too late.
3. As a demo viewer, I want to see the whole decay in under a
   minute, so the idea lands in the video.

## Requirements (EARS style)

- WHEN a user enters a name, a fake secret, and an expiry, and taps
  Seal, THEN THE SYSTEM SHALL create a vault, store it in the
  browser only, and show it Fresh with its name and expiry date.
- WHEN time passes, THEN THE SYSTEM SHALL update the vault's decay
  stage from the fraction of life left, with no press needed.
- WHEN the fraction of life left is 0.75 or more, THEN THE SYSTEM
  SHALL show stage Fresh. At 0.50 or more, Dusty. At 0.25 or more,
  Cracked. At 0.05 or more, Rotting. Below 0.05, or past expiry,
  Ghost.
- WHEN a user taps a living vault, THEN THE SYSTEM SHALL show the
  secret and mark the vault Opened.
- WHEN a user taps a rotted vault, THEN THE SYSTEM SHALL show
  "Too late. This secret rotted away." and never show the secret.
- WHEN a user taps "Make a sample vault", THEN THE SYSTEM SHALL
  seal a vault with SAMPLE name and secret and a 7 day expiry.
- WHEN a user taps "Make a 2 minute vault", THEN THE SYSTEM SHALL
  seal a vault that expires in 2 minutes.
- WHEN a user moves the "Preview decay" slider, THEN THE SYSTEM
  SHALL show the stage for that point in the vault's life, and
  the slider SHALL be labelled DEMO ONLY.
- THE SYSTEM SHALL warn on screen that only fake demo data may be
  typed in, and SHALL never send any secret to a server. There is
  no server, no account, and no login.
- THE SYSTEM SHALL work as a static site with zero dependencies,
  and SHALL run from one HTML file and one JS file.

## Out of scope

- No accounts, no login, no server storage.
- No real encryption and no security claims.
- No sharing, no export, no password manager features.
- No sound, no flashing, no jumpscares.
