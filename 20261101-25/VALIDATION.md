# Computational preflight — Peel & Spiral

## Passed

- Actual public STL downloaded, SHA-256 measured, source dimensions/components and four4.50×1.700012 sockets measured, actual mesh sections saved; local candidate STLs also parsed. Attribution/license saved; no raw source redistributed.
- `npm run predeploy`: React/Vite production bundle, local worker/WASM/fonts. Compile warnings about WASM's Node fallback externalization and bundle size are nonfatal; production worker explicitly browser-tested.
- `npm test`: **42 cases** covering all three presets, three silhouettes, per-field minimum/maximum and combined extremes, transformed ASCII/binary STL engravings, threshold/grayscale image cases and imported variants at combined extrema.
- Every generated part and final float32 STL independently checked: nonempty/exact length, finite coordinates, triangle area, normalized normal/winding agreement, closed-manifold edges after1e-5 mm weld, opposite edge directions, positive signed volume per connected component, correct bounds. Connected card is one component; loose plate is five.
- Every checked model tested for assembled upright and horizontal drawing-part collisions, full rear-tongue and drum/front insertion paths, two socket probes, shoulder stop, layer/axle fits,22 cord-channel positions, real knot pocket, bed footprint support, card envelope, independent nonintersecting clean parts and all20 runner snips releasing five parts + carrier without damaging parts.
- Additional ring-image Boolean probes: center bright hole remains backed at surface; dark annulus removes real material. Full same mesh/assembly checks applied to this model.
- `browser-test.cjs`: real production browser PNG/JPEG/ASCII/binary file-picker uploads and actual STL downloads; independent parse and Node regeneration from exported JSON; preview/download signatures exact. Content/threshold/depth/crop/relief/scale/rotation/placement edits change exported geometry. Replace/remove/reset recover. Invalid/truncated/open/nonmanifold/concave/oversized/excessive-pixel/triangle/dimension inputs, empty silhouettes and invalid transforms block exports. Touch orbit/pinch and actual phone import/downloads at390 px;320 px exports reachable, no overflow; zero page errors or remote service requests.
- `studio-test.cjs`: three actual preset downloads, silhouettes/text/icons/SVG, image/STL JSON round trips, local named save/reload, missing portable payload blocked, undo/redo, Everything ZIP unpacked with every STL independently parsed, all views including drawing setup, saved dark theme, focus ring, collapsible controls, reduced-motion context,374 px desktop left rail and320 px preview-first layout, intentionally aborted production worker blocks export and reload recovers.
- `orientation-test.cjs`: Z/Y/−Z source previews, oriented source dimensions, explicit mm gate, export/JSON consistency and full final mesh/assembly checks.
- `icons-drop-test.cjs`: all six bundled icons change geometry, full mesh/assembly checks; actual drag/drop PNG import.
- `ui-test.cjs`:320 px every editor tab plus expanded instructions has scrollWidth exactly320; real JSON download reachable after scrolling.
- `rapid-test.cjs`: late workers never enable an invalid edit, part spacing and inverted background change export, exact reset, real individual STL-button downloads all parsed independently.
- `gallery-test.cjs`: every inline script compiled with `new Function`, one correct newest STL entry, **355 previous entries unchanged**,356 cards render with zero page errors, STL category first and search correct.
- Root combined predeploy:356 built,0 failed,0 skipped; root index + app asset trees present. Final combined-output browser report is `combined-browser-validation.json`.

## What is not tested

No physical print, assembly, actual adhesive retention, cord tension/tracking/wear, pencil friction or drawn-curve accuracy was tested. This is not a precision drafting instrument. A watertight mesh and collision-free assembly do not prove material behavior. Cord/pencil/tape/adhesive are external; wand offset16 mm means its line is not the ideal cord-end involute. Use bounded gentle motion, single-layer cord and calibrated trial prints. Plinth is unglued/removable, not a positive retainer.

## Reproduce

Run `npm test` and `node personalization-check.mjs`; `npm run predeploy`; serve with `PORT=5681 node serve.mjs`. Run each `*-test.cjs` with `TEST_BASE=http://127.0.0.1:5681`. Gallery test also reads parent index and `evidence/gallery-before.js`. For combined validation use `PORT=5682 node serve-combined.mjs`, then `TEST_BASE=http://127.0.0.1:5682 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`.

## Published-site verification

Root `npm run deploy` completed and GitHub Pages run41306873689 succeeded. Initial404 was deployment propagation; after successful Pages completion, `public-smoke.cjs` passed on the actual public origin: app/worker/WASM load, real PNG file-picker import, actual downloaded closed-manifold STL with exact preview/export fingerprint, and all356 gallery entries. Evidence: `public-validation.json`, `pages-run-validation.json`, `evidence/public-app.png`, `evidence/public-gallery.png`.
