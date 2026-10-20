# Counterturn · parametric fidget STL studio

A browser-local React/Vite generator for two equal involute thumb gears on a scalloped palm base. Turn one gear and the other counter-rotates at 1:1. This is a meshing tactile interaction, not a detent/clicker. It is a five-body assembly kit: base with integrated posts, two gears, two friction caps. No purchased hardware, glue, server, API key or CDN is needed.

## Parameters (all lengths in millimeters)

- Teeth: integer 12–22 per gear.
- Module: 1.8–2.6 mm; pitch diameter = teeth × module; outside diameter = (teeth + 2) × module.
- Gear thickness: 3.6–7 mm.
- Running gap: 0.20–0.60 mm. Applied radially to bores, axially to each gear face, and added to the nominal gear-center distance. Each tooth is reduced in circumferential thickness by the gap at its pitch circle.
- Palm scallop depth: 0–1.2 mm. The base is 3 mm thick; this contour cut changes its edge, not the plate thickness.
- Cap interference: 0–0.12 mm radial (twice that diametral). Zero is a calibration trial and may not retain a cap.

20° involute flanks, straight radial root extensions below the base circle, dedendum 1.25 × module. Bounded resolution: 10 segments per involute flank, five per tip arc; circular bores use 64 sides. The supported range was checked with motion sampling, including the low tooth counts; this is not a precision load-bearing gear generator. Axles have 3 mm radius. Caps have 5 mm outside radius and 3 mm height, yielding at least 1.4 mm of radial retention overlap at the largest running gap. No compliant flexures are used.

The UI reports actual exported layout X/Y/Z bounds and assembled dimensions. Assembly bounds include the caps. Presets, numeric inputs, sliders and Reset update the same final triangles used by Three.js and the binary STL writer. Invalid/nonfinite/out-of-range inputs block every download. Individual base, gear, cap, and three-part axle/gear/cap coupon downloads are available. Print two copies of a separately downloaded gear or cap for a full assembly.

## Printing and assembly

Print in the previewed orientation: base bottom-down, gears flat, cap rings flat. No supports expected. Suggested start: PETG, 0.4 mm nozzle, 0.2 mm layers, four perimeters, 30% infill. PLA can prototype the fit but may crack at a press fit. Deburr bores and remove elephant foot.

Print the coupon first. Start with 0.30 mm running gap on a tuned printer, or 0.50 mm for a looser trial. These are printer/material-dependent starting points, not universal tolerances. Reduce cap interference if tight; increase if loose. A cap is friction-retained, not positively snap-locked.

Slip gears over posts with tooth-to-valley alignment. Use a removable shim of the selected gap below each gear. Press caps onto the uppermost 3 mm of the posts while leaving the same selected gap above each gear. Do not clamp gears. Remove shims and turn gently. Pull-test caps; reprint any loose ones. If binding, deburr and/or increase gap. Do not force jammed teeth. Keep fingers away from tooth pinch points; detachable small parts are not for young children.

## Implementation / development

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `npm run deploy` is configured as requested but the public site is published using the root monorepo deployment only.

Dependencies: React/ReactDOM, Vite/React plugin, Three.js + OrbitControls, locally bundled manifold-3d WASM for robust solid union/subtraction/extrusion; gh-pages. Playwright is a development dependency. Geometry runs locally with bounded tessellation; no remote resources are requested by the app. Binary STL is little-endian, millimeter geometry. Independent solids are separated in the exported print layout, not overlapping visual meshes.

## Validation

- `node validate.mjs`: parses actual binary STL, checks nonempty triangle data, finite coordinates, nondegenerate area, stored normals, welded edge incidence exactly two, opposite directed winding, connected-component positive volumes, expected millimeter bounds and individual exports. Weld tolerance is 0.00001 mm. Tests presets, all 64 parameter-range corners and intermediate tooth-count cases.
- Mechanical checks: 61 counter-rotating poses across one complete tooth pitch, per case; CSG intersection volumes verify no gear/gear or gear/base collision. With the follower held fixed, a separate angular sweep must find tooth engagement in both directions within half a tooth pitch. Checks axle clearance including bore faceting, cap-overlap retention dimensions, and nonoverlapping print layout.
- `node browser-test.cjs` (local dev port 5184): real browser downloads for defaults, presets, extrema, individual parts and coupon; byte comparison against the same parameter geometry; invalid input blocking; changed preview; 390/320 px layouts; CDP touch orbit and pinch zoom; reachable phone download; no page runtime errors.
- `node gallery-test.cjs`: compiles every root inline script, preserves earlier entries, verifies exactly one new STL entry first, and renders/searches the gallery without runtime errors.
- `node production-test.cjs`: deployed Pages app, real live STL download and validation, phone layout, and gallery count.

Saved JSON reports and screenshots document observed runs. Geometry checks and sampled kinematic calculations are not physical-print, durability, friction, or hand-feel testing. No physical print was performed. Continuous collision-free motion and real fit are not proven solely by finite samples; calibrate and inspect before use.
