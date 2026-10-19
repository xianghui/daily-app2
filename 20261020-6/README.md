# Dewdrop Duel
A mobile-first, untimed botanical pawn-race strategy game. No APIs, fonts, or paid services.

## How to play
Play mint against rose on a three-column, four-row board. Tap a mint sprout, then a glowing destination. Mint moves one square up into an empty cell; capture rose by moving one square diagonally up. Rose moves down. Reach the opposite edge, capture all opposing pieces, or leave the opponent with no legal moves to win. No double steps, en passant, or backward movement.

A season lasts five duels; rose opens even-numbered gardens. Win for 100 points plus 15 per surviving mint sprout; each capture earns 5 and a loss earns 20. Friendly occasionally experiments; Expert uses memoized perfect-play search. Expert can be unbeatable from some positions. Hints identify the best available move; Undo rewinds your last move and the reply. Both are free, and unavailable once a duel ends. Replay seasons to improve your locally saved best score. Sound is optional and off by default.

Large touch targets, portrait layout, accessible tile labels, reduced-motion support, inline rules, and restart confirmation. After one online load completes, the service worker caches the app for offline use. Best score uses localStorage when available.

## Run
`npm install` then `npm run dev`. `npm run predeploy` produces dist. Per-app `npm run deploy` is provided as requested; publish the combined gallery from the ROOT monorepo deployment instead.
