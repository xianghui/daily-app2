# Tilt & Louver

A local-first **seven-part rotating-louver kit-card generator**. Snip 28 low tabs, lay a cheek down, insert three blade pivots and two tie plates, then lower the other cheek over the five ends. Stand upright and turn the three slats independently. Unlike prior stand/crate/aircraft cards, this kit uses rectangular sheet pivots in circular running-clearance bores and independent slat rotation, with two structural tie plates. No switches, purchased hardware, fabricated motion or reskinned source parts.

## Run

Requires Node 22.12+ and npm. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261028-11/`. Per-app deploy scripts exist, but publication uses the **root monorepo `deploy/` flow**, never this app's standalone deployment.

## Inspected STL reference, attribution and deviations

Local STL files under `/Volumes/ExternalHD/3d_printing_apps/` were enumerated first. The kit_card_generator, kit_card_generator_animals and kit_card_generator_robot projects contain no STL reference assets. Local switch/socket, telescoping ghost, and repeated fabric-link models are not appropriate sheet/card construction references. The local kit-card README was inspected; no local STL was invented or borrowed from an unrelated mechanism.

We downloaded and parsed [Mike Kasberg's White Cat Kit Card, Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), corroborated with its [repository](https://github.com/mkasberg/white-cat-kit-card), README, `kit_frame.scad`, `white-cat-kit-card.scad` and **CC BY 4.0** LICENSE. Attribution/reuse terms: <https://creativecommons.org/licenses/by/4.0/>. The source mesh is not redistributed. This app reconstructs a reinforced carrier and original screen parts; the White Cat artistic subject and its part geometry are not reproduced.

- Download URL, identifier, SHA-256, triangle/component/edge measurements, unit assumption and concrete mapping: **reference-analysis.json**. Reproduce with `python3 reference-analysis.py /path/to/downloaded.stl`.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Actual binary mesh: 30,616 triangles, 1,530,884 bytes, **179.819997 × 178.019994 × 3.189999 mm**, two edge-adjacency components after 0.00001 mm welding. STL has no units; mm is assumed and corroborated by source SCAD dimensions.
- Measured sheet planes Z=0/1.6 mm and frame cross-section X=0/1.6 mm; low bridge vertex levels .21/.22 mm. Representative actual-mesh sections at Z=.1/.5/1.59 mm were inspected; see **reference-sections.svg/png**. Bridge sections disappear above their thin levels while full-thickness parts/rails remain.
- Source has nonmanifold/coplanar artifacts. It is used as a design reference only, **not claimed repaired, directly exported, or physically tested**. New solids are independently constructed and checked.
- Measured sheet 1.6 mm → default 1.6 mm, range 1.6–2.4 mm. Measured 1.6 mm perimeter → redesigned 2.4 mm rail and three crossrunners. Thin source bridges → proposed .4–.6 mm-high, .8–1.4 mm-wide accessible tabs, four per part. These are deliberate changes, not measurements falsely ascribed to the source.
- Original 4 × H sheet pivots use circular bores `hypot(4,H) + runningAllowance`. Clear width 42–52 mm, screen height 72–86 mm, slat depth 12–15 mm. Blade axes at Z=18, B/2, B−18 mm. Two 8 mm-wide tie tongues fit rectangular `(8+fit) × (H+fit)` mortises. All interfaces and fits are newly designed, not copied from the reference.

The read-only **Keycap Studio** visual/interaction reference was inspected (`README.md`, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL, image and export modules). Concrete adopted studio patterns: 374 px scrollable left rail, sticky compact header/theme, labelled collapsible sections, paired range/numeric mm inputs, pink keycap-like segmented selections, checkerboard conversion preview, imported-base units/orientation/placement editor, worker validation, named designs and geometry-sharing export. No keycap sockets, dependencies or Git history copied wholesale. Reusable daily-app2 local infrastructure was adapted, with a newly written louver model and independent mechanical checks. Dependencies were installed fresh.

## Controls and ranges (mm unless marked)

| Parameter | Supported range |
| --- | --- |
| Card width × height | 160–190 × 200–240 |
| Clear screen width | 42–52 |
| Screen height | 72–86 |
| Blade depth | 12–15 |
| Panel thickness H | 1.6–2.4 |
| Circular bore TOTAL allowance over pivot diagonal | .3–.7 |
| Tie mortise TOTAL allowance | .15–.45 |
| Breakaway tab width / height | .8–1.4 / .4–.6 |
| Row vertical shift | 0–1 |
| Sill dimple depth | 0–.4 |
| Imported footprint / STL height | 4–7 / .6–3 |
| Import rotation / X / Y | ±180° / ±1.5 / ±2 |
| Raised image depth / engraved depth | .4–3 / .4–.6 |

Three actual presets have generated-model thumbnails. Arched/bevel/square cheek outlines alter printable geometry. Bounded variation, undo/redo, six local named designs, portable JSON save/open, text and six searchable bundled SVG icons are implemented. Theme is saved independently. Preview colors are not STL colors.

## Image → real geometry

File picker (including phones), drag/drop, replacement/removal/reset and bundled examples support **PNG/JPEG/simple SVG**. PNG/JPEG content headers are checked before decode: max 2 MB, 12 MP, 6,000 px per side. Portable image is normalized locally to at most 500 px per side; SVG allows at most 2,000 safe primitive elements, no scripts/external resources/text/effects, rasterized to 256 px.

Conversion: composite onto chosen light/dark background, fit or cover/crop with ±25% pan, sample a **20 × 20 luminance grid**. Threshold maps darker samples to a selected constant height; grayscale maps darkness continuously to height. Boundary vertices are connected into a closed solid relief with continuous backing. Background/threshold/depth/size/rotation/placement affect actual triangles. Checkerboard shows the sampled cutout alongside the original image. This is **2D-to-relief, not full 3D reconstruction from a photo, and not exact traced-outline extrusion**. Bright holes remain unraised/unengraved inside the continuous backing; ring-hole probes verify this behavior. Fine artwork below the sample grid is intentionally lost. Text/icons use the same documented conversion.

Manifold unions or subtracts the result from a recessed protected sill zone (6.5 mm radius). Raised relief is solid-unioned, not overlapping shells. Engraving preserves at least **0.8 mm floor** at minimum sheet thickness (1.6 − .2 recess − .6 engraving). Imports cannot reach tie tongues or pivots. Moving bodies are never fused. Off-zone or excessive geometry blocks export.

## STL → real geometry

Binary/ASCII files are parsed in the worker. **2 MB / 1,500 triangles**, one outward-facing closed solid, finite coordinates, nondegenerate triangles, two opposite-directed incident triangles per welded edge, connectedness, positive volume and pairwise triangle-intersection checks. Source dimensions must each be .2–250 mm. Explicit source millimeter confirmation is required; STL contains no unit metadata. Source-format, triangle count and oriented dimensions are shown beside a source 3D preview.

Choose Z-up, Y-up (rotate +90° X), or −Z-up before attachment. Normalize XY proportionally to footprint and Z independently to requested height; rotate around Z and translate X/Y. Original mesh is boolean-unioned into the sill with .15 mm overlap. No convex-hull replacement, automatic repair or silent removal of concavities. The integration contract **only supports convex solids with broad flat bottom (at least 25% footprint), no overhanging projected points**, cavities, branches or disconnected shells. Unsupported concave meshes are explicitly rejected. Bottom-hull computation is used only to validate bed contact, never to replace source geometry. An XY feature floor of 1.2 mm is checked after scaling. Reset transforms/replacement/removal are recoverable.

JSON/named designs contain bounded portable image or verified mesh payloads, not personal paths. Missing image payloads request reattachment; wrong-app/invalid payloads block export. All user processing stays in the browser; **no uploads, API keys, cloud or CDN runtime imports**. Repository fixtures are synthetic, not personal files.

## Views/export and consistency

Assembled, exploded, connected-card, de-tabbed plate and every isolated part use the same geometry. Orbit/zoom/fit works with pointer and touch. The angle slider shows centered ideal slat motion only; actual rectangular pivots have positional play, not synchronized motion, force or gravity simulation. See-through solid is a preview aid. Color/pose never change exported print orientation.

Heavy operations and input mesh parsing run in a Web Worker with local Manifold WASM; resolution and file complexity are bounded, builds are debounced and generation IDs discard stale results. Invalid edits, failed file imports, unconfirmed units, pending conversions and worker errors disable exports. A last-good preview is explicitly labelled and cannot be exported as if current. Current-state key includes parameters, source and transforms. Preview/export share exact checked geometry, with a fingerprint compared to real downloaded bytes and JSON regeneration in tests.

Binary STL per part, connected card STL and Everything ZIP (8 STL files including card + 7 parts, numbered ASSEMBLY.txt) are implemented. All exports are Z=0 bed-flat, including individual pieces. ZIP is not 3MF. No STL color claims. Final X/Y/Z dimensions are displayed for selected export.

## Printing/assembly and limits

PLA/PETG, .4 mm nozzle, .2 mm layers, three walls, no supports intended. Sheet thickness is rigid, not a compliant hinge. Cut low tabs **2 mm outside each nonfunctional edge**, trim nubs, deburr elephant foot. Calibration: print one cheek, blade and tie first; adjust pivot allowance separately from tie mortises in .05 mm steps. Proposed allowances depend on printer/material. Bores exceed rectangular pivot diagonal so slats can make full revolutions; 1 mm axial blade-shoulder gap and .8 mm tip protrusion are deliberate. Tabs never land on pivot ends or tongues.

1. Lay left cheek on its outside face.
2. Insert one blade pivot per circular hole, and sill/header tongues in rectangular mortises.
3. Lower right cheek axially over all five ends; no impossible snap/deformation path.
4. Stand upright and rotate slats independently. The two ties use calibrated friction, **not a positive latch**; hold both cheeks when carrying. If loose, tune fit, or optionally glue tie tongues ONLY. Do not glue pivots. Reverse to disassemble.

Parts are **not print-in-place** and joints are not locked/inverted-retained. This is a miniature decorative kit, not a load-bearing safety screen or toy. No purchased hardware is required; optional glue is not included. No physical print/fit/assembly/force/durability test has been performed.

## Validation

`npm test` runs independent serialized binary-STL checks: exact size, finite triangles, no degeneracy, unit normals consistent with winding, per-component positive volume, millimeter bounds, bed-flat Z, welded (1e−5 mm) edge incidence and opposite directions. Every exported part/card is checked. Manifold checks one connected solid each and final mesh incidence runs in the worker for every build.

Mechanical checks use true solid intersection: assembled separation, full-revolution independent and simultaneous blade sweeps, symmetric axial cheek insertion path, every part contained in the card, no flat part overlaps, envelope compliance and **28 actual cutter booleans releasing seven parts + carrier**. Independent numerical envelope check includes worst possible rectangular-pivot play, not only centered render positions. 14 parameter cases (presets/extremes/cross-extremes) and 30 source-derived cases are checked. These are computational tests, not evidence of a physical print.

Production-browser tests: `node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node studio-layout-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`. Reports/screenshots are saved alongside the app. Real PNG/JPEG/ASCII/binary file imports and downloaded meshes are compared with no-import and parameter changes; include broken/nonmanifold/concave/excessive input, empty images, transforms, reset, JSON/named round trips, ZIP contents, worker abort/reload, stale conversion, 320/390 px phone orbit/pinch/exports, themes/focus/reduced motion and all views. Root gallery/staging and public-site scripts validate the deployed paths separately.

Dependencies: React + Vite, Three.js/OrbitControls, Manifold (Apache-2.0), fflate (MIT), local Fredoka/Rubik fonts via Fontsource (SIL OFL). No remote runtime dependencies. Synthetic bundled samples: mark.png, waves.jpg, ring.svg, wedge-ascii.stl and gem-binary.stl, generated for local import testing. Built-in six SVG marks are original simple paths in `src/icons.js`.
