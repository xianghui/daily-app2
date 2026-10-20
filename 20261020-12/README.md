# Moonlit Matinee

A mobile-first woodland lineup deduction game. React + Vite; no APIs, accounts, fonts, or paid assets.

## How to play

Arrange five (later six) animal performers into a running order satisfying all the director’s notes. Tap a performer in the green room to append them. Tap a placed performer to remove them and shift later acts left. “Before” means anywhere earlier; “next to” means immediately adjacent. Fill every slot, then **Check lineup**.

Each of six shows offers 1,000 applause points. Failed checks cost 100; **Hint** places the first incorrect act correctly and costs 150. Minimum 100 points per solved show. No timer. Hints can always finish a puzzle. New festival restarts with new random puzzles. Best completed festival saves locally when storage is available. Optional synthesized sound starts off. Works without network after the page assets load (not an installable offline cache).

Every generated puzzle has exactly one solution, verified against all permutations; redundant clues are removed. Controls are native buttons and require no keyboard, dragging, or hover. Supports reduced motion.

## Development

- `npm install`
- `npm run dev`
- `node test-game.mjs`
- `npm run predeploy`

Per-app deployment scripts are retained; the published collection is deployed only through the root monorepo `npm run predeploy` and `npm run deploy`.
