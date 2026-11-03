# Parallel & Pan

A local React + Vite maker studio for an **eight-part Roberval-style balance kit card**. Snip 32 real runners, seat three sheet/socket joints, then assemble six M3 pivots. Two identical three-pivot beams keep both end posts vertical and their pans level in ideal rigid parallelogram motion. This is an educational physical assembly, not a calibrated weighing instrument, browser game or static STL re-export.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base: `/daily-app2/20261103-28/`. Per-app `deploy` uses gh-pages; public combined-site publication uses the **parent repository's** predeploy/deploy flow, not the per-app command. All dependencies, fonts and WASM are bundled locally. No CDN, server, API key or paid service.

## Reference-first evidence and attribution

Local candidates were inspected read-only first: keycap_generator2 switch template (switch cavity/stem, unsuitable for flat sheet kits), fidget_fabric_generator diamond link (8-mm-high interlocking fabric, unsuitable for sheet carrier/socket construction). Their actual dimensions, SHA-256 and component counts are in [reference-measurements.json](reference-measurements.json). Local project READMEs and Keycap Studio's App, Viewer, CSS, image tracing, STL, export and worker modules were inspected. Concrete visual patterns used: 374-px scrollable left rail; compact brand/theme header; rounded Fredoka/Rubik fonts; lavender desk, white panels, coral selection; raised buttons; paired numerical/sliding inputs; large right viewer; preview-first phone; checkerboard cutout; current-worker-result export gating. The reference projects and old daily_app tree were not changed.

**Actual design reference:** [White Cat Kit Card](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. See REFERENCE-LICENSE.txt and the freshly fetched REFERENCE-UPSTREAM.md. The downloaded binary STL has 30,616 triangles, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, dimensions **179.82 × 178.02 × 3.19 mm** (millimeters assumed; STL has no unit metadata). It has 27 edge-adjacent components and nonwatertight defects; it was not claimed repaired.

Actual Z=.10/.50/1.59-mm mesh sections were parsed and inspected: [section evidence](evidence/reference-sections.png). Measured source interfaces: **1.60-mm sheets**, **4.50 × 1.70-mm rectangular sockets**, low runner tops at **.21–.22 mm**. This original parametric CSG reconstruction uses that sheet/shoulder/socket and carrier structure, not cat geometry. Raw source STL is **not bundled**. Proposed tolerances are separate from measurements: slots are `(4.50 + clearance) × (sheet + clearance)`, default **4.65 × 1.75 mm**, with .10–.30-mm TOTAL clearance; runners are thicker .40–.60 mm. Eight new functional parts, equal-length links, six pivot axes and protected mast engravings are original redesigns. [reference-analysis.json](reference-analysis.json) maps measurements to parameters and discloses deviations. No endorsement or physical test claim.

## Parameters (all lengths mm)

| Parameter | Supported range |
|---|---|
| Card width / height | 180–240 / 280–360 |
| Center-to-end beam reach | 40–60 |
| Equal mast/post bore spacing | 26–38 |
| Pan width / base depth | 24–32 / 36–48 |
| Sheet thickness | 1.60–2.40 |
| M3 extra bore diameter | .20–.60 (TOTAL; bore 3.20–3.60) |
| Sheet socket extra clearance | .10–.30 TOTAL in both axes |
| Part spacing | 3–5 |
| Runner width / thickness | .80–1.20 / .40–.60 |

Base and pan outlines have soft-clipped, deep-chamfer and octagonal silhouettes. Three actual model-thumbnail presets and bounded variations change real geometry. All parts lie at Z=0 in exports. Card shelves prevent part overlaps; four horizontal runners connect each part to its own frame cell. Clean-part exports omit tabs entirely. All rows fit supported parameter combinations; invalid dimensions/transforms are rejected rather than clamped or silently repaired.

## Import and personalization

Everything is processed **locally in the browser**. No files are uploaded or saved in the repository. File pickers work on phones/desktops; desktop drop is available. Replace/remove, centered-transform reset, image-settings reset and built-in defaults remain available after errors. Original source preview and final exact model preview are separate.

- **PNG/JPEG**: real header/content verification, ≤2 MB, ≤12 MP, ≤6,000 px side before decoding. Downscale to ≤500 px portable payload, then sample a **20×20** luminance grid with contain/cover, ±25% crop shifts, light/transparent background removal or dark inversion. Threshold 1–254 creates a sampled silhouette relief; grayscale maps intensity to engraving depth .40–.60 mm. A closed height-field cutter is Boolean-subtracted from the mast's upward print face. Bright holes remain unengraved with continuous solid backing; this is sampled 2D-to-relief, **not full 3D reconstruction or exact vector tracing**. Checkerboard shows removed pixels. Changing pixels, threshold, depth, scale, rotation or placement changes exported triangles/volume. At least 1 mm backing remains.
- **Simple SVG**: ≤2 MB, ≤2,000 allowed elements, ≤6,000 px per declared side, local rasterization at 256 px. Filled paths, holes and basic shapes supported; external resources, scripts, referenced assets, embedded images, text and effects are rejected with guidance. Bundled searchable heart/sun/wave/star/circle/plus icons use the same local conversion, as does an up-to-eight-character text legend.
- **ASCII/binary STL**: ≤2 MB, ≤1,500 triangles, each dimension .20–250 mm. Strict facets/length, finite coordinates, nondegenerate triangles, edge incidence/opposite winding, single connected component, positive volume, triangle self-intersection and convex/support-free footprint checks. Accepts one outward-wound closed **convex, broad-flat-bottom solid**, including wedge/gem samples. Concave, hollow, branched, open, overlapping or unsupported overhanging inputs are **rejected**, never replaced with a convex hull or purportedly repaired. This is an intentionally bounded imported-solid engraving editor, not a universal mesh repairer.
- Source STL dimensions and format are shown. Explicit millimeter confirmation is mandatory. Select Z/Y/−Z up before attaching (orientation changes require reattachment). XY footprint is proportionally normalized to 4–7 mm; Z independently fits .40–.60 mm depth, with scale factors shown. Rotate ±180°, offset X ±1.5/Y ±2 mm; all cutter vertices must stay inside the 6.5-mm keep-in radius around mast apron `(0,12)`. The **actual accepted mesh**, not its bounds/hull, becomes a Boolean-subtracted engraving. Joints and moving interfaces are outside the keep-in area.

Only engraved marks are offered: raised features would violate constant sheet thickness and make the flat-card/shoulder contract less predictable. Preview colours are not present in STL. Synthetic CC0 PNG/JPEG/SVG/ASCII/binary fixtures and attribution are in public/samples; no personal or reference-model meshes are bundled.

## Editor / export architecture

`src/geometry.js` is shared by Node and the browser worker; `imports.js` strictly parses inputs; `model.worker.js` owns Manifold WASM. Heavy CSG and mesh checks are off the UI thread; bounded 64-sided curves, 20×20 image grids and 100-ms debounce keep work bounded. Request IDs and a full `[parameters,source,transforms]` state key suppress stale replies. Image conversion settings are gated separately. Invalid edits keep a labelled last-good preview **but disable all STL/ZIP exports**; worker-load errors also block export and require reload. There is no hidden stale-export override.

Preview and binary STL exports use the **same exact current mesh**. The UI exposes an FNV byte signature checked against actual downloads. Views: connected card, clean print plate, assembled, exploded, each isolated part, see-through mast, fit/top/front/zoom/orbit and touch pinch. Working-tilt slider inspects exact rigid-link positions at −10° to +10°; exploded gaps and omitted hardware are labelled. Tilt is inspection only; exports always preserve real bed-flat geometry, not assembled overlap.

Undo/redo keeps 35 bounded snapshots. Six named local designs and portable JSON store the bounded image and actual verified STL payloads; imported mesh topology is revalidated on open. Missing image payloads explicitly request reattachment. JSON ≤2 MB. Text/icon geometry is retained through its converted image payload. No missing-file restoration is pretended.

Download connected-card STL, eight individual clean-part STLs, the de-tabbed plate or **Everything ZIP** containing card+eight STLs, portable design JSON and numbered ASSEMBLY.txt with current fits. STL is geometry-only, not colour/3MF. No unsupported 3MF or multi-material claim.

## Printing and assembly

Print FLAT in PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls. No supports intended. Default connected card is **200 × 310 × 1.60 mm**; smaller printers should use clean parts, not scale the card (scaling changes fits). Calibrate using mast/base and bore samples first; fit values are printer/material dependent.

1. Snip 32 runners about 1.8 mm outside part rims; smooth stubs. Keep bore walls, slots and tongues intact. Discard carrier.
2. Dry fit and glue central mast into its base and each pan onto its post. Shoulders seat on top of the sheet; tongues end at the bottom. Straight sockets do not retain without adhesive. Cure fully.
3. Required hardware: **6 M3×16 bolts, 6 M3 locknuts, 18 M3 washers** nominal .5 mm, outer diameter ≤7 mm, plus compatible adhesive. Use shims if needed for .6-mm sheet-to-sheet gaps. Three washers per joint: two outside and one between sheets. Do not clamp the rotating plastic.
4. Fit both beam centers on the SAME front side of mast. Upper/lower beams are identical. Fit both posts on the next front layer at their corresponding beam ends. Six bolts complete two linked parallelograms. Set beams parallel before adjusting locknuts. No adhesive at pivots; hardware is not in STL.
5. Hand-guide gently within the checked **±10° arc**. There are **no hard stops**, self-centering spring or hardware-free option. Keep pans lightly loaded; this is not load-bearing or a calibrated scale. Real friction, mass balance, nut adjustment, base stability and manufacturing error affect operation. Small hardware/parts are not for children.

Equal center-to-end reaches and equal mast/post spacing are exact constraints. Center pivots at Z=30 and `30+spacing` mm. At tilt θ, end X is ±reach·cosθ and end lower Z is 30 ±reach·sinθ. Upper endpoints add spacing, keeping posts vertical. Pans seat 10 mm above upper end pivots. Mast, beams and end posts occupy separate Y layers with .6-mm face gaps. This geometric model is not a force, fatigue or friction simulation.

## Validation / limitations

See [VALIDATION.md](VALIDATION.md), reproducible scripts, JSON reports and screenshots in evidence/. `npm test` covers every preset, each scalar endpoint, all-minimum/all-maximum, silhouettes and image/STL models. Independent binary-STL checks require finite/nondegenerate outward faces, exact byte length, millimeter dimensions, two opposite-oriented incident faces per welded edge (1e−5-mm weld tolerance), positive volume **per connected component** and correct part counts. Card/clean/float32-translated plate exports are checked separately. Manifold reconstruction uses .001-mm modeling tolerance, not dropped degenerate faces.

Separate assembly checks verify one connected carrier, 32 accessible runner cuts yielding nine components (carrier + eight intact parts), no flat-layout overlap, bed support, card envelope, ≥1-mm backing, socket/shoulder fit and vertical insertion. Boolean collision tests at nine poses across ±10° check all 28 clean-part pairs. Independent axis calculations check all six pivots, layer gaps, equal links and horizontal pans. Imported image/STL min/max outputs receive the same checks. Probe volumes verify bright holes, actual dark engraving and continuous backing.

Browser tests select actual PNG/JPEG/ASCII/binary files, download and parse actual STLs, compare exact UI signatures and regenerate saved state in Node, vary threshold/depth/transforms/pixels, reject malformed/excessive/empty/open/nonmanifold/concave inputs, test remove/reset, all presets, text/icons/SVG, JSON/named designs, undo/redo, every ZIP part, theme/focus, worker failure/recovery and immediate stale gating. Production output is served under its real base prefix. Touch orbit/pinch and picker/export are checked at 320/390 px without overflow, with preview first and expanded instructions. The combined gallery is checked before publication.

**No physical printing, fit, friction, force, adhesive, fatigue, stability, weighing or accuracy test has been performed. Computational watertightness and geometric kinematics do not prove those properties.**

Dependencies: React/ReactDOM, Vite, Three.js + OrbitControls, Manifold (Apache-2.0), fflate, locally bundled Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright is a test-only dependency. Reused local studio infrastructure is adapted from earlier Daily App Lab work; this app's balance geometry, placements and mechanical checks are new.
