# Velvet Bids
A small, untimed sealed-bid duel in a velvet-green auction room. Made for phones.

## How to play
- Both players start with bidding cards 1–9. Nine gem lots (values 1–9) appear in a shuffled order.
- Tap a card, then **Seal bid**. The house chooses using only its own hand and the public lot, never your selected card.
- The higher bid wins all gems on the table. Both cards are spent.
- Equal bids carry the prize forward. A tie on the last lot splits the pot evenly.
- Collect more gems than the house to win. Save strong cards for valuable lots, watch the upcoming prizes, and inspect the house's remaining cards.
- Tap **Next treasure** to advance. **New match** resets immediately at any time.

Best gem score and win record are saved locally. Sound is off by default and optional. No keyboard, account, timer, external assets, or paid services. Once loaded and cached, production gameplay works offline via a service worker. Full records require localStorage access; gameplay works without it.

## Development
`npm install` then `npm run dev`.

`npm run predeploy` builds with the base `/daily-app2/20261020-1/`.
Per-app `npm run deploy` is provided as required, but public publishing uses the **root** monorepo `npm run predeploy` and `npm run deploy` to include the whole gallery.
