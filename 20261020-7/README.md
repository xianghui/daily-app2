# Prism Pact

An untimed, mobile-first shared-trait strategy duel. No account, external fonts, APIs, or paid services.

## How to play
- Place the prism the rival gives you on any empty board square.
- Tap an unclaimed prism to give it to the rival. The rival places it and gives one back.
- Whoever places the fourth prism in a row, column, or diagonal wins if all four share **any one** trait: coral/mint, round/diamond, hollow/solid, or one/two dots. Wins are automatic.
- Play three rounds per edition. Win: 100 points; draw: 40; loss: 10. Maximum 300.
- The rival checks immediate wins and avoids gifting winning pieces when possible. It is not a perfect solver.
- Best edition score is saved locally when storage is available. Sound is optional and off by default. Start over asks for confirmation.

Large buttons work by touch or mouse, and standard keyboard focus/Enter works too. Help is always available via ?. No timer or precision input. Small screens scroll naturally.

## Development
```sh
npm install
npm run dev
npm run predeploy
```
Individual deployment scripts are present as required, but publish the collection from the repository root with `npm run predeploy` and `npm run deploy` (not the individual app deploy command).

Vite base: `/daily-app2/20261020-7/`. All gameplay runs locally with no network requests after assets load. After a first successful online visit, a service worker caches this game and its assets for offline reload and play. A first visit still requires a connection.
