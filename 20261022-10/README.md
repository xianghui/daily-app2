# Meander Palm — a local switchback fidget studio

A React/Vite studio generating a three-part physical fidget: a round puck traces three parallel lanes joined by two circular U-turns. Tilt the assembled tray or nudge the puck through the narrower serpentine lid slot, then reverse. This is not a browser game. It differs from a linear shuttle or closed racetrack: each passage has two reversing bends and finite endpoints.

The model-first warm studio references Vaseverse's compact editing composition, without using its branding, assets, text or code. Three locally generated 3D preset thumbnails, bounded variations, editable dimensions, preview colours, undo/redo, portable JSON save/open, orbit/zoom/fit, desktop rail and phone collapsible controls are included.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
```

`vite.config.js` uses `/daily-app2/20261022-10/`. Per-app `predeploy` builds and `deploy` runs `gh-pages -d dist`; the public collection is published by the ROOT monorepo deploy command, not by this app's standalone deploy.

One primary Download STL action exports geometry-only binary STL, with all three parts in separate bed-flat positions or the selected individual part. ZIP includes three individual STLs and assembly notes. All coordinates and displayed/exported dimensions are millimeters. Colours are preview-only, not embedded in STL. Assembled motion never changes printable geometry. Rendering and exporting consume the same worker-generated final vertex/index arrays.

## Image workflow

Use the picker on phone/desktop or drop a PNG/JPEG. Files are capped at 2 MB, 12 megapixels and 6,000 pixels per side; headers are inspected before decoding. Display normalization is bounded to a 500-pixel longest side; this same normalized source is saved in design JSON so reopening is exact. Alpha composites on white.

The conversion samples a **20 × 20** fit-entire/cover-cropped image with ±25% XY crop shifts. Darkness either sets a thresholded raised silhouette or continuous grayscale height. Threshold range 1–254, relief depth 0.4–3 mm. Each grid cell is triangulated into a continuous height field over a 0.4 mm backing, with closed boundary walls and bottom. The backing intersects the palm tab by 0.15 mm; Manifold performs a real solid union. Empty silhouettes are rejected. This is **2D-to-relief conversion, not full 3D reconstruction from a photograph**. Footprint, XY location and Z rotation are editable. The import changes final exported triangles and volume.

## STL workflow and supported contract

Both ASCII and binary STL are parsed locally in a worker. Limit: 2 MB, 1,500 triangles, one connected outward-wound watertight convex solid, 0.2–250 mm original span per axis. The user must explicitly confirm millimeter coordinates because STL carries no unit metadata. Source geometry and dimensions are shown separately from the final fidget.

Preflight checks finite coordinates, nondegenerate triangles, consistent winding, positive enclosed volume, welded two-face edge incidence, connectedness, triangle self-intersections, convexity and a broad bed-facing flat bottom. All projected XY points must be contained by that bottom polygon. Concave, hollow, open, nonmanifold, tilted/overhanging or disconnected models are deliberately **rejected**, not claimed repaired. Use a mesh editor to orient, simplify or make a suitable convex low grip.

XY is scaled proportionally to a footprint of 4–7 mm, while Z is independently fitted to height 0.6–5 mm. Rotation about Z is ±180°; X offset ±1.5 mm, Y offset ±2 mm. Reset centers transforms. The entire fitted grip must stay within a 6.5 mm radius tab safe zone; minimum fitted XY span is 1.2 mm. It is solid-unioned into the palm tab and must leave exactly one connected solid. The tab is wholly outside the lid and puck motion envelope. No overlap-only visual shells are exported as a union.

Replace, remove and reset return safely to defaults. Invalid files/transforms block export without removing the recovery controls. Saved design JSON contains bounded normalized image data or validated mesh vertices/indices; reopening revalidates mesh data. Nothing is uploaded or stored remotely. Repository samples are synthetic original fixtures reused from the collection: `mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`, with no personal inputs.

## Parameters and mechanical safeguards

| Parameter | Supported mm range |
|---|---|
| Puck diameter | 8–10 |
| Half straight-run length | 16–24 |
| Lane center pitch | 16–20 |
| Puck thickness | 2.4–3.6 |
| Palm floor thickness | 3–5 |
| Lid thickness | 2–3 |
| Palm groove depth | 0–0.6 |
| Running clearance, radial and vertical | 0.25–0.50 |
| Square lid socket size allowance | −0.08 to +0.04 |

Channel width = puck diameter + twice running clearance. Chamber height = puck thickness + running clearance. Slot width = puck diameter − 3.5 mm, leaving 1.75 mm retention overlap per side. The inner U-bend radius is positive across all supported settings. Separator walls are at least 5 mm. Palm grooves do not touch the chamber. Lid sockets stop above the floor; four square 2.4 mm pegs insert 2 mm. Negative socket allowance is deliberate friction-fit interference, NOT collision of moving bodies. Positive allowance can be loose and is for fitting experiments. Lid friction retention is not a snap lock and must be physically confirmed.

The tray, puck and inverted lid are three connected closed solids each. Print layout gives 6 mm spacing and no accidental joins. No compliant parts or purchased hardware are involved.

## Print and assembly

1. Print the exported tray floor-down, puck flat, lid outer face down with pegs upward. No supports are designed in; do not print assembled preview orientation.
2. PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, four walls, roughly 25% infill. Keep channel and puck surfaces smooth. Deburr elephant foot; don't remove retention shoulders.
3. Print one full-size trial before making multiples: try 0.35 mm running clearance and −0.04 mm socket allowance. Fits depend on printer/material. If the puck binds, increase running clearance. Sand pegs carefully or change socket allowance rather than forcing a tight lid. There is no universal fit claim.
4. Place puck in the channel, invert and align the lid, seat the four pegs. Confirm the friction lid stays put before tilting. Slowly tilt or nudge through the two returns, then reverse.
5. Ease up the outer lid edge to disassemble. Do not glue the puck. Small removable part; not a child's toy.

## Verification and limitations

`npm test` validates 32 built-in parameter cases (defaults, all-min/all-max, three presets, each parameter endpoint, eight deterministic variations) and 24 image/STL-derived cases. Checks parse actual binary exports: nonempty finite triangles, nonzero areas, normalized matching normals, welded edge incidence exactly two, balanced winding, positive volume for each connected component, mm bounds, bed orientation and disjoint print layouts. Manifold solid operations provide robust unions/subtractions without internal overlap faces.

Mechanical checks calculate radial/vertical clearances, retaining shoulders, walls, import exclusion and socket floors; each full case checks **41 puck positions** for intersections with the tray and lid. The only fixed-body overlap permitted is calculated peg/socket interference. This validates digital geometry, not friction, roughness, wear or printed retention.

`node browser-test.cjs` and `node extra-browser.cjs` exercise real PNG, JPEG, ASCII STL and binary STL pickers, transforms and changed-image settings affecting actual exports, empty/malformed/unsupported inputs, invalid dimensions/transforms, replace/remove/reset, previews matching STL hashes and bounds, presets, variations, undo/redo, portable saves and ZIP/individual exports. Phone tests include 320/390 px layouts, real CDP touch orbit/pinch and downloads. `production-test.cjs` exercises the built bundled WASM worker and a 1001×701 synthetic source round trip. JSON reports and screenshots record executed results; no user upload is committed.

**No physical print has been performed.** Lid friction retention, smooth travel, subjective feel and material behaviour require a printed trial. Neither mesh watertightness nor sampled clearance checks prove real-world print success.

Dependencies: bundled React, React DOM, Three.js/OrbitControls, Manifold WASM, fflate ZIP. Vite/React plugin, Playwright for validation, gh-pages for deployment. No CDN imports, paid service, API key, cloud upload or external generation API. Mesh complexity and image resolution are bounded; solid generation and STL preflight run off the UI thread.
