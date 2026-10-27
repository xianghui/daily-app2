# Pulse Loop

A local React/Vite parametric STL studio for a **three-lobe open-tube peristaltic squeeze fidget**. Rotate the thumb rotor to progressively squeeze a soft silicone tube against a stationary 270° C wall, release between lobes, and reverse. Unlike belt drives or nip rollers this uses sequential moving radial compression along a stationary open tube. It is a tactile mechanism, not a pressure pump or medical device.

## Run, build and reproduce checks

```sh
npm install
npm run dev
npm test
node extrema-validation.mjs
node contact-validation.mjs
npm run predeploy
node serve-production.cjs
# separate terminal:
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
```

Production URL: `http://127.0.0.1:5385/daily-app2/20261027-16/`. App includes gh-pages and exact predeploy/deploy scripts; publication uses the root monorepo deploy directory, not individual app deployment.

## Print, hardware and assembly

Two individually downloadable parts: **palm-cradle** and **three-lobe-rotor**. Both bed-flat Z=0, vertical bore/post, no supports intended. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, 25–35% infill are starting recommendations, not physical-test results.

Required nonprinted item: **one piece of soft silicone tube, 4 mm OD / 2 mm ID**, Shore A 40–60 starting recommendation. Cut length is `1.5*pi*(innerWallRadius-2)+60 mm`, about **173 mm at defaults**; UI gives current cut length. Extra 60 mm gives two 30 mm tails. Both ends must remain open, unconnected and empty. No bearings, fasteners, magnets, adhesive or sealed fluid circuit.

1. Print Soft Start first. Deburr the bore and C-wall edges; check that the loose rotor turns on the post without tube.
2. Lift out the rotor, lay tube against the C wall with tails exiting through the open 90° sector.
3. Lower rotor over the post while gently moving the soft tube outward. There is intentional elastic interference of 0.4–0.8 mm; do not force brittle or oversized tubing.
4. Hold tube seated and turn gently. Keep fingers away from pinch regions. Start with 0.4 mm squeeze; if drag remains excessive use softer tube or stop.
5. Lift rotor and tube vertically to disassemble. No captive-retention or automatic-return claim. Do not invert it expecting parts to stay attached.

**Hardware-free alternative:** omit tube and freely turn the rotor. The peristaltic squeeze interaction requires silicone tube. External tubing is not in the STL. The amber ghost is an estimated undeformed tube, not an elastic simulation. Real stiffness, friction, lift-out behaviour, wear and tactile feel require physical calibration. No physical print or tube-force test has been performed. Small loose parts and pinch points are not suitable for children.

## Parameters — millimeters unless stated

| Setting | Range |
|---|---|
| Palm diameter | 22–28 |
| Lobe orbit radius | 17–21 |
| Rotor thickness | 4–6 |
| Radial bearing / axial running clearance | 0.3–0.7 |
| Intended radial tube squeeze | 0.4–0.8 |
| Palm dimple depth | 0–0.6 |
| Import XY footprint | 4–7 |
| Imported STL height | 0.6–5 |
| Import rotation | −180° to 180° |
| Import X / Y offset | ±1.5 / ±2 |
| Image threshold | 1–254 / 255 |
| Raised / engraved depth | 0.4–3 / 0.4–0.6 |

Three real presets with live thumbnails: Soft Start, Pulse Loop and Deep Pulse. Round, hexagonal and oval palm silhouettes, random bounded variations. Soft Start is a full-size fit/material calibration trial: 0.7 mm bearing clearance, 0.4 mm squeeze. Tolerances depend on material/printer and are not universal. Fixed rigid wall 2.4 mm, floor 5 mm, axle radius 2.5 mm; lobe cap radius 3.5 mm. Formula `wallInnerRadius = orbit + 3.5 + 4 - squeeze` gives minimum rigid radial gap 3.2–3.6 mm and intended interference against a 4 mm tube. Between lobes the gap opens beyond 4 mm. The tube ghost is only an aid, not a force model.

## Image and SVG core workflow

File picker on desktop/phone; one-file drag/drop supported. PNG/JPEG content and headers are checked before decoding: ≤2 MB, ≤12 MP, ≤6000 px/side; normalized portable payload ≤500 px/side. Simple local SVG shapes/paths supported, ≤2000 elements, rasterized at 256 px. Scripts, external resources, effects and unflattened text are rejected. Synthetic PNG, JPEG and ring SVG are bundled and downloadable.

Exact method: composite against white (light removal) or black (dark removal/invert), fit/crop with ±25% X/Y pan, and sample luminance onto a **20×20 grid**. Threshold mode sets each grid height to depth or zero; grayscale mode uses `depth*(1-luminance/255)`. Adjacent samples form a triangulated height field with a closed backing and side walls. Manifold solid-unions raised geometry into the palm well, or subtracts shallow engraved geometry. The 0.4 mm backing is buried in the existing palm. Bright holes remain unraised/unengraved; this is sampled relief, **not exact outline tracing or automatic full 3D reconstruction from one photo**. Source image and checkerboard cutout are shown. Text (up to 8 characters) and six searchable bundled SVG icons use the same real geometry workflow.

Depth, threshold, source pixels, fit, crop, scale, rotation and placement alter exported triangles. Empty results and out-of-zone transforms block export. Replace, remove, center/reset, reset-image and return-to-default actions are real. Preview colours are not saved in STL.

## Imported STL core workflow

ASCII and binary STL ≤2 MB / 1500 triangles; source dimensions 0.2–250 mm on every axis. Explicit millimeter confirmation is mandatory: **STL contains no units**. Choose Z-up, Y-up or inverted-Z before loading; changing up-axis requests reattachment. Source 3D preview, dimensions and format are shown.

The intentionally bounded supported contract is one outward-wound, watertight, connected, **convex, broad-flat-bottom solid** whose XY projection lies within its bed footprint. Open, nonmanifold, inconsistently wound, degenerate, self-intersecting, concave, hollow, disconnected and unsupported overhanging meshes are rejected with guidance. No convex-hull replacement or automatic repair is performed. This restriction is stated in the picker UI. Source vertices are preserved and transformed, not replaced by a placeholder.

XY scaling preserves proportions, fitting the selected footprint; height fits independently. Center, Z-rotation and X/Y placement transform the actual solid. The grip penetrates the palm well by 0.15 mm and is **boolean-unioned**, not exported as intersecting shells. A 6.5 mm radius keep-out prevents imports from approaching tube/rotor. Minimum scaled footprint thickness 1.2 mm. Disconnected boolean results are blocked. Source units, orientation, dimensions and transform limits are validated before heavy work. Bundled synthetic ASCII wedge and binary gem let you exercise both paths without personal files.

## Studio, storage, privacy

Reference-inspired light lavender maker studio, left 374 px collapsible control panel and right live viewer; phone preview/toolbars/export precede stacked controls. Bundled Fredoka/Rubik fonts. Tactile buttons, keyboard focus, reduced motion and saved dark mode. Assembled, exploded, print plate and isolated-part views; see-through cradle. Orbit/zoom/fit and touch gestures. Amber tube ghost and inspection-lift offsets are **estimated preview-only**; exports always use printable bed-flat parts. No separate right-side controls.

Heavy parsing/CSG runs in a local Worker with bundled Manifold WASM. Bounded mesh resolution, 100 ms debounce, request IDs and current-state gating prevent stale export. The exact valid final vertices power both preview and STL. Failed edits retain a clearly labeled last-good preview but disable exports. Worker failures disable export with reload guidance.

Undo/redo, six named local designs, portable JSON save/open. JSON includes bounded image and mesh payloads, not filesystem paths. Missing or invalid payloads request reattachment or recovery; no pretend asset restoration. LocalStorage failures suggest JSON export. All user data stays in the browser; no file upload, cloud, API key or remote generation service. Bundle contains only synthetic sample fixtures, not personal uploads.

## Export

Binary STL per part, separated print plate STL, and Everything ZIP with both individual STLs and assembly notes. Final export X×Y×Z shown in millimeters for the selected part/layout. STL is unitless and colourless; use 100% scale and millimeters. ZIP is not 3MF.

## Validation and limitations

`validate.mjs` independently parses float32 binary STL: exact byte count, finite coordinates, nondegenerate triangles, stored unit normals consistent with winding, welded edges with exactly two opposing incidents (1e-5 mm), adjacency-connected positive-volume components, Euler genus, bed-flat orientation and millimeter bounds. Both per-part exports and the float32-translated separated print plate are checked. Generated trig coordinates are quantized to 1e-6 mm before modeling for repeatable browser/Node portable rebuilds.

Mechanism tests are separate: Manifold intersections at representative poses across the complete 360° turn; separated plate; open rotor bore; vertical lift-out path; wall/floor/bearing/axial floors; isolated palm keep-out. Independent equations check 3.2–3.6 mm rigid radial gap and 0.4–0.8 mm deliberate external-tube interference. Rotor covers the tube's vertical contact band. `contact-validation.mjs` separately intersects the actual rotor with an undeformed hollow 4/2 mm tube segment: three contact positions and three intervening releases per revolution are verified for every preset. This is a geometric contact probe only, not an elastic force simulation. The absence of rigid collision does not prove silicone tube force, retention, fatigue or print success. Lift-out parts are intentional, not falsely advertised as captive. No flexible tube is exported or fused into moving solids.

`extrema-validation.mjs` checks all 64 six-parameter corners with built-in, image-derived and STL-derived outputs (192 cases). Default, every preset and representative imports also run separately. Production Playwright tests use actual file inputs and downloaded STL bytes for PNG, JPEG, ASCII/binary STL. They compare baseline, pixels, threshold, depth, crop, transform, replace/remove/reset, portable JSON rebuild signatures and per-part ZIP contents. Malformed/truncated/nonmanifold/excessive files, empty silhouettes, invalid dimensions, stale imports and worker failure must block export recoverably. Phone 320/390 px, actual touch orbit/pinch, saved theme, keyboard focus, sections, text/icons, SVG holes and named storage are exercised. Reports/screenshots are beside source; VALIDATION.md records actual outcomes.

**No physical print, tube-force, fatigue or tactile-feel test performed.**

## Dependencies and provenance

React + Vite; Three.js/OrbitControls; manifold-3d solid booleans and WASM; fflate ZIP; gh-pages publication; Playwright validation; locally bundled Fontsource Fredoka/Rubik (SIL OFL). Manifold Apache-2.0; Three and fflate MIT. Bundled image/STL examples and six SVG icons are synthetic fixtures; no personal input is stored in this repository. Studio/import plumbing is adapted from the previous daily generator; mechanism and checks are new. The keycap_generator2 reference's README, styles, editor, viewer, worker, STL parser, export and image conversion modules were inspected read-only. Its concrete left-panel studio, tactile controls, portable imports, source/converted previews and final-result exports inform this UI. No reference or archived-tree modifications, builds, deployments, dependency/Git copying.
