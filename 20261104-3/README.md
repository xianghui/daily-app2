# Monge & Project

A **five-part connected kit-card generator** for a physical orthographic-projection study. Snip twenty runners, seat two perpendicular engraved screens and two unequal-height eyelet stakes in a plan plane, then tie an external thread between the eyes. Compare a true spatial segment with its **XY / XZ / YZ** projections. Not another soap-film loop: there are two projection screens, one thread segment, six fixed sockets and three computed projection grooves. No moving joint, fluid or optical simulation.

## Run and dependencies

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright for verification. Runtime dependencies, fonts and WASM are locally bundled, no API/CDN/account/payment. Base `/daily-app2/20261104-3/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses the ROOT monorepo flow.

## Actual STL reference, first

Inspected local files under `/Volumes/ExternalHD/3d_printing_apps/` before selecting geometry. Read Keycap Studio README, styles, App, Viewer, worker, imageTrace, STL and export modules read-only, and Weave README. Fresh parsing measured Keycap's switch template (944 triangles, three components, 15.20 × 15.20 × 43.10 mm) and Weave's link (5940 triangles, one component, 7.981 × 9.241 × 8 mm). Neither is a sheet carrier/socket reference.

Freshly downloaded **White Cat Kit Card** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. License retrieved and included in `REFERENCE-LICENSE.txt`; source `flat_clip.scad` and `kit_frame.scad` inspected. Binary STL SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**, 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, 27 edge-adjacent components, not fully watertight. Millimeters assumed (STL lacks units), corroborated by source sheet construction. Mesh defects are not repaired or re-exported.

Fresh cross-sections at Z=0.10/0.50/1.59 mm, component measurements and hashes are in `reference-measurements.json` and `evidence/reference-sections.png`; rerun `reference-measure.py` with the external downloaded STL. Measured sheet planes 0/1.60 mm, socket loops **4.50 × 1.700012 mm**, low runner tops **0.21–0.22 mm**. See `reference-analysis.json` for the measured-to-designed mapping.

Original parametric reconstruction adapts this sheet/socket/carrier structure, NOT the spacecraft outline or source triangles: six straight **4.50 mm** tongues use actual sheet thickness and sheet-long insertion. Proposed TOTAL clearance **0.10–0.30 mm** on both axes; default 1.60 sheet/0.15 clearance gives **4.65 × 1.75 mm** slots. Source ledged clips are not copied; **adhesive required**, not snap-fit. Original three-shelf carrier has twenty accessible Boolean-unioned **0.4–0.6 mm** bed-contact runners, strengthened relative to the measured source. No raw private or third-party mesh is redistributed.

Keycap Studio patterns used concretely: 374px left rail/right gradient preview, paired slider/mm input, collapsible sections, tactile lower-shadow controls and pressed selections, lavender-grey #e7e9f1/white/dark ink/coral #e2557a palette, locally bundled rounded fonts, saved dark theme, source inspector, checkerboard conversion, current-result export gating, preview-first stacked phone layout. Reference trees unchanged; no Git history/dependency tree copied. Reusable local studio/parser/export infrastructure from the earlier app was adapted; projection parts, assembly, constraints and tests are new.

## Model and ranges (millimeters unless noted)

| Control | Supported range |
|---|---|
| Card width / height | 220–260 / 280–320 |
| Endpoint X / Y separation | 32–56 / 24–48 |
| Lower eye height / Z difference | 24–40 / 8–22 |
| Thread eye diameter | 2–3.5 |
| Sheet thickness | 1.6–2.4 |
| Part spacing | 3–5 |
| Runner width / thickness | 0.8–1.2 / 0.4–0.6 |
| Total socket clearance | 0.10–0.30 |
| Artwork footprint / engraving depth | 4–7 / 0.4–0.6 |
| Artwork X/Y offset / Z rotation | ±1.5 / ±2 / ±180° |

Three presets with actual model thumbnails; three chamfered silhouettes; mechanically bounded variation; undo/redo; six local named designs; portable JSON save/open. Bounded normalized image/mesh payloads restore, missing image payload explicitly requests reattachment. Unknown/out-of-range/nonfinite settings, unsafe placements and invalid files disable exports, never silently export last-good geometry.

True eye-centre length `sqrt(X²+Y²+Z²)`; XY/XZ/YZ lengths drop the other coordinate. Endpoints are `(-X/2,-Y/2,sheet+lowerHeight)` and `(X/2,Y/2,sheet+lowerHeight+Z)`. Projection grooves **0.65 mm wide / 0.4 mm deep** are real Boolean cuts. Screen ring centres align with projected eye centres. The base plan groove stops **5 mm** before sockets to preserve functional lips. Screens have relieved separate corner ends: they do not interlock or need a forced closed assembly. Back/front-elevation screen at +Y faces −Y, side-elevation at −X faces +X. Six vertical tongue insertion paths are unobstructed. No intended moving joints, fake clearances or unrelated switch sockets.

## Local image workflow

Desktop/phone picker and drag/drop, replace/remove/reset; **PNG, JPEG, simple SVG**, text up to 8 characters and six searchable original icons. Files 16 bytes–2 MB. PNG/JPEG header checked before decoding, ≤12MP and 6000px/side, normalized to ≤500px. SVG ≤2000 simple filled shapes, no scripts/external resources/references; rasterized locally to 256px.

Fit/cover crop, ±25% pan, light-background removal or dark inversion, threshold 1–254 or grayscale height relief, scale/rotation/placement, engraving depth. Sample a **20 × 20 luminance grid**. Threshold maps dark samples to depth, light to zero; grayscale depth = `depth*(1-luminance/255)`. Alpha composites against selected background. A closed triangulated heightfield is Boolean-subtracted from the protected front apron. Source and exact sampled checkerboard cutout shown. Bright holes remain unengraved, but sub-grid details and interpolated boundaries are approximate; not exact vector tracing. Engraved-only: depth 0.4–0.6 leaves **≥1 mm backing** at all sheet settings. **2D-to-relief, not automatic full-3D reconstruction from one photograph.**

## Local STL integration

Binary and ASCII `.stl`, ≤2 MB and **1500 triangles**, one outward-wound closed connected solid, each source dimension **0.2–250 mm**. Validate complete content, finite coordinates, nondegenerate faces, welded edge incidence/opposite winding, positive volume, connectivity, self-intersection, convexity, flat base and unsupported projected overhangs in worker. Supported input contract: **convex broad-flat-bottom meshes without overhang**. Concave/hollow/branched/open/nonmanifold/self-intersecting/unsupported input rejected with guidance, never repaired or hull-substituted. A footprint hull is used only to test bed support, not to replace imported triangles.

Select Z/Y/−Z up before attachment, inspect actual source mesh/dimensions/triangle count/format, and explicitly confirm **millimeter units**. XY scales proportionally to selected footprint, Z independently maps to engraving depth; displayed factors explain the transform. Rotate/place/center/reset. The **actual accepted mesh** Boolean-subtracts the apron, not merely displayed or unchanged re-exported. Safe radius 6.5mm and ≥1mm backing protect sockets and projections. Both import paths measurably change final STL geometry. Synthetic CC0 PNG/JPEG/SVG/ASCII/binary fixtures have try/download actions. All processing local; no personal file uploaded or committed.

## Print and assemble

1. Print connected card or five clean parts **flat Z=0**, 100% mm, PLA/PETG, 0.4 nozzle, 0.16–0.20 layers, 3+ walls; supports not intended. Default card **220 × 280 × 1.6 mm**; smaller beds can use clean parts.
2. Snip twenty runners ~1.8mm outside part boundaries and smooth stubs, avoiding functional tongues. Discard carrier. Clean STLs have no runners.
3. Print a base plus screen/stake first as a fit trial. Clearances are printer/material/elephant-foot dependent, not universal.
4. Lower back screen at +Y (engraving inward), side screen at −X (engraving inward), low stake front-left and high stake rear-right. Shoulders rest on base. Dry-fit then bond all six tongue joints with plastic-compatible adhesive; cure fully. Straight tongues do not self-lock.
5. Tie a **0.5–1 mm cotton thread** segment between eyes. Cut displayed true length **plus ≥100mm** for knots. Keep gently loose: no modeled tension/load capacity; do not bend stakes. No metal hardware required, but thread and adhesive are external consumables.
6. Compare actual thread diagonal with plan/front/side projection engravings. Dashed eye-centre thread is **estimated preview-only**, excluding wraps/knots/sag and not exported. Orthographic parallel projection, not perspective rays or a lighting simulator.

Assembled, exploded, connected card, de-tabbed plate and all isolated-part views share exact result meshes. Exploded offsets illustrative; exports always real bed-flat plastic geometry. Orbit/zoom/fit/top/front/touch gestures. Per-part binary STL plus Everything ZIP (connected card, five clean STLs, portable JSON and numbered guide). STL stores no preview colours; ZIP is not mislabeled 3MF.

## Verification

`npm test` (40 cases): presets, each parameter bound, simultaneous bounds, three silhouettes, binary/ASCII imports and threshold/grayscale-derived outputs. Independent final **float32 STL** checks: byte count, finite/nondegenerate triangles, normalized normals/winding, welded edge incidence exactly two/opposite directions (1e-5mm), positive volume **per component**, declared mm dimensions and bed Z. Manifold checks individual solids. Card connectivity/envelope, 20 cuts releasing carrier+5 undamaged parts, no loose or assembled overlaps, six socket alignments, sampled insertion paths, open eyes, actual endpoint positions, minimum backing, thread corridor and real projection groove probes. Geometry formulas alone are not the assembly test.

`node browser-test.cjs`, `node studio-test.cjs`, `node import-extremes.mjs`, `node stale-test.cjs`, `node isolated-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs` exercise production output at its real base path: real picker uploads/downloads, final export signatures vs preview and Node regeneration, geometry-changing pixels/threshold/depth/transforms, rejection/recovery, portable image/mesh JSON, named designs, undo/redo, worker failure/stale gating, every preset/view/part, ZIP contents, text/icons/SVG, dark theme/focus/collapsibles, touch orbit/pinch and 320/390px phone overflow/export reachability. See reports and `VALIDATION.md` for actual results.

**Computational checks only. No physical printing, dimensional fit, bond strength, thread handling, stress, fatigue or assembly test was performed.**
