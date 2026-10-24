# Crosswise Calm

A local browser-based parametric **Oldham coupling fidget generator**. Two parallel, slightly offset thumb discs exchange rotation through a floating shuttle with perpendicular keys. Feel the shuttle's repeating sliding stroke while gently turning. This differs from crossed-axis XY slides: both outer discs rotate together and the crossed shuttle transfers their motion.

**Intentionally hand-guided and non-captive.** Light hand pressure keeps the three-part sandwich assembled. There are no bearings fixing the center positions; your hands maintain the selected offset. Lift the output disc to release everything. The animation is ideal kinematic positioning, not a force, friction or physical-motion simulation. No physical prints have been tested.

## Run and publish

```
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261025-8/`. Individual package contains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public combined deployment uses the parent repository's `npm run predeploy` then `npm run deploy`, not the individual deploy command.

## Maker studio

Reference inspected read-only: `keycap_generator2` README, App.tsx, Viewer.tsx, styles.css, imageTrace.ts, geometry/stl.ts, worker.ts and export.ts. Concrete patterns adopted: 374 px left control panel, sticky compact brand/theme header, numbered collapsible sections, raised tactile selection buttons, paired mm sliders/numeric controls, pink checked states, lavender desk, bundled Fredoka/Rubik fonts, checkerboard source/cutout previews, source mesh dimensions, gated unit confirmation, worker-built geometry, view toolbar, build status, and prominent export panel. Phone layout puts viewer and exports before stacked controls. Saved coherent dark theme, reduced-motion CSS, keyboard focus, touch orbit/pinch, reset/fit and zoom buttons.

Three model-thumbnail presets: Gentle Offset, Pocket Cross, Wide Traverse. Round/hex/oval palm shapes, bounded variations, text (8 characters), searchable bundled symbol selection, raised or engraved marks, undo/redo, six local named designs, portable JSON save/open, per-part binary STL and Everything ZIP with assembly notes. STL has no colour; preview swatches change appearance only. Assembled, exploded, isolated input/shuttle/output, print-plate and ghost-input views share the same geometry. Exports always use separated print orientation, never assembled positioning.

## Imports, limits and privacy

All files processed on the device; no API, CDN, server, upload or keys. Dependencies, fonts and Manifold WASM bundled locally. Synthetic examples in `public/samples/` are provided for file picker, drop or sample buttons: PNG, JPEG, hole-bearing SVG, ASCII wedge STL and binary gem STL. No personal assets bundled.

General maximum file size **2 MiB**. Actual content checked, not just extension.

### Image to relief

PNG/JPEG: at most **12 megapixels**, **6,000 px per side**; verified header and browser decode. Normalize to at most 500 px per side for portable storage. Simple SVG paths/shapes accepted, at most 2,000 elements and 6,000 px dimensions; reject scripts, references, external resources, text and effects; rasterize locally to 256 px. No external SVG requests.

Fit or cover-crop onto a **20 × 20** luminance grid, with ±25% crop shifts. Transparent background composites against the selected light/dark background. Use light-background removal or dark inversion. Threshold 1–254 sets dark pixels to relief depth, bright pixels to zero; grayscale mode uses depth × (1 − luminance/255). Grid vertices become a triangulated top surface on a **0.4 mm continuous backing** with closed side/bottom faces. It is a sampled height-map relief, not exact vector-outline extrusion. Light internal holes stay unraised or unengraved, not cut through the structural floor. The cutout checkerboard displays the sampled mask; mesh heights interpolate across triangle edges. Empty conversions are rejected.

This is **2D-to-relief/silhouette conversion, not reconstruction of a 3D object from one photo**. Raised depth 0.4–3 mm. Engraving 0.4–0.6 mm. Placement footprint 4–7 mm, XY ±1.5/±2 mm, Z rotation ±180°. Surface/text/icons use this same exportable geometry path. Text uses locally bundled Rubik, not a remote font service.

### STL to integrated grip

ASCII and binary STL; at most **1,500 triangles**. Each source dimension 0.2–250 mm. STL has no units: explicitly confirm millimeter coordinates before export unlocks. Select Z-up, Y-up or −Z-up before choosing the file. Changing up-axis requests reattachment. Show oriented source mesh, dimensions, triangle count and format, alongside the final fidget. XY scales proportionally into a 4–7 mm footprint; independent height 0.6–5 mm, Z rotation ±180°, center/reset, and XY placement controls. The actual original solid is unioned into the input palm well; it is not merely displayed or re-exported. Mesh identity/concavities are never replaced by a convex hull.

**Bounded supported contract:** one connected, consistently outward-wound, closed **convex flat-bottom solid**, bottom contact at least 25% of footprint, all projected vertices inside that bottom footprint, and no scaled XY dimension below 1.2 mm. Unsupported concave/hollow/overhanging/disconnected/open/nonmanifold/degenerate/self-touching/self-intersecting meshes are rejected with guidance; no automatic repair claim. Weld tolerance 0.00001 mm; signed volume, edge incidence, winding, pairwise triangle intersection, convexity and bed-contact checks run in a worker. Reorient or simplify in a mesh editor and reattach.

Both workflows union into a protected 6.5 mm radius palm zone, embedded 0.15 mm into the well floor, or subtract bounded engraving. All solids go through Manifold booleans. The complete result must retain one connected solid per intended part. Personalization cannot reach slide interfaces. Remove, replace and reset return to built-in geometry.

## Dimensions and mechanism

All physical parameters **millimeters**, rotations degrees:

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 |
| Rotor radius | 18–24 |
| Key width | 4–6 |
| Parallel-axis offset | 2–4 |
| Plate thickness | 7–9 |
| Palm dimples | 0–0.6 |
| Per-side running clearance | 0.25–0.50 |

Disc thickness is 7–9; groove depth 2.5; shuttle disc thickness 2.5. Tongue height 2.5 − clearance. Assembled plate separation yields tongue engagement **2.5 − 2 × clearance = 1.5–2 mm**, with vertical floor gap 2 × clearance. Lower and upper key directions are perpendicular. Their widths are surrounded by one selected clearance per side. Shuttle radius = rotor radius − offset − 3, leaving at least a 3 mm radial envelope margin over a full ideal turn. Key length = twice (shuttle radius − 1). Floored open grooves allow easy lift-out assembly. These are loose sliding keys, not a snap fit or a safety-retained joint.

With input center (0,0), output (e,0), turn θ and input groove direction u=(cos θ,sin θ), shuttle center is e cos θ u. Its displacement lies on the input groove, while displacement from output center lies on the perpendicular output groove. The UI's 0–360° guided-turn control demonstrates this ideal geometry. Output faces down, input faces up. The palm and imported features lie outside both rotor envelopes. Print plate has three separated closed components; every part also downloads individually at Z=0. Final X/Y/Z bounding size shown for the selected export.

## Printing and assembly

PLA or PETG, not flexible TPU, as a starting material. 0.4 mm nozzle, 0.2 mm layers. Print input/output **groove-up, flat base down**, no supports. Print shuttle **lower-key-down as exported**, with removable build-plate supports underneath its overhanging disc. Keep supports off sliding key sidewalls. This is not described as entirely support-free. Deburr, remove supports, and check all three contact surfaces are flat. Assemble lower key into input groove; turn output groove 90° relative to input and lower it over the upper key. Keep the loose sandwich gently compressed and the centers offset as selected. Lift to release. Keep skin clear of gaps; no small children/small-part use implied.

Print **Pocket Cross as a full-size calibration coupon** first. Change clearance to suit extrusion, material and elephant-foot compensation. Do not force a tight fit. No universal friction, strength, retention or wear life claimed. No hardware or glue needed. There is no print-in-place release. Supports required only for shuttle. Never imply STL stores swatch colours.

## Responsiveness and persistence

Manifold WASM generation, STL parsing and expensive checks run in a Web Worker, with 100 ms debounce, bounded mesh complexity, sequential request IDs and exact serialized-input keys. Parsing has separate stale guards. A last-good mesh may remain visible during edits/errors, explicitly labeled; **export is blocked** until the exact current build is valid. Worker failures and invalid uploads block exports and provide recovery. Preview and STL use the same final vertex/index result.

Portable JSON includes bounded normalized PNG or verified indexed STL payloads; no pretend file paths. Missing image payload requests original file reattachment. Restored STL is re-parsed through the same topology checks. JSON maximum 2 MiB; imported pixels maximum 250,000 on restore. Local storage can fill; explicit error suggests saving JSON. Local designs store at most six; history at most 35 snapshots.

## Dependencies and tests

React, Vite, Three.js/OrbitControls, Manifold-3D (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL); gh-pages for publishing, Playwright for browser checks. Reuses maintained local import/editor infrastructure from earlier Daily App studios with a new coupling geometry and mechanism checks; no reference Git history/dependencies copied wholesale.

`npm test`: 132 preset/boundary combinations and 35 image/STL cases; binary STL reparse, finite/nondegenerate triangles, normalized normals, positive volume per component, welded edge count exactly two, opposing neighbor directions, independent millimeter bounds, per-part checks, Boolean interference at 12 turns, orthogonal key alignment and protected personalization. Invalid inputs must throw. Browser suites download actual STLs and independently compare current preview signatures to regenerated portable-design geometry. These are computational checks, **not physical print validation**.
