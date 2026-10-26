# Validation — 2026-10-27

## Passed before publication

- `npm run predeploy`: production Vite bundle and locally emitted worker/WASM/fonts.
- `npm test`: 20 parameter cases and 35 imported-output cases; each part and float32-translated combined plate checked independently for binary length, finite coordinates, nondegenerate triangles, unit normals, opposite directed edge incidence at 0.00001 mm welding tolerance, positive volume per connected component, expected dimensions and separated plate bodies.
- Kernel mechanism checks: full-turn rotor sampling, no unintended neutral body intersections, vertical release paths, free rim gap, intended rim contact probe after inward jaw travel, and personalization isolation. An early check caught the hub blocking the bore; the bore was extended through the hub and all checks rerun successfully.
- `browser-test.cjs`: real production file-picker uploads for PNG, JPEG, ASCII STL and binary STL; actual downloaded STLs checked against current UI signatures and regenerated portable JSON. Import content, threshold, relief, scale, rotation and placement change export geometry. Reset reproduces baseline. Tests include malformed/truncated/nonmanifold/open/concave/oversized inputs, empty silhouettes, invalid dimensions/transforms and protected-well violations. Invalid states block export; recovery succeeds.
- `feature-test.cjs`: every preset, bounded variations and shape; text, icons, SVG, raised/engraved/background; saved named designs, undo/redo, JSON imported-asset round trips; per-part buttons and actual unzipped three-STL ZIP; views, persistent dark theme, focus, collapsible sections, drag/drop, Y-up import, latest worker edit and invalid export gates.
- `hole-test.cjs`: kernel probes verify SVG ring holes remain unraised/unengraved in the final palm mesh, not just image preview.
- `resilience-test.cjs`: intentionally blocked production worker disables export; reload recovers. All six bundled icons change actual geometry.
- `stale-import-test.cjs`: delayed first image normalization cannot overwrite a newer file selection.
- `brake-sequence-test.cjs`: explanatory squeeze visibly deforms jaws without changing printable export signature; all isolated views; measured 374 px desktop left rail.
- Phone tests at 320 and 390 px: no horizontal overflow, reachable exports, actual PNG/STL import/download, CDP touch orbit and pinch verified by changed canvas images. Screenshots reviewed for studio layout and assembled mechanism.
- No external service requests or browser runtime errors in the core production tests.
- Gallery inline scripts compile with `new Function`. New entry appears exactly once, newest first, `area: stl`; all 185 previous entries unchanged. Browser renders all 186 cards, STL category first, search clears correctly.
- Root `npm run predeploy`: 186 built, zero failed/skipped; root index and new app's production files are byte-identical to staging. Root staging browser import/download suite is recorded separately.

## Limitations

Computational geometry/contact checks are **not physical print tests**, nonlinear elastic analysis, force measurement, friction prediction, durability or fatigue certification. No physical prints were performed. TPU caliper behaviour requires material calibration. Moving parts deliberately lift off; this design is not captive. Squeeze preview is estimated deformation; exports contain undeformed printable solids. Only verified closed convex flat-bottom STL grips are supported, and unsupported geometry is explicitly rejected rather than silently repaired or hull-converted. Sampled 20×20 relief preserves bright holes above a solid backing; it is not exact outline tracing or photo-to-3D reconstruction.

## Reports

`geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `hole-validation.json`, `resilience-validation.json`, `stale-import-validation.json`, `brake-sequence-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `root-stage-validation.json`, `root-browser-validation.json`. Public deployment smoke verification is saved as `public-validation.json` after publishing.

## Publication verified

Root `npm run deploy` reported Published. GitHub Pages initially returned 404 during propagation; the route became HTTP 200 without changing or redeploying the validated bundle. `node public-smoke.cjs` then passed on the public URL: worker/WASM loaded, downloaded binary STL matched the independently generated default model, mesh validation passed, and the live combined gallery showed Pinch Brake first with no runtime errors.
