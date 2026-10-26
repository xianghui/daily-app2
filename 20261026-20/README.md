# Crossed Cadence

A local-browser parametric **crossed four-bar fidget studio**. Rock a floating thumb bridge while its two side arms counter-sweep. Unlike an ordinary parallelogram, the arms cross in plan without a joint at the crossover. Separate height layers prevent collision. Two printed sector stops bound the lower arm's sweep. This is a four-part, hardware-free assembly, **not print-in-place and not captive**.

## Run and export

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Vite base is `/daily-app2/20261026-20/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public publication uses the parent monorepo's root deployment, not the app's deployment.

Download the separated print-plate binary STL, each individual part, or the actual STL + assembly-notes ZIP. Every export uses the exact current worker-generated mesh shown by the preview, with a visible geometry fingerprint. Invalid edits, pending imports, missing units confirmation and failed generation disable all mesh exports; a last-good preview is explicitly labeled and cannot silently be exported. STL stores neither colours nor units.

## Mechanism and printing

1. Print all four parts flat at their exported Z=0, PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 20–35% infill. Supports and purchased hardware are not intended.
2. The **lower-crossarm** has a taller shoulder at its remote end. Put its base bore on the short LEFT base pivot.
3. Put **upper-crossarm** on the raised RIGHT pivot. Cross the arms in plan, lower underneath. The crossover is not connected.
4. Set **thumb-bridge** onto both remote pins. Start with the lower arm around 45° from the ground-pivot line. The bridge should slope across the crossed arms, not form a parallel rectangle.
5. Gently rock between the printed sector stops; do not try to force a full revolution. Hold level. Lift the bridge first, then each arm, to disassemble. No clips or glue are needed.

The base is 5 mm thick, the arms 3 mm, and their nominal floors are Z=5 and Z=9, leaving 1 mm between crossing bodies. The two remote shoulders support the bridge at Z=14. Assembled preview adds 0.01–0.02 mm axial display gaps only. Preview shows constrained kinematics, not friction, inertia or forces. Open pins are deliberately removable: **do not invert or shake**. Loose small parts, not a children's toy.

`Gentle Start` is a full-size calibration model using the same real bores/posts and wider gaps. Running gap is **per side**, not diametral: 0.3–0.6 mm is only an FDM starting range, not a universal tolerance. Deburr, remove elephant foot and calibrate before printing the tighter presets. If anything binds, stop; never force the linkage or stops.

## Controls and safe ranges

All physical dimensions are millimeters; angles are labeled degrees.

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 mm |
| Ground pivot spacing / bridge length | 22–26 mm |
| Both crossed arm lengths | 30–34 mm |
| Running clearance | 0.3–0.6 mm per side |
| Bridge thickness | 3–4 mm |
| Palm dimple depth | 0–0.6 mm |
| Nominal lower-arm preview sector | 35–60° |
| Import footprint, largest XY dimension | 4–7 mm |
| STL grip height, independently scaled Z | 0.6–5 mm |
| Import rotation | −180–180° |
| Offset X / Y | ±1.5 / ±2 mm |
| Image depth | 0.4–3 mm raised; 0.4–0.6 mm engraved |

Round, hexagonal and oval palm silhouettes; three real presets with geometry-built thumbnails; mechanically bounded variation; text relief and six searchable bundled icon marks. Palette swatches affect preview only, not STL.

## Image → actual geometry

Accepts actual **PNG/JPEG** and restricted simple **SVG** files. Files stay local. SVG allows only simple filled paths/shapes and no external resources, scripts, fonts, filters or references; it is rasterized locally at 256 px, not submitted to a service.

PNG/JPEG dimensions are checked in the file header before decoding. Limit 2 MB, 12 megapixels and 6,000 pixels per side. Sources are normalized to at most 500 px, then sampled onto a bounded **20×20 height grid**. Fit/contain versus cover/crop, crop offset, light-background removal or dark-background inversion, threshold 1–254, grayscale mode, raised/engraved style, physical footprint, depth, rotation and placement all change the exported solid.

Threshold mode gives foreground samples the selected height; grayscale uses `depth × (1 − luminance/255)`. Grid samples are triangulated with a continuous flat backing, then solid-unioned to or subtracted from the palm well by Manifold. Transparent pixels composite against the selected background. A checkerboard shows the actual retained samples beside the source image. White holes stay unraised/unengraved, **not through-holes**. The ring SVG fixture exercises this distinction. Interpolated boundary triangles mean this is coarse sampled relief, not exact vector tracing or a faithful photograph sculpture. **It is 2D-to-relief, not automatic reconstruction of a full 3D object from a single photograph.** Empty conversion is rejected.

Text and icons are rasterized locally into this same real geometry pipeline. No preview-only texture customization.

## STL → integrated grip

Accepts complete ASCII and binary `.stl`, 2 MB maximum, ≤1,500 triangles and 0.2–250 mm per source axis. Select Z-up, Y-up or upside-down before import. Source preview shows the **oriented source dimensions**, triangle count and encoding. Explicitly confirm millimeters: STL has no unit metadata. Set target XY footprint, independent Z height, Z rotation and XY placement; center/reset, replace, remove and restore defaults are available.

The parser welds equal vertices at 0.00001 mm, checks finite coordinates, nondegenerate triangles, exactly two oppositely directed faces per edge, connectedness, positive volume, triangle self-intersections and source dimensions. **Supported integration is intentionally restricted to one convex, outward-wound, closed, flat-bottom, overhang-free grip**, with bottom contact ≥25% of its XY rectangle and scaled XY thickness ≥1.2 mm. Concave, hollow, disconnected, inward, open, touching or nonmanifold sources are rejected with actionable feedback. They are never converted to a convex hull and no repair is claimed. Reorient or redesign in a mesh editor, then reattach.

The original supported mesh is normalized, transformed and embedded 0.15 mm into the palm-well floor, then **boolean-unioned** into the base. A separately displayed or unchanged re-exported mesh is not used as a substitute. Integration must yield exactly one solid. All transformed vertices must stay in the isolated 6.5 mm radius palm zone; imports cannot touch the linkage. Engraving preserves ≥3.6 mm of floor. Source and final previews remain distinct. Units confirmation and validation gate export.

## Studio, saving and privacy

Reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, inspected read-only. Concrete transferred patterns: 374 px scrollable left editor, compact sticky brand/theme header, labeled collapsible sections, slider + numeric mm pairs, keycap-like raised/pressed buttons, local import source/converted previews, large right-hand viewer, explicit build status and export notes. Lavender-grey #e7e9f1 desk, white panels, #1f2233 ink, muted labels, #e2557a coral. Locally bundled Fredoka/Rubik. Saved coherent dark theme, visible keyboard focus and reduced-motion support. On phones, preview/toolbar/dimensions/warnings/export come before full-width stacked controls; no narrow phone rail.

Assembled, exploded, palm-only, moving-parts and separated print-plate views; orbit, zoom and fit controls; see-through base explains fit. Motion changes preview position only, never print orientation. Named local designs (up to six), undo/redo and portable JSON save/open include bounded imported mesh/image payloads. Missing image payloads explicitly request reattachment; they are never falsely restored. Images are normalized PNG payloads, not remote URLs. Up-axis changes clear an STL and request reattachment. All generation, parsing, conversion, preview and export run locally. No APIs, paid services, uploads or CDN dependencies. Only synthetic fixtures are bundled, generated in-house and free to reuse: `public/samples/mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`.

## Architecture / dependencies

React + Vite; Three.js and OrbitControls; Manifold 3D WASM; fflate ZIP; Fontsource Fredoka/Rubik (SIL OFL). `geometry.js` is shared by Node tests and browser worker; `imports.js` is the strict source parser. Heavy parsing and solid operations run in `model.worker.js`, with bounded resolution, 100 ms debounce, generation IDs/current-state keys, stale-result guards and worker errors. Browser-native Canvas handles bounded image sampling. No remote dependencies at runtime.

## Verification

- `npm test`: independent binary STL checks, expected mm bounds, finite/nondegenerate faces, stored normal alignment, welded edge incidence and positive volume of **every** component; all presets and 64 extrema combinations, each part and float32-translated plate, image/STL-derived variants.
- Independent mechanical checks: complete nominal sector sampling with real Manifold intersections between every component pair; closed four-bar pin alignment, actual shoulder support, bridge-first lift-off release, printed sector stop interference beyond both limits, nonintersecting print layout and import keep-out isolation. Computation is distinct from physical behavior.
- `npm run test:browser`: real PNG/JPEG/ASCII/binary STL file selection and actual downloaded-STL parsing; default/import/threshold/depth/scale/rotate/place differences, exact preview/export fingerprints, portable JSON regeneration, preset and feature coverage, malformed/oversized/open/nonmanifold/unsupported imports, empty relief, recovery, undo/redo, named saves, ZIP extraction, worker failures and stale edits. Production assets are served at their real base path.
- Touch-enabled 390/320 px tests check preview-first order, overflow, reachable exports, file imports, actual touch orbit and pinch. Desktop layout/theme/focus/collapse and screenshot checks. Ring-hole geometry is probed in the final solid.

See `VALIDATION.md` and generated JSON reports for the actual outcomes. **No physical print, force, fatigue, wear or durability testing has been performed.** Computational geometry validity does not prove a successful physical print.
