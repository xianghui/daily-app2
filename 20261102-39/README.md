# Chord Click

A local React + Vite studio for a **three-key MX-switch fingertip fidget**. Alternate three independent keys, identify them by one/two/three recessed tactile bars, and customize actual key spacing, cap silhouette, grip recesses, mechanical fits and a protected maker-art apron. This is not a kit card or a print-in-place spring: **three external MX-style mechanical switches are required**. Switch friction fit, sound and actuation are not physically tested.

## Run / export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261102-39/`. `predeploy` is exactly `npm run build`; individual `deploy` is `gh-pages -d dist`, with gh-pages locally installed. The public combined site is published through the parent monorepo's root deploy flow instead. No APIs, keys, backend or remote CDN. React, Vite, Three.js, Manifold WASM, fflate, Fredoka/Rubik OFL fonts are bundled locally. Icons are six original simple SVG marks. Shared bounded import/editor utilities were adapted from prior daily studios, while the physical model is new.

Prominent binary-STL export downloads all five parts in separated bed-flat print positions. Individual buttons export palm base, three distinct keys and a socket coupon. ZIP includes each STL, portable JSON and numbered `ASSEMBLY.txt`. Keys are **roof-down** in every printable export, not exported in assembled overlap. STL has no unit/colour metadata: import into the slicer at **100% millimeters**. Preview colours are not filament assignments.

## Reference-first evidence

Actual local geometry reference, read-only:
`/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl`.

SHA-256: `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`.

The binary STL was parsed with trimesh, not inferred from screenshots: **944 triangles, three separate watertight components**, overall stacked source dimensions approximately **15.2 × 15.2 × 43.1 mm**. Source placements in Z are template staging, not a printed assembly. STL has no units; mm assumed and corroborated by the source project's README. Reproduce with `/tmp/daily-stl-venv/bin/python reference-measure.py` (or any Python environment with trimesh, numpy, matplotlib). Exact bounds, component volumes, cross-section loops and mapping decisions are in `reference-analysis.json`; actual measured XY sections are pictured in `evidence/reference-sections.png`.

| Interface | Measured mesh | Adaptation |
|---|---|---|
| Lower socket cutter | 14 × 14 × 9 mm | Analytic blind square socket; +0–0.4 mm total width fit allowance, 2 mm floor |
| Upper cap cavity | 15.2 × 15.2 × ~6.1 mm | Same nominal rectangular cutter, cap roof 2.9 mm before identification grooves |
| Stem | ~5.7 mm diameter × 6 mm tall | Analytic circular stem, attached 0.1 mm above cap rim |
| Cross bore | 4.2 mm overall span, 1.35 mm arm width | Both dimensions get proposed −0.1–0.2 mm total-width adjustment |

Source cylinder has ~5.6988 × 5.6994 mm tessellated XY bounds. New reconstruction uses exact Ø5.7 with 48 segments; not claimed vertex-identical. No convex hull replacement. **Redistribution rights to the raw local source were not established, so no raw third-party template is bundled.** Only an original documented parametric reconstruction of measured generic interfaces is distributed. These measurements do not certify compatibility with all MX variants.

Before geometry selection, both galleries were inspected; no existing gallery app used actual MX switch sockets. This is a new three-switch interaction rather than a reskin of the many hardware-free mechanisms or sheet kits. Visual reference files inspected read-only: Keycap Studio README, styles, App, Viewer, image trace, worker, STL and export modules. Concrete patterns used: 374 px scrollable left rail, sticky compact brand/theme header, collapsible sections, paired numeric/sliders, tactile pressed selection controls, model thumbnails, checkerboard source conversion, right gradient viewer and phone preview-first stack. No source Git history, deploy scripts or dependency tree were copied.

## Parameters (millimeters unless noted)

| Parameter | Supported range |
|---|---|
| Triangular key-centre spacing | 30–38 |
| Key width | 22–26 |
| Outer wall allowance | 4–6 |
| Cap running radial clearance | 0.35–0.7 |
| Socket extra total width | 0–0.4 |
| Cross bore extra total width | −0.1–0.2 |
| Side grip recess | 0–0.8 |
| Silhouettes | soft rectangle, square, clipped corners |

Three true presets generate thumbnails in workers. Body height 20 mm; socket floor 2 mm; cap cavity floor 11 mm; cap height 9 mm. Minimum cap wall 3.4 mm, recessed-bar roof backing 2.4 mm, minimum between-cavity web 2.6 mm across supported extrema. The cap cavity, stem, bores, grip cuts and imports are genuine Manifold solid operations. All exported parts are each one closed solid, never interpenetrating shells presented as a union.

**Preview assumption, not measured source/hardware:** cap rim rests 6.6 mm above the 11 mm cavity floor and travels 4 mm. Slider moves three printed keys through that illustrative stroke; actual switches are not modeled or simulated. Lowest assumed rim is 13.6 mm, leaving 2.6 mm floor clearance. Assembled/exploded positions are explanatory only. Isolated parts, print plate, top/fit, orbit/zoom, see-through base and touch gestures are available. Export always uses actual checked print orientation, never these estimates.

## Image → real engraved geometry

Desktop/phone file picker and drop zone accept PNG, JPEG and simple SVG; bundled synthetic samples exercise every path. Files are processed **locally**, never uploaded. 2 MB/file; PNG/JPEG content headers checked, ≤12 million pixels, ≤6000 px per side. Decode normalizes to ≤500 px side. SVG allows only simple filled shapes, ≤2000 elements, ≤6000 px dimension; scripts, external resources, references and effects rejected. SVG rasterizes locally at 256 px; path holes survive as bright regions.

A **20 × 20 sampled grayscale height field** is triangulated into a closed volume and Boolean-subtracted from the front apron. Threshold 1–254 selects dark pixels; grayscale relief varies depth continuously. This is **2D-to-relief/silhouette conversion, not automatic reconstruction of a full 3D object from one photo**. It is not exact vector contour tracing: pixel boundaries become piecewise-linear ramps. Bright/transparent holes retain full backing. Source preview plus the actual thresholded cutout/height grid are shown on checkerboards. Light/transparent or inverted dark background; contain/cover, ±25% crop shifts; depth 0.4–0.6 mm; footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm. Text (≤8 characters) and searchable bundled SVG icons go through the same real geometry workflow. Use bold art with features at least 0.6 mm; fine details may be impractical at the bounded grid/nozzle size. Raised art is intentionally not offered.

## STL → real apron engraving

ASCII and binary STL are strictly parsed in a worker: 40 bytes–2 MB, ≤1500 triangles, finite dimensions 0.2–250 mm per axis. Validate positive volume, consistent winding, no degenerate faces, exactly two opposite directed triangles per welded edge (1e−5 mm), one connected solid, and triangle self-intersections. This implementation intentionally supports **convex solids with a broad flat bottom and no footprint overhang** only. It checks convexity and explicitly rejects concave/hollow, open, touching, nonmanifold, disconnected or unsupported sources; **never silently repairs or replaces them with a hull**.

Choose Z/Y/−Z up before attaching, explicitly confirm coordinates mean mm, then scale XY proportionally to 4–7 mm footprint and independently scale Z to 0.4–0.6 mm engraving depth. Rotate, center, offset and reset. Source dimensions, scale factors and actual source mesh preview are visible. The exact transformed supported mesh is Boolean-subtracted into the apron, measurably changing exported vertices/volume. Radial keep-in 6.5 mm keeps artwork away from sockets/moving keys. Replace/remove/reset restores actual built-ins. Missing or malformed imports block current exports instead of quietly exporting an older mesh.

## Local designs, worker & state integrity

Undo/redo stores bounded parameter/import states. Six named local designs and JSON save/open carry normalized image data and validated mesh payloads (2 MB JSON limit); no fake restoration from missing file paths. Missing image data explicitly requests reattachment. Arbitrary saved meshes are revalidated. Raw personal inputs are never added to this repository. Heavy geometry/import parsing runs in the Manifold Web Worker, resolution is bounded, edits debounced, generation IDs and exact current-state keys guard stale responses. Build/loading/error feedback and export blocking protect against invalid edits and worker failures. Preview and downloads share the same final valid arrays; visible fingerprint is checked against downloads and Node regeneration.

## Printing / assembly / limitations

Read `ASSEMBLY.txt`, also included in ZIP and studio. PLA/PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls. Print palm/coupon flat and keys roof-down. The identification grooves create short **0.7 mm first-layer bridges** (not a claim of zero overhang); supports are not intended. Inspect your slicer, calibrate first-layer flow, and clean bores carefully. Do not force fragile stem walls.

Required hardware: **three MX-style switches**. Print coupon and key-one first; tune socket/cross extra width in 0.05 mm steps. Switchs' projecting electrical pins must not bottom against the 2 mm blind floor: use pinless craft switches or appropriate switches with unused pins removed if acceptable. Do not assume a switch variant fits solely because labeled MX. Switch housing and cap use calibrated **friction seating**, not guaranteed positive retention. No glue/magnets/fasteners/electronics required; no hardware-free spring substitute is claimed. Pull keys upward for removal.

## Validation performed

`npm test` checks 31 generated variants: all presets, every silhouette at representative combined extrema, every parameter endpoint, image threshold/relief/hole outputs and transformed ASCII/binary import outputs. Independent binary STL parser checks byte length, finite/nondegenerate faces, stored normalized normals, outward winding, per-component positive volume, 1e−5 mm welded two-face edge incidence, expected part counts and mm bounds. Each part and translated combined print plate are checked independently. Kernel tests check key/base and independent key/key collisions through **41 assumed 4 mm stroke positions**, top-down insertion/removal, separated print plate, floor/socket probes, and support footprints after the documented 0.7 mm initial groove bridges. Every live edit also receives closed-solid validation in the worker.

Production-browser scripts exercise actual file-picker imports, downloaded STL and ZIP content parsing, parameter/threshold/pixel/scale/placement differences, malformed/empty/excessive input, unit confirmation, transformed source axes, per-part outputs, source removal/reset, presets, text/icons/SVG holes, JSON/named-design round trips, undo/redo, stale-result gating, worker abort/recovery, saved dark theme, accessible focus, collapse states, 320/390px no-overflow layouts and real CDP touch orbit/pinch. See generated validation JSON and screenshots for observed results; scripts must pass before publication. No physical printing, switch fitting/retention/force, sound, spring fatigue or long-term wear tests have been performed. Computational geometry checks do not establish those properties.
