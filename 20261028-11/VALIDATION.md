# Validation — Tilt & Louver / 20261028-11

No physical print, fit, force, durability or assembly test was performed. This report distinguishes computational geometry from physical validation.

- `npm run predeploy`: production React/Vite build passed; local worker/WASM/fonts bundled.
- `node validate.mjs`: **14 parameter cases + 30 import cases passed**. Actual serialized card and each of seven part STLs checked for finite coordinates, nondegenerate triangles, normalized winding-consistent normals, positive per-component volume, 1e−5 mm welded two-face/opposite edge incidence, correct millimeter bounds and Z=0 bed contact. Each part/card one connected solid.
- Mechanical tests: no unwanted assembled intersections; independent and simultaneous full-revolution blade sweeps; right-cheek axial insertion samples (left symmetric); all seven parts contained in card; flat parts separated; card envelope matches parameters. 28 real cutter booleans produce exactly **8 components: carrier + seven parts**. Independent envelope calculation includes rectangular-pivot positional play, with positive remaining adjacent-blade separation for the supported range. Fits are proposed/calibratable, not universal. Ties are explicitly friction-seated, not locked.
- Reference: actual downloaded binary source parsed, SHA-256/provenance/units/dimensions/components recorded; sections Z=.1/.5/1.59 mm inspected and saved. Source defects disclosed, not silently repaired; no raw source mesh bundled. New sheet, rails, tabs, pivots and tongue/mortise construction mapping documented.
- `browser-test.cjs`: real browser file-picker PNG/JPEG/ASCII/binary imports, actual downloads, thresholds/depth/content/crop/scale/rotation/placement changing exported geometry vs built-in. Exact downloaded fingerprint equals current preview/export fingerprint AND regenerating portable JSON in Node. Final meshes and mechanics checked for imported outputs, not only defaults. Replace/remove/reset reproduces defaults. Invalid/truncated/open/nonmanifold/concave/excessive/dimension/transform and empty-image errors disable exports and recover. Phone 320/390 px, real CDP touch orbit and pinch, local file uploads and STL downloads passed. No external runtime requests or page errors.
- `feature-test.cjs`: all presets and three bounded variations; all cheek silhouettes; real text/icon/SVG and raised/engraved/inverted-image geometry; per-part downloads, all eight STL entries from actual ZIP parsed; portable image/STL and local named design persistence; undo/redo; saved theme; preview colors geometry-neutral; all views geometry-neutral; axis conversion, drop import, collapse, focus, rapid worker edits and invalid export blocking passed.
- `hole-test.cjs`: real final-solid probes show ring white interior unraised and unengraved, surrounding dark ring changed. No false claim of exact outline tracing.
- `studio-layout-test.cjs`: 374 px left rail/right viewer; all isolated parts; preview-first phone order/no horizontal overflow; reduced motion; no runtime errors.
- `resilience-test.cjs`: aborted production worker blocks export; reload recovers; all six original bundled icons yield different geometry.
- `portable-errors-test.cjs`: missing image payload requests reattachment; invalid transforms/dimensions/wrong-app JSON block export; reset recovers.
- `stale-import-test.cjs`: delayed first-image decode cannot overwrite later selection.
- `pose-validation.json`: angle slider visibly changes centered slat preview without modifying bed-flat export geometry.

Reports are machine-readable JSON files alongside this document. Production screenshots include assembled, exploded, all isolated views, flat card, phone, dark theme and reference sections. Root/gallery/public reports are written by deployment checks after app validation.

## Combined publication

- Root inline script compiled with `new Function`; new `stl` entry exactly once/newest first; all **222 previous entries preserved**.
- Root `npm run predeploy`: **223 apps staged, 0 failed, 0 skipped**. Root index identical; 43 production files for this app hash-identical in `deploy/20261028-11/`. Actual staged PNG/STL imports and downloads passed. Gallery renders all 223 cards with STL category first, no runtime errors, search recovery verified.
- Root `npm run deploy`: `Published` (gh-pages commit `a4a694ecef298729b241ff158cbbcae02f64d599`). Initial public 404s were checked against GitHub's Pages build API: build was still running, source file already present on gh-pages. After Pages reported `built`, the public smoke test passed without model/code changes.
- Public URL: https://xianghui.github.io/daily-app2/20261028-11/ — HTTP 200, worker/WASM loaded, real PNG file-picker import and downloaded STL fingerprint/mesh checks passed. Public gallery shows all 223 cards with Tilt & Louver newest, no runtime errors. See `public-validation.json`.
