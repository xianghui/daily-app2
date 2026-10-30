# Drop & Grade

A reference-grounded **eight-part flat-pack size-grading kit**, not another slider or incline app. Snip32 carrier tabs, assemble two vertical cheeks and three horizontal shelves, then gently classify three supplied flat tokens using progressively smaller gauge holes. Largest catches at the upper shelf, medium at the middle, smallest reaches the solid signature shelf. Manual centering is required: this is a geometry teaching model, **not a precision coin sorter or a validated automatic hopper**.

## Local development

```sh
npm install
npm run dev
npm run predeploy
npm test
```

React + Vite, Three.js/OrbitControls, Manifold3D WASM, fflate and locally bundled Fredoka/Rubik. Runtime dependencies, fonts, worker and WASM are bundled. No CDN, API, keys, accounts or paid services. The root monorepo publishes the combined `deploy/`; per-app deployment scripts are present but not the publication route.

## Reference-first evidence / attribution

Read-only local candidate inspection: `keycap_generator2/public/templates/clicker_template2.stl` contains3 switch-interface components,15.2×15.2×43.1 mm; `fidget_fabric_generator/public/templates/diamond-link.stl` is an8 mm thick interlocking link. Their README descriptions and parsed meshes do not provide appropriate sheet kit interfaces. Local kit-card projects contain no source STL assets outside generated/dependency directories. The public **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), is licensed [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). The original source README and license are saved here. Raw third-party STL is **not redistributed**.

The actual binary STL was parsed with trimesh, hashed and sectioned at Z=.10,.50,1.59 mm; see `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png`. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has30,616 triangles; bounds179.819997×178.019994×3.1899996 mm;27 edge-adjacent components including small degenerate surface fragments, and is not watertight. Those defects are disclosed, not repaired or reused in exports.

**Measured:** sheet planes0/1.6 mm and four actual4.5×1.700012 mm socket cross-sections. **Reconstructed:** tongue4.4×sheet1.6 plus .10 total allowance yields4.5×1.7. **Proposed:** default allowance .15, range .10–.35 depends on printer/material, not universal. Runner thickness increased from measured low .21/.22 mm vertices to .4–.6 mm; card and parts are original Boolean solids. Our thicker cheeks, six side-inserted seats, three graded bores, eight required parts and classification interaction are new, not spacecraft reskins. Source mm is assumed from its model scale/sheet construction; STL has no unit metadata.

Visual/interaction read-only reference: `keycap_generator2` README, styles, App, Viewer, worker, imageTrace, geometry/stl and export inspected. Concrete patterns:374px scrolling left rail/sticky maker header, paired numeric/sliders, collapsible sections, tactile pink selected keys, lavender desk, checkerboard converted image, preview-first phone layout, saved dark theme, worker builds and exact-current-result export gating. Studio/import infrastructure is adapted from the prior daily studio; the mechanical geometry and validation are new. No reference project was edited, deployed or copied wholesale.

To reproduce source inspection, download the exact URL in `reference-analysis.json` to a temporary path, install trimesh/numpy/matplotlib in a temporary Python environment, then run `python reference-inspect.py /path/to/reference.stl`. This generates measurements and cross-sections only; design decisions remain in `reference-analysis.json`.

## Model parameters (all physical lengths in mm)

| Parameter | Supported range |
| --- | --- |
| Card X/Y |230–260 independently |
| Shelf span / depth |40–48 /32–38 |
| Small / medium / large token |10–14 / small+4 / small+8 |
| Passing diametral gauge allowance |.6–1.2 |
| Shelf pitch / minimum free gap |16–22 /14 |
| Cheek / shelf-and-token thickness |2.4–3.2 /1.6–2 |
| Tongue width / total socket allowance |4.4–5.2 /.10–.35 |
| Layout spacing |3.5–4 |
| Breakaway width / thickness |.8–1.4 /.4–.6 |
| Personalization size / engraving depth |4–7 /.4–.6 |
| Art X/Y / rotation |±1.5 /±2 /±180° |

Square, round-corner and clipped-corner shelves preserve real sockets and bore clearances. Three presets have actual generated model thumbnails. Undo/redo, six local named designs and portable JSON include bounded image/mesh payloads; missing image payloads explicitly require reattachment. Reset returns to built-ins. Preview-only colours are never asserted to exist in STL.

## Image import / conversion

Picker and drop support PNG, JPEG and simple SVG (up to2 MB). PNG/JPEG headers are checked **before decoding**, max12 MP and6,000px/side. Normalization is at most500px and the actual bounded height grid is20×20. SVG supports basic filled shapes and paths, max2,000 elements, no external resources/scripts/effects, rasterized locally at256px. Transparent areas composite onto selected light/dark background. Fit/cover crop, pan, threshold1–254, invert background, grayscale/threshold, size, position, rotation and engraving depth alter actual exported triangles.

Each sampled pixel becomes a height at a grid vertex, triangulated with continuous backing and closed walls; Boolean subtraction makes a recessed mark on the protected outboard lug. Triangular interpolation is intentional: **2D-to-relief/sampled silhouette, not exact vector tracing or full3D reconstruction from a photo**. Bright holes remain unengraved, verified with solid probes. Original image and exact cutout grid are visible over a checkerboard. Empty silhouettes fail and export disables. Only engraved style is supported, to preserve flat printing and at least1.0mm backing.

## STL import / integration

Both binary and ASCII `.stl`, ≤2 MB/1,500 triangles and .2–250 mm per source axis. Parser checks content, finite coordinates, dimensions, nondegenerate faces, edge incidence/directions, positive volume, single connected component, strict convexity and broad flat bed contact. **Supported subset is one outward-wound closed convex solid with a broad flat base**. Concave, hollow, open, disconnected, nonmanifold, inverted and overhanging models are rejected with guidance, not silently convex-hulled or repaired. This deliberate bounded subset is disclosed in the UI.

Choose Z/Y/−Z up **before** attaching; a new orientation requests reattachment. Dimensions, triangle count, format and source3D preview are shown. Confirm millimeter interpretation because STL stores no units. XY scale fits the chosen4–7 mm footprint proportionally; Z scales independently to .4–.6 engraving depth, with both factors shown. Rotate/translate, reset transforms, replace/remove. The **exact oriented source mesh** becomes a Boolean cutter in the lower shelf's signature lug. It is not merely displayed or unchanged re-exported. Keep-out checks reject features outside the safe zone; imports cannot obstruct bores or socket fits. Synthetic PNG/JPEG/SVG/ASCII/binary STL fixtures are bundled with browser try/download buttons; no personal input files belong in this repository.

## Privacy, responsiveness and exports

All files are processed on device. No uploads, external service or telemetry. Manifold builds and STL parsing run in a Web Worker, with bounded detail,100ms debounce, request IDs and current-state keys. Old previews are explicitly labeled and **cannot export** after invalid edits or failed conversion/import. Worker errors disable export and explain reload recovery. Preview and export share exact final valid geometry; downloadable byte fingerprints are checked against UI/portable-state regeneration during validation.

Views: real connected card, de-tabbed print layout, assembled ideal token catch positions, exploded side-insertion explanation, isolated parts and see-through solids. Orbit/zoom/fit with touch support. Desktop left panel/right viewer; phone preview/export first, controls stacked; saved coherent light/dark and reduced-motion support. STL always exports bed-flat orientation, never assembled visual overlaps.

Prominent card and per-part binary STL exports plus Everything ZIP containing all9 STL files and numbered ASSEMBLY.txt with current calculated fits. The connected card is a single closed solid with32 **real removable runners**, not just loose parts near a rectangle. Eight clean parts are independently closed/manifold. No fake3MF or STL colour claim.

## Printing, assembly and calibration

See `PRINTING.txt` / exported instructions. PLA/PETG,.16–.20 layers, at least3 perimeters,100% mm. Bed-flat; no supports intended, inspect your slicer. Card230–260mm may exceed small beds: export clean parts instead. First print one cheek and shelf to calibrate .10–.35 total allowance. Deburr/compensate elephant foot. Snip32 runners1.6mm outside parts and trim nubs; do not damage functional tongues.

Lay first cheek outer-face down, insert solid lower shelf, smaller middle hole shelf and larger upper hole shelf into the three indexed sockets. Push second cheek onto all3 opposite tongues; stand the frame. Bond **six fixed seats** with compatible adhesive. No snap locks or friction-retention guarantee. Shoulders define span; tongue ends stop .05mm short of outer faces. Three small tokens stay intentionally loose; centered flat drops should classify large/high, medium/middle, small/low. Hand-center, release gently, retrieve through open front/back. Tilt, bounce and friction can spoil sorting; no precision or reliability claim. **Small choking-hazard parts: adult demonstration only, away from children and pets.** No bearings, magnets or fasteners; fixed-joint adhesive required.

## Validation / limitations

`npm test` independently parses every binary STL: exact length, nonempty finite/nondegenerate triangles, unit normals matching outward winding, positive enclosed volume per component, welded1e−5mm edge incidence exactly2 with opposite directions, expected bounds/Z=0, separate component counts. CSG tests check28 assembled pairs, side-insertion trajectories, all6 socket/tongue/shoulder seats, token passage/catch/retrieval poses, layout disjointness,32 safe snips releasing8 parts+carrier, and sampled bed-support cross-sections. Defaults, three presets, silhouettes, combined/per-field extremes and image/STL cases are covered.

Production Playwright scripts exercise real PNG/JPEG/ASCII/binary file picking, downloads and changed geometry; invalid/truncated/open/nonmanifold/concave/excessive files; blank images; transforms and safe-zone failures; remove/reset; exact preview/JSON/export fingerprints; portable JSON/named storage; undo/redo; ZIP members; all views; theme/focus/sections; worker failures/stale gating; 320/390px phone overflow and actual touch orbit/pinch. Reports/screenshots are saved alongside scripts. See `VALIDATION.md` for completed runs. Computational clearance and closed mesh checks **do not prove dynamic sorting, print fit or adhesive strength**.

**No physical printing, assembly, sorting, bounce/friction, wear, strength or dimensional-accuracy test has been performed.**
