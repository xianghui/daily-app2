# Crosslock Pause

A local, browser-based parametric fidget STL studio. Two **independent perpendicular shuttles share a cross-shaped gate**: move one, return to center, exchange axes, and reverse. The lower shuttle has a real upright pin; the upper shuttle's cross slot blocks simultaneous diagonal travel. This is an orthogonal mutual-exclusion mechanism, not an automatic linked/trammel motion. Clearance gives some center play. Three separately printable, hardware-free parts; open guides intentionally allow removal, not captive or print-in-place.

## Run and export

```sh
npm install
npm run dev
npm run predeploy
npm test
npm run test:browser
```

React + Vite; production base `/daily-app2/20261026-17/`. Per-app deploy scripts are supplied, but publication uses the parent monorepo's combined root deploy flow. `npm run test:browser` serves the **built** `dist` under its real base path. Build first.

The interactive Three.js preview supports orbit, zoom, fit, touch/pinch, print plate, assembled sequence, exploded, palm-only and moving-only views; see-through palm explains guides. The motion sequence is an explanatory hand-guided position sweep, not physics. It adds 0.01–0.02 mm support separation for visibility. Each exported mesh remains in its real bed-flat orientation. Export X/Y/Z dimensions describe the selected part or separated print plate, in millimeters. Download binary STL per part or everything on one separated plate; Everything ZIP contains three individually printable STLs and assembly notes. STL does **not** store preview colours. Preview and export use the same current worker result and are blocked during invalid, stale or failed builds.

## Local import workflows

All files are processed on this device. No upload/API, paid service or CDN code/assets. Only synthetic sample images/meshes are bundled in `public/samples/`; created locally, no third-party attribution required. The reusable editor/import/export scaffold is adapted from the sibling Incline Exchange app; this app has new mechanism geometry and independent mechanism tests. The Keycap Studio reference was inspected read-only for its concrete left-rail, tactile controls, checkerboard conversion, imported-source editor, worker, view and export patterns. No reference repository history/dependencies were copied.

### PNG, JPEG and simple SVG → actual relief geometry

Use Import's file picker, samples or desktop drag/drop. Files: 16 bytes–2 MB. PNG/JPEG content and declared dimensions are checked before decode: ≤12 MP, ≤6,000 px per side. Normalized portable PNG ≤500 px per side. Simple standalone SVG paths, groups and primitive shapes are validated and rasterized locally to 256 px; scripts, external resources, effects and text are unsupported. Original and exact checkerboard cutout previews are shown.

The chosen fit/crop, XY pan and light/transparent or dark background controls are applied to a **20×20 luminance grid**. Threshold mode turns dark samples into fixed-height raised relief; grayscale mode maps darkness continuously to height. Grid samples form a triangulated top surface over a closed 0.4 mm backing. Light holes remain unraised/unengraved, not through-holes in the palm. This is **sampled 2D-to-relief, not exact vector-outline tracing and not full 3D reconstruction from one photo**. Raised relief is solid-unioned into the recessed palm; engraved geometry is subtracted with floor bounds. Scale/rotate/place affect the actual mesh. Empty silhouettes fail visibly. Text (up to eight characters) and six searchable bundled SVG icons take the same geometry path.

### Binary / ASCII STL → integrated palm grip

Content-checked closed STL, ≤1,500 triangles, ≤2 MB, one connected consistently outward-wound solid with each source axis 0.2–250 mm. Select Z-up, Y-up or upside-down **before attaching**, inspect source dimensions/preview, and explicitly confirm millimeter coordinates: STL has no unit metadata. XY scales proportionally to the requested physical footprint; Z independently fits grip height. Set Z rotation and XY placement. Original supported geometry is used in a Manifold boolean union, not re-exported unchanged or replaced by a convex hull.

The supported integration contract is intentionally conservative: **convex, broad flat-bottom, support-free grip**. The bed contact polygon must cover ≥25% of its XY box, and the whole XY projection must remain within it. Open, nonmanifold, self-intersecting, concave, disconnected, slender, inverted or overhanging meshes are rejected with guidance. No arbitrary repair or hole filling is claimed. Reorient a flat base or simplify in a modeler. Changing the up axis clears the source and requests reattachment. The safe palm zone prevents imported features from touching mechanisms; an unsupported transform blocks export.

Replace/remove source, center/reset transforms, reset image controls and return to defaults are real state changes. JSON contains bounded portable normalized images or mesh payloads; missing image payloads explicitly request reattachment. Imported meshes are revalidated on restore. Undo/redo, up to six locally named designs, JSON save/open, three real model-thumbnail presets and mechanically bounded variations are included.

## Parameters

All physical values in mm; rotation in degrees; preview sequence is dimensionless.

| Parameter | Range | Default |
|---|---:|---:|
| Palm diameter | 22–28 | 25 |
| Upper crossgate length | 40–48 | 44 |
| Gate pin radius | 1.6–2.0 | 1.8 |
| Per-side running clearance | 0.3–0.6 | 0.4 |
| Upper crossgate thickness | 3–4 | 3.5 |
| Palm dimple depth | 0–0.6 | 0.3 |
| Import footprint | 4–7 | 6 |
| Imported STL grip height | 0.6–5 | 3 |
| Import XY placement | X ±1.5, Y ±2 | 0 |
| Import Z rotation | ±180° | 0° |
| Image raised depth | 0.4–3 | 1.5 |
| Image engraved depth | 0.4–0.6 | 0.4 |
| Image threshold | 1–254 / 255 | 130 |
| Crop shift X/Y | ±25% | 0 |

Round, hex and oval palm shapes. Fixed shuttle stroke ±6 mm per axis. Floor 5 mm; lower plate 3 mm; upper underside at 10 mm assembled; upper gate minimum slot-end wall ≥3.4 mm. Four discrete corner pads support the upper gate while leaving the lower X runway unobstructed. No unsupported bridge is required. The exported print plate fits roughly 184×62 mm at defaults.

## Printing and assembly

PLA or PETG, dry filament, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, 20–35% infill, 100% millimeter scale. Print each part flat at Z=0; no supports intended. Deburr slot walls and remove elephant foot. Start with **Gentle Start** as a full-size calibration coupon; 0.3–0.6 mm fits are printer/material-dependent, not universal.

1. Seat the lower pin shuttle between low X guide rails, pin upward.
2. Lower the upper gate over the pin onto four corner pads, its long axis along Y.
3. Slide X or Y ±6 mm. Return to center before exchanging axes. Clearance allows small center play; never force diagonal motion or a jam.
4. To release, lift the upper gate completely off first, then lift the lower shuttle.

No bearings, screws, magnets, cord, glue or compliant springs are required. No automatic return, powered motion or captive retention is claimed. Do not invert or shake. Small loose parts are not for children.

## Geometry and validation

Manifold WASM robust solid modeling runs in a Web Worker with bounded detail, 100 ms edit debounce, request ids and state-key stale-result guards. React never exports a stale last-good preview after an invalid edit. Closed mesh, finite-coordinate, nondegenerate face, opposite edge incidence and positive-volume checks run on every generated part and float32 translated plate inside the worker. Node checks independently parse real binary STL normals, bounds, weld topology at 0.00001 mm and per-component positive volume.

`validate.mjs` covers defaults, three presets, all 64 combinations of six physical parameter extrema, and 30 image/STL-derived outputs. Kernel intersection probes sample the full sequential motion, verify diagonal blocking in four quadrants, actual X/Y hard stops and lateral guides, real corner-support contact, upper-then-lower lift-out, separate print plate and imported-feature isolation. Browser scripts test real PNG/JPEG/ASCII/binary file picks/downloads, geometry changes, invalid inputs, text/icons/SVG hole preservation, transforms, portable designs, history, themes, views, per-part ZIP, worker failures and phone layouts/touch. Reports and screenshots are saved beside the app.

**Computational geometry/mechanism checks are not physical print tests. No physical print, force, friction, wear, durability or child-safety testing has been performed.**

## Dependencies

React/React DOM, Vite/plugin-react, Three.js (MIT), Manifold-3D (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages, Playwright (test only). All runtime code, WASM and fonts are bundled locally. No AR/cloud/3MF features are advertised.
