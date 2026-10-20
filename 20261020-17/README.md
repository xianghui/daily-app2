# Ripple Roll

A browser-based parametric **physical fidget palm-roller** generator. Rotate the loose, waisted barrel between your fingers and opposite palm for repeated rib pulses. This interaction differs from the gallery's previous compliant squeeze loop. No axle, bearing, moving interface, assembly or hardware. It is not a browser game.

## Controls and units

All lengths and STL coordinates are **millimeters**. Length 32–80 mm; nominal end diameter 18–40 mm; inward ergonomic waist 0–3 mm; inward longitudinal rib relief 0–1.2 mm; even rib counts 6–20. Actual X/Y/Z bounds are displayed: edge bevel and waist can make X/Y slightly smaller than the nominal diameter. Pocket, Everyday and Deep texture presets; sliders, number inputs, reset and fit view. Out-of-range, nonfinite and invalid rib counts disable export and show an error.

One watertight star-shaped solid is built directly from indexed radial rings, then capped with consistently wound triangle fans. This is not overlapping visual primitives or an un-unioned collection. Positive-radius rings at strictly increasing Z prevent self-intersections; end caps lie only at boundary Z. Resolution is bounded at 160 angular and 160 axial intervals (51,520 triangles), suitable for responsive synchronous generation. Geometry is memoized. Three.js previews precisely the generated triangles; the binary STL writer exports those same vertices and triangles. No runtime API, CDN, key or server is needed; React and Three.js bundle locally through Vite. A static host is sufficient.

## Run and export

`npm install`, `npm run dev`; `npm run predeploy` produces `dist/`. `npm run deploy` is the per-app gh-pages script, but publication of this collection uses the **root monorepo deploy**. Download binary STL saves `ripple-roll-{length}x{diameter}mm-{ribs}ribs.stl`. Import in mm. STL describes the solid envelope; infill/perimeters are slicer settings.

## Printing and tactile use

Print upright on either flat circular end as previewed. No supports intended; digital radial expansion checks stay below a 45-degree outward slope in tested extremes. Start with PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, 3 perimeters (~1.2 mm), 5 top/bottom layers and 15–25% infill. Use a brim for narrow/tall parts. No thin compliant walls; minimum radial material extent is 4.8 mm over the supported parameter envelope. No mating parts, clearances, retention or release steps apply. For feel/size calibration print the small Pocket preset first, measure the actual print and adjust slicer dimensional compensation if necessary. No tolerance is universal. Deburr seam/first-layer edges. Deep waist is primarily for hand-held use, not guaranteed smooth tabletop rolling. Small objects are not for children/pets.

## Validation

`node validate.mjs` parses actual binary STL bytes for defaults, minimum, maximum and mixed extreme configurations: finite coordinates, nonzero triangle area, normals aligned with winding, positive signed volume, expected mm bounds, welded edge incidence exactly two with opposite directions, and Euler characteristic 2. Samples upright radial slopes and minimum radii; single-valued positive-radius cross sections structurally exclude self-intersection. One connected closed component; there are no moving interfaces to intersect or retain.

`node browser-test.cjs` uses local Playwright (test-only installation at the workspace path) to exercise presets, sliders, numeric inputs, invalid/empty values, preview changes, fit view and **actual browser STL downloads**, then parses the downloads. Also checks 390/320 px phone layouts, reachable touch download, touch orbit and pinch zoom, and records runtime errors. Results in `geometry-validation.json`, `browser-validation.json`, screenshots and `gallery-validation.json`. Test scripts are not runtime dependencies. Production smoke evidence is recorded separately.

**No physical print has been performed.** Geometry and mechanical-envelope checks are not evidence of printed tactile comfort, finish or real-printer behavior.
