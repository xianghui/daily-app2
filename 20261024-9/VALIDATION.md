# Validation record · 2026-10-24

- `npm run predeploy`: passed.
- `npm test`: 78 parameter cases + 24 imported-output cases passed. Every required part checked separately and together; welded manifold edges, normal orientation, finite/nondegenerate triangles, positive component volumes and independently calculated millimeter bounds.
- CSG mechanism checks: no resting or small free-stroke collisions, intentional oversize bulb interference, supported wall/thickness dimensions, separation of export parts and imported relief/mesh isolation from the flexible aperture. Passing the bulb requires deformation and is NOT validated by rigid collision-free claims.
- `node browser-test.cjs`: passed. 24 real STL downloads with exact preview/export fingerprints, PNG/JPEG and ASCII/binary STL picker inputs, measurable source/settings/transform changes, unit confirmation, 10 malformed/unsupported input rejections plus empty-image/invalid-transform recovery, per-part export, 320/390px layouts, touch orbit and pinch zoom. No runtime errors or generation-related remote requests.
- `node extra-browser.cjs`: passed. Three presets, four browser variations, downloaded mesh/mechanism checks, image and mesh portable JSON round trips, undo/redo, source drag/drop, ZIP with two independently validated STL parts + assembly notes, preview/layout switching and geometry-neutral palette changes.
- `node mobile-sheet.cjs`: passed. 320×740 phone, collapsible controls, all five tabs, export button within viewport, explicit untested-print guidance.
- `node gallery-test.cjs`: passed. All inline scripts compile, new entry exactly once and first with area `stl`, all **112** earlier entries preserved; 113 total. Runtime render/search and STL-first category checked.
- Root predeploy: passed, 113 built / 0 failed / 0 skipped. All deploy app indexes present and root index byte-identical to source. Archived tree read only and untouched.

See machine-readable `*-validation.json` reports and desktop/mobile screenshots for observed results. `production-browser-validation.json`: full browser import/export/phone suite also passed against built root deployment assets. `public-validation.json`: live GitHub Pages app, sample image conversion, downloaded manifold STL and newest gallery link verified, without runtime errors or failed requests.

No physical print, force, elasticity, retention or fatigue testing. TPU 95A eyelet required. Start with Gentle Gate full-size calibration; clearance/interference values are not universal.
