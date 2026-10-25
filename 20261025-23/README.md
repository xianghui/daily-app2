# Hook & Hold

A local browser maker studio for a **hand-guided elastic hook latch fidget**, not a game or automatic snap buckle. Two J-shaped tips terminate independent TPU cantilevers on a shared palm. Lift the upper hook above the lower, squeeze inward, lower the hooks past each other, then ease off to seat opposing faces. Lift again to release. Do not push the hooks through one another in-plane.

## Run and build

Node 22.12+; `npm ci`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261025-23/`. The per-app deploy script exists as required, but publication is through the parent monorepo's `npm run predeploy` / `npm run deploy`.

## Studio

React/Vite; locally bundled Three.js, OrbitControls, Manifold WASM, fflate and Fredoka/Rubik fonts (Fontsource, SIL OFL). No CDN, account, API key, server modeling or paid service. Maker-studio patterns inspected in the read-only Keycap Studio reference include the left collapsible control rail, paired millimeter inputs, raised selected buttons, sticky brand/theme controls, checkerboard cutout, source mesh editor, view toolbar and separate export panel. Shared import/editor infrastructure was adapted from the preceding daily studio; the new latch geometry and its independent mechanical checks are specific to this app. Neither reference nor archived gallery was modified.

Three real presets have generated model thumbnails. Round/hexagonal/oval palms, texture, bounded randomization, text and searchable bundled glyph marks change geometry. Undo/redo tracks settled changes. Save up to six named designs locally or save/open portable JSON with bounded image and mesh payloads. Missing images require reattachment; malformed payloads block export. Saved dark theme, visible focus, reduced motion, desktop left panel/right viewer and phone preview-first stacking are provided. One-piece model: rest, print and whole-solid views intentionally show the same undeformed printable solid, not a fake movement simulation. See-through display and preview swatches never alter STL.

## Dimensions and ranges (millimeters)

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 |
| Upper free beam length | 28–36 |
| In-plane flexure width | 1–1.4 |
| Open hook separation | 2–3 |
| Arm half-spacing | 8–10 |
| Palm dimples | 0–0.6 deep |
| Latch running clearance | 0.3–0.6 |

Beam / hook print height is 3 mm; root is 4 mm wide; palm is 5 mm high with a 0.8 mm recess. Hook projected engagement overlap is 2 mm. Required guided inward bypass is `open gap + 4 + clearance`; tip lift is `3 + clearance`. Clearance depends on printer, filament and slicer; it is not a universal fit. Import edits stay inside a 6.5 mm safe radius and at least 23.5 mm from the flexure root. Final current export X/Y/Z bounds are shown in mm. Invalid numeric entries block export rather than silently clamp.

## Image and SVG workflow

Choose/replace by file picker, drag one file, or try bundled synthetic `mark.png`, `waves.jpg` and `ring.svg` fixtures. Actual PNG/JPEG content and dimensions are checked before decode: 2 MB, 12 MP, at most 6,000 px/side. Normalize to at most 500 px and sample a **20 × 20** fit/cover grid, with ±25% crop shift, alpha compositing and light/dark background selection. Luminance is 0.2126 R + 0.7152 G + 0.0722 B. Threshold 1–254 makes a silhouette-height mask; grayscale maps inverse luminance to relief height. Triangulate the grid over a 0.4 mm continuous backing with closed side/bottom faces, then solid-union to the recessed palm. Raised depth is 0.4–3 mm; engraved depth is limited to 0.4–0.6 mm to preserve the floor. Physical footprint is 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm. Empty results fail recoverably. Checkerboard shows the actual sampled cutout alongside the source.

This is **2D-to-relief**, NOT reconstruction of a full 3D object from a single photo. Bright interior holes remain unraised/unengraved, with continuous backing; no claim of exact vector tracing or through-holes. Simple self-contained SVG shapes/paths are sanitized and rasterized locally to 256 px first (≤2,000 elements); text must be outlined, no scripts, external references or effects. Text/glyph marks use the same documented relief workflow. Remove source, reset image settings or reset transforms to recover built-ins.

## STL workflow

Actual ASCII and binary STL supported, ≤2 MB, ≤1,500 triangles; every source axis must be 0.2–250 mm. Select Z, Y or inverted Z up before attaching; source dimensions and triangle count are shown next to an interactive source preview. **STL has no units: explicit millimeter confirmation is required.** XY fits proportionally into the chosen 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Rotation, placement and reset affect the exact exported result. Original vertex/triangle shape is retained, not replaced by a convex hull. The transformed mesh is solid-unioned into the palm with 0.15 mm engagement.

Input contract deliberately supports only **one outward-wound, closed, convex, broad flat-bottom, non-overhanging solid**. Concave, hollow, disconnected, open, self-intersecting, inconsistent or nonmanifold files are rejected with guidance; orient a broad base downward and simplify/re-export in a modeler. No automatic repair is claimed. This restriction bounds robust local validation, not a promise to accept every STL. Synthetic `wedge-ascii.stl` and `gem-binary.stl` demonstrate the path. No personal uploads are bundled in this repository.

## Export, responsiveness and validation

A debounced module worker loads bundled Manifold WASM, generates and CSG-unions solids, checks connectivity, finite coordinates, nondegenerate triangles, positive volume, closed two-face edge incidence and opposite winding at 0.00001 mm welding tolerance. Checks also run on float32 print-layout coordinates. Resolution and imports are bounded. Latest request IDs and exact state keys gate export; an invalid/loading state may show the last good preview but cannot export it. Preview and binary STL share the same final current geometry. Export the sole part / entire plate, or a ZIP with STL and assembly notes. STL does not encode colors and the ZIP is not described as 3MF.

Reproducible checks: `npm test` tests 132 preset/extreme cases, image and STL-derived cases, independent bounds, topology/volume/normals, malformed inputs, protected import isolation and 43 rigid hook-tip path samples. `browser-test.cjs`, `feature-test.cjs`, `hole-test.cjs`, `resilience-test.cjs` exercise production assets on port 5299, real file pickers/downloads, geometry fingerprints, JSON/local persistence, images/threshold/depth, STL transforms, invalid inputs, workers, touch orbit/pinch, themes and ZIP contents. Test reports and screenshots accompany the source. Point a local production server at the real base path; the temporary server used for this run is not a runtime dependency.

## Printing / physical limits

Use TPU 95A as a starting point; **not brittle PLA**. Print in supplied bed-flat orientation, support-free, 0.2 mm layers / 0.4 mm nozzle. Inspect narrow beams, wall toolpaths and hook gaps in your slicer. Pocket Hook is a full-size fit/material calibration; start at 1 mm squeeze / 0.5 mm lift and only increase gently to the required bypass. Trim strings without notching beams. No assembly, hardware, bearings or magnets. Hooks are intentionally releasable by lifting, not permanently captive. Stop for excessive force, whitening, tears or delamination.

Geometry checks verify undeformed solids, safe gaps, projected retention faces and a hand-guided rigid-tip passage. Simple `1.5 × thickness × tip displacement / length²` beam-strain indicators are bounded to 2.2%; these do **not** simulate nonlinear deformation, hand clearance, force, creep, holding stability or fatigue. No physical print, strength, fatigue or force testing has been performed. Never claim computational watertightness proves a working physical latch. Small parts are not children's toys.
