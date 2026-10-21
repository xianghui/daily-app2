# Lift & Drift — local image/STL fidget generator

A React + Vite browser app for a **captive lift–turn–drop thumb arm**. Lift the arm over four radial fences, turn, then lower into the next sector. Gravity seats the arm; this is not a spring or ratchet. Three hardware-free assembled parts: sector base with hollow post, thumb arm, friction-fit retaining cap. Distinct from elastic-return, sliding and continuous rotary mechanisms in the gallery.

## Run / build

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `npm run deploy` uses gh-pages, but the public monorepo must be published using the root predeploy/deploy flow. Base URL `/daily-app2/20261021-19/`.

Dependencies are bundled locally: React, Three.js / OrbitControls, manifold-3d WASM for actual solid boolean operations, Vite and gh-pages. Playwright is a development test dependency. No CDN, API, key or remote generation. The browser worker bounds modeling and parses imports off the UI thread.

## Import paths and privacy

All user file bytes stay in browser memory. No upload, telemetry or personal-file persistence. Picker works on phones and desktop, drag/drop is an additional desktop path. Synthetic original sample fixtures in `public/samples` are inherited from this repository's preceding app, freely reusable for this app: mark.png, waves.jpg, wedge-ascii.stl, gem-binary.stl. No personal assets.

- PNG/JPEG: validated signature/header, decoded dimension match, ≤2 MB, ≤12 megapixels, ≤6,000 pixels per side. Canvas composites transparency over white and fits/center-crops with ±25% pan. Rec.709 grayscale darkness is resampled to a fixed 20×20 grid. Threshold mode assigns selected samples the chosen relief height, unselected samples zero; relief mode uses depth × (1−gray/255). The gridded top surface is triangulated, sides and a bottom close it over a **0.4 mm continuous backing**. This is a continuous height field with linear triangles, not a pixel-perfect silhouette boundary. White/empty results are rejected. It is **2D-to-relief**, not full 3D reconstruction from a photo. Backing is sunk 0.15 mm into the pad and robustly unioned. Preview shows source and exact conversion grid. Controls include threshold 1–254, depth 0.4–3 mm, physical footprint, rotation, crop/fit and placement.
- ASCII / binary STL: ≤2 MB, ≤1,500 facets, each dimension 0.2–250 mm. **No unit metadata exists; explicit mm confirmation is required.** Source dimensions and mesh preview precede integration. XY scales proportionally to 4–7 mm footprint; Z independently fits 0.6–5 mm height. Rotate around Z ±180°, offset X ±1.5 mm / Y ±2 mm. Center/reset restores defaults. A strict supported subset is accepted: one outward-wound, connected, closed **convex solid** with broad flat Z-bottom (≥25% bounding-footprint area) containing every projected XY point. Open/nonmanifold, inconsistent winding, disconnected, self-intersecting, concave, unsupported overhang, thin and invalid inputs are rejected. **No repair is performed or claimed.** Reorient and fix in a modeler, then re-export. The transformed mesh is sunk 0.15 mm into the end pad and boolean-unioned; disconnected results are rejected.

Both imports visibly change the exported arm. Grip footprint vertices must remain inside the pad safe zone (width/2−4 mm in X, ±8 mm in Y); local wall/span and transform validation protects the bearing and fences. Replace, remove, reset transforms, reset image controls or restore all defaults at any time. A pending/invalid import disables export rather than exporting a stale model.

## Parameters — millimeters unless stated

| Control | Range | Default |
|---|---|---|
| Pad width | 18–24 | 22 |
| Arm reach (pivot to pad center) | 26–34 | 30 |
| Fence height | 0.8–1.2 | 1 |
| Running clearance, radial and axial | 0.25–0.50 | 0.35 |
| Pad corner radius | 2–4 | 4 |
| Grip groove depth | 0–0.5 | 0.3 |
| Cap radial allowance | −0.08–+0.04 | −0.03 |

Base floor is 2 mm, arm 3 mm, axle radius 3 mm, blind bore radius 1.5 mm, cap flange radius 6.5 mm × 2 mm thick, peg length 3 mm. Negative cap allowance makes an interference fit: default 0.06 mm diametral interference. Minimum post wall at interference fit is 1.42 mm. Peg diameter is 2.92–3.16 mm. No flexure or compliant-part thickness claims. Presets and reset are available; out-of-range/nonfinite values block modeling/export.

Base radius = reach + width/2 + 3 mm. Default base is 88 mm across. UI reports final export X/Y/Z bounds and assembled bounding envelope in mm. Print layout separates parts with gaps; source imports affect actual arm dimensions. Export is binary STL, either whole layout (three independently closed components) or individual named parts. Same mesh arrays power preview and export. Assembly poses do not affect print export. Touch orbit, pinch/scroll zoom, zoom buttons and fit view are available.

## Mechanism / print / assembly

Print base floor-down, arm flat decoration-up, cap flange-down with peg pointing up. No supports intended for this bounded geometry. PLA or PETG, 0.16–0.2 mm layers, 0.4 mm nozzle, 3–4 walls and 30% infill are starting values. Small peg and axle walls should slice solid; inspect toolpaths. Cool and deburr without enlarging the post wall. Put arm over post at 45° between fences; press cap peg into blind bore until flange seats against post top. No hardware, glue or bearings required. Keep glue out of moving interfaces if a user independently changes assembly.

**Full-size default parts are the calibration trial.** Test free axial movement, rotation while lifted, and cap retention before adding decoration. Fits depend on printer, extrusion, material and shrinkage; not universal. Increase running clearance for binding. Increase cap allowance for tight cap, decrease for loose cap. Never force cracked parts. Cap is friction retained, not a certified latch. Hold base approximately horizontal to use gravity drop. Use a nail under the exposed arm edge to lift; don't pry the cap. Keep fingers out of the closing gap. Not for young children; cap and broken parts are choking hazards.

At rest arm bottom is floor + running gap. Fence crossing lift is fence height + running gap, leaving 2× running gap above fences and one running gap under cap. Cap overlap exceeds 2.9 mm beyond the rotor hole. Four fences obstruct rotation at low height; lift intentionally unlocks the rotation. No deformation or sliding through intersecting bodies is claimed.

## Validation and limitations

`npm test` runs Node geometry tests. `node browser-test.cjs` runs Playwright against the configured local Vite server; `TEST_BASE` and `TEST_REPORT` optionally target a built deployment. Reports are stored in geometry-validation.json / browser-validation.json. Browser tests use actual picker inputs and downloaded STL bytes, compare default/import/threshold/depth/scale/placement signatures, and check source/preview/export matches; test invalid and truncated files, nonmanifold/unsupported meshes, oversized inputs, bad dimensions, reset/replacement and empty artwork. Phone tests cover 320/390 px, touch orbit, pinch and downloads.

STL validation parses floats, bounds, normals, nondegenerate faces, welds vertices at 1e−5 mm, requires two opposite-directed faces per edge, finds components and verifies positive volume individually. Defaults, parameter bounds/corners and image/STL variants are tested. Mechanism checks verify radial/axial gaps, cap overlap, blind-bore floor, post wall and layout separation. Robust CSG intersection tests sample all four rest sectors and 25 lifted turning positions, checking arm against base/cap. Cap-to-post press-fit interference is intentional; moving-arm interference is not. Low-height fence collision is additionally tested as the intended stop.

These are **digital geometry and mechanism checks, not physical print testing, FEA, friction or wear certification**. No physical print has been performed. The cap can loosen with repeated use. Synthetic fixtures exercise the supported subset; arbitrary user meshes may be rejected. Inspect slicer results and calibrate your printer.
