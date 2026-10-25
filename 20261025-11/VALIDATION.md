# Validation — S-Curve Drift (2026-10-25)

## Geometry and mechanism

- `npm test`: **132 parameter cases** (default, all three presets, all 128 min/max combinations) and **35 personalized cases** (threshold/grayscale/engraved images and ASCII/binary STL across representative parameters).
- Independent exported-binary-STL checks: nonempty finite triangles, unit outward normals, nondegenerate faces, welded closed two-incident-face edges with opposite winding, positive volume of every component, dimensions, bed orientation, separate components and every individual STL.
- Three routed poses × six actual CSG component-pair intersections per model: **no unintended intersection**; band/roller nominal spacing and end limits maintained. Ribbon calculated arclength constant, protected palm imports isolated, all print bodies separated.
- First routing check exposed chord-tessellation contact at the roller; fixed using an explicit documented 0.04 mm nominal route allowance. Tiny proxy triangulation slivers were removed with bounded simplification. Final geometry suite passed.
- Plate default bounds: **174.50 × 66.28 × 18.00 mm**. Four connected printable parts, not overlapping shells. Ribbon exports flat; assembled bend is explicitly an estimated pose.

## Browser / features

- `browser-test.cjs`: real PNG/JPEG/ASCII/binary STL file selection, actual STL downloads, byte fingerprints equal the current model, portable JSON regeneration equals export, source and threshold/depth/crop/scale/rotation/placement changes affect geometry.
- Remove/reset/replace and unit confirmation gate; invalid/truncated/open/nonmanifold/excessive/wrong-format/large-dimension/concave inputs; recoverable errors and invalid export disabling. No remote-file processing requests or browser runtime errors.
- Touch orbit and pinch, 390 px and 320 px phone layouts without overflow, reachable file picker/export; paired input controls and left-panel/right-preview desktop layout.
- `feature-test.cjs`: every preset, bounded variations, silhouettes, text/icons, SVG raised/engraved/background, portable image and STL round trips, saved named designs after reload, undo/redo, per-part STL and **four-STL Everything ZIP**, all six views, saved theme, preview-only colours, drag/drop, Y-up STL, collapsible sections, focus and invalid/stale export blocking.
- `mechanism-browser-test.cjs`: left/center/right routes leave export unchanged; see-through cage; source SVG center hole confirmed in pixels **and actual final-solid probes**, with adjacent raised ring present.
- `resilience-test.cjs`: worker-load failure blocks export; reload recovers; malformed JSON blocks export; reset recovers.
- Screenshots include desktop, phone, dark, assembled, isolated views and three routed poses. Images reflect geometry/interaction checks, not physical prints.

## Build / gallery / publication

- Individual `npm run predeploy` passed (bundled worker, WASM, fonts and dependencies).
- `production-test.cjs`: actual production bundle, worker/WASM, bundled sample and downloaded valid four-component STL; no runtime/request errors.
- Root gallery: every inline script compiled with `new Function`, exactly one newest STL entry, all previous entries preserved, STL category first, search and rendered links checked.
- Root `npm run predeploy`: **139 built, 0 failed, 0 skipped**. Deploy folder checked for root gallery and all 139 app entry points, including byte-identical new production bundle.
- Root `npm run deploy` published successfully. GitHub Pages action 40149688514 completed successfully. Public gallery and live app/worker/WASM/sample/STL-download checks passed; see `live-gallery-validation.json` and `live-validation.json`.
- The complete browser import/export/mobile suite also passed against the combined root production deploy (`production-browser-validation.json`).

## What is NOT validated

No physical print was made. No material fatigue, elastic response, friction, comfort or tactile-force simulation/testing was performed. The geometric strain ratio is not a material allowance. The actual ribbon may require printer/material tuning; start with Pocket Drift, use soft TPU, keep the front up, and release/rethread rather than force parts. Open-front parts are intentionally removable, not permanently captive.
