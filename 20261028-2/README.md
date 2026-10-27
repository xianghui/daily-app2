# Step & Stack — five-part display-stair kit-card studio

An original React + Vite browser generator for a **connected, bed-flat kit card** containing two stepped stringers and three slotted treads. Clip twenty accessible tabs, stand the stringers upright and lower each tread onto a pair of upward tenons. It makes a miniature three-tier display for lightweight keepsakes—not a structural shelf, load-rated product, or toy staircase. Unlike previous tray/box/aircraft/bridge kits, this uses tier-specific shoulders and six upward slot interfaces with independently adjustable rise and run.

## Run and reproduce

Node 22.12+; `npm ci`, `npm run dev`, `npm run predeploy`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; actual combined publication uses the ROOT predeploy/deploy flow. Vite base `/daily-app2/20261028-2/`.

`npm test` independently validates defaults, three presets, combined parameter extremes, six variations and 30 import-derived cases. `node serve-production.cjs` serves production output at http://127.0.0.1:5432/daily-app2/20261028-2/ . Browser suites: `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node studio-layout-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`. Test fixtures in `public/samples/` are synthetic CC0, not personal uploads. No source STL bundled.

## Reference-first evidence and attribution

Searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/` first. Local kit-card projects contain no STL reference files; keycap/clicker sockets, slider ghosts and fabric links do not provide sheet-kit construction references. Downloaded and inspected Mike Kasberg’s **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Read source README, LICENSE and `kit_frame.scad`, corroborating the measured mesh, not replacing it.

Actual binary source SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, 179.820 × 178.020 × 3.190 mm, two edge-connected components after 0.00001 mm welding. Millimeters are an explicit assumption since STL has no unit metadata. Mesh contains coplanar/nonmanifold artifacts, so it is **design evidence only**, not repaired, redistributed or re-exported.

`reference-analysis.json` contains measured bounds, component volumes, source hash, vertex Z histogram, frame section points and parameter mapping. Reproduce with `python3 reference-analysis.py /path/to/downloaded-reference.stl`. `reference-sections.svg` and `.png` show actual mesh sections at Z=.1/.5/1.59 mm: perimeter/crossbars, low connecting runners, sheet slots and source parts. Measured 1.6 mm sheet and perimeter rail, plus .21/.22 mm low bridge levels, inform a genuine unioned carrier with low sacrificial links.

**Redesign decisions:** retain the measured 1.6 mm default sheet; allow 1.6–2.4 mm. Strengthen carrier to 2.4 mm and links to .4–.6 mm thick × .8–1.4 mm wide, not claimed as source dimensions. Five new stair parts, four crossbars, twenty tabs, and six 8 mm upward tenon/slot joints are original reconstructions. New total .15–.45 mm fit allowance is an FDM proposal, not a measured source tolerance. Raw third-party mesh is not required at runtime.

Visual/interaction reference inspected read-only: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/imageTrace.ts`, `src/geometry/stl.ts`, `src/worker.ts`, `src/export.ts`. Used concrete studio patterns: 374 px left maker rail, sticky compact brand/theme header, collapsible grouped controls, paired mm range/number inputs, raised selection keys, checkerboard cutout and separate source mesh previews, imported solid placement, large right stage, status/dimensions and reachable export panel. Phone stacks preview/export first, controls below. No keycap sockets or dependencies copied from the reference. Existing daily-app studio infrastructure was reused with new geometry, assembly, validation, labels and provenance; no Git history copied.

## Parameters and real construction (all lengths in millimeters)

| Parameter | Range |
| --- | --- |
| Card width / height | 120–160 / 220–250 |
| Tread width / step run / rise | 64–84 / 18–22 / 7–10 |
| Sheet thickness | 1.6–2.4, default 1.6 |
| TOTAL slot allowance | .15–.45, default .30 |
| Additional row spacing | 0–1 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Front tread dimples | 0–.4 deep |

Three rendered-model presets: Pocket Steps, Studio Stair and Wide Gallery. Three actual tread silhouettes: soft chamfer, larger chamfer, capsule ends. Tread depth = run − 2, leaving a 2 mm assembled gap between levels. Stringer height rises by the chosen step rise; minimum full-width lower web 7 mm. Two stringers are intentionally identical and interchangeable. Six upward tenons are 8 mm long and sheet-height tall, sitting flush with tread tops. Each slot is (sheet + allowance) × (8 + allowance). Two slot centers are ±(tread width/2 − 8) mm. Shoulders directly support tread bottoms; these are removable slip fits, not snap retention.

Manifold solid operations construct the actual sheet outlines, slots, personalization well, tabs and carrier. No overlapping-shell export or convex-hull substitute. Each export is a single connected closed solid. The card is one unioned component with twenty links; virtual cuts produce exactly six components (carrier + five parts). Four tabs attach to each part’s lower nonfunctional edge, away from tread slots and upper tenons; cuts lie 2 mm outside parts. Trim nubs after release. Invalid envelopes are rejected rather than expanded silently.

Center of the front tread carries a protected radius-6.5 mm mark zone. Imports cannot reach the stringers, tread slots or seating paths. Engraving preserves at least .8 mm floor. Slot/tread clearance, shoulders, inter-tier gaps and full vertical insertion paths are checked independently of watertightness. Front-tread lift is a labeled **preview-only** seating visualization; STL always exports the true flat printable geometry.

## Image workflow — actual geometry, not a texture

PNG/JPEG and constrained SVG, ≤2 MB. PNG/JPEG headers checked **before decode**: ≤12 MP, ≤6000 px per side. Normalize locally to ≤500 px; sample a 20 × 20 grayscale grid, with fit/cover crop, ±25% pan and light/transparent background removal or inverted dark background. Threshold 1–254 creates silhouette relief; grayscale creates height relief .4–3 mm. Triangulated height surface, closed sides/bottom, solid-unioned into the real front tread well. Engraving subtracts .4–.6 mm and preserves ≥.8 mm floor at the minimum sheet thickness. Scale 4–7 mm footprint, rotate ±180°, place X ±1.5/Y ±2 mm inside the checked safe zone. Clear source image and actual sampled cutout on a checkerboard.

This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photograph**. White/transparent holes remain unraised/unengraved on the continuous backing; a bounded sampled height field has sloped one-cell transitions, not exact traced vector edges or cut-through holes. Ring-hole tests probe the actual final boolean solid. Simple SVG paths/shapes rasterize locally (≤2000 elements); active/external resources, text, effects and references are rejected. Bundled searchable original icons and text use this same real mesh path. Preview colors are not stored in STL.

## STL workflow — integrate the original mesh

ASCII and binary `.stl`, ≤2 MB, ≤1500 triangles, each oriented axis .2–250 mm. Source dimensions, encoding and triangle count shown; user must explicitly confirm millimeter coordinates because STL carries no units. Choose Z up, Y up (+90° X) or −Z up before attaching; changing this requests reattachment. The source and final model have separate interactive previews.

Finite coordinates, nonzero faces/volume, connectedness, welded edge count/opposite winding and triangle self-intersection checked locally. Supported contract: **one closed, outward-wound convex solid, broad flat bottom ≥25% of footprint, no overhangs, cavities or branches**. Concave/nonmanifold/unsupported files are rejected with guidance, never silently convex-hulled or repaired. The convexity test does NOT replace the source. Original accepted triangles are independently XY-scaled to a 4–7 mm footprint and Z-scaled to .6–3 mm height, rotated, placed, embedded .15 mm and genuinely boolean-unioned into the front tread. A minimum 1.2 mm transformed XY feature extent is enforced. Replace/remove/center/reset and built-in defaults work.

## Responsiveness, privacy and portable designs

All modeling runs in a bounded Manifold WASM Web Worker. 100 ms debounce, generation ids and a complete current-state key (including import conversion controls) prevent stale export. Worker failure and invalid edits disable every geometry export; last-good previews are explicitly identified. Three.js orbit/pinch/zoom/fit, isolated parts, actual assembled/exploded geometry, connected card and de-tabbed layout. Front tread insertion slider is a **preview-only placement**, never alters the printable card or per-part exports.

Undo/redo, up to six local named designs, portable JSON save/open with bounded normalized PNG or validated original mesh payload. Missing image payloads explicitly request reattachment; malformed saved assets fail recoverably. User files stay local: no uploads, APIs, CDN dependencies or personal files in the repository. Bundled local Fredoka/Rubik fonts (SIL OFL); React/Vite, Three.js, manifold-3d (Apache 2.0), fflate, gh-pages; Playwright for tests. Bundled icons are original simple SVG paths. Light/dark theme saved locally, visible focus, generous touch targets and reduced-motion CSS.

## Exports, calibration and assembly

Prominent binary STL for the connected card or each of five parts. Everything ZIP contains six STLs and numbered `ASSEMBLY.txt`. Do not print both card and duplicate parts. Every export rests at Z=0, independent of assembly/exploded preview. Live X/Y/Z measurements describe the selected export. Preview and export share the exact same current-state valid mesh/fingerprint; invalid edits block exports. STL contains geometry, not preview colour; no 3MF claim.

1. Print the card OR five loose parts flat in PLA/PETG, .4 mm nozzle, .2 mm layers, at least three walls; supports not intended.
2. Clip twenty low tabs, trim lower-edge nubs and discard carrier. Adult cutter handling and small-part precautions.
3. Stand the two identical stringers on a flat surface, steps rising toward the back.
4. Lower front tread onto its two tenons, then middle and top treads. The latter two are interchangeable. All paths are vertical and collision-checked.
5. Slip joints are removable, not captive. Optional tiny adhesive dots after dry fitting; do not lift an unglued assembly by a tread.

Print one tread and stringer loose first for calibration. Total allowance starts at .30 mm; adjust by .05 mm for printer/material/elephant-foot compensation. Sheet slots are bed-plane through-holes, not suspended roofs. No hardware required. Lightweight decorative display only; no claimed load capacity. No physical print, fit, fatigue, cutter-release or strength tests performed.

## Validation actually performed

`geometry-validation.json` records 12 parameter cases and 30 import-derived cases. Independent final binary-STL parsing checks exact byte count, nonempty finite coordinates, nondegenerate faces, outward normal agreement, 1e-5 mm welded edge incidence (exactly two opposite-directed triangles), per-component positive enclosed volume, Euler characteristic and expected X/Y/Z bounds. Every card and each of five loose parts is validated, not only combined volume.

Assembly checks use real kernel intersections over ten assembled pairs and 17 seating samples per tread (browser-regenerated checks use nine), require zero unwanted overlap, verify shoulder stops and side/fore-aft slot restraint, require flat parts disjoint and included exactly in the carrier, cut all twenty tabs and require six separate components. New fit dimensions are checked against allowed bounds. These are geometry checks, not force/stability/load tests.

Browser suites exercise real PNG/JPEG/ASCII-STL/binary-STL pickers, image threshold/depth/pixels/crop/inversion, STL scale/rotation/placement/up-axis, actual downloads and complete mesh/assembly checks on re-generated exact JSON state; export fingerprints equal UI mesh fingerprints. Also verify replace/remove/reset, malformed/truncated/open/nonmanifold/concave/oversized files, empty silhouettes, invalid dimensions/transforms, missing portable assets, aborted worker/reload, rapid stale async imports, text, six icons, SVG raised/engraved hole probes, presets, variations, undo/redo, named designs, JSON assets, each per-part STL and ZIP contents, views, saved light/dark theme, focus/collapsibles/reduced motion, 374 px desktop rail, 320/390 px no-overflow preview-first phone layout, touch orbit/pinch and phone file imports/downloads. Production WASM/worker paths are tested beneath the real base prefix; no remote user-data requests.

Reports and screenshots are stored beside the app. No physical print testing has been performed. Limitations: small sampled relief, explicitly convex supported STL imports, removable assembly fits, thin breakaway tabs requiring careful cutting, and no certified load rating. Fit suggestions are starting points, not universal.
