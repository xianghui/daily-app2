# Fold Atlas

A local React + Vite parametric **six-facet Miura-inspired map-fold fidget**. Hold the round landing and gently fold and unfurl six raised parallelogram facets on a continuous TPU web. The two rows reverse their oblique crease direction. This is a two-axis, distributed origami-inspired folding gesture, not another concertina, a free hinge, or a snap-through diaphragm. It does not promise exact rigid-origami mobility, full closure or bistability.

## Run / export

`npm install`, `npm run dev`, `npm run predeploy`. Base URL: `/daily-app2/20261023-23/`. Individual `deploy` uses gh-pages; publication uses the parent monorepo deploy flow. `npm test` runs independent geometry/mechanism checks. Three.js, Manifold WASM, React and all generator/export dependencies are bundled locally. No CDN, API, account or key is required. Bounded geometry generation and STL parsing run in a worker.

The worker generates actual unioned CSG solids. Preview and binary STL export consume the same final vertex/index arrays. Export dimensions are X × Y × Z in **millimeters**. One connected part: object and print layout are the same undeformed body, with no pretend motion simulation. Individual-body and complete-body exports are available; a ZIP would duplicate this single required body and is not offered. STL has no colour or unit metadata; preview palette changes do not change geometry.

## Design direction

https://vaseverse.org/ was consulted as a studio UX reference: model-dominant canvas, compact parameter rail, quiet ivory/clay palette, grouped controls, persistent export, touch-accessible imports and collapsible mobile controls. Original name, text, geometry and synthetic samples; no reference branding, assets or source code were copied. No large marketing hero or dashboard chrome.

## Dimensions / presets

- Facet width: 12–18 mm, row height: 12–20 mm. Three columns by two rows.
- Alternating row skew: 0.35 × facet width (4.2–6.3 mm); oblique direction changes at the middle row.
- Continuous crease web: 0.8–1.2 mm thick, **TPU 95A only**.
- Raised facet total thickness: 2.4–3.6 mm, not additional height above the web.
- Perpendicular clear corridor between raised facets: 2.4–3.6 mm. Facets are true polygon insets by half the corridor width, solid-unioned onto the uninterrupted flat sheet.
- Palm dimple depth: 0–0.6 mm. Palm landing 4 mm thick, recessed floor 3.2 mm. A 6 mm-wide stem anchors the lower middle facet without crossing an internal crease.
- Exact no-import envelope: X = 3.35 × facet width, Y = 30 + 2 × row height; Z depends on grip height, at least 4 mm.
- Paper Trail: tall narrow, thin-web calibration design; Pocket Map: balanced middle ranges; Broad Fold: wide squat, thicker webs and narrower corridors. Thumbnails render actual meshes. Variations select only supported ranges. These alter facet aspect, crease angle, stiffness and relief rather than only preview colour.

## Image workflow

Choose/drop **PNG or JPEG** (2 MB; ≤12 megapixels; ≤6,000 px per side). Header dimensions are checked before decoding. Source and exact conversion previews are shown. Images are normalized to at most 500 px on their longest side and then sampled on a bounded **20 × 20 luminance grid**; transparent pixels composite onto white. Fit/contain or fill/crop plus ±25% crop shifts determine sampling. Threshold 1–254 selects dark pixels; relief mode maps darkness continuously to height. Depth is 0.4–3 mm. This is **2D-to-height relief, not reconstruction of a full 3D object from one photograph**.

A closed height-field slab has a continuous 0.4 mm backing, welded sidewalls and bottom, and is solid-unioned 0.15 mm into the 3.2 mm palm floor. The top interpolates neighboring grid samples; threshold boundaries therefore have sloped transitions, not exact vector outlines. All-white/empty conversion is rejected. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm are bounded by a 6.5 mm safe radius. Images affect actual exported material, not a preview decal.

## STL workflow / deliberate supported subset

Binary and ASCII **.stl**: 2 MB maximum, **1,500 triangles**, each source dimension 0.2–250 mm. Confirm that source coordinates are millimeters before integration; STL cannot tell us their units. Source mesh preview, dimensions and format appear alongside the final model. XY scale fits the 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Rotate around Z, translate or center/reset. Arbitrary tilt is intentionally not supported: broad flat bases must already face down in source Z.

Only one **convex, closed, connected, outward-wound, non-self-intersecting solid with a broad flat bottom** is supported. The bottom contact polygon must cover ≥25% of its XY bounding rectangle and contain every projected source vertex. Minimum fitted XY span 1.2 mm. Invalid topology, degenerate triangles, concavity, excessive complexity, overhangs, missing bottom contact or unsafe transforms are rejected with feedback; **no automatic repair is claimed or performed**. Normalize/decimate, orient and repair in an external modeler before retrying.

The accepted mesh is transformed, embedded into the palm floor and unioned using Manifold CSG. Final integration must form exactly one connected closed positive-volume solid. Interpenetrating decorative shells are never exported as a fake union. The source affects both preview and export and cannot enter the folding sheet or crease corridors. Built-in raised oval returns when imports are removed. Source and final previews remain available; replacement, removal, reset and invalid-file recovery are supported.

## Local privacy / persistence

Files are processed locally in the browser worker/canvas; no user uploads or remote conversion services. The repository includes only original synthetic PNG, JPEG, ASCII wedge and binary gem fixtures, available via Try buttons and download links (no third-party attribution required). Explicit Save JSON embeds bounded mesh data or a normalized image payload plus settings. Open JSON revalidates payloads; absent image data requests original-file reattachment rather than pretending it was restored. Undo/redo includes modeling parameters and import settings. Uploaded personal files are not persisted to the repository.

## Printing / calibration / limitations

**TPU 95A only**, 0.4 mm nozzle, 0.15–0.2 mm layers; flat Z=0 face on the bed, solid webs. No support, hardware, mating fits, release, retaining parts or assembly. Do not substitute brittle PLA for the crease webs. Print Paper Trail as the full-size material/extrusion trial first. Ensure the slicer fills the 0.8 mm web continuously, with no missing paths. There is no universal force or tolerance setting.

Start with tiny **3° local folds** then gently open. The raised-facet relief biases bending into the thinner corridors; TPU and print settings govern the actual feel. Do not sharply crease, fold fully closed, pull apart, or force the coupled crease network. Stop at whitening, layer separation, permanent set or poor return. No hard travel stop or full-fold range is specified.

Runtime checks validate supported ranges, import content/topology, final manifold edges and winding, finite nondegenerate triangles, positive volume and one connected component. Offline tests cover all 64 parameter-range corners, presets and deterministic variations, exported-STL parsing/bounds/volume/component checks, CSG material probes in all six facets and seven crease corridors, air probes above the thin webs, exact import isolation, and a conservative adjacent-face 5° fold envelope. Every one of the seven shared crease pairs is also CSG-tested for local opposite ±5° rotations of the raised facets about the web midplane. This is a **local adjacent-facet check**, not a compatible global fold solver, full-sheet self-contact check, FEA, measured return-force test, safe-travel/fatigue certification or physical print test. A kinematic web-strain estimate is reported without a material limit claim.

See VALIDATION.md and machine-readable reports for observed results. **No physical print or folding test has been performed.**
