# Afterglide — compound swing studio

A browser-only React + Vite parametric STL generator for a hardware-free **serial double pendulum fidget**. Two free revolute joints carry a weighted outer link: hold the palm handle upright, hinge axes horizontal, and gently nudge for compound gravity swings. Unlike the existing single pendulum, four-bars and compliant whippletree, the two joint angles are independent; no spring or synchronized loop constrains them. Physical dynamics are not simulated or guaranteed.

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

Primary Download STL exports a binary STL with **five closed solids spaced 6 mm apart on Z=0**, never overlapping assembled parts. Select individual parts or download the ZIP with five binary STLs and assembly notes. Preview and export consume identical worker-produced indexed meshes. The assembled display only applies rigid joint poses; the live millimeter dimensions always describe the selected printable export. Preview colours do not exist in STL.

Local-only dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM for solid CSG, fflate for ZIP; Playwright for verification. No CDN, server, account, paid service or API key is needed for modeling. Assets and WASM are bundled. Vite base: `/daily-app2/20261024-7/`. Individual `predeploy` and `deploy` are provided; the combined public site must be deployed from the parent monorepo's root `deploy/` folder.

## Controls and millimeter ranges

| Parameter | Supported range |
|---|---|
| First pivot span | 22–30 mm |
| Second pivot span | 24–36 mm |
| Weighted end radius | 7–10 mm |
| Bearing rim radius | 5–6 mm |
| Palm floor thickness | 3–5 mm |
| Palm dimple depth | 0–0.6 mm |
| Radial and axial running clearance | 0.20–0.50 mm, start 0.30 mm |
| Static cap socket radius allowance | −0.08–+0.08 mm |

Rigid links are 3 mm thick; journals radius 2 mm, tips radius 1.3 mm with 1.8 mm engagement. Caps radius 3.3 mm, 3 mm high, with 1.95 mm-deep blind sockets and 1.05 mm roofs. Positive socket allowance loosens the **static** cap fit; it does not change moving bores. Minimum radial bearing wall is 2.5 mm and cap overlap is 0.8 mm at maximum running clearance. The second link sits one running clearance above the first retaining cap, allowing folded poses. Three real model-thumbnail presets vary lengths, bearing widths and end mass radius. Variations stay within these bounded ranges; impossible/nonfinite values disable export. Undo/redo and portable JSON save/open cover geometry, imports, settings and transforms.

## PNG and JPEG conversion

File picker works on phones/desktops; drag one file onto Import on supported desktops. Sample PNG, JPEG, ASCII STL and binary STL are available as buttons and download links. Fixtures are synthetic project assets, reused from this collection; no personal input is bundled.

Images: actual PNG/JPEG content only, 2 MiB file limit, at most 12 megapixels, 6,000 pixels per side. Header dimensions are checked before decoding. Input is normalized to at most 500 pixels per side and sampled on a bounded **20×20 grid**. Alpha composites onto white. Fit entire image or crop to fill; X/Y crop shifts ±25%.

Weighted grayscale uses 0.2126R + 0.7152G + 0.0722B. Threshold mode raises vertices darker than the 1–254 threshold; relief mode maps height to `depth × (1 − gray/255)`. Depth 0.4–3 mm. The grid is linearly triangulated, bounded by a closed skirt and a flat underside; a continuous 0.4 mm backing supports the relief. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photograph**. The solid backing penetrates the recessed palm floor by 0.15 mm and is robustly unioned with the handle, not exported as interpenetrating shells. Empty silhouettes/reliefs are rejected. Source preview and the exact 20×20 conversion image are shown next to the final 3D preview.

## ASCII and binary STL workflow

2 MiB maximum, 1–1,500 triangles, each bounding dimension 0.2–250 mm. **STL has no unit metadata**: dimensions are displayed and explicit millimeter confirmation is required before integration/export. Units are not guessed.

A conservative, explicit supported subset is accepted: **one convex, outward-wound, closed solid with a broad flat Z-min bottom, no XY overhang beyond its bottom footprint**. A tetrahedral wedge or low-poly flat-bottom gem works. Concave models, hollow shells, open meshes, nonmanifold edges, disconnected solids, inverted winding, degenerate triangles, excessive coordinates, self-intersections, insufficient bed contact and unsupported overhangs are rejected with actionable errors. No repair is claimed or performed. Use a mesh editor to simplify/orient a suitable solid first.

STL source is shown in a separate orbitable preview. XY scales proportionally to a 4–7 mm grip footprint; Z independently scales to 0.6–5 mm. Rotate about Z ±180°; X placement ±1.5 mm, Y ±2 mm. Center/reset transforms and replace/remove are provided. Tilt is intentionally unsupported because the verified broad flat base must remain downward. A minimum fitted XY span of 1.2 mm is enforced.

Image or STL geometry replaces the built-in raised oval inside a 6.5 mm-radius recessed landing centered on the stationary handle. Every transformed vertex must stay inside this region, otherwise export is blocked. The new grip is CSG-unioned with the handle; exactly one connected handle is required. The tallest supported import stays at least 1.15 mm below the first moving layer. No personal input leaves the browser. Files are not uploaded or automatically persisted; explicit Save JSON includes the bounded normalized image payload and conversion settings, or verified mesh coordinates. Open validates the payload; missing images require reattachment rather than pretending restoration. History holds a bounded 35 snapshots.

## Printing and assembly

1. **First calibrate a full-size joint** by printing palm-handle, first-link and root-cap. A fixed “universal tolerance” is not claimed. PLA/PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Print bed-flat as exported, posts up and cap sockets down. Inspect cap-roof bridges (2.6 mm nominal span). Designed parts and accepted imported grip shapes require no supports.
2. Clean elephant foot and bores. Place first-link on the fixed spindle; seat root-cap on its narrow tip, fully to the shaft shoulder. Check free rotation and axial play; do not clamp the arm.
3. Place weighted-link on the distal spindle of first-link; seat joint-cap fully on its tip. Both sockets are identical. Caps must remain attached during gentle movement.
4. Hold the palm grip in a vertical plane with horizontal hinge axes. Nudge gently for a compound swing. Do not whip or fling. Sliders pose both independent angles; they are **not a physical simulation**.
5. Binding: increase running clearance; loose caps: reduce socket allowance and reprint. Never glue moving holes. Lift caps evenly to disassemble. No hardware, magnets, bearings, springs or support-removal assembly is needed. Small removable parts: not a child's toy.

There are no compliant hinges, so no TPU fatigue/thickness promise is applicable. Force, friction, wear, strength, settling behavior and retention pull-off force depend on material and printer. **No physical print or physical mechanism test was performed.**

## Digital validation

Every edit runs bounded worker generation and final independent triangle preflight: finite coordinates, nonzero faces, positive volume, consistently oriented two-face welded edge incidence, and one connected solid per intended part. Manifold CSG produces unions/subtractions; unsupported imports are not silently repaired. Safe-region limits and analytical journal/retention/axial-gap checks run on every model.

`npm test` independently parses binary exports, checks actual mm envelopes, finite normalized normals, nondegenerate faces, oriented edge incidence and component volumes, five disconnected solids and two bearing-hole handles, individual parts, minimum/maximum/all parameter corners, presets and representative variations. Image-derived and STL-derived models receive the same checks. Solid intersection tests sample 49 independent angle pairs (490 component pairs) for representative models, imported outputs and print layouts, allowing only bounded intentional static tip/socket interference. Import isolation is checked by solid differences outside the safe cylinder. Analytical Z-layer separation extends the collision argument beyond sampled poses. No watertightness check alone is presented as proof of a physical fidget.

Browser tests use actual PNG/JPEG and ASCII/binary STL file inputs and download actual STL: compare pixels/threshold/depth/scale/placement against no-import exports, validate source replacements/removal/reset, malformed/oversized/nonmanifold data, empty silhouettes, bad transforms, all presets, variations, undo/redo, portable JSON round trips, individual and ZIP exports, joint preview poses, and geometry-neutral preview colours. Desktop and 320/390 px phone checks cover tabs, collapsing controls, fixed export, touch orbit/pinch, and no remote input-file requests. See generated validation JSON and screenshots for observed results. These are digital checks, not physical printing.

Visual direction references the model-first, warm studio composition of https://vaseverse.org/ only. This original fidget editor copies no reference branding, text, assets or source code. The archived daily_app tree is read-only and is not deployed by this project.
