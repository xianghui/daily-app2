# Roll & Relay — rolling cascade kit-card studio

A local React + Vite maker studio for an original **seven-part flat-pack rolling cascade**: marked base, front/rear guide cheeks, three alternating inclined ramps and a loose annular roller. Print the roller bed-flat, stand it upright in the upper-left channel, and release: right → drop → left → drop → right. This is a physical desk miniature, not a browser game or motion simulation.

The connected card contains real unioned breakaway tabs and carrier rails. It is not a loose print-plate arrangement. Export the card or each de-tabbed part; Everything ZIP includes eight actual binary STLs (card + seven parts) and numbered assembly instructions. Export is always bed-flat, irrespective of the inspection view. STL has no colour or unit metadata: use **millimeters, 100% scale**.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

Production base: `/daily-app2/20261028-26/`. The local production server listens at `http://127.0.0.1:5486` and serves that prefix. `deploy` is the required per-app `gh-pages -d dist`; public monorepo publication uses the repository ROOT deployment instead.

## Reference-first evidence and attribution

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Read the fabric reference README and inspected the available clicker/slider/spring/link candidate list; these are not suitable sources for bed-flat card joints. No local kit-card STL was present, so a public licensed construction reference was downloaded and parsed **before choosing the final geometry**:

- **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card).
- **CC BY 4.0** — repository LICENSE verified, [license terms](https://creativecommons.org/licenses/by/4.0/).
- Download URL, SHA-256, bounds, triangle/component counts, actual source mesh defects, section measurements and original/new parameter mapping are in `reference-analysis.json`.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Parsed binary STL: 30,616 triangles, approximately **179.82 × 178.02 × 3.19 mm**, two edge-adjacency components after 0.00001 mm welding. STL units are assumed mm, corroborated by the source OpenSCAD `thickness=1.6`.
- Measured sheet and perimeter rail: **1.6 mm**. Source low-bridge vertex elevations include **0.21 / 0.22 mm**. Viewed actual cross-sections at Z=0.1, 0.5 and 1.59 mm in `reference-sections.png`, with a measured Y=100 rail section spanning X=0..1.6 mm. See the reproducible parser `reference-analysis.py`.
- Source contains nonmanifold/coplanar artifacts. It was **not repaired, bundled or exported**. It serves as a measured construction reference only. The new card uses fresh closed Manifold solids.

### Concrete adaptation

Measured 1.6 mm sheet becomes the minimum/default panel thickness. Measured 1.6 mm perimeter rails are reinforced to 2.4 mm. Thin source bridges become deliberately stronger, accessible 0.4–0.6 mm snip runners, four per part. The seven cascade outlines, inclined ramp mortises, roller and clearance equations are an **original parametric reconstruction**, not cat-model redistribution or an unchanged re-export. All proposed tolerances and cascade dimensions below are new design choices, not measured source fits.

The primary studio visual/interaction reference was read-only `keycap_generator2`: README, styles, App, Viewer, worker, imageTrace, STL and export modules inspected. Concrete patterns used: 374 px left rail with sticky brand/theme header, labelled collapsible sections, paired millimeter slider/number inputs, raised selected keys, model thumbnails, imported-source dimensions/up-axis/scale controls, large right-side orbit viewport, status/dimensions and prominent export. Phone view is preview-first and stacked. No switch socket or keycap geometry is imposed on this kit. Reusable local studio/import scaffolding was adapted from the preceding kit studio; the complete cascade solid builder and independent assembly/roller checks are new.

## Controls and supported ranges

All physical dimensions are **mm**.

| Parameter | Range | Purpose |
|---|---:|---|
| Card width / height | 220–250 / 235–270 | Actual connected envelope; use separate parts on smaller beds |
| Base length | 100–112 | Ramp run and overall stance |
| Tier separation | 24–28 | Ramp centerline vertical separation |
| Roller radius | 4–5 | Actual loose annular rolling part |
| Ramp rise | 6–10 | Geometric fall over each ramp's longitudinal length |
| Drop opening | 13–16 | Gap beyond each alternating ramp end |
| Sheet thickness | 1.6–2.4 | Feet, ramps, cheeks and roller thickness |
| Total joint allowance | 0.15–0.45 | Added to both axes of each fixed slot, not per side |
| Roller side clearance | 0.5–0.8 per face | Channel width = sheet + twice clearance |
| Carrier spacing bias | 4–7 | Part placement/cutter access within frame rows |
| Breakaway width / height | 0.8–1.4 / 0.4–0.6 | Four accessible low runners per part |
| Base dimple depth | 0–0.4 | Real subtracted grip texture outside protected artwork well |

Three presets and a bounded variation button alter actual geometry. Round / Facet / Window alter base corners and cheek details while retaining circular rolling edges. Some individually allowed dimension combinations cannot fit the declared carrier width; these are blocked with an actionable "Card too narrow" error, never silently resized. No unbounded custom mechanism settings are accepted.

Let `L=baseLength−12`, `A=L−dropOpening`, `theta=asin(rampRise/A)`. Ramps alternate ±theta around Y; the cheek slots are rotated rectangles matching those actual ramp tab cross-sections. Two tab pairs per ramp seat into corresponding slots. Cheek feet insert downward into four base mortises. The clear vertical conservative tier budget is `tierSeparation−rampRise−sheet−2*rollerRadius` (at least 1.6 mm over the supported independent extrema), and the end-drop budget is `dropOpening−2*rollerRadius` (at least 3 mm). A swept circular roller envelope checks straight runs, the rounded departure arc and each vertical drop. It does not model friction, impact, tilt or bounce.

## Personalize with images, text and icons

Choose PNG, JPEG or a simple self-contained SVG. File picker works on desktop/phone; desktop drag/drop is supported. Included synthetic fixtures: `mark.png`, `waves.jpg`, `ring.svg`. No user data or raw third-party mesh is included.

1. Validate content, file size, dimensions and decoded pixel count before conversion.
2. PNG/JPEG normalized to at most 500 px on the longest side; alpha composites against the chosen background. SVG permits only simple path/shape/group elements with no scripts, external resources, effects or text references; rasterizes locally to 256 px.
3. Fit whole source or fill/crop, shift X/Y ±25%, choose light removal or dark inversion.
4. Sample a **20 × 20 luminance grid**. Threshold 1–254 creates raised/engraved silhouette relief; grayscale uses `depth*(1−luminance/255)`. A closed triangulated height surface with a solid backing is genuinely boolean-unioned or subtracted into the base.
5. Relief depth 0.4–3 mm; engraving restricted to 0.4–0.6 mm to retain the floor. Footprint 4–7 mm, rotation ±180°, placement X ±1.5 / Y ±2 mm, checked against the 6.5 mm circular safe zone.

The original and **actual thresholded cutout** appear on checkerboards. White/transparent holes remain unraised or unengraved inside the continuous backing; they are not through-holes in the structural base. This is sampled **2D-to-relief, not reconstruction of a full 3D object from one photo**, and not exact continuous contour tracing. Very fine marks may be below printable resolution; inspect the grid/mesh. Empty images and unsafe placement disable export. Text (up to eight characters) and six searchable bundled SVG icons pass through this same real geometry path. Preview swatches are visual only; STL does not store colour.

## Integrate an STL grip

ASCII and binary STL are supported with source preview, dimensions and a mandatory explicit mm checkbox. Select Z-up, Y-up (+90° X) or inverted Z **before attaching**; changing it clears the asset and requests reattachment. Both synthetic fixtures are included (`wedge-ascii.stl`, `gem-binary.stl`).

The parser checks complete content/byte count, finite coordinates, degenerate faces, welded edge incidence and orientation, connected component count, positive volume, triangle-triangle intersections, dimensions, convexity and broad flat bed contact. Integration currently supports **one closed, outward-wound, convex, broad-flat-bottom solid without overhangs**. Concavities, cavities, branches, disconnected pieces and unsupported geometry are rejected explicitly with guidance. No arbitrary hull replacement or claimed automatic repair occurs. A small convex hull is used only to validate flat bed contact, never as exported substitute geometry.

Limits: **2 MB**, **1,500 triangles**, every source dimension **0.2–250 mm**, coordinate magnitude ≤10,000. PNG/JPEG ≤12 MP and ≤6,000 px per side. SVG ≤2,000 elements. These are intentional browser resource bounds.

XY scales proportionally to the 4–7 mm target footprint; Z independently fits the 0.6–3 mm grip height. Rotate, center/reset, and place it inside the isolated base medallion. The **original accepted mesh** is boolean-unioned with a 0.15 mm overlap into the well floor; it measurably changes the final base/card. It cannot obstruct the ramps or guide joints. Replace/remove restores the built-in mark. Unsupported inputs preserve a labelled last-valid preview but **disable every STL/ZIP export**, as do invalid transformations.

## Local state, worker and privacy

All modeling, parsing, pixel conversion and exports execute in this browser. No upload, API key, paid service, CDN, remote font or runtime model fetch. Dependencies/fonts/WASM bundle locally. Sample requests target only the app's own static files.

Heavy Manifold modeling and STL preflight run in a dedicated worker. Edits debounce 100 ms; request IDs and an exact current-state key prevent late results or last-good geometry being exported for invalid/current edits. Worker failures show a reload instruction and block export. Every current output passes an independent welded-edge/winding/finite/degeneracy preflight in the worker.

Undo/redo keeps bounded history. Up to six named designs persist locally. JSON save/open stores bounded normalized PNG or validated mesh payloads plus transforms, not inaccessible file paths. Missing image payloads request reattachment; corrupt/excessive payloads are rejected. JSON input capped at 2 MB. Light/dark theme persists in localStorage. Focus rings, 44 px tap targets, collapsible groups, reduced-motion CSS and touch orbit/pinch are provided.

## Print, calibrate and assemble

1. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls; everything bed-flat, decoration up. No supports intended. A 235 × 250 mm default card may exceed a small bed: download individual STLs instead.
2. Snip all **28** low runners; trim nubs away from functional joints and roller rim. Do not rip the card apart. Parts remain distinct after snipping.
3. Trial-print a cheek and ramp before the full card; try total slot allowance 0.30 mm, then adjust within 0.15–0.45 mm for your material/printer and elephant foot. These are not universal tolerances.
4. Fit all three ramps to one cheek, bring the opposite cheek onto all six tabs, then lower the joined assembly's four feet into the base. Correct alternating slopes: upper/lower descend right; middle descends left.
5. **Suitable adhesive required for fixed ramp and foot joints**; these are clearance joints, not positive snap retention. Cure fully, keep glue out of the rolling channel. No additional bearings, magnets, screws, cord or purchased ball required.
6. Stand the printed roller upright near the upper-left high end. Release gently; retrieve from the open top after the third run. It is intentionally loose, not captive. No forceful flicking; stop if it jams. Tilt/friction/bounce need physical calibration.

Adult desk miniature, not a child-safe toy. Small roller, sharp cutters and glue require care. No physical print, rolling-force, impact, fatigue, glue-strength or child-safety testing is claimed.

## Computational validation

Reproducible scripts/reports are included. `validate.mjs` tests defaults, every preset, representative independent parameter extremes and image/STL-derived outputs. It checks final float32 binary STLs: exact byte count, finite coordinates, nonzero triangle area, normals/winding, 0.00001 mm welded opposite two-face edge incidence, per-component positive volume and expected mm bounds. All seven part meshes are checked individually, along with the actual single connected card.

Independent Manifold intersection checks test assembled solids, opposite-cheek Y insertion, base Z insertion, straight/arc/drop roller paths, part separation and 28 snips producing seven parts plus one carrier. Coplanar fitted shoulders after float32 STL-style serialization use a documented **0.0001 mm³** numerical intersection-volume tolerance; moving-envelope checks use 0.02 mm test separation and a 0.00001 mm³ threshold. These tolerances address float32 contact planes, not real designed interference.

Browser scripts upload real PNG/JPEG/ASCII/binary files, download/parse actual STL/ZIP bytes, compare geometry signatures and Node regeneration of saved JSON, test dimensions/threshold/depth/scale/rotation/placement, invalid files, safe-zone errors, replace/remove/reset, artwork holes, named/portable designs, stale parsing, worker failure recovery, previews/presets, focus/theme and 320/390 px phone touch orbit/pinch. They run against the **production bundle at its true base prefix**. Exact completed counts/results are in `VALIDATION.md` and JSON reports. Mesh/fit checks are not physical-print testing.

## Dependencies / code

React / React DOM, Vite + React plugin, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (locally bundled OFL fonts), gh-pages; Playwright for validation. `src/geometry.js` is shared by Node and worker; `src/imports.js` handles strict input checks; `src/model.worker.js` owns the kernel; `src/Preview.jsx` renders exactly the output meshes; `src/App.jsx` owns controls, local state and current-result export gates. Library licenses remain with their respective authors.
