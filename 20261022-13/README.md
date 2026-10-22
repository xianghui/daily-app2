# Cascade Sway

A browser-only parametric **two-link pendulum fidget studio**. Hold the fixed palm tab upright so the joint axes are horizontal, then gently flick the two freely pivoting links. Two independent angles produce coupled swings, unlike a single pendulum or driven linkage. The manual pose sliders show geometry, not simulated dynamics. No hardware or compliant springs; five separately printed parts and a socket coupon.

## Run and export

```
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js/OrbitControls for preview, locally bundled manifold-3d WASM for robust Boolean solids, fflate for ZIP. Playwright is a development-only browser test dependency. No CDN, remote API, account or key is needed. Production base is `/daily-app2/20261022-13/`. Public deployment uses the **root** monorepo predeploy/deploy flow, not the per-app gh-pages script.

The large live canvas shows the actual generated part meshes. Switch between assembly and separated bed-flat layout. Download geometry-only binary STL (all parts or selected part), ZIP of five parts plus assembly instructions, or JSON settings. Preview colors are not STL colors. Every dimensional label is millimeters; angle controls explicitly show degrees. Undo/redo stores 35 debounced modeling snapshots. Saved JSON includes bounded image/mesh data, not fictitious file paths; invalid restored meshes are revalidated. Personal files are never uploaded or committed. Only user-initiated JSON saving writes source payloads to disk.

## Parameters and mechanism

| Parameter | Supported range |
|---|---|
| Lower arm center-to-center length | 16–24 mm |
| Upper arm center-to-center length | 30–40 mm |
| Palm thickness | 3–5 mm |
| Lower arm tactile groove depth | 0–0.6 mm |
| Radial running clearance | 0.20–0.50 mm |
| Cap socket radius allowance | −0.04–0.08 mm |

Arms are 3 mm thick. Axles are 4.8 mm diameter; bearing bores add twice the running clearance. Cap radius 4.2 mm overlaps every bearing by at least 1.3 mm. Cap stems have 1.8 mm engagement in 2 mm blind sockets. Minimum blind socket wall is 1.62 mm. Grooves leave at least 2.4 mm floor thickness. The first arm is elevated above the tallest permitted imported grip by at least 1.35 mm; the second arm clears the first cap by at least 0.5 mm. No imports enter either bearing surface. Both arms have a full revolution of geometric travel; both angles are independently previewable. Assembly dimensions differ from print-layout dimensions: the explicit X/Y/Z readout is for the selected printable export. A 10 mm ground grid supplies scale.

Three actual-mesh preset thumbnails offer Even drift, Long cascade, and Short flutter. Variations samples only supported parameter steps. Presets change proportions, thickness, texture and/or fits, not just color. The design remains a double pendulum.

## Image import: PNG and JPEG

Picker on phones/desktops, drag/drop on supported browsers, replace/remove/reset, source and conversion previews, and four downloadable synthetic fixtures. Maximum 2 MB, 12 megapixels, 6,000 px per side. Check file signatures/dimensions before decoding. Browser decoding catches truncated image content. A bounded 500 px preview becomes the portable source payload. White-composite transparent pixels; contain/cover and ±25% X/Y crop shift; resample to **20×20** grayscale luminance (`0.2126R + 0.7152G + 0.0722B`).

Threshold mode raises samples darker than a 1–254 threshold; grayscale mode raises proportionally to darkness. A triangulated continuous height field joins a solid 0.4 mm backing, with closed side walls and base. Relief depth is 0.4–3 mm. It is **2D-to-relief/raised silhouette conversion, not full 3D reconstruction from one photo**. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Backing sinks 0.15 mm into the rigid palm tab and is Boolean-unioned with it; original built-in raised grip is replaced. Empty results and any transformed vertex outside the 6.5 mm radial safe zone block export. Image pixel changes, threshold and depth visibly change the real exported geometry.

## STL import and integration

ASCII and binary STL, 2 MB maximum, ≤1,500 triangles, all dimensions 0.2–250 mm. STL has no units: an explicit **millimeter confirmation** is required before integration. Display source dimensions, triangle count, format and source mesh. Fit XY proportionally to 4–7 mm footprint; independently fit Z to 0.6–5 mm; rotate about bed-normal Z, center/reset and translate within the same safe zone. Tilt/X-Y rotation is deliberately unsupported to preserve a verified flat bed-facing footprint. The fitted narrower XY dimension must be ≥1.2 mm.

Accepted input: **one outward-wound, connected, closed, convex solid with a broad flat bottom** (≥25% of bounding footprint), all XY projections inside its bottom hull. Reject open/nonmanifold/inconsistently wound meshes, self-intersection, degenerate or nonfinite triangles, inward volume, disconnected solids, concavity, overhangs, excessive size/complexity, unsupported dimensions or unsafe transforms. No repair is claimed or attempted. Actionable guidance requests reorientation, simplification or re-export in a mesh editor. These deliberate restrictions do not pretend to support arbitrary models.

Normalize source min bounds, scale, center, rotate and place the mesh 0.15 mm into the fixed palm tab, then robustly Boolean-union it. Require one connected final solid per exported part. It is not an unchanged mesh re-export or overlapping shells. Imports affect the final part and never bridge moving joints. Parsing, bounded pairwise intersection checks and final solid generation run in a local worker with progress/error feedback; invalid edits disable export until fixed or reset. Replacing/removing failed files remains possible.

Fixtures in `public/samples/` are synthetic geometric artwork and simple closed wedges/gems, authored locally; no third-party artwork or personal files. The studio uses the model-first, warm quiet composition of vaseverse.org as a visual reference only; no branding, assets, text or source copied from it.

## Printing and assembly

1. Calibrate socket allowance with the coupon and one cap. Start with 0.30 mm radial running clearance and 0.00 mm socket allowance; these are **printer/material-specific starting points**, not universal tolerances. Also trial an arm bearing if uncertain.
2. Print all parts bed-flat as exported. Caps print flange-down, stems up. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls; brim for small caps. Geometry has no required ceilings/supports. No bearings, magnets, fasteners or elastic parts.
3. Remove elephant foot and burrs. Place upper arm on palm axle and insert pivot cap stem-down. Place lower arm on distal axle and insert elbow cap. Push the flange, not the arm.
4. Confirm both bearings rotate fully with axial clearance and both caps resist withdrawal. If a cap is loose, reduce allowance and reprint. Optional adhesive only in static sockets, never on bearings. Lift unbonded caps evenly to dismantle.
5. Hold the palm tab vertically, with axes horizontal, and flick gently. The model may have different balance/friction when printed. Keep fingers clear of swinging ends. Small parts are unsuitable for young children.

## Validation and limitations

`validate.mjs` reparses actual binary exports: exact length, nonempty finite/nondegenerate triangles, normalized normals, matching winding, positive enclosed volume for **each component**, welded edge incidence exactly two with opposite directed winding, expected mm bounds and five distinct components (or one per part). All defaults, three presets, representative min/max, each parameter edge and eight deterministic variations are exercised. Imported ASCII/binary STL and threshold/grayscale relief receive the same mesh and mechanism checks across minimum/maximum and preset cases.

Mechanism checks test cap overlap, socket walls/insertion, grip plane clearance, print-layout spacing and **144 combinations of the two joint angles** with actual Boolean pairwise intersections, excluding only intended static stem/socket press fits. Layer separation and coaxial circular clearances additionally bound all intermediate angles analytically. Watertightness alone is not treated as a mechanism test.

`browser-test.cjs` drives actual file pickers for PNG, JPEG, ASCII and binary STL and downloads/reparses their STL. Compares geometry to default and after threshold/depth/crop, mesh scale/rotation/placement, replacement, remove/reset; checks malformed/excessive/open/nonmanifold/concave inputs, empty silhouettes and unsafe transforms. Narrow 320/390 px layouts, actual touch orbit/pinch, imports/downloads, unclipped controls and runtime errors are checked. `extra-browser.cjs` verifies all presets/variations, portable JSON import round trips, undo/redo, ZIP/individual parts, coupon, palette neutrality and drag/drop. `production-test.cjs` verifies production worker/WASM, both pose controls, bottom-sheet collapse, exports and large synthetic image normalization/round-trip at phone width. Reports/screenshots are local evidence of these digital tests.

**No physical print has been tested.** Digital checks do not establish physical feel, cap durability, friction, wear, material shrinkage or long-term retention. Sampled pose checks are backed by axial separation, but not a physics solver. Do a fit trial before printing the whole design.
