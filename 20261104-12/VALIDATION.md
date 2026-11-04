# Observed validation — Napoleon & Centres

Run against the production Vite output at `/daily-app2/20261104-12/` on 2026-11-04.

- `npm run predeploy`: passed. Local JS worker, WASM, fonts, image/STL samples emitted under the configured base path.
- `npm test`: **67 cases passed**. Defaults, three presets, all individual parameter endpoints, joint min/max (including image/STL inputs), all three silhouettes and 24 triangle/silhouette corners. Every case independently parses card, all seven clean-part STLs and combined clean plate: nonempty finite nondegenerate triangles, correct normalized normals/winding, 1e-5-mm welded two-face edges, positive volume per component and expected millimeter bounds.
- Independent CSG assembly checks: 28 tab cuts release exactly seven unharmed parts plus carrier; one connected card remains within declared X/Y/Z envelope; no unintended flat/assembled overlaps; 21 assembled pairs; bottom foot insertion and top inset/gauge insertion in assembly order; support-free sampled XY footprints; floor/backing limits; equal centroid triangle sides; registered sight holes. Functional holes/sockets remain clear in the real connected-card mesh, not only clean parts.
- `browser-test.cjs`: passed **22 actual main download states** plus eight selected part downloads. Real PNG/JPEG, ASCII/binary STL file-picker imports; pixel content/threshold/depth/crop/relief/scale changes; source size/rotation/depth/placement; explicit millimeter gate; replace/remove/reset; source/final previews. Download bytes match preview fingerprint and a Node rebuild from the downloaded portable JSON. Imported outputs receive the same mesh/assembly checks. Zero runtime errors or external requests.
- Browser rejects malformed/truncated, open, duplicated-face/nonmanifold, excessive-size/triangle/dimension, fake/oversized raster, concave STL and empty-silhouette inputs; export remains blocked until recoverable correction/reset. Empty/unsafe transforms also block export.
- `studio-test.cjs`: passed three real presets, silhouettes, text/icons/SVG, source payload roundtrips, named save/reload, missing-image rejection, undo/redo, every ZIP STL parsed, views, saved dark theme, keyboard focus, collapse, reduced motion, 374-px desktop rail, phone preview-first ordering, intentional worker-load abort/recovery.
- `orientation-test.cjs`: Z/Y/−Z imported orientations passed, with source dimensions and exact final fingerprints, solids and assembly checks.
- `stale-test.cjs`: rapid parameter/image edits immediately disable exports; latest-only response and invalid-transform recovery passed.
- `image-hole-test.mjs`: actual Boolean volume probes confirm an image ring engraves while its bright center retains solid backing.
- `icons-drop-test.cjs`: six icons produce real checked geometry; genuine browser file drag/drop passed.
- `interaction-test.cjs`: preview-only gauge lift, three bounded variations, all five bundled sample buttons and exact reset passed.
- `mobile-layout.cjs`: all five tabs, expanded guide and real JSON downloads at **320 and 390 px**; no document/inner/visual viewport overflow, reachable exports.
- `isolated-test.cjs`: all seven clean-part isolated views and actual STL downloads passed.
- Touch-enabled phone: orbit and pinch change canvas pixels; PNG and STL imports, unit confirmation and actual STL downloads passed.
- Reference STL was actually downloaded, hashed, parsed and sectioned. Selected source and local rejected candidates are recorded in `reference-analysis.json`; actual section image is in `evidence/`.
- Gallery inline scripts compile with `new Function`; new entry appears exactly once with `area:"stl"`; prior entries are unchanged. Browser category/order/link/search/runtime checks passed.

Fixed during validation: runner attachment over steep contours now considers the full width band, preventing detached runner fragments after snipping; engraving patch position now respects the hexagon's apothem. Inset insertion checks follow the actual sequence (gauge is removed first), rather than attempting to lift an inset through a gauge resting on it.

Computational results do **not** establish physical print success, material fits, adhesive strength, durability or physical assembly. None was physically tested. Optional feet require adhesive; insets/gauge are deliberately loose. Print a calibration foot/deck pair; tolerances are printer/material dependent.

Reproduce: `npm test`, `npm run predeploy`; serve `dist` under the real base prefix (`python3 serve-production.py`, port 5872), then `node browser-test.cjs`, `node studio-test.cjs`, and the additional scripts named above. `TEST_BASE` changes the server origin. Reports are machine-readable `*-validation.json`; screenshots are in `evidence/` and the app root.

## Root publication

Root `npm run predeploy` and `npm run deploy` completed successfully: **435 built, zero failed, zero skipped**. Every gallery entry has `deploy/<folder>/index.html`; the new deployed index matches the tested production bundle. GitHub Pages run [41758942803](https://github.com/xianghui/daily-app2/actions/runs/41758942803) completed successfully for gh-pages revision `96a308449a7b9a4e7ef7bb174db9cc33ba575962`. Initial public 404s during the Pages rollout were retried after deployment completed. The live gallery then passed entry preservation, category order, link and search checks.

The complete `browser-test.cjs` suite also passed against **https://xianghui.github.io** after rollout: 30 actual STL downloads, local imports, transformations, rejection/recovery, exact preview/export and Node-regeneration signatures, phone touches/downloads, zero runtime errors or external service requests. Results: `public-validation.json`.
