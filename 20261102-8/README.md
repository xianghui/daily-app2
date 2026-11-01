# Flag & Signal

A React/Vite browser maker studio for a **six-part semaphore kit card**: socketed mast, two independently rotating flags, headed axle, keeper and personalized base. The carrier holds all six pieces with 24 real removable runners. This is a new assembly and interaction, not a previous generator with recoloured parts. Compatible adhesive is required at four fixed sites. No metal hardware is needed. **No physical print, fit, friction, strength or assembly test has been performed.**

## Reference-first reconstruction

Local references inspected first: `keycap_generator2/README.md` and its actual clicker template; `fidget_fabric_generator/README.md` and actual diamond link. The switch's three components and the 8 mm link were unsuitable sheet references. Fresh parsing/hashes and rejection reasons appear in `reference-measurements.json`.

Selected public reference: **White Cat Kit Card / Printables 865769**, **Mike Kasberg**, https://github.com/mkasberg/white-cat-kit-card , **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . Source README and LICENSE fetched and inspected. Full licence is in REFERENCE-LICENSE.txt. Downloaded and parsed binary STL, SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

Measured envelope 179.820 × 178.020 × 3.190 mm, 30,616 triangles, 27 edge-adjacent components; original contains defects and is not globally watertight. Units assumed millimeters, corroborated by source sheet dimensions; STL has no units. Actual sections at Z 0.10, 0.50 and 1.59 mm were plotted and visually inspected: `evidence/reference-sections.png`. Measured main sheet 0–1.60 mm, four 4.50 × 1.700012 mm socket loops and low webs at 0.21–0.22 mm. Reproduce using `reference-measure.py /path/to/downloaded.stl` in Python with trimesh, numpy, matplotlib and scipy. Raw third-party STL is **not bundled** or automatically repaired.

Preserved source principles: 1.60 mm default sheet, 4.50 mm socket length, tongue/socket interfaces and an actually connected low-web carrier. Original reconstruction changes the spacecraft into a mast with two moving flags, circular bearings around a rectangular printed shaft, external head and glued keeper; new 3×2 carrier packing. Proposed fit 0.10–0.30 mm TOTAL, radial/axial gaps 0.25–0.45 mm and runner height 0.4–0.6 mm are new printer-dependent choices, not source measurements or universal fits. `reference-analysis.json` maps each measurement to actual generator parameters.

Read-only primary visual/interaction reference: keycap_generator2 README.md, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns: 374 px scrolling left editor, compact sticky header, collapsible sections, raised/pressed tactile controls, paired range/numeric fields, checkerboard image cutout, source mesh editor, saved dark/light theme, worker builds and exact-current-result export gating. Phones stack preview, dimensions and exports before controls. Locally bundled Fredoka/Rubik. Existing Daily Object Lab editor/import/serializer/test infrastructure was adapted, not its old mechanism. New semaphore geometry, poses, carrier, full-turn sweep, insertion and retention checks are original to this run. Reference trees remain unchanged; no history/dependency-tree copying.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production path `/daily-app2/20261102-8/`. Per-app `predeploy` is `npm run build`, `deploy` is `gh-pages -d dist`; whole-monorepo publication uses the root deploy/ flow. Generation is local in a Web Worker with bundled Manifold WASM, bounded resolution and 100 ms debounce. Request IDs/state keys reject stale results. Invalid, pending, failed or unsupported input blocks all STL/ZIP exports, even when a previous valid mesh remains visible. Preview and export share the same final meshes, with a visible machine-readable signature verified against real downloads.

Views: assembled, exploded, connected card, clean print plate and every isolated part. Preview front/rear angles demonstrate independent movement but do not change printable geometry. Exploded placements are illustrative. Downloads: binary STL per part, actual connected card, loose plate and Everything ZIP containing seven STLs plus numbered assembly guide. STL stores no colour; no 3MF is claimed. Native phone/desktop pickers, drag/drop, replace/remove/reset, three actual mesh-thumbnail presets, bounded variations, undo/redo, six named local designs and portable JSON are included. JSON carries bounded imported assets; missing image payload requests reattachment.

## Parameters and mechanism

All lengths in **mm**, pose angles in degrees (preview only).

| Parameter | Supported range |
|---|---|
| Card width / height | 220–250 / 170–210 |
| Arm reach / mast height | 32–44 / 62–72 |
| Sheet / total socket allowance | 1.6–2.4 / 0.10–0.30 |
| Radial and axial running gaps | 0.25–0.45 |
| Part spacing | 3–5 |
| Runner width / height | 0.8–1.4 / 0.4–0.6 |
| Import footprint / engraving depth | 4–7 / 0.4–0.6 |
| Artwork rotation / X / Y | ±180° / ±1.5 / ±2 |

Impossible packing combinations block export, never clip parts. Minimum card width 220 mm requires an appropriate bed plus brim/edge margin; export individual parts on smaller beds.

Mast feet and shaft have cross-section `(4.50−fit) × sheet`; rectangular seats are `4.50 × (sheet+fit)`. Two mast shoulders seat on the deck with tongue tips flush beneath. Pivot is `sheet+mastHeight−10` above the bed. Bearing radius = half rectangular shaft diagonal + radial gap, so no corner of the shaft contacts a rotating arm. Front and rear flags occupy separated planes, each with an axial gap from mast and stop. Shaft length = `4sheet+4gap`. Printed head and adhesive-fixed keeper overlap the circular bearings and obstruct withdrawal. Keeper outer face is flush to shaft tip to set axial gaps. It is **not** a snap/friction-retained keeper; compatible adhesive is essential at keeper/shaft and shaft/mast, plus both feet. Do not glue moving bores. Geometry is checked through 25 positions over a full turn, plus mast/axle/keeper insertion paths; this does not predict torque, fatigue or physical printer fit. No detent, spring, official signaling accuracy or loaded-use claim.

## Local import workflows

Synthetic CC0 PNG, JPEG, SVG, ASCII STL and binary STL fixtures are in public/samples. Choose sample buttons or select the files. Only synthetic sample data is committed; no personal inputs or private raw reference meshes.

**PNG/JPEG:** verify signatures, matching file extension and dimensions before decoding; 16 bytes–2 MB, ≤12 MP and ≤6000 px per side. Normalize to ≤500 px, composite alpha against selected light/dark background, contain/cover and crop shifts ±25%, then sample luminance to a 20×20 grid. Threshold 1–254 or grayscale generates a triangulated closed height surface Boolean-subtracted into the base. Depth 0.4–0.6 mm retains ≥1 mm backing. Checkerboard shows actual sampled cutout. Bright holes remain uncut. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo** or exact vector tracing. Empty silhouettes fail recoverably.

**Simple SVG:** ≤2 MB, ≤2000 basic shapes, ≤6000 px per side; reject scripts, effects, external resources and references. Rasterize locally to 256 px and use the same conversion. Text (8 characters) and six searchable bundled icons use this same real geometry workflow. Only engraving is supported to preserve bed-flat sheets and backing.

**ASCII/binary STL:** complete content, finite vertices, dimensions, winding, component count and edge topology checked. ≤2 MB, ≤1500 triangles, 0.2–250 mm on each source axis. Explicitly confirm millimeters: STL has no unit metadata. Select Z/Y/−Z before attachment (changing axis clears source and requests reattachment), see source 3D/dimensions, scale XY proportionally to footprint and Z independently to depth, rotate/center/place/reset. Exact source mesh is Boolean-cut into protected base art zone at (0,−12), radius 6.5 mm, away from all joints. Concavities are **not** replaced with a hull: this deliberately bounded importer only accepts one closed outward connected convex broad-flat-bottom solid. Open/nonmanifold, inward, disconnected, concave/cavity, self-touching/intersecting, slender/overhanging or insufficiently bed-supported input is rejected explicitly with guidance; no automatic repair claim. The parser's bottom hull is a validation boundary only, never exported replacement geometry.

All file processing/generation/export happens in the browser. No remote API, CDN dependency, upload, API key or paid service. Preview and final output show the same actual Boolean changes. Asset restoration is bounded and validated.

## Printing and validation

PLA/PETG, 0.16–0.20 mm layers, 0.4 mm nozzle, three perimeters, 100% scale. Print flat; no supports intended. Snip 24 tabs 1.6 mm outside contours and clean nubs. Calibrate keeper/axle and mast/base before committing a card. Assemble and glue fixed joints only; head and keeper hold arms after adhesive cures. Follow ASSEMBLY.txt / in-app numbered guide. This is a miniature desktop maker kit with small cut parts, not a child-safety product or load-bearing mechanism.

Independent binary-STL validation uses 1e−5 mm vertex welding: exact byte count, finite coordinates, nondegenerate triangles, stored normals matching outward winding, two opposite incident faces per undirected edge, positive volume per component, expected mm bounds and Z=0. Checks apply to connected card, six individual parts and translated loose plate, including image/STL outputs and representative parameter extrema. CSG checks cover card envelope, all parts present, nonintersecting print packing, 24 safe snips releasing six parts plus carrier, bed-footprint support, mast shoulders, foot presence, full axle/keeper insertion and full-turn independent flag clearances/head/keeper stops. Actual browser imports/downloads and UI checks have executable scripts/reports in this folder. See VALIDATION.md for results and limitations. **Computational mesh and assembly tests are not physical printing or motion tests.**

Dependencies: React/Vite, Three.js/OrbitControls, Manifold3D (Apache 2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), Playwright (development). Fonts and WASM bundled locally. No source project dependencies/history were copied wholesale.
