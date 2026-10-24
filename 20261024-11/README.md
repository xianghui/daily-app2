# Bristle Step — inclined-foot fidget studio

A browser-only React + Vite parametric STL editor for a single-piece TPU fidget. Six canted legs bend sideways under a gentle palm press and recover on release. Surface friction may convert that cycle into a small directional stick-slip step. This is not a roller, captive slider or pluck-comb: the intended interaction is repeated compression on a table and oblique elastic recovery. Walking depends on the printed material and contact surface; neither gait nor load capacity is guaranteed. Rocking in place is the alternative interaction.

## Studio

Large orbit/zoom/reset/fit 3D preview, actual mesh preset thumbnails, three distinct geometries (Short Step, Bristle Step, Long Reach), bounded Variations, Shape/Mechanism/Surface/Import/Print tabs, numerical inputs paired with sliders, preview palette, and persistent STL export. Mobile has a useful touch canvas, collapsible controls and fixed export dock. Clicking the model selects the sole solid. Print layout is plate-down / feet-up; Working preview flips the same undeformed solid feet-down, and is **not** a deformation or gait simulation. Selected dimensions and exports always refer to print coordinates in millimeters. STL has no colours.

Undo/redo tracks modeling actions after a short debounce (35 snapshots). Save/Open JSON contains bounded image PNG data and conversion settings or the verified STL vertices; it does not pretend to restore absent source files. Files and JSON are processed locally. No API, upload, analytics or CDN runtime imports. Sample fixture fetches are same-site static downloads, not user uploads.

## Parameters (mm)

| Parameter | Range | Effect |
|---|---|---|
| Palm width | 14–22 | Plate width and foot-row spacing |
| Palm length | 36–52 | Plate length and three foot-column pitches |
| Foot diameter | 1.6–2.4 | Actual circular shaft/tip diameter |
| Foot vertical rise | 8–14 | Rise above 2.4 mm plate |
| Foot forward lean | 3–6 | Horizontal top/root displacement |
| Palm dimples | 0–0.6 | Real recesses on isolated palm tab |

Plate floor beneath the import well is 1.6 mm. Six parallel legs incline 12.1–36.9 degrees from vertical, have rounded tips and overlap the plate at their roots. Minimum row surface separation is 5.6 mm. No separately moving interfaces, fit tolerances, captive joints, hardware or assembly. A 0.5 mm per-leg lateral inspection envelope leaves more than 4.5 mm separation. This is a geometric check, not a safe load rating or strain simulation. Imported material stays within 6.5 mm radius around the palm tab, at least 7.3 mm from the nearest foot root and 4.75 mm from the foot contact plane.

## Image import

PNG/JPEG, file picker on desktop/phone and single-file drag/drop. Type signature, dimensions and size are checked before expensive processing: 16 bytes–2 MB, at most 12 MP and 6,000 pixels per side. Decode errors are recoverable. Transparent pixels composite over white. A local normalized preview is bounded to 500 pixels on its longest side. Fit/contain or fill/crop plus ±25% XY crop shifts resample the image to a **20×20 luminance grid**. Rec.709 luminance: 0.2126R+0.7152G+0.0722B. Threshold mode raises dark samples below a threshold of 1–254; grayscale mode uses depth×(1−luminance/255). Depth 0.4–3 mm. The triangulated height field has a continuous 0.4 mm backing and is closed with side walls and a bottom; it is sunk 0.15 mm into the solid palm well and robustly unioned. Thresholded edges are interpolated between grid samples, not vector tracing. Empty white input is rejected. This is **2D-to-relief/silhouette conversion, not automatic full 3D reconstruction from a photo**. Source preview and exact conversion-grid preview are shown alongside the final model.

## STL import and integration

ASCII or binary `.stl`, 2 MB max and 1,500 triangles max. Each source axis must span 0.2–250 mm. STL has no units: the user must explicitly confirm millimeter source coordinates before export is enabled. Only one connected, closed, consistently outward-wound, convex solid with a broad flat Z-bottom is supported; bottom area must be at least 25% of XY bounding area and contain the entire XY projection. Open/nonmanifold meshes, concavity, hollow/disconnected decorations, degenerate faces, self-intersections, invalid coordinates, overhang footprints and unsupported bed orientation are **rejected, not silently repaired**. Reorient, simplify and repair in a proper mesh editor before retrying.

The source mesh and original dimensions are previewed. XY scale is proportional and fitted to a 4–7 mm footprint (minimum fitted XY span 1.2 mm); Z independently fits to 0.6–5 mm height. Rotate about Z ±180°, translate X ±1.5 mm / Y ±2 mm, center/reset, replace/remove. Unsafe transformed geometry is rejected by actual vertex positions, not silently clipped. The solid is robustly unioned to the palm tab and must become one connected component. This is not unchanged mesh re-export: imports replace the built-in thumb feature and measurably alter the final STL. Imported features cannot obstruct or fuse the foot flexures.

## Export / dependencies

Binary STL is generated client-side from the exact final mesh used for preview (model signatures are exposed for validation). Primary Download STL exports the plate-down solid; the model selector also permits the named single solid. ZIP includes `walker.stl` plus assembly/material guidance. All dimensions are mm. Dependencies: React, React DOM, Vite/react plugin, Three.js/OrbitControls, Manifold WASM for CSG, fflate for ZIP, gh-pages deployment, Playwright for tests. All browser dependencies/WASM are bundled locally. Geometry and STL preflight run in a worker with bounded inputs.

```
npm install
npm run dev
npm test
npm run predeploy
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Browser tests expect Vite port 5270 (or TEST_BASE). Production is published by the **root monorepo** flow, not individual folder deploy. Individual required `predeploy` / `deploy` scripts remain available. Vite base: `/daily-app2/20261024-11/`.

## Validation versus physical tests

Every generated part undergoes finite-coordinate, nondegenerate-face, positive-volume and welded-edge manifold/winding checks. Manifold CSG produces the actual union, not overlapping display shells. The independent binary STL validator checks actual downloaded normals, connected components, edge incidence, outward orientation, volume and mm bounds. Tests cover defaults, all 64 parameter corners, three presets, eight variations and image/STL sources at representative bounds. Mechanism tests verify root layout, print inclination, separated feet, conservative lateral envelopes, a shared feet-down contact plane, and CSG differences proving imports cannot change foot geometry. Browser tests import PNG/JPEG and ASCII/binary STL through real file inputs; compare exported bytes after content/threshold/depth/transforms; reject malformed/oversized/open/nonmanifold/concave/empty sources; exercise save/open, undo/redo, ZIP and phone touch orbit/pinch. Reports describe exactly which checks passed.

**No physical print, walking, spring force, friction, load or fatigue tests have been performed.** Geometric validation does not establish those properties. There is no verified gait simulator, automatic mesh repair, acoustic claim or invented print-time estimate.

## Printing / use

TPU 95A recommended; do not print PLA for flexing use. Start with Short Step as a full-size calibration specimen. Plate flat at Z=0, legs upward. Shafts are below 37° from vertical; rounded tips have small local overhangs. Designed to print without supports, but inspect slicer toolpaths and add removable support if your TPU setup needs it. Starting point: 0.4 mm nozzle, 0.2 mm layers, continuous shaft perimeters and good root bonding. No settings are universal. Turn feet-down and gently press the plate above the legs on a clean dry table. Start below 0.5 mm deflection; stop for whitening, tearing, buckling or permanent set. Do not force the mechanism. Fingers stay away from contact feet. Imported relief stays clear of the table. No screws, magnets, bearings, cords or adhesive. Keep away from children.

## Reference and fixtures

UX reference: https://vaseverse.org/ — translated to model-first composition, compact grouped controls, source patterns, real presets/variations, and reachable part/ZIP exports. Original product, styling and interaction; no copied branding, source, assets or text. Archived app collection was inspected read-only for duplicate concepts and never modified.

`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic fixtures carried from the local studio infrastructure, authored for this collection (no personal files, no third-party image attribution required). Imports are deliberately constrained rather than promising arbitrary meshes are printable.
