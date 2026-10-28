# Trestle & Table

A local React + Vite maker studio for an original **five-part miniature picnic-table kit card**. Snip twenty real breakaway tabs, stand two transverse trestles, lower two benches onto shoulder-supported tongues, then lower the tabletop. Six mortises locate the boards; **adhesive is required at all six joints after calibrated dry-fit**. This is a stationary decorative craft miniature, not human furniture or a load-rated product. No physical print or adhesive test has been performed.

## Run and checks

```sh
npm install
npm run dev
npm test
node browser-validation.mjs
npm run predeploy
```

`browser-validation.mjs` defaults to port5196 at `/daily-app2/20261029-6/`; override `TEST_URL` to test a production server. `npm run deploy` exists for per-app compliance, but public monorepo deployment uses the root `npm run predeploy` and `npm run deploy` only. Vite base is `/daily-app2/20261029-6/`.

## Reference-first evidence and attribution

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Their clicker templates, slider ghosts and chain links provide incompatible interfaces; the three local kit-card project trees contain no STL reference. Read their README, and inspected the primary visual reference `keycap_generator2` README, styles, App, Viewer, worker, import and export modules without modifying it.

Construction reference: **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Download URL, SHA-256, mesh dimensions, connected components, sections and measured decisions are in `reference-analysis.json`; inspection is reproducible with `reference-inspect.py` (Python trimesh/numpy/matplotlib). No raw source STL, spacecraft artwork or private mesh is bundled. The reference was inspected, not repaired or passed off as a printable new output; source coplanar artifacts mean it is not watertight.

Actual source measurements: 30616 facets, 179.8199968 ×178.0199938 ×3.1899996mm; dominant sheet at Z0/1.6mm; 1.6mm perimeter rail; thin bridge elevations0.21–0.22mm. Trimesh finds27 edge-connected components: two substantive shells and25 two-facet artifacts. The mesh sections in `evidence/reference-sections.png` show full-height rails and low runners. Source OpenSCAD corroborates1.6mm sheet/rail and0.2mm bridge-layer intent.

**Mapping:** retain1.6mm sheet default; reinforce carrier rails to2.4mm; redesign low bridge connections to accessible0.4–0.6mm-thick,0.8–1.4mm-wide snip tabs. Table geometry, mortises, shoulders, ground arch, board silhouettes, engagement and proposed fit allowances are original reconstructions. No source switch socket is imposed on this kit. No endorsement is implied. CC BY4.0 attribution and change notice travel in the assembly ZIP.

## Parameters and assembly

All physical dimensions are millimeters. Card200–240 ×110–150; table length60–80, top width28–36, height30–40; seat width10–14; bench shoulder height50–60% of table height; tongue width6–9; sheet1.6–2.4; total mortise XY allowance0.10–0.35; part spacing4–7; tabs0.8–1.4 wide ×0.4–0.6 thick; dimple depth0–0.4. Continuous carrier rails2.4mm. Trestles stand at±0.30×table length. Bench inner edges clear the tabletop by6mm. Tongues engage sheet−0.15mm and finish below board tops. Bench mortise walls below0.8mm, insufficient card bays or invalid/out-of-range/nonfinite inputs block export.

Three real geometry presets (Meadow, Long Lunch, Pocket Park), rounded/chamfered/stepped board edges and bounded variations. Shoulder stops bear the boards; tongues guide both XY directions. Bench-first then tabletop vertical assembly paths are computationally checked. Use temporary hand/scrap supports while dry-fitting; adhesive and squareness are essential to avoid racking. No captive/friction-fit retention is promised. No moving-joint controls or fake motion.

Print flat with the relief up, PLA/PETG,0.4mm nozzle,0.2mm layers, three walls; no supports intended. Adult: snip tabs outside part edges and trim elephant foot, not functional interfaces. Calibrate one trestle and a bench mortise strip first; total clearance is printer/material dependent. Start0.20mm and adjust in0.05mm increments. Small parts, cutters and adhesive: adult craft only. No strength, stability, fatigue or physical print guarantees.

## Image/SVG → actual geometry

PNG/JPEG and simple filled SVG via native file picker or single-file drag/drop. Files ≤2MB. Actual raster headers checked before decoding:≤12MP and6000px per side; normalize to≤500px. SVG≤2000 simple path/shape elements,≤6000px side; reject scripts, effects, fonts, embedded images and external resources, then rasterize locally to256px. Text and six searchable bundled original icons use the same route.

Fit/contain or cover/crop, crop shifts±25%, light-background removal or dark inversion, threshold1–254, grayscale relief, physical footprint4–7mm, depth0.4–3mm, rotation±180°, X±1.5/Y±2mm, raised or engraved (0.4–0.6mm). A source preview and checkerboard cutout display the exact20×20 sampled grid. Dark samples become heights; threshold chooses raised samples, grayscale gives continuous heights. Grid triangulation forms a closed bounded heightfield with a backing, then Manifold unions/subtracts it into the central tabletop medallion. Holes remain **unraised/unengraved regions over the solid backing**, not through-holes or exact vector traces. This is2D-to-relief conversion, **not full3D reconstruction from one photo**. Empty silhouettes and transformations leaving a6.5mm-radius protected region fail explicitly. The central landing is well clear of both mortises, so personalization cannot alter fits. Minimum worst-case engraved floor0.8mm.

## STL → integrated tabletop grip

Actual binary and ASCII parsing, complete facets and exact binary byte counts;≤1500 triangles,≤2MB; each dimension0.2–250mm. Confirm millimeters explicitly: STL has no units. Choose Z-up/Y-up/−Z-up before attaching; changing axis clears the mesh and requests reattachment. Display oriented source dimensions, topology, triangle count, unit assumptions and actual scale factors. XY proportional scale to4–7mm footprint, independent Z0.6–3mm height, rotation/XY placement, reset, replace/remove and source preview.

Supported contract: **one closed outward-wound convex solid with broad flat Z-bottom (≥25% footprint) and no overhang projections**. Weld equal positions at1e−5mm; check finite coordinates, nondegenerate facets, two oppositely directed faces per edge, single connected component, positive volume, triangle self-intersections, convexity, base and coordinate limits. Concavities/cavities, branches, disconnected, inward, open/nonmanifold and unsupported meshes are explicitly rejected. There is no silent repair or convex-hull substitution; the original triangles enter Manifold solid union with0.15mm overlap into the medallion. Bottom polygon convex hull is used only to validate bed-contact support, never to replace geometry. Scale/placement and imported shape measurably survive in exported triangles.

## Studio, persistence, privacy and exports

374px left scrollable controls; large right live Three.js/OrbitControls viewer. Phone preview/export first, controls stacked. Local Fredoka/Rubik, lavender desk/white panels/coral tactile controls, saved coherent dark theme, focus rings,44px targets, collapsible sections, reduced-motion support. Assembled/exploded/connected-card/de-tabbed/isolated views; optional transparent trestles and board insertion pose are explicitly preview-only. STL remains bed-flat and colour-free.

Manifold WASM runs in a worker;100ms debounce, sequence guards, request keys and pending conversion/import states prevent stale exports. A final finite/volume/winding/edge preflight runs for each edit. Preview and export consume the same exact current result; a stale last-valid preview is labelled and all exports disabled on invalid edits. Reload recovers worker loading failure. No server, CDN, API key, paid service or file uploads. Fetches are limited to bundled assets/samples and local saved data URLs.

Undo/redo35 states; up to six local named designs; portable JSON≤2MB includes normalized PNG payload or verified bounded indexed STL. Restores revalidate STL topology; missing images request reattachment, never fake restoration. Local storage failures show JSON-backup guidance. Personal files are not in this repository. Bundled PNG/JPEG/SVG/ASCII/binary samples are synthetic CC0 fixtures.

Prominent connected-card binary STL, each of five parts, and Everything ZIP with six STLs plus numbered assembly/attribution instructions. Single card is genuinely unioned into one closed solid by twenty low removable tabs. De-tabbed parts remain separate and all sit on Z0 for printing. JSON and STL exports are real downloads. STL does not carry colour. No3MF claim.

## Validation and dependencies

`validate.mjs` independently parses float32 STL output: bytes/faces, finite coordinates, nondegenerate faces, unit normals/winding, welded edge incidence, positive volume per connected component, Euler characteristic, bounds and bed orientation. Tests defaults, all presets, min/max and24 mixed extrema, plus image threshold/grayscale/engraved and both imported STL fixtures at supported preset/extreme dimensions. Manifold intersections test each assembled pair, board insertion paths, six shoulder stops, XY guides, ground contacts, carrier bounds, flat part nonintersection and20 cutters releasing five parts plus one connected carrier without part damage. Unsupported combinations must be rejected, not exported.

Browser tests use actual picker uploads and downloads, compare mesh fingerprints against displayed geometry and a regenerated saved JSON, run the same mesh/assembly tests on imported outputs, and validate per-part/ZIP contents. They exercise pixel/threshold/depth/crop/transform changes, replace/remove/reset, history, portable/local saves, text/icons/SVG, invalid sources, worker failure/reload, phone layout and touch orbit/pinch. Reports `geometry-validation.json`, `browser-validation.json`; screenshots under `evidence/`. Production tests use the built worker/WASM under the real base path. Computational checks **are not physical-print testing**.

Dependencies: React/ReactDOM, Vite React plugin, Three.js (MIT), Manifold (Apache2), fflate (MIT), Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for verification. Studio infrastructure adapted from existing Daily Object Lab; original reference-inspired UI patterns include tactile segmented controls, local-source comparison, protected medallion integration, worker status, separate print views and export panel. No reference Git history/dependencies copied wholesale.
