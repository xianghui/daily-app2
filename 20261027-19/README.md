# Crosslap Launch — Half-lap Rocket Kit Studio

A client-side React + Vite maker studio for a **genuine three-part, bed-flat kit card**: two orthogonal rocket silhouettes slide together through opposing half-lap slots, then their crossed tenon seats in a personalized launch plinth. Twelve sacrificial tabs actually join all three parts to a perimeter/runner network. The card is one solid; snipping the tabs releases three functional parts and one disposable frame. This is a miniature display kit, not a flying toy or a moving fidget.

## Reference-first evidence / attribution

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first (keycap/clicker, slider, fabric, pass-through and spring collections). They supply mechanisms rather than suitable sheet-kit references. The public reference is **Theft of Fire — White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Repository README, LICENSE, `white-cat-kit-card.scad` and `kit_frame.scad` were inspected. The downloaded [actual STL](https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl) was independently parsed **before final geometry selection**.

- Binary STL, 30,616 triangles, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Assumed mm (STL has no units), corroborated by source SCAD; bounds **179.820 × 178.020 × 3.190 mm**.
- Welded edge-adjacency finds **two connected groups**, with nonmanifold/coplanar facet artifacts. This reference is not asserted to be a valid printable input or repaired.
- Actual mesh sections at Z=0.10, 0.50, 1.59 mm show the perimeter, loose sheet components and sacrificial runner construction. Measured sheet/frame width is **1.6 mm**; bridge vertices reach **0.21/0.22 mm**. See `reference-analysis.json`, `reference-analysis.py`, `reference-sections.svg` and inspected raster `reference-sections.png`.
- Source SCAD corroborates a 1.6 mm perimeter, 0.6 mm join neck and one 0.2 mm sacrificial layer plus overlap. These are reference details, not new universal printer tolerances.

**Adaptation and differences:** preserves 1.6 mm default sheets and real bed-flat perimeter/tab connectivity. The new rocket uses **opposed half-lap slots**, not the source spaceship's bent panels/clips or the earlier trestle kit's peg-supported deck. The crossed tenon and plinth are new interfaces. New FDM allowances, reinforced 2.4 mm frame and 0.4–0.8 mm cutter-removable tabs are proposed dimensions, not measured from the source. All geometry is an original parametric reconstruction built with Manifold Boolean solids; no convex hull replaces the source or imports. The raw source STL is not bundled or redistributed. Attribution/modification notice accompanies ZIP exports.

The read-only **Keycap Studio** README, App.tsx, styles.css, Viewer.tsx, worker, image-tracing, STL parser and export modules informed the studio interaction: 374 px scrollable left rail, sticky compact header, paired range/numeric mm controls, collapsible sections, raised tactile controls, pink selected states, source/converted previews, explicit import units/orientation, isolated/exploded/plate views and per-part exports. No switch socket is imposed on this unrelated assembly. Its dependencies or Git history were not copied. Shared local studio infrastructure was adapted from the earlier daily kit, but assembly geometry, constraints, placement and collision tests are newly implemented.

## Run and reproduce validation

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# In another terminal, using the production bundle at its real Pages base:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node portable-errors-test.cjs
```

Node 22+ recommended. Heavy CSG, import topology checks and final-mesh validation run in a module Web Worker with bundled Manifold WASM. Builds are debounced 100 ms; generation IDs and exact state keys prevent stale exports. Errors keep a labelled last-valid preview, with export disabled until the current state is valid. Preview and binary STL use the exact same indexed meshes; tests compare downloaded bytes against the visible fingerprint and regenerate saved parameters in Node.

## Parameters (millimeters unless specified)

| Parameter | Range / meaning |
| --- | --- |
| Card width × height | 110–160 × 130–170; exact outer envelope |
| Rocket height | 46–68 above the plinth |
| Plinth depth | 38–48; width is depth + 20 |
| Fin half-span | 12–18; total panel width twice this |
| Body half-width | 6–9; also crossed-tenon half-length |
| Sheet thickness | 1.6–2.4 |
| Total slot allowance | 0.10–0.40 beyond sheet; half per side |
| Part spacing | 5–9 between rows and panel footprints |
| Tabs | 0.8–1.4 wide, 0.4–0.8 thick; four per part |
| Dimple depth | 0–0.4 in isolated medallion |
| Shape | Classic delta, short shoulder, swept shoulder; alters fin/shoulder outlines and plinth |

Impossible combinations block generation; the card must fit the actual plinth, fin spans, panel height, tenons, runner and cutter-access margins. Three real presets include Pocket Launch, Studio Orbit and Deep Space, with generated 3D thumbnails. Bounded variations respect layout constraints. Undo/redo keeps 35 snapshots, local named designs up to six; JSON save/open embeds bounded image/STL payloads. Missing or malformed payloads request reattachment rather than pretending they were restored.

## Local image → geometry

PNG, JPEG and simple SVG; real content sniffing before decode; 16 bytes–2 MB; PNG/JPEG ≤12 MP, ≤6,000 px per side. Images are normalized to at most 500 px for portable storage, then converted to a **20 × 20** luminance height grid. SVG is validated and rasterized locally; scripts, external resources, filters, embedded images and unsupported markup are rejected. Fit/cover, ±25% crop shifts, light or dark background/inversion, threshold 1–254 and relief depth 0.4–3 mm affect actual geometry. Raised/engraved style, 4–7 mm footprint, Z rotation ±180°, offsets X ±1.5 / Y ±2 mm are available. Engraving is limited to 0.4–0.6 mm to preserve ≥0.8 mm backing.

The sampled grid becomes a closed triangulated height solid, genuinely unioned/subtracted into the recessed plinth medallion at X=16. Bright holes remain unraised/unengraved over a continuous backing; this is **2D-to-relief, not automatic full 3D reconstruction** or exact contour tracing. Bilinear triangular transitions reflect bounded grid resolution. The source and actual checkerboard cutout/grid are shown separately. Text and six original searchable bundled SVG marks use this same real conversion pipeline. Replace/remove/reset return to defaults; empty masks and unsafe transforms are recoverable errors.

## Local STL → integrated medallion

ASCII and binary STL, ≤2 MB, ≤1,500 triangles, **0.2–250 mm per source axis**. Show actual oriented source dimensions and explicit mm confirmation (STL has no units). Select Z-up, Y-up or −Z-up before attaching; changing orientation clears the import and requires reattachment. XY scales proportionally to 4–7 mm footprint and Z independently to 0.6–3 mm; rotation/placement change the exported solid. At least 1.2 mm XY minimum final feature is required.

Supported inputs are deliberately restricted to **one closed, consistently outward-wound, positive-volume, non-self-intersecting convex solid with a broad flat bottom, no cavities or overhang beyond that footprint**. Concave/open/nonmanifold/disconnected/unsupported meshes are rejected with guidance, never replaced by a convex hull or silently repaired. Convexity is a validation restriction, not a substitute mesh. The exact accepted original triangles are transformed and truly unioned into the plinth, with 0.15 mm overlap. The 6.5 mm radius protected well is at X=16; the cross-slot is X=−9, keeping decoration remote from assembly. Source 3D and final model previews are both visible.

All processing is local. No APIs, uploads, keys or CDN imports. Portable JSON/local saves contain personal assets only on the user's device. Repository fixtures are synthetic marks, JPEG waves, SVG ring, ASCII wedge and binary gem, with attribution in `public/samples/README.md`; no personal files are stored here.

## Assembly, export and calibration

1. Print connected card **flat, Z=0**, PLA or PETG, 0.4 mm nozzle, 0.20 mm layers, ≥3 walls, no supports intended. Or print all three individual parts flat; these are alternatives, not extra parts.
2. Support each part, snip its four accessible side tabs and trim flush. Do not tear through functional slots. Discard frame/runner network.
3. Stand panels perpendicular off the plinth. A has bottom-open slot, B top-open. Start A above B and slide A down until their lower shoulders align. Opposed slot ends have the allowance's small axial gap.
4. Lower the assembled crossed tenon into the plinth socket. Shoulders seat on top; tenon tips are flush with the underside. No hardware or glue required.
5. Lift the complete rocket out before reversing the half-lap slide. It is removable, not captive or snap-retained.

Start at **0.20 mm total allowance**, print a loose A/B pair and plinth as a fit calibration set, deburr and adjust allowance by material/printer; do not force a tight joint. Thin tabs are intentionally sacrificial. This miniature has small parts and requires cutting-tool supervision. No strength, stability, drop or physical fit claims.

Connected-card, de-tabbed layout, assembled, exploded and isolated-part views share exact underlying solids. Separation slider demonstrates the A-over-B assembly path; exploded offsets are explanatory, not exported. Exports remain flat regardless of view. Prominent per-part binary STL and Everything ZIP include the card, three optional separate parts and numbered assembly instructions/attribution. STL has no colour; palette is preview-only. No fake 3MF offered.

## Validation and limitations

`geometry-validation.json` records 20 parameter cases (all presets, shapes and 16 representative range corners) plus 30 image/STL-derived cases. Each exported part/card is independently checked for exact binary length, finite coordinates, nondegenerate faces, unit normals aligned with winding, positive volume **per component**, two opposite-directed incident triangles per welded edge (1e−5 mm), valid Euler characteristic, bed-flat orientation and expected mm bounds. Engine validates every edit too.

Mechanism tests reconstruct actual solids in Manifold: no unintended intersection through the half-lap slide or joined-tenon insertion; true slot gauges pass and oversized gauges collide; card preserves identical personalized parts; loose layout is disjoint; twelve actual tab cuts produce exactly four components (three parts plus frame). Browser tests exercise file-picker PNG/JPEG/ASCII/binary imports and real downloads, changed pixels/threshold/depth/scale/placement, invalid inputs, all presets/marks, ring holes, JSON/named persistence, undo/redo, worker failure/stale-result gating, per-part ZIP and reduced-motion/focus/collapsible controls. Touch contexts test 320/390 px layout, orbit/pinch and reachable imports/exports. Reports and screenshots are generated by reproducible scripts, not assumed from compilation.

**Computational validation is not physical testing. No physical print, fit, strength or stability test has been performed.** Fit depends on slicing, extrusion and material. Inspect slicer layers and calibrate before relying on this display assembly.

## Dependencies / deployment

React, Vite, Three.js/OrbitControls, Manifold (Apache 2.0), fflate, locally bundled Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for browser verification. SVG marks are original simple paths. The app's `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public combined hosting uses the monorepo root `npm run predeploy` and `npm run deploy`, staging root gallery and app at `/daily-app2/20261027-19/`.
