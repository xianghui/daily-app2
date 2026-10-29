# Performed validation

- Actual downloaded reference parsed: 30,616 triangles; SHA-256 and dimensions/components in `reference-analysis.json`; real mesh cross-sections in `evidence/reference-sections.png`.
- `npm run predeploy`: production bundle succeeds; local worker/WASM/fonts resolve at the configured base path.
- `npm test`: 8 built-in cases and 8 image/STL cases. Every exported part/card: exact binary byte count, finite triangles, unit normals matching winding, no degenerate faces, opposite directed edge incidence at 1e−5 mm weld tolerance, positive per-component volume, expected mm bounds.
- Assembly: zero unintended solid intersection, six clear socket volumes, all three upright panels can lower vertically with others seated, shoulders block over-insertion, flat parts disjoint; sixteen safe snips produce four parts and one carrier. Adhesive retention is disclosed, not inferred from watertightness.
- `node hole-check.mjs`: raised/engraved ring holes probed against the actual boolean solid.
- `node browser-test.cjs`: actual PNG/JPEG/ASCII/binary file pickers and downloaded STLs; threshold, relief, crop, scale, rotation and placement change geometry; reset reproduces baseline. Malformed/truncated/open/nonmanifold/concave/oversized/empty/bad-dimension inputs block exports and recover. Independently regenerate exact saved state, compare UI/export fingerprints, then validate each part and assembly. 320/390 px layout, no overflow, touch orbit and pinch, phone image/STL downloads, no unexpected remote requests or runtime errors.
- `node studio-test.cjs`: every preset, three silhouettes, text/searchable icon/SVG, image/mesh JSON round trips, named-design reload, missing-payload error, undo/redo, all ZIP STL members parsed, assembled/exploded/card/loose/isolated views, dark theme reload, focus, collapsing, reduced motion, desktop 374 px left rail, preview-first phone, aborted worker blocks export and recovers on reload.
- `node supplemental-test.cjs`: Y/−Z imports round-trip actual geometry; rapid edits match current parameters; invalid edits cannot export last-good mesh.
- Gallery scripts compiled with `new Function`; exactly one new STL entry, newest first; all 269 prior entries preserved. Combined gallery runtime has no errors and all 270 cards render. Root predeploy: 270 apps, zero failed/skipped; root index and every new-app asset match source builds byte-for-byte. Combined production route repeats default plus four import/export cases.

Reports: `validation-report.json`, `browser-validation.json`, `studio-validation.json`, `supplemental-validation.json`, `hole-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `root-deploy-validation.json`, `combined-browser-validation.json`.

These are computational prototype checks. No physical printing, slicer simulation, adhesive-strength, wear, fatigue, load or food-safety testing was performed. Calibrate fit on the target printer/material; adhesive is required and the scoop is intentionally unsealed.

## Live publication

Root `npm run deploy` published the combined `deploy/` tree successfully. Public Pages returned HTTP 200. `node public-smoke.cjs` repeated default, PNG, JPEG, ASCII STL and binary STL imports against the live hosted worker/WASM, downloaded actual STLs, matched exact current-state fingerprints and reran independent topology and assembly checks. See `public-validation.json` and `evidence/live-pages.png`. No runtime errors observed.
