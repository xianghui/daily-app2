# Anamorph & Sight

A browser-only React/Vite **four-part anamorphic triangle kit-card generator**. Snip 16 breakaway runners, seat three gantries in six rotated stage sockets, glue, and look from one calculated eye coordinate. Three separated top-edge midlines close into a triangle only at that viewpoint. Orbit to reveal the true depth. This is a static kit, not a moving fidget, not an exact Penrose solid, and not a physically tested illusion.

## Reference first / attribution

Inspected the local candidates under `/Volumes/ExternalHD/3d_printing_apps/` before choosing geometry. Keycap Studio's clicker template and Fidget Fabric's link were parsed and rejected as inappropriate sheet-carrier references. Kit Card Studio and Wildform READMEs describe flat kits but contain no suitable original reference STL. Used the accessible public **White Cat Kit Card**, Mike Kasberg, Printables 865769, [upstream](https://github.com/mkasberg/white-cat-kit-card), [model](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README, LICENSE, kit_frame.scad and flat_clip.scad were inspected. Raw mesh is NOT bundled or redistributed.

Actual binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Mesh: 30,616 triangles; 179.819997 × 178.019994 × 3.190000 mm; 27 edge-adjacent components; nonwatertight. Millimeters assumed, corroborated by upstream construction; STL contains no unit metadata. Actual Z-section plots at 0.1/0.5/1.59 mm are in `evidence/reference-sections.png`. Detailed bounds, component measurements and socket loops are in `reference-measurements.json`; interpretation and original redesign in `reference-analysis.json`.

Measured source sheet: 1.60 mm. Measured rectangular sockets: 4.50 × 1.700012 mm. Thin runner planes: 0.21–0.22 mm. Reconstruction retains **4.50 mm tongue width**, but deliberately uses 2.2–3.0 mm sheets and proposed total clearance 0.10–0.30 mm; slots are `(4.50 + clearance) × (sheet + clearance)`. Bed-attached runners are redesigned 0.8–1.2 mm wide and 0.4–0.6 mm high. Original ledged clips are NOT copied: six straight tongues **require adhesive**. No source-defect repair or physical-fit claim.

Keycap Generator 2 was inspected read-only: README, App.tsx, styles.css, Viewer.tsx, worker.ts, geometry/stl.ts, imageTrace.ts, export.ts. Concrete studio patterns: 374 px scrollable left rail, sticky compact header, paired mm slider/numeric inputs, tactile lower-shadow buttons and pink pressed states, right gradient-backed viewer, saved light/dark mode, phone preview first, source/cutout previews, current-result export gating. Shared original local studio/import scaffolding is adapted from daily_app2/20261104-4; model, assembly, constraints and mathematical interaction are new. No reference Git history/dependencies were copied.

## Original construction

Apparent triangle corners in world Z=0 are A=(−span/2,0), B=(span/2,0), C=(0,altitude). Eye E=(0,−distance,+distance). Three bars have top heights Z=sheet+rise+i×step. For each target corner T, inverse perspective gives `x=(1−Z/distance)×T.x`, `y=(1−Z/distance)×T.y−Z`. Gantry endpoints, lengths and orientations follow these rays, not arbitrary preview-only scaling. Projection describes **top-edge midlines**, not every visible face of finite-thickness beams. Shading and binocular vision affect appearance.

Each panel prints flat, then stands upright. Panel thickness is centered on its socket pair. Two supports per gantry are selected from positions clear of all other beam footprints, preserving space around lower bars. Six sockets track actual support positions and panel orientations. Insertion order is LOW, MIDDLE, HIGH, from above, without bending. Glue after dry-fitting. There is no snap/friction retention claim. All three gantries remain physically disconnected from each other; they attach to the common stage.

Every live build uses Manifold CSG, rejects disconnected/nonmanifold outputs, checks positive volume/winding/edges, and checks pairwise assembly collisions and sampled insertion paths. The connected card contains a real partitioned carrier and **16 CSG-unioned breakaway runners**; not loose parts alongside a rectangle. Four cuts per part release carrier + four parts. Runners avoid tongue tips and attach to actual leg/band edges. Snip 1.8 mm outside each part, then smooth stubs.

## Controls / units / fits

All physical dimensions in **millimeters**. Card width180–240, height240–290; apparent baseline60–90, altitude40–60; lowest bar height14–18; height increment8–12; eye distance170–230; beam/leg width5–7; sheet2.2–3.0; part spacing3–5; runners width0.8–1.2 / thickness0.4–0.6; total socket clearance0.10–0.30. Three real presets, three chamfer silhouettes and bounded variation. Some combinations exceed the selected card or lack safe supports: clear errors block export, never silently resize or overlap parts.

Dry-fit LOW and its stage sockets first; adjust total clearance in 0.05 mm steps for printer/material, or sand. These values are starting assumptions, not universal tolerances. Tongue width is fixed to the measured reference. Leg shoulder support is explicit; adhesive required. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, flat Z=0, no supports intended. Default card needs180 ×240 mm bed; clean-part STL exports suit smaller beds. Small cut runners and parts are not children's toys.

## Working local imports

Native picker works on desktop/phones; one-file drag/drop; replace/remove and reset transforms/defaults. Bundled synthetic samples: `public/samples/mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. No personal files bundled. All processing stays in your browser: no uploads, API, CDN, telemetry, keys or paid service.

- **PNG/JPEG:** header/content validation before decode; ≤2 MB, ≤12 MP, ≤6,000 pixels/side. Normalize to ≤500 px for portable storage. Contain/cover fit, crop/pan, invert-background, threshold and depth controls. Local image is sampled to a **20×20 luminance height field**: threshold converts dark samples to constant depth; grayscale uses depth×(1−luminance/255). A closed mesh is Boolean-subtracted from stage apron. Bright holes remain uncut inside a solid backing (tested with a ring probe). Checkerboard shows actual removed background. This is bounded **2D-to-relief**, not automatic full 3D reconstruction, not exact vector-outline tracing.
- **Simple SVG:** ≤2 MB, ≤2,000 simple filled elements, ≤6,000 px side; rejects scripts, effects, external references, and text (flatten it first). Rasterized locally to256 px, then same sampled image conversion. Text (up to8 characters) and six searchable bundled vector icons follow this real geometry path. Raised modes are not offered: engraved only preserves the sheet envelope.
- **ASCII/binary STL:** strict parser, exact binary length, bounds0.2–250 mm per axis, ≤1,500 triangles. Rejects truncation, finite/triangle/edge/winding errors, open/nonmanifold meshes, disconnected, concave/hollow geometry and unsupported overhangs. Only explicitly supported **closed convex flat-bottom solids** become exact mesh-shaped Boolean engraving cutters; unsupported input is rejected, never replaced with a convex hull or claimed repaired. Source preview shows dimensions/triangle count/format. Explicit millimeter confirmation is required. Choose Z/Y/−Z up before attaching; changing axis clears source and asks reattachment. XY proportional scale to4–7 mm footprint, independent Z depth0.4–0.6 mm, rotation±180°, placementX±1.5/Y±2 mm. Safe radius6.5 mm; backing≥1.5 mm. The source mesh remains itself in the actual CSG operation; only its orientation/scale/placement changes.

Imports visibly/measurably change exported geometry. Source and final previews are separate. Bad files/parameters block **all** exports until recovery; a visible last-good preview is labeled and cannot be exported stale. Debounced worker generation ids and current-state keys gate export. Worker failure is explicit and recoverable by reload.

## Studio / exports / persistence

Rotate, zoom, fit, top/front, touch orbit/pinch; connected-card, de-tabbed plate, assembled, exploded and each isolated part. Alignment view sets the camera exactly to the design eye. Exploded positions are explanatory only. See-through stage explains fit. Preview colours are not stored in STL. Export and preview share the exact current checked part meshes and fingerprint.

Prominent binary-STL export, individual part buttons, Everything ZIP (connected card + four clean STL files, numbered assembly guide/current fit report and portable design JSON). Not a mislabeled3MF. The de-tabbed plate contains four separate closed solids. All exports print flat, never assembled interpenetrating shells.

Undo/redo (35 history entries), six local named saves, JSON save/open. Portable image payload≤500 px/250,000 pixels and bounded validated mesh payload included. JSON limit2 MB. Missing image payload explicitly requests reattachment; never pretends missing files restored. Browser localStorage is device/origin-specific; use JSON for portability.

## Development / dependencies

Node22.12+ recommended. `npm install`, `npm run dev`; `npm test` for independent final-STL/fit checks; `node construction-test.mjs` for mixed corners/import extrema/hole probes; `npm run predeploy` builds. React, Vite, Three/OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik. Everything is locally bundled. `predeploy: npm run build`; `deploy: gh-pages -d dist`. Public monorepo deployment uses ROOT `deploy/`, not per-app publication.

## Verification evidence

See `VALIDATION.md` and generated JSON reports. Tests independently parse binary STL bytes, normalize/weld at0.00001 mm, verify every edge has two oppositely directed faces, finite coordinates, nondegenerate triangles, outward normals and positive volume for each component. Exact card bounds, per-part meshes, float32 combined layout and disjointness checked. Geometry tests sample assembly intersections/insertion, actual runner release, clearances and top-midline projection. Browser tests exercise actual file pickers/downloads, content/threshold/depth/scale/rotation/placement changes, malformed and unsupported input, portable saved assets/undo/redo, ZIP members and worker failure, desktop/phone themes/layout/touch.

**No physical print, fit force, adhesion, durability or optical perception test has been performed.** Computational checks do not prove real-world success. Inspect in your slicer and calibrate a small joint before printing the whole card.
