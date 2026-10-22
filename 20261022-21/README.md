# Rightline Ritual

A local-first React + Vite studio for an eight-part, hardware-free **Scott Russell straight-line fidget**. Slide the carriage horizontally to sweep the enlarged free thumb pad along a perpendicular line. A half-length rocker connects the fixed pivot to the exact midpoint of a full-length coupler; the coupler's other end pivots on the carriage. This is not a crank-slider, scissor or general-purpose model generator.

The quiet, model-first composition references Vaseverse's studio UX, without copying branding, assets, text or source. The reusable local studio shell and import preflight originate in this repository; the Scott Russell geometry, kinematics and mechanism checks are specific to this app.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
npm test
node browser-test.cjs
node extra-browser.cjs
```

Browser tests require a local Chromium installed for Playwright. Default test URL is `http://127.0.0.1:5240/daily-app2/20261022-21/`. `production-test.cjs` expects Vite preview at port 5245; `gallery-test.cjs` expects the root served at port 5246. Public deployment is **root monorepo** `npm run predeploy && npm run deploy`, not this folder's standalone deployment. The per-app deploy scripts remain available as requested.

Dependencies: React/React DOM, Three.js with OrbitControls, Manifold WASM for solid operations, fflate for ZIP; Vite/React plugin, gh-pages and Playwright for development and publishing. All generation dependencies, the worker and WASM are bundled locally, without CDN imports, APIs, keys or paid services.

## Units and supported controls

All model dimensions are millimeters; rotation is degrees and image threshold is 0–255 intensity. Defaults: palm track width 21, coupler pin span 40, rocker thickness 4, running clearance 0.35, palm tab radius 8, groove depth 0.3 and socket radial allowance −0.03.

| Control | Supported range |
|---|---|
| Palm track width | 18–24 mm |
| Coupler pin span | 32–48 mm; rocker is exactly half |
| Rocker thickness | 3–5 mm |
| Running radial and axial clearance | 0.25–0.50 mm |
| Palm tab radius | 7–9 mm |
| Edge groove depth | 0–0.5 mm |
| Socket radial allowance | −0.08 to −0.01 mm |
| Linkage preview | 30–65°; rounded guide-slot ends limit travel |
| Imported footprint | 4–7 mm longest XY dimension |
| Imported STL height | 0.6–5 mm, independent Z scaling |
| Imported rotation / placement | −180 to 180° Z; X ±1.5, Y ±2 mm |

Three real geometry presets change span, track width, rocker thickness and palm ergonomics; thumbnails use the same solid generator. Variations remain in these validated ranges. Invalid numbers or unsafe import placement disable exports with recoverable errors. JSON save/open includes a bounded portable image payload or validated STL mesh; no hidden external file dependency is claimed restored. Undo/redo stores up to 35 modeling snapshots. Preview colours are visual only: STL stores geometry, not colour.

## Local import contract

Use the desktop/mobile file picker or drag one file onto Import. Replace/remove/reset return cleanly to built-in geometry. Four synthetic sample fixtures are bundled under `public/samples`: PNG mark, JPEG waves, ASCII wedge and binary low-poly grip. These are generated test shapes, not personal uploads; no external artwork attribution is needed.

Files stay in browser memory and are not uploaded, sent to services or saved into the repository. Only explicit **Save JSON** writes a local portable design. Limits are checked before expensive processing: 2 MB/file, image ≤12 MP and ≤6,000 px/side, STL ≤1,500 triangles and 0.2–250 mm per axis, bounded finite coordinates. Source and final previews are both visible. Integration is on the stationary palm tab, entirely left of the linkage sweep.

### PNG / JPEG → solid relief

Validate signature and dimensions before decoding, normalize a portable source preview to ≤500 px/side, composite transparency onto white, then fit or crop and shift onto a **20 × 20** luminance grid. Luminance is `0.2126 R + 0.7152 G + 0.0722 B`. Threshold mode raises nodes darker than the chosen 1–254 threshold by the selected 0.4–3 mm depth. Grayscale mode sets node height to `depth × (1 − luminance / 255)`. A triangulated piecewise-linear continuous relief covers a 0.4 mm solid backing with closed sides and bottom. The backing penetrates the palm tab by 0.15 mm and is **boolean-unioned** into it, with no internal overlap shells. Threshold mode is a raised silhouette on backing, not a cutout mesh. All-white/empty results are rejected. Fit/crop, threshold, depth, physical footprint, rotation and placement affect the actual STL. This is **2D-to-relief conversion, not automatic reconstruction of a full 3D object from one photo**.

### ASCII / binary STL → integrated palm grip

Strict parser checks file completeness, finite vertices, nondegenerate triangles, welded edges with exactly two opposite directed incident faces, connectedness, outward winding, positive volume, bounding dimensions, triangle intersections, convexity and broad flat Z-down bed contact. Only **one convex, watertight, flat-bottom solid** whose XY projection stays within its bottom footprint is supported. Hollow, open/nonmanifold, concave, disconnected, self-intersecting, excessively detailed, tilted or overhanging shapes are rejected with guidance; **no automatic repair is claimed**. Bottom contact must cover at least 25% of XY bounding area; fitted XY spans must remain ≥1.2 mm.

Source dimensions and triangle count are displayed. **STL has no units:** explicit confirmation of millimeter coordinates gates integration and export. The source is centered, XY-fitted proportionally to footprint, independently Z-fitted to selected height, rotated about Z and placed on the palm tab. The bottom overlaps the tab by 0.15 mm, then Manifold performs a real solid union. A 6.5 mm radius safe-zone test rejects outlying placements; the final palm part must remain one connected valid solid. Imports are not merely displayed or re-exported unchanged. Arbitrary axis tilt is deliberately unsupported because it would break the verified support-free flat-bottom integration contract.

## Preview and export

Three.js provides touch orbit/pinch, zoom, fit/reset, matte materials, shadows, a 10 mm grid, part selection, colour palette and assembled versus printable-layout views. Each view uses the **same final part vertices and parameter snapshot** as export; the motion slider only changes assembled rigid transforms. Export is paused during pending or failed computation, unconfirmed units or invalid files/settings; stale valid geometry never enables export for invalid current settings.

Download binary STL for all eight parts laid flat in a separated row, or choose an individual part. ZIP includes eight individual STL files and assembly notes. X/Y/Z bounds of the chosen export are displayed. The single row is intentionally easy to inspect; rearrange individual parts in the slicer if it exceeds the printer bed. A socket coupon is available under Mechanism → FDM calibration. No fictitious print-time estimates or fake 3MF/AR/cloud controls.

## Mechanism, printing and assembly

Print all eight components broad-bottom-down, holes and pins upward. No supports intended. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and four walls are sensible starts. No hardware or compliant elements. Minimum planar track side wall is 6 mm; rocker pivot wall ≥1.5 mm at the smallest dimensions; coupler pivot wall ≥2 mm. The largest ordinary guide flange overlap is at least 3 mm. Base-pivot cap overlap is ≥0.9 mm; upper caps retain by ≥1.4 mm. Clearance and negative socket allowance are **not universal tolerances**: trial the coupon and reprint for your machine/material.

1. Pass the keeper's Ø5 mm stem upward through the base slot and press the slider's blind socket onto it. The guide base sits between upper and lower flanges with radial/axial running gaps. The stem seats below the socket roof, avoiding bottoming. The keeper must remain secure.
2. Place the half-rocker over the fixed base spindle. Put the long coupler's midpoint hole on the rocker pin and its end hole on the slider pin; the enlarged opposite pad remains free.
3. Press the three identical caps onto their Ø4 mm shoulder pegs. The shoulders maintain running gaps. Do not clamp moving faces or glue moving joints. A loose or tight press fit requires tuning/reprinting, not force.
4. Hold the stationary palm tab and gently slide the carriage between rounded slot ends. The free thumb pad follows the perpendicular line through the fixed pivot. Ideal linkage closure is exact; real running clearances introduce slight lateral wobble.
5. Do not force past end stops; keep fingers out of pinching joints. Lift caps gently for disassembly/service. Small parts are not for young children.

At angle θ: `A = (L cos θ, 0)`, `M = (L/2 cos θ, L/2 sin θ)`, `B = (0, L sin θ)`. Thus `|OM| = L/2`, `|AB| = L`, and `M = (A+B)/2`, proving the output's perpendicular straight line over the bounded branch. Rounded slot endpoints account for actual guide-stem radius to constrain θ to 30–65°, away from singularities at 0°/90°.

## Validation and limitations

`validate.mjs` parses exported binary STL, checks nonempty finite nondegenerate triangles, stored normals, welded two-face edge incidence (1e−5 mm tolerance), neighboring winding, positive volume of **each** component, flat orientation, millimeter bounds and correct component counts. Each generated part must have Manifold NoError status and one connected component. Tests cover defaults, min/max, all 128 parameter corners, three presets, eight representative variations, and image/STL-derived variants at six parameter sets. Mechanism checks verify exact link closure, running gaps, retaining overlaps, track walls and separate print layouts. Solid intersection tests sample 49 positions across the permitted branch, excluding only four intentional interference-seat pairs; they also cover imported outputs. These numerical checks do not simulate friction, material behavior, press-fit force or fatigue.

Browser validation selects real PNG/JPEG/ASCII/binary files, changes pixel conversion/transform settings, downloads and parses actual STLs, compares exact final geometry fingerprints and displayed dimensions, rejects malformed/truncated/oversized/open/nonmanifold/concave files, exercises empty image recovery and unsafe transforms, presets/variations, undo/redo, all portable JSON source round trips, per-part and ZIP export, coupon and drag/drop. Desktop plus 390/320 px phone layouts, touch orbit/pinch, collapsed controls and reachable downloads are checked. Production bundles are tested separately with their local worker/WASM.

**No physical print has been tested.** Digital mesh/manifold and mechanism checks are not a verified physical print. Print a fit trial; assess sliding friction, pivots, wear, retention and material behavior before repeated use. Relief resolution is intentionally bounded and may soften fine image detail. Only the documented STL subset is accepted.
