# Kiro setup - install, sign in, credits

Do this before the Dec 1-4 build. Steps 1 and 2 are groundwork.
Step 3 is the credit form. Nothing here needs a payment.

## Step 1: Install Kiro CLI on this VM

This VM is Ubuntu 24.04.5, x86_64, glibc 2.39. The CLI needs
glibc 2.34 or newer, so this VM meets it. The official install
command for macOS and Linux, from kiro.dev docs, is:

```
curl -fsSL https://cli.kiro.dev/install | bash
```

Then check it worked:

```
kiro-cli --version
```

Expect 3.x (Kiro CLI 3.0.0 replaced the desktop app on macOS
and Linux with a single `kiro-cli` binary). The installer puts
the binary in `~/.local/bin/kiro-cli`. If the version still shows
2.x after an update, run `kiro-cli update` again.

Note: the CLI is the headless route. The IDE is a GUI app and is
not needed. The rules count IDE, CLI, Web, and Kiro Crew equally.

## Step 2: Sign in (Eddie's step, about 2 minutes)

On this VM there is no browser for the CLI to open, so sign-in
uses device flow. Run:

```
kiro-cli login --use-device-flow
```

Or just `kiro-cli login`. On a Linux host with no graphical
session, the CLI uses device flow on its own in version 3.2.1
or later.

What happens:

1. The terminal shows a URL and a one-time code.
2. Eddie opens the URL on his phone, picks GitHub (or Google,
   or AWS Builder ID), and enters the code.
3. The CLI notices on its own and signs in. No port forwarding.

Check who is signed in:

```
kiro-cli whoami
```

This shows the username and user ID. That user ID is needed
for the credit form. Write it down. To sign out: `kiro-cli logout`.

Sign-in choices: GitHub or Google is quickest for one person.
AWS Builder ID is a free personal AWS identity, no AWS account
or billing needed. Eddie has GitHub (skymiller1509-blip) and
Google, so sign-in is covered.

## Step 3: The 4,000 free credit form (file by about Nov 27)

- Kiro Free is 50 credits a month. That is not enough to build
  an app. The event gives a one-time allotment of 4,000 Kiro
  credits for the Submission Period.
- The form needs the Kiro user ID (from `kiro-cli whoami`) or
  the AWS account ID tied to the Kiro account, plus project details.
- The form closes Tue Dec 1, 2026, 12:00 pm PT, which is
  Tue Dec 1, 2026, 21:00 WAT.
- Requests are reviewed. Allow 48 business hours. A wrong user
  ID may not be approved. File days early, by about Fri Nov 27.
- Credits must be redeemed by Fri Dec 4, 2026. Redeemed credits
  expire Thu Dec 31, 2026, at 11:59 pm PT.
- Do not buy a paid plan to solve this. Nigeria is not in Kiro's
  published paid-plan billing-country list, so plan on Free plus
  the 4,000 event credits only.

## If the credits are refused or late

Fall back to the 50 free credits and a very small build. Crypt
is mostly interface, so it can shrink to one vault, one decay,
and no extras. Do not pay for credits without Eddie's explicit yes.

## Regional note

The rules say Kiro feature and model availability can vary by
region and is the entrant's responsibility. This is untested
from Nigeria until the first sign-in. If a model is missing,
use whichever model Kiro offers and note it in the write-up.
