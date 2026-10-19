# Cocoa Gambit

An untimed, mobile-first chocolate strategy duel based on Chomp. Five chocolate shapes, one cunning fox, and one bitter corner nobody wants.

## How to play
- Tap a chocolate square to preview a bite. All surviving chocolate below and to its right is highlighted.
- Tap **Take this bite** to confirm. The fox then takes its own bite.
- Leave the top-left star for the fox. When only that bitter piece remains, the next player loses automatically.
- You go first in each of five tastings. A safe bite earns 10 points, a victory earns 100 more.
- Casual fox chooses an optimal reply 65% of the time (and may choose one randomly); Master always plays optimally. Neither has hidden information.
- Best scores are saved separately per mode using localStorage. Sound is optional and starts off. New tasting returns to setup; Play a fresh tasting replays your selected mode.

Large touch controls, no keyboard or hover required, no timer. Reduced-motion preferences respected. At 320px wide, board squares remain around 44px with a large confirmation button. No external fonts, paid services, or APIs. Offline after first successful load via a scoped service worker (requires HTTPS/localhost).

## Development
`npm install` then `npm run dev`.

`npm run predeploy` builds to dist. Per-app `npm run deploy` uses gh-pages, but production publication is performed from the parent repository with its combined `deploy/` directory.
