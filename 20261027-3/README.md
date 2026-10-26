# Nip & Drift

A local React + Vite maker studio for an **open-ended, opposed-roller friction-feed fidget**. Counter-turn two independent thumb drums to draw a soft TPU ribbon through their nip; reverse to return. Unlike an endless belt, the ribbon can feed through and lift out. Generated parts are a palm frame, two bored rollers and a separate TPU ribbon. No hardware, magnets, bearings, account, API key, server or CDN is needed.

## Run and publish

Node 22.12+; `npm install`, `npm run dev`. `npm test` performs mesh and mechanism checks; `npm run predeploy` creates `dist`. Base path: `/daily-app2/20261027-3/`. Per-app `deploy` uses gh-pages, but public combined-site publication must use the parent monorepo's predeploy/deploy commands.

## Studio

Keycap Studio was inspected read-only as the visual/interaction reference: lavender desk, white panels, coral tactile controls, saved dark theme, 374 px left editor, rounded right preview, and phone preview-first stacking. Existing Daily Object Lab import, viewport, persistence and export infrastructure was adapted; the roller-nip model and mechanical checks are new. Three geometry-generated preset thumbnails, round/hex/oval palms, numeric mm inputs, bounded variations, undo/redo, six named local designs, portable JSON and reset are implemented. Locally bundled Fredoka/Rubik fonts (OFL), React, Three.js, Manifold (Apache-2.0), fflate and Vite are dependencies; Playwright is used for browser validation. Six original bundled SVG marks and the synthetic samples are CC0.

## Parameters and fit

All geometry dimensions are **millimeters**. Palm diameter 22–28; feed preview stroke 12–18; roller radius 8–12; axle radial running clearance 0.3–0.6; ribbon thickness 1.6–2.2; nominal nip compression 0.1–0.25; palm dimple depth 0–0.6. Ribbon length is stroke + 28 mm, giving a 14 mm tail at either preview extreme. Roller height 8 mm, ribbon width 5 mm, floor 4 mm, posts radius 2.5 mm. Nip width = ribbon thickness − compression. These are FDM starting settings, not universal tolerances. The full-size Easy Feed preset is the calibration set: start with 0.1 mm compression and 0.6 mm axle clearance. Calibrate before using tighter settings.

The two drums have no gears or positive drive: feeding depends on TPU friction and thumb pressure. Rotate them oppositely; leave at least 10 mm of ribbon on each side. Keep the mechanism level. Rollers and ribbon deliberately lift out: no captive retention is promised. Stop if binding, excessive effort or stress whitening occurs.

## Image, text, icon and SVG workflow

PNG and JPEG content headers, decoded dimensions and file extensions are checked. Limits: 2 MB, 12 MP, 6,000 px per side. Files are normalized locally to ≤500 px and sampled on a bounded **20 × 20 grayscale grid**. Fit/cover crop, X/Y crop shifts, light/dark background, threshold, relief depth, raised/engraved style, 4–7 mm footprint, Z rotation and XY placement are supported. SVG supports ≤2,000 simple filled vector shapes; scripts, external resources, text and effects are rejected, then the vector is rasterized locally. Text (8 characters) and six searchable icons use the same conversion path.

Threshold conversion assigns depth to dark samples and zero height to light samples; grayscale conversion assigns depth × (1 − luminance/255). Triangulated height cells form one closed relief solid with a backing integrated into the palm via real solid union (or subtraction for engraving). White/transparent holes stay unraised/unengraved on the solid backing, not through-holes. A checkerboard shows the exact sampled cutout beside the source. This is **2D-to-relief**, not automatic reconstruction of a 3D object, and is not smooth outline tracing. Raised depth 0.4–3 mm; engraved depth 0.4–0.6 mm preserves at least 2.6 mm palm floor. Small details are resolution-limited. Empty silhouettes are rejected.

## STL workflow

Both complete ASCII and binary STL are parsed locally in the worker. Select Z up, Y up or upside-down before attaching. The source dimensions and source mesh are shown; **explicit millimeter confirmation is required**, because STL has no unit metadata. XY is scaled proportionally to 4–7 mm footprint, Z independently to 0.6–5 mm height. Z rotation ±180°, X ±1.5 mm and Y ±2 mm are bounded by a 6.5 mm-radius safe well. Reset transforms, remove, replace and built-in defaults work.

Supported input: one outward-facing, closed, connected, convex, broad-flat-bottom solid, ≤1,500 triangles, 0.2–250 mm per axis, 2 MB. Degenerate triangles, nonfinite coordinates, open/nonmanifold edges, inconsistent winding, inward volume, self intersections, concavities, cavities, branches and unsupported overhangs are rejected with guidance. Bottom contact must cover ≥25% of its footprint. The convex hull is used only to **check** bed support, never to replace the source. There is no claimed repair path. Use a modeler to simplify/reorient unsupported input. Final geometry uses the original accepted triangles in a Manifold boolean union, not a preview overlay or unchanged mesh re-export. The palm well keeps imports >18 mm away from moving surfaces.

## Responsiveness, privacy and files

Manifold WASM and mesh parsing run in a bundled Web Worker; resolution and triangle counts are bounded. Edits debounce 100 ms and request ids reject stale results. Exports are gated by the exact current parameters, source and transforms, with pending conversion/import/error states blocked. A last-good preview may remain visible with a warning, but cannot export after invalid edits. Worker failure disables export. All personal files stay local; none are uploaded or checked into this repository. Samples in `public/samples` are original synthetic CC0 fixtures.

JSON and named local designs include bounded portable image/mesh payloads. Restoring verifies payloads and dimensions; missing image payload explicitly asks for reattachment. JSON limit 2 MB. Theme and designs use localStorage, with quota feedback.

## Export, views and printing

Binary per-part STL, separated print plate STL, and Everything ZIP containing four genuine STL files plus assembly notes. STL has no color or unit metadata; no 3MF is claimed. The interactive viewport supports orbit, zoom, fit, touch, isolated parts, assembled, exploded, print plate and see-through base.

Assembled ribbon compression is a **uniform estimated preview deformation**, not a material/force simulation. Roller phase assumes no slip; actual traction may differ. Exports always contain the original **uncompressed** TPU ribbon broad-face down, not the assembled overlap. Preview and exports use the same current checked part meshes; layout/deformation is explicitly preview-only.

Print palm and rollers in PLA/PETG; ribbon in TPU 95A. Z=0 is the bed for every exported part: rollers upright, ribbon on its broad 5 mm face. Start with 0.4 mm nozzle, 0.20 mm layers, three walls; print TPU slowly. No supports intended. Deburr elephant foot. Drop rollers onto posts, insert ribbon edgewise into nip, gently counter-turn. Lift parts to release. Loose small parts are not for children.

## Validation

`node validate.mjs`: independent binary STL parsing, 1e−5 mm vertex welding, exactly two opposite incidences per edge, unit stored normals, finite/nondegenerate triangles, positive volume per connected component, correct component counts, bed-flat mm bounds, and final part/plate checks. Defaults, all presets, parameter corners and image/STL-derived outputs are included. Independent Manifold collision checks sample feed positions and vertical release paths; print plate separation and import isolation are verified. Original ribbon interference is separately measured and limited to the intended roller pair. The compressed preview must have zero unwanted intersection; it is still not a validated elasticity model.

`node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node hole-test.cjs`, `node stale-import-test.cjs` exercise the actual production base path, worker/WASM, PNG/JPEG/ASCII/binary file pickers, actual STL/ZIP downloads, changed pixels/threshold/transforms, source restoration, rejection/recovery, worker failure, stale results, text/icons/SVG holes, saved designs, themes, narrow phones, touch orbit/pinch and layout. Reports are saved alongside source. Gallery scripts and root staging have separate checks.

**Computational geometry checks are not physical tests. No physical printing, traction, fatigue, force or material validation has been performed.**
