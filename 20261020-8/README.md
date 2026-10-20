# Tea Leaf Society

An untimed, phone-first experimental deduction mini game. Five hosts each use a secret Boolean rule to accept or reject tea blends. Find the correct rule among four possibilities.

## How to play

- Each blend combines rose or mint, hot or iced, sweet or plain. Labels and symbols accompany every color.
- Two initial samples are free. ✓ Yes means accepted; × No means rejected.
- Tap an untested blend to reveal more evidence, costing 15 points.
- Tap the rule matching **all** samples. An incorrect guess costs 40 points and reveals a counterexample.
- AND requires both traits. OR accepts either or both unless explicitly stated otherwise.
- Each solved tasting earns `max(20, 150 − 15 × extra tests − 40 × wrong guesses)`. Complete five tastings for up to 750 points.
- Restart any time. Best total persists in localStorage when available. Sound is off by default and optional.

Large touch cards, portrait layout, no timer, no keyboard or hover requirement, reduced-motion support, and legible labels. Randomized rules, options, and evidence make each visit different. No API keys, remote fonts, images, or services. After the first online visit finishes caching, reload and play offline using the scoped service worker.

## Development

```sh
npm install
npm run dev
npm run lint
npm run predeploy
```

Vite base: `/daily-app2/20261020-8/`. The individual `npm run deploy` script exists as required, but production publication uses **the root monorepo** `npm run predeploy` and `npm run deploy`, publishing its combined `deploy/` tree.

`node test-game.mjs` checks rule uniqueness, round generation, scoring and identifiability.
