# Vacant & Glide

A React + Vite maker studio for a **nine-part physical sliding-tile fidget kit card**: one recessed board and eight engraved numbered tiles. Snip 36 breakaway runners, insert the tiles from above with one vacant cell, then slide adjacent tiles by hand. The browser demonstrates one stroke; it is not a browser game. Tiles intentionally lift out: **not captive**, keep level. No glue or hardware required.

## Build and use

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261102-36/`. Per-app `predeploy`/`deploy` scripts are included, but public publication uses the parent monorepo's `deploy/` flow. `node serve.mjs` serves the production build at port 5736 under the real base prefix. WebGL and Web Workers required.

## Reference-first evidence

Local files were inspected first: read-only `keycap_generator2` README, App, styles, Viewer, image conversion, STL, export and worker modules; its actual clicker template was parsed, as was `fidget_fabric_generator`'s diamond link after reading its README. These are switch/link mechanisms, not suitable sheet-kit sources. Actual dimensions/hashes/components and rejection reasons are in `reference-analysis.json`.

Selected public STL: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), Printables 865769, **CC BY 4.0**. Source README/license are included; raw STL is **not** redistributed. Download URL and SHA-256 are recorded: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It was freshly downloaded, parsed and sectioned for this run using `reference-measure.py` (Python trimesh, numpy, matplotlib). Inspect `evidence/reference-sections.png` and `reference-measurements.json`.

Binary source: 30,616 triangles, 179.820 × 178.020 × 3.190 mm assumed units (STL has no unit metadata); 27 edge-adjacent components including degenerate scraps, not globally watertight. Source sheets have planes 0/1.60 mm, low runners .21–.22 mm, four measured sockets 4.50 × 1.700 mm. **Measured source defects are not called repaired.** This app is an original CSG reconstruction of the sheet/carrier approach, preserving default sheet 1.60 mm; proposed stronger runners, pocket, floor, rim and numbered tiles are new. No unrelated sockets imposed on this slot-free kit. Measured dimensions and proposed tolerances are distinguished in `reference-analysis.json`.

The read-only keycap studio informed its concrete 374px left control rail, lavender-grey desk, white panels, coral tactile raised buttons, saved dark theme, checkerboard cutouts, paired sliders/mm inputs, collapse sections, large right viewer and preview-first phone layout. Reuses studio/import infrastructure from prior daily_app2 work; all product geometry and mechanism checks are replaced. Reference trees and old daily_app remain read-only.

## Parameters and mechanical bounds (mm)

| Parameter | Range |
|---|---|
| Card width / height | 190–240 / 160–220 |
| Tile pitch | 20–26 |
| Sheet and floor thickness | 1.6–2.4 |
| Total adjacent / outer-edge sliding gap | .30–.60 |
| Tile corner radius | 1–3 |
| Rim rise above seated tiles | .4–1.2 |
| Part spacing | 3–5 |
| Breakaway width / thickness | .8–1.2 / .4–.6 |

Three real generated-thumbnail presets, three outer silhouettes, bounded variations, undo/redo, six named local designs, portable versioned JSON. The board width=3*pitch+12; height=width+18; pocket centreY=9. Tile side=pitch−gap; pocket side=3*pitch+gap. The pocket's horizontal floor is one sheet thick. Rim height=2*sheet+rise. Numbers are actual .40mm-deep Boolean-cut seven-segment strokes, .80mm thick. The preview slide applies tile8's analytic position only; exports always use the bed-flat real current geometry. No force/friction simulation.

The rim blocks **level lateral** escape but **not lifting**: intentionally removable tiles, not an enclosure/captive mechanism. No glue, latch, snap fit or precision detent. Dry-fit a clean board plus two tiles first. Proposed clearances depend on printer/material, elephant foot and deburring, not universal tolerance guarantees. Small parts, not for small children.

## Image, SVG, text and icon workflow

Desktop/phone picker and drag/drop; synthetic sample files bundled in `public/samples/`. **PNG/JPEG** content/header checks: ≤2MB, ≤12MP, ≤6000px side before decoding; normalized to ≤500px. Fit/cover crop and XY shift ±25%; light/transparent or inverted dark background; brightness threshold1–254 or grayscale relief. Sample a bounded **20×20 height grid**. Threshold keeps dark cells; grayscale height=`(1−luminance/255)*depth`. Triangulate continuous field and closed backing; invert then Boolean-subtract from apron. Checkerboard displays actual sampled cutout; bright interior holes leave unengraved backing. Fine features below sampling resolution can disappear. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photograph**.

Simple SVG filled paths/shapes, including holes, rasterize locally to256px and take the same route (≤2000 elements, no active content, external resources, effects or text; convert SVG text to paths). Text and six searchable bundled vector icons also become real recesses. Locally bundled Fredoka/Rubik fonts. Art footprint4–7mm, rotation±180°, X±1.5/Y±2mm, depth.4–.6mm; every transformed vertex must fit protected radius6.5mm at `(0,−boardHeight/2+9)`, preserving at least1mm backing. Raised mode is deliberately unsupported to preserve flat sheet structure. Pixel/threshold/depth/placement changes affect actual STL, not preview textures.

## Imported STL workflow

**ASCII and binary**, ≤2MB and1500triangles; each source axis .2–250mm. Show oriented source preview/dimensions and require explicit millimetre confirmation (STL has no units). Select Z/Y/−Z up before attaching; changing axis clears the file and requests reattachment. XY scale proportionally to4–7mm footprint; Z normalizes independently to.4–.6mm engraving depth. Rotation, centre/reset, XY placement, replace/remove and returning to defaults are real controls. Exact source mesh is Boolean-subtracted from board apron. Never replaced by a convex hull or merely re-exported.

Supported contract: **one closed, connected, outward-wound, non-self-intersecting convex solid with broad flat bottom and no overhanging footprint**. Concave/hollow/branched/open/nonmanifold/inward/disconnected/degenerate inputs are explicitly rejected with recoverable guidance. Convexity is checked, not constructed; no silent repair. Narrow transformed shapes below1.2mm rejected. Source payload revalidated on JSON restoration; bounded images restore normalized PNGs. Missing payload explicitly requests reattachment; no fictitious restoration.

## Preview, privacy and exports

Manifold WASM Boolean union/subtraction in local worker;100ms debounce, generation IDs and exact current-state export key, conversion/input gates. Last-good preview can remain visible after error, labelled, but **export disabled until current valid result**. Worker failure blocks export; reload recovery tested. Preview/export share exact geometry; FNV fingerprint compared with actual downloaded bytes and JSON-regenerated Node geometry.

Assembled, exploded, connected-card, de-tabbed and every isolated part; source preview, ghost board, orbit/zoom/fit/top, phone touch orbit/pinch. Export connected binary STL, nine clean per-part STLs, de-tabbed print plate or Everything ZIP with all ten STLs, current portable designJSON and numbered `ASSEMBLY.txt`. STL contains **no colours**. All dependencies bundled locally (React, Vite, Three.js, Manifold3D Apache2, fflate, Fontsource fonts OFL); no backend, CDN generation, remote APIs, API key or paid service. User files never leave browser or get saved in repository. Named saves use browser localStorage.

## Printing and assembly

See `ASSEMBLY.txt` and UI/ZIP guide. PLA/PETG, .4mm nozzle, .16–.20mm layers, at least3walls, card flat at100% mm; no supports intended. Snip36 low runners1.8mm outside part edges, file flush and deburr tile bottoms. Place1–8 row-major in pocket, lower right vacant. Slide one orthogonal neighbor at a time; lift out to reset. Keep level. No physical print, friction, fatigue or wear tests performed.

## Validation

`npm test`: every preset/silhouette, representative min/max and each field bound, threshold/relief/holes, transformed ASCII/binary import. Independent exported-byte checks: exact binary length, finite coordinates, nondegenerate faces, normalized normals matching winding, positive volume for **each component**, 1e−5mm welded edges with exactly two oppositely directed incident faces, expected mm bounds. Validates card, every separate part and translated de-tabbed export.

Actual CSG checks24 directed adjacent-cell moves ×9 positions against occupied neighbors and board; full default slide, top insertion/removal, lateral fence stops, floor/backing, nonintersecting flat parts, bed-supported upper slices, card envelope,36 runner cuts yielding carrier+9 unharmed parts. These are geometry/mechanism checks, **not physical printing**.

`browser-test.cjs`, `studio-test.cjs`, `presentation-test.cjs`, `orientation-test.cjs`, `stale-test.cjs`, `icons-drop-test.cjs`: real browser PNG/JPEG/ASCII/binary pickers and actual downloads, source/threshold/depth/transformation differences, exact preview/JSON/export match, invalid/open/nonmanifold/concave/excessive files, empty images, stale export gating and recovery, all presets, SVG holes/text/icons, image/STL portable JSON and named save reload, undo/redo, actualZIP contents and each enclosed STL, worker abort/recovery, desktop rail,320/390px preview-first touch orbit/pinch/no overflow, light/dark persistence/focus/collapse and accessible exports. Reports/screenshots saved beside source. Run against built production assets under real Vite prefix, not only dev server. Parent gallery scripts/runtime and staged deployment separately verified before authorized publication.
