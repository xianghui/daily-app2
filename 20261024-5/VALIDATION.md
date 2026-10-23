# Validation record — 2026-10-24

## Passed before publication

- Individual `npm run predeploy`: production Vite build. Optional Manifold Node-module externalization and main-chunk advisory warning observed; browser WASM execution verified.
- `npm test`: 78 parameter cases (default, extrema, all 64 corners, presets, deterministic variations), 24 import-derived cases. Independently parsed binary STL: finite coordinates and normalized normals, nonzero faces, two triangles per welded edge, balanced neighboring winding, positive enclosed component volume, one connected genus-zero solid, independently expected millimeter bounds and bed-flat floor.
- Mechanism: cone slope >45°, normal roof wall >0.5 mm, bounded one-millimeter diameter-reduction envelope with >20 mm opposing inner gap, continuous open vent material/void probes, chamber floor/barrel/roof probes, imports isolated from the chamber and vent using CSG differences. These are geometry checks, not force, airflow, buckling or fatigue predictions.
- Real Chromium PNG/JPEG/ASCII STL/binary STL file selection; explicit STL mm confirmation; actual downloaded exports. Pixel content, threshold, depth, crop, footprint, mesh shape, scale/rotation/height and placement affect exports. Export fingerprints equal preview geometry fingerprints; UI dimensions match parsed output.
- Rejected unsupported extension/content, truncated/open/nonmanifold/concave meshes, excessive file bytes/pixels/triangles/dimensions, empty relief, unsafe placement and nonfinite transforms; export disabled and reset/removal recover.
- All three presets and four additional random variations downloaded and validated. Undo/redo, portable Save/Open for all four import types, preview-colour neutrality, drag/drop, replace/remove/reset passed.
- Phone: 320 and 390 pixel widths, no horizontal overflow, real touch orbit and pinch, file imports/downloads, collapsible control sheet and every tab, export in viewport. Screenshots inspected.
- Root gallery: inline scripts compiled via `new Function`; new entry exists exactly once, newest, STL category first, every previous entry retained, render/search no runtime errors.
- Root predeploy: all 109 apps packaged, no missing app HTML, deploy root gallery equals source gallery.

Machine-readable evidence: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json, root-deploy-validation.json. Production-bundle browser and public URL checks have separate reports.

## Not tested physically

No printed prototype, sealed-layer test, squeeze-force measurement, air-resistance measurement, fatigue test or TPU shell simulation. Calibration and material limitations are explicitly shown in the editor and README. All parts are integral; no retained sliding bodies, mating tolerances or hardware are involved. ZIP export is inapplicable to this one-part object.
