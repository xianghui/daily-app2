# Return Spool

A local React + Vite parametric **fixed-axle yo-yo fidget studio**. Wind a cord around an integral axle and gently pay it out and rewind with an assisted hand lift. This is a cord-friction interaction, not a bearing spinner, compression spring or simulated browser toy. Automatic return, balance and friction have not been physically tested. A cord-free alternative is to pinch the outer faces and roll the spool between fingertips.

## Run and publish

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Base: `/daily-app2/20261023-7/`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. The public site uses root monorepo predeploy/deploy instead. React, Three.js/OrbitControls and Manifold WASM are local bundled dependencies. Playwright is a development dependency. No remote APIs, CDN, server modeling, account or API key.

## Studio and model

Ivory/clay model-first canvas with orbit, touch/pinch, zoom, fit/reset, real geometry preset thumbnails, millimeter dimensions, part selection, preview-only palette and persistent export. Right-hand desktop controls become tabbed, collapsible phone controls. Undo/redo retains 35 debounced modeling states. Save/Open JSON includes a bounded normalized image or validated mesh payload; missing payloads are explicitly rejected with reattachment guidance. A worker handles validation, CSG and modeling.

Presets: **Whisper** is a compact narrow-channel spool, **Palm** a balanced middle size, **Firm** a large-rim thick-axle spool. Names are labels, not measured performance. All are real proportion changes. Variations remain inside the validated envelope.

| Parameter | Millimeter range |
|---|---|
| Flange diameter | 40–56 |
| Cord channel width | 3–5 |
| Integral fixed axle diameter | 6–10 |
| Flange thickness | 3–5 |
| Outer rim taper | 0.8–2 |
| External dimple depth | 0–0.6 |

Two 128-segment conical rim flanges are robustly solid-unioned to a full-height 96-segment axle. No overlapping visual shells are represented as a union. The outer-face 0.8 mm-deep central well leaves at least 2.2 mm floor; dimples are outside the well. The lower face is bed-flat. Export height without customization is `2 × flange thickness + channel width`; external grip extends above the recessed face. The UI calculates actual final X/Y/Z bounds, including imports.

## Image conversion

Real PNG/JPEG picker and drag/drop. Files: 16 bytes–2 MB, ≤12 MP, ≤6000 px per side, verified from headers before decode. Normalize to ≤500 px per side for portable saves. Transparency composites onto white. Contain/cover crop and ±25% XY crop shifts feed a **20 × 20 luminance grid**, `0.2126R + 0.7152G + 0.0722B`.

Threshold height is depth when luminance is below threshold (1–254), otherwise zero. Grayscale height is `depth × (1 − luminance / 255)`. Depth 0.4–3 mm. A continuous 0.4 mm backing closes the triangulated grid; edges between sampled heights are ramps, not vector traces. Backing penetrates the external well floor by 0.15 mm before a real union. Empty relief is rejected. Source and exact sampled-grid previews accompany the final mesh.

This is **2D-to-relief / raised silhouette conversion, not full 3D reconstruction from a photo**. Source pixels, threshold, depth, crop, scale and placement all affect exported geometry.

## STL integration

ASCII and binary `.stl`, ≤2 MB / 1500 triangles. One connected, closed, outward-wound, positive-volume solid; each axis 0.2–250 mm. Finite bounded coordinates, nondegenerate faces and two oppositely oriented incident faces per welded edge (1e-5 mm tolerance) are required. The parser also checks self-intersections. No repair is claimed.

Supported contract: **convex flat-bottom grips** whose full XY projection lies inside a broad base (at least 25% footprint contact). Concave, hollow, tilted, overhanging, disconnected, open or nonmanifold meshes are unsupported. Orient/simplify/remodel in a mesh editor and re-export if rejected. These restrictions protect real solid integration and printability rather than accepting arbitrary meshes.

Source dimensions are shown. **STL has no unit metadata**: explicit millimeter confirmation gates integration/export. XY scales proportionally to a 4–7 mm footprint; Z independently scales to 0.6–5 mm. Minimum fitted XY span 1.2 mm. Z rotation ±180°, X shift ±1.5 mm, Y shift ±2 mm. Center/reset, replace/remove and return to built-in grip are available. Every vertex must stay inside a 6.5 mm radius safe zone on the external face; source never bridges or enters the cord channel. A real Manifold union produces one connected solid, not an unchanged source re-export. Keep imports centered/shallow to reduce imbalance; balance is not guaranteed.

## Privacy and fixtures

All processing occurs locally in browser memory. User files are never uploaded, sent to services or put in this repository. Save JSON explicitly downloads bounded source data. Bundled `mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic project fixtures, documented in `public/samples/README.txt`; sample buttons and download links exercise both workflows without private uploads.

## STL and validation

One primary Download STL action produces binary geometry-only STL with source/dimension filename. Palette colors do not become STL colors. Preview and export share exactly the final worker mesh. Object/print layout differ only by XY translation. There is one connected printed part: no required multi-part ZIP or printed assembly. A named-part option exports the same single solid at its model origin.

Every edit is gated on current state, unit confirmation, import status and mesh checks: finite vertices, nonzero nondegenerate triangles, positive enclosed volume, closed welded edges, opposite neighboring winding, connected topology. Failed edits disable export and leave recovery controls usable.

`npm test`: defaults, all presets, min/max, 64 envelope corners and eight deterministic variations; PNG-derived threshold/grayscale and both STL formats across representative cases. Reparses actual binary exports for normals, triangles, bounds, per-component winding/volume and closed manifold incidence. Mechanism checks verify doubled 1 mm cord has ≥1 mm free channel space, ≥15 mm radial winding depth, ≥2.2 mm external well floor, solid axle/flange engagement and import floor strictly above the channel. These are geometry checks, not proof of cord behavior.

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` use local Vite port 5270. They exercise PNG/JPEG/ASCII/binary picker imports, actual STL downloads and geometry comparisons, content/threshold/depth/transform effects, replace/remove/reset, malformed/truncated/oversized/open/nonmanifold/unsupported input, empty silhouettes, bad dimensions/transforms, every preset, variations, save/open including source payloads, undo/redo, drag/drop, exact preview-export signatures, palette neutrality, phone touch orbit/pinch and 320/390 px export access. JSON reports and screenshots record observed digital checks only. `TEST_BASE` supports production retesting.

## Print, cord and calibration

**Supports required** beneath the upper flange. Put lower outer face on bed. Use 0.4 mm nozzle, four walls, 0.16–0.2 mm layers, PLA/PETG. Inspect the slicer: supports must be removable through the open circumferential channel. Interface scars affect cord friction. If supports cannot be removed cleanly on your setup, do not use the spool; change slicer/support strategy first. Print Whisper as a full-size support/friction trial. Remove all supports, deburr/smooth axle, inspect flange roots.

Required nonprinted item: **one 350–500 mm soft 0.8–1.0 mm braided cotton yo-yo cord**, doubled into an axle loop with a secure finger loop at its other end. No bearings, magnets, fasteners or compliant features. Place the loose folded loop around the integral axle and wind neatly. Start at 50 mm payout over a soft surface, with a small lift to assist rewind. Adjust cord twist/loop friction: excessive friction blocks payout, insufficient friction blocks pickup. There is no universal fit or automatic-return claim. Stop on snagging, cracks or damaged cord. Do not throw/swing; cord is an entanglement risk around children/pets. Cord-free rolling needs no hardware.

No physical print, friction, spin-balance, return, durability or comfort test has been performed. Watertight geometry does not establish reliable yo-yo performance for every printer/material/cord.

Original UX follows the requested model-first warm studio direction, informed by https://vaseverse.org/. No reference branding, source code, assets or copy was used. Shared local import/editor infrastructure is adapted from earlier studios; this app implements a distinct fixed-axle cord mechanism.
