# Lace & Loop — lacing-board kit-card studio

A browser-based React + Vite parametric generator for an original **nine-part physical lacing board**: one personalized board, six shouldered capstan posts and two riser feet. Wrap a user-supplied soft cord loosely below the caps to make geometric patterns, unwrap and route again. This is decorative lacing, not a browser game, weaving loom, tensioned instrument or load-bearing product.

The bed-flat connected card has **24 real unioned breakaway runners**, not loose parts near a rectangle. Export the card or any of the nine de-tabbed parts. Everything ZIP contains ten binary STLs (card + nine parts) and numbered assembly/printing instructions. All printable parts rest at Z=0. Assembled/exploded views never alter export orientation.

## Run / build / verify

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node named-import-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node resilience-test.cjs
node studio-layout-test.cjs
```

Production base `/daily-app2/20261028-27/`, test server `http://127.0.0.1:5487`. Required per-app deploy is `gh-pages -d dist`; public combined-site publication uses ROOT `npm run predeploy` and `npm run deploy`.

## Reference-first evidence and attribution

Searched local STL files under `/Volumes/ExternalHD/3d_printing_apps/` first, including keycap, clicker, slider and fabric collections. Read fabric and kit-card project instructions; none of the local switch/slider/link meshes is an appropriate construction reference for this sheet-based kit. Local kit-card projects contain no suitable reference STL. Downloaded and freshly parsed the public alternative **before selecting the final construction**:

- **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card).
- **CC BY 4.0**, verified repository LICENSE; [license terms](https://creativecommons.org/licenses/by/4.0/). Read source README and kit_frame.scad.
- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, **179.82 × 178.02 × 3.19 mm**, two edge-adjacency components after 0.00001 mm welding. STL has no unit metadata; mm assumption corroborated by source sheet construction.
- Actual mesh Z histogram and rail section Y=100 show **1.6 mm sheet and rail width**, with low bridge elevations **0.21 / 0.22 mm**. Generated/viewed mesh cross-sections Z=0.1, 0.5, 1.59 mm; see `reference-sections.svg`, `reference-sections.png`, `reference-analysis.py` and `reference-analysis.json`.
- Source has nonmanifold/coplanar artifacts; **not repaired, bundled or exported**. It is a measured design reference only. New geometry uses fresh Manifold boolean solids, not a hull approximation or source-model re-export.

### Measured vs redesigned

The measured **1.6 mm sheet** is preserved as minimum/default. Measured 1.6 mm frame is reinforced to **2.4 mm**. Source low bridges inform thicker **0.4–0.6 mm** accessible snip runners: four at the board, two per post and four per riser. The board, six shoulder/neck/cap profiles, riser joints, all outlines and lacing geometry are original parametric reconstruction. Post and joint dimensions below are **proposed design choices, not measured source interfaces**. No cat art/raw STL is redistributed.

Read-only primary studio reference `keycap_generator2`: inspected README, styles, App, Viewer, worker, imageTrace, STL and export modules. Concrete maker patterns: 374 px left rail/sticky brand+theme, collapsible labelled sections, paired mm slider/numeric inputs, raised tactile selected keys, preset model thumbnails, imported-source dimension/unit/orientation controls, large right viewport, dimensions/status/export below. Phone layout is preview-first and stacked. No clicker sockets imposed. Reusable import/editor/export scaffolding was adapted from the preceding studio; the lacing-board builder and assembly checks are new.

## Parameters and assembly constraints

All physical values are **mm** (rotation degrees, threshold /255 explicitly labelled).

| Control | Supported range |
|---|---:|
| Card width / height | 165–195 / 165–200 |
| Board width | 76–90 |
| Post circle radius | 21–26 |
| Post neck width / height | 3.5–4.5 / 10–16 |
| Post cap width | 7–9 |
| Riser height | 6–10 |
| Sheet thickness | 1.6–2.4 |
| Total XY slot allowance | 0.15–0.45 |
| Carrier spacing bias | 4–7 |
| Breakaway runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Three actual presets: Star Lace, Pocket Hex, Open Orbit; Round / Facet / Window change board outline and riser cutouts. Bounded variation changes real geometry. Six post tenons are **4 × sheet** and received by `(4 + allowance) × (sheet + allowance)` slots. Each post shoulder is `cap + 2` wide and stops against the top surface. Two risers each have two **6 × sheet** tenons, entering matching board mortises from BELOW. Posts enter from ABOVE after the risers. Fixed joints require adhesive, not fictional snap capture.

Cap overhang `(cap−neck)/2` is at least **1.25 mm** per side. Usable vertical neck span `postHeight−4` is at least **6 mm**. Nearest post center spacing equals the circle radius; conservative edge gap `radius−cap−2` is at least **10 mm**. Under-board clearance below the post tenons is `riserHeight−sheet`, at least **3.6 mm**. Central decoration is confined to a **6.5 mm radius** safe zone, remote from joints and routing posts.

## Personalize with images, text and icons

Choose PNG, JPEG or a simple self-contained SVG. File picker works on desktop/phone; desktop drag/drop is supported. Included synthetic fixtures: `mark.png`, `waves.jpg`, `ring.svg`. No user data or raw third-party mesh is included.

1. Validate content, file size, dimensions and decoded pixel count before conversion.
2. PNG/JPEG normalized to at most 500 px on the longest side; alpha composites against the chosen background. SVG permits only simple path/shape/group elements with no scripts, external resources, effects or text references; rasterizes locally to 256 px.
3. Fit whole source or fill/crop, shift X/Y ±25%, choose light removal or dark inversion.
4. Sample a **20 × 20 luminance grid**. Threshold 1–254 creates raised/engraved silhouette relief; grayscale uses `depth*(1−luminance/255)`. A closed triangulated height surface with a solid backing is genuinely boolean-unioned or subtracted into the board.
5. Relief depth 0.4–3 mm; engraving restricted to 0.4–0.6 mm to retain the floor. Footprint 4–7 mm, rotation ±180°, placement X ±1.5 / Y ±2 mm, checked against the 6.5 mm circular safe zone.

The original and **actual thresholded cutout** appear on checkerboards. White/transparent holes remain unraised or unengraved inside the continuous backing; they are not through-holes in the structural board. This is sampled **2D-to-relief, not reconstruction of a full 3D object from one photo**, and not exact continuous contour tracing. Very fine marks may be below printable resolution; inspect the grid/mesh. Empty images and unsafe placement disable export. Text (up to eight characters) and six searchable bundled SVG icons pass through this same real geometry path. Preview swatches are visual only; STL does not store colour.

## Integrate an STL grip

ASCII and binary STL are supported with source preview, dimensions and a mandatory explicit mm checkbox. Select Z-up, Y-up (+90° X) or inverted Z **before attaching**; changing it clears the asset and requests reattachment. Both synthetic fixtures are included (`wedge-ascii.stl`, `gem-binary.stl`).

The parser checks complete content/byte count, finite coordinates, degenerate faces, welded edge incidence and orientation, connected component count, positive volume, triangle-triangle intersections, dimensions, convexity and broad flat bed contact. Integration currently supports **one closed, outward-wound, convex, broad-flat-bottom solid without overhangs**. Concavities, cavities, branches, disconnected pieces and unsupported geometry are rejected explicitly with guidance. No arbitrary hull replacement or claimed automatic repair occurs. A small convex hull is used only to validate flat bed contact, never as exported substitute geometry.

Limits: **2 MB**, **1,500 triangles**, every source dimension **0.2–250 mm**, coordinate magnitude ≤10,000. PNG/JPEG ≤12 MP and ≤6,000 px per side. SVG ≤2,000 elements. These are intentional browser resource bounds.

XY scales proportionally to the 4–7 mm target footprint; Z independently fits the 0.6–3 mm grip height. Rotate, center/reset, and place it inside the isolated board medallion. The **original accepted mesh** is boolean-unioned with a 0.15 mm overlap into the well floor; it measurably changes the final board/card. It cannot obstruct the posts or riser joints. Replace/remove restores the built-in mark. Unsupported inputs preserve a labelled last-valid preview but **disable every STL/ZIP export**, as do invalid transformations.

## Local state, worker and privacy

All modeling, parsing, pixel conversion and exports execute in this browser. No upload, API key, paid service, CDN, remote font or runtime model fetch. Dependencies/fonts/WASM bundle locally. Sample requests target only the app's own static files.

Heavy Manifold modeling and STL preflight run in a dedicated worker. Edits debounce 100 ms; request IDs and an exact current-state key prevent late results or last-good geometry being exported for invalid/current edits. Worker failures show a reload instruction and block export. Every current output passes an independent welded-edge/winding/finite/degeneracy preflight in the worker.

Undo/redo keeps bounded history. Up to six named designs persist locally. JSON save/open stores bounded normalized PNG or validated mesh payloads plus transforms, not inaccessible file paths. Missing image payloads request reattachment; corrupt/excessive payloads are rejected. JSON input capped at 2 MB. Light/dark theme persists in localStorage. Focus rings, 44 px tap targets, collapsible groups, reduced-motion CSS and touch orbit/pinch are provided.

## Print, calibrate and assemble

1. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. Print card/parts bed-flat, decoration up; supports not intended. Use millimeters, 100% scale. Card default 180 × 185 mm; download individual parts for smaller beds.
2. Adult: snip **24** accessible low runners. Trim remaining stubs/elephant foot flush, especially at tenons. Do not tear parts off.
3. Trial-print a post and board before the full card; begin total slot allowance at 0.30 mm, adjust within 0.15–0.45 for material/printer. Not a universal press fit.
4. Seat the two risers from below, shoulder-to-board underside. Secure fixed joints with suitable adhesive.
5. Insert all six posts from above, shoulders against the board top. Glue the tenons and allow full cure. Cap orientation follows the board's X axis; no forced flexure/snap assembly.
6. Supply **one 0.8–1.5 mm soft cord, approximately 0.8–1.2 m**. Tie a loose loop around one neck, route around alternate posts or the perimeter below the broad caps, and tie off loosely. Unwrap to change patterns. Cord and adhesive are required consumables.
7. No tensioning, hanging loads or wrapping around fingers. Computational fit checks do not establish adhesive pull-out strength, cord friction, fatigue or child safety. Adult desk miniature; keep cord, small parts, glue and cutters away from children/pets.

No physical print, force, fatigue, cord-friction, adhesive-strength or safety tests are claimed.

## Computational and browser validation

`validate.mjs` checks default, every preset, independent min/max and mixed extreme dimensions, plus threshold/grayscale/engraved images and ASCII/binary STL grips. Independent binary-STL validation checks exact byte count, finite coordinates, nondegenerate faces, stored normals, **0.00001 mm welded opposite two-face edge incidence**, positive volume per component, Euler topology and expected millimeter bounds. Every individual part and connected card is separately checked.

Independent Manifold intersection checks verify all assembled parts, riser insertion from below and post insertion from above, card-layout separation, and 24 snips producing **nine parts + one carrier**. Float32 coincident shoulder contacts use a documented 0.0001 mm³ numerical intersection tolerance, not a real designed interference. Cap overhang, neck space and clearance budgets are computed separately from watertightness.

Production browser tests use real file pickers and actual downloaded STL/ZIP bytes. Each output fingerprint matches the current preview result and Node regeneration of saved JSON; imports, pixel/threshold/depth/scale/rotation/placement changes must change geometry versus default. Tests also cover replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive inputs, empty silhouettes, protected-zone violations, SVG hole mesh probes, all six icons, text, presets/variations, undo/redo, named and JSON portable assets, missing-payload errors, worker-abort/reload, stale imports/results, all inspection views, saved dark theme, keyboard focus, collapsible sections and reduced motion.

390/320 px touch contexts check no horizontal overflow, reachable exports, real image/STL uploads and downloads; CDP touch orbit/pinch are verified by changed canvas screenshots. See `VALIDATION.md` and machine-readable reports for completed checks. Tests run on the production bundle at its real base prefix, not only Vite development mode.

## Dependencies and privacy

React, React DOM, Vite/React plugin, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for verification. Dependencies and fonts bundle locally. User files never leave the browser and are not saved to the repository. Synthetic samples only. No runtime API, CDN, paid service or key.
