# Fin Ray validation record — 2026-10-23

## Executed checks

- `npm run predeploy`: React/Vite production bundle succeeds, with locally bundled WASM and dependencies.
- `npm test`: 78 parameter cases (all 64 corners, defaults/extrema, three presets, eight deterministic variations); 24 image/STL integration cases; eight invalid-input guards. Independent exported-binary checks verify triangle normals, nondegeneracy, finite coordinates, welded edges with incidence exactly two, opposite neighbor winding, positive component volume, one connected solid and millimeter bounds.
- Default export: 2,316 triangles; one component; genus six (six open cells); approximately 2,193.24 mm³; 78.50 × 30.00 × 4.85 mm.
- `node variation-regression.mjs`: another 128 seeded parameter combinations pass binary export and geometric mechanism constraints; 12 additionally run solid intersection probes.
- `node browser-test.cjs`: actual desktop and mobile file-picker imports for PNG/JPEG/ASCII STL/binary STL and actual generated downloads; compare hashes with built-in geometry and modified conversion/transform states; preview/export fingerprint identity; UI mm dimensions; empty silhouette and ten malformed/unsupported fixtures; replace/remove/reset; per-part export; 320/390 px viewports; actual CDP touch orbit and pinch zoom. No page runtime errors or remote processing requests.
- `node extra-browser.cjs`: all presets, four browser-randomized models and four imported variants receive independent mesh/mechanism checks; portable JSON round trips for every bundled source; undo/redo; drag/drop; preview colour remains geometry-neutral.
- `node mobile-sheet.cjs`: 320 × 740 px, collapse/expand, every control tab, no horizontal clipping, fixed download action always inside viewport.
- `node gallery-test.cjs`: all inline scripts compile with `new Function`; one correct new `stl` entry; all 92 earlier entries retained, 93 total; category order, search and runtime rendering pass.
- Root `npm run predeploy`: 93 app builds copied, zero failed/skipped; root gallery and all 93 app entry points checked in the combined deploy tree.

See JSON reports for exact parameters, source cases and measurements; screenshots show desktop and phone layouts. Production-build browser and published-site results are recorded in their separate reports once executed.

## Mechanism checks, not physical certification

Two converging rail spans and five cross ribs are probed at five material stations each. Six cell interiors and both sides of each rib have air probes. Palm imports remain isolated from the flexible frame by 18 mm. Parameterized centerline rib spacing minus projected rib width stays above the conservative exclusion envelope for up to 0.5 mm small displacement. This analytical envelope is not FEA, a deformed mesh, a force prediction or a demonstration of adaptive curling. Connections are intentionally fused; no captive moving interfaces, bearings, supports, assembly hardware or multi-part layout collisions exist.

## Issues found and resolved

1. The shortest, thickest fin had excessive rib crowding near its tapered tip. Moved the five rib stations from sixths to sevenths of reach, leaving a longer free tip cell. Rechecked all parameter corners and imported cases, including lateral air and open-cell probes.
2. A browser-randomized STL exposed a normal inversion on a very thin face after an unnecessary XY translation was rounded to binary-STL float32 coordinates. Single-part export now preserves the original finite mesh coordinates exactly; Z is already bed-flat. Preview/export still use identical final geometry. Reran all parameter, import, browser-variation and 128 seeded export checks.
3. An inherited browser-test field value was outside this new mechanism's width range. Updated the test input to 28 mm; no weakening of production range validation.

**No physical print, force, fatigue, support-removal or adaptive-curling test has been performed.** TPU recommendations and sub-0.5 mm starting motion are calibration guidance, not universal guarantees.

## Final deployment verification

- Repeated the complete file-import/download/invalid-file/mobile browser suite against the production bundle in the root combined deploy tree: passed (`production-browser-validation.json`).
- Repeated the 320 px mobile sheet and fixed-export tests against that production build: passed.
- Root `npm run deploy`: published successfully through `gh-pages -d deploy`.
- `node public-check.cjs`: public app loads with no failed requests or page errors; bundled PNG becomes actual downloadable closed-manifold STL; public gallery lists Fin Ray first (`public-validation.json`).
- Live URL: https://xianghui.github.io/daily-app2/20261023-13/
