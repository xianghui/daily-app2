# Odds Atelier

A calm, touch-first probability puzzle. Build a six-faced die to outperform a visible rival over six randomized commissions. No keys, APIs, fonts, or network dependencies at runtime.

## How to play
- Each face holds 1–9 pips. Use the entire shown budget.
- Tap **−** to free a pip, then **+** on another face to move it there.
- A higher face wins; ties count as half a win. All 36 face pairings are equally likely. The live equity is exact, not a simulated roll.
- **Seal this design** to bank up to 100 points: your equity divided by the maximum achievable equity, rounded to the nearest integer. Six commissions give a maximum edition score of 600.
- After sealing, compare against the mathematically optimal equity and an example optimal design. No timer or penalty for experimenting.
- Best edition score saves locally, including partial editions. Start over preserves this record. Sound is optional and off by default.

Portrait layouts support 320px screens and up. All controls are touch buttons; no hover or keyboard is required. Reduce Motion preferences are respected. A service worker caches the production app on first online visit for later offline reloads. Saving and audio gracefully degrade if blocked.

## Development
`npm install`, then `npm run dev`. `npm run predeploy` builds to `dist/`.
Per-app `npm run deploy` is configured as required, but public publishing uses the ROOT monorepo `npm run predeploy` and `npm run deploy` flow.

## Mathematics
`src/game.js` exhaustively enumerates all sorted six-face designs in 1–9 with the exact budget to find the optimum. Sorting removes equivalent permutations. Outcomes use integer half-win units to avoid floating-point comparison errors.
