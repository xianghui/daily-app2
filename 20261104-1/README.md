# Plateau & Film

A **three-part, connected kit-card generator** for a skew soap-film boundary: a pierced base and two unequal-height eyelet supports. A separately supplied cotton-thread loop follows alternating low/high corners. This is a physical craft/experiment kit, not a browser game or a fluid simulation. Only the plastic parts are generated. Soap-film shape, wetting, tension, lifetime, strength and physical printing have **not** been tested.

## Start / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React + Vite, Three.js OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. All runtime libraries, fonts, WASM and synthetic samples are bundled locally. No APIs, account, paid service or CDN needed. Base path `/daily-app2/20261104-1/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses the existing root monorepo deployment, not the per-app deploy.

## Actual reference and adaptation

Inspected local STL candidates **first**: Keycap Studio's three-part switch template (15.20 × 15.20 × 43.10 mm; unsuitable switch cuts) and Weave's 7.981 × 9.241 × 8 mm link (unsuitable interlocking link). Read their README and actual meshes. Also inspected Keycap Studio README, styles, App, Viewer, worker, imageTrace, STL and export modules read-only. The 374 px left rail, paired inputs, tactile selected buttons, pink/lavender light palette, dark theme, checkerboard conversion, source inspector, worker status/current-result gating and preview-first phone layout follow its concrete maker-studio patterns. No source-tree modification, history or wholesale dependencies copied.

For a suitable sheet-kit reference, freshly downloaded and parsed **White Cat Kit Card** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream repository](https://github.com/mkasberg/white-cat-kit-card), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution/license included. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components, not fully watertight. Millimeters assumed and corroborated by OpenSCAD source. Source defects are **not** repaired or re-exported.

Fresh cross-sections at Z=0.10 / 0.50 / 1.59 mm and full component bounds are in `reference-measurements.json` and `evidence/reference-sections.png`. Measured sheet planes 0/1.60 mm, socket loops **4.50 × 1.700012 mm**, low runner tops **0.21–0.22 mm**. Upstream `flat_clip_hole` and `kit_frame` instructions inspected too.

Original reconstruction: three new skew-boundary parts, four straight (not source ledged) 4.50-mm tongues, actual-sheet-thick and sheet-long insertion, four matching mortises and four threaded eyes. Default 1.60-mm sheet retained; proposed total slot clearance 0.15 mm gives **4.65 × 1.75 mm**, adjustable 0.10–0.30. Straight tongues need adhesive, not a snap claim. Original partitioned carrier and twelve accessible horizontal runners use **0.4–0.6 mm** bed-contact thickness instead of the source's fragile tops. No spacecraft outline/mesh redistributed. This is not the earlier parallel-flange/rail coil former or a flat bubble wand: there are **two asymmetric fork supports, no connecting printed rails**, and four alternating-height thread eyes define a non-planar perimeter. `reference-analysis.json` maps these decisions explicitly.

## Parameters (all dimensions mm)

| Parameter | Supported range |
|---|---|
| Card width / height | 200–240 / 220–260 |
| Eye horizontal span / support separation | 40–64 / 32–56 |
| Lower eye height / alternating height offset | 32–44 / 8–22 |
| Thread eye diameter | 2.0–3.5 |
| Sheet thickness | 1.6–2.4 |
| Part spacing | 3–5 |
| Breakaway tab width / thickness | 0.8–1.2 / 0.4–0.6 |
| Total socket clearance (both axes) | 0.10–0.30 |
| Artwork footprint / depth | 4–7 / 0.4–0.6 |
| Artwork X / Y offset / rotation | ±1.5 / ±2 / ±180° |

Three actual mesh thumbnails/presets, three chamfered base silhouettes, bounded variations, undo/redo, six named local designs and portable JSON save/open. State includes bounded image/mesh payloads; missing image payloads explicitly demand reattachment. No pretend file restoration. Invalid numeric states, unknown shapes, unsafe art or insufficient card space block current export. No stale last-good export after an invalid edit.

## Local image → engraved geometry

Desktop/phone picker, drag/drop, replace/remove and reset. **PNG, JPEG and simple SVG**. 2 MB file limit, raster images ≤12 MP / 6000 px per side, header checked before decode; normalized to ≤500 px. SVG ≤2000 simple path/shape elements, no scripts/external resources/references; rasterized locally at 256 px. Text (8 characters) and six searchable original icons use the same conversion.

Fit/cover crop, ±25% pan, light-background removal / dark inversion, threshold 1–254, or grayscale relief. Sample **20 × 20** luminance heights. Threshold maps dark points to selected depth, bright to zero; grayscale uses `depth × (1-luminance/255)`. A closed triangulated heightfield cutter is Boolean-subtracted from the protected base apron. Source image and exact sampled checkerboard cutout shown. Bright holes stay unengraved (tested with ring probes), although sampling/interpolation rounds small details; no exact contour-tracing claim. Alpha composites against the selected background. Depth 0.4–0.6 leaves ≥1 mm backing at every sheet setting. Raised style is intentionally unsupported. This is **2D-to-relief**, not automatic reconstruction of a complete object from one photograph.

## Local STL → exact engraved geometry

ASCII and binary `.stl`, ≤2 MB and **1500 triangles**, one connected outward-wound closed solid, each source axis 0.2–250 mm. Finite coordinates, complete file content, welded edge incidence, winding, nondegenerate triangles, positive volume, connectivity, self-intersection, convexity, flat bottom and unsupported overhangs are checked in a worker. Accepted contract: **convex broad-flat-bottom source solids with no projected overhang**. Concave/hollow/branched/open/nonmanifold/self-intersecting/unsupported input is rejected with recovery instructions, not repaired or convex-hull substituted. The small hull used to test bottom footprint does not replace source geometry.

Select Z up / Y up / −Z up before attachment. Inspector shows actual oriented source mesh, dimensions, format and triangle count. Explicitly confirm **millimeters** because STL has no units. Footprint proportionally scales XY; Z independently maps to engraving depth, with factors displayed. Rotate, place and reset transforms. The **actual accepted mesh** is Boolean-subtracted from the base apron, not merely displayed or re-exported. Safe radius 6.5 mm, minimum footprint aspect width 1.2 mm and ≥1 mm backing protect all functional joints. All processing occurs on device; no personal files saved in this repository or uploaded. Synthetic CC0 PNG/JPEG/SVG/ASCII/binary fixtures have visible try/download actions.

## Make, assemble, explore

1. Print the connected card or clean parts **flat, Z=0**, 100% mm scale. Default card **200 × 220 × 1.6**. PETG preferred, 0.4 nozzle, 0.16–0.20 layers, 3+ walls; no supports intended. Base, front and rear are individually closed solids. Three-part loose plate is also available.
2. Snip **12** runners ~1.8 mm outside boundaries. Smooth outer stubs; do not cut tongue/eye interfaces. Carrier is discarded. Clean STLs have no runners.
3. Print one base/support as a calibration pair first. Slot fits depend on printer/material/elephant foot; proposed clearances are not universal.
4. Lower supports straight into base mortises: front right / rear left tips tall. Shoulder rails rest on base top. Dry-fit then bond four fixed joints with a water-resistant plastic-compatible adhesive. Cure fully and rinse. Tongues alone do not lock.
5. Thread a perimeter loop: front-left low → front-right high → rear-right low → rear-left high → first eye. Thin cotton thread **0.5–1 mm**, gently taut, no central crossing. Cut the displayed geometric eye-centre perimeter **plus ≥100 mm** for wraps/knots. Knot/wrap routing, thread sag/stretch and loads are unmodeled; do not bow the posts. No metal hardware.
6. Dip completely in ordinary soap solution in a suitable tray, lift slowly and observe. A skew boundary can encourage a saddle-like film, not a guaranteed shape. Broad printed supports may collect extra films. Avoid eyes/mouths and slippery spills. Not a sealed vessel, load-bearing device or food-contact product.

Assembled/exploded/connected-card/de-tabbed/isolated views use the same part meshes. Dashed eye-centre thread is an **estimated preview-only guide**, excluding knots/wrap routing; membranes are not simulated. Exploded vertical lift is illustrative. All exports stay real, bed-flat plastic geometry; STL contains no preview colors. Base see-through explains joints, not another material.

Prominent per-part binary STL and Everything ZIP (card, three clean STLs, design JSON and numbered instructions). Not mislabeled 3MF. Rotate/zoom/fit/top/front, touch orbit/pinch, saved dark theme, keyboard focus, reduced-motion styling, collapsible controls, preview-first 320/390 px phone layout.

## Verification

`npm test` independently parses the float32 binary STL of card, every part and loose plate: exact size/triangle count, finite coordinates, normalized normals matching winding, nonzero faces, welded edge incidence exactly two/opposite directions (1e-5 mm), positive volume **per component**, expected dimensions and bed Z. Manifold checks each generated solid too. Independently tests card envelope, true connectivity, twelve runner cuts releasing carrier + three undamaged parts, no loose or assembled overlaps, four aligned mortises, insertion paths, open eye bores, minimum backing, central thread-path probes and non-planar eye-centre determinant. This does not verify thread knots, tension forces or fluid behavior.

`node browser-test.cjs`, `node studio-test.cjs`, `node import-extremes.mjs`, `node stale-test.cjs`, `node isolated-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs` exercise production output at the real base prefix. Actual PNG/JPEG/ASCII/binary picker uploads and STL/ZIP/JSON downloads, changed thresholds/pixels/transforms vs defaults, independent regenerated preview/export signatures, every part's mesh/assembly checks, imported extrema, hole probes, malformed files, stale edits, worker failure/recovery, portable designs, undo/redo, presets, text/icons/SVG, touch gestures, mobile overflow and theme. Reproducible reports/screenshots accompany the app. See `VALIDATION.md` for final run results. **Computational checks only, no physical print, fit, adhesive, strength, thread or soap-film test.**
