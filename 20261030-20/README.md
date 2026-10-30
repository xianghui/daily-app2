# Cam & Cradle

A reference-grounded **six-part flat-pack eccentric paper-holder kit-card generator**. Snip 24 runners, stand two arched cheeks in four deck sockets, install a handled eccentric cam on a flat headed axle, and bond its sliding keeper. Turn slowly to vary a paper nip from nominal 0.5 mm to 0.5 + twice the selected eccentricity. The arches accept a 12 mm paper strip or edge through a 14 × 7 mm passage. This is a small assembly study, not a certified clamp. No physical print, force, self-locking or durability testing is claimed.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; base `/daily-app2/20261030-20/`. Individual `deploy` uses gh-pages, but publication is through the parent monorepo's ROOT `predeploy`/`deploy` and combined `deploy/` tree. STL downloads are binary, in millimeter coordinates, bed-flat at Z=0. A connected-card STL includes real runners; six individual part exports omit tabs. Everything ZIP contains seven STLs plus numbered assembly instructions/current fits. STL does not contain preview colours; no 3MF claims.

## Actual reference evidence and adaptation

Local STL candidates were found FIRST under `/Volumes/ExternalHD/3d_printing_apps/`. The keycap project's README, styles, App, Viewer, worker, export, STL and image-conversion modules were inspected read-only. The actual clicker template and diamond-link meshes were parsed: switch geometry and an 8 mm interlocking fabric link are unsuitable for a sheet kit. Their dimensions/hashes/components/rejection reasons are in `reference-measurements.json`.

The chosen public reference is **White Cat Kit Card**, Mike Kasberg: https://github.com/mkasberg/white-cat-kit-card ; Printables 865769. CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. Source README/LICENSE snapshots are included. No endorsement implied.

The actual binary STL was downloaded and parsed before the final design. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, bounds **179.820 × 178.020 × 3.190 mm**, **27 edge-adjacent components**, NOT watertight. Millimeters are an assumption corroborated by sheet dimensions; STL has no units. Cross-sections at Z=.1/.5/1.59 mm are recorded in `evidence/reference-sections.png`. Measurements show 1.6 mm sheet planes, actual 4.5 × 1.700012 mm sockets, and .21/.22 mm low runners. Reference defects were not repaired or published; raw reference STL is not bundled.

The original parametric reconstruction retains the measured sheet/interface grammar, not source ship outlines. A 4.4 mm tongue + .10 TOTAL allowance reproduces the measured socket. Default .15 allowance and .10–.35 range are PROPOSED calibration choices. New features are arched cheeks, an eccentric handled disc, round bearings sized for the corner envelope of a flat shaft, a bonded keeper, stronger .4–.6 mm runners, three genuine deck silhouettes and a protected engraving badge. Exact mappings and deviations are in `reference-analysis.json`.

Unlike the earlier spring-follower Camber fidget, this kit assembles a stationary paper deck with a free manually turned nip cam and open feed arches; it has no spring or guided follower. Unlike the earlier wedge press, it has no sliding platen or opposed wedges. The studio, strict import parser and independent STL test helpers reuse local infrastructure; mechanism solids, assembly transformations, insertion/nip/capture tests are new.

## Maker studio

374 px scrollable left rail and large right viewer; phone preview/toolbar/export FIRST, then stacked controls. Lavender-grey desk, white panels, coral tactile keys, saved dark theme, local Fredoka/Rubik fonts, keyboard focus and reduced-motion handling. Three real model-thumbnail presets, soft rectangle/hexagonal/capsule decks, bounded variation, undo/redo, up to six named local designs and JSON save/open. Assembly, exploded, real connected card, de-tabbed plate and isolated-part views use the same generated solids. The half-turn slider is preview-only and labelled; exports remain flat. No stock/paper simulation or force prediction.

## Parameters (all physical values in mm)

| Parameter | Supported range |
|---|---|
| Card X / Y | 200–230 / 150–175 |
| Cam diameter / eccentricity | 24–30 / 2–3 |
| Deck length / width | 50–60 / fixed44 |
| Thumb lever extension | 10–16 |
| Deck thickness / other sheets | 2–2.8 / measured1.6 |
| Axial cam gap per side | .25–.45 |
| Tongue/axle width | 4.4–6 |
| Socket TOTAL allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Artwork footprint / depth | 4–7 / .4–.6 |
| Artwork X / Y offset | ±1.5 / ±2 (safe-radius validation also applies) |
| Artwork rotation | ±180 degrees |

Circular bores use `hypot(axleWidth/2, .8) + .25 mm`, not a rectangular friction fit. Axis height is `deckThickness + camRadius + eccentricity + .5 mm`. Half-turn is −90° closed to +90° open; no hard mechanical stop or force-limiting feature is claimed. The 96-segment circle has <.01 mm nip discretization error. Keeper and head capture overlap is >=1.64 mm; keeper retention REQUIRES adhesive. Axle endplay .35 mm EACH outside cheek face. Selected geometries cannot fuse intended moving parts; independently checked half-turn range remains collision-free without stock.

## Image → actual geometry

Desktop/phone file pickers, drag/drop and synthetic sample buttons support PNG, JPEG and simple SVG. Max2 MB, PNG/JPEG max12 MP and6000 px per side; preflight reads headers before decode. Raster sources normalize to <=500 px, then contain/cover/crop into a **20 × 20** grid. Alpha composites onto selected light/dark background. Light background keeps dark foreground; dark mode inverts luminance. Threshold makes selected samples full depth; grayscale depth is proportional to `1-luminance/255`. The grid is triangulated into a closed backed height solid and Boolean-subtracted from the badge. Placement/physical scale/rotation/depth change exported triangles, not textures. Bright internal holes remain unengraved; exact solid-probe tests verify this. This is sampled **2D-to-relief**, not exact contour tracing or reconstruction of a full 3D object. Minimum sample pitch is footprint/19; tiny details may disappear. Source and actual checkerboard cutout/height preview are shown. Empty silhouettes fail recoverably. Raised art is deliberately unsupported on this protected bed-flat design.

SVG is limited to simple local filled shapes/paths, <=2000 elements, rasterized at256 px; scripts, refs, external resources, effects and embedded content are rejected. Text and six searchable bundled icons follow the same geometry route. Synthetic fixtures are original test assets; no private input is stored in the repository.

## STL → actual geometry

ASCII and binary STL max2 MB /1500 triangles; each axis .2–250 mm; finite transforms and nondegenerate faces required. The parser welds at1e-5 mm, requires exactly two oppositely directed faces per edge, one connected outward solid and positive volume. It checks triangle intersections, convexity and broad flat-down contact (>=25% footprint) with no projected overhang. **Concave, hollow, open, nonmanifold, disconnected, inward, self-intersecting or unsupported overhung meshes are explicitly rejected. No repair and no convex-hull replacement.** A hull is only used analytically to check bottom contact, never as replacement geometry.

Select Z up, Y up or −Z up BEFORE attaching; source preview/dimensions and explicit millimeter confirmation are required. XY scales proportionally to selected footprint; Z independently fits engraving depth. Rotate, center/reset, nudge, replace/remove. The original verified solid is Boolean-subtracted into the front-deck badge. Guarded safe radius prevents cut-through or joint obstruction; backing >=1.4 mm. Unit/orientation/scale/depth/placement survive STL export and portable JSON. Unsupported source errors disable export until replaced, removed or reset.

## Privacy, responsiveness and exact results

All user files stay in the browser. No remote APIs, uploads, keys, CDN imports or server are used for generation/export. Dependencies and fonts bundle locally. Manifold WASM CSG and mesh validation run in a debounced Web Worker; request IDs/current-state keys prevent stale exports. Building/error status is real. Invalid edits retain a visibly labelled last-good preview with all exports disabled; no silent fallback. Worker loading failure blocks export and recommends reload. Preview and STL use identical current indexed mesh buffers; UI mesh fingerprint is checked against downloaded bytes.

JSON/local designs carry bounded normalized PNG and/or original triangle payloads (2 MB JSON, <=1.8 MB PNG data URL and <=250k portable pixels). Restored meshes are revalidated; a missing image payload requests reattachment instead of pretending restoration. Undo/redo restores the same bounded source state. Files are not saved unless the user explicitly saves a design locally/downloads JSON.

## Print, calibrate and assemble

1. Print a deck and cheek as a full-size fit calibration pair before a full card; adjust total socket allowance to your printer/material. Also check axle/bore and keeper fit. Defaults are starting points, not universal tolerances.
2. Bed-flat, PLA/PETG, .16–.20 layers, three perimeters,100%scale. No supports intended. Card has 24 real runners; snip at least1.6 mm outside part edges, then trim nubs. Keep four functional tongues intact.
3. Seat two cheeks vertically with all four shoulders on the deck; bond four socket joints and cure. Their 14 ×7 mm arches align across the feed path.
4. Lower cam between cheeks, align three round bores, slide headed axle straight through. Slide keeper onto far shaft and bond keeper ONLY to axle, leaving .35 mm endplay on each outside face. Allow adhesive to cure; do not glue cam/bearings. Captive only after cure. No metal hardware needed. Adhesive is an external consumable; an unbonded lift-out demo is not retained.
5. Feed a soft strip/edge <=12 mm wide through both arches. Stack/pad thickness must lie in .5 to (.5+2e) mm nominal nip range. Thin paper needs a sacrificial pad. Gently turn from open toward contact, stop at contact, reopen to release. No physical self-locking or holding-force claim. Keep fingers clear. Do not force through stock or use for structural loads/powered tools.

## Verification

`npm test` runs 34 built-in cases plus8 import cases; `node import-extremes.mjs` runs93 imported-image/STL preset/extreme cases. Every part and connected-card binary STL is independently checked: byte count, finite vertices, nondegenerate triangles, normalized consistent stored normals, expected mm dimensions, welded1e-5 edge incidence, per-component positive volume and topology. Real card bounds/connectivity,24 safe snips ->six parts+carrier, flat separation, bed-supported upper cross-sections, four source-fit socket gauges, shoulder stops, staged insertion, head/keeper capture and25 cam positions per case are tested with exact solid intersections. Paper entry and actual-vs-nominal nip are checked independently. Imported outputs receive the SAME checks. No raw source mesh is used as output.

Production-browser scripts exercise real PNG/JPEG/SVG/ASCII/binary pickers, malformed/truncated/open/nonmanifold/concave/oversize/bad-dimension files, empty images and invalid transforms, unit gating, source replacement/removal/reset, threshold/crop/depth/scale/rotation/placement geometry changes, exact downloaded STL vs UI fingerprint vs JSON-regenerated mesh, every preset, text/icons, hole preservation, per-part STL and ZIP contents, saved designs, undo/redo, all views, saved theme, focus/collapse/reduced motion, worker failure/recovery and320/390 px phone orbit/pinch/downloads with no horizontal overflow. Screenshots/reports/scripts are checked in.

Computational validation is NOT physical print, slicer, adhesive strength, clamping-force, wear or accuracy testing. No such tests were performed.

## Source map and dependencies

`src/geometry.js`: pure builder/poses/STL/validation; `model.worker.js`: Manifold loader/build/parser; `imports.js`: strict local file preflight; `App.jsx`: controls/imports/persistence/export; `Preview.jsx`: Three.js/OrbitControls. Dependencies: React/ReactDOM MIT; Vite MIT; Three.js MIT; Manifold Apache-2.0; fflate MIT; gh-pages MIT; Fontsource Fredoka/Rubik SIL OFL; Playwright Apache-2.0 (tests). Reference attribution/CC BY4.0 snapshots remain separate from original reconstruction code.
