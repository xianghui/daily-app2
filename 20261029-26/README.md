# Tip & Cascade

A local React + Vite maker studio for a **ten-part domino runway kit card**. Snip forty real breakaway runners, join two keyed runway halves, then stand eight tiles at the marked stations and gently tip the first. This is a physical-print generator, not a browser game or dynamics simulator.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. The production base is `/daily-app2/20261029-26/`. `npm run deploy` is the required individual-app gh-pages script; the public monorepo is published using the parent repository's combined deployment, not this individual script.

Dependencies are locally bundled: React, Three.js / OrbitControls, Manifold WASM (solid booleans), fflate (ZIP), Fredoka and Rubik via Fontsource (SIL OFL). No CDN, API, API key or paid service. Playwright is used only for reproducible tests.

## Reference-first evidence and adaptation

Local candidates were discovered under `/Volumes/ExternalHD/3d_printing_apps/`; the keycap and fabric STL files were actually parsed, with hashes/dimensions in `evidence/local-candidate-analysis.json`. These are switch interfaces and a captive fabric link, not suitable bed-flat kit parts. Slider README/rail instructions were also inspected. Reference project trees remained read-only.

The selected public geometry reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source project](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The public STL was downloaded and parsed, not inferred from its listing image. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

- Measured source envelope: 179.820 × 178.020 × 3.190 mm; 30,616 triangles; 27 edge-connected components, including tiny defective fragments. The source is **not watertight**; we do not claim to repair or redistribute it.
- Units: STL has no unit metadata; millimeters are assumed and corroborated by the source's sheet/card construction. Actual source sections at Z=.10/.50/1.59 mm were inspected (`evidence/reference-sections.png`). They show flat sheet parts on a thin removable carrier.
- Measured sheet: 1.6 mm. Outer carrier ray width: 1.599999 mm. Low bridge planes: .21/.22 mm. Four actual section loops measure about 4.5 × 1.7 mm (`reference-analysis.json`). Source tenon interference was not inferred from those openings.
- Preserved: default 1.6 mm sheet, bed-flat parts, distinct functional interfaces and an accessible sacrificial carrier. Redesigned: two-plane runway key, all domino profiles, station pitch and assembly, 2.4 mm carrier rails and thicker .4–.6 mm runners for FDM handling. New tongue width 4.4 mm and .10–.35 mm total allowance are **proposed**, not a copied or physically tested source fit. The original cat/ship geometry is not reused.
- This is a documented original parametric reconstruction using the source's actual sheet/carrier construction; **no raw third-party mesh is bundled**, and no convex-hull substitution is used. Manifold unions/subtractions create the final connected card and decorated runway.

`reference-inspect.py` reproduces reference analysis with Python/trimesh/numpy/matplotlib/networkx; pass a separately downloaded source path. Do not save private/source meshes in this repository.

## Maker-studio interaction reference

`keycap_generator2` README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL parser/writer, imported-base engine and image/export modules were inspected read-only. Concrete patterns retained: 374 px scrolling left panel, sticky compact brand/theme header, labelled collapsible sections, paired millimeter range/number inputs, tactile lower-shadow controls with selected states, light lavender desk and coral accents, coherent saved dark mode, right-side live viewer with fit/zoom controls, status/warnings/export below it, and phone preview-first stacking. Imported meshes get a separate source preview, dimensions, units confirmation and transformation controls. There are no irrelevant MX switch sockets. Reused general studio/import infrastructure from the previous daily app was adapted to entirely new domino/keyed-runway geometry and validation.

## Parameters (all lengths in mm)

| Parameter | Supported range |
| --- | --- |
| Card width / height | 175–220 / 160–220 |
| Tile height / broad width | 22–30 / 8–12 |
| Tile station pitch | 7–11 |
| Sheet thickness | 1.6–2.4 |
| Runway key total allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Side station-mark engraving | 0–.4 |

Runway length = 48 + 7 × pitch; width = 24. Its tongue is 4.4 wide × 4 long. The open edge socket is (4.4 + allowance) wide × (4 + allowance) deep. Allowance is **total**, not per side. The two halves are not a snap fit: adhesive is required. There are eight loose tiles, with arched, chamfered or stepped crowns. Three real presets include actual model thumbnails; bounded variations modify real geometry. Infeasible card envelopes and out-of-range/nonfinite numeric inputs block export with recoverable errors.

## Image workflow and geometry

Pick or drop **PNG, JPEG or simple SVG**. Samples under `public/samples/` are synthetic fixtures reused from the daily studio test set; they contain no personal files. Text and six searchable bundled SVG marks follow the same local conversion path.

- Max file size: 2 MB; raster dimensions ≤12 megapixels, ≤6,000 px per axis, checked from file headers before decoding; portable normalized image ≤500 px per axis. SVG: simple filled paths/shapes only, ≤2,000 elements; scripts, external resources, references and effects rejected. Rasterized locally at 256 px.
- Source and actual checkerboard cutout previews are shown. Choose dark/light background, threshold 1–254, fit/cover crop and ±25% panning. Transparent pixels composite onto the selected background.
- The normalized image is sampled to a **20 × 20 height grid**. Threshold mode chooses relief/no relief per sample; grayscale mode maps darkness to height. A two-triangle-per-cell piecewise-linear surface is closed down to a continuous backing, then boolean-unioned or subtracted from the runway medallion. This is **2D-to-relief**, not automatic reconstruction of a full 3D object from one photo. No exact outline tracing is claimed.
- Bright holes remain unraised/unengraved within the solid backing, not through-holes. A real kernel probe checks the central void above a ring-image backing. Narrow features are limited by the 20×20 sampling and interpolation; fine relief details below your nozzle width can be omitted by the slicer. Use bold art and check the sliced preview.
- Relief depth .4–3 mm; engraving .4–.6 mm. Footprint 4–7 mm; rotation ±180°; X offset ±1.5 and Y offset ±2 mm. The entire transformed mesh must fit a 13 mm diameter safe zone. Relief scale, depth, threshold, crop and pixels all affect actual exported triangles.

The end marker is outside the tile sequence and joint. Minimum backing after maximum engraving at minimum sheet is .8 mm. Remove/replace and reset restore built-in defaults. Preview colours do not imply colour in STL.

## STL workflow and limitations

Both **binary and ASCII STL** are parsed locally in the worker. Max 2 MB and 1,500 triangles; each source dimension .2–250 mm. Check finite coordinates, triangle area, welded directed edge incidence, one connected component, positive enclosed volume, triangle intersections and support-free bottom contact before integration. No automatic repair is claimed.

Supported inputs are a single outward-wound **convex solid with a broad flat bottom**, not a hollow shell, concave mesh, disconnected assembly, thin branch or unsupported overhang. Unsupported concavities are explicitly rejected, never replaced by a convex hull. A hull is used solely to validate the bottom footprint; the original triangles are used for the actual boolean union.

Choose Z up / Y up / inverted Z before attachment (changing it clears the source for reattachment). Source dimensions and format are displayed. Explicitly confirm **millimeters**, since STL has no unit metadata. XY scales proportionally to the chosen physical footprint; Z independently fits .6–3 mm grip height. Scale factors, rotation and X/Y placement are visible. The transformed original mesh is sunk .15 mm into the .2 mm recess and **solid-unioned** into the runway end marker. A safe-zone check rejects offending transforms; files are never merely displayed/re-exported unchanged. Original and final previews remain available.

## Worker, current-state gating and saved designs

Manifold/WASM generation and STL preflight run in a Web Worker. Edits are debounced; generation/parse sequence ids discard stale responses. Export requires the exact current parameter/source/transform key and current image conversion state, so an invalid edit cannot silently download last-good geometry. A blocked preview is labelled last-valid. Worker errors disable exports; reload recovers.

Undo/redo keeps bounded history. Six local named designs and JSON save/open include bounded normalized image or source mesh payloads. Missing image payloads request reattachment instead of pretending a file was restored; saved mesh payloads are reparsed/validated. No files leave the browser or get committed by the app. Browser storage can be cleared normally; JSON is the portable backup.

## Views / exports / assembly

Connected card, standing row, exploded, de-tabbed print layout and isolated parts use the same final mesh data. See-through mode explains the joint. The first-tile pose control shows an initial tipping pose, **not dynamics**; the slider stops at first geometric contact, not an interpenetrating pose. Exploded positioning is also illustrative. Exports always use genuine bed-flat meshes.

Download binary STL for the connected card, each runway half or each tile. Everything ZIP contains eleven STLs (card plus ten separate parts) and numbered `ASSEMBLY.txt`. Card is one closed connected component; forty cuts leave ten separate parts and the carrier. Trim runner remnants, especially standing edges. Colour is preview-only.

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, 100% infill for small tiles. No supports intended. Calibrate the two-part runway joint first; glue it flat and let cure. Stand tiles with their narrow printed thickness along the direction of travel; broad faces are perpendicular to the runway. Side marks avoid the tipping feet. Begin with the Pocket Sequence preset (7 mm pitch), gently nudge, and reset by hand. Small parts/cutters: adult craft, not for young children.

## Validation performed

`npm test` independently parses float32 STL bytes, including finite coordinates, nondegenerate faces, normalized winding-consistent normals, positive volume **per component**, welded two-face/opposite-direction edge incidence, millimeter bounds and bed orientation. It checks all eleven separately exported meshes and card dimensions. 22 built-in configurations (default, all presets, min/max and mixed extremes) and 15 imported-image/STL configurations passed.

Mechanics checks use actual Manifold solids: assembled pairwise intersection, vertical runway-key insertion path, safe personalization location, flat-card part separation, forty snip cuts that do not damage parts, eleven components after snipping, and tile sweep/next-tile contact at each of seven stations. A signed-tetrahedron tile centre of mass establishes the gravitational tipping angle; neighbour contact occurs after that threshold. This checks reachable geometry, **not energy transfer/friction or a guaranteed cascade**.

`node browser-test.cjs`, `node studio-test.cjs`, `node supplemental-test.cjs` exercise the production app under its real base path: actual PNG/JPEG/ASCII/binary file-picker uploads and downloaded STLs; changed pixels/threshold/depth/scale/rotation/placement vs defaults; replace/remove/reset; invalid/truncated/open/nonmanifold/excessive/concave/empty inputs; every preset and silhouette; text/icons/SVG and engraving; JSON/image/mesh and named-design round trips; undo/redo; ZIP extraction and every mesh; all views; saved theme/focus/collapsible controls; stale edit gating; worker-abort/recovery; and touch orbit/pinch plus reachable imports/exports at 390 and 320 px with no overflow. Download hashes match the current preview geometry and JSON regenerated in Node. Reports and screenshots are checked in.

**No physical print, full cascade, material-strength, fatigue, friction or glue-strength testing was performed.** Geometric fit and watertightness alone do not establish real-world performance. Placement error, surface level, adhesion and impact losses can stop a chain; calibrate a short row first.
