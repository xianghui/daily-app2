# Observed validation — Score & Square, 2026-10-30

## Reference evidence

Actual newly downloaded public STL parsed, SHA-256 checked, connected-component/bounds measurements and Z=.1/.5/1.59 sections regenerated with trimesh. Selected source has documented CC BY4 terms; raw source is not redistributed. Both local candidate meshes were also parsed/hashes recorded after reading project instructions. Measured 1.6mm sheet and 4.5×1.7mm socket map to actual generator controls: four 4.4mm tongues with .10mm TOTAL allowance reproduce that fit. Source defects remain disclosed. `reference-analysis.json` distinguishes measurements, proposed tolerances and entirely new geometry.

## Computational checks actually run

- `npm test`: **34 built-in cases** (all presets/shapes, every field min/max, combined extrema) plus **8 import cases**. Every case checks all four exported meshes, float32 binary STL size, finite coordinates, unit normals, nondegenerate triangles, exactly two opposite-directed face incidents per welded edge (1e-5mm), each connected component positive signed volume, and declared mm bounds.
- `node import-extremes.mjs`: **93 additional image/convex-STL cases**, covering presets, combined extrema and each field endpoint, with the same full mesh/assembly checks. All imports differ from no-import output; source-measured socket reproduction explicitly asserted.
- For every case: one connected card; three individually connected pieces; flat layout pairwise disjoint; 12 cuts avoid all functional pieces and release exactly four components (three pieces plus carrier). Eight upper sections per exported solid stay within a .00002mm-expanded bed footprint. An initially undercut diagonal-slot design failed this check and was corrected to constant-through-sheet rectangular mouths with explicit skew allowance.
- Assembly: all three assembled solids pairwise nonintersecting; 50 sampled vertical wall-insertion poses clear the deck/opposite wall; four socket gauges; two real shoulder stops; three continuous scoring-plane gauges fit both wall mouths, and lowered gauges contact the intended 6mm backbone. Inner-face work channel independently matches its control. Engraving backing≥1.4mm. These are fixed adhesive joints, not movement/friction-retention simulations.
- `node hole-check.mjs`: actual Boolean-solid probes show a bright center hole stays solid/unengraved while dark ring pixels remove material.

## Actual production-browser checks

`node browser-test.cjs` serves bundled `dist/` under `/daily-app2/20261030-19/`, not just Vite dev. Real file-picker PNG/JPEG/ASCII-STL/binary-STL imports, actual downloaded bytes and UI mesh signatures are compared with Node regeneration from portable JSON, then mesh/assembly checks rerun. Changed pixels, threshold, depth, crop, image footprint, STL footprint/rotation/placement survive export. Remove/reset reproduces baseline. Source units must be explicitly confirmed.

Malformed/truncated/open/nonmanifold/concave/oversize/bad-dimension/too-many-triangle/bad-content/empty-image and invalid transform/dimension cases block exports and recover through replace/remove/reset. Every part is actually downloaded. 390px touch orbit/pinch changes rendered canvas; phone image/STL exports work; 320/390px no horizontal overflow and export reachable. Zero page runtime errors or external app requests.

`node studio-test.cjs`: all preset real STL downloads and checks, three silhouettes, text/searchable icons/SVG, image and exact mesh JSON round trips, named designs/reload, missing-payload rejection, undo/redo, actual ZIP unpack with every contained STL parsed, numbered instructions, all views, saved dark mode, keyboard focus, collapsible sections, reduced-motion context, 374px desktop left panel, 320px preview-first order. Intentionally aborted production worker blocks exports with actionable error; reload recovers.

`node axis-test.cjs`: actual Y-up/negative-Z synthetic STL uploads orient, engrave and export exactly like expected Z-up geometry; changing axis clears source. `node preview-test.cjs`: assembled/card/exploded/phone screenshots retained; visually inspected assembled desktop, phone and reference sections.

## Build/publication checks

Per-app `npm run predeploy` passed. Root inline scripts compile with `new Function`; newest STL entry appears once and all 291 earlier gallery entries remain unchanged. Combined output, browser gallery/runtime and public deployment verification are recorded in the adjacent JSON reports after running their scripts. Publication is through root `deploy/`, not individual app deploy.

## Limits

**No physical print, scoring, adhesive-strength, stability, wear or accuracy test was performed.** Sheet geometry is computationally checked, not universally printable on any machine. Print and calibrate deck + one wall first. Channels stop6mm above deck and require a sacrificial spacer: not a full-depth saw box. Diagonal mouths intentionally include extra skew clearance, not precision guidance. Four fixed tongue bonds and external blunt scoring tool/stock/spacer are required. STL accepts only verified closed convex supported input; other meshes are rejected, not repaired. SVG/image conversion is20×20 sampled relief, not exact tracing or photo-to-full-3D reconstruction. STL has no units/colour metadata; confirm mm and use100% scale.

Public verification completed: https://xianghui.github.io/daily-app2/20261030-19/ returned HTTP200; exact production index, gallery entry, live bundled worker/WASM, zero page errors, and actual downloaded default STL validated against local current geometry. Root deploy reported Published with292 apps,0 failures/skips.
