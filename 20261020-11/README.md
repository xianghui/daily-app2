# Last Ferry Florist

A cozy, mobile-first scheduling puzzle. Your harborside flower shop has one wrapping station, and every bouquet has a ferry to catch. Sacrifice a small tip to save a bigger one, or discover an order that gets the most from every departure.

## How to play

- Tap the large bouquet cards in the order you want to wrap them.
- **Wrap** is the number of simulated minutes a bouquet takes. **Ferry** is its deadline. **✦** is its tip.
- Work is sequential. Finish at or before the deadline for full tips; finish late for zero. There is no real-time countdown.
- The queue previews finish times and tips. Green means on time; dashed rose means late. Symbols and text supplement color.
- Tap any queued bouquet to remove it; tap it again to append it. Undo removes the last card, and Clear resets the queue.
- Queue every bouquet and tap **Dispatch bouquets** to commit.
- Each departure earns up to 1,000 points, based on your tips divided by the mathematically optimal tips. An exact exhaustive solver checks every permutation (at most 720).
- Play six departures (four, then five, then six orders), for up to 6,000 points. After each dispatch, inspect one best arrangement to learn.
- Restart shift generates a fresh run. Best completed shift is saved on this browser with localStorage. Storage is optional; the game still runs if blocked.

## Accessibility and phones

Portrait-first layout, 44px+ action targets, no drag precision or hover requirements, no keyboard requirement, semantic buttons, visible focus, reduced-motion support, and optional synthesized audio (off by default). No external images, fonts, APIs, or paid services. Offline app shell and assets are cached by a scoped service worker after the first successful online visit. The gallery link still needs connectivity if it has not been cached separately.

## Development

```sh
npm install
npm run dev
npm run predeploy
npm run lint
node test-game.mjs
```

The Vite base is `/daily-app2/20261020-11/`. `npm run predeploy` builds `dist/`; per-app `npm run deploy` uses `gh-pages -d dist` as required, but the public site is published **from the monorepo root** with its combined `deploy/` directory.
