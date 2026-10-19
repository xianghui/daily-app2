# Ribbon Bindery

A mobile-first signed prefix-reversal puzzle. Complete six increasingly intricate ribbon commissions, then chase a cleaner collection score. No APIs, fonts, images, or paid services.

## How to play

- Arrange the ribbons **1, 2, 3… from top to bottom**, with every **gold front facing up**.
- Tap a ribbon to select it **and everything above it**. The rust edge marks your bundle.
- Tap **Flip** to reverse that bundle's order and turn every ribbon over. Gold becomes blue and vice versa. A one-ribbon flip changes just its face.
- Read the face labels and arrows: color is never the only clue.
- There is no timer or move limit. Par is the exact minimum, computed using a breadth-first search of signed permutations.
- Each commission is worth 200 points. Each flip beyond par costs 15 points; each hint costs 25; the minimum is 40 points. Undo restores the previous arrangement but does not erase spent flips. Hints select a shortest-path move without executing it.
- Complete all six commissions for a score up to 1200. New Collection restarts the whole run. Personal best saves to localStorage when available; storage restrictions don't prevent play.
- Sound is off initially. The top-right sound button enables gentle, synthesized tones.

## Phone design

Portrait layout, 48px ribbon rows, full-width flip button, no hover mechanics, no keyboard dependency, reduced-motion support, and responsive typography down to 320px. Long layouts scroll naturally on small phones. Help is opened using the large `?` control.

## Development

```sh
npm install
npm run dev
npm run lint
npm run predeploy
```

Vite base: `/daily-app2/20261020-4/`. `npm run deploy` is provided per collection convention, but **public publishing uses the root monorepo `npm run deploy`** with the combined `deploy/` tree.

Once downloaded, gameplay has no network dependency. A production service worker caches the shell and hashed assets for offline revisits; first visit requires connectivity. Best score stays on this device. Restart does not erase it.
