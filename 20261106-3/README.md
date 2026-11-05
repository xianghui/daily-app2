# Viviani & Sum

A browser-based parametric **five-part kit card** for a reconfigurable distance-sum experiment. Three dotted bars lift from blind pockets on an equilateral-triangle board into a straight comparison rail. Changing an interior point alters every distance/bar/pocket, but the corrected sum stays the triangle altitude. This is not an oloid, linkage reskin, moving-joint simulation, or general-purpose tool.

## Run

```sh
npm install
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate ZIP, locally bundled Fredoka/Rubik fonts. Production base `/daily-app2/20261106-3/`; test server `http://127.0.0.1:5993/daily-app2/20261106-3/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo publication uses the ROOT deploy flow, not the app deploy script. No paid service, API key, remote generation, CDN or upload.

Reusable studio/import/export/testing infrastructure is adapted from earlier local daily apps; the triangle-distance and comparison-rail assemblies and checks are new. The read-only Keycap Studio README, App.tsx, Viewer.tsx, styles.css, worker, STL import/export and imageTrace were inspected. Concrete patterns used: compact sticky left rail, paired numeric/range inputs, collapsible sections, raised pressed-state keys, checkerboard/source previews, right-side viewer, phone preview-first stack, saved dark theme, and exact-current-result export gating. No reference Git history/dependency tree copied wholesale.

## Reference-first evidence

Local STL candidates were inspected first under `/Volumes/ExternalHD/3d_printing_apps/`: the keycap switch template and diamond fabric link were actually parsed, hashed and component-counted. Their project READMEs describe MX sockets and interlocked 8 mm fabric, respectively; neither is suitable sheet-kit construction. Full measurements and rejection reasons are in `reference-analysis-raw.json`.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README/license freshly fetched into `evidence/`. An accessible public STL cache `/tmp/20261103-white-cat.stl` was freshly parsed and cross-sectioned; a new raw-STL download is not claimed. Raw mesh/artwork is NOT redistributed.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: 30,616 triangles, 179.820 × 178.020 × 3.190 **assumed mm**; STL has no unit metadata.
- Two edge-adjacent components; 57 anomalous edges. The reference is not claimed repaired or print-ready.
- Actual sections at Z=.100/.215/1.590 mm show four 4.50 × 1.70 mm socket loops, 1.60 mm principal sheet, and low runner tops .21–.22 mm. Representative sections were rendered and visually inspected; SVG/PNG evidence is bundled.

**Measured → redesigned mapping:** source pierced-sheet carrier, nominal 1.60 mm sheet, removable low runners and socket dimensions inform this reconstruction. The measured source 4.50 mm socket length is adapted as nominal bar width (not claimed to be a measured source tongue); new pockets add .10–.30 mm total XY clearance. The source 1.70−1.60=.10 mm thickness allowance motivates the calibrated minimum gap, but these are new wide blind pockets, NOT identical source joints. Floors .80 mm, bar dot marks, triangle/rail geometry and .4–.6 mm runners are original redesigns. No source triangles, private meshes or artwork are reused. See `reference-analysis.json`.

Reproduce: `python3 reference-analysis.py /path/to/white-cat-kit-card_kit.stl`. Reference trees stayed read-only. A previously considered oloid was rejected after a deeper gallery duplicate check; no rejected-candidate mesh or validation report is claimed as this app's result.

## Real model and parameter bounds

All lengths are **millimeters**. Triangle altitude 60–78; point weights A/B each .28–.38, C=1−A−B (.24–.44). Vertices are (0,H), (−H/√3,0), (H/√3,0); P is the barycentric combination. Perpendicular distances to opposite sides are `d_i=H×weight_i`, summing to H. Feet and angles are calculated from actual side projections, not preview textures. A shallow engraved true triangle, P mark and tip-offset dashes make the reference sides and missing 4 mm visible in both preview and STL.

Finite-width bars stop **4 mm short of P**, avoiding intersection. Printed lengths `d_i−4` sum to **H−12**, not H. Both UI and assembly instructions show the 12 mm correction. Dots identify A/B/C (1/2/3). These are geometric lengths, not physically calibrated measurements.

| Control | Range |
| --- | --- |
| Card width × height | 170–220 × 210–260 |
| Sheet | 1.6–2.4 |
| Bar width | fixed 4.50, reference-derived |
| Pocket total allowance | .10–.30 XY, not per side |
| Blind floor / bar protrusion | .80 / .80 |
| Part spacing | 3–5 |
| Breakaway width / height | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art rotation / offsets | ±180° / X ±1.5, Y ±2 |

Three real presets with generated thumbnails; rounded/mitered/notched apron shapes. Card bays have connected outer frame, dividers and twenty actual low tabs, four per part. Flat card, clean print plate, triangle assembly, exploded, **Compare sum** second assembly, and isolated parts use the same meshes. Whole-assembly inspection yaw is not dynamics simulation and changes no exported geometry.

## Printing, assembly and fit

Print card **or** five clean parts flat Z=0 in PLA/PETG, .16–.20 layers, .4 nozzle. No supports intended; all blind-pocket floors begin on the bed. Snip twenty accessible runners, trim scars, clean pockets. Test a board and matching full-size bar first as the calibration pair. Allowances depend on printer/material; no universal fit promised.

Place triangle with apron downward. Insert each dotted bar vertically in its matching distance pocket, dots up. Bars stand .80 above the board for lifting. Lift them and place end-to-end in the straight comparison rail: its pocket length is the exact bar sum plus chosen total clearance. Both configurations are checked collision-free, including vertical insertion/release. **Gravity retention, no snap-fit/captive claim, no hardware/glue required.** Assembly drawings and numbered instructions are in-app and included in ZIP. Physical printing, fit, accuracy, durability and handling have **NOT** been tested.

## Image → printable engraving

PNG/JPEG and safe simple SVG, <=2 MB; bitmaps <=12 MP and <=6000 px side, header-checked before decoding and normalized <=500 px for portable storage. Locally rasterized simple SVG retains filled holes; unsafe/external/active SVG content is rejected. A **20×20** sampled image supports contain/crop, ±25% pan, light/dark background polarity, threshold 1–254 or grayscale heights. Transparency composites onto selected background. A closed height cutter is Boolean-subtracted into the protected triangle apron; bright holes leave full original backing. Source and actual sampled cutout/checkerboard are shown.

This is **2D-to-relief, not automatic 3D reconstruction or exact contour tracing**. Footprint, rotation, depth and placement affect the actual export. Text and six searchable bundled original SVG marks use the same pipeline. Engraved-only keeps flat-card thickness; >=1 mm backing remains. Safe radius 5.8 around X=0,Y=−7 protects all pockets/edges. Empty sources and out-of-zone transforms block export. Replace/remove/reset and synthetic samples included.

## STL → printable mesh-shaped engraving

ASCII/binary `.stl`, <=2 MB/1500 triangles, each source axis .2–250 assumed mm. Explicit mm confirmation is required. Choose Z/Y/−Z up before attaching, inspect source dimensions/preview, then proportional XY footprint scale, independent engraving-depth scale, rotation and offsets. Actual source triangles Boolean-cut a recess in the apron—NOT unchanged re-export or convex-hull replacement.

Supported contract: **one closed, outward-wound, convex, broad-flat-bottom solid with no overhang**. Open/nonmanifold, concave/hollow, disconnected, degenerate, incorrectly wound, overhung and unsupported/self-intersecting meshes are rejected with recovery guidance. A validation-only footprint hull never replaces the exported input. No arbitrary repair claimed. Geometry limits/finite coordinates/dimensions/transforms are checked before heavy work. Source shape/scale/placement survive into the generated mesh.

All user files stay local. JSON and up to six named local designs contain bounded normalized image/mesh payloads; missing/invalid payloads explicitly request reattachment. No personal input assets are committed. Undo/redo, JSON save/open, import remove/reset and source replacement are supported.

## Export and validity

Binary per-part STLs, connected-card STL, clean plate and Everything ZIP (six STLs: card plus five parts; portable JSON, assembly-map SVG, numbered print/assembly text). STL stores **no colour**. No mislabeled 3MF offered. Exact current mesh fingerprint and X/Y/Z dimensions are shown. Preview and export share the same valid worker result; pending/invalid/stale state or failed worker disables export, even if a last-good preview remains visible. Debouncing, bounded detail and generation-id/state-key guards keep heavy CSG off the UI thread.

`validate.mjs` independently parses float32 STL: exact length/count, finite/nondegenerate faces, normalized normals, consistent outward winding, edges welded at 1e-5 mm with exactly two opposite incidences, positive volume per component, and millimeter dimensions. Kernel simplify tolerance .001 mm is below designed features. Engraved dash translations are rounded at 0.000001 mm to remove cross-engine trig noise and preserve exact portable regeneration fingerprints. Cases cover every preset/outline, endpoints, combined extrema and image/STL-derived extremes. Boolean tests check every solid, flat layout, connected carrier, full runner snipping/release without fragments/damaged parts, floor/support footprints, unobstructed pockets in card and clean boards, both actual assemblies and lift-in paths. Browser suites exercise real file pickers/downloads, import-induced geometry changes, invalid files, portability, ZIP, worker abort/recovery, stale imports, late resize cleanup, 320/390 touch orbit/pinch and responsive/light/dark/focus UX. See `VALIDATION.md` and generated reports for **actually completed** checks. None imply physical print testing.
