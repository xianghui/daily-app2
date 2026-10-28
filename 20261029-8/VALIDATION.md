# Validation — 2026-10-29

- Actual third-party STL downloaded anew, SHA-256 matched; parsed 30,616 triangles, bounds/components and three mesh sections inspected. See reference-analysis.json and evidence/reference-sections.png.
- `npm test`: 18 valid built-in configurations and 35 imported-output configurations passed. Invalid packing/plinth-envelope combinations and malformed inputs explicitly rejected (18 recorded rejection cases).
- Every output: independent binary STL byte count, finite/nondegenerate triangles, outward normals, 1e-5 mm welded edges exactly two/opposite, positive per-component volume and mm bounds; each card/part checked separately.
- Assembly: no unintended seated intersections; keel and five bulkhead insertion paths sampled over 0–32 mm; half-lap lateral guides and plinth shoulders verified. Twenty-eight virtual snips leave seven distinct parts plus one connected carrier. No card-part overlap; declared card bounds preserved.
- `node extra-validation.mjs`: ring hole/band solid probes, concavity rejection and genuine sloping-source integration with complete mesh/assembly validation passed.
- Development browser: 39 actual-download cases / 16 workflow checks. Production browser repeated same 39/16 under `/daily-app2/20261029-8/`, using bundled worker/WASM.
- PNG, JPEG, SVG, ASCII STL and binary STL file pickers; changed pixels/threshold/depth, scale/rotation/placement; real source/final geometry differences; replace/remove/reset; undo/redo; named and JSON portable round trips; text and icons; empty/malformed/open/excessive/missing-payload errors; stale-export blocking and worker-load recovery.
- Every per-part STL downloaded and checked; actual Everything ZIP extracted and all STL members checked. Preview signature equals download bytes and saved-state regeneration.
- Desktop 374 px left controls/right preview; 320/390 px no horizontal overflow, preview-first/reachable exports, real touch orbit/pinch; saved theme, focus, sections, reduced motion.
- Root gallery: inline script compiled with new Function; one new STL entry, all 248 prior entries retained, STL category first, 249 deployed app folders present, no gallery runtime errors.
- `npm run predeploy` passed per-app; root `npm run predeploy` passed with Built 249 / Failed 0 / Skipped 0.

Reports: geometry-validation.json, extra-validation.json, browser-validation-dev.json, browser-validation.json (production), production-preflight.json. Screenshots in evidence/. Computational checks only. **No physical print, stability, strength, fatigue, adhesive or flotation tests performed.** Clearanced assembly requires adhesive and printer/material calibration; not a load-rated object or watercraft.
