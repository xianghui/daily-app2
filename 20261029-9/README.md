# Chord & Pluck — miniature cord-harp kit-card studio

Three bed-flat parts: a personalized plinth, inclined-neck pierced harp frame and forked threading shuttle. Twelve real low breakaway runners join the pieces to one connected card. Glue the frame's two tongues into the plinth, then lace 4–8 separate loose soft-cord loops through paired anchors. Gently brush or pluck: this is a light-touch craft miniature, **not a tuned musical instrument or tension-rated frame**. Soft cord (0.4–0.8 mm) and adhesive required; no printed hardware. Keep cords just straight, never taut; stop if the frame bends. Adult craft, not a child toy.

## Run and dependencies

```sh
npm install
npm run dev
npm test
node extra-validation.mjs
npm run predeploy
TEST_URL=http://127.0.0.1:5199/daily-app2/20261029-9/ node browser-validation.mjs
```

React + Vite, Three.js / OrbitControls, Manifold WASM in a Web Worker, fflate ZIP and locally bundled Fontsource Fredoka/Rubik (OFL). No server, API, keys, paid service or CDN imports. Base `/daily-app2/20261029-9/`. App has gh-pages and per-app predeploy/deploy; publication uses the root combined deploy flow.

## Reference evidence and attribution

First searched actual STL paths in `/Volumes/ExternalHD/3d_printing_apps/`: keycap/clicker sockets, telescoping/spring bodies and fabric links are inappropriate sheet/card interfaces. Inspected local keycap studio and relevant slider/fabric READMEs; did not impose keycap sockets on a harp. For sheet/card construction, inspected the publicly accessible **White Cat Kit Card**, **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, [license](https://creativecommons.org/licenses/by/4.0/). Source README, LICENSE and `kit_frame.scad` inspected. No fan-art shapes, raw source STL or arbitrary private files redistributed; no endorsement implied.

Actual binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, **179.819997 × 178.019994 × 3.190000 mm** assumed from source SCAD. STL has no unit metadata. Splitting by edge adjacency: **27 components** (two substantive shells, 25 two-triangle coplanar artifacts). Source is not watertight: used solely as a construction reference, never claimed repaired or re-exported. Parsed actual geometry and measured sections Z=0.1/0.5/1.59 mm; see `reference-analysis.json`, `reference-inspect.py`, `reference-measure.py` and `evidence/reference-sections.png`. Raw source stays in `/tmp`, not the repository. The inspection script tries the public download if absent; the public URL returned HTTP 403 during this run, so it re-inspected a previously downloaded cached STL with the exact recorded SHA-256. This retrieval limitation is not a claim of a new successful network download.

**Measured vs proposed:** source sheet planes 0/1.6 mm → retained default sheet 1.6 mm. Measured carrier ray at Y=100/Z=0.5 gives 1.6 mm rail → redesigned 2.4 mm rails. Source low bridge elevations 0.21–0.22 mm → proposed 0.4–0.6 mm snip runners, width 0.8–1.4 mm. Harp aperture, inclined neck, paired cord anchors, forked shuttle and twin tongue interface are original reconstructions, **not source-measured interfaces**; proposed slot allowance 0.10–0.35 mm requires calibration. Real Manifold solid union/difference, never a convex-hull substitution.

Read-only visual study: `keycap_generator2/README.md`, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker/export/STL and imageTrace modules. Concrete adaptation: 374 px left rail and right gradient viewer, compact sticky brand, collapsible sections, paired millimeter range/number inputs, lavender desk #e7e9f1, white panels, dark ink #1f2233, coral #e2557a, pressed pink tactile buttons, bundled rounded fonts, source/final previews, saved dark theme, phone preview-first stacking. Shared daily-studio UI/import/history/export infrastructure reused, **not the hull geometry**. Both galleries checked: the new inclined-neck loose-cord plucking interaction is not an aircraft, ship, loom or previous moving linkage reskin.

## Parametric model / fit

All physical dimensions in **mm**; cord count is dimensionless and integral.

| Parameter | Supported range |
|---|---|
| Card width × height | 180–220 × 130–180 |
| Plinth width / depth | 64–78 / fixed 44 |
| Harp width | 40–54; plinth must be at least 10 wider |
| Short-side height / neck rise | 32–44 / 8–16 |
| Cord count / hole diameter | 4–8 / 1.6–2.2 |
| Foot tongue width | 6–8 |
| Sheet / total mating allowance | 1.6–2.4 / 0.10–0.35 |
| Part spacing | 4–7 |
| Tab width / thickness | 0.8–1.4 / 0.4–0.6 |
| Medallion dimples | 0–0.4 depth |

Five-millimeter side rails, seven-millimeter bottom rail, six-millimeter inclined upper rail. Hole centers along X from −width/2+8 to +width/2−8; bottom Y=3.5, top Y=shortHeight+neckRise*(X/width+0.5)−3. Top holes retain >1.6 mm edge material throughout supported ranges; nearest holes retain >1.2 mm web. Tongues at X=±0.32*width engage sheet−0.15 deep. Plinth seats width=sheet+total allowance, not per-side clearance. The third rear slit stores the removable shuttle with its fork tips on the desk: no captive-retention claim. Harp tongue joints **require adhesive** after calibration. Cord front paths in assembled view are illustrative lines only, **not STL geometry, a force simulation or a pitch prediction**.

Three real presets with generated model thumbnails, three plinth silhouettes, bounded variation, undo/redo, six local named designs and portable JSON. Connected card, assembled, exploded, de-tabbed plate and isolated-part views use identical printable meshes with preview-only rigid transforms. Numeric envelope/packing failures disable export.

## Image / text / icon / SVG workflow

Picker and drag/drop accept real PNG/JPEG ≤2 MB, ≤12 MP, ≤6,000 pixels per side. Header checks before decoding; portable normalization ≤500 px. Simple SVG ≤2 MB/2,000 elements is locally rasterized at 256 px; external resources, scripts, filters, embedded images and references rejected. Bundle includes synthetic PNG/JPEG/SVG samples.

**2D-to-relief, not full 3D reconstruction from a photo.** Fit/contain or crop/cover with ±25% shifts; remove light/transparent or invert dark backgrounds. Sample luminance to 20×20, threshold 1–254 or grayscale height, triangulate a closed bounded height field, then solid-union/engrave it into the front medallion. Original and checkerboard cutout previews show the actual sampled data. Bright holes stay unraised/unengraved over a continuous solid backing; this is sampled relief, not exact vector outline tracing. Raised depth 0.4–3; engraving 0.4–0.6 preserves ≥0.8 floor. Eight-character text and six searchable bundled icon shapes use the same real geometry conversion, not textures.

Import footprint 4–7, rotation ±180°, X ±1.5 / Y ±2. Final feature must fit radius 6.5 safe zone, outside frame/cord/tool interfaces; errors block export, not silent clipping. Replace/remove and reset controls provided.

## STL imported-grip editor

ASCII and binary STL ≤2 MB / 1,500 triangles, every axis 0.2–250 mm. Explicit mm confirmation required; choose Z-up, Y-up or inverted Z before attachment. Source 3D preview, measured oriented dimensions, triangle count, scale factors and format shown. Rotate, scale footprint/height independently, center/place/reset, replace/remove. Original mesh integrated into plinth with a real solid union and 0.15 mm embed: it is **not unchanged re-export or visual shell overlap**. Source geometry must be a single outward-wound closed convex flat-bottom solid with broad bed contact and no overhang projection. Concave/hollow/disconnected/open/self-intersecting/nonmanifold/unsupported inputs rejected with guidance; no automatic repair or hull replacement. Convex-boundary calculation in the input checker is only for bed-contact validation; it never replaces the imported solid.

Checks: file content, byte/triangle limits, finite coordinates, bounds, degenerate faces, welded edge incidence/winding, single positive-volume component, triangle intersection, convexity and broad flat bed support. XY below 1.2 mm rejected. Source/final previews, axis and source scale shown; unsupported arbitrary sculptures should be simplified/reoriented in a modeler. Invalid settings or unconfirmed units keep exports disabled even when an older valid preview is visible.

## Privacy, persistence and responsiveness

User files stay entirely in the browser; never uploaded or committed. Bounded image/mesh payloads embedded in JSON/local named saves, not filesystem paths. Missing image payload asks for reattachment; restored STL payload is reparsed. Undo/redo restores portable state. Personal uploaded files are never repository fixtures. Worker owns WASM/CSG and final-mesh preflight, 100 ms debounce, sequence/state-key stale guards; conversion/parse pending and worker errors block export. The sampled relief resolution is bounded. All dependencies/fonts/WASM bundled locally.

## Exports and printing

Prominent current binary STL, each of card/plinth/frame/shuttle and Everything ZIP with all four meshes plus numbered `ASSEMBLY.txt`. Every print mesh lies at Z=0 in real print orientation. No generic ZIP mislabeled 3MF; STL contains no colours. Preview/export share the exact current validated result and byte fingerprint. Use mm, 100%, PLA/PETG, 0.4 nozzle/0.2 layers, three walls, no supports intended. Calibrate joints and holes, snip 12 runners with flush cutters, deburr, dry-fit, glue frame, cure, then thread separate soft cords loosely. Small parts/loops and cutters: adult supervision and storage away from children/pets.

## Validation scope

`npm test` checks default/all presets, min/max and mixed extrema; repeats for image threshold/grayscale/engraved and both STL fixtures. Independent binary-STL length/normals/finite vertices/areas/mm bounds, 1e−5 mm welded closed edge incidence, opposite winding, adjacency and positive volume **per component**. Tests each part and connected card. Geometry errors block invalid combinations instead of declaring them printable.

`collisionCheck` checks every assembled pair and sampled vertical frame/shuttle insertion/removal, frame shoulder/side guides, actual empty cord bores/aperture, part separation on card, all twelve accessible snips without part damage, and four components after snips (carrier + three usable parts). Actual circle-hole probes preserve image ring holes. Browser scripts use real file pickers/downloads, compare byte fingerprints against UI and regenerated JSON state, check preset/custom/import changes, errors/recovery/worker failures, every part and ZIP mesh, portable JSON/local saves/history, desktop and 320/390 px touch orbit/pinch, saved theme, collapse/focus and no overflow. Run against production bundle under real base prefix before publication; reports/screenshots saved alongside.

**Not physically printed or tension/force/fatigue/acoustic/stability tested.** Mesh/manifold and insertion checks establish computational geometry only. Calibrate fits, use very loose soft cord and treat the result as an experimental craft miniature.
