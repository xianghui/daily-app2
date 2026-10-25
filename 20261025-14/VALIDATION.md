# Layered Hush — validation record

Date: 2026-10-25. No physical print testing performed.

## Passed

- `npm run predeploy`: production React/Vite build, including locally bundled Manifold WASM, Three.js and fonts.
- `npm test`: 132 default/preset/extreme parameter configurations and 35 image/STL-derived outputs. Actual binary STL parsing verifies nonempty finite nondegenerate triangles, consistent winding and stored normals, positive component volumes, welded two-face edge incidence, genus, millimeter bounds and bed placement. New mechanism probes verify three open contact gaps, three full leaf sections and protected import isolation. Conservative strain bounds are screened, not physically validated.
- `browser-test.cjs`: 23 actual downloaded STL configurations/parts, with exact current preview/export fingerprints. PNG, JPEG, ASCII and binary STL file-picker paths; changed pixels, threshold, depth, scale, rotation and placement alter geometry; replacement/removal/reset recover defaults. Ten malformed/unsupported/excessive file cases, empty image, impossible dimensions/transforms and safe-zone overflow block export and recover. No runtime errors or external file-processing requests.
- Phone viewports 390 and 320 px: no horizontal overflow; touch orbit and two-finger zoom change the rendered view; imported-image and imported-STL exports download and validate; preview and exports precede control panel. Desktop left panel/right viewer, thumbnail presets and mobile layout screenshots visually inspected.
- `feature-test.cjs`: 20 downloaded feature models validated, including every preset, bounded variations, each palm silhouette, text, icon, SVG ring, engraving and inverse JPEG. Portable imported assets round-trip through JSON; local named designs persist; undo/redo, drag/drop, up-axis orientation, theme persistence, keyboard focus, collapsible sections, preview-neutral colour/views, per-part and true ZIP exports, latest-worker results and invalid-export gating passed.
- `resilience-test.cjs`: worker loading failure and malformed JSON block exports; reload/reset recover.
- `production-test.cjs`: production WASM worker, local fixture import and actual closed-manifold STL download pass, with no failed requests/runtime exceptions.
- Gallery inline scripts compiled with `new Function`; entry exists once, newest first, correct folder and STL area; all prior entries retained; STL Generators first; browser rendering/search without runtime errors.
- Root predeploy: 142 apps, zero failed/skipped. Verified exact root index copy and every app's deployed index.

## Limits

The design is one connected compliant TPU solid. Multi-part exploded layouts and moving-body retention are inapplicable. Preview shows the printable undeformed rest state, not nonlinear flex/contact simulation. Solid intersection probes prove rest gaps and sections, not progressive-force performance, fatigue life, material return or print success. Print the Pocket Stack calibration design first and tune gaps/material/process. No claim of physical testing, automatic mesh repair, full photo reconstruction or STL colour storage.

Detailed reproducible results: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `resilience-validation.json`, `production-validation.json` and gallery reports. Only synthetic fixture files are bundled.
