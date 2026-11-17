# Crypt design - the five decay stages

The vault is a stone crypt. Its look tells you how much time is left,
with no numbers to read. Each stage is one clear visual state.

## Stage 1: Fresh (100 to 75 percent of life left)

- Clean grey stone, sharp edges, polished lid.
- No cobwebs, no moss, no cracks.
- A small green candle burns steady beside the vault.
- Meaning: plenty of time. Nothing to worry about yet.

## Stage 2: Dusty (75 to 50 percent)

- A thin layer of dust settles on the lid.
- Faint cobwebs appear in the two top corners.
- The candle flame is smaller.
- Meaning: time is passing. Check back soon.

## Stage 3: Cracked (50 to 25 percent)

- Cracks run across the stone, one big crack down the middle.
- Cobwebs thicken and spread to the sides.
- A little moss grows at the base.
- The candle flickers.
- Meaning: half the time is gone. Open it soon if the secret matters.

## Stage 4: Rotting (25 to 5 percent)

- Deep cracks, chunks of stone missing at the edges.
- Thick cobwebs cover most of the vault.
- Moss and dark stains spread across the lid.
- The candle is nearly out, a thin wisp of smoke.
- A pale eye opens in the dark of the vault door.
- Meaning: almost too late. Open it now.

## Stage 5: Ghost (under 5 percent, or expired)

- The stone is gone. Only a pale ghost shape floats where the
  vault stood, with hollow eyes.
- The secret is rotted away. It cannot be read.
- Text on screen: "Too late. This secret rotted away."
- Meaning: the deadline passed. The vault kept its promise.

## How the stage is chosen

Stage comes from one number: the fraction of the vault's life left.

- life left = (expiry time minus now) divided by (expiry time minus created time)
- 0.75 or more: Fresh. 0.50 or more: Dusty. 0.25 or more: Cracked.
  0.05 or more: Rotting. Below 0.05, or past expiry: Ghost.

The demo has a "Preview decay" slider (labelled DEMO ONLY) that moves
a pretend clock through the vault's life, so the video can show all
five stages in under a minute without waiting days.

## Colours and feel

- Background: near black, like a crypt at night.
- Stone: greys, darker as the vault decays.
- Accents: bone white text, a cold green for the candle and for
  "still time", and a rot orange for "almost too late".
- No jumpscares, no loud sounds, no flashing. The decay is slow
  and quiet, which is what makes it unsettling.

## What the decay must never do

- Never hide the vault name or the expiry date.
- Never block the Open button while the vault is still alive.
- Never look like an error. Decay is the feature, not a bug.
