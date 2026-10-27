# Crate & Carry — validation record

Date: 2026-10-27. Automated computational/browser checks, **no physical print or fit/load testing**.

## Completed before publication

- Reference STL downloaded and independently parsed: 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 179.819997 × 178.019994 × 3.190000 mm; two edge-connected components and source defects explicitly recorded. Inspected real Z=.1/.5/1.59 mesh sections and Y=100 rail section; source README/LICENSE/SCAD corroborated measurements. No raw source mesh bundled.
- `npm run predeploy`: production React/Vite bundle passed. Worker, WASM and fonts locally bundled under the correct `/daily-app2/20261027-26/` base. No generation CDN/API dependency.
- `node validate.mjs`: **12 parameter cases + 30 import cases passed**. Default, all presets, min/max, six variations; ASCII/binary STL, threshold, relief and engraving imports across default/presets/extremes.
- Every actual exported card and each of five loose panels: nonempty finite nondegenerate triangles, normalized stored normals consistent with winding, two opposite-directed incident faces per edge after 1e-5 mm welding, one positive-volume component, expected mm bounds and Z=0 print base.
- Mechanical checks independent of watertightness: ten assembled panel pairs, nine samples per stage along wall/floor Y insertion and end/trio X insertion, no unwanted solid intersections; floor Z and wall Y restraint probes; no flat-layout overlap; each panel included in connected carrier; **20 cutter cuts give six components: frame + five parts**; card XY bounds match declared envelope; four vertical panels share desk plane.
- Real production-browser file picker PNG/JPEG/ASCII STL/binary STL uploads and downloads. Compared no-import, changed threshold/depth/pixels/crop/scale, STL size/rotation/height/placement, replace/remove/reset and default/min/max. Each download parsed; preview fingerprint equals downloaded bytes and independently regenerated portable design. Both phone import paths exercised.
- Invalid file type/content, truncation, open/nonmanifold, excessive bytes/pixels/triangles, source dimensions, concave geometry, empty silhouette, invalid transforms/envelope and unsafe medallion placement reject recoverably and block export.
- Every preset, bounded variations, all three silhouettes, text, six original icons, SVG ring, raised/engraved/inverted-background image workflows. Independent tiny-solid probes verify ring holes remain unraised/unengraved in actual final mesh.
- Undo/redo, local named saves surviving reload, portable JSON round trips including bounded PNG/JPEG/ASCII/binary STL assets; missing-image/invalid-transform/wrong-app/dimension payload rejection and reset recovery.
- Actual Everything ZIP unpacked: six valid STLs and numbered assembly instructions. All prominent per-part download actions exercised. Assembled, exploded, connected-card, loose and isolated views change preview positioning, not printable geometry. Colour changes alter preview, never imply colour in STL.
- Worker script deliberately aborted: visible failure and export disabled; reload recovers. Rapid edits select latest result; delayed old image normalization cannot overwrite newer imports. Invalid edits cannot export last-good geometry.
- Desktop 1440×1000: 374 px left rail/right viewer. Phones 320/390 px: preview/export before stacked controls, no horizontal overflow, reachable exports, real CDP touch orbit and pinch. Theme persists, collapsible sections, selected tactile controls, keyboard focus and reduced-motion verified.
- Gallery inline scripts compiled with `new Function`; new STL entry exactly once/newest first/correct folder; all **209 previous entries retained**, now **210**. Browser gallery rendering/search/category order: no runtime errors. Root predeploy prepared **210 apps, 0 failed, 0 skipped**.

- Full browser import/download/mesh/mobile suite repeated against the ROOT combined deploy output: passed (`combined-browser-validation.json`), including zero runtime errors and zero external generation requests.

- Root `npm run deploy`: Published. GitHub Pages build completed. Initial post-publish 404 occurred while Pages was building; after build completion the public smoke test passed: HTTP 200, real locally processed PNG import and parsed STL download, exact preview fingerprint, loaded worker/WASM, all 210 public gallery cards and no runtime errors.

## Reproduce

`npm test`; `npm run predeploy`; `node serve-production.cjs` (5415); then browser-test.cjs, feature-test.cjs, hole-test.cjs, resilience-test.cjs, portable-errors-test.cjs, stale-import-test.cjs and studio-layout-test.cjs. See individual `*-validation.json`, `validation-summary.json` and screenshots. Combined output is served by serve-combined.cjs (5416); set TEST_BASE and TEST_REPORT for a separate full browser pass. gallery-test.cjs checks combined gallery; public-smoke.cjs checks the actual published site after deployment.

## Limits

STL import deliberately supports only single closed convex flat-bottom solids; unsupported concavities are rejected, not replaced by a convex hull. Image conversion is coarse 20×20 sampled relief with a continuous backing, not full 3D reconstruction or exact vector tracing. End joints are removable slip fits, not latches. Printer/material calibration is required; no universal clearance, retention-force, strength or load claim. Optional glue is user-applied only after fitting. All source trees and old daily_app collection remain unchanged.
