# Quoin & Curve — compression-arch kit-card studio

A local React + Vite maker studio for a **ten-part, seven-voussoir tabletop arch**. Two tenoned abutments seat in a tied base; six radial blocks and a keystone close a semicircle. No hidden pins, hardware, glue, motion simulation or load-bearing claim. Three real presets and three base/abutment silhouettes alter generated solids. This is a different assembly principle from earlier rectangular mortise frames: radial compression, finite end-heel contact and a calculated pressure line.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base is `/daily-app2/20261028-6/`. `node serve-production.cjs` serves the built app at that prefix on port 5432. Individual `deploy` exists as requested; public publication uses the parent monorepo's root `predeploy` and `deploy`, not the individual app deployment.

## Reference first: what was actually measured

Local STLs were enumerated under `/Volumes/ExternalHD/3d_printing_apps/` before geometry selection. Clicker sockets, articulated fabric links and sliders are not suitable substitutes for a sheet/carrier reference; the local kit-card projects had no suitable STL. Their project READMEs were inspected. Instead the actual publicly available **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), was downloaded and parsed. Source repository and reuse terms: <https://github.com/mkasberg/white-cat-kit-card>, **CC BY 4.0**, <https://creativecommons.org/licenses/by/4.0/>. Repository README, LICENSE, `kit_frame.scad` and source construction were read. No raw third-party mesh is bundled.

- Binary STL: 1,530,884 bytes, 30,616 facets; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Unit assumption: millimeters, corroborated by source `thickness=1.6`; STL itself has no units.
- Measured bounds: 179.820 × 178.020 × 3.190 mm. Welded edge connectivity gives two components (3,746 and 26,870 faces), with 57 edges not having two incident faces. These source defects are documented, not silently repaired or copied into exports.
- Mesh Z histogram and three actual mesh sections establish the 1.6 mm sheet, 1.6 mm left rail at Y=100 and thin bridge levels at Z=0.21/0.22 mm. The source is **construction reference only**, not evidence of a tested arch.
- Preserved: 1.6 mm starting sheet, connected perimeter/runners and deliberately removable low connectors. Redesigned: reinforced 2.4 mm rails, 26 accessible 0.4–0.6 mm-high tabs, all arch blocks, 3 mm finite bearing heels, tied base and mortise interfaces. Arch interfaces and allowances are proposed dimensions, **not measured source joints**.

See [reference-analysis.json](reference-analysis.json) and [reference-sections.svg](reference-sections.svg) for concrete evidence. Neither source nor local reference trees were modified. Read-only `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts and imageTrace.ts informed specific studio patterns: 374 px left control rail, paired slider/number fields, tactile selected keys, bundled rounded fonts, source/converted image views, worker-owned solids and identical current preview/export data. Existing local import/mesh-validation infrastructure was adapted; arch geometry and mechanism checks are new, not an unchanged app re-export.

## Parameters — all physical dimensions in mm

| Parameter | Supported range |
| --- | --- |
| Card width / height | 120–160 / 210–250 |
| Outer arch radius / annular depth | 28–36 / 8–11 |
| Tie-base depth | 28–36 |
| Sheet thickness | 1.6–2.4 |
| Total abutment-mortise allowance | 0.15–0.45 |
| Breakaway width / height | 0.8–1.4 / 0.4–0.6 |
| Row shift / dimple depth | 0–1 / 0–0.4 |
| Import footprint / STL height | 4–7 / 0.6–3 |
| Import placement / rotation | X ±1.5, Y ±2 / Z ±180° |

Seven annular wedges occupy 180°, each 180/7°. Two end blocks have extra 3 mm-high vertical heel faces for non-point abutment contact. The tied base has two `(sheet + total allowance)` × `(12 + total allowance)` through mortises. End-heel faces are nominal contact, not a forced interference fit. All parts print flat at Z=0. The real carrier/runners/tabs are Boolean unions, not loose shapes arranged inside a decorative rectangle. Detabbed exports omit the connectors entirely. Minimum structural sheet is 1.6 mm; an engraved mark retains at least 0.8 mm backing at minimum sheet/deepest supported engraving. Cosmetic sampled detail can be smaller than a 0.4 mm nozzle and may soften in slicing; enlarge bold artwork or use a smaller nozzle if necessary.

## Local image → geometry

PNG, JPEG and simple SVG file pickers work on desktop and phones; drag/drop is also supported. Text (up to eight characters) and six searchable bundled original SVG marks use the same image pipeline. Synthetic sample fixtures are included, not personal uploads.

1. Validate actual image content, dimensions and extension before decoding. Limit 2 MB, 12 MP, 6,000 px per side; normalize to at most 500 px for portable storage.
2. SVG accepts a bounded safe subset of filled paths/shapes (up to 2,000 elements), rasterized locally to 256 px; scripts, external resources, embedded images, effects and unflattened text are rejected.
3. Fit/cover and X/Y crop shifts sample a **20 × 20 luminance grid** against selectable light/transparent or inverted-dark background. Threshold 1–254 selects silhouette relief; grayscale selects proportional height. The actual cutout is shown on a checkerboard.
4. Build a closed height-map mesh on a 0.4 mm backing and use Manifold Boolean union/subtraction on the tie-base's recessed central medallion. Raised depth 0.4–3 mm; engraved 0.4–0.6 mm. Physical size, rotation and placement affect the exported triangles.

This is **2D-to-relief, not full 3D reconstruction from one photograph** and not exact vector-outline tracing. Bright holes remain unraised/unengraved inside the continuous structural backing. A final-solid ring-hole probe checks this distinction in both styles. Empty results block export. Source and converted previews, replace/remove, reset transforms and reset image controls are available.

## Local STL → integrated tie-base mark

Actual ASCII and binary STL are parsed in the worker, welded and checked before integration: 2 MB maximum; 1,500 facets maximum; each dimension 0.2–250 mm; finite vertices; nondegenerate triangles; consistent directed edge pairing; one connected outward solid and positive volume; triangle intersection checks. The supported contract is deliberately **one convex, closed, broad flat-bottom solid with no overhang outside its bed footprint**. Concavities, cavities, unsupported branches/overhangs, open/nonmanifold and self-intersecting meshes give actionable errors. **No convex hull replacement and no claimed automatic repair.** The hull used for checking bed contact is not exported geometry.

Explicitly confirm millimeter coordinates. Choose Z/Y/−Z up before attachment; changing axis clears the old source and requests reattachment. Source preview reports oriented dimensions, format and triangle count. XY scales proportionally to a physical footprint; Z independently fits grip height. Rotate around Z, center/reset and place within the 6.5 mm-radius safe medallion. The original supported mesh is unioned into the base with 0.15 mm overlap, away from the abutment slots and arch. Unsupported transforms/keep-out violations block export instead of clipping or silently changing the shape. Removing the source restores the original model.

## Responsive studio, persistence and exports

Light/dark theme is saved locally. Desktop: scrollable 374 px left rail and large right preview. Phone: preview/view toolbar, dimensions/warnings and reachable exports first, then stacked controls. Orbit/zoom supports touch and keyboard-focusable controls; reduced-motion is honored. Assembled, exploded, connected-card, detabbed and every isolated-part view use the same checked solids. Exploded offsets are explanatory preview positioning, not printable geometry or a motion claim.

A debounced WASM worker owns all heavy solids. A request id and full parameter/import state key prevent stale results from enabling exports; invalid edits visibly retain a last-good preview only, with export blocked. Worker failure is explicit and recoverable by reload. Binary STL uses computed outward unit normals. Exact current mesh fingerprints link preview and download. Per-part buttons and **Everything ZIP** include the real connected-card STL, ten loose-part STLs and numbered `ASSEMBLY.txt`; no pretend 3MF or STL colour claim.

Undo/redo, up to six local named designs, JSON save/open include bounded normalized image data and parsed mesh payloads. Missing/invalid assets require reattachment rather than pretending restoration. All personal files are processed **on this device**, never uploaded or added to the repository. No remote APIs, CDN modules, API keys or paid services. React, Vite, Three.js/OrbitControls, Manifold WASM (Apache-2.0), fflate and OFL Fredoka/Rubik fonts are bundled through npm; Playwright is a dev-only validation dependency.

## Assembly and calibration

1. Print card **or** ten loose parts in PLA/PETG, 0.2 mm layers, three walls, 100% infill for the homogeneous-mass assumption, no support intended. Print one base and abutment first; tune mortise allowance in 0.05 mm steps for material, printer and elephant foot.
2. Snip 26 low tabs 2 mm outside nonfunctional edges, trim nubs, discard frame. Adult cutting; small parts.
3. Seat both abutment tongues downward in the base; shoulders stop on the base top.
4. Hand-support three blocks from each side. Outer arcs face out; radial faces touch. Insert the center keystone from the front and release gently only on a level surface.
5. This is a compression-only, manually removable display, **not captive, not a bridge for loads**. Support before lifting the keystone to dismantle. No snaps, hidden pins or hardware. The incomplete arch requires your hand; no unprovided centering tool is claimed.

The pressure-line solver uses **actual exported block volumes and centroids**, searches a spring support point and horizontal reaction, and requires a positive compressive normal and a pressure-line radius strictly inside every one of the six radial seams. It reports tangential/normal friction demand (roughly 0.16 in the default ideal model), not an experimentally measured friction coefficient. Actual material friction, print tolerances, layer texture, out-of-plane tipping, fit forces and load capacity are untested. A pressure-line solution and watertight mesh **do not prove a physically working print**. Adjust/reprint rather than forcing a poor fit.

## Verification

`npm test` checks defaults, all presets, representative extrema/variations and image/STL-derived solids with independent binary-STL parsing: exact length, finite coordinates, nonzero faces, unit stored normals, consistent winding, 1e-5 mm welded two-face edges, positive volume per component and millimeter dimensions. Every part and connected card is checked separately. Kernel collision tests cover all assembled pairs, front insertion paths, downward abutment seating, mortise restraint, finite heel bearing, card part inclusion/disjointness, and 26 cuts producing **carrier + ten parts**. Pressure-line/normal/friction checks are separate from topology.

Browser scripts exercise actual PNG/JPEG/ASCII/binary file-picker imports and downloaded STL bytes; changed pixels, threshold/depth, STL scale/rotation/placement must survive export and regenerate identically from JSON in Node. They also cover empty/malformed/unsupported files, missing portable assets, replace/remove/reset, late asynchronous imports, worker failures, presets, text/icons/SVG holes, undo/redo, saved designs, per-part STL/ZIP, colour neutrality, saved dark theme, phone overflow/orbit/pinch/uploads/downloads and desktop left/right layout. Test the built production prefix to catch WASM/worker paths. Reports and screenshots record performed checks separately from **unperformed physical printing, standing, assembly-force and load tests**.
