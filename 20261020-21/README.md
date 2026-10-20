# Thumb Harp

A local React + Vite parametric STL generator for a hardware-free, one-piece pluck-comb fidget. Sweep the rounded tips or gently bend individual tines sideways and release. Graduated tine lengths vary tactile resistance. Unlike a slider, ring or squeeze loop, these are independently anchored cantilever flexures. Not a tuned musical instrument.

## Run / export

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `npm run deploy` exists as required, but the public monorepo is published from the root `deploy/` folder. Base: `/daily-app2/20261020-21/`.

All generation, Three.js preview and binary STL export are client-side. Dependencies are npm-bundled React, React DOM, Three.js; Vite builds the app and gh-pages deploys it. No APIs, keys, CDNs, webfonts or remote generation services. The preview uses the same final vertices/triangles as export. Geometry resolution is bounded (<2,000 triangles for current ranges); no worker required.

## Parameters

All dimensions and exported STL coordinates are **millimeters**. STL has no unit metadata: choose mm in your slicer.

| Parameter | Range | Default |
|---|---|---|
| Tines | 3–7 integer | 5 |
| Longest tine | 24–40 mm | 32 mm |
| Flexure width | 1.2–2.2 mm | 1.6 mm |
| Clear slot spacing | 4–7 mm | 5 mm |
| Z thickness | 2.4–4 mm | 3 mm |
| Rail depth | 8–14 mm | 11 mm |
| Scallop depth | 0–1.2 mm | 0.65 mm |
| Length graduation | 0–0.3 ratio | 0.2 |

Shortest tine = longest × (1 − graduation). Shortest tine / width must be ≥12. Invalid, blank, fractional count, out-of-range or nonfinite values block generation/download. Outer rail corner radii are 2 mm, tine roots 1.3 mm and rounded tip radius is half width. Minimum rail depth after scallops is 6.8 mm. Final X = 8 + count × width + (count − 1) × slot, Y = rail + longest, Z = thickness; displayed live. Default size: 36 × 43 × 3 mm.

## Print / tactile calibration

Print flat in the displayed orientation: broad XY plane on the bed, Z upward. No supports, separate assembly, moving fits, hardware, or print-in-place release required. Tines are integral to the rail, intentionally connected only at their roots. Slots are open and do not require breaking free. Retention is material continuity, not a snap-fit. PETG recommended; start with 0.4 mm nozzle, 0.2 mm layers, 3+ walls, solid tines. Keep brim out of slots. PLA is brittle/fatigue-prone; TPU is softer and less springy. Never reduce widths below supported ranges for a standard 0.4 mm nozzle.

Export the separate 3-tine flex test to sample your width, longest length, thickness and slot spacing without graduation. It does not prove the shorter final tines safe; use the final app's more conservative displayed stroke for those. Start below the on-screen sideways stroke estimate. It uses 1.5 × width × displacement / effective-length² ≤0.006, with effective length reduced by root radius and tip radius, capped at slot/3. Adjacent opposite bends therefore retain ≥slot/3 separation. This elementary cantilever estimate is **not** fatigue analysis, FEA, a universal material limit, or a performance guarantee. Printer, filament, slicing and environment affect strength and recovery. Stop at whitening, cracking or permanent set. Test gently and reduce width/increase length if too stiff.

Allow cooling; lift by the rail, clean strings, deburr, and inspect before use. Do not lever tips to remove the print. Retire damaged parts. Not a certified children's toy; fractured tines can be small/sharp.

## Geometry and checks

A single simple sampled planar outline with rounded roots/tips and scalloped rail is triangulated with Three.js ShapeUtils (Earcut) and extruded. Collinear contour points are removed before triangulation. No overlapping visual solids, CSG seams, or internal interfaces. Mesh coordinates are finite; caps and sides have outward winding. Preview is final, undeformed print geometry (no fake bending animation).

`node validate.mjs`: parses binary STL, verifies triangle count/file length, finite coordinates, nondegenerate faces, stored normals, outward volume, welded (1e-5 mm) closed-manifold edge incidence of exactly two opposite-direction faces, one connected component, expected bounding dimensions. Also checks the planar contour for crossing edges and the flexure envelope/slot separation. Exhaustively tests all 256 min/max corners (192 valid, 64 invalid) plus malformed inputs and 80 deterministic interior samples (68 valid, 12 blocked). A simple non-self-intersecting contour's uniform extrusion avoids self-intersections; this is separate from real-world flex performance.

`node browser-test.cjs`: requires the local installed Playwright path used by this automation and Vite on port 5180. Exercises actual downloaded browser STL bytes against generated final geometry; presets, representative min/max/mixed controls, slider, invalid controls, flex test, desktop and 320/390 px phone layout, touch orbit/pinch and phone download. `gallery-test.cjs` checks root inline scripts, entry preservation and browser rendering. JSON results and screenshots are stored alongside the app.

**No physical print or fatigue testing was performed.** All reported checks are computational geometry, conservative mechanism-envelope calculations, builds or browser tests.
