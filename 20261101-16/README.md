# Shed & Shuttle

A locally running React/Vite maker studio for a **five-part rigid-heddle weaving kit card**: personalized sole, two pierced warp anchors, a loose alternating-slot/eye heddle, and a narrow notched weft shuttle. Glue the anchors into four reference-derived sockets, thread external yarn, and hand-lift the heddle ±5 mm to alternate the shed. This is a genuinely different assembly from the prior circular/tablet looms; not a cosmetic variant. Shared studio infrastructure is adapted from earlier apps, with new model geometry and mechanism checks.

## Run and dependencies

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261101-16/`. React, Three.js/OrbitControls, Manifold WASM, fflate, bundled Fredoka/Rubik fonts. Geometry CSG, STL parsing and final manifold checks run in a dedicated local worker. Bounded detail, debounce, request IDs and exact-state keys disable stale/invalid export. Preview and binary STL use the same current mesh, shown by its signature. No API/CDN/server/key required. User files stay in the browser and are never uploaded.

## Reference, provenance and measured structure

White Cat Kit Card by **Mike Kasberg**, Printables 865769, [source and assembly information](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). License text is bundled; **raw reference STL is not**. See `reference-analysis.json`, complete `reference-measurements.json`, reproducible `reference-inspect.py`, and actual mesh cross-sections `evidence/reference-sections.png`.

Downloaded binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Source has 30,616 triangles, bounds approximately 179.820 × 178.020 × 3.190 mm and 27 edge-adjacent components; it is not watertight. STL contains no units; millimeters are assumed and corroborated by source sheet features. Actual 1.6 mm sheet and 4.50 × 1.700012 mm socket loops were measured in horizontal mesh sections. These, rather than a stock primitive or listing image, ground the reconstruction. Default sheet and 4.50 mm slot length are retained. Proposed .15 mm TOTAL slot allowance differs from measured ~.100012 mm surplus; adjustable .10–.30 mm and not a universal printer fit. New tongue length is 4.50 minus allowance; slot width is sheet plus allowance. Low .21/.22 mm source planes informed, but were not copied into, new .4–.6 mm removable runners. Source defects are not repaired/copied. All new parts are original Manifold solid reconstructions.

The read-only Keycap Studio README, App, styles, Viewer, imageTrace, worker, STL parser and export modules were inspected. Concrete patterns carried over: 374 px left rail, sticky brand/theme header, rounded white panels/lavender desk/coral selected keys, paired sliders/numbers, checkerboard conversion, source preview, current-build gating, per-part export, phone preview-first stacking. Reference projects and old daily_app remain unmodified.

## Parameters (millimeters unless noted)

- Card 126–170 wide × 140–196 high; sheet 1.6–2.4; spacings 3–4; runners .8–1.4 wide × .4–.6 high; carrier rails 2.4 wide. Each part is joined to the real connected card with four removable runners, twenty total.
- Anchor separation 56–76, anchor/heddle height 24–32, warp count **6/8/10 threads**, pitch 3.2–4, eyes Ø1.6–2, shuttle length 30–40 and web width 6. Sole width = separation + 14; depth = (count−1)×pitch + 14. Three sole profiles, three real model-thumbnail presets, bounded variation, undo/redo.
- Minimum heddle rib 1.2, minimum engraved backing 1.0. Unsafe packing, invalid counts, transforms or dimensions block export with recoverable errors.
- Heddle is intentionally hand-held, **not captive or guided**. Full-shed shuttle path is 6 mm toward either anchor, horizontal with thin sheet axis vertical. Do not force the shuttle through a partial shed. Ideal minimum outer-edge shed = 5×(1−9/(separation/2)); subtract .8 yarn diameter and sheet thickness to check passage. Physical sag, friction, hand force and tension are not simulated.

## Imports and personalization

Desktop/phone picker, one-file drag/drop, and downloadable synthetic examples for PNG, JPEG, simple SVG, ASCII and binary STL. Replace/remove/reset, orientation selection, explicit source dimensions and millimeter confirmation, source/final previews and transformation reset are implemented. Text and six searchable bundled vector marks become geometry, not textures.

**Image → geometry:** header/pixel limits first; PNG/JPEG downsampled locally to ≤500 px for portable storage, then a bounded **20×20** luminance grid with fit/cover crop, X/Y pan, light/dark background and threshold or grayscale heights. SVG is validated/rasterized locally, not executed. Grid vertices form a closed piecewise-linear height-field cutter Boolean-subtracted from sole. This is sampled 2D-to-relief, **not full 3D reconstruction from a photo or exact vector tracing**. Bright internal holes remain uncut backing; no hole-filling hull. Checkerboard shows actual removed background. Footprint 4–7, depth .4–.6, Z rotation ±180°, X±1.5/Y±2, radial keep-in 6.5. Raised marks intentionally omitted for flat support and continuous backing.

**STL → geometry:** ≤2 MB, ≤1,500 triangles, .2–250 per source axis, both binary and ASCII. Explicitly confirm mm because STL has no unit metadata. Up axis Z/Y/−Z is applied before attaching; changing it requests reattachment. Closed, consistently outward-wound single-component **convex broad-flat-bottom solids only**. Open/nonmanifold/concave/hollow/multibody/overhang inputs reject with guidance; no silent repair or hull replacement. Exact source triangles become a Boolean engraving cutter after proportional XY footprint, independent Z depth, rotation and placement. The source is not merely displayed or re-exported unchanged.

Files are limited to 16 bytes–2 MB; images ≤12 MP, ≤6,000 px side; SVG ≤2,000 simple elements and ≤2,048 declared dimensions. Unsafe external SVG resources/scripts reject. Portable JSON and up to six named local designs include bounded image/mesh payloads. Missing payloads require reattachment rather than pretending to restore. JSON limit 2 MB. No personal files are committed.

## Printing, assembly and export

Choose connected-card STL, individual clean parts, or Everything ZIP (all STLs + numbered instructions/current fit table). No fake 3MF or colour claim: STL holds neither units nor preview colours. Card and clean parts lie at Z=0; assembled/exploded views are explanations only. Per-part buttons, de-tabbed plate and isolated views use the same exact solids. Two end notches hold wound weft; blunt end prongs retain at least 1.2 mm width and actual overall length matches its control.

PLA/PETG, .16–.20 mm layers, 3 walls, 100% scale; supports not intended. Trial-print an anchor/sole before a full card. Snip twenty runners 1.6 mm outside edges; trim side nubs, preserve tongues/holes/slits. Dry-fit then glue four anchor seats and cure. Thread smooth **0.6–0.8 mm yarn** through matching anchor eyes and alternating heddle slots/eyes; tie with modest tension only. Lift loose heddle ±5 mm, carry shuttle on one side of heddle at full shed, alternate and beat lightly by hand. Yarn, threading needle, scissors and compatible adhesive are required. Small adult craft, not a child toy or load/tension-rated loom. See the in-app numbered instructions and ZIP ASSEMBLY.txt.

## Validation and limitations

`npm test` independently parses float32 exported STLs, welds at 1e−5 mm, requires every edge to have two opposite-directed incidents, validates normals, finite/nondegenerate triangles, positive per-component volume, exact mm bounds and all separate parts. Kernel checks test pairwise assembly, anchor insertion, slit/eye yarn routing at five heddle positions, shuttle sweeps at ±5 mm, four mating tongue probes, printable bed footprint, nonoverlapping card layout and twenty-cut release into five parts plus carrier. Defaults, three presets, all profiles, every parameter endpoint, combined extremes and image/STL variants are included. Invalid combinations must reject.

Browser scripts exercise real file inputs/downloads, compare signatures to exact JSON-regenerated geometry, parse ZIP contents, test malformed files and worker failures, round-trip assets/undo/named saves, themes, controls, views, 320/390 px layouts and real touch orbit/pinch. Reports/screenshots record observed results; see VALIDATION.md. **No physical printing, assembly, yarn tension, wear or weaving has been tested.** Computational clearances are not proof of physical performance.
