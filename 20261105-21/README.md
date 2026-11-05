# Kelvin & Cell

A local **14-panel, bed-flat kit-card generator** for a truncated-octahedral honeycomb cell: six squares, eight hexagons, 36 matched seams, real compound bevels, and 56 removable runners. Adjust the cell scale and vertical stretch to recalculate the actual face planes, inner offsets and bevels. Windows, image reliefs and verified imported STL cutters change the printable solids.

This is a taped/glued physical mathematical assembly, not a browser game, simulated foam, folding net or generic mesh viewer. The ideal cell tiles space. Printed seams/windows deliberately remain open; the shell is not airtight or load rated. **No physical printing or assembly has been performed.**

## Reference first / provenance

Read-only local candidates were inspected before choosing the model: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three closed components, MX-specific, rejected for unrelated interfaces) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one closed component, 8 mm tall interlocking fabric, rejected for unrelated construction). Both relevant READMEs were inspected.

Selected actual mesh: **White Cat Kit Card**, Mike Kasberg, [upstream project](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. The upstream README and license were fetched and are retained in `evidence/REFERENCE-README.md` and `public/licenses/REFERENCE-CC-BY-4.txt`. This is an original geometry reconstruction using measured construction principles, not the spaceship shape. The raw third-party mesh is **not bundled or redistributed**.

Fresh CDN retrieval returned HTTP 403. An accessible cached public STL was reparsed instead; its SHA-256 matches the recorded public reference: **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Binary, 30,616 triangles, assumed millimeters, bounding dimensions **179.820 × 178.020 × 3.190 mm**. STL has no units. The source has duplicate/degenerate and nonmanifold anomalies: 57 edges do not have exactly two incident faces. The explicitly documented endpoint-welded edge-adjacency analysis finds **2 graph components**, including zero-length/degenerate edges; this is not a count of clean printable source parts. Other splitting algorithms that discard degenerate faces can differ. No source mesh is claimed repaired or printable.

`reference-analysis.py` freshly parses source bytes, hashes, dimensions, components, Z planes and actual cross-section segments. `reference-analysis.json` and `evidence/reference-sections.svg/png` retain evidence. Sections at **Z=.100, .215, 1.590 mm** identify four real **4.50 × 1.70 mm** slot loops, along with a **1.60 mm** sheet plane and runner tops around **.21–.22 mm**.

Measured versus proposed design decisions:

- Retain the reference's **1.60 mm default sheet**, bed-flat carrier and removable low runners.
- Strengthen runners to **.4–.6 mm**, a deliberate new FDM starting value, not a measured source dimension.
- Do **not** impose spaceship sockets on a taped cell. Source slot measurements are recorded but are not claimed as this kit's interfaces.
- Original cell vertices are permutations of `(0, ±a, ±2a)`, then stretched along Z. Its **14 matching face wedges**, inward-offset planes and 36-seam closure differ from an open triangular lantern or simple bipyramid. Neighbor views demonstrate two different honeycomb contacts.
- Offset every outer face plane inward by sheet thickness. Intersect each vertex's three active planes to obtain the matching inner vertex. Flatten the exact wedge to its outside bed face. Tangential shrink by `1 − allowance/(2 × face minimum inradius)` creates deliberate seam space. These are computed miters, not overlapping sheet prisms.
- `Manifold.hull` constructs only these **original, mathematically convex face wedges from calculated vertices**. It never substitutes for a source STL or uploaded mesh. Imported meshes use their verified actual triangles in Boolean subtraction.

Visual/interaction reference `keycap_generator2` README, `styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL, export and image-conversion modules were inspected read-only. Concrete patterns retained: 374 px left editor, collapsible labelled controls, paired range/mm inputs, raised tactile buttons, lavender desk/white panels/coral selection, local rounded fonts, saved dark mode, checkerboard cutout, source-aware STL editor, worker-owned geometry and current-state export gating. Shared original Daily Object Lab studio/import infrastructure was adapted; geometry, bevels, seam map, assembly and tiling tests are specific to this model. No reference project's Git history or dependency tree was copied.

## Run / production

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node mobile-test.cjs
```

Production base: `/daily-app2/20261105-21/`. Test server: `http://127.0.0.1:5971/daily-app2/20261105-21/`. Publish the **root monorepo's deploy directory**, not this folder's standalone deploy script. Local dependencies: React/Vite, Three.js/OrbitControls (MIT), Manifold WASM (Apache 2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). Dependency notices are bundled. No CDN, remote geometry API, key or paid service.

## Controls and units

| Parameter | Supported range | Geometry effect |
|---|---|---|
| Card width / height | 240–320 / 230–320 mm | Actual bounded connected carrier |
| Cell quarter-span `a` | 12–17 mm | Ideal X/Y extent `4a` |
| Vertical stretch | .8–1.2 ratio | Ideal Z extent `4a × stretch`; recomputes normals/bevels |
| Panel thickness | 1.6–2.4 mm | True face-plane inward offset |
| Tangent seam allowance | .2–.6 mm | Deliberate face shrink / tape gap, not press-fit |
| Window diameter | 4–9 mm | Circular or diamond cut-through, except signature square |
| Part spacing | 3–5 mm | Packing and accessible snipping corridors |
| Runner width / height | .8–1.2 / .4–.6 mm | Real bed-aligned removable attachments |
| Import footprint | 4–7 mm | Proportional XY scaling |
| Engraving depth | .4–.6 mm | Leaves ≥1.0 mm backing |
| Import rotation / X / Y | ±180° / ±1.5 / ±2 mm | Bounded actual cutter transformations |

Regular, squat-windowed and tall-windowed presets have actual worker-rendered thumbnails. Impossible packing or unsupported transforms disable export; mixed parameter combinations are not promised to fit every card size. Regularity applies only at stretch=1. Ideal volume `32a³ × stretch`; regular area `(12 + 24√3)a²`. The cell is not Kelvin's curved area-minimizing foam.

## Image workflow

Desktop/phone file picker and drag/drop accept actual PNG/JPEG and simple SVG. Files stay local. Limit **2 MB**, **12 megapixels**, **6,000 px per side**. Read/validate headers before decoding; normalize the source to ≤500 px. SVG is restricted to simple local vector paths/shapes, ≤2,000 elements, rasterized at 256 px; scripts, references, external resources, text/effects and invalid SVGs are rejected.

Fit/crop, crop X/Y, light-background or dark-background removal/inversion, threshold, grayscale relief, physical scale, depth, rotation and placement control the real model. The source and actual converted cutout appear separately, on a checkerboard. Text (up to 8 characters) and six searchable bundled vector icons use the same geometry workflow.

Exact conversion: sample a **20 × 20 luminance grid**. Threshold mode assigns selected samples the chosen depth; grayscale mode uses `depth × (1 − luminance/255)`. A triangulated, closed height-field cutter has side walls and a bottom. Manifold subtracts it from the bottom square's **INSIDE face**. This is a bounded sampled relief with sloped transitions, **not exact contour tracing** or full-object 3D reconstruction from a photo. Bright holes preserve unengraved backing; a final-solid ring test verifies the central hole and engraved band. Empty silhouettes block export. Engraving only is intentional: raised decoration would compromise the flat card envelope.

## STL workflow

Accept actual **ASCII and binary STL**, ≤2 MB / **1,500 triangles** / **.2–250 mm per axis**. Parse and weld vertices; validate finite coordinates, nondegenerate triangles, exactly two opposite-directed faces per edge, one connected component, outward winding, positive volume and self-intersections. A deliberately bounded integration contract accepts one **convex, broad flat-bottom solid** with supported XY footprint. Concave, hollow, disconnected, open, nonmanifold and unsupported overhanging geometry is explicitly rejected with actionable guidance; no arbitrary repair or hull substitution is performed.

Choose Z-up, Y-up or inverted Z **before** attaching. Show oriented source dimensions and preview. Explicitly confirm millimeters because STL has no unit metadata. XY scales proportionally to the requested footprint, Z independently to engraving depth; show actual scale factors. Rotate, center/place, replace/remove, reset and return to defaults. The verified mesh's actual triangles become a Boolean cutter integrated into the inside of the signature square, not an unchanged re-export. A **5.8 mm keep-in disc** and checked ≥1.2 mm lateral margin protect the bevels. The inside mark is visible in isolated square view or through transparent/windowed panels.

Synthetic fixtures: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. Their README identifies them as original synthetic test data. No personal files or source mesh are in the repository.

## State, views and exports

Debounced worker requests with generation IDs, import-version guards and exact current-state keys keep edits responsive and prevent stale export. Every result passes final-solid validation. Worker load failure disables export and requests reload. A labelled last-good preview is never silently exported after an invalid edit.

Assembled, exploded, flat connected card, clean plate and every isolated part share the same printable panels. Square-face and hex-face neighbor views duplicate the same cell at ideal tiling translations **for preview only**; exports still contain one cell. See-through mode explains the interior. Touch orbit/pinch, fit, zoom and front/top controls are real Three.js interactions.

Undo/redo, six local named designs and JSON save/open retain bounded image/mesh payloads. Missing assets explicitly request reattachment rather than pretending they were restored. Local storage can be cleared by the browser; use JSON for durable transfer. No user file is uploaded.

Binary STL per part, connected-card STL, clean-plate STL and Everything ZIP are implemented. ZIP contains the card, all fourteen clean panel STLs, current JSON, numbered print/assembly instructions and actual proportional S01–S36 seam map SVG. STL has no color/material metadata. No 3MF is claimed.

## Print / assembly

Default card needs **270 × 270 mm usable bed area**. For smaller beds choose a valid smaller card or individual panel downloads; the full clean plate retains the same large layout. Do not print both card and panels unless duplicates are wanted. Print **larger outside faces DOWN**, smaller inside faces up. Inward-tapered miters maintain supported XY footprints. PLA/PETG, .16–.20 mm layers, .4 mm nozzle, no supports intended. Calibrate square 1 and its four neighboring hexagons first.

Label faces and corresponding seams before snipping 56 accessible low runners. Start with square 1; add adjacent hexagons 7/9/11/13, side squares 3–6, remaining hexagons 8/10/12/14, then top square 2. Match seam-map labels, preserve deliberate gaps, and add every face from outside. Thin external tape is required for holding; compatible adhesive is required for a rigid permanent display. Apply final-face adhesive before exterior placement and tape while curing. No bearings, magnets or fasteners are required. There is no fake hinge or motion control. Print/material/tape variations require calibration; the assembly is not self-retaining before fixation. Consult numbered in-app/ZIP instructions.

## Validation scope

`geometry-validation.json` records **41 cases**: defaults, every preset and silhouette, each parameter endpoint, combined minimum/maximum settings, image threshold/relief cases and transformed ASCII/binary STL cases including geometry extremes. Every exported panel, connected card and float32-translated loose plate is independently parsed: exact binary length, finite vertices/unit normals, nondegenerate triangles, expected mm bounds, exactly two oppositely directed incidents per welded edge (1e-5 mm weld), connected-component positive volumes and consistent winding.

Independent Manifold checks verify one connected card, 56 runner cuts releasing carrier + 14 intact panels without fragments, no part damage or plate intersections, declared card envelope/thickness, supported bed footprints, clear windows in both card and clean parts, separate beveled assembly parts with zero unwanted intersections, 56 exterior insertion samples, signature keep-out margin, 24/36/14 Euler topology, exact ideal volume and both tiling translations. These geometric tests do not validate tape or glue.

Real Chromium file-picker uploads/downloads verify PNG, JPEG, ASCII/binary STL, changed pixels/threshold/depth/scale/rotation/placement, source/default comparisons, reset/replace/remove, invalid/truncated/excessive files, empty images, bad dimensions/transforms, unsupported meshes, exact UI/export signatures and regenerated JSON meshes. Additional suites cover every preset, text/icons/SVG holes, ZIP extraction and every contained STL, named designs/portable assets, all views, themes, focus/collapse/reduced motion, worker failure/reload, stale imports and 320/390 px phone layout with touch orbit/pinch and reachable downloads. Reports/screenshots are retained beside the app.

**Computational checks only. Physical printing, assembly, adhesion, material strength, fit and durability remain untested.**
