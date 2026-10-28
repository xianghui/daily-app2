# Computational validation — 2026-10-29

- Fresh reference download parsed and SHA-256 verified; 30,616 facets, dimensions/components and source defects recorded. Actual Z sections and rail section inspected. Source and gallery trees kept read-only.
- `node validate.mjs`: **28 valid built-in cases and 35 import-derived cases** passed independent binary STL checks for connected card and every detached part. Additional impossible carrier combinations rejected. Includes three presets, all-min/all-max and mixed extrema; threshold/grayscale/engraved image and ASCII/binary STL sources.
- Binary STL exact size, finite vertices, unit normals matching winding, nondegenerate triangles, mm bounds, positive signed volume per component, orientable topology and 1e-5 mm welded edge incidence/winding verified.
- Actual Manifold intersection checks: all six assembled solids disjoint to 0.001 mm³ numerical tolerance at coplanar float32 shoulders (default zero); sampled normal insertion 0–25 mm, shoulder stops, horizontal feet, no flat-card part overlaps. Twenty-four accessible snips do not cut parts and release six parts plus one carrier. Matching tokens pass their holes; larger tokens intersect earlier smaller apertures. Checks applied to imported outputs, not only defaults.
- `node browser-test.cjs`: real production file pickers and downloaded STL for PNG/JPEG, threshold/depth/crop/grayscale, binary/ASCII STL scale/height/rotation/placement, replace/remove/reset, min/max, each individual export. Bytes match UI fingerprint and regenerated portable JSON. Malformed/truncated/open/nonmanifold/concave/excessive meshes, bad image headers/pixels, empty silhouettes, invalid transforms and dimensions rejected recoverably. 320/390 px, real touch orbit and pinch, PNG/STL phone downloads, no overflow and no external requests/runtime errors passed.
- `node feature-test.cjs`: all presets, three random bounded variations, three silhouettes, text/icon/SVG and engraved/background personalization, file drag/drop, up-axis conversion, undo/redo, named designs, portable PNG/JPEG/ASCII/binary round trips, each actual per-part download, ZIP unpacking and STL validation, view neutrality, saved dark theme, keyboard focus and stale/invalid export gates passed.
- `node hole-test.cjs`: actual solid probes confirm ring center remains unraised/unengraved while dark ring adds/subtracts solid geometry; closed manifold checked.
- `node named-import-test.cjs`: named image/STL designs restore exact fingerprints after reload.
- `node portable-errors-test.cjs`: missing payload, wrong app, invalid transform and dimensions block export with recovery.
- `node resilience-test.cjs`: deliberately aborted production worker disables export; reload recovers. All six bundled marks change real geometry.
- `node stale-import-test.cjs`: delayed first decode cannot overwrite newer image selection.
- `node studio-layout-test.cjs`: 374 px desktop left rail/right viewer, all isolated modes, reduced-motion, phone preview-first/no overflow. Desktop/assembled/mobile/dark screenshots retained.
- `node gallery-validate.cjs`: all inline scripts compile with `new Function`; **242 earlier entries preserved**, new STL entry exactly once and newest first. Browser gallery and combined staged bundle tested before publication.

Reports are machine-readable `*-validation.json`. Fonts, WASM, worker and imports are local. Re-run browser tests using `node serve-production.cjs`; combined staging uses `node serve-root.cjs` at port5491 and `TEST_BASE=http://127.0.0.1:5491` for browser/gallery tests.

## Explicitly untested physically

No physical print, adhesive strength, friction/sorting reliability, fatigue or wear tests. Geometry clearance is not material fit or automatic feed validation. Print a deck/support pair first, tune total clearance for your printer, then adhesive-fix four joints. Hand-center/guide tokens. Adult craft only; keep small parts/cutters/adhesive away from children/pets.

## Publication staging

Root `npm run predeploy` staged **243 apps, 0 failed, 0 skipped**. Combined `/deploy` production bundle passed the full browser import/export/mobile suite again (`combined-browser-validation.json`), and the root gallery rendered 243 cards with newest-first STL category and search recovery. Root `npm run deploy` completed with `Published`; publication uses the combined root folder. Per-app deploy was not invoked.
