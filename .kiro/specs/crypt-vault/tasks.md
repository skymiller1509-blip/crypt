# Crypt vault - tasks

Spec: crypt-vault. Status: DRAFT for Dec build. Kiro works through
these in order, one at a time, in the Dec 1-4 window.

## Tasks

- [x] 1. Confirm the spec. Read requirements.md and design.md with
      Eddie. Fix anything that is unclear before writing code.
      Done when Eddie says the flow is right.
- [x] 2. Build the page skeleton. `index.html` with the form, the
      vault display, the vault list, and the fake data warning.
      Done when the page loads with no errors and shows the form.
- [x] 3. Build vault creation. `app.js` seals a vault, stores it in
      `localStorage`, and shows it Fresh. Done when a sealed vault
      appears with its name and expiry.
- [x] 4. Build decay. Compute lifeLeft, map it to the five stages,
      re-check every 10 seconds. Done when a 2 minute vault moves
      through all five stages on its own.
- [x] 5. Build opening. Tap a living vault to show the secret and
      mark it Opened. Tap a rotted vault to show the rotted message
      with the secret hidden. Done when both paths are tested.
- [x] 6. Build demo controls. "Make a sample vault", "Make a 2 minute
      vault", and the "Preview decay" slider labelled DEMO ONLY.
      Done when the video can show all five stages in under a minute.
- [x] 7. Style the decay. CSS classes for the five stages: dust,
      cracks, cobwebs, moss, ghost eye, ghost shape. Done when each
      stage is clear at a glance, with no images.
- [x] 8. Add the hook. Wire `.kiro/hooks/crypt-quality-check.json`
      so a syntax and smoke check runs after each change. Done when
      a bad edit is caught by the hook, not by hand.
- [ ] 9. Full demo pass. Follow DEMO.md end to end, record the
      video, fix anything the video exposes. Done when the video is
      under 3 minutes and shows the whole flow.
- [ ] 10. Submission pack. Public GitHub repo with MIT licence and
      `.kiro` at root, working app URL, text description, Kiro use
      write-up from the real Dec work, category Costume Contest.
      Done when Eddie reads the submission back and submits.

## Notes for the Dec build

- Fake data only, at every step. If a test needs a secret, use
  a SAMPLE secret.
- One flow only. If an idea is not in requirements.md, it waits.
- No em dashes or en dashes in any submission text.
