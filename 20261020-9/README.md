# Picnic Treaty

A touch-first cut-and-choose strategy game. You divide, your guest decides.

## Play
- Read the tasting notes: each treat has different point values for you and your guest.
- Tap any of the eight treats to move it between basket A and B. Both need at least one treat.
- Your guest takes the basket worth more to them; you score the other using **your** values.
- If the guest is tied, they take the basket you value more. The live forecast handles this rule.
- Serve when ready. Afterward, see the best possible score (exhaustively checked over all legal splits).
- Play six picnics. Get as many points and perfect splits as possible; restart any time.

No timer, no keyboard required, no precision gestures. Sound starts off and is optional. Best completed visit is saved locally where storage is available. No account, external fonts, APIs, or paid services. A service worker caches the production app after the first online visit for offline revisits.

## Development
`npm install` then `npm run dev`. `npm run predeploy` validates and builds. Per-app `npm run deploy` exists, but public publication uses the **root monorepo** `npm run predeploy` and `npm run deploy` so the gallery and all games remain together.
