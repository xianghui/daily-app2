# Completed validation — Delboeuf & Compare / 20261103-5

## Reference

Fresh read-only parse of accessible cached public White Cat Kit Card STL after direct endpoint returned HTTP403. SHA-256 matched documented source: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Actual mesh sections Z=.10/.50/1.59mm visually inspected. Local clicker/fabric candidates also freshly parsed. Source defects disclosed, no raw source redistribution or repair claim. See `reference-analysis.json`, `reference-measurements.json`, source license and section image.

## Geometry and assembly — passed

`npm test`: **41 variants** across three presets, three silhouettes, individual and combined parameter extrema, threshold/grayscale/hole images, ASCII/binary STL and transformed imports. Every part and final float32-translated clean plate independently parsed: nonempty binary STL, exact byte length, finite coordinates and unit normals, no degenerate triangles, expected mm bounds, consistent outward winding, positive volume per component, welded1e−5mm edge incidence exactly2/opposite direction. Invalid dimensions and empty images rejected.

Default card **160 ×195 ×1.60mm**,5,892 triangles, one connected closed component. Five clean parts: deck3,084 triangles, each annulus768 triangles, each equal disc380 triangles. Both disc STL bytes identical.

Both ring permutations collision-free; each loose part tested at ten top-down insertion heights. Actual recesses/floors and open ring holes independently probed. Positive fit clearance, ≥.8mm locating land, ≥1mm backing and accessible proud edges checked. Flat parts do not overlap. Upper sections fit the bed footprint. Simulated20 safe runner cuts release carrier +five undamaged parts. Gravity-seated, not captive; no hardware or adhesive. No force/fatigue/physical fit claim.

## Production browser — passed

`browser-test.cjs`: real PNG/JPEG/ASCII/binary file-picker uploads and actual downloaded STLs, compared to no-import default. Image content, threshold, depth, fit/crop and scale change solid output. STL scale/rotation/placement/depth change solid output; explicit mm confirmation gates export. Replace/remove/reset restore correct bytes. Exact current preview fingerprint agrees with downloaded bytes and regeneration from saved JSON. Every individual part downloaded and parsed.

Ten malformed/unsupported/excessive source fixtures rejected recoverably, plus empty silhouette, invalid dimensions/transforms and keep-in violations. All invalid cases disable exports. No page runtime errors or remote/network upload requests.

`studio-test.cjs`: every real preset,3 silhouettes, text/searchable icons/SVG, portable image+mesh JSON, named-design reload, absent-payload reattachment error, undo/redo, actual ZIP unpacking and every contained STL validation, all views, saved dark mode, focus, collapsible sections, reduced-motion context,374px left desktop panel,320px preview-first layout, aborted-worker error and recovery.

`orientation-test.cjs`: Z/Y/−Z, explicit units, expected source dimensions and resulting mesh/assembly checks.

`icons-drop-test.cjs`: all6 icons alter exported geometry; every result passes independent mesh/assembly checks; actual drag/drop import.

`stale-test.cjs`: rapid parameter/image changes immediately block stale exports; only latest valid state exportable; invalid transforms recover.

`presentation-test.cjs`: assembled/exploded/card/clean/isolated views, visible ghost opacity change without export change, all tabs at320/390px without horizontal overflow, reachable exports. Screenshots visually inspected.

`swap-test.cjs`: visible exchange of surrounds without printable geometry changes; all6 prominent per-part buttons produce downloads. Matched disc colors and matched ring colors confirmed by implementation and screenshot inspection.

Phone390px CDP touch orbit and pinch both visibly change canvas; PNG and binary STL import/download on phone;320px export reachability. Source and cutout previews on checkerboards.

## Build, gallery and combined staging — passed

`npm run predeploy`: production worker/WASM/fonts locally bundled and successful build.

`gallery-test.cjs`: all inline scripts compile using `new Function`; missing scripts fail; new entry exactly once, `stl`, newest first, correct path. All400 earlier entries unchanged;401 cards render without runtime errors; STL Generators remains first.

Root `npm run predeploy`: **Built401 / Failed0 / Skipped0**. Root gallery bytes match deploy/index.html; every401 referenced app has deploy/folder/index.html; new app deploy matches dist.

Full browser import/download/negative-input/phone suites repeated against combined staged output at5756, not merely Vite dev server. Staged gallery runtime checks also pass. Reports: `staged-browser-validation.json`, `staged-gallery-validation.json`, `deploy-validation.json`.

## Explicit limits

These are computational mesh, assembly-path, source-provenance and browser checks. **No physical print, slicer, friction, strength, fit, retention-under-inversion or perceptual experiment was performed.** No guarantee of universal tolerances or illusion strength. Parts deliberately loose; keep level. Unsupported STL shapes are rejected rather than repaired or convex-hulled.

## Publication

Root `npm run deploy` completed successfully (`Published`) from the combined deploy directory; its automatic predeploy again reported Built401 / Failed0 / Skipped0.

GitHub Pages workflow [41507443588](https://github.com/xianghui/daily-app2/actions/runs/41507443588) completed successfully. Initial public404 was deployment propagation, not a generator failure; retry after workflow completion passed. `public-test.cjs` confirmed publicHTTP200, production worker/WASM generation, actual downloaded default STL matching Node bytes, and401 public gallery cards with zero runtime errors. See `public-validation.json` and public screenshots.
