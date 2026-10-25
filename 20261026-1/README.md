# Bight Lift

A React + Vite local maker studio for a **movable-bight fidget**. Draw a cord around a sliding, grooved return shoe: both cord spans shorten together, so the shoe moves half the pulled tail distance. Hand-feed slack to return. Unlike a belt between drums or a fixed capstan, this mechanism translates the return element and exchanges cord length at 2:1. It is a sliding shoe, not a rotating pulley; cord friction and stretch affect feel and no efficiency or automatic return is promised.

Two printable parts, plus an optional **250 mm length of 1 mm soft braided cord**. Hardware-free alternative: omit cord and thumb-glide the return shoe directly (without the 2:1 coupling). No bearings, magnets or fasteners. Both parts lift out; nothing is captive.

## Run and export

Node 22.12+: `npm install`, `npm run dev`. `npm run predeploy` builds production output with base `/daily-app2/20261026-1/`. `npm test` runs geometry and mechanical checks. Each part has a real binary STL button; combined STL arranges the two closed solids separately on the print bed. Everything ZIP contains both STLs and assembly notes. STL has neither colours nor unit metadata; import as **millimeters**, 100% scale. App-level gh-pages scripts are installed, but publication uses the root monorepo deploy flow.

## Mechanism and parameter ranges

All linear dimensions are in **millimeters**. Three model-thumbnail presets: Slow Draw, Pocket Bight and Long Pull; round, hexagonal and oval palm silhouettes.

| Control | Range | Effect |
| --- | --- | --- |
| Palm diameter | 22–28 | Ergonomic stationary landing |
| Shoe travel L | 16–28 | Guided stroke; ideal tail draw is 2L |
| Guide floor | 2.5–4 | Solid floor under the shoe |
| Running clearance | 0.30–0.60 | Each side, each end and preview underfoot |
| Flange radius R | 9–11 | Return-shoe footprint |
| Groove depth d | 1.4–2 | Radial depth; core radius is R−d |
| Palm dimples | 0–0.6 | Actual recessed grip texture |

Guide walls are 1.6 thick, 1.4 high. The shoe is two 45-degree flange tapers separated by a 2 mm high cord band, plus a top thumb button. The minimum nominal 1 mm cord centerline radius is 7.5 mm at the supported corner. Parts are separate solids, not overlapping shells. The tie-eye is a deliberate 2.4 mm through-hole; the fork has a 2.6 mm open slot. The palm well floor is 4.2 mm above the bed; engraving is limited to preserve at least 3.6 mm under its deepest cut. All imported modifications stay within radius 6.5 of the palm, at least 28.5 mm away from the mechanism.

For shoe displacement y, ideal routed length inside the device is `2*(y−eyeY) + π*(R−d+0.5)`. The arc length stays constant, so a shoe displacement Δy exchanges 2Δy at the free tail. The cord ghost varies exposed tail length inversely to show this conservation. It is schematic/estimated attachment routing only, not exported geometry or a tension/friction simulation. The shoe preview uses the chosen underfoot clearance; in real use it settles onto the floor.

Independent checks evaluate the actual solids at 41 positions over the complete stroke, verify no overlap, floor support, clear vertical removal, guide boundaries, print-plate separation and cord clearance above the low walls. Imported artwork never enters the lane or cord envelope. Computational checks do not establish tactile force, wear or physical-print performance.

## Image-to-fidget

File picker and desktop drop support PNG, JPEG and simple self-contained SVG. Limit 2 MB, 12 megapixels, 6,000 px per side. Validate headers before decode; normalize to at most 500 px. SVG supports simple paths/shapes only (2,000 elements, no scripts, foreign objects, text, linked content or effects); rasterize locally to 256 px.

Conversion uses a **20 × 20 sampled luminance height field** triangulated over a continuous backing, unioned with or subtracted from the palm well. Threshold mode selects dark pixels; grayscale mode maps darkness to height. The checkerboard shows the sampled cutout, not a texture on the final mesh. Bright holes stay unraised/unengraved, as verified with final-solid probes. Edges are sampled/sloped, not exact vector outline tracing. Background inversion, contain/cover fit, crop offsets ±25%, threshold 1–254, raised depth 0.4–3 and engraved depth 0.4–0.6 change exported geometry. This is **2D-to-relief conversion, not full 3D reconstruction from a photograph**.

Physical footprint 4–7, rotation ±180°, X ±1.5 and Y ±2; the safe-zone check rejects out-of-bounds combinations. Text (8 characters) and six searchable built-in marks use the same real geometry path. Original image and exact conversion are previewed; replace, remove, reset image and reset transforms are available.

## STL-to-fidget

Accept ASCII and binary STL, 40 bytes–2 MB, at most 1,500 triangles. Source axis dimensions must each be 0.2–250 mm. Choose Z, Y or negative-Z up before import. Explicit confirmation that source coordinates are millimeters is required because STL has no units. Source 3D preview and dimensions are shown.

This deliberately bounded importer accepts **one closed, consistently outward-wound convex solid with a broad flat bottom**: bottom contact at least 25% of its bounding footprint and all XY projections inside that footprint. Concave, hollow, disconnected, open, nonmanifold, degenerate, inverted, touching/self-intersecting and unsupported overhanging sources are rejected with guidance. It never silently repairs or substitutes a convex hull. Export a simpler flat-bottom solid from your modeler to resolve an unsupported source.

The original accepted mesh is translated to its minimum, scaled proportionally in XY to 4–7 mm footprint and independently in Z to 0.6–5 mm grip height, rotated/placed, then solid-unioned into the palm well. Thin XY profiles below 1.2 mm and disconnected or unsafe unions are blocked. Scale, placement and rotation measurably change the actual exported model. Axis changes request reattachment; reset/remove returns to the useful built-in grip.

## Studio and privacy

Light lavender desktop, white 374 px left controls, pink tactile buttons, local Fredoka/Rubik fonts and saved dark theme follow the read-only Keycap Studio reference. Phone layout puts preview, dimensions and exports before stacked controls. Orbit, pinch zoom, fit, cord-routing stroke, exploded, isolated parts and actual print layout are included. Three real presets have generated model thumbnails; variations stay within supported bounds.

Generation and STL parsing run in a Web Worker. Debounce, generation IDs and exact current-state keys prevent stale results from being exported. Invalid files/settings disable export while allowing recovery. Preview and downloads use the same checked geometry; a fingerprint is exposed for reproducible verification.

Undo/redo, six named local designs and JSON save/open keep bounded portable mesh/image payloads. Missing image payloads explicitly request reattachment; invalid or oversized designs are rejected. Files are processed **entirely locally in the browser**, never uploaded. Only synthetic fixtures are bundled in `public/samples`; no personal input files are stored in the repository. No API key, cloud service, remote font or CDN is needed.

Dependencies: React, React DOM, Vite, Three.js/OrbitControls, Manifold-3D, fflate, Fontsource Fredoka/Rubik; gh-pages for deployment. Playwright is a development-only browser test dependency. Fonts are SIL OFL, Manifold Apache-2.0, Three.js/React MIT, fflate MIT.

## Print, assemble and use

1. Print both parts flat, exactly as exported. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, at least 3 walls and 100% scale. Tapered flanges grow at 45 degrees; no supports are expected. Inspect your slicer and deburr the groove, eye and fork. The fork posts are 1.8 mm diameter; handle gently.
2. Place the return shoe in the open lane. Tie one cord end through the left vertical eye. Lead it down the left side, around the shoe's far semicircle inside its groove, then back along the right side and through the open fork. The cord is not retained vertically; keep it level and taut by hand.
3. Hold the palm. Pull the free tail toward the near end while lightly guiding the shoe. The shoe travels toward the anchor at half the ideal tail draw. Do not force a jammed shoe. Feed slack and hand-return to repeat; there is no spring or automatic retraction.
4. To release, lift the shoe vertically or unthread the fork and untie the eye. Cord-free: simply thumb-slide the shoe; the mechanical draw ratio no longer applies.
5. Start with **Pocket Bight** as a full-size clearance and abrasion calibration trial. 0.30–0.60 mm is a starting range, not a universal fit. Adjust for your printer, material and cord. Do not wrap cord around fingers/neck or add weights. Loose parts and cord: not for children.

## Reproducible verification

`npm test` checks defaults, all presets, all 128 min/max parameter corners and 35 imported-output cases. Binary STL validation independently checks exact file length, finite coordinates, nondegenerate triangles, unit normals consistent with winding, welded edge incidence/direction at 0.00001 mm, positive enclosed volume per connected component, intended through-eye topology and millimeter bounds. Each part and float32-separated print plate are checked. Solid intersection tests sample all 41 shoe positions and explicit floor-contact/release probes. An independent two-span length equation checks the ideal 2:1 ratio; cord probes check clearance from fixed walls.

After `npm run predeploy`, run `node serve-test.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs` and `node resilience-test.cjs`. They test the actual production worker/WASM under the real base path, real PNG/JPEG/ASCII/binary file selection and STL downloads, current-preview hashes versus exported bytes, geometry-altering image pixels/threshold/depth and STL transforms, unsupported inputs, replace/remove/reset, all presets, marks, SVG holes, ZIP contents, portable assets, undo/redo, named designs, worker loading failure, theme, focus, reduced motion and touch orbit/pinch at 320/390 px. Reports and screenshots are bundled next to the source, not personal upload files.

`gallery-validate.cjs` compiles every root inline script, verifies the newest entry exactly once and preserves every earlier entry. `gallery-test.cjs` checks browser gallery rendering and search. `root-check.cjs` compares the combined root deploy output with all gallery folders and the exact production app build.

See [VALIDATION.md](VALIDATION.md) for observed test results. **No physical print, friction/feel, abrasion, durability, cord-force, repeatability or fatigue testing has been performed.** All reported mechanical evidence is computational geometry/kinematics only.
