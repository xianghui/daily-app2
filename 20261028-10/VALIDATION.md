# Validation — Tier & Tripod, 2026-10-28

## Completed before publication

- `npm run predeploy`: production React/Vite build with locally bundled worker, WASM, fonts and samples.
- `npm test`: **14** parameter/preset/extreme cases and **30** image/STL-derived cases. Each validates the card and all five separate parts; finite coordinates, normal/winding, positive component volume, welded closed edges (1e-5 mm), nondegenerate triangles, dimensions and Z=0.
- Independent Manifold checks: all assembled part pairs nonintersecting, sampled full brace insertion past upper stems and tray insertion, six shoulder stops, no flat-part overlaps, exact card containment and XY envelope. Subtracting all 20 accessible tab-cut tools gives exactly **six** components (five parts + carrier). No physical force/stability simulation claimed.
- `browser-test.cjs`: **28** actual browser STL downloads; PNG/JPEG, ASCII/binary STL, image threshold/depth/fit/crop/scale, STL scale/height/rotation/placement, reset, both global extrema and every separate part. Exact UI/export fingerprints and saved-JSON regeneration agree. Ten malformed/unsupported/excessive fixture classes rejected, plus empty image, invalid settings and safe-zone cases. 320/390 px layouts, real phone touch orbit/pinch and phone imports/downloads. Zero page errors and zero off-origin requests.
- `feature-test.cjs`: all presets, three randomized variations, every silhouette, text, SVG and raised/engraved conversion, portable image and STL JSON round trips, named local designs, undo/redo, true ZIP contents (six STL meshes + assembly notes), per-part export, every view, saved theme, colour-neutral STL, drag/drop, Y-up STL and focus/collapsible sections.
- `hole-test.cjs`: actual solid probes establish white ring center is not raised/not engraved; dark ring material is raised/removed. Both outputs remain manifold.
- `portable-errors-test.cjs`: missing image payload explicitly requests reattachment; invalid transform, wrong app and invalid dimensions gate export and recover.
- `stale-import-test.cjs`: an earlier asynchronous normalization cannot replace the latest selected source.
- `resilience-test.cjs`: production worker script intentionally aborted, error visible and export disabled; reload recovers. All six icons produce distinct exported geometry.
- `studio-layout-test.cjs`: 374 px left rail/right viewer; preview-first phone, no overflow; all isolated/print/exploded/assembled views geometry-neutral; reduced motion.
- Fresh source STL downloaded to `/tmp` and parsed before choosing final geometry. Actual mesh sections inspected; source/hash/dimensions/components, defects and measured-vs-proposed decisions recorded. No private/source mesh published.

## Publication checks

`gallery-validate.cjs` compiles every nonempty root inline script with `new Function`, preserves all **221** previous entries, and checks the new first entry exactly once with `area:"stl"`.

Root `npm run predeploy` staged **222** apps, zero failures/skips. `root-stage-check.cjs` checks every gallery app exists, root index equality and all new production files hash-identical, then performs real image/STL uploads and downloads from the combined root staging server. `gallery-test.cjs` verifies 222 rendered cards, STL category first, correct newest link and search recovery. See JSON reports for observed results. `public-smoke.cjs` verifies public app/worker/WASM, actual image import/STL download, preview fingerprint and gallery after deployment.

## Limits

All results are computational/browser tests, **not physical printing, assembly, fatigue, fit-force or load testing**. Calibrate the .15–.45 mm total allowance for printer/material. Gravity-seated joints can lift apart; no inverted retention claim. Decorative miniature only. Sampled image relief is 20×20 and can lose tiny details. STL imports intentionally support only one verified convex flat-bottom solid; unsupported concavities and defects are rejected, never replaced by a convex hull.
