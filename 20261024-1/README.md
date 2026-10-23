# Facet Drift

A local React + Vite studio for a **triangulated twist-compression fidget sleeve**. Twelve raised triangular faces share a continuous hollow hexagonal TPU membrane. Hold the stationary palm landing, gently shorten and turn the upper rim, then guide it back. Kresling-inspired, but not a rigid-origami solver, bistable latch, or promised snap/automatic return. Unlike an axial concertina, planar map-fold or separate helical struts, the interaction uses a closed continuous diagonal-facet shell.

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261024-1/`. Per-app deploy scripts are present; public publication uses the **root monorepo** predeploy/deploy flow. React, Three.js and Manifold WASM are bundled locally; no API, key, paid service or CDN. Bounded generation and STL parsing run in a Web Worker.

Preview and binary STL export use exactly the same final vertex/index arrays. X/Y/Z are millimeters. One connected part: object preview and printable layout show the same undeformed body; there is no fake motion simulation. Complete-body and individual-body export are equivalent. A ZIP would duplicate this sole required part, so none is offered. Preview colours are not included in STL; STL carries no unit metadata.

## Studio direction

https://vaseverse.org/ was consulted for its editor-first composition and warm studio language: a dominant canvas, compact grouped rail, ivory/clay surfaces, useful presets and persistent export. The name, geometry, text and synthetic samples are original. No branding, assets or source copied. On phones controls collapse and export remains fixed and touch-accessible.

## Parameters, geometry and presets

All length values below are **mm**:

| Control | Range | Effect |
|---|---|---|
| Sleeve corner radius | 14–18 | Hexagon circumradius, ergonomic size |
| Flexible sleeve height | 24–32 | Axial shell height |
| Radial membrane thickness | 1.8–2.2 | Inner polygon radial inset; actual normal wall is smaller |
| Top tangential offset | 5–8 | Top twist in radians = offset / radius |
| Raised facet relief | 0.6–1 | Additional normal height of each triangular reinforcement |
| Palm dimple depth | 0–0.6 | Real subtracted dimples on the stationary grip |

A manifold shell is built from six lower and six rotated upper vertices, corresponding inner rings, triangulated walls and capped annular ends. Twelve inset triangular prisms overlap by 0.08 mm and are solid-unioned to reinforce the faces while leaving diagonal bending corridors. Each face is shrunk to 74% about its centroid before reinforcement. A 3.25 mm closed bottom and an upper annular collar anchor the membrane; the top remains open. All operations use real Manifold CSG, not overlapping visual shells. Runtime final-mesh preflight blocks invalid exports.

The base radius is sleeve radius + 0.7, its center is Y = 34 + radius, and the separate palm landing is centered at the origin with radius 12 and thickness 4. A solid neck connects them. Export bounds are independently checked: X = 2(radius + 0.7), Y = 46 + 2radius + 0.7, Z = height + 3.3. Imports do not change these outer bounds.

Gentle Turn is the shorter, lighter calibration design; Palm Helix is the intermediate design; Tall Spiral is taller, larger, thicker and more twisted. Actual generated model thumbnails, not decorative icons. Variations remain within supported mechanical ranges. The range was narrowed after validation exposed an excessively thin membrane at greater twist.

## Image import: actual height-field geometry

PNG and JPEG via picker, drag/drop or four synthetic sample buttons. Limits: **2 MB, 12 MP, 6,000 px per side**, validated headers before decoding. Local normalization to at most 500 px on the longest side; sampling to a fixed **20 × 20 luminance grid**, alpha composited on white. Fit/contain or cover/crop and ±25% shifts choose the sampled region. Threshold 1–254 raises dark samples, or grayscale maps darkness continuously to height. Depth 0.4–3 mm. This is **2D-to-relief conversion, not full 3D reconstruction from a photo**.

The grid becomes a closed triangulated height-field slab on a continuous 0.4 mm backing, with closed sidewalls and bottom. Threshold transitions interpolate across sample triangles; this is not a vector tracing tool. The backing is embedded 0.15 mm into the palm's 3.2 mm recessed floor and solid-unioned. Empty silhouettes/relief are rejected. Source and converted image previews remain visible beside the final model.

## STL import: deliberate verified subset

Accepts ASCII and binary `.stl`, **2 MB, 1,500 triangles**, each source dimension **0.2–250 mm**. Explicit source-mm confirmation is required because STL has no units. A source mesh preview and original dimensions are shown. Only a **single convex, closed, connected, outward-wound, non-self-intersecting, broad-flat-bottom solid** is supported. Bottom XY hull must cover ≥25% of its bounding rectangle and contain every vertex projection. Concavity, cavities, branches, unsupported overhangs, open edges, nonmanifold edges, inconsistent winding and degeneracy are rejected with actionable errors. No arbitrary repair is claimed.

XY is proportionally fitted to a **4–7 mm** footprint; Z independently fitted to **0.6–5 mm** height. Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Arbitrary tilt is intentionally unsupported: orient a broad bottom down in source Z before import. Fitted minimum XY span 1.2 mm; all transformed vertices must stay inside a **6.5 mm palm safe radius**. The mesh is embedded in the recessed palm floor and CSG-unioned; final integration must be one connected valid solid. Sources cannot reach or obstruct the sleeve. Accepted files visibly and measurably alter export geometry, rather than simply being displayed or re-exported unchanged.

Replace, remove, center/reset, image reset and full defaults are available. Removing an import restores the built-in raised oval. Invalid import/export states recover without reload.

## Privacy and portable saves

All file processing stays in the browser/canvas/worker. No user uploads or remote services. Only original synthetic PNG/JPEG, ASCII wedge and binary gem fixtures are bundled (no third-party attribution required); no personal inputs saved in the repository. Save JSON embeds bounded source mesh data or the normalized image data URL. Reopening revalidates it; a missing image payload requires reattachment instead of pretending to restore it. Undo/redo captures modeling and import changes. Source type, sampling, transforms and settings round-trip locally.

## Printing, mechanism limitations and calibration

**TPU 95A only**; brittle PLA/PETG are not substitutes for the membrane. Base Z=0 down, shell upright, 0.4 mm nozzle, 0.15–0.2 mm layers, solid membranes and at least three perimeter lines. No hardware, assembly, fit release or mating-clearance control applies to this continuous body. No supports are designed into the open shell; inspect upper collar bridging and the ≤1 mm facet edges in your slicer. Material-specific support needs remain printer-dependent. Never use spiral-vase mode: that would remove the intended geometry.

Print Gentle Turn first as a full-size material/extrusion calibration. Inspect all thin corridors for continuous extrusion and layer adhesion. Begin at **0.5 mm axial shortening and about 2° gentle turn**, then guide it back. Do not collapse closed, forcibly twist or pull apart. Stop at whitening, cracking, layer separation, permanent set or poor return. There is no hard travel stop, universal force, fatigue rating or guaranteed restoring behavior.

Tests independently parse exported binary STL: finite coordinates, normals, nondegenerate triangles, consistent outward winding, positive component volume, millimeter bounds, and welded undirected edge incidence exactly two with opposite direction. Manifold CSG and component checks reject invalid integration. Mechanical checks cover analytic bounds, conservative projected wall thickness (>0.7 mm throughout supported bounds), material probes in all twelve membrane faces/reinforcements, open-lumen probes, and exact CSG import isolation. Nine sampled affine deformation states (0/0.5/1 mm shortening × −3/0/+3° turn) check simple nested shell cross-sections and a conservative lumen bound. This is **not a compatible rigid-fold solution, full nonlinear deformation simulation, FEA or safe-travel/force certification**. The UI intentionally shows only the undeformed printable geometry.

**No physical print, squeeze, return-force or fatigue test has been performed.** See VALIDATION.md and generated JSON reports for observed software checks.
