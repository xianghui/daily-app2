# Lift & Lock — Drawbridge Kit Studio

A browser-based **ten-part bascule drawbridge kit-card generator**. Snip the carrier, assemble a rotating deck on a flat keyed axle, then lift the deck nose by hand. Unlike a static arch kit or a bead slider, this assembly has circular cheek bearings, fixed rectangular deck-lug interfaces, two transverse end retainers, and a front rest. No switches, magnets, metal pins, or hardware.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Base path `/daily-app2/20261028-21/`. Per-app `deploy` uses gh-pages; public combined publication uses the parent monorepo's deploy flow instead.

Local dependencies: React/Vite, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. No CDN imports or APIs. Modeling and topology checks run in a debounced module worker; stale request ids and exact current-state keys gate all exports. A last-good preview is clearly labelled and cannot be exported after invalid edits.

## Reference-first evidence

Searched local STL collections under `/Volumes/ExternalHD/3d_printing_apps/`, including slider, clicker, fabric and kit-card projects; read relevant READMEs. Local kit-card projects contain no suitable source STL. Keycap switch cavities and interlocking fabric links are not interchangeable flat-pack references.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card). Repository README, LICENSE and `kit_frame.scad` inspected; reuse terms **CC BY 4.0** ([licence](https://creativecommons.org/licenses/by/4.0/)).

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: 30,616 triangles, 1,530,884 bytes, 179.820 × 178.020 × 3.190 assumed mm. STL has no unit metadata; source sheet parameters corroborate mm.
- Welded-edge analysis finds two connected components and coplanar/nonmanifold source artifacts. This is an inspected **design reference**, not a source claimed to be repaired or printable by this app.
- Measured sheet planes: 0 and 1.6 mm; perimeter rail 1.6 mm. Thin bridge vertices at 0.21 and 0.22 mm. Actual mesh sections at Z 0.1, 0.5 and 1.59 mm were inspected; see `reference-sections.png` and `.svg`.
- Reconstructed sheet/carrier method: default sheet 1.6 mm, reinforced 2.4 mm runners, proposed 0.4–0.6 mm high cutter tabs rather than copying one-layer source bridges. Four spaced tabs per part, with functional slots excluded.
- **Original redesign:** drawbridge deck, lugs, cheeks, axle, rest and keepers. The source spacecraft is not reproduced. Axle/bearing dimensions, clearances and assembly are new engineering choices, not source measurements. No raw third-party mesh is redistributed.

`reference-analysis.json` records complete bounds, source, topology, measured planes and decisions. Reproduce with `python3 reference-analysis.py /path/to/reference.stl` (requires the existing JSON decision record). This app's topology is generated afresh with real Manifold boolean solids, never a convex hull substitution.

## Studio

Read-only visual/interaction reference: `keycap_generator2` README, styles, App, Viewer, worker, image tracing, STL and export modules. Adapted patterns: 374 px left controls, sticky compact brand and saved theme; collapsible sections; paired millimeter sliders/numbers; raised tactile controls and selected pink states; large right viewer and export below. Phone layout puts viewer, dimensions and downloads before stacked controls. Locally bundled rounded fonts, light lavender desk and coherent dark theme. Focus outlines and reduced-motion support.

Three real model-thumbnail presets, three deck nose profiles, bounded random variations, undo/redo, six local named designs, portable JSON save/open. Image payload normalized to at most 500 px per side; bounded STL vertex/index payload retained. Missing image payloads request reattachment; invalid JSON or mesh payloads block export. Preview colours are not STL colours.

Views: assembled, exploded (illustrative separation), connected card, loose bed-flat parts, and every isolated part. See-through cheeks explain axle fit. Deck lift slider positions the exact parts from 0–70° for inspection; it is not a force/friction simulation or a mechanical over-travel stop. All STL exports remain bed-flat, independent of preview pose.

## Parameters — all linear dimensions mm

| Control | Supported range |
|---|---|
| Card envelope | 180–220 × 230–260 |
| Deck reach / width | 44–60 / 26–34 |
| Pivot height above base | 20–26 |
| Sheet thickness | 1.6–2.4 |
| Fixed slot total growth | 0.15–0.45 |
| Bearing total diameter allowance | 0.4–0.8 |
| Carrier spacing bias | 4–7 |
| Breakaway tab width / height | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |
| Import footprint / STL height | 4–7 / 0.6–3 |
| Import X / Y placement | ±1.5 / ±2 |
| Z rotation | ±180 degrees |
| Raised image depth / engraved depth | 0.4–3 / 0.4–0.6 |

Impossible combinations, empty silhouettes and transformed features outside the 6.5 mm radius deck safe zone block generation. Carrier layout stays inside its declared envelope. Default card 200 × 250 mm may exceed a small printer's bed: export ten separate parts instead. Built-in mark produces total Z about 3.05 mm at default settings.

## Both local import workflows

Use the file picker on desktop or phone; drag/drop accepts one source. Samples are synthetic original fixtures, not private user files: PNG, JPEG, SVG ring with a hole, ASCII wedge and binary faceted grip. Replace, remove, reset transforms, reset image controls, and reset all are supported.

**PNG/JPEG → real deck geometry:** validate file signature and dimensions before decode; limit 2 MB, 12 MP, 6,000 px side. Fit/cover crop and ±25% XY crop shift; light/transparent background removal or dark inversion. Downsample to a bounded 20 × 20 luminance grid. Thresholded silhouettes or grayscale heights become a triangulated, closed height field; source pixels set actual raised/engraved heights after a robust union/subtraction. Bright holes remain unraised/unengraved on the solid backing. This is sampled 2D-to-relief conversion, **not reconstruction of a full 3D object from a photo**, nor exact vector tracing. Checkerboard shows the actual cutout sample grid. Threshold 1–254, style, depth, footprint, rotation and placement affect exported geometry. Text up to eight characters and six searchable bundled original filled icons use the same local conversion path.

**SVG:** simple paths/shapes only; preserve fill holes through browser rasterization at 256 px followed by the same relief grid. Scripts, external resources, references, effects and embedded images are rejected. Maximum 2,000 elements and 6,000 px dimensions. Flatten text to paths. Narrow details may be lost in the documented 20 × 20 sampling.

**ASCII/binary STL → integrated deck grip:** strict content/size/triangle checks, oriented source 3D preview and mm dimensions, positive volume, closed welded-edge manifold, outward winding, connectedness, self-intersection, convexity, broad flat bottom and no overhang footprint. Maximum 2 MB, 1,500 triangles, 0.2–250 mm per axis. Explicit mm confirmation is required because STL has no units. Choose Z/Y/−Z up before attaching; changing up-axis clears the asset and asks for reattachment. XY proportionally fits the physical footprint; Z independently fits grip height. Display both scale factors. Rotate, center/reset and offset. The **original accepted mesh** is solid-unioned into the protected deck medallion with overlap, not merely shown or unchanged re-exported. Concave, hollow, branchy, open/nonmanifold, disconnected, self-intersecting or overhanging inputs are explicitly unsupported; use a broad flat-bottom convex grip. No silent repair or convex-hull replacement.

No file is uploaded or sent to external services. User assets are only held in memory or explicitly saved local designs/JSON. Repository fixtures are synthetic.

## Printing / assembly

1. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls; bed-flat exports, no supports intended. Review sliced layers and elephant-foot settings.
2. Adult: snip 40 low bridges, trim attachment nubs without enlarging sockets. Small parts and cutters: adult desk miniature.
3. Calibrate a cheek/base fit and axle/bearing pair before a full card. Fixed slots grow by the displayed **total** allowance; circular bearing diameter is `hypot(6, sheet) + running allowance`. The flat axle turns on its corner envelope, so some clearance-related rattle is expected; no bearing-quality motion is claimed.
4. Fit both lugs into the four underside deck mortises. Thread axle through first loose cheek, both lug rectangular seats, second cheek. Keep the broad axle face in the lowered-deck orientation.
5. Seat cheek feet into the base, then seat the front rest. Center axle and insert two keeper keys shaft-first from above through end windows, outside cheeks. Broad key heads stay above the axle. Optional tiny glue dots only at loose **fixed** joints, never circular bearings.
6. Raise the deck nose by hand through 0–70°, lower onto the front rest. Not load-bearing; no latch/auto-return. Do not force fits or exceed inspected travel. Reverse unglued steps to disassemble.

Exports: connected-card STL, each of ten individual STLs, and Everything ZIP (card + ten parts + numbered instructions). Binary STL is geometry only. No fake 3MF or colour claim. Dimensions displayed for the current selected export. Default and all inputs share the exact model buffers with preview/export.

## Verification

`npm test` runs independent binary-STL checks: exact length, finite coordinates/normals, nondegenerate triangles, outward winding, positive volume **per component**, welded edge incidence two with opposite directions at 0.00001 mm tolerance, bounds and Z=0. Every edit also preflights each generated solid in the worker. Checks include default, every preset, min/max and mixed extremes, image threshold/height/engraving, accepted ASCII/binary grips and explicit rejection paths.

Independent Manifold tests intersect parts across 15 sampled lift positions, test insertion paths, keeper stop interference, tab removal (11 resulting components: carrier + ten parts), carrier containment and pairwise flat-part nonintersection. Real production-browser tests cover file pickers, malformed sources, geometry-changing imports/transforms, byte signatures, JSON/named restore, worker failure/recovery, stale export blocking, ZIP contents, all presets/marks/views, theme/focus, narrow phone layouts, touch orbit and pinch. Reports and screenshots are stored beside this README; see `VALIDATION.md` for completed results.

**Computational prototype, not physically print-tested.** Mesh and collision checks do not prove friction, strength, fatigue, printer fit or material behavior. Print calibration pieces first.
