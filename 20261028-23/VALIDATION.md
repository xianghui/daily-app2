# Validation — Hoist & Hook

Completed 2026-10-28, on the actual Vite production bundle served at `/daily-app2/20261028-23/` and the root monorepo's staged deploy.

## Geometry / assembly

- `npm test`: **14 parameter cases + 30 import cases** passed. Includes default, all three presets, minimum/maximum and eight crossed extrema; ASCII/binary STL, threshold/grayscale/engraved images across default/presets/extremes.
- Each case: connected card and every clean part exported as binary STL and independently checked for exact byte length, finite coordinates, unit normals, nondegenerate faces, consistent winding, positive volume per component, millimeter bounds, Z=0 bed contact, welded (1e−5 mm) closed edge incidence and valid orientable Euler characteristic. Every part/card is one connected solid.
- Twenty-five samples through **0–360°** spindle rotation; all unintended pair intersections below 0.0003 mm³. Default maximum unintended intersection: **0.000000765 mm³** (numerical residue).
- Tapered keeper/shaft interference is deliberate and separately checked, confined to the keeper's own axle-window sidewall region. Default maximum intended intersection: **0.071111 mm³**. This does not predict seating force or friction retention.
- Axle threading, cheek/guide seating, stack lowering into base and key insertion paths checked independently. Keeper-head collisions with displaced cheek material demonstrate geometric withdrawal stops. Fixed flange placement requires the disclosed adhesive dots after dry fitting.
- Flat parts do not intersect; all are contained in the declared card. Forty actual tab cuts yield exactly **eleven components: ten parts plus carrier**. Tabs avoid the working interface cuts. Card bounds are exact throughout cases.

## Real production-browser exercises

- `browser-test.cjs`: **33 downloaded STL cases**, including real file-picker PNG/JPEG, ASCII/binary STL, changed pixels/threshold/depth/crop/size/rotation/placement, removal/reset, parameter extrema and every part. Independent final STL checks plus regenerated portable-state mechanism checks, not download success alone. Exact fingerprints match preview, downloaded bytes and Node regeneration.
- **10 malformed/unsupported browser cases** rejected recoverably; additional empty silhouette, impossible transforms/dimensions and stale exports blocked. No browser runtime errors or remote app requests.
- `feature-test.cjs`: **20 personalization/state models** checked. All presets/three silhouettes/bounded variations; real text and icon geometry; SVG raised/engraved ring, background inversion; JSON payload round trips; undo/redo; named designs; actual per-part and ZIP meshes; view geometry neutrality; saved dark theme; preview-only colours; drag/drop; Y-up import; visible focus/collapsible sections and stale/invalid gating.
- `hole-test.cjs`: solid probes verify the SVG ring's bright center remains unraised/unengraved while dark ring pixels alter the real solid.
- `named-import-test.cjs`, `portable-errors-test.cjs`, `stale-import-test.cjs`: image/STL named designs restore exact geometry after reload; missing payload, bad transform/app/dimensions block export; asynchronous old image loads cannot overwrite new imports.
- `resilience-test.cjs`: production worker download deliberately aborted; export disabled and actionable reload message shown; reload recovers. All six bundled icons produce distinct exported geometry.
- `studio-layout-test.cjs`, `motion-test.cjs` and browser suite: **374 px desktop left rail/right viewer; 320 and 390 px preview-first phone layouts**, no horizontal overflow, reachable exports, real CDP touch orbit/pinch, visible spindle/keeper rotation, see-through/assembled/exploded/isolated/card/loose views, reduced motion, saved theme and focus. Cord line/hook height are explicitly estimated preview-only and do not alter print exports.

## Collection checks

- Every inline root script compiled with Node `new Function`; absent/empty inline script causes failure.
- New STL entry exists exactly once, correct folder, first in gallery. **233 previous entries preserved**, all **234 cards** render, STL Generators first, search reset recovers, no runtime errors.
- Root `npm run predeploy`: **234 built/copied, 0 failed, 0 skipped**. Root deploy index is byte-identical; every gallery app has its staged index; all **50 current app production files** exactly match app dist.
- `public-smoke.cjs` against the combined staged server: real default, PNG and binary-STL generated downloads, same preview/export signatures, worker/WASM loading, no errors. Public-host verification is recorded separately after deployment.

Reproducible scripts, JSON reports, synthetic CC0 sample files and screenshots are alongside this document. Production build passed. Source mesh parse/hash/sections and measured-to-redesigned mapping are recorded in `reference-analysis.json` and the README. Source assets/projects are read-only; no raw third-party STL redistributed.

## Not performed

**No physical print, slicer, cord/knots trial, friction-force, strength, fatigue or load test.** Numerical fit/collision checks do not establish practical printer fit, adhesive strength, tapered-key holding force or lifting performance. Only demonstrate the free printed hook; no added loads, brake or automatic load holding. Cord and fixed-flange adhesive are required consumables. Calibrate keys before rotation and never use loose retainers.
