# Angle & Anchor

A browser-based **four-part phone-stand kit-card generator**. Snip sixteen real breakaway bridges, stand two cross-braces slots-up, and lower two inclined cheeks slots-down across them. Both cheeks cradle a light phone behind front hooks. This is a physical flat-pack kit, not a game or a keycap clone. All printable geometry is created locally with Manifold WASM booleans.

## Reference-first provenance

Searched local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` first. None of its three kit-card projects contains a suitable STL; the available clicker sockets and fidget joints are not interchangeable kit-card references. Downloaded and inspected **Mike Kasberg’s [White Cat Kit Card](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card)**, [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Read the source README, LICENSE, `kit_frame.scad` and `white-cat-kit-card.scad`.

Actual binary mesh: 30,616 triangles, 1,530,884 bytes; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed mm (STL has no metadata), corroborated by source 1.6 mm sheets. Measured bounds **179.819997 × 178.019994 × 3.190000 mm**, two welded edge-connected components, source nonmanifold/coplanar artifacts. Source was **not repaired or reused as printable geometry**. See `reference-analysis.json`, reproducible `reference-analysis.py`, and actual Z=0.10/0.50/1.59 mm cross-sections in `reference-sections.svg` / PNG. Measured sheet planes at Z=0/1.6, perimeter width 1.6, thin bridge vertices at Z=0.21/0.22.

The reconstruction preserves bed-flat sheets, enclosing carrier, sacrificial connectivity and access away from interfaces. **New:** inclined seat/retaining-hook profiles, four opposing half-laps, removable cross-braces and an isolated decorated brace. Proposed frame width **2.4 mm** and **0.4–0.8 mm**-high tabs are deliberately stronger than the reference; cut them, do not assume snap-off behavior. The source spaceship, bend joints and its exact part fits are not reproduced. No raw third-party mesh is bundled. Attribution also accompanies ZIP instructions.

## Studio and interaction reference

Inspected read-only `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts`, `src/imageTrace.ts` and `src/geometry/stl.ts`. Applied the concrete 374 px maker rail/right gradient viewer, paired sliders/mm fields, collapsible sections, raised selected buttons, checkerboard source/cutout previews, explicit STL units/up-axis, integrated relief, per-part export, saved designs and current-result worker gating. Fonts are locally bundled Fredoka/Rubik. Light/dark preference is saved. On phones the preview, dimensions and exports come first; controls stack below.

Import/serialization/studio infrastructure is adapted from earlier daily studios. **The inclined support profiles, opposing-half-lap assembly, card nesting and fit checks are new.** Reference projects and old gallery tree remain read-only; no Git history or dependency tree was copied.

## Run and verify

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# in a second terminal:
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
node studio-layout-test.cjs
```

Production base `/daily-app2/20261027-21/`. The test server is `http://127.0.0.1:5410/daily-app2/20261027-21/`. Latest create-vite 9.3.2 failed because its installed package lacked `template-react`; create-vite 8.2.0 scaffolded successfully. React 19 / Vite 7. Individual scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public deployment uses the root monorepo `deploy/` flow.

## Real customization — all lengths in mm

| Parameter | Supported range |
|---|---|
| Exact outer card width × height | 170–210 × 160–200 |
| Support rise above seat | 50–65 |
| Stand cross-brace width | 70–90 |
| Footprint depth | 60–80 |
| Horizontal seat depth | 8–14 |
| Contact incline | 55–75 degrees |
| Panel thickness | 1.6–2.4 |
| Total horizontal / vertical lap allowance | 0.10–0.40 |
| Part spacing | 10–14 |
| Tab width × thickness | 0.8–1.4 × 0.4–0.8 |
| Medallion dimple depth | 0–0.4 |
| Import XY footprint / STL Z height | 4–7 / 0.6–3 |
| Import X/Y placement | ±1.5 / ±2 |
| Import rotation | ±180 degrees |
| Image raised / engraved depth | 0.4–3 / 0.4–0.6 |

Three actual model-thumbnail presets, bounded variation, round/hex/oval side-window silhouettes, text up to eight characters and six searchable bundled vector icons. Text/icons and all supported imports change printable triangles, not just textures. Impossible card envelopes or contact profiles block export. Behind the inclined top, rear margin must be ≥10 mm; braces ≥14 mm apart. Side slots open down to 7 + gap/2; brace slots open up from 7 − gap/2. Both slot widths are sheet thickness + gap. Four assembled bottoms are coplanar at Z=0. Front hooks are 3 mm wide and extend 8 mm above the 10 mm-high seat. Side window does not touch contact edges or half-laps. No moving joint, switch socket or hidden hardware.

Assembled, exploded, connected-card, de-tabbed bed-flat and all four isolated views share the same solids. Assembly-separation slider is an inspection aid, not a moving fidget or a physically validated animation. Export is always bed-flat, never the assembled overlap. Orbit, zoom, fit and touch are local. Undo/redo (35 snapshots), six named local designs and JSON include bounded portable image/mesh payloads. Missing/invalid imported assets explicitly require reattachment. Preview colours are not stored in STL.

## Image → printable relief

File picker and drag/drop accept real PNG/JPEG and safe simple SVG. **2 MB**, ≤12 megapixels and ≤6,000 px/side; normalize portable raster to ≤500 px. SVG ≤2,000 simple filled shape elements: no scripts, resources, text, effects or references; rasterize locally to 256 px.

1. Composite alpha against selectable light/dark background; fit/contain or cover/crop, with ±25% pan.
2. Sample **20 × 20 luminance values** (engine cap 24 × 24). Threshold 1–254 produces silhouette relief; grayscale produces variable heights. Background inversion supported. Show original and actual cutout/height-grid preview on checkerboard.
3. Triangulate a continuous piecewise-linear top with side walls and flat bottom. Union into front brace or subtract for engraving through Manifold, not interpenetrating shells.
4. Bright holes remain unraised/unengraved over a continuous backing, **not through-holes**. This low-resolution sampled method is not exact vector outline tracing. Empty conversion is rejected. Model-Y orientation matches source image.

This is **2D-to-relief conversion, not full 3D reconstruction from one photograph**. Bold marks work better than fine photos. Small lettering may exceed your printer’s resolution.

## STL → integrated front-brace medallion

ASCII and binary STL: **2 MB, ≤1,500 triangles, 0.2–250 mm per source axis**. Show original dimensions/format/mesh preview; require explicit confirmation of millimeter coordinates. Select Z up, Y up or inverted Z before attaching; changing axis clears source and asks reattachment. Proportional XY footprint scaling, independent Z height, rotation and XY placement all change final geometry. Reset transforms, replace/remove import or return to built-in defaults.

The supported subset is one closed, outward-wound, nondegenerate **convex solid with broad flat bottom and support-free sides**. Verify edge incidence, positive volume, triangle intersections, convexity and ≥25% bottom footprint coverage. Hollow/concave/disconnected/open meshes, branches, overhangs and unverified repairs are explicitly rejected. **No convex hull substitution**: accepted source triangles are converted to Manifold and truly unioned with 0.15 mm embed. XY sections under 1.2 mm after scaling are rejected. Complexity/content/dimensions are checked before heavy work.

Both import paths are restricted to a 6.5 mm-radius well at front-brace (0,9), with 0.2 mm recess, ≥0.8 mm remaining floor after maximum engraving at minimum sheet thickness, and ≥19 mm isolation from functional half-laps. The region stays behind the phone-contact plane. Arbitrary mesh-as-whole-stand integration is not supported.

All user data stays in the browser. No uploads, API keys, paid services or remote/CDN dependency imports. Only original synthetic fixtures are committed in `public/samples`: PNG, JPEG, SVG, ASCII wedge and binary gem. Normalized private inputs are never saved to this repository.

## Export, print and assemble

Prominent current binary STL, per-part buttons and Everything ZIP containing the connected card, four clean individual STLs and numbered `ASSEMBLY.txt`. Choose card **OR** separate parts. Same exact result drives preview/export, with byte fingerprint. Export is disabled during edits/import/conversion/errors; a last-good preview never authorizes stale download. Heavy work uses a module worker, 100 ms debounce and request ids; worker failure and stale import normalization are explicitly tested.

1. Print bed-flat Z=0, 100% scale, PLA/PETG, 0.4 mm nozzle, 0.20 mm layers, three walls, no supports intended. Check slicer. Default envelope 180 × 180; maximum 210 × 200 mm. Relief increases Z beyond sheet thickness; read final dimensions.
2. Clip four accessible side tabs per part (16 total), trim flush and discard frame. Keep cutters away from slots and inclined support edges. Minimum gap around the middle runner is 3.8 mm.
3. Print one cheek and one brace first to calibrate. Start 0.20 mm total allowance (0.10 per side, plus 0.20 vertical gap), deburr and adjust. Fits depend on printer, material and slicer. Do not globally scale or force a fit.
4. Stand both braces on their long lower edges with slots UP. Decorated brace is front, relief facing forward. Align the two cheek slot positions with the braces.
5. Lower the left cheek, slots DOWN, across both left brace slots simultaneously. Lower right cheek across both right slots. Four bottoms meet the desk. The joints are removable clearance half-laps, **not snaps or captive locks**.
6. Put a light phone behind the two front hooks and lean it against both matching sloping contact edges. Seat depth is horizontal; measure your phone case and use the preview. Level desk only; no heavy tablets or rated load. Lift phone before moving stand. For flat storage lift cheeks straight out.

## Validation and limitations

`validate.mjs` independently reads actual binary STL exports: exact byte length, nonempty/finite coordinates, nondegenerate faces, normalized stored normals matching winding, welded 1e-5 mm edges with two opposite incident faces, positive signed volume **per component**, Euler characteristic, expected millimeter bounds and Z=0. Defaults, three presets, 16 parameter corners and 30 imported-output cases cover ASCII/binary STL, threshold/grayscale and engraved images. Every separate exported solid and translated connected card is checked.

Independent CSG checks: no intersection at sampled insertion positions for both/left/right cheek independently; four disjoint laid-out parts; all original personalized part volume present in card; sixteen actual tab cuts yield **five components** (four parts + one frame); fitting/oversize gauges prove slots; physical incline probed in the actual solid; all assembled part bottoms share Z=0. Final worker builds run closed-manifold/winding/volume validation on every part and connected card.

Production-base-path Playwright tests select real files and download actual STLs, comparing against no-import output and exact UI fingerprints, then regenerate saved JSON in Node and run mesh/assembly checks. PNG/JPEG pixels, threshold/depth/crop/scale and STL size/height/rotation/placement measurably alter output. Tests also cover invalid/truncated/open/nonmanifold/concave/excessive files, empty silhouettes, invalid transforms, replace/remove/reset, presets/shapes/text/all icons/SVG ring holes, undo/redo, portable and named design round trips, worker-load abort/recovery, stale edit/import prevention, isolated/exploded/plate views, real per-part/ZIP bytes, light/dark persistence, keyboard focus, reduced motion, desktop left rail and 320/390 px preview-first layouts with actual CDP touch orbit/pinch and reachable exports. Reports and screenshots are saved beside this README.

**Computational geometry is not physical testing. No print, load, friction, strength, fatigue, phone scratch-resistance or practical stability test was performed.** Thin sheets can flex. This is an un-rated light-phone kit; inspect fit, stability, print orientation and contact surfaces before use. Cutter use/small parts require adult handling.

Dependencies: React/React DOM, Vite/React plugin, Three.js (MIT), Manifold-3D WASM (Apache-2.0), fflate (MIT), Fredoka/Rubik (SIL OFL), Playwright (Apache-2.0, tests) and gh-pages. All fonts and WASM are bundled locally.
