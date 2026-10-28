# Hoist & Hook — Miniature Crane Kit Studio

Build a **ten-part flat-pack hand-wound crane kit**, held in a genuinely connected breakaway card. Snip the carrier, assemble the fixed booms and winding spindle, and tie the printable hook to your own cord. The spindle turns in two circular bearings; its flanges and two external keeper keys turn with it. This is not a load-rated crane or a self-locking winch.

**Consumables required:** a little suitable craft adhesive for the two fixed flange seats, plus 350–450 mm of smooth 0.5–0.8 mm cord, not included. No magnets, bearings, fasteners or other hardware. A tiny adhesive dot on fixed keys/joints is a fallback if calibrated friction seats are loose; otherwise do not rotate with loose keys. Without cord/adhesive, omit flanges and hook and hand-turn the retained bare spindle; that alternative does not lift. Small adult desk model; keep cord and small parts away from children/pets.

## Run and dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261028-23/`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; the published combined collection uses the **parent monorepo** deployment.

React + Vite, Three.js / OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik. No CDN imports, external modeling services, API keys or paid features. Dependencies are installed locally and bundled with the production app. Geometry generation, topology validation and STL parsing run in a debounced Web Worker with request-id guards and exact current-state export keys. Unsupported geometry produces explicit recoverable errors. Last-good previews cannot be exported after invalid changes.

## Reference-first evidence

First searched local `/Volumes/ExternalHD/3d_printing_apps/` STL files and read relevant slider, fabric and kit-card instructions. Slider retention, switch sockets and interlocked fabric links are not interchangeable sheet-kit references. Local kit-card projects have no suitable source STL. Then downloaded **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card). Read repository README, LICENSE and `kit_frame.scad`; reuse terms **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.

- Actual binary STL: **1,530,884 bytes, 30,616 triangles**.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Measured bounds: **179.820 × 178.020 × 3.190 assumed mm**. STL has no units; source sheet parameters corroborate mm.
- Welded-edge analysis: **two connected components**, with coplanar/nonmanifold source artifacts. The source is inspected as a design reference, **not repaired or re-exported**.
- Actual mesh sections at **Z 0.1, 0.5 and 1.59 mm** were rendered and inspected, not merely a listing photograph. Measured sheet planes 0/1.6 mm and perimeter rail width 1.6 mm; bridge vertices occur at 0.21/0.22 mm.
- Adaptation: default **1.6 mm** panels, adjustable 1.6–2.4; deliberately reinforced **2.4 mm** carrier rails; redesigned cutter tabs **0.8–1.4 mm wide × 0.4–0.6 mm high**, four per part. These thicker bridges are proposed printing choices, not measured source features.
- Original redesign: fixed crane booms, circular bearings, rectangular spindle/flange seats, eye guide, keeper keys and open hook. New fits are documented below and are **not** claimed as source measurements. The source spacecraft is not reproduced. Raw third-party STL is not bundled.

`reference-analysis.json` records source/download links, hash, component/topology results, measured vertices/sections and concrete parameter mapping. `reference-analysis.py /path/to/reference.stl` reproduces the analysis (Python standard library; run beside the existing JSON mapping). `reference-sections.svg/.png` contain actual mesh intersections. All reference project trees remain read-only.

The studio visual/interaction reference is read-only `keycap_generator2`: README, styles, App, Viewer, worker, STL/outline and export modules were inspected. Adapted patterns include the 374 px scrollable left controls, sticky brand/theme header, paired slider/numeric inputs, collapsible sections, tactile raised buttons and soft selected states, lavender desk, white surfaces, local rounded fonts, large right preview and reachable exports below. Phones show preview/export before stacked controls, not a narrow sidebar. Saved light/dark theme, visible keyboard focus and reduced-motion support are included. Common local import/export/editor infrastructure is reused from earlier collection studios; the crane profiles, assembly, parameters and numerical tests are new, not a cosmetic reskin.

## Physical parameters — linear units mm

| Parameter | Range |
|---|---|
| Connected card width × height | 180–220 × 230–260 |
| Boom reach / cord-guide height | 38–50 / 42–54 |
| Cheek center spacing | 18–24 |
| Sheet thickness | 1.6–2.4 |
| Fixed-slot total growth | 0.15–0.45 |
| Circular bearing total allowance | 0.4–0.8 |
| Tapered keeper total interference | 0.06–0.14 |
| Carrier spacing bias | 4–7 |
| Breakaway tab width / height | 0.8–1.4 / 0.4–0.6 |
| Base dimple depth | 0–0.4 |
| Import footprint / STL height | 4–7 / 0.6–3 |
| Import X / Y offsets | ±1.5 / ±2 |
| Import Z rotation | ±180° |
| Raised image depth / engraving | 0.4–3 / 0.4–0.6 |

The axle section is **6 × panel thickness**. Bearing diameter is `hypot(6, thickness) + bearing allowance`; the rotating shaft corners clear the round bore throughout 360°. Axle keeper-window wall is `(6 − 3 − fixed allowance)/2`, at least 1.275 mm. Keeper shafts taper from 2.5 mm at the tip to `3 + fixed allowance + keeper interference` at their head. The last seating region deliberately interferes 0.06–0.14 mm in total width with the window; calibrate it before use. Only this small window-sidewall intersection is allowed in numerical tests. Keys must grip before rotation; trim/reprint a fit trial or secure the fixed keys with a tiny adhesive dot if needed. Never turn with loose keys. These are friction seats, not a universal snap-lock or a tested force guarantee. Keeper heads are 9 mm wide, larger than the maximum 7.262 mm bearing; they cannot pass through it. Flanges remain 1.5 mm inside each cheek, fixed to the axle with calibrated rectangular seats. Crank sweep remains 3.5 mm above the base. Guide eye diameter 2.4 mm; flange tie eye 1.8 mm; hook eye 2.2 mm. The base import medallion stays clear of foot joints and the spindle.

Three real model-thumbnail presets: Harbor Mini, Workshop Hoist, Long Reach. Soft, faceted and long-bevel plinth silhouettes; mechanically bounded variations; undo/redo; six named local designs; portable JSON save/open. Parameters outside supported ranges or imports leaving the protected mark zone block generation. The default card is 200 × 250 mm, about 3.05 mm total Z with the built-in mark. **Check bed size or use individual parts.**

## Both local import workflows

Desktop/phone file picker and drag/drop; replace/remove, reset transforms, reset image settings and reset all. Synthetic CC0 samples are bundled: PNG mark, JPEG waves, SVG ring with hole, ASCII wedge and binary faceted grip. Personal files are processed locally, never uploaded or committed. A local named save or portable JSON deliberately retains bounded asset payloads; it is not a server backup.

### PNG, JPEG, SVG → actual base relief

Validate content signature, extension, bytes and dimensions before heavy processing: **16 bytes–2 MB**, images ≤**12 MP** and **6,000 px** per side. Normalize to at most 500 px per side for portability. SVG accepts bounded simple filled shapes/paths (≤2,000 elements), rejects scripts, external resources/effects and unsupported elements, then rasterizes locally to 256 px. SVG is sampled, not an exact vector CAD conversion.

Fit/cover crop with ±25% crop shifts; remove light/transparent background or invert dark background; threshold or grayscale height conversion. A bounded **20 × 20 luminance grid** becomes a triangulated, closed height field. Physical size, depth, position and rotation affect actual geometry. Manifold **union** creates raised relief or **subtraction** engraves the base. Bright/transparent holes remain unraised/unengraved against continuous backing; they do not become through-holes in the base. The checkerboard shows the actual sampled cutout. Source and conversion preview are separate. This is **2D-to-relief conversion, not automatic full 3D reconstruction from one photo**.

### ASCII/binary STL → solid-unioned base grip

Strict parse and welded topology checks, normalized explicit Z/Y/−Z orientation, source dimensions/triangle count, mandatory **millimeter confirmation** (STL has no unit metadata), XY proportional scale to footprint, independent Z height, rotation, center and placement. Preserve the actual input solid and use a real boolean union into the base—not an unchanged re-export, interpenetrating shells or convex-hull substitution.

Supported integration contract: **one outward-wound, closed, convex, broad flat-bottom, non-overhanging grip**, ≤**1,500 triangles**, **0.2–250 mm** on every axis, ≤2 MB. Reject degenerates, nonfinite coordinates, open/nonmanifold/inward/disconnected/self-intersecting meshes and unsupported concavities/cavities/thin branches or insufficient bed contact. All projected vertices must lie within the actual bottom footprint. Convexity is a **rejection test**, not permission to replace concave input with a hull. No arbitrary repair is claimed. Orient/rebuild unsupported files in a modeler and reattach. Changing up axis requests reattachment. Source and final-model previews are both available.

The imported feature must stay within the 6.5 mm-radius base medallion; slender scaled grips below 1.2 mm XY are rejected. Engraving is limited to 0.6 mm, preserving ≥0.8 mm floor at the thinnest sheet. Missing image payload in JSON requests reattachment; invalid mesh payloads are revalidated, never silently treated as restored. Bounded imported assets round-trip in JSON/named designs.

## Views and exports

Assembled crane, exploded (illustrative separation), connected card, de-tabbed bed-flat parts, every isolated part, see-through cheeks, orbit/zoom/fit and touch gestures. Spindle-turn slider positions the exact printable rotating parts. **The fine cord line and varying hook height are estimated preview-only routing, not a simulation of wound cord, knots, friction or lift ratio.** No cord geometry is exported. All printable exports remain bed-flat and independent of preview pose.

Prominent binary STL, per-part STL buttons, Everything ZIP containing connected card, ten clean part STLs and numbered `ASSEMBLY.txt`. Preview/export share the exact current valid mesh; a displayed fingerprint is compared with downloaded bytes in tests. STL stores geometry only, not preview colours. No fake 3MF option.

## Print and assembly

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls, all parts flat, decoration up; no supports intended. Snip the 40 low tabs using flush cutters; trim nubs and elephant foot. Tabs avoid foot tenons, keeper windows, bearing circles, rectangular seats and cord eyes. Calibrate a cheek-foot/base slot, flange/axle and tapered keeper/axle-window sample first; fits depend on printer, filament and orientation.

1. Leave both cheeks loose. Position the plain and crank flanges between them. Thread the flat axle through the first cheek's circular bearing, both rectangular flange slots and the opposite cheek bearing.
2. Slide the high guide tongues through both boom slots as the cheeks come together; lower all four feet into base mortises.
3. Center the axle and gently seat both tapered keeper keys downward through its outer windows, heads up. Keep flanges ≥1.5 mm from inside cheek surfaces. After dry fitting, secure both flange positions with tiny craft-adhesive dots at their rectangular seats and let cure. Other loose **fixed** feet, guide tongues and keeper keys may receive tiny glue dots; never bearings. Do not force.
4. Tie one cord end through the flange tie eye, wind a few turns around the spindle, lead the cord along the open boom center, over the guide and down its eye, then tie the hook eye. Keep at least 20 mm below the guide at the upper position. Hold the base and crank.
5. Turn to wind/unwind the free hook. **No load hold:** there is no brake, ratchet or self-lock. Do not add loads or suspend valuables. Only demonstrate the printed hook's own movement. Pull keys and reverse unglued steps to disassemble.

## Validation and limits of evidence

See `VALIDATION.md` and JSON reports for actual test results. `npm test` runs independent binary STL checks (byte length, finite coordinates, nondegenerate faces, unit normals/winding, 1e−5 mm welded edge incidence and opposite directions, positive volume per component, millimeter bounds), every clean part and connected card, defaults/presets/extremes, image- and STL-derived variants, assembly-path intersections, 360° spindle motion, keeper retention, flat-part separation, and actual 40-tab cuts yielding carrier plus ten distinct parts.

Production-base-path browser tests use real file-picker uploads and downloaded STL/ZIP bytes, source/transform/pixel/threshold comparisons, exact preview/download/JSON regeneration fingerprints, invalid-file recovery, SVG holes with solid probes, history, local/JSON restoration, worker failure/stale handling, views, theme/focus/collapsibles and 320/390 px touch/mobile layouts. Tests and synthetic fixtures are reproducible beside the app.

**No physical print, slicer verification, knot/cord routing trial, friction, force, strength, fatigue or load test has been performed.** Numerical collision-free assembly and watertight meshes do not establish physical fit or lifting performance. Do not interpret an illustrative cord pose as a physically verified winch.
