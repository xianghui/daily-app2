# Inversion Glide

A local React + Vite maker studio for a **Peaucellier straight-line fidget**. Hand-sweep the input crank between printed ±35° shoulders: a folding rhombus and two equal radius rods constrain its opposite joint to a straight stroke. This is geometric inversion, not a slider, four-bar gait, or a rotating decoration. Fourteen separately printable parts, seven moving links and six removable printed caps; no hardware or spring. Reverse by hand.

## Studio

Reference-inspired 374 px left editor / large right preview, phone preview-first stacking, local Fredoka/Rubik fonts, saved light/dark theme, tactile buttons, collapsible sections, paired mm inputs, three generated model-thumbnail presets, bounded variation, undo/redo, six named local designs and portable JSON. Built-in round/hex/oval palms, dimple grip, text and six searchable original marks. Assembled, exploded, print plate, palm, moving links and isolated-link views; see-through base, touch orbit/pinch, zoom and fit. Preview phase is ideal kinematic positioning, not force simulation, and does not alter print files. STL has neither unit nor colour metadata.

## Local image workflow

File picker/drop PNG, JPEG or simple self-contained SVG. Actual format headers checked before decoding: 2 MB, 12 MP, maximum 6,000 px/side. Images normalize to maximum 500 px; SVG is restricted to 2,000 simple shapes, rejects scripts/resources/effects and rasterizes locally to 256 px. Synthetic samples are bundled under `public/samples` (original CC0, no personal uploads).

Fit/cover, ±25% crop offsets and light/dark background selection feed a **20 × 20 luminance height grid**. Threshold 1–254 creates two-level silhouette relief; grayscale converts brightness to height. A triangulated height field with closed sides/backing is solid-unioned into the recessed stationary palm (or subtracted for engraving). White holes remain unraised/unengraved, not through-holes in the solid backing. The checkerboard shows the actual sampled foreground. This is **2D-to-relief conversion, not full 3D reconstruction from one photograph**, and is not smooth outline tracing. Transparent art composites against the selected background. Depth 0.4–3 mm raised; engraving 0.4–0.6 mm preserves at least 3.6 mm floor. Text, icon and SVG use this same geometry pipeline.

## Local STL workflow

ASCII/binary STL ≤2 MB and 1,500 triangles; every axis 0.2–250 mm. Source preview/dimensions, Z/Y/−Z up-axis selection before attachment and explicit millimeter confirmation (STL has no units). Source XY fits proportionally into 4–7 mm footprint; Z fits independently into 0.6–5 mm height. Rotation ±180°, X ±1.5 mm, Y ±2 mm, center/reset, replace/remove. Transformed vertices must remain within a 6.5 mm radius isolated palm safe zone. Invalid transforms block export.

The actual original mesh is integrated with Manifold CSG—not a hull substitute or interpenetrating shells. Intentionally restricted contract: one closed, outward-wound, non-self-intersecting **convex flat-bottom support-free grip**, with bottom contact at least 25% of its XY bounding area and every XY projection inside its bottom footprint. Concavities, cavities, branches, disconnected/open/nonmanifold meshes, overhangs and excessive inputs are explicitly rejected, not repaired or discarded. Reorient/decimate/repair externally as instructed, then reattach. Input parser weld tolerance is 0.00001 mm; triangle intersections, connectivity, winding and positive volume are checked. Source and final model previews are separate.

## Parameters (all physical dimensions mm)

| Parameter | Supported range |
|---|---|
| Palm diameter | 22–28 |
| Input crank radius d | 14–16 |
| Link width | 8–9 |
| Link thickness | 3–4 |
| Axial clearance | 0.3–0.6 |
| Radial running clearance | 0.25–0.45 |
| Cap radial fit | −0.06 to +0.06 |
| Dimple depth | 0–0.6 |

Long rods L=2.1d; rhombus edges l=1.5d; ground OC=d. OA×OB=L²−l². Output B has constant X=(L²−l²)/(2d); ±35° produces about 9.5–10.9 mm travel. Link layers prevent crossings, but make this intentionally tall. Separate running and cap fits are printer/material-dependent starting values, not universal tolerances. Gentle Start is the full-size calibration set. Positive cap fit is calibration only and can be loose. Every edit validates finite ranges, minimum bore walls, closure, safe zone, connected solids, manifold incidence, winding and positive volume, including float32-translated print plate geometry.

## Export, persistence and privacy

Binary STL for every part, one separated bed-flat plate STL, and a genuine ZIP containing fourteen individual STLs plus assembly notes. Per-part buttons and dimensions are explicit. No 3MF claim. Worker owns locally bundled Manifold WASM, debounced build IDs reject stale results and exports require the exact current valid state. Invalid files/edits disable all mesh exports; any remaining preview is labeled last-good. Preview and STL share the same final meshes; browser tests compare byte fingerprints and regenerate the saved JSON state in Node.

All user files are processed locally without APIs, keys, CDNs or uploads. Portable JSON/local designs include bounded normalized image/mesh payloads; absent image payloads request reattachment. No personal files belong in this repository.

## Print and assembly

Print each exported part as supplied, broad side at Z=0, pins upward. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3–4 walls, ~30% infill. Slow tall pins, adequate cooling, optional brim; no supports intended. Deburr bores and test running/cap fits. Detailed `Print` panel and ZIP notes describe C/O/A/P/Q/B pin identities and ordered assembly. Input crank on C; upper/lower radius rods on O; two input diamond links on A/P/Q; upper output link on P and lower output link on Q/B. Six blind-socket caps seat to their 2.4 mm roofs with axial gaps, never clamping a moving link. Reverse that order for release. Never force a seized joint or a sector stop. Reprint loose/split caps or bending pins. Gentle fingertip use only; pinch gaps and small parts, not for children.

**No physical print, force, fatigue, friction, durability or retention test has been performed.** Computational closure and collision checks do not establish those properties.

## Run and reproduce validation

```sh
npm install
npm run dev
npm test
node stop-check.mjs
npm run predeploy
node serve-production.cjs # actual production base path on port 5355
# in another shell, from this folder:
node browser-test.cjs
node feature-test.cjs
node additional-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
```

Tests parse downloaded float32 STLs independently for exact length, finite normals/vertices, nondegenerate triangles, millimeter bounds, positive volume per component, welded closed edge incidence and opposite edge winding. Default/presets/corner parameters and image/STL outputs undergo all-pairs Manifold intersections at representative stroke positions, intended cap interference confinement, reverse assembly and separated print layouts. Dense stop tests verify unobstructed stroke, overtravel contact, exact link lengths and inversion at 721 phases/configuration. Browser coverage includes real PNG/JPEG/ASCII/binary file uploads and changed outputs, threshold/depth/placement, invalid/truncated/open/nonmanifold/concave inputs, empty art, unit gate, transforms/reset, all presets/marks, JSON/named restores, undo/redo, ZIP/per-part files, worker failure/staleness, themes, keyboard focus, desktop layout and 320/390 px phone orbit/pinch/import/download. Reports/screenshots are saved beside scripts; see `VALIDATION.md`.

## Dependencies

React/React DOM, Vite/react plugin, Three.js OrbitControls, Manifold-3D (Apache-2.0), fflate, locally bundled Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for tests. No reference-project dependencies or history were copied wholesale. Existing studio modules were adapted from this monorepo; new inversion geometry and mechanism tests are specific to this app. Reference project and archive were read-only.

Deploy path `/daily-app2/20261026-25/`. Per-app scripts retained, but public publication is via root monorepo `npm run predeploy` then `npm run deploy`.
