# Stencil Studio

An original mobile-first transparent-layer registration puzzle. No accounts, paid services, remote assets, or API keys.

## How to play
- Rotate the amber and blue 4×4 ink layers with the large Left / Right buttons.
- Match the adjacent commission exactly. Amber dots and blue stripes overlap into green stars; blank cells count too. Patterns are distinguished by symbols as well as color.
- Seal the matching print to collect points and advance. Complete eight commissions per edition.
- Each print starts at 300 points. Turns above the shortest initial solution cost 12 points each. The optional once-per-print assist aligns one layer for 80 points. Minimum award: 60 points.
- Untimed, no precision tapping, no keyboard needed. Sound is optional and off by default. Personal best is saved locally when storage is available.
- New edition restarts with new generated, guaranteed-solvable puzzles.

## Development
`npm install` then `npm run dev`.

`npm run predeploy` builds the app. `npm run deploy` is retained for the per-app contract; the public collection is published from the parent repository's root deploy flow, not this command.

After a successful first load, a service worker caches the page and bundled assets for offline play. No external fonts or images are required. Browser zoom, reduced-motion preferences, and small portrait viewports are supported.
