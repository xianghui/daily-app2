# Radius Rhythm

A local browser-based parametric STL maker for a **radially adjustable friction-drive fidget**. Gently turn a horizontal disc under an upright soft wheel, slide the bearing yoke outward to increase its turn ratio, then reverse or lift to disengage. This is a disc-to-wheel transmission, not a geared drive or crank-slider reskin. Five separately printable solids; no bearings, magnets or purchased hardware.

## Studio

React + Vite, Three.js touch orbit/zoom/fit, worker-owned Manifold WASM, local Fredoka/Rubik fonts and fflate ZIP. Inspired by the read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, editor, viewer, image conversion, worker, STL and export modules: lavender desk, white panels, coral raised keys, 374 px left editor, large right preview, saved dark theme and phone preview-first stack. No source assets, switch templates, dependencies or Git history from that reference were copied. Shared import/editor infrastructure is adapted from the existing daily-app2 studio; mechanism, print transforms and mechanical tests are specific to this app.

Three real presets have model thumbnails. The yoke has an open inspection window above the roller; assembled, exploded, plate, palm-only, moving-parts and isolated soft-wheel views are available. Round/hex/oval palm shapes, paired sliders/numeric millimeter fields, bounded variation, collapsible sections, keyboard focus and reduced-motion support. Undo/redo (35 snapshots), six local named designs and portable JSON include normalized image or verified mesh payloads. Missing image payloads require reattachment; unsupported meshes are never silently replaced. Colours are preview-only, not stored in STL.

## Actual imports and limits

Files stay in the browser; no uploads, APIs, paid services or remote generation dependencies. Only original CC0 synthetic fixtures are bundled in `public/samples` (PNG, JPEG, SVG, binary and ASCII STL). Desktop/phone file picker, replace/remove/reset and drag/drop are available.

### Image → printable relief

PNG/JPEG (actual headers checked): 16 bytes–2 MB, ≤12 megapixels and ≤6,000 px per side. Normalize to ≤500 px locally, fit/contain or cover/crop with ±25% shifts, composite transparency onto selected light/dark background, calculate luminance, then sample a bounded **20×20 height field**. Threshold 1–254 makes foreground height `depth`, background height zero; grayscale mode uses `depth × (1−luminance/255)`. The connected closed surface has triangulated tops, walls and a bottom, and is solid-unioned into the isolated recessed palm. White holes remain at the floor instead of being filled with raised material. This is sampled 2D-to-relief conversion, **not one-photo full-3D reconstruction** and not exact vector tracing. Fine features below the sample spacing may disappear. The checkerboard shows the actual converted foreground; source image is shown beside it.

Simple SVG paths/shapes are validated and rasterized to 256 px locally first; max 2,000 elements, no scripts, external references, filters, embedded images or text. The synthetic even-odd ring demonstrates hole preservation. Text up to eight characters and six searchable bundled SVG icons use the same real image-to-relief path.

Footprint 4–7 mm, depth 0.4–3 mm raised (engraved 0.4–0.6 mm), Z rotation ±180°, X ±1.5 mm / Y ±2 mm placement. All vertices must stay in the 6.5 mm radius safe palm well. Minimum engraved floor 3.6 mm; no imports on moving bearings, contact surfaces or guides.

### STL → integrated grip

Binary and complete ASCII STL, 40 bytes–2 MB, ≤1,500 triangles, each dimension 0.2–250 mm, finite coordinates ±10,000 mm. STL has **no unit metadata**: dimensions are displayed and explicit millimeter confirmation gates integration. Select Z-up, Y-up or −Z-up before attaching (changing axis clears the source). Source 3D viewer shows the real oriented mesh.

Strict support contract: one connected closed outward-wound **convex solid**, broad flat bottom ≥25% of XY bounding rectangle, all projected vertices within that bottom footprint. Open/nonmanifold, degenerate, inconsistent/inward, disconnected, self-intersecting, concave, overhanging or excessive inputs are rejected with guidance. No repair, no convex-hull substitution, no discarded concavities. A hull is used only to check flat contact, never as the output body. Reorient/decimate or fix unsupported meshes in a modeler first.

XY uniformly fits the chosen 4–7 mm footprint, Z independently fits 0.6–5 mm height. Rotate, center and place the actual original solid. Minimum transformed XY span 1.2 mm. Manifold Boolean-unions it into the stationary grip with 0.15 mm embed. Integration must yield one connected closed solid. Changing shape, scale, height or placement therefore changes exported triangles and volume, not merely a texture or unchanged re-export.

## Mechanical parameters (mm)

| Setting | Range | Default |
|---|---:|---:|
| Palm diameter | 22–28 | 25 |
| Drive-disc radius | 20–24 | 22 |
| Follower-wheel radius | 5–7 | 6 |
| Bearing and side-guide gap, per side | 0.3–0.6 | 0.4 |
| Drive-disc thickness | 3–4 | 3.5 |
| Palm dimple depth | 0–0.6 | 0.3 |

Contact radius travels from 8 mm to `disc radius−6 mm`. Ideal no-slip follower turns per disc turn = contact radius / follower radius (default 1.33–2.67). The follower axle is radial X; the disc and follower contact velocities both run tangentially in Y. The rolling track is clear of rim dimples. Real dry friction can slip, and bearing play/compliance affect contact; the model does not promise traction or torque.

5 mm floor, 3 mm yoke bridge, ≥0.9 mm cheek wall, 2 mm bridge-to-wheel gap, 3 mm wheel-to-cheek axial gap, side lanes 2 mm beyond disc edge; isolated grip has ≥9.5 mm separation from the main base edge over the supported ranges. Contact is nominally tangent, without designed interference. Motion preview shows **ideal no-slip kinematics** with 0.01–0.02 mm preview-only contact gaps, not simulated friction or dynamics.

## Print, assemble and release

1. PLA/PETG palm-runway, drive-disc, radial-yoke and axle-pin. TPU 95A follower (rigid PLA can demonstrate geometry but gives less reliable traction). No purchased hardware.
2. Everything STL is a **separated print plate**, never the overlapping assembled preview. Individual STL buttons and Everything STL + assembly-notes ZIP are available. Yoke exports inverted, broad top bridge on the bed, legs up; short 3.6–4.2 mm horizontal bearing holes may need bridge cleanup or local supports. The other four parts are bed-flat. Print pin upright/head down with a brim.
3. Starting point: 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, PLA/PETG 20–35% infill, TPU slow. Use the Gentle Start full-size preset as a fit/traction calibration coupon. Gaps depend on printer and material; clean elephant foot, deburr bores, verify free spinning, never force a jam.
4. Seat disc on the center journal. Invert printed yoke and lower feet into open side lanes. Place soft wheel between bearing cheeks; slide pin through both bores and wheel. Gently thumb-turn the exposed rim and slide the yoke. Lift yoke to disengage. Withdraw the pin sideways to release wheel; disc lifts off.
5. **Not captive**: guides are open, pin has a single head, all parts are intentionally removable. Keep level, do not invert or shake. Small loose parts are not for children.

No physical print, grip/traction, force, fatigue, wear or durability testing has been performed. Computational solid/collision checks are not substitutes for those tests.

## Generation, validity and export gating

A debounced worker owns bounded mesh generation, Booleans and STL preflight. Generation IDs reject stale replies; export requires exact current parameter/source/transform key, finished conversion, confirmed units and no error. A last-good preview may remain on an invalid edit, explicitly labelled, but cannot be exported. Worker-load failure blocks export and asks for reload.

Preview and export consume the exact same checked final mesh; a geometry fingerprint is exposed on `.stage`. Every part and float32-translated plate is preflighted for finite coordinates, nondegenerate triangles, closed welded edge incidence, opposite neighbor winding and positive volume. Per-part/plate STL is binary, includes unit normals, and uses explicit millimeter dimensions. STL has no colours. Parts are unioned/subtracted as true solids, never a list of interpenetrating shells.

## Reproduce

```sh
npm install
npm run predeploy
npm test
npm run test:browser
```

`npm run test:browser` serves the real `dist` under `/daily-app2/20261026-19/` and runs headless Chromium with real file inputs/downloads, including phone touch gestures. Install Playwright Chromium if needed. `validate.mjs` independently checks STL bytes and component adjacency, runs all presets and 64 parameter corners, image/STL-derived meshes, parameter rejection and sampled complete-turn/radial motion collisions, contact/support, lift-off and axle withdrawal. Reports and screenshots record actual results. Browser tests cover PNG/JPEG and ASCII/binary STL, changed pixels/threshold/depth/transforms, malformed/oversized/open/nonmanifold/concave inputs, empty relief, undo/redo, six marks, SVG hole probes, portable assets, named designs, stale replies, worker abort/reload, all views, ZIP, phone layout/exports/orbit/pinch and no remote asset requests.

Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public collection publishing uses the **root** combined deploy flow, not the individual app deploy script. Legacy gallery and keycap reference remain read-only.
