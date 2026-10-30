# Dot & Dimple

A browser parametric **four-part paper dot-embossing slate kit card**: matched blind-well backing, perforated guide and two removable T-headed registration keys. Snip sixteen runners, place paper between the aligned plates and gently emboss selected dots with a **purchased smooth round ball-tip stylus**. Flip paper to inspect raised dots. This is a personal six-dot pattern exercise, **not certified Braille, standard Braille spacing, a text translator or a validated accessibility aid**. Physical printing, paper forming and tactile legibility are untested.

## Run / export

React + Vite, Node22.12+; `npm install`, `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261030-24/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; publish via ROOT combined monorepo deploy flow. Binary STL for genuine connected card and each of four clean parts; Everything ZIP includes all five STLs and numbered `ASSEMBLY.txt`. The frame and sixteen real low runners are Boolean-unioned to the parts; not loose pieces beside a rectangle. STL is geometry only, no preview colours. All parts export bed-flat, not as an overlapping assembled stack.

Dependencies, worker/WASM, fonts and samples bundle locally. No CDN, API key, generation service, server or paid dependency. User files are processed locally, never uploaded or added to the repository.

## Reference-first evidence

Relevant local STL files under `/Volumes/ExternalHD/3d_printing_apps/` were found before choosing geometry. Keycap Studio and Fabric Fidget Studio READMEs and actual switch-template/link meshes were inspected and parsed. Their measured SHA-256, bounds/components and rejection reasons (switch socket/link, not sheet carrier) are in `reference-measurements.json`.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg: [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Source README/license retained. Attribution does not imply endorsement. No raw source STL or cat/ship outlines redistributed. Original parametric reconstruction, not a repaired or unchanged re-export.

Actual binary source: **30,616triangles**, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, **179.819997 ×178.019994 ×3.190000mm**,27 edge-adjacent components, nonwatertight. Millimeters assumed/corroborated by sheet dimensions; STL has no units. Source defects are recorded, not automatically repaired. Actual mesh sections at Z=.1/.5/1.59 are in `evidence/reference-sections.png`; `reference-inspect.py` uses trimesh/numpy/matplotlib with raw reference outside repository.

Measured → generated mapping:

- **1.6mm sheet** → default guide/key thickness1.6. Optional1.8–2 is a strengthened redesign.
- Actual **4.5 ×1.700012mm socket** → key4.4 +TOTAL allowance.10 and sheet1.6+.10 reconstruct the interface. Default.15 and supported.10–.35 are proposed printer-dependent fits, not measured universal tolerances. Two aligned slots per key, four sockets total.
- Source low runners **.21/.22mm** →16 accessible bed-aligned.4–.6mm tabs, strengthened redesign. Simulated snips release4parts+carrier without damage.
- Original slate construction: matched cylindrical blind wells / smaller through-guide bores in six-dot cells, two registration slots per plate, T-key shoulder stops. Well diameter=bore+.8; depth control leaves≥1.2mm floor. Selected paper allowance affects actual key shaft length=backing+paper+guide. Keys are gravity-seated, not clamps/snaps or captive fasteners.
- Protected front-backing art is outside all well/slot interfaces: Boolean engraving≤.6mm leaves≥1.4mm art backing. No convex-hull replacement.

See `reference-analysis.json` for explicit decisions. Local reusable studio/parser/export/test scaffolding was adapted from earlier apps; **matched dot-field geometry, registration keys, packing and independent assembly/stylus checks are new**. A preliminary scraper design was discarded after a late duplicate check; no scraper geometry is in this delivered app.

## Reference-inspired studio

Primary visual reference `keycap_generator2` was read-only: README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL parser/export and image modules. Concrete patterns:374px scrollable LEFT controls with sticky brand/theme, paired numeric/slider inputs, collapsible sections, raised keycap buttons/coral pressed states, lavender-grey desk/white panels, saved dark theme, bundled Fredoka/Rubik fonts, checkerboard/source import comparison, worker/current-result export gating, and preview-first stacked phone layout. No wholesale Git/dependency copy.

Three real presets with generated model thumbnails: First Dots, Desk Slate, Wide Cells. Soft/chamfered/capsule plate silhouettes, bounded variations, undo/redo, reset, six local named designs and portable JSON save/open. Bounded image/mesh payloads are included, not file paths. Missing/corrupt payloads request reattachment and block export. Save is local and explicit. Worker performs CSG/heavy mesh validation with100ms debounce/stale request-id guards; current state must match current valid result before any export. Labelled last-good preview may remain after invalid edits but cannot export. Worker failure disables export and requests reload.

Assembled, exploded, connected-card, de-tabbed and isolated views use exact generated part meshes. Transparent ghost, fit/zoom, touch orbit/pinch. Assembled paper gap is **estimated supplied-paper thickness**; paper/compression/stylus forces are not simulated. No fake moving-joint control. Exports are bed-flat.

## Supported parameters

All dimensions mm; cell counts explicitly unitless whole numbers.

|Parameter|Range|
|---|---|
|Card width / height|220–240 /200–220|
|Cell columns /rows|2–4 /1–2 whole cells|
|Dot pitch /guide bore|4–5 /1.8–2.4|
|Well diameter /depth|bore+.8 /.4–.8|
|Paper thickness allowance|.2–.6|
|Backing /guide-key thickness|2–2.8 /1.6–2|
|Key width /TOTAL slot allowance|4.4–6 /.10–.35|
|Part spacing|3.5–5|
|Breakaway width /thickness|.8–1.4 /.4–.6|
|Art footprint /engraving depth|4–7 /.4–.6|
|Art X /Y /rotation|±1.5 /±2 /±180°; safe-zone validation also applies|

Wells have≥.8mm web and≥1.2mm floor. Source-fit regression reconstructs4.5×1.7mm sockets. Impossible/nonfinite/fractional counts or unsupported transforms block export with recoverable errors. No universal printer fit claim.

## Image / SVG → actual engraving

Desktop/phone native file-picker and single-file desktop drag/drop, replace/remove/reset and original synthetic downloadable samples. PNG/JPEG16bytes–2MB; actual image header validation before decode,≤12MP/6000px side, normalized≤500px. Simple SVG≤2000elements rasterized locally to256px; external resources/scripts/references/effects/text rejected.

Documented **sampled 2D-to-height/silhouette engraving**, NOT automatic full3D photo reconstruction or exact vector tracing. Fit/contain or fill/crop, crop shifts±25%, light/transparent background removal or dark inversion, threshold1–254 or grayscale relief.20×20 luminance samples become a closed triangulated heightfield cutter and real Manifold Boolean subtraction. Source pixels/threshold/depth/scale/rotation/placement measurably change exported geometry. Interior bright holes remain unengraved over continuous backing; actual sampled checkerboard cutout and original image shown separately. Text≤8characters (best1–3bold letters) and six searchable icons use the same real conversion. Raised decoration intentionally unsupported to retain bed-flat plate geometry. Art is in protected front badge, away from dot wells and registration slots.

## STL → exact accepted mesh engraving

Actual ASCII/binary STL≤2MB/1500triangles. Explicit millimeter confirmation required; source dimensions/format/triangles and3D source preview shown. Choose Z/Y/negative-Z up before attaching; axis change clears source and requests reattachment. XY scales proportionally to chosen footprint; Z independently to engraving depth, with scale factors displayed. Center/rotate/place/replace/remove/reset affect actual accepted vertices/faces, which are Boolean-subtracted into backing, not simply displayed/re-exported.

Strict bounded contract: one closed outward positive-volume convex solid, broad flat bottom/no overhang footprint, .2–250mm per oriented axis. Verify complete byte/facet layout, finite vertices, nondegenerate faces, opposite two-face welded incidence, adjacency, self-intersections and convexity before CSG. Concave/hollow/branched/disconnected/open/nonmanifold/self-touching/overhung input is rejected with guidance, never silently repaired or replaced by hull. Bottom-footprint hull is ONLY an input-validation predicate. Features below1.2mmXY after scaling are rejected. Exact cut remains within6.5mm radial art zone,≥1.4mm backing, outside all functional wells/slots. Personal files never enter the repo or leave the device.

## Print / assemble / use

1. Print100% mm, PLA/PETG, .16–.20mm layers,3walls, no supports intended. Check card bed envelope and thin runner layers in slicer; clean-part exports fit smaller beds.
2. Snip16 accessible runners1.6mm outside parts. Trim nubs, preserve bores/slots. Keep backing, guide,2keys; discard carrier.
3. Calibrate one key/slot first; adjust TOTAL allowance in.05mm steps for printer/material. Do not globally scale in slicer.
4. Cut paper to cover dot field but leave side registration slots clear. Place paper on backing wells, lower guide, insert both Tkeys from above with shoulders on guide. Use paper matching selected allowance; actual compression is unmodeled. No glue or metal assembly hardware. Keys only register, do not clamp or positively retain stack. Hold flat on desk; do not lift by keys.
5. Use purchased smooth ROUND ball-tip embossing stylus approximately1–1.5mm tip, smaller than selected bore. Press selected positions gently into matched wider wells. Never use a sharp needle. Well depth is maximum recess, not guaranteed paper emboss height. No stylus STL included.
6. Remove keys, lift guide vertically, flip paper to inspect raised dots. Patterns mirror left/right when flipped. No Braille transliteration/standard/readability claim. Physical print, forming force, tears, tactile legibility and wear remain untested.

## Reproducible validation

`npm test` and `node import-extremes.mjs`: all presets/silhouettes/parameter bounds/simultaneous extremes and image/STL-derived outputs. Independent binary STL byte length, finite vertices/unit normals, nondegenerate faces,1e-5mm welded two-opposite-face incidence, positive volume PER component and expected mm dimensions for card and each clean part. Worker validates final closure/winding on every edit.

`collisionCheck`: six assembled part pairs, guide-first/key-second top-down insertion paths, four slot gauges/two key-head stops,1.5mm cylindrical stylus clearance and blind-floor probes at EVERY dot, disjoint packed parts,16 safe snips yielding4parts+carrier and40 sampled support-footprint sections. Paper compression/force/legibility not simulated.

Production browser tests (`browser-test.cjs`, `studio-test.cjs`, `axis-test.cjs`, `stale-test.cjs`, `hole-check.mjs`) exercise real picker PNG/JPEG/ASCII/binary STL, actual STL/ZIP downloads with parsed contents, preview/download/JSON exact signatures, changed image and mesh transforms, malformed/empty/open/concave/excessive/invalid inputs/recovery, preset/shape/text/icon/SVG/hole personalization, undo/redo/local/JSON/missing assets, all views/themes/focus/collapse, worker failure/stale gating, desktop left controls and320/390px phone preview-first/touch/no-overflow/reachable imports/exports. Completed results are in `TEST-RESULTS.md` and machine reports/screenshots.

Libraries: React/ReactDOM, Vite/plugin-react, Three.js, Manifold3D(Apache2), fflate, Fontsource Fredoka/Rubik(SIL OFL); gh-pages deploy and Playwright tests. Computational validation is not physical testing.
