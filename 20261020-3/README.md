# Orbit Atelier

A relaxed, mobile-first gemstone drafting puzzle. No accounts, APIs, or external assets.

## How to play
1. Pick one of three gems, then tap an empty setting on the ring. The remaining two choices are discarded and a fresh trio arrives.
2. Adjacent gems score **4 points for matching color**, **2 for matching shape**, or **6 for both**. The last setting connects back to the first.
3. Identical gems directly opposite each other score **8 extra points**. Each pair scores once.
4. Fill all twelve settings to complete an edition. Aim for 80 points. Gold previews show the immediate score for your selected gem.
5. One undo is available before completion. It restores the previous draft. New orbit starts over; unfinished runs ask for confirmation.

Random drafts make each run different. There is no timer. Personal best is saved after completing an orbit using localStorage, when available. Color is supplemented by gem shape and text labels. Sound is optional and off by default. All controls work with touch or keyboard focus. Reduced-motion preferences are respected. At 320px wide the board settings are at least 44px across.

## Develop and publish
```sh
npm install
npm run dev
npm run predeploy
```
The per-app `deploy` script is `gh-pages -d dist`, but the public collection is published **from the parent repository** using its root `npm run predeploy` and `npm run deploy` (the combined `deploy/` directory).

Vite base: `/daily-app2/20261020-3/`. The production build generates a scoped offline service worker; after one successful online visit and service-worker activation, this game can be reopened offline. Sounds use the Web Audio API only. No remote fonts or images.
