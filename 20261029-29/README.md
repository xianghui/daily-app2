# Caliper & Slide

A local-browser **three-part flat-pack vernier teaching kit generator**. Snip twelve runners, flip a tongue-bearing moving jaw over the fixed ruler, and glue a rectangular keeper underneath. Slide the captured jaw to compare a 9:10 cursor scale against engraved main divisions. This is an educational miniature, **not a calibrated measuring instrument**.

## Run / build

Requires Node 22.12+. `npm install`, `npm run dev`; `npm test` performs mesh and assembly checks; `npm run predeploy` builds production. `npm run deploy` is the required individual-folder script, but combined public publication uses the parent monorepo's deploy flow. Vite base: `/daily-app2/20261029-29/`.

Dependencies are locally bundled React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik fonts. Playwright is used only for verification. No CDN, remote modeling API, key, upload, or paid service.

## Real reference and adaptation

The local `keycap_generator2` project was inspected read-only: README, App, Viewer, styles, worker, STL reader, image conversion and export modules. Its 374 px left studio rail, tactile controls, pink selection states, bundled rounded fonts, source/cutout inspection, exact-result export gating and preview-first phone layout inform this interface. No switch sockets, keycaps, Git history or dependency tree were copied.

Local STL candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three switch parts, unsuitable for sheets) and `fidget_fabric_generator/public/templates/diamond-link.stl` (one 8 mm-high interlocking link, unsuitable for this planar kit). Their hashes, dimensions and component counts are in [reference-analysis.json](reference-analysis.json). Project README/instructions were inspected before rejecting those mechanisms. The slider collection also uses radial sliding sectors rather than planar sheet assembly.

Geometry reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The actual binary STL was downloaded to a temporary location, parsed and sectioned this run. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm assumed units. STL contains no unit metadata; source SCAD dimensions corroborate millimeters. Edge-adjacency gives 27 components (including tiny surfaces); source is **not watertight**, and is not passed through as printable geometry or claimed repaired.

Actual cross-sections at Z=.10/.50/1.59 mm are recorded in [reference-sections.png](evidence/reference-sections.png). Measured 1.6 mm sheet, 1.6 mm carrier rail, .21/.22 mm low bridge elevations and **four 4.5 × 1.7 mm rectangular socket loops** map to the reconstructed keeper interface: 4.4 × sheet tongue; socket (4.4 + allowance) × (sheet + allowance). At sheet=1.6 and allowance=.10 it matches that measured socket envelope exactly. Default .15 is deliberately looser, not a measured source fit.

The source's sheet/socket/removable-carrier construction is retained; the sliding jaw, closed travel slot, projecting tongue, adhesive keeper, main/vernier scales, safe customization wing, card layout and three-part assembly are redesigned. Proposed rails are 2.4 mm and runners .4–.6 mm, not the source's dimensions. The raw source STL is **not redistributed**. No endorsement, physical-print test, or source motion claim.

## Geometry / units and parameter bounds

All physical values are mm; rotation is degrees and image crop is percent.

| Parameter | Range | Meaning |
|---|---|---|
| Card | 170–210 × 125–160 | Real connected carrier envelope |
| Sheet | 1.6–2.4 | Ruler, jaw face and keeper stock |
| Ruler | 100–130 | Overall beam length |
| Jaw reach | 23–30 | Contact extension below the rail |
| Major pitch | 5–8 | Actual main engraved spacing; cursor pitch = .9 × this |
| Running gap | .15–.40 per side | Above/below ruler and either side of tongue |
| Keeper allowance | .10–.35 total | Glue-seat mortise, independent of running gap |
| Part spacing | 4–6 | Card packing and access |
| Runner width / height | .8–1.4 / .4–.6 | Twelve accessible removable connections |
| Engraving depth | .2–.4 | Scale grooves |
| Mark size / height | 4–7 / .6–3 | Bounded imported grip geometry |
| Mark rotation / offsets | ±180° / X ±1.5, Y ±2 | Rejected if outside 6.5 mm safe radius |

Nominal stroke = ruler length − 12 − 9 × major pitch (16–73 mm across supported combinations). This keeps the full cursor scale inside the main ruler at both stops. The jaw has a through reading window with a 1.5 mm strut between cursor marks; visibility is solid-probed at all eleven coincidence positions throughout travel. Ten cursor intervals span nine main intervals, giving nominal pitch/10 alignment increments (.5–.8 mm), **not claimed measurement accuracy**. Zero is the fixed jaw right face / moving jaw left face. Hold in the hand: the keeper projects under the ruler and is not a flush desktop base.

Three presets have rendered model thumbnails; three wing silhouettes, bounded variation, text, searchable bundled original icons, light/dark saved toggle, undo/redo, six local named designs, portable JSON, assembled/exploded/card/loose/isolated views, ghost view, orbit, zoom and fit are implemented. Travel is a labeled preview-only assembly pose; export is always the same current geometry in printable orientation. Preview colours are not stored in STL.

## Image / SVG workflow

File picker on phone/desktop and one-file drop target accept PNG, JPEG, simple self-contained SVG. Content and extension checked; 16 bytes–2 MB; raster ≤12 megapixels and ≤6,000 px per side, normalized to ≤500 px. SVG supports ≤2,000 simple shapes/paths, locally rasterized at 256 px; active/external content, text, filters and resources are rejected.

A 20 × 20 grayscale sampling grid is computed locally after contain/cover crop, ±25% pan and light/dark background removal. Threshold mode assigns selected dark samples a uniform relief depth; grayscale mode maps darkness to height. The grid is triangulated over a .4 mm backing, closed at its sides/bottom, then solid-unioned to the ruler wing (or mirrored/subtracted for engraving). It is **2D-to-relief, not reconstruction of a full object from one photo**. Source and actual cutout are shown on checkerboard; empty silhouettes are blocked. Bright/transparent holes remain unraised/unengraved on continuous backing, not cut-through voids; interpolation means this is sampled relief, not exact contour tracing. Raised .4–3 mm or engraved .4–.6 mm, with at least .8 mm backing. Placement/rotation/physical scale affect real exported triangles. Text and icons use this same local pipeline. Replace, remove, center/reset and full reset are implemented.

## STL workflow

Accepts complete ASCII and binary STL, ≤2 MB / **1,500 triangles**, one closed outward-wound convex solid, .2–250 mm each dimension. Z/Y/−Z orientation is explicit before attachment; changing orientation clears source and asks reattachment. Source dimensions, format, triangle count and original-mesh preview are shown. Millimeter confirmation is required because STL has no units. XY scales proportionally to chosen physical footprint; Z independently to grip height; actual scale factors are displayed. Z rotation, XY placement and resets are meaningful.

Input preflight verifies finite coordinates, nondegenerate faces, welded opposite edge incidence, connectivity, positive volume, pairwise triangle intersections, convexity, broad flat bed contact and no unsupported overhang footprint. **Open/nonmanifold, concave, hollow, branched, touching, self-intersecting and unsupported meshes are rejected with recovery guidance**. There is no repair or convex-hull replacement. A hull is used solely to test the bottom support footprint; the original accepted triangles enter Manifold and are solid-unioned into the isolated ruler wing. Final topology and safe-zone bounds are checked again. Imported geometry cannot bridge the mechanism or fuse moving parts.

## Privacy / persistence

All user files stay in browser memory. JSON and local named designs contain bounded normalized image/mesh payloads, not missing filesystem paths. Missing or malformed portable payloads are rejected and ask for file reattachment. Nothing is sent to an external service. Only original synthetic sample fixtures and computational evidence are bundled; no personal inputs or raw third-party meshes. Fonts use SIL OFL; Manifold Apache-2.0; Three.js/React MIT; fflate MIT; source design reference CC BY 4.0.

## Print / assembly / export

1. Print PLA/PETG at .16–.20 mm, .4 nozzle, three walls. All pieces bed-flat. Jaw prints face-down with tongue **up**; ruler face-up, keeper flat. Supports not intended.
2. Clip twelve low runners; trim nubs on outer sheet edges. Do not damage the tongue, slot or contact faces.
3. First calibrate all three actual interfaces on your printer. Use elephant-foot compensation as needed. These clearances are starting points, not universal fits.
4. Flip the jaw and lower its tongue through the ruler slot. Bring the keeper from underneath onto the tongue. Tip of tongue should be flush with keeper underside. Use a temporary shim equal to the running gap above the keeper while gluing only its mortise to the tongue. Keep adhesive out of the running slot; remove shim after cure. No snap or friction retention is claimed.
5. Gently slide. Keeper overlap blocks vertical withdrawal **only after its adhesive bond is sound**. Closed slot ends stop travel. Do not force it, use it as a clamp, or rely on it for accurate/safety-critical measurement. No bearings, screws or metal hardware; a small amount of plastic-compatible adhesive is required.

Download connected-card binary STL, individual named part STLs, or Everything ZIP containing the card, all three part STLs and numbered `ASSEMBLY.txt`. Explicit X/Y/Z mm bounds are shown for selection. All exports come from the exact valid worker result shared with preview. Invalid edits/imports or failed workers disable export, even while a last-good preview remains visible; stale responses are ignored. Generation is debounced and runs in a Web Worker with local WASM.

## Verification

`npm test` writes `validation-report.json`: eight built-in cases (all presets, silhouettes and extrema) plus eight image/STL cases, every part and float32 binary STL, closed welded edges at 1e−5 mm, opposite winding, normal consistency, positive per-component volume, nonzero faces, bounded mm dimensions. Independent solid intersections check 25 positions plus lateral play, full cursor span, end-stop obstruction, keeper withdrawal blocking, jaw/keeper insertion paths, part separation, twelve safe snips and four resulting solids (three parts + frame).

`node hole-check.mjs` probes actual raised/engraved ring voids against solid geometry. `node browser-test.cjs`, `node studio-test.cjs`, `node supplemental-test.cjs` target a production server at port 5429 (override `TEST_BASE`). They exercise real PNG/JPEG/ASCII/binary pickers and downloaded bytes, malformed files, transforms/settings changing geometry, source replacement/removal/reset, preset/export matching, ZIP mesh parsing, portable image/STL JSON, named storage, undo/redo, invalid/stale result blocking, production worker abort/reload, themes/focus/collapses and 320/390 px touch layouts including orbit/pinch. Browser snapshots are regenerated independently in Node and signatures compared against actual downloads; imported cases get the same mechanical checks.

Reports and screenshots record performed checks. These are **computational prototype checks**, not physical print, slicer, strength, adhesive, wear, force or metrology tests. No physical print was performed.
