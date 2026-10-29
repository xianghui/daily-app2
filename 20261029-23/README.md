# Hang & Trace

A local React/Vite maker studio for a **three-part catenary comparison kit card**. Snip twelve runners, stand two cross-lap feet, lower the engraved board, glue the joints and drape a flexible cord between its two eyes. Changing span and sag changes the actual engraved curve, eyes and ideal cord-length calculation. This is not a keycap, a square-wheel track, a game or an unchanged source-mesh export.

## Run / reproduce

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs independent binary-STL and assembly checks. `npm run predeploy` creates `dist/`, hosted at `/daily-app2/20261029-23/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; **the public monorepo is published through the parent root deploy flow**, not this app's deploy script.

Serve the production `dist` at its real base prefix, then run:

```sh
TEST_BASE=http://127.0.0.1:5403 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5403 node studio-test.cjs
```

## Reference first, not a copied model

Local candidates under `/Volumes/ExternalHD/3d_printing_apps/` were checked first: keycap_generator2's actual template and import/worker/export architecture, fidget_fabric_generator's diamond-link instructions and slider_fidget_generator2's radial rail instructions. Those mechanisms are inappropriate references for a planar removable kit. The chosen public geometry reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution does not imply endorsement; licensed reference material has no warranty.

The actual binary STL was downloaded and parsed this run, not inferred from an image: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm. STL has no units: mm is corroborated by the public SCAD's sheet/frame conventions. The source has 27 edge-adjacent components, including tiny two-face fragments, and is **not watertight** under the analysis weld. It is not passed through as printable output or claimed repaired.

Actual sections at Z=.10/.50/1.59 mm were inspected (see `evidence/reference-sections.png`). Measured planar sheet: 1.6 mm; carrier rail: approximately 1.6 mm; low bridge levels: .21/.22 mm. The generator retains the sheet principle/default, widens the carrier to 2.4 mm and redesigns bridge height to .4–.6 mm. The three new parts, eyes, engraved catenary, complementary cross-laps and .10–.35 mm total fit allowances are **original proposed geometry**, not measured source-fit dimensions. No spacecraft silhouettes, source STL or arbitrary private assets are bundled. `reference-analysis.json` records the measurements and decisions; `reference-inspect.py /path/to/reference.stl` reproduces sections with numpy/trimesh/matplotlib installed.

The visual/interaction reference was read-only **keycap_generator2**: `README.md`, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL parser and export modules. Concrete adopted patterns: 374 px left controls, collapsible labelled sections, paired range/numeric mm inputs, raised key-like selected buttons, pale lavender desk, coral accents, saved dark theme, large right-hand orbit viewer, toolbar/dimension status/export below it, source/final previews, explicit unit confirmation, protected transformed imports and preview-first phone stack. Shared local studio infrastructure from earlier Daily Object Lab apps is reused; the physical model and assembly checks here are new. No reference project was edited or deployed; its Git history/dependencies were not copied wholesale.

## Parameters / mechanism

All length values are **mm** (rotation is degrees; raster threshold is 1–254). Supported ranges:

| Parameter | Range |
| --- | --- |
| Card width / height | 155–195 / 140–175 |
| Cord-eye span / board height | 62–86 / 70–90 |
| Sag / foot front-to-back reach | 16–32 / 36–48 |
| Cord-eye diameter | 3–5 |
| Sheet / part spacing | 1.6–2.4 / 4–6 |
| Total slot allowance | .10–.35, not per side |
| Runner width / height | .8–1.4 / .4–.6 |
| Label dimple depth | 0–.4 |

Board width is span+40; feet are 18 mm high, with slots placed 12 mm inboard of each board edge. Bottom-open board slots and top-open foot slots meet at half foot height with the selected vertical allowance. Invalid card envelopes are blocked rather than scaled or allowed to overlap. Rounded, chamfered and tapered-top profiles and three real presets change printable geometry. Variation stays within declared numeric ranges but impossible envelope combinations are rejected explicitly.

The ideal curve uses `y = eyeHeight + a(cosh(x/a) − cosh(span/(2a)))`, where bisection solves `a(cosh(span/(2a))−1)=sag`. Ideal free-arc length is `2a sinh(span/(2a))`. An 81-point strip, .8 mm wide normal to the curve, is subtracted .3 mm into the solid-backed board. Eyes are actual through-holes. The gold line is an ideal **preview-only** cord centreline 1 mm ahead of the face, not another STL part or a prediction of real stiff-cord equilibrium. Assembled, exploded, connected card, de-tabbed and isolated-part views share the same meshes; board lift only explains insertion and never changes exports.

## Both real import workflows

Everything runs **locally in the browser**. Files are never uploaded or committed. Import picker supports desktop/phones; the source panel also accepts one dropped file. Replace/remove, centering/reset and restoring defaults work independently. Bundled `public/samples/` files are small original synthetic PNG, JPEG, SVG, ASCII STL and binary STL examples, not third-party source assets.

### PNG / JPEG / SVG → printable relief

Validate file content and headers before decoding: 16 bytes–2 MB, ≤12 megapixels, ≤6,000 px per side. Normalize to ≤500 px for a portable payload. Sample a 20×20 grid using contain or cover crop, ±25% crop shift, white/transparent or dark/inverted background and either luminance threshold or grayscale heights. Source and exact checkerboard cutout are shown. Simple SVG is parsed/sanitized, limited to 2,000 elements with no external references, scripts, text or effects, rasterized locally to 256 px, then uses the same method. This is **2D-to-relief/silhouette conversion**, not full 3D reconstruction from a photo or exact vector tracing.

The grid triangulates a height field with a closed .4 mm backing. Thresholded white holes stay unraised; grayscale modulates height. It is genuinely unioned into the lower board medallion (raised) or subtracted (engraved); the continuous backing is the board, so holes in artwork are holes in the relief, **not through-holes in the board**. Empty art is an error. Depth .4–3 mm raised; engraving is .4–.6 mm to retain at least .8 mm backing in the thinnest sheet. Broad bold art prints best; 20×20 sampling cannot promise tiny legibility. Text (up to 8 characters) and six searchable locally defined icons use this exact geometry path.

### ASCII / binary STL → integrated grip

16 bytes–2 MB general picker; parser requires a complete 40-byte–2 MB STL, at most 1,500 triangles, each dimension .2–250 mm. Binary byte count and complete ASCII facets are checked. Weld tolerance is 0.00001 mm. Finite coordinates, nondegenerate faces, opposite-directed two-face edge incidence, one connected outward positive-volume component, triangle self-intersections, convexity, broad flat Z-bottom contact and no projected overhang are checked in a worker. **Concave, hollow, branched, open, disconnected, inward or unsupported STL meshes are rejected with actionable feedback**, never silently hulled or repaired. This deliberately restricted integration contract is stated in the UI.

Choose Z/Y/−Z up before attaching; axis changes explicitly clear the source and request reattachment. Inspect oriented source dimensions and **confirm millimeters** because STL stores no units. XY scales proportionally to a 4–7 mm footprint, Z independently to .6–3 mm height. Original triangles—not a convex replacement—are rotated ±180°, moved X ±1.5/Y ±2 and unioned with a .15 mm embed into the medallion floor. Minimum resulting XY span is 1.2 mm. All transformed vertices must remain inside the 6.5 mm radius safe zone, away from curve/eyes/slots. Unsupported transforms block output. Source and final model are both previewable.

## Responsive computation / saved designs / export

Manifold WASM solid unions/differences run in a Web Worker. 100 ms debounce, bounded resolution, generation IDs, current-state keys and conversion/parse error gates prevent stale exports. Last-good preview is explicitly labelled and **cannot be exported after invalid edits**. Every edit runs the final closed-mesh validator before success. Worker failure gives a recoverable reload instruction. No remote APIs, paid services, CDN imports, runtime fonts or server generation are required. Dependencies: React, Vite, Three.js/OrbitControls, manifold-3d, fflate, local Fontsource Fredoka/Rubik (SIL OFL); Playwright for tests; gh-pages for deployment.

Undo/redo retains bounded snapshots. Up to six named designs live in browser storage. JSON save/open carries bounded normalized image and original mesh arrays, settings and transforms. Restored STL is reparsed; missing image payloads request reattachment and disable export instead of pretending restoration succeeded.

Download binary STL per part or the real connected-card mesh. Everything ZIP includes all four STL exports and numbered `ASSEMBLY.txt`. Exports are the **exact current valid mesh** shown in the preview, in printable bed-flat orientation; the UI reports selected export X/Y/Z and a signature verified against downloaded bytes. STL cannot store preview colours; no fake 3MF is offered.

## Print / assembly

See numbered instructions in the UI and ZIP. PLA/PETG, .16–.20 mm layers, 0.4 mm nozzle, three walls; no supports intended. Cut twelve accessible low runners and trim nubs, not functional slots. Calibrate one foot and board first; allowances are starting values, not universal fits. Stand both feet, lower the board vertically, square and glue both joints (**adhesive required**). Use very flexible uniform .5–1 mm cord, at least ideal arc+60 mm total, with two stop knots behind the eyes. Adjust front slack to compare against the engraving. A very fine smooth chain is optional, no metal hardware is needed with cord. Do not load or pull the model. Real stiffness/knots/mass change the drape. Adult craft with small parts, cutters and adhesive.

## Validation, not a physical-test claim

`validation-report.json`: defaults, three presets, minima/maxima and 16 mixed extremes; 15 image/STL-derived combinations. Independently parse binary exports; verify exact bytes/count, finite coordinates, unit normals, nonzero faces, bounds, opposite winding on every welded edge, connected positive volume per part and no flat-layout collisions. Use actual Manifold intersections to check completed assembly, board insertion, through-eyes, engraved void/backing, safe ideal-cord position, twelve snips leaving four components and no damage to parts. Probe the empty centre of ring relief above its backing. Invalid ranges and empty silhouettes are rejected.

`browser-validation.json` / `studio-validation.json`: production file-picker imports, real STL and ZIP downloads, content/threshold/depth/crop/scale/placement changes, exact preview/export and portable JSON regeneration signatures; invalid/truncated/open/nonmanifold/concave/excessive files, empty art, invalid transforms and recovery; every preset/profile, text/icon/SVG, undo/redo, named local and JSON round trips including missing-payload errors; worker abort/reload, saved light/dark theme, keyboard focus, collapsible sections, desktop left/right and 320/390 px preview-first layout, no overflow, phone picker/export and actual touch orbit/pinch. Screenshots and reproducible scripts are included.

**No physical print, fit-force, strength, fatigue, load stability or actual cord-drape testing has been performed.** Computational fit is not a guarantee of printer tolerance or experimental agreement with the ideal curve.
