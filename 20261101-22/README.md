# Steiner & Knot

A local-only React + Vite **four-part thread-junction experiment kit-card generator**. Snip 16 real runners, glue three open saddles into six stage sockets, and route three soft cords to a central knot with three equal light weights hanging through outward drop windows. This explores the ideal Fermat/Steiner equal-tension junction, not a precision optimizer. No hardware, dynamics or physical testing is implied.

**External supplies required:** .3–.5 mm soft cord, three equal 1–3 g craft weights, a stable narrow riser ≥60 mm tall and ≤20 mm across, removable tape, plastic-compatible adhesive. The kit does not include these. Adult experiment with small parts, cutters and hanging weights; no load rating.

## Start and build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
```

The production server uses `/daily-app2/20261101-22/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public monorepo publishing is through the ROOT deploy flow, not the individual deploy script.

## Reference-first evidence

Read-only local STL candidates were parsed first: Keycap Studio switch template (3 switch/cavity bodies, 15.2 × 15.2 × 43.1 mm) and Fabric Studio diamond link (7.981 × 9.241 × 8 mm). Neither provides a sheet/card interface. Local Kit Card Studio instructions were inspected, but no suitable existing local sheet STL was available there.

Actual selected mesh: **White Cat Kit Card**, Mike Kasberg, Printables 865769; https://github.com/mkasberg/white-cat-kit-card . Source README and CC BY 4.0 license were fetched; license text is in REFERENCE-LICENSE.txt. STL downloaded from the documented URL in reference-analysis.json, parsed and sectioned again this run. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**; binary, 30,616 triangles; 179.820 × 178.020 × 3.190 mm. STL has no units: mm is inferred from source sheet construction. 27 edge-adjacent components, nonwatertight source with tiny degenerate sheets. This reference is NOT used as a printable mesh or claimed repaired.

Actual cross-sections at Z=.10/.50/1.59 mm are in `evidence/reference-sections.png`. Sheet planes at 0/1.6 mm; multiple measured 4.50 × 1.700012 mm socket loops; low runners at .21/.22 mm. See full component dimensions, SHA, Z planes, sections and local-candidate measurements in `reference-measurements.json`; adaptation decisions are in `reference-analysis.json`; reproducible script `reference-measure.py` takes a local downloaded source path (requires trimesh/numpy/matplotlib/scipy/networkx).

**Measured vs proposed:** six new sockets retain source 4.50 mm length. Width is selected sheet + .10–.30 mm TOTAL proposed allowance, not per side. Tongue length is 4.50 minus allowance, depth equals selected sheet. Default allowance .15 mm differs from measured source thickness surplus ~.10 mm; trial-print and calibrate. Runners are redesigned .4–.6 mm thick for removal/support versus source .21/.22 mm. The triangular stage, drop windows, cord saddles, assembly and ideal vector calculation are original CSG reconstructions, not spacecraft artwork. Raw source STL/fan-art is not bundled. Reference and old daily_app trees are unchanged.

## Studio reference

Inspected read-only Keycap Studio README.md, src/styles.css, src/App.tsx, src/Viewer.tsx, src/worker.ts, src/export.ts, src/imageTrace.ts and src/geometry/stl.ts. Concrete patterns used: 374 px scrollable LEFT rail; sticky compact brand/theme header; labelled collapsible controls; paired numeric/range inputs; raised/pressed tactile selection keys; checkerboard source conversion; large RIGHT gradient viewer; dimensions, warnings and reachable exports below; worker and exact-current-result gates; bounded portable saves. Phone is preview-first, then exports and stacked full-width controls. Lavender-grey #e7e9f1 desk, white panels, ink #1f2233, coral #e2557a, saved coherent dark theme, bundled Fredoka/Rubik fonts, focus, large touch targets, reduced-motion CSS.

Shared studio infrastructure and synthetic fixtures are adapted from previous apps in this monorepo. All model/assembly/routing equations and mechanism tests for this new experiment are independent. Reference history/dependencies/deploy scripts were not copied or run.

## Parametric geometry (all dimensions mm)

| Control | Supported range |
|---|---|
| Connected card width/height | 200–240 / 180–220 |
| Guide radius | 22–28 |
| Saddle shoulder height | 32–44 |
| North apex sideways offset | 0–8 |
| Sheet | 1.6–2.4 |
| TOTAL joint allowance | .10–.30 |
| Part spacing | 3–4 |
| Runner width/thickness | .8–1.4 / .4–.6 |
| Art footprint/depth | 4–7 / .4–.6 |
| Art rotation/X/Y | ±180° / ±1.5 / ±2 |

Three real presets with actual model thumbnails: Equal triangle, Tall junction, Pocket network. Rounded, square and chamfered lobes/shoulders alter actual bodies, not preview materials. Bounded variation; reset, undo/redo, up to six local named designs and JSON save/open. Bounded normalized image/mesh payloads restore through portable files; missing images explicitly request reattachment; saved meshes revalidated.

The stage is a triangle plus three solid lobes. Guide centers start at 90/210/330° on the selected radius; the north center shifts sideways. Each saddle is 26 mm wide with two feet centered at ±8 mm. Each vertex has two tangential 4.5 × (sheet+allowance) through sockets and an outward 6 × 8 mm weight-drop window starting .25 mm beyond the saddle outer face. Open top notch is 2.4 mm across, formed by a rectangular opening and 1.2 mm radius rounded bottom. Saddle top is sheet + selected height; approximate cord center lies 1.6 mm below top. Guides are finite frictional rims, NOT pulleys.

Four-bay card Boolean-unions stage, three saddles and sixteen runners into ONE closed connected solid. Each de-tabbed part is independently closed. Bed-flat card and de-tabbed layout, assembled, exploded and every isolated part share the same exact meshes; assembly transforms are right-handed and feet end flush at stage underside. Exports are always bed-flat, never overlapping assembled shells. Dashed external cord routes/ideal geometric median are preview only. Weiszfeld point gives 120° ideal branch angles and zero ideal unit-force sum; friction, finite rims, knots, tension, vibration and stability are not simulated.

## Image → printable engraving

Real desktop/phone pickers and drag/drop; PNG/JPEG plus sanitized simple SVG. ≤2 MB; PNG/JPEG header-validated ≤12 MP and ≤6000 px/side; normalized to ≤500 px. SVG supports simple paths/shapes ≤2000 elements, ≤6000 px declared sides, no scripts/remote references/effects; browser rasterizes to 256 px respecting fill holes. Synthetic CC0 PNG/JPEG/SVG fixtures included with attribution.

Exact method: **20×20 sampled threshold or grayscale height-field relief**. Fit/cover crop and ±25% crop shifts; light/dark background with transparency compositing; threshold1–254; physical size, rotation, XY and .4–.6 mm engraving depth. Source preview and checkerboard actual sampled cutout shown. Triangulated closed cutter is Boolean-subtracted in protected central stage keep-in radius6.5 mm. Bright image holes preserve uncut surface and continuous backing, not through-holes. Empty silhouettes and unsafe transforms disable export. At least1 mm solid backing remains. This is 2D-to-relief, NOT full 3D reconstruction from one photo or exact vector tracing. Text≤8 characters and six searchable bundled icon paths use the same real geometry workflow. Engraved only deliberately keeps sheet/card thickness; no fake raised control. STL has no colour.

## STL → meaningful integrated stage cut

Actual ASCII/binary STL, 40 bytes–2 MB, ≤1500 triangles, .2–250 mm/source axis, finite bounded coordinates and transforms. Parser welds coincident vertices at1e-5 mm, checks edge incidence/opposite winding, connected positive volume, nondegenerate triangles, self-intersection, convexity and broad-flat-bed support. Supported: one closed outward-wound convex solid with a broad flat base. Concave/hollow/open/nonmanifold/branched/multiple bodies/overhangs are explicitly unsupported; never silently hulled or repaired.

Source dimensions, triangle count, actual source3D preview and format shown. Choose Z/Y/−Z up BEFORE attach; changing axis asks for reattachment. Explicit mm confirmation required because STL carries no units. XY scales proportionally to footprint; Z independently fits engraving depth. Rotation and placement transform the exact accepted source mesh into a Boolean stage cutter. It meaningfully changes the final mesh and volume, not unchanged re-export. Keep-in/backing checks protect all six sockets and weight windows. Replace/remove/reset recover locally. Synthetic binary gem/ASCII wedge fixtures included.

All user files stay in the browser: no uploads/API/CDN/account/key/paid service. User inputs are not committed. Imported payloads in JSON/localStorage are bounded; clearing browser storage deletes named designs. No server-side mesh generation.

## Worker and export

Manifold WASM genuine solid unions/subtractions in a worker; bounded circular segments and image/import complexity; 100ms debounce, request IDs/stale-result guards, pending conversion and current-state-key gate. Every live result is checked for closed manifold edges, finite/nondegenerate faces and positive volume. Errors leave last valid preview visible but disable ALL exports until current state is valid. Worker/WASM failure blocks export with reload guidance. Preview/export use exact current result; no screenshot STL.

Prominent connected-card binary STL, per-part buttons and Everything ZIP: connected card, stage, three saddle STLs and numbered ASSEMBLY.txt with current fits. Dimensions displayed for current selection. No fake3MF label; STL stores neither units nor palette colours. All dependencies, WASM and fonts bundled locally.

## Validation and printing

`node validate.mjs`: independent actual float32 STL byte count, finite coordinates, triangle area, normal/winding, mm bounds,1e-5 mm welded opposite edge incidence, positive signed volume PER component, expected component count. Defaults, every preset/shape, each and combined parameter bounds, image threshold/grayscale and transformed ASCII/binary source models, imports at bounds. Separate mechanical CSG checks: all assembled pairs; 63 insertion steps; six socket/shoulder checks; flush feet; card containment/support footprint; 16 accessible cuts yielding exactly five solids (four parts + carrier); .50 mm cord-route probes and three open drop windows; nondegenerate triangle, ideal120°/unit-force equations. No physical force/friction simulation.

Production browser scripts exercise real PNG/JPEG/ASCII/binary uploads and downloads, transformations vs default, threshold/crop/pixels/depth changes, replace/remove/reset, malformed/open/nonmanifold/concave/excessive input, empty silhouette, actual per-part/ZIP STL parsing, exact preview fingerprints and Node regeneration from downloaded JSON, portable restoration/missing payload errors, named saves, undo/redo, every view, focus/theme/collapse/reduced motion, worker abort/recovery, 320/390 px no overflow, touch orbit/pinch, phone imports/exports and no remote requests/runtime errors. `personalization-check.mjs` independently probes a bright ring hole and dark ring engraving in the final solid. Reports/screenshots accompany the scripts; `VALIDATION.md` summarizes results actually obtained.

Print stage + one saddle first to calibrate joints. PLA/PETG .16–.20 mm layers, three walls,100% mm scale, flat Z=0; no supports intended. Cut runners1.6 mm outside functional edges, deburr, seat six feet, square/glue/cure. Secure a narrow stable ≥60mm riser under stage center, keep windows free; route soft cords over notches/down windows and hang equal light1–3g weights. Gently nudge center knot; stop if sticking/tipping/bending. Full numbered instructions exported in ZIP.

**No physical print, assembly, adhesion, stability, cord sliding, equilibrium, strength or accuracy test has been performed.** Watertight meshes and computational collision checks do not prove physical performance.

Dependencies: React/ReactDOM/Vite/React plugin, Three.js(MIT), Manifold(Apache2.0), fflate(MIT), Fontsource Fredoka/Rubik(SIL OFL), gh-pages, Playwright for checks. Source interface attribution: Mike Kasberg, CC BY4.0; original reconstructed experimental kit, no affiliation/endorsement.
