# Validation record — 2026-10-26

- `npm run predeploy`: passed, including final production rebuild.
- `npm test`: passed 68 parameter cases and 30 imported-output cases. Independent binary STL checks cover every part and combined print plate: finite coordinates, valid normals, nondegenerate triangles, welded closed edges, consistent winding, positive volume per component and millimeter bounds.
- Mechanism: square/catenary tangent relation, constant ideal axle height, road floor, side allowances, isolated customization, zero intersection at sampled rolling poses, vertical lift-off and separated plate checks passed. No physical print/dynamics/friction test is claimed.
- `npm run test:browser`: all seven production-bundle suites passed (uploads/downloads, features, additional bounds/layout, interactions, stale imports, resilience, and hole probes).
- Actual PNG/JPEG and ASCII/binary STL file-picker imports, source transform changes, pixel/threshold/depth changes and export fingerprints passed. Unsupported malformed, empty, concave, open, nonmanifold, oversized and invalid-state inputs block exports and recover through replace/remove/reset.
- Undo/redo, model thumbnails/presets, shape/text/icons/SVG, raised/engraved holes, local named designs, portable assets/JSON, per-part STL and ZIP contents passed.
- 320/390 px layouts have preview first, reachable exports, no horizontal overflow. Actual touch orbit/pinch tested. Desktop 374 px left rail, accessible focus, collapsible sections, reduced motion, saved themes, ghost and isolated/exploded/plate views passed.
- Root gallery: inline script compilation and runtime rendering passed; exactly one new STL entry, 168 previous entries preserved unchanged, 169 total entries. STL category remains first.
- Root `npm run predeploy`: 169 staged, zero failures/skips. Every app index exists, new app's 43 built files are byte-identical in `deploy/`.
- `TEST_BASE=http://127.0.0.1:5334 TEST_REPORT=staged-browser-validation.json node browser-test.cjs`: passed against the final combined staged collection. Initial harness run could not resolve directory index URLs; fixed local test-server routing, then reran successfully. The public app did not have this harness issue.
- Root `npm run deploy`: Published via gh-pages. Live URL returned HTTP 200. `node live-smoke.cjs`: live worker/WASM loading, real PNG file import, actual downloaded STL, exact preview/export/JSON signature, closed positive-volume output and zero page errors passed.

Reproducible scripts, JSON reports and screenshots are included. Personal user files were not used or committed. Read-only archive and Keycap Studio reference were not modified.
