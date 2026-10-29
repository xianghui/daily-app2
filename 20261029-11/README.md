# Paddle & Turn

A local browser **nine-piece paddle-wheel kit-card generator**. Snip a marked foot, U yoke, saddle-ended axle, two pierced cheeks and four shouldered paddles from a connected card. Assemble and adhesive-fix the stationary joints, then gently turn the wheel around its fixed rectangular printed axle. No bearings, fasteners or external hardware; adhesive is required. This is a dry tabletop miniature, not a fluid turbine or a free-spin claim.

## Run and dependencies

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the app at `/daily-app2/20261029-11/`. The per-app deploy script is `gh-pages -d dist`; actual public publication uses the **parent monorepo root** predeploy/deploy flow.

React/Vite, Three.js/OrbitControls, Manifold WASM, fflate and Fontsource Fredoka/Rubik are installed and bundled locally. No CDN, API, paid service, account or remote generation. A debounced, numbered Web Worker performs STL parsing and solid generation. Preview and export use the same current checked mesh. Current-state keys and request IDs block exports during conversion, errors, invalid settings, pending/stale builds or worker failure; the last-good preview is never silently exported.

## Reference-first evidence

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were inventoried first, including keycap/clicker templates, slider assemblies, linked fabric and spring examples. Relevant READMEs distinguish their particular sockets, interlocks and spring interactions; they are not interchangeable sheet kit templates. They remain read-only.

Selected construction reference: **[White Cat Kit Card, Mike Kasberg](https://github.com/mkasberg/white-cat-kit-card)**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Actual binary STL `white-cat-kit-card_kit.stl` was parsed anew from the existing hash-verified external cache `/tmp/cradle-reference.stl`. The public source URL, cached source README/license and source SCAD were inspected. No fresh download is claimed and no raw reference mesh/artwork is redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; **179.820 × 178.020 × 3.190 mm** overall. STL itself has no units; source SCAD's `thickness = 1.6` and frame dimensions corroborate millimeters.
- 27 edge-connected components: two substantial groups of 3,746 / 26,820 faces and 25 two-face artifacts. The source is **not watertight**; it was inspected for construction, not repaired or used as this app's output.
- Actual sections at Z=.10/.50/1.59 mm are in `evidence/reference-sections.png`. They reveal segmented sheet carriers, pierced disks and slot-assembled strips. Sheet planes at 0/1.6 mm, carrier rail measured at Y=100/Z=.5 is 1.600 mm; low connection elevations include .21/.22 mm.
- **Measured → retained:** 1.6 mm default sheet. **Measured → redesigned:** 1.6 mm rails become 2.4 mm rails; thin source connections become proposed .4–.6 mm high × .8–1.4 mm wide accessible runners.
- **Original reconstruction:** new wheel proportions, four cardinal paddle slots, bearing holes, fixed saddle axle, U yoke, foot and all interfaces. Source pierced-disk/strip construction informs the sheet assembly, not a source silhouette reskin. Proposed total tongue-slot allowance .10–.35 mm is not a measured source fit.
- Bearing diameter is explicitly **hypot(4 mm, sheet thickness) + .4–.8 mm diametral allowance**, ensuring the round rotating bore clears the rectangular axle's corners throughout rotation. Wheel axial allowance is .4–.8 mm **per side**. These are printer/material-dependent proposals, not universal tolerances.
- A 1 mm shallow saddle cut at each axle end allows glue seating on the yoke without protrusions outside the shaft's 4 mm rectangular envelope. The shaft can therefore be threaded through both round bores before mounting. Tongues finish .15 mm below outer cheek/foot surfaces.

`reference-analysis.json`, `reference-inspect.py` and `reference-measure.py` record/reproduce parsing, sections, source hash and measurement/design distinctions. Raw source stays outside the repository. Attribution does not imply endorsement.

The current visual/interaction reference is read-only **Keycap Studio** (`keycap_generator2`): inspected README, styles, App, Viewer, worker, STL/export modules, imported-base path and image tracing. Concrete patterns used: 374 px scrollable LEFT rail, sticky compact brand/theme header, raised tactile controls, soft pink selections, paired number/range inputs, collapsible groups, checkerboard cutout/source editor and RIGHT gradient 3D viewer. Phone preview, dimensions/warnings/export precede stacked controls. Shared local studio/import/verification infrastructure was adapted from the preceding app; this nine-part wheel model, assembly transforms and mechanical checks are new. No switch sockets, source Git history or entire reference dependency tree were copied.

## Parameters

All lengths are **millimeters**; preview wheel rotation is degrees.

| Parameter | Supported range |
|---|---|
| Card width / height | 210–240 / 190–230 |
| Wheel inner width | 18–26 |
| Yoke height | 42–54 |
| Cheek diameter | 36–44 |
| Foot tongue width | 5–6 |
| Sheet thickness | 1.6–2.4 |
| Total tongue-slot allowance | .10–.35 |
| Bearing diametral allowance | .4–.8 |
| Axial allowance, per side | .4–.8 |
| Part spacing | 4–7 |
| Breakaway runner width / height | .8–1.4 / .4–.6 |
| Medallion dimples | 0–.4 |

Three model-thumbnail presets: **Rose Rotor**, **Broad Paddle**, **Pocket Wheel**. Round-clipped, chamfered and deep-clipped foot silhouettes alter actual geometry. Bounded variations change all real parameters. Out-of-range settings and insufficient card packing space are blocked, never clipped or silently corrected. Card bounds are checked after solid generation. Defaults are 220 × 210 mm; the actual Z envelope includes the raised foot mark and is shown explicitly. Check your printer bed or export separate parts.

## Image → real geometry

File picker on desktop/phone, desktop drop, or synthetic sample buttons accept **PNG/JPEG and simple SVG**. Files 16 bytes–2 MB; raster ≤12 megapixels and ≤6,000 px per side, normalized to ≤500 px for bounded portable storage. SVG supports local simple filled paths/shapes, ≤2,000 elements; scripts, external references, filters and unsupported markup are rejected before local rasterization.

Images are fit or cropped to a **20 × 20 grid**. Alpha composites against selected light/dark background. Weighted luminance becomes either a thresholded silhouette or grayscale height map; a checkerboard displays the actual conversion. This is **2D-to-relief, not automatic full 3D reconstruction from one photo**. The resulting triangulated closed heightfield is boolean-unioned into, or subtracted from, the foot medallion. Grid transitions are slopes, not exact vector tracing. Bright/transparent holes remain unraised/unengraved over continuous solid backing; they are not through-holes in the foot. Real ring-hole probes check this distinction in the final solid.

Controls: fit/cover, ±25% crop shift, background selection, threshold 1–254, raised depth .4–3 mm or engraving .4–.6 mm, footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm. The protected medallion radius is 6.5 mm. Out-of-zone transforms fail; engraving retains at least .8 mm backing. Text up to eight characters and six searchable bundled icons use the same real local geometry route. Replace/remove/reset and built-in defaults are available. Preview colours are not STL colours.

## STL → real geometry

Both **ASCII and binary STL** are content-parsed, welded and verified in the worker. Source dimensions, format, triangle count and a separate source 3D preview are shown. Explicitly confirm that coordinates represent **millimeters**, since STL has no unit metadata. Choose Z up, Y up (+90° X) or inverted Z before attaching. Changing that selector requests reattachment rather than pretending a missing source was transformed.

Supported contract: **one outward-wound connected closed convex solid with a broad flat bottom and no unsupported overhangs**, ≤1,500 triangles, .2–250 mm on each source axis. Malformed/truncated, nonfinite, degenerate, open/nonmanifold, concave, hollow, branching, disconnected, inverted and unsupported geometry is rejected with actionable feedback. No repair or convex-hull substitution. A hull is used only to validate bottom projection, never to replace the user's mesh.

Actual source triangles become a Manifold solid, scale proportionally in XY to a 4–7 mm footprint and independently in Z to .6–3 mm, then rotate/translate and union into the foot with .15 mm embed. Both scale factors are shown. Features thinner than 1.2 mm after XY fitting or outside the safe zone fail. Bearings, paddle joints and foot seats remain protected. Imports measurably change the exported foot/card; they are not unchanged mesh re-exports or preview textures.

All files stay in this browser. No personal input files are saved in this repository or sent to a service. Bundled synthetic PNG/JPEG/SVG, ASCII wedge and binary gem are original CC0 fixtures; use picker or sample buttons.

## Assembly / printing / tactile interaction

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls; print bed-flat, marks up, no supports intended. Inspect slicer paths. First print a cheek, paddle and axle as a calibration set, plus foot/yoke if needed. Adjust allowance in .05–.1 mm steps for your printer/material.
2. Snip **36 low runners** and trim residual nubs/elephant foot. Nine separate parts plus one connected carrier remain. Paddle tabs land on wide body shoulders, away from narrow functional tongues. Tests check cutter access without part damage.
3. Stand and **glue** the U yoke in both foot slots; shoulders stop on the foot, tongues .15 mm recessed. Let cure square.
4. Lay one cheek flat, insert all four paddles, then lower the other cheek over their four opposite tongues. Wide shoulders establish inner width. Dry-fit then **glue all eight tongue seats**. Keep glue out of bearing holes and allow to cure.
5. Thread the axle axially through both center bores **before mounting**. Lower the cured wheel/axle vertically onto the yoke; its 1 mm-deep saddle seats sit on both crowns. **Glue only the stationary axle ends**; mask bearings and cure fully. These joints depend on adhesive, not claimed captive friction fits.
6. Gently finger-turn a paddle. The fixed axle blocks radial release; yoke sides bound axial drift. Bearing play, gravity sag and friction are expected. No external hardware is needed. Do not lift by wheel/axle or force joints. This is an adult desk craft, not a child toy; small parts, cutters and adhesive require care.

Assembled, exploded, connected card, de-tabbed and every isolated-part view use the same printable meshes. Rotation/separation are preview-only positions; centered bearings ignore gravity sag. **No physical print, friction, stability, strength, fatigue or durability testing was performed.** Geometric collision checks are not a dynamics/force simulation or guarantee of real-world performance.

## Saves / exports

Undo/redo, six named local designs, JSON save/open. Bounded normalized image and validated mesh payloads travel with designs; missing payloads request reattachment. Restored meshes are revalidated. Design JSON ≤2 MB. Saved designs stay in localStorage; no cloud.

Binary STL for the **real connected card** and all nine individual bed-flat parts. The card is a Manifold union of actual frame/runners/parts, not loose items next to a decorative rectangle. **Everything ZIP** holds ten STL files plus numbered `ASSEMBLY.txt`. No fake 3MF. Visible dimensions refer to selected bed-flat exports, not assembled preview extents. STL stores geometry, not preview colours.

## Reproducible validation

- `npm test`: 28 built-in cases (defaults, all presets, min/max and mixed extrema), 35 image/STL-derived cases. Every card and part is independently parsed from float32 binary STL: finite vertices, nondegenerate triangles, normalized/outward normals, positive volume per component, millimeter bounds and closed edge incidence after welding at 1e-5 mm; exactly two opposite-directed faces per edge. Same final-mesh preflight runs for every worker build.
- `node extra-validation.mjs`: real boolean ring-hole probes, concave STL rejection, actual source wedge integration and assembled checks.
- `node release-preflight.mjs`: full rotation every 5° for defaults/presets/extrema, 10° gravity-sag plus axial-limit sweeps and 24 bounded mixed variations. Checks all independent assembled solid pairs, yoke insertion, second-cheek insertion, axle threading, wheel/axle lowering, shoulder/saddle stops and axial capture. All 36 accessible snips leave nine parts plus one carrier; no flat part overlaps; declared card bounds and Z verified.
- `node browser-validation.mjs` against production base path: 39 real-download cases. PNG/JPEG/SVG and ASCII/binary STL pickers, changed threshold/depth/pixels/transforms, exact preview/export fingerprints and JSON regeneration, remove/replace/reset, text/icons, saves/portable assets, undo/redo, per-part STL and every ZIP member. Invalid/truncated/open/oversize/empty inputs and worker-load failure disable export and recover. Desktop layout, dark theme/focus/collapse and 320/390 px phone no-overflow/preview-first, real picker/export and screenshot-proven touch orbit/pinch.
- `node production-preflight.mjs`: inline gallery script compilation, unique new STL entry, previous entry retention, all production folders present, gallery runtime and production import rejection/recovery/reduced motion checks.

JSON reports and screenshots accompany the source. These are computational/browser checks, **not physical printing**.

## Licenses

New generator geometry is original; shared local studio/import infrastructure adapted within Daily Object Lab. Construction reference attribution and modifications are above (CC BY 4.0). Manifold Apache-2.0; Three.js, React, Vite and fflate retain their licenses; Fontsource fonts SIL OFL. Synthetic fixtures CC0. No raw third-party reference STL bundled.
