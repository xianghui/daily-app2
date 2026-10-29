# Verification — 2026-10-29

All checks refer to this app, not its infrastructure predecessor. No physical print or flight test performed.

- App `npm run predeploy`: PASS, locally bundled production worker/WASM/fonts.
- `npm test`: PASS, 30 built-in + 35 image/STL-derived cases, card and all six parts individually parsed from float32 binary STL. Closed manifold, opposite-directed edge incidence, positive volume per component, nondegenerate finite triangles, normalized outward normals and expected millimeter bounds.
- `node extra-validation.mjs`: PASS, raised ring's center remains unraised over backing, actual source wedge grip integrated, concave input rejected and assembly paths checked.
- `node release-preflight.mjs`: PASS, 39 dense cases, each 49 sampled offsets: both-direction wing/tail insertion, plinth/cradle insertion, assembled aircraft lowering and exploded separation. No unintended assembled or card-layout intersections, shoulder/notch stops verified. All 24 cutters avoid functional parts; after snips six parts and one carrier remain. Explicit impossible packing rejection.
- `node browser-validation.mjs`: PASS against built production app under `/daily-app2/20261029-12/`; 39 actual browser downloads and 16 workflow checks. PNG/JPEG/SVG and ASCII/binary STL file pickers, changed threshold/pixels/depth/crop/transform, current preview/export byte signatures and JSON regeneration, portable assets, named local saves, undo/redo, text/icons, per-part STL, ZIP members. Invalid/open/truncated/oversized/empty input, unit confirmation and worker load failure gate exports and recover.
- Desktop 374px left rail/right preview; 320/390px touch contexts: no overflow, preview-first layout, real source pickers and reachable exports, CDP orbit/pinch alters canvas. Saved dark/light, focus, collapsible controls and reduced motion verified.
- Source parsed anew: hash, bounds, 27 components and actual mesh sections measured; all raw references read-only and outside repository. Source imperfections disclosed; no repair/redistribution claim.
- Gallery inline script compilation: PASS; new `20261029-12` entry exactly once in STL category; all 252 prior entries preserved.
- Root `npm run predeploy`: PASS, 253 built/copied apps, 0 failed, 0 skipped. Root index and all app folders present under `deploy/`.
- `node production-preflight.mjs`: PASS against combined deployment directory; gallery runtime/search/ordering, previous entries, concave/excess-triangle rejection, invalid transform stale-export blocking/recovery and reduced motion.

Reports: `geometry-validation.json`, `extra-validation.json`, `release-preflight.json`, `browser-validation.json`, `production-preflight.json`; screenshots and mesh inspection under `evidence/`.

Fit, strength, adhesive bond, stability and actual print/flight performance remain untested. Static display only, adhesive required, not a flight-capable glider.
