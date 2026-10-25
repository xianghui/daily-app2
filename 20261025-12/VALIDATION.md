# Tilt & Catch verification

## Passed locally

- `npm run predeploy`: Vite production build with locally bundled WASM/fonts.
- `npm test`: 132 default/preset/parameter-extreme cases plus 35 image/STL import cases. Per-part and plate STL triangles, Float32 bounds, Z=0, finite normals/coordinates, positive per-component volumes, edge incidence/winding and expected washer through-hole topology passed.
- Mechanism checks: nine free washer tilt/height poses per checked model without collisions; actual interference beyond first-contact angle; minimum walls/clearance and cap retention overlap; disjoint print layout; imports constrained to palm landing.
- `node browser-test.cjs`: actual PNG/JPEG and ASCII/binary STL file selection and downloads, image content/threshold/depth and mesh scale/rotation/placement changes, default comparison, unit confirmation, replacement/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive sources, bad dimensions/transforms, empty silhouette, phone touch orbit/pinch and 320/390 px no-overflow/reachable exports. Download bytes matched preview fingerprint and exact saved-design regeneration.
- `node feature-test.cjs`: all presets, bounded variations, shapes, text, searchable icon, SVG ring holes, engraving, background inversion, JSON image/STL roundtrips, local named-save persistence, undo/redo, real three-part ZIP and part exports, all six view modes, saved theme, neutral preview colour, drag/drop, Y-up orientation, collapsible sections, visible keyboard focus and invalid/stale export gates.
- `node resilience-test.cjs`: blocked worker load and malformed JSON disable exports; reload/reset recover.
- `node production-test.cjs`: root deploy-folder static hosting at Pages base, WASM worker, real image import and downloaded closed three-component STL; no runtime or failed-request errors.
- Gallery: every inline script compiled with `new Function`, exactly one newest `stl` entry; 139 previous entries preserved, 140 total; STL Generators first; browser render/search had no runtime errors.
- Root `npm run predeploy`: 140 built/copied, zero failed, zero skipped.

## Corrections made during verification

The first collision check exposed a washer preview pivot at the bottom face rather than midplane. It was corrected; the full geometry/mechanism suite passed afterwards. A reused production-test assertion expected one component; it was corrected to the designed three-component plate. One browser run was interrupted during source changes; the full suite passed on rerun after edits settled.

See JSON reports and desktop/phone/light/dark/view screenshots for recorded results. All source fixtures are synthetic and local. Production publication/live checks are recorded in separate live reports.

## Not tested physically

No printed specimen, friction coefficient, holding-force, fatigue, layer strength or real cap-retention measurement. Cap press-fit and washer binding depend on printer/material. Pocket Glide is the recommended full-size calibration coupon; never force the mechanism or use it for a load. Assembled poses estimate rigid positioning only, not friction or elastic simulation.

## Publication verified

Root `npm run deploy` reported Published. GitHub Pages run 40153257625 completed successfully. The public app and gallery returned successfully; live browser tests passed gallery rendering/search, WASM worker loading, sample image import and an actual downloaded closed three-component STL matching the preview fingerprint, with no runtime or failed-request errors. Main application commit: `41b63e9`.
