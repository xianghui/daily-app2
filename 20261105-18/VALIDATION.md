# Validation — Schwarz & Lantern

Computational/browser verification on 2026-11-05. **No physical print, taped/glued assembly, adhesion, durability, material strength or heat testing.**

## Solid geometry and assembly

- `npm test`: **43 cases passed** — default, all three presets, all minimum/maximum inputs, individual field endpoints, solid/round/diamond variants, ASCII/binary imports and transformed imports, threshold/grayscale variants and image/STL corners. Each case checks all **25 independently exported closed meshes** and the 24-component translated loose plate.
- `node mixed-extremes-test.mjs`: **3 additional worst mixed corners passed** — minimum radius/height/twist and smallest card combined with maximum sheet, aperture, spacing, runner and seam dimensions, for built-in/image/STL-derived output. Checks every exported STL plus assembly, not just generation success.
- Independent binary checks: exact `84+50*N` bytes, nonempty finite coordinates, nonzero triangle area, normalized stored normals agreeing with winding, 1e−5 mm vertex weld, exactly two opposite-directed incidents per edge, positive volume **per connected component**, expected millimeter bounds and Z=0 bed alignment.
- Manifold final meshes use documented .001 mm simplification; failed triangles are not discarded. The original imported triangles remain the engraving cutter; no convex-hull substitution.
- Kit checks on every case: one connected card, **96 real runners**, exactly **25 components after snipping** (carrier+24 unharmed panels), full declared card envelope/thickness, no print-layout or assembled intersection, supported flat-sheet footprints, ports open in both connected card and clean panels, **30 matched internal seams +12 boundary edges**, correctly oriented seam topology, two valid sequential 12-panel strips and six middle-ring connections.
- **96 exterior insertion samples per case** (four distances per panel) establish that a panel need not pass through a closed shell. These rigid-solid checks do not simulate tape folding or adhesive force.
- Source parser/sections and license verified separately in `reference-analysis.json`; source nonmanifold anomalies are disclosed, not passed through or claimed repaired.

## Actual production-browser tests

All browser tests serve built `dist/` at its real `/daily-app2/20261105-18/` prefix, using bundled worker/WASM assets rather than only Vite development mode.

- `browser-test.cjs`: real file-picker **PNG, JPEG, ASCII STL and binary STL**, actual saved STL downloads and independent mesh/assembly checks; exact UI geometry signature matches downloaded bytes and Node regeneration from saved JSON. Changed pixels, threshold, depth, crop, grayscale, scale, rotation and placement change output. Unit confirmation required. Replace/remove/reset restore baseline. Invalid/truncated files, empty silhouette, wrong content, excessive bytes/pixels/triangles/dimensions, open/nonmanifold/concave meshes and unsafe transforms block export and recover.
- `feature-test.cjs`: all presets/shape variants, text/icon/SVG geometry, image-background changes, four portable asset round trips, local named-save/reload, undo/redo, actual **25-STL ZIP** and per-part button downloads, assembled/exploded/card/loose and each isolated part, saved dark theme, preview-only colours, drag/drop, Y-up import, keyboard focus/collapsible sections and stale/invalid build gating.
- `hole-test.cjs`: real SVG ring import; Boolean probes confirm white center retains backing and dark annulus is actually engraved in the final solid.
- `resilience-test.cjs`: intentionally aborted production worker blocks export, reload recovers; all six bundled SVG icons produce distinct output signatures.
- `portable-errors-test.cjs`: missing image payload explicitly requests reattachment; invalid transforms, foreign design and invalid dimensions reject and reset recovers.
- `stale-import-test.cjs`: a delayed earlier image normalization cannot overwrite the newer selected file.
- `mobile-test.cjs`: 320/390 px all-tab layouts, expanded instructions, viewport/document width checks, preview before controls, reachable exports and JSON save, reduced motion, desktop **374 px left** control rail/right viewer. Main browser tests also use CDP touch orbit/pinch, compare canvas images and download image/STL-derived files on a touch phone.
- `map-test.cjs`: actual SVG map download matches current model, **24 proportional inset outlines**, valid XML, 30 seam labels each exactly twice and 12 OPEN boundaries; ZIP contains the same map, portable JSON and 25 individually validated STLs. Map coordinates are rounded to .001 display units to make a stable browser/Node SVG; printable mesh precision is unchanged.

Reports/screenshots are stored beside these scripts; only synthetic fixtures were used. No personal uploads or reference STL is bundled. STL files contain geometry, not the preview colours.

## Gallery and publication

`gallery-test.cjs` compiles every root inline script with `new Function`, requires a script/APPS list, verifies the new folder exactly once in `stl`, newest first, and compares every earlier entry against the captured baseline. **464 earlier entries preserved, 465 total**. STL Generators remains first. The tagline now covers general flat-pack assembly kits instead of only cross-laps.

Root `npm run predeploy` and `npm run deploy` are used for the combined site. Combined browser checks and public smoke tests are recorded separately when complete. No per-app deployment substitutes for the root monorepo deployment.

Combined prepublication run: root predeploy copied **465 apps, 0 failed, 0 skipped**. The combined gallery rendered all 465 entries without runtime errors and opened this new production app. The full real import/download suite was also rerun against the combined `deploy/` server: PNG/JPEG/ASCII/binary, transforms, malformed inputs, mesh checks, preview/export signatures, phone imports/downloads and touch gestures all passed (`combined-browser-validation.json`).

Public publication verified: root `npm run deploy` published commit `d156207b6801b9ec14ef77e24f7993924ad7832d`; Pages workflow [42002881842](https://github.com/xianghui/daily-app2/actions/runs/42002881842) completed successfully. After Pages propagation, the public app returned HTTP 200 and real published PNG/JPEG/ASCII/binary imports/downloads passed. The public gallery rendered all 465 entries and the new link loaded worker/WASM geometry with no runtime errors (`public-browser-validation.json`, `public-gallery-validation.json`). Initial pre-propagation 404/old-gallery observations were resolved by waiting for the already-running Pages deployment, not by modifying working application geometry.
