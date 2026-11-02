# Hanoi & Transfer — kit-card studio

React + Vite browser maker studio for a **genuine connected eight-part flat-pack kit card**: a socketed signature board, three shouldered pegs and four graduated loose rings. Snip 32 removable runners, glue pegs into the board and lower rings over them. Transfer the stack one top ring at a time without placing a larger ring on a smaller one. This is a printable physical construction, **not a browser game**. No hardware; plastic-compatible adhesive required. Physical printing, fit, friction and adhesive strength are **untested**.

## Run / dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261102-31/`. Local React, Three.js, Manifold WASM in a worker, fflate and Fontsource Fredoka/Rubik (OFL fonts). No CDN imports, API key, server or paid service. Per-app predeploy/deploy scripts exist; combined public publication uses the parent monorepo's root deploy flow.

## Reference-first evidence

Inspected local STL candidates first and relevant project instructions: keycap_generator2's switch template and fidget_fabric_generator's diamond link were parsed, hashed and measured; neither has a sheet carrier appropriate to this kit. Their actual dimensions, hashes and component counts are in `reference-measurements.json`.

Downloaded and freshly parsed **White Cat Kit Card**, **Mike Kasberg**, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README and license are saved. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary 30,616 triangles, 179.820 ×178.020 ×3.190 mm, 27 edge-adjacent components. Source is not globally watertight and is **not repaired or redistributed**. STL has no unit metadata; mm assumed from source scale and sheet design. The actual mesh, not a listing picture, was inspected through cross-sections at Z=.1,.5,1.59 mm: `evidence/reference-sections.png`. Reproduce with `reference-measure.py /path/to/downloaded.stl` (trimesh/numpy/matplotlib/scipy/networkx).

**Measured:** 1.600 mm sheet planes, 4.500 ×1.700012 mm socket loops, low .21–.22 mm runner planes and subdivided carrier. **Preserved:** 1.6 mm default sheet, 4.50 mm socket length and bed-connected carrier architecture. **Proposed:** adjustable sheet 1.6–2.4; socket width sheet plus .30–.60 clearance; tongue width 4.50 minus clearance; thicker .4–.6 mm runners. These are loose adhesive seats, not universal press fits. New board, shoulders, pegs, ring topology and packing are original parametric CSG reconstructions. No cat silhouette or raw source mesh is bundled. `reference-analysis.json` maps source measurements to real parameters.

Read-only visual/interaction reference: keycap_generator2 README, styles, App, Viewer, worker, export, STL and imageTrace modules. Concrete adaptations: 374px left panel / large right preview, preview-first phones, collapsible sections, paired numeric/sliders, lavender desk, white panels, pink pressed key controls, saved dark mode, checkerboard conversion and current-result export gate. Reused generic studio/import utilities from an existing daily-app studio, with entirely new kit geometry, assembly transforms, fit calculations and tests. No Git history or dependencies copied wholesale.

## Parameters / fit / assembly

All physical dimensions are **millimeters**. Card 210–270 ×160–210; largest ring diameter32–38; smallest16 with two linearly spaced intermediates; peg height22–32; sheet1.6–2.4; spacing3–5; total socket clearance.30–.60; runner width.8–1.2 and thickness.4–.6. Three real geometry presets and three board silhouettes. Impossible packing, ranges and unsafe imports block exports.

Pegs have 4.50 mm blades, 10 mm wide ×3 mm tall shoulders and sheet-length rectangular tongues. A 4.50 ×(sheet+clearance) through socket receives a (4.50−clearance) ×sheet tongue, ending flush with the underside. Shoulders seat on the board. Calibrate one clean peg/board before gluing; hold upright until cured. Source fit is deliberately redesigned rather than claimed identical. Ring bore =6+2×clearance, exceeding the blade diagonal sqrt(4.5²+sheet²). Rings sit on shoulders at board-top+3 mm; peg height leaves ≥9.4 mm headroom in supported combinations. Peg pitch = largest ring diameter+4 mm separates neighboring stacks. Rings remain loose and removable; no captive retention is claimed.

Print flat PLA/PETG, .4 mm nozzle, .16–.20 layers, three walls, no supports. Snip runners 1.3 mm outside part bounding edges and file stubs without touching tongues/bores. Glue pegs, cure, load largest-first. Lift only the top ring above **every peg tip** before translating and lowering. `ASSEMBLY.txt` and the app provide numbered instructions. The preview shows sixteen exact resting configurations in the legal fifteen-move sequence, not continuous physical dynamics. Exploded offsets are explanatory only. Export always uses the same printable parts, bed-flat, without assembled overlaps. Small parts/snips need care; not load-bearing.

## Personalization / image conversion

Text, six searchable bundled geometric icons, PNG/JPEG and simple SVG alter real Boolean engraving on the protected front board apron, away from peg sockets. Source preview plus actual checkerboard conversion; fit/crop, pan±25%, light/dark background removal, threshold1–254, grayscale relief, footprint4–7 mm, placement X±1.5/Y±2, Z rotation±180°, depth.4–.6. Engraving only: a raised mode is not falsely offered. Backing remains ≥1 mm, keep-in radius6.5 mm. Colour swatches change preview only; STL has no colours.

Raster method: normalize image≤500px, composite transparency against selected background, luminance-sample20×20 grid, threshold or invert grayscale into heights, triangulate each cell and close it with a backing. Reflect/position this cutter and **subtract it with Manifold**. Bright interior holes preserve original backing. This is a bounded interpolated height field, not exact vector tracing and **not automatic full3D reconstruction from one photo**. SVG simple filled shapes are safely rasterized at256px then follow the same path. Pixel-grid boundaries are interpolated, not an exact outline guarantee.

## STL integration

Real ASCII and binary STL parser, source 3D view/dimensions and explicit mm confirmation, Z/Y/−Z up-axis, proportional XY scale via footprint, independent Z engraving depth, rotation, centering and placement. Up-axis change requests reattachment. The accepted exact source mesh becomes a Boolean cutter in the board apron, visibly/measurably changing final STL; it is not simply re-exported or convex-hulled.

Supported input is intentionally bounded: **one convex closed outward-wound broad-flat-bottom solid**,≤1,500 triangles, .2–250 mm per axis,≤2 MB. Vertex welding1e−5 mm; reject open/nonmanifold, self-intersecting/touching, multiple components, concavity, overhangs, bad winding, degeneracy and invalid transforms with actionable errors. No arbitrary mesh repair or replacement. Use a simpler support-free convex mark if rejected. Imports cannot enter the socket keep-outs or cut through the backing.

## Privacy / saved designs / limits

All files processed locally; no upload. PNG/JPEG≤12MP and6000px per side; all inputs≤2MB. SVG≤2000 simple elements, no scripts, external refs, text or effects. Synthetic PNG/JPEG, hole-bearing SVG, ASCII wedge and binary gem are bundled with sample authorship notes. No personal input or raw third-party STL is committed. Desktop/phone pickers and drag/drop, replace/remove/reset, undo/redo, six local named saves and JSON save/open. Portable bounded image/mesh data survive round trips; missing image payload requires reattachment explicitly, not pretending a restored asset exists.

Heavy work runs in a bundled worker with debounce, request IDs, visible status/errors and current-state comparison. Preview and export share one checked result. Invalid or pending edits disable exports despite a visible last-good model. Worker failure requires reload and does not enable a stale download.

## Exports and verification

Binary STL per part, real connected card, clean de-tabbed plate and Everything ZIP containing card +all eight parts, portable JSON and assembly guide. Final X/Y/Z dimensions shown for selected export. No fake 3MF or preview-only geometry.

`validate.mjs` independently parses serialized float32 STL: byte length, finite/nondegenerate triangles, normals/winding,1e−5 welded edge incidence, positive volume of **each** component, expected component counts, bed alignment and bounds. All parts/card/plate checked. Manifold intersections verify all16 resting states, complete15 legal ring lift/translate/lower paths, peg insertion, stack headroom, bore clearance, plate nonoverlap, support-free sections and32 tab cuts releasing carrier+eight unharmed parts. Presets, silhouettes, range boundaries, min/max, image holes/grayscale and actual ASCII/binary-derived models undergo the same checks. Hole backing is probed in final Boolean geometry.

Production browser tests use actual file-picker PNG/JPEG/ASCII/binary uploads, actual STL/ZIP downloads, content/threshold/depth/scale/rotation/placement changes against no-import hashes, exact preview-export and JSON regeneration signatures, malformed files, reset/recovery, presets, text/icons/SVG, portable assets, undo/redo, local named saves, worker failure/stale gating, theme/focus, all views and320/390px touch orbit/pinch/export reachability. Reports and screenshots record performed tests. **Computational validity does not establish physical printability on every printer, adhesive strength, friction or a physically successful kit. No physical print was performed.**
