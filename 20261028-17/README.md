# Match & Drop

A browser-based React + Vite parametric **seven-part miniature shape-sorter kit card**. Snip 28 real low tabs, stand two pierced cheeks in a marked floor and lower the three-aperture roof onto their upper tongues. Match and drop three dissimilar tokens, retrieve through the open front. This is a physical printable kit, not a browser game. No hardware, switches, magnets, bearings or paid services.

**Adult desk-scale model only. Small tokens and cutters are choking/cutting hazards; not a children’s toy.** No physical print or strength/friction test was performed.

## Run

```
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node studio-layout-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
```

Production testing serves the actual built bundle at `http://127.0.0.1:5477/daily-app2/20261028-17/`. `predeploy` is exactly `npm run build`; individual `deploy` is `gh-pages -d dist`. Public combined-site publication uses the ROOT repository predeploy/deploy, not the per-app deployment.

## Inspected STL reference, attribution and decisions

Local STL trees under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Actual available meshes include clicker cavity/stem/socket cutters, slider ghosts/pumpkins, spring ghost and woven links; these are not sheet-and-breakaway-card construction references. No suitable local kit-card STL was found. The public alternative below was **downloaded and parsed afresh**, not inferred from a listing image or a previous app description.

- **White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [repository](https://github.com/mkasberg/white-cat-kit-card).
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), verified repository LICENSE and README. Read `kit_frame.scad` and `white-cat-kit-card.scad` alongside measured geometry.
- Binary STL, 1,530,884 bytes, 30,616 triangles. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Assumed millimeters: STL has no unit metadata. Source OpenSCAD thickness corroborates the interpretation. Bounds approximately −0.01…179.81, −0.01…178.01, 0…3.19 mm; size **179.82 × 178.02 × 3.19 mm**.
- Edge-adjacency welding at 0.00001 mm yields **two components** (26,870 and 3,746 triangles). Original has nonmanifold/coplanar facet artifacts, explicitly recorded, not repaired, imported as printable or redistributed.
- Actual mesh sections at Z=0.1, 0.5 and 1.59 mm are saved in `reference-sections.svg` / `.png`; rail cross-section at Y=100 measures a **1.6 mm perimeter rail**. Z histograms show **1.6 mm sheet** and **0.21–0.22 mm bridge tops**. At the higher section, low bridge geometry disappears while sheet/frame persists.
- Reproduce: download the URL in `reference-analysis.json` to `/tmp/match-reference.stl`, then `python3 reference-analysis.py /tmp/match-reference.stl` in this folder. The raw third-party STL is deliberately not bundled, even though the established license permits reuse.

### Measured source versus original redesign

Measured 1.6 mm source sheet sets the default **1.6 mm** panels (adjustable 1.6–2.4). Source 1.6 mm carrier rails are reinforced to **2.4 mm**; source 0.21–0.22 mm fragile bridges are redesigned as **0.4–0.6 mm high × 0.8–1.4 mm wide** accessible cutter tabs. Four carrier rows and 28 unions make one genuinely connected card, not loose parts near a rectangle. Cutting the modeled 28 bridges yields the carrier plus seven intact parts.

The sorter is a new parametric reconstruction, **not the source spacecraft** or a reskinned rotating fidget/previous kit. Two identical cheek panels have two 6 mm wide tongues at each end, depth equal to sheet thickness. Floor/roof mortises grow by **0.15–0.45 mm TOTAL** in both dimensions. Shoulders set the chamber height. These are proposed printer-dependent fits, **not source-measured tolerances**.

Token geometry: circle radius R, square half-side 0.88R, equilateral triangle circumradius 1.48R. Apertures use genuine Manifold cross-section offsets by **0.15–0.30 mm per side** (total token allowance 0.30–0.60). These ratios distinguish matching interfaces. Tests sample wrong tokens through 24 centered orientations; they are NOT a proof of every possible tilted/off-center maneuver. Correct straight drops and open-front retrieval are verified. Roof removal and joint assembly are straight reversible insertions, with no hidden undercuts.

Artwork is solid-unioned/subtracted on the **rear floor landing**, outside the token columns and front retrieval path. No convex hull replaces any source or imported mesh. Reference trees and the old daily_app gallery remain read-only.

## Parametric controls (all lengths in mm)

| Control | Supported range |
|---|---|
| Card envelope | 160–210 × 210–240 |
| Sorter width × depth | 92–104 × 44–50 |
| Token reference radius R | 6–8 |
| Chamber clear height | 28–36 |
| Panel thickness | 1.6–2.4 |
| Cheek window border | 4–6 |
| Total mortise allowance | 0.15–0.45 |
| Total token allowance | 0.30–0.60 |
| Carrier spacing bias | 4–7 (row fit independently checked) |
| Tab width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Three real presets have actual generated-model thumbnails. Open-frame, hex-window and oval-window silhouettes change cheek windows and plate corners. Undo/redo, bounded variations, local named designs, JSON save/open, local fonts, searchable six-icon selection, text relief, colors, theme toggle and collapsible sections are functional. Preview colors are not stored in STL. Desktop has a 374 px left control rail; phones show the preview/export before controls.

## Image / SVG to actual printable relief

PNG and JPEG content is header-checked **before decoding**: ≤2 MB, ≤12 MP, ≤6,000 px each side. Normalize to ≤500 px for bounded portable storage. Decode locally, fit or crop/pan to a **20 × 20 luminance grid**, alpha composite against chosen light/dark background, optionally invert. Threshold mode assigns depth to dark samples; grayscale mode uses `depth × (1 − luminance/255)`. Each grid cell is triangulated into a continuous solid height surface on a 0.4 mm backing, then robustly boolean-unioned into a 0.2 mm-deep rear-floor landing. Raised depth 0.4–3 mm; engraved 0.4–0.6 mm to preserve ≥0.8 mm floor at minimum panel thickness. This is **2D-to-relief**, not a full 3D object reconstructed from a photograph.

White holes remain unraised/unengraved on the solid backing. This is sampled relief, not exact vector outline tracing or literal through-holes. Checkerboard shows the actual cutout and source image side by side. SVG supports simple filled paths/basic shapes, rasterized locally to 256 px; ≤2,000 elements, no text/fonts, scripts, effects, hrefs or external resources. Flatten SVG text before import. Built-in text/icons use the same local raster/mesh path. White/empty silhouettes block export. The ring fixture is independently probed in the FINAL boolean mesh to verify both raised and engraved hole behavior.

Import placement: footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm relative to landing; all vertices must remain within the 6.5 mm-radius safety zone or export is blocked. Floor texture, text, icons, threshold/depth/scale/placement all change exported geometry. Reset/remove/replace restore actual defaults. The preview is not a texture-only effect.

## STL integration, units and supported geometry

Both **ASCII and binary STL** file pickers work on desktop/phone, plus drag-and-drop. Parse locally in the worker. Limit 2 MB / 1,500 triangles / 0.2–250 mm each source dimension. Choose Z up, Y up or −Z up **before** attaching. Source dimensions and format/triangle count are shown with an explicit required millimeter confirmation because STL has no units.

Strict preflight checks finite/bounded coordinates, nondegenerate facets, welded edge incidence, opposite edge winding, a single outward positive-volume component, unsupported self-intersections and contact. Only **convex, broad flat-bottom, support-free grips** are accepted: bottom contact ≥25% of XY footprint, all projected vertices inside that contact polygon, scaled smallest XY dimension ≥1.2 mm. Concave/cavity/branch/multi-shell/open/nonmanifold meshes are explicitly rejected, not repaired, discarded or replaced with a hull. The bottom convex polygon is used ONLY to check bed contact, not replace mesh geometry.

The accepted **actual original triangles** become a Manifold solid. XY scales proportionally to the requested footprint, Z independently fits 0.6–3 mm height; explicit live scale factors are shown. Then rotate/place, sink 0.15 mm into the landing and boolean-union into the floor. This is an integrated floor grip, not displaying or re-exporting the unchanged source. Transform safety-zone and thickness checks prevent obstruction/cut-through. Source 3D preview and final viewer are separate. Reset/replace/remove and default return are available. Unsupported input blocks export with actionable error messages.

## Privacy, worker and portability

Files remain locally in the browser: no upload, API, telemetry or external generator. The app bundles React, Three.js OrbitControls, Manifold WASM, fflate, Fredoka/Rubik fonts. Heavy solid operations/import parsing run in a Web Worker; bounded sampling, 100 ms build debounce, request IDs and exact current-state keys reject stale results. Invalid or pending edits disable EVERY export button; a last-valid preview is labeled as such. Worker load failure blocks exports and gives reload guidance.

Portable JSON ≤2 MB includes bounded normalized PNG plus conversion settings or validated mesh vertex/index payloads. STL payloads are reparsed on restore, not trusted. Missing image payload explicitly requests reattachment. Named local designs keep six entries. No personal imported files are saved in this repository. Bundled PNG/JPEG/SVG and ASCII/binary STL samples are synthetic internal fixtures, not third-party/private source assets.

## Views and exports

Assembled, exploded, de-tabbed print-plate, connected card and all isolated parts share the exact current generated solids. Assembled tokens rest 0.03 mm above the floor for visibility; exploded positions and resting pose are preview-only, not physics. See-through mode explains the structure. Orbit/zoom/fit are touch-enabled. Binary STL export is always **bed-flat printable orientation**, never assembled interpenetrating shells. X/Y/Z dimensions correspond to the selected export; STL geometry hash in the UI is compared with actual downloaded bytes in tests.

One connected-card STL, seven separate-part buttons, and Everything ZIP containing all eight STL files plus numbered assembly/print instructions. ZIP is not 3MF. Each part is a closed independent solid; print plate is not falsely described as connected unless it actually includes the carrier/tabs. No arbitrary shell concatenation is used as union.

## Print and assembly

1. Confirm your bed fits the selected card (default180 ×230 mm); otherwise download individual parts. PLA/PETG, 0.4 mm nozzle,0.2 mm layers,3 walls, all exports Z=0, no supports intended.
2. Trial-print floor and one cheek; adjust total mortise allowance for your printer/material. Trial-print roof and tokens for drop allowance. None of these fits is universal.
3. Adult: snip28 low bridges at exterior non-interface shoulders; trim nubs and elephant foot. Do not damage6 mm tongue interfaces.
4. Seat both cheeks vertically in the floor. Lower roof over upper tongues until shoulders contact. Optional glue at fixed joints only after calibration.
5. Match/drop tokens, remove through open front. Artwork is at the rear to keep retrieval clear. Roof can lift off for cleaning. Do not force a wrong token.

## Verification scope

See `VALIDATION.md`, reproducible scripts and JSON reports. Independent STL checks read the downloaded float32 binary file, not just the Manifold object: exact byte/triangle count, finite coordinates, normal/winding consistency, nondegenerate faces, welded edge incidence=2 with opposite direction at1e−5 mm, adjacency components each positive enclosed volume, expected dimensions and Z=0.

Mechanics checks separately intersect solids through sampled insertion/drop/retrieval paths, prove nonintersecting assembled parts, card containment/envelope, part separation, and carrier+7 components after actual28-tab cuts. Test default, all presets, minimum/maximum and mixed extremes, image/STL-derived variants; browser tests use the production WASM/worker base path. These **computational checks are not physical print tests**, dynamic simulation, friction/strength measurements or safety certification.

## Implementation and dependencies

`src/geometry.js` is the new sorter/connected-carrier geometry and serializer, shared by Node/browser. `model.worker.js` owns WASM. `imports.js` performs strict input checks. `App.jsx` owns controls, assets, conversion/history/saves/export. `Preview.jsx` uses exact returned meshes. General studio/import infrastructure is reused from this repository; no reference project Git history or wholesale dependencies were copied.

Read-only Keycap Studio files inspected: README, styles, App, Viewer, worker, STL and export modules. Concrete adopted patterns: compact left rail, paired numeric sliders, raised/pressed coral key controls, checkerboard cutouts, explicit imported-unit editor, see-through assembled / isolated / plate views, worker state and per-part exports. No MX switch sockets are imposed on this sorter.

Library licenses: Manifold Apache2.0, Three.js/React/fflate MIT, fonts SIL OFL; preserve package license files. Synthetic fixtures are original internal samples. Reference attribution above is retained in README and exported assembly notes.
