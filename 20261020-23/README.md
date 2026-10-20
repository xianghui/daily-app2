# Slow Thread

A React + Vite browser-based STL generator for a two-part screw-winding fidget. Wind a scalloped thumb nut along a short spindle and reverse for a continuous tactile interaction. This is distinct from a free spinner, captured slider, rocking toy, compliant spring, or rotating ring. No hardware, glue, API, key, CDN, or server is needed for mesh generation/export. The nut is intentionally removable at the upper end, NOT captive; the base is the lower stop.

## Run and export

`npm install`, `npm run dev`; production: `npm run predeploy`. The Vite base is `/daily-app2/20261020-23/`. The per-app `deploy` script is provided as requested but the public combined site is published by the ROOT monorepo deployment. Dependencies: React, React DOM, Three.js; Vite and React plugin for build; gh-pages for publication.

Rotate with pointer or one finger; zoom with wheel or pinch; Fit view resets camera. Numeric fields and matching sliders, Pocket/Relaxed/Chunky presets, fit presets, and Reset update the geometry. Download binary STL exports both separated parts in millimeters. Individual spindle/nut and a short thread-fit coupon can also be downloaded. Preview and export use the exact same indexed vertices/faces, flattened into triangles. Invalid inputs retain the last valid preview and disable downloads. Combined bed-layout X/Y/Z dimensions are displayed.

## Parameters (all millimeters)

| Parameter | Supported range | Default |
|---|---|---|
| Threaded spindle length (above 3 mm base) | 32–60 | 42 |
| Root radius | 5–8 | 6 |
| Sinusoidal thread depth | 0.8–1.4 | 1.1 |
| Single-start pitch | 4–6 | 5 |
| Nut height | 10–16 | 12 |
| Minimum nut wall before entry flare | 2.4–4 | 3 |
| Radial running clearance | 0.30–0.60 | 0.40 |
| Outer scallop relief | 0–1 | 0.6 |

Combinations with π × depth / pitch > 0.8 are rejected: the extra 0.2 mm/mm entry-flare slope keeps combined overhang at most 45 degrees from vertical. Wall at the 0.55 mm bore-entry flare remains at least 1.85 mm. The nut's external grip adds material, never thins the wall. There are no compliant features or flexure thickness claims.

## Modeling and mechanism

Analytical sinusoidal helical radius: `root + depth*(0.5+0.5*cos(angle - 2π*z/pitch))`. Female bore uses the same function plus radial clearance; the first/last 2.75 mm have a 0.55 mm entry flare. All components are capped indexed ring meshes, not overlapping primitives. The spindle integrates a solid base with a single shared shoulder annulus. The nut is a closed hollow solid. Equal-height radial separation is exact; local normal clearance is smaller and estimated in the UI. Resolution is bounded at 128 angular samples and 48 axial samples per pitch (≤720 axial rows). Generation remains synchronous because the maximum mesh is bounded to about 300k triangles; there is no WASM download or unbounded tessellation.

An assembly screw motion couples nut rotation `phi = 2π*offset/pitch` to axial displacement. Five full-engagement positions are sampled at 8,448 angle/height combinations each. Positive radial clearance is verified; the base exceeds the entry bore by >2 mm, and exported parts have >7 mm X separation. Geometric non-self-intersection follows from positive radii, nested outer/inner profiles, monotonic Z rings, nonfolding angular loops, and one monotonic shoulder annulus. No solids share faces or intersect in the print layout. This is geometric analysis, not physical performance proof. The upper end is open by design: reverse before reaching it if you want the nut to stay on.

## Print and fit

Print upright in exported orientation, broad ends at Z=0. No supports. PETG starting settings: 0.4 mm nozzle, 0.2 mm layer, 3–4 perimeters, 25–40% infill. A brim can stabilize the spindle; keep it off thread flanks. PLA is possible but may wear/bind differently. Cool completely, remove brim, deburr thread starts, then gently thread the nut down from the free end. Never force a cross-threaded pair. Reverse at the base. No print-in-place release needed.

Print the 14 mm spindle + 8 mm nut coupon first: same pitch/depth/radius/clearance as the full model. Start at 0.40 mm radial clearance; 0.30 mm is snug, 0.55 mm loose. Tune flow, elephant foot, material and dimensional calibration first. These values are not universal FDM tolerances. Never scale globally to fix fit. Keep the nut fully engaged for the smoothest action; travel is spindle length minus nut height. Small removable parts; adult desk object, not a child-safe toy or load-bearing component.

## Validation

- `node validate.mjs`: defaults, three presets, minimum, maximum, steep supported limit and coupon. Parses actual binary STL bytes, checks finite coordinates, nondegenerate triangles, STL normal agreement, welded equal-vertex edge incidence (1e-5 mm), opposite edge winding, per-component positive enclosed volume, expected millimeter bounds, each individual part, invalid inputs, layout separation, base stop and analytical screw clearance.
- `node browser-test.cjs`: Playwright Chromium actual downloads for defaults/presets/extremes/slider/individual parts/coupon; byte-for-byte equality with generated final geometry; parses downloaded meshes; checks invalid/empty inputs block export and preview changes. Checks 390 and 320 px phone layout, touch orbit and pinch zoom, phone input and download, no runtime errors. Playwright is provided by the local automation workspace, not a production dependency.
- `node gallery-test.cjs`: root inline-script compilation, exact new-entry count/category/link, retained prior entries and browser render/search.
- Build: `npm run predeploy` locally and root monorepo predeploy/deploy.

Machine-readable reports and desktop/mobile screenshots are stored alongside the app. No physical print, fatigue, wear, friction or durability test has been performed. Mesh validity and kinematic clearance do not guarantee a particular printer's fit.
