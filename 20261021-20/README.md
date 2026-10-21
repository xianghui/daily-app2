# Page Tide — image / STL-customized fan fidget generator

Three **independently rotating leaves on a shared printed spine** create a repeatable fan–fold finger interaction. Five assembled parts: palm spine with integral hollow axle, lower leaf, middle leaf, upper leaf and friction-fit retaining cap. Unlike a coupled gear, nested gimbal or lift-and-turn stop, each leaf can independently complete a full revolution and nest into a stack. No spring or click is claimed.

## Develop and deploy

React + Vite. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. App base: `/daily-app2/20261021-20/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publishing uses **root** predeploy/deploy, not per-app deploy. Dependencies bundled locally: React, Three.js/OrbitControls, manifold-3d WASM, Vite. Playwright is a test dependency; gh-pages is a deployment utility. No CDN or API keys. Import validation and solid generation run in a browser worker; image rasterization is bounded to 20×20 samples.

## Local imports and supported subset

File picker on mobile and desktop, plus single-file drag/drop. All user file bytes stay in browser memory, never uploaded, persisted or added to this repository. Only synthetic original fixtures are bundled: `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`, reused with permission from the preceding repository app. Download or load them using the on-screen sample controls.

**PNG / JPEG:** real signatures and image headers checked before decoding; decoded dimensions must match. Maximum 2 MB, 12 megapixels, 6,000 px per side. Transparent pixels composite over white. Fit or center-crop, with ±25% X/Y pan. Rec.709 luminance samples a fixed 20×20 grid. Threshold (1–254) assigns dark samples depth and other samples zero. Grayscale relief assigns `depth × (1 − luminance/255)`. Depth 0.4–3 mm. A piecewise-linear triangulated height field has a continuous 0.4 mm backing and closed side/bottom surfaces; it is not an exact pixel-contour extrusion. Empty artwork is rejected. This is **2D-to-relief/silhouette conversion, not reconstruction of a complete 3D object from one photograph**. Source and conversion-grid previews are shown.

**Binary and ASCII STL:** 40 bytes–2 MB, ≤1,500 triangles, 0.2–250 mm on every axis, finite coordinates within ±10,000. STL has no units: source dimensions and a mesh preview are shown, and explicit **millimeter confirmation** is required. Only a single closed, outward-wound, connected **convex, broad flat-bottom solid** is supported. Bottom contact must be ≥25% of bounding XY area and contain all projected XY vertices. Open/nonmanifold, degenerate, self-intersecting, disconnected, concave, inverted, unsupported overhang or thin meshes are rejected with actionable messages. No arbitrary repair is attempted or claimed. Reorient, simplify and repair externally, then re-export if rejected.

STL XY scales proportionally to a 4–7 mm footprint; Z scales independently to 0.6–5 mm. Rotate about Z ±180°, translate X ±1.5 mm / Y ±2 mm, center/reset transforms, replace/remove imports or reset all to the built-in grip. Image footprint and placement use the same bounds. A fitted STL XY span under 1.2 mm is rejected. Every transformed vertex must stay within the upper pad's safe zone: ±(width/2 − 4) mm in X and ±8 mm in Y. Extreme width/rotation/placement combinations can be invalid; export is blocked with a clear safe-zone error.

Both paths sink the import 0.15 mm into the **upper leaf only** and perform a robust Manifold boolean union. Every part must remain one connected solid. No overlapping shells are exported as a fake union. This changes the actual exported grip; it is not unchanged re-export. The upper leaf has nothing rotating above it. Imports stay far from the pivot/cap, and never bridge moving interfaces. Pending/invalid inputs disable download rather than exporting stale geometry.

## Parameters (all lengths in millimeters)

| Control | Range | Default |
|---|---|---|
| Thumb pad width | 18–24 | 22 |
| Leaf reach, pivot to pad center | 26–34 | 30 |
| Leaf thickness | 2.4–3.2 | 2.8 |
| Running clearance, radial and nominal axial | 0.25–0.50 | 0.35 |
| Pad corner radius | 2–4 | 4 |
| Side grip groove depth | 0–0.5 | 0.3 |
| Cap radial allowance | −0.08–+0.04 | −0.03 |

Presets: FDM starting fit, loose running, compact. Finite supported ranges enforced before modeling. Spine floor is 2 mm thick; axle radius 3 mm; hub outer radius 7 mm, hub rise 0.8 mm above leaf panels. Leaf pitch = thickness + 0.8 + clearance. Post top = 2 + 3×(thickness + 0.8) + 4×clearance. The total axial stack slack is 4×clearance. Integral spacer hubs maintain 0.8 mm panel separation even when adjacent hubs contact. Hole radius = 3 + clearance. Cap flange radius 6.5 mm, thickness 2 mm, peg length 3 mm, bore radius 1.5 mm and depth 3.5 mm. Negative cap allowance means interference; default 0.06 mm diametral interference, minimum axle wall 1.42 mm. No intentionally compliant components.

UI shows final print-layout X/Y/Z dimensions and a conservative full-turn assembled envelope, in mm. The envelope is not the current folded-pose bounding box. Preview uses identical final mesh arrays as binary STL export. Whole layout has five independent manifold components; individual named parts can also be exported. Assembly preview poses never change the bed-oriented export. Orbit by pointer/touch, pinch/scroll or buttons to zoom, Fit view to recenter.

## Printing, calibration and assembly

Print spine floor down, leaves flat hubs up, upper decoration up, cap flange down / peg up. No supports intended for this bounded supported subset. PLA or PETG, 0.16–0.2 mm layers, 0.4 mm nozzle, 3–4 walls and 30% infill are starting points. Inspect toolpaths, especially the cap peg. Cool and deburr bores; do not thin the axle wall. No hardware, magnets, bearings, fasteners or glue required.

**Calibration guidance:** first print full-size spine, lower leaf and cap. Test the leaf's free rotation on the post and test peg fit gently without forcing. With just one leaf the cap is not intended to seat against that leaf. Print the remaining leaves only after the radial and cap fits are satisfactory. Assemble lower, middle, upper leaves in order, all raised hubs upward; imported grip on top. Flip the cap and press its peg into the post until the flange seats at post top. Confirm each leaf rotates freely before use. Start at 0.35 mm radial clearance; increase toward 0.50 for binding. Increase cap allowance if too tight, decrease if too loose. These are printer/material-specific, not universal tolerances. Do not force a cracked post. The cap is friction-retained, not a certified locking latch.

Hold the short palm spine; sweep one exposed edge at a time, fan the leaves, and fold back. Side grooves improve edge grip. Keep fingers clear of closing gaps. Do not yank the leaves/cap. Small removable parts: not a child-safe product.

## Validation

`npm test` writes geometry-validation.json: default/minimum/maximum plus 128 range-corner cases; image threshold/relief and both STL fixtures at default/min/max. Exported binary triangles are parsed and tested for finite coordinates, nonzero triangle areas, normals matching winding, welded edges (1e−5 mm tolerance) with exactly two oppositely directed faces, five connected components with positive enclosed volumes, and measured millimeter bounds. Every imported-output part is checked individually.

Mechanism checks cover separated print layouts, bore/post radial gap, hub pitch/panel spacing, axial slack, post wall, blind-bore floor and cap overlap. Solid intersection tests sample 16 independently rotated leaf triples per default/min/max and import case, testing each leaf against spine, cap and its neighbors. The analytical axial separation proves no ideal rigid leaf collision at any angle. Cap/post press-fit overlap is intentional and excluded from moving-body tests. Sampled intersections do not simulate friction, tilt, bending or manufacturing errors.

`node browser-test.cjs` tests actual browser-selected PNG, JPEG, ASCII and binary STL files and saves real downloaded STL. It compares default/imported content, threshold, depth, footprint, rotation, placement and height; checks exact final-preview/export signatures and displayed dimensions; replace/remove/reset; unsupported/truncated/open/nonmanifold/concave/oversized inputs, bad dimensions, empty silhouettes and unsafe transforms. Mobile checks at 320/390 px include touch orbit, pinch zoom, imports, export and no horizontal overflow. `TEST_BASE`/`TEST_REPORT` can target a packaged deployment. Gallery validation checks inline script syntax, preservation of every earlier entry, unique new STL entry, rendering and search.

**These are digital geometry and mechanism checks only. No physical print, friction, fatigue, wear, FEA or load testing has been performed.** Validate in a slicer and calibrate your own printer. Arbitrary STL meshes outside the documented subset are deliberately rejected, not certified printable.
