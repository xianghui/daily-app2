# Wrap & Resist

A browser-only **four-part flat-pack cord-friction kit-card generator**. Snip 16 runners, seat complementary half-slotted fins in four calibrated plinth sockets, glue and cure; then compare gentle soft-cord drag around the four outer corners at three matching notch heights. A separate winding/threading shuttle is included. Not a circular capstan, brake, winch, calibrated instrument or load-holding tool. External .3–.8 mm soft craft cord, removable table tape and plastic-compatible adhesive required. **Physical printing, assembly, friction and durability are untested.** No weights or elastic cord.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
```

Production prefix: `/daily-app2/20261101-23/`. Individual scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publication uses the ROOT monorepo deploy flow. React + Vite, Three.js/OrbitControls, Manifold WASM worker, fflate and locally bundled OFL Fredoka/Rubik fonts; no CDN, API key, server generation or upload services.

## Reference first

Read-only local candidate instructions and STL files were inspected before final geometry selection: Keycap Studio switch template and Fabric Studio diamond link. Neither provides a flat-sheet carrier interface. Local Kit Card Studio README was also inspected; no suitable local sheet STL found. Candidate hashes, dimensions and component counts are recorded in `reference-measurements.json`.

Selected actual mesh: **White Cat Kit Card**, Mike Kasberg, Printables 865769, https://github.com/mkasberg/white-cat-kit-card . Its source README and **CC BY 4.0** license were fetched; complete license is `REFERENCE-LICENSE.txt`. Download URL is recorded in `reference-analysis.json`. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Binary STL, **30,616 triangles**, **179.820 × 178.020 × 3.190 mm**, **27 edge-adjacent components**, nonwatertight source. STL has no unit metadata; millimeters inferred from the sheet construction. The source is a design reference only, NOT a printable input, and is not claimed repaired.

Actual source sections at Z=.10/.50/1.59 mm were generated and viewed during this run: `evidence/reference-sections.png`. Measured sheet planes 0/1.6 mm; repeated **4.50 × 1.700012 mm** socket loops; low source runners .21/.22 mm. The reproducible `reference-measure.py SOURCE.stl` records SHA, dimensions, all components, sections and plane counts (requires Python trimesh/numpy/matplotlib/scipy/networkx). `reference-analysis.json` maps concrete measurements to generator code. No raw source/fan-art mesh is bundled, no source trees or old daily_app files edited.

**Adaptation, not copying:** four new 4.50 mm sockets preserve the measured slot length; width=selected sheet+proposed total allowance (.10–.30 mm), foot length=4.50-allowance, insertion depth=sheet. Default .15 mm differs from source ~.10 mm surplus; calibrate. New crossed fins use complementary half-slots with that width and a vertical gap equal to allowance. The four-corner post, three notch lanes, front marking zone, shuttle, packing and .4–.6 mm runners are an original Boolean reconstruction. Source defects are not inherited. Changing a prior kit's name was not the design method.

## Studio patterns

Read-only Keycap Studio README.md, src/styles.css, src/App.tsx, src/Viewer.tsx, src/worker.ts, src/export.ts, src/imageTrace.ts and src/geometry/stl.ts were inspected. Concrete patterns: 374 px scrollable LEFT rail, sticky compact brand/theme header, labelled collapsible sections, paired sliders/numeric inputs, raised and pressed keys, soft pink selected state, searchable marks, checkerboard cutout, large rounded RIGHT gradient viewer, dimensions/warnings/export beneath; phone preview-first with full-width controls. Saved light/dark theme, visible keyboard focus, ≥44 px controls, reduced motion and bundled Fredoka/Rubik. Lavender-grey #e7e9f1, white, ink #1f2233, coral #e2557a. Studio/import/serializer/test infrastructure and synthetic fixtures adapted from earlier apps in this monorepo; new model and assembly tests are specific to this kit. Reference history/dependencies/deploy scripts were not copied or run.

## Geometry and ranges

All physical dimensions in millimeters; angles explicitly degrees. Final X/Y/Z shown for selected export.

| Parameter | Range |
|---|---|
| Card width / height | 200–240 / 180–220 |
| Post half span / height | 22–28 / 32–44 |
| Cord lane pitch | 4–8 |
| Sheet | 1.6–2.4 |
| TOTAL fit allowance | .10–.30 |
| Part spacing | 3–4 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Three real presets with generated thumbnails: Soft wrap, Wide turns, Pocket friction. Rounded, square and chamfered profiles change the actual parts. Bounded variation, reset, undo/redo, six local named designs, portable JSON save/open. Fin feet at ±14 mm; four base sockets perpendicular. Three 2.8 mm diameter edge cuts with .9 mm penetration on each fin tip lie at .55×height ± lane pitch. The post is four separated webs, not a solid drum. Complementary upper/lower half-slots permit the second fin to lower across the first without bending; shoulder stops land at sheet top, feet flush below. Four adhesive joints required after calibration; no snap-lock retention claimed.

Original solid carrier includes all four parts through 16 real bed-level runners. Packing checks declared envelope and valid connected components. Clean parts, connected card, exploded/assembled/isolated/loose views all use the same exact meshes. Dashed loop is only approximate external cord routing, not exported or simulated. Exports are always bed-flat, never assembled overlaps.

## Image → actual geometry

File picker on desktop/phone, optional drag/drop; PNG/JPEG or simple filled SVG, ≤2 MB. Verify image headers/content before decode; ≤12 MP, ≤6000 px/side, normalized ≤500 px. SVG ≤2000 simple elements, ≤6000 px dimensions, no scripts, external URLs/resources/text/effects. Rasterized locally to256 px.

Fit/contain or crop/cover, ±25% crop pan, light/transparent-background removal or dark inversion. A **20×20 luminance field**, flipped into model XY, is converted to a closed triangulated cutter: threshold1–254 selects dark samples, or grayscale controls local depth. The sampling is interpolated between grid points, NOT exact contour tracing. A transparent/checkerboard grid shows the actual retained samples. Bright holes keep original top surface and solid backing; they are not through-holes. .4–.6 mm engraving leaves ≥1 mm backing. Text (up to8 chars) and six searchable bundled icons use the same pipeline. Size, rotation and XY offset alter exported geometry. 2D-to-relief, NOT full 3D photo reconstruction. Raised marks intentionally unsupported to preserve bed-flat card thickness.

## STL → actual geometry

ASCII and binary `.stl`, ≤2 MB /1500 triangles, source axis dimensions .2–250 mm, finite coordinates≤10000 mm, one connected outward-wound solid; exact binary length, complete ASCII facets, nondegenerate faces, welded opposing two-face edges, positive volume, self-intersection/convexity, broad flat bottom and footprint checks. Supports one **convex, broad-flat-bottom** mesh only. Concave, hollow, open, touching/self-intersecting, multibody or overhanging input is rejected with guidance, never replaced by a convex hull or claimed repaired. A projected bottom hull is used only to verify support footprint; original triangles are retained for CSG.

Select Z/Y/−Z up before attaching; changing it requests reattachment. Source preview/dimensions, explicit mm confirmation (STL has no units), proportional XY scale via footprint, independent Z scale via depth, Z rotation and XY placement. Actual mesh is Boolean-subtracted in the front plinth patch (center y=-halfSpan-4, keep-in radius6.5), away from all joints and eyes. Transform bounds and ≥1.2 mm supported XY detail are checked. Replace/remove/reset return to defaults. Imports alter both preview and exported solids; unchanged re-export is not the workflow.

## Privacy, saves and responsiveness

All user-file processing stays local; no file uploads or external APIs. Only synthetic samples in `public/samples/` are bundled: PNG mark, JPEG waves, SVG ring, ASCII wedge and binary gem. Personal inputs are never saved in this repository. JSON/named designs carry bounded normalized PNG or validated mesh arrays; missing image payload requests reattachment, restored mesh is revalidated. Up to6 named designs, history35 states.

Heavy CSG/import parsing in a local Web Worker, bounded resolutions,100 ms debounce and request IDs. Export requires the exact current parameter/source/transform key; invalid current edits block stale last-good geometry. Worker errors are visible and disable export. Preview and export share the exact current validated mesh; FNV signature exposed for download comparison.

## Printing and exports

Prominent per-part binary STL, connected card, clean-part options and Everything ZIP (five STLs including card plus numbered ASSEMBLY.txt). No pretend 3MF or color-STL claim. Print one card OR four parts, not both. Z=0, 100% mm, PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Trial-print joints; tune fit/first-layer compensation for printer/material. Snip runners outside parts, deburr and follow numbered `ASSEMBLY.txt`. Secure base, glue four feet and cure; use gentle cord tension only. Do not use weights, secure loads, or infer a force ratio from the visual route.

## Validation

`npm test` writes independent `geometry-validation.json`: float32 STL length/normals/finite nondegenerate faces, welded1e-5 mm opposite-directed two-face edge incidence, positive volume **per component**, dimensions, connected carrier and clean parts. Boolean intersections test assembled separation, complete fin insertion in 1 mm increments, sockets, flush feet and shoulder stops. Every runner is actually cut in tests: exactly four parts plus carrier remain, snips avoid parts; sampled upper cross-sections fit bed footprint. Three lanes have a .4 mm geometric cord route checked with sphere samples; no force/friction/material simulation.

Browser tests serve the actual production build under the real prefix: real PNG/JPEG/ASCII/binary file-picker imports, geometry-changing thresholds/depth/pixels/transforms, actual STL downloads parsed, preview signature and portable-state regeneration, errors/recovery, all presets and extrema, exact reset, source orientations, icon/text/SVG holes, ZIP contents, history/named/JSON round trips, worker failure/stale results, desktop panel, mobile320/390 px touch orbit/pinch, no overflow/reachable exports, saved dark theme and focus. Evidence scripts/JSON/screenshots are retained alongside app. Computational results do not establish physical printability, friction performance or real-world assembly reliability; physical testing remains unperformed.
