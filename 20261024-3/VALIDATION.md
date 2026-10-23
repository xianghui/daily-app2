# Tread Soft — observed validation

Date: 2026-10-24 (Asia/Singapore). No physical print has been performed.

## Completed before publication

- React/Vite production build passed. Dependencies installed locally; expected bundle-size and Manifold Node-path externalization warnings do not prevent tested browser/WASM generation.
- `npm test`: **78 parameter cases** (default, extrema, all 64 min/max range corners, presets and deterministic variations), **24 import cases** (both STL fixtures and image modes on default/extrema/presets).
- Every exported binary STL checked for finite coordinates, nonzero triangle area, normalized stored normals, consistent outward winding, positive component volume, closed welded edge incidence and millimeter dimensions. Exactly one connected component and six open sectors (genus six).
- Mechanism checks: swept spoke thickness/radial span, hub/tread root overlaps, conservative 0.5 mm compression envelope, independent adjacent-spoke sampling, bounded elementary strain estimate and residual tread. CSG solid/void probes cover all six spokes/sectors. Import differences outside the rigid hub were checked by CSG and found absent.
- `browser-test.cjs`: actual browser PNG/JPEG/ASCII/binary imports; actual binary STL downloads; changed image content/threshold/depth/crop/scale and STL shape/scale/rotation/placement change export. Preview/export signatures and displayed mm bounds match. Replace/remove/reset and each individual-part selection passed.
- Invalid dimensions, empty transforms, empty silhouette, unsupported file type, fake image content, excessive bytes/pixels/triangles/dimensions, truncated/open/nonmanifold and unsupported concave meshes all block export with recoverable feedback.
- `extra-browser.cjs`: all three real model presets and four browser-random variations pass mesh/mechanism checks. Undo/redo, portable JSON round trips for all four fixtures, sample buttons, drag/drop and preview-colour geometry neutrality passed.
- Mobile: real touch orbit and pinch zoom, PNG/STL picker imports and downloads at 390 px; no horizontal clipping at 320 px. Collapsible controls, all tabs and fixed export action checked at 320×740.
- Root gallery: every inline script compiled with Node `new Function`; all 106 earlier entries preserved; new entry exactly once and first with `area:"stl"`; STL category first; 107 rendered cards; zero runtime errors.
- Browser tests observed no nonlocal requests during local modeling/import/export.

## Limits of the evidence

Topology and conservative geometric checks are not physical fatigue testing, nonlinear deformation analysis or a guarantee of tactile feel. TPU formulation, extrusion, layer adhesion and root stress concentration matter. Print Soft Six first; begin with less than 0.5 mm radial compression and stop at any permanent set or damage. Rigid PLA/PETG are not suitable for the intended flex mechanism. The preview is explicitly undeformed. No force, life, slicer-time or physical-print claim is made.

Detailed reports: `geometry-validation.json`, `browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`. Production/public checks are recorded separately when completed.

## Production and public publication

- Root `npm run predeploy`: **107 built / 0 failed / 0 skipped**. Root gallery and every listed app are present under `deploy/`; new worker/WASM/assets match the individual production build byte-for-byte.
- Full browser import/download/error/mobile suite passed against the root production server (`production-browser-validation.json`).
- Root `npm run deploy` published combined `deploy/` successfully. GitHub Pages build for `ac0e9c671ac19c5b4378489f4ec5441212947637` reached `built` with no error.
- Public https://xianghui.github.io/daily-app2/20261024-3/ loaded successfully; a real local sample-image conversion and downloaded STL passed independent mesh checks, and the public gallery showed Tread Soft newest. No public runtime errors or failed requests after propagation (`public-validation.json`).
- Archived `/Volumes/ExternalHD/daily_app` was read only. No digest was sent.
