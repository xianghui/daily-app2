# Computational validation · 2026-11-04

No physical print, friction, fit, adhesive-strength, fatigue or motion testing was performed.

## Passed before publication

- Reference: actual downloaded 30,616-triangle STL parsed, SHA-256/bounds/27 components/Z planes recorded, sections at .10/.215/1.59 mm inspected. Source sheet/socket/tab measurements map to real kit parameters; raw source mesh not bundled.
- `npm run predeploy`: production React/Vite build successful. Worker, Manifold WASM and fonts bundled locally.
- `npm test`: **37 cases passed**. Defaults/three presets, combined and individual extrema, three silhouettes, transformed ASCII/binary STL sources and threshold/grayscale image sources. Every card/part/translated clean plate checked independently: float32 binary length/count, finite vertices/normals, unit outward normals, nondegenerate faces, positive volume per connected component, millimeter bounds, two opposite-directed incident triangles per 1e−5-mm-welded edge.
- CSG checks per case: declared card envelope, one connected card, twenty actual tab cuts release carrier + five unharmed parts, no unwanted flat/assembled overlaps, bed-supported footprints, foot insertion from below, annular guide insertion, safe art backing. **73 poses from 0–360°** plus vertical needle lift release tested per case, no unwanted intersections. Needle is intentionally removable and not captive.
- `browser-test.cjs`: development AND exact-base-path production hosting. Actual file-picker PNG/JPEG/SVG/ASCII/binary STL; 2D pixels/threshold/depth/crop and STL scale/rotation/placement change downloaded geometry. Download fingerprints equal UI preview fingerprints and Node regeneration from downloaded portable JSON. Imported outputs receive the same mesh/mechanism checks. Actual individual-part downloads parsed.
- Invalid/truncated/open/nonmanifold/concave/oversized/bad-dimension meshes, false image headers, excess pixels/triangles, empty silhouettes and out-of-range transforms rejected recoverably, export disabled.
- `studio-test.cjs`: development and production. Three thumbnail presets, three silhouettes, text/icon/SVG geometry, portable image/mesh JSON, named-design reload, missing-payload rejection, undo/redo, all six actual ZIP STLs parsed, views, saved dark theme, focus outline, collapsed section, reduced motion, left 374-px rail and 320-px preview-first phone. Worker script abortion blocks export; reload recovers.
- `stale-test.cjs`: development and production; rapid edits immediately disable old export; newest final result equals independent Node generation. Invalid import transforms recover.
- `orientation-test.cjs`: real Z/Y/−Z STL file-picker import, dimensions and current export checked.
- `icons-drop-test.cjs`: six icon conversions receive independent mesh/assembly checks; real PNG drag/drop works.
- `image-hole-test.mjs`: real Boolean probes verify bright center remains solid while dark ring is engraved.
- `interaction-test.cjs`: needle pose changes preview without changing printable bytes, three bounded variations and all five sample buttons work.
- `isolated-test.cjs`: all five isolated views and actual closed-part downloads.
- `mobile-layout.cjs`: 320/390-px all editor tabs and expanded instructions do not widen layout; real JSON-save/download actions reachable. Browser suite uses CDP touch orbit and pinch, verified by changed canvas images, and phone PNG/STL downloads.
- Gallery: inline scripts compile with `new Function`; new STL entry exactly once, correct folder/link, newest first, STL category first, **all 433 previous entries retained**. Browser rendering/search has no runtime errors.
- Root `npm run predeploy`: **434 apps, zero failures, zero skips**. Root gallery and all new-app deployed assets match production output byte-for-byte.

## Reports

`geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `studio-validation.json`, `stale-validation.json`, `orientation-validation.json`, `icons-drop-validation.json`, `image-hole-validation.json`, `interaction-validation.json`, `isolated-validation.json`, `mobile-layout-validation.json`, gallery reports, and screenshots under `evidence/`.

All production import/generation requests stay local; runtime error and remote runtime request lists are empty. Vite's large-chunk warning is informational; actual worker/WASM loading was exercised successfully. Bounds that do not fit the selected card are explicitly rejected, not silently repacked beyond the envelope.

A mathematical route plus sampled rigid collision checks is not proof of physical usability or universal FDM tolerances. Print/calibrate the foot/deck pair; the loose needle is hand-guided, not automatically driven. Adhesive is required for normal assembly; no snap-fit or captive retention is claimed.

## Live publication

Root `npm run deploy` published the combined `deploy/` site. After GitHub Pages deployment propagation, `public-smoke.cjs` passed against the real HTTPS URL: worker/WASM load, actual default STL download/manifold checks, preview/download signature equality and a real local ASCII-STL import producing a different valid downloaded tray. No live runtime errors. `public-validation.json` and `evidence/public-app.png` contain the result. Source commit `2cf01c1b` was pushed to `origin/main`.
