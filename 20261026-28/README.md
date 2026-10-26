# Diameter Drift

A local browser maker studio for a **two-part internal-rolling fidget**. Thumb-roll a loose disc against a circular wall, pause and reverse. A nominal 2:1 guide/disc radius ratio follows the Tusi-couple principle; a small raised rim marker traces a near-diameter path under ideal no-slip rolling. Unlike earlier geared epicyclic, Oldham and crossed-link apps, this is an unaxled, loose friction-guided internal roll. It has no teeth, springs, hardware or snap joints.

**Not a physically print-tested product.** Slip, wear, friction and tactile feel are not simulated or verified. The disc is intentionally not captive: lift vertically to release; do not invert. Small parts, not for children.

## Run

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the app at `/daily-app2/20261026-28/`. All generation, parsing, preview, export, fonts and WASM dependencies are bundled locally. No API, key, paid service or file upload. The root monorepo's predeploy/deploy publishes the combined site; per-app deploy exists only as required scaffold configuration.

## Maker studio

374 px desktop left rail and right orbit viewer; phone preview/export first and stacked collapsible controls below. Locally bundled Fredoka/Rubik fonts, light/dark saved theme, tactile selected buttons, numeric/range pairs, focus outlines and reduced-motion rules. Three real presets include miniature model previews. Undo/redo, six local named designs and portable JSON include bounded imported payloads; a missing image payload explicitly requests reattachment. Plate, assembled rolling, exploded, isolated palm and disc views; see-through palm option. Preview colours are not STL colours.

## Parameters (all geometry in millimeters)

| Control | Supported range |
| --- | --- |
| Palm diameter | 22–28 |
| Rolling disc diameter | 18–22 |
| Guide wall height above floor | 3–5 |
| Radial guide allowance above nominal radius | 0.3–0.6 |
| Guide wall thickness | 3–4 |
| Palm dimple depth | 0–0.6 |
| Base floor / rolling disc thickness | 4 / 4 fixed |
| Relief footprint | 4–7 |
| Relief height | 0.4–3 raised; 0.4–0.6 engraved |
| STL grip height | 0.6–5 |
| Source rotation | −180–180 degrees |
| Source X / Y placement | ±1.5 / ±2 |

Round, hexagonal and oval palms. Parameters outside ranges or unsafe placement block export. Minimum engraved landing floor is 2.6 mm; personalization stays within a 6.5 mm center safe zone, at least 11.5 mm from the nominal rolling bore. Booleans must produce one connected manifold solid per exported part.

## Image → actual geometry

File picker and drag/drop accept actual PNG, JPEG and simple SVG. Limit 2 MB, 12 megapixels and 6,000 px per side; normalize to at most 500 px per side for portable images. SVG allows at most 2,000 simple path/shape elements and 6,000 px dimensions; scripts, references, effects and external resources are rejected. SVG is rasterized locally at 256 px, **not exact vector tracing**.

Fit/contain or cover/crop, pan ±25%, light or inverted dark background. The source and checkerboard cutout are shown. A **20 × 20 luminance grid** maps thresholded dark samples (threshold 1–254) to fixed relief height, or grayscale to proportional height. A closed triangulated height field with continuous backing is then solid-unioned into (or subtracted from) the recessed stationary palm. Light holes remain unraised/unengraved; they are not holes through the palm. Pixel boundaries interpolate across one grid cell. Text (up to eight characters) and six searchable bundled SVG marks use this same geometry pipeline. Empty silhouettes fail. All placement, depth and conversion edits change exported vertices, not textures. This is 2D-to-relief conversion, **not single-photo 3D reconstruction**.

## STL → integrated grip

Binary and complete ASCII STL, 2 MB, 1–1,500 triangles and 0.2–250 mm dimensions on each oriented axis. Select Z up, Y up (+90° X), or upside-down before attachment; changing axis requests reattachment. The source receives a rotatable 3D preview, format, triangle count and dimensions. Explicitly confirm source coordinates in **millimeters**, because STL has no unit metadata. XY scales proportionally to a physical footprint; height scales independently. Rotate Z, place X/Y, center/reset, replace/remove and return to defaults.

The actual input solid, with its verified topology and faces, is transformed then unioned into the stationary palm. No hull substitution, silent repair, generic re-export or moving-interface overlap. Deliberately supported subset: one closed outward-wound **convex** solid, broad flat bottom (at least 25% of footprint), no overhang outside that footprint. Concave/hollow/branched, open, nonmanifold, self-touching/intersecting, disconnected, inverted, excessively slender or degenerate input is rejected with guidance. Prepare a flat-bottom convex grip in a modeler; this application does not claim general STL repair. Parser/CSG execute in the worker.

## Mechanism and printing

Guide radius R = disc diameter + radial allowance; disc radius r = diameter / 2. The physical wall and disc are 128-sided. Preview orbit radius d = R cos(π/128) − r − 0.03 mm avoids wall faceting collisions. Ideal disc spin = −θ d/r. The raised marker center is 1.6 mm inward from the rim, and allowance changes the ratio slightly: **the marker path is not an exact straight line**. Actual slip is allowed; the preview is an explanatory ideal, not enforced gearing or a friction/force simulation.

Print both exported parts Z=0 down, rim/nub up. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and three walls are starting points; no supports intended. Place the disc flat in the guide. Guide gently against the wall rather than dragging across the floor; reverse and repeat. Lift out to disassemble. Use Gentle Start as a full-size calibration set, trim elephant foot and stop if rough/binding. No retention, bearings, magnets, fasteners or glue. Fit depends on printer, material and slicer, not a universal tolerance claim.

## Export and responsiveness

Per-part binary STL, separated plate STL and Everything ZIP containing both real STLs plus assembly notes. Dimensions show current selected export X/Y/Z. Preview and export use the exact same worker result; a current-state key plus request IDs block stale exports. Invalid edits may leave a clearly labelled last-valid preview, but exports stay disabled. Builds are debounced 100 ms and bounded at 20² image samples / 1,500 source faces. Worker load failure blocks export until reload. Portable JSON accepts at most 2 MB, validates assets on restoration, and requires reattachment for missing payloads. Files remain in browser memory/localStorage only; no personal fixtures are committed.

## Dependencies and provenance

React/Vite, Three.js/OrbitControls, Manifold 3D WASM (Apache-2.0), fflate and Fontsource Fredoka/Rubik (SIL OFL). Shared import/editor/testing infrastructure adapted from the existing daily-app2 studio; **new rolling geometry, poses and mechanical tests**. Read-only Keycap Studio reference informed the concrete left-rail layout, tactile controls, source editor, checkerboard, view toolbar, themes and export panel; no reference files/history/dependency tree modified or copied wholesale. Bundled PNG/JPEG/SVG and ASCII/binary STL fixtures are synthetic examples from this repository, not personal data; six small mark SVGs are bundled in `src/icons.js`.

## Reproducible validation

- `npm test`: independent binary-STL parser checks length/count, finite coordinates, nondegenerate triangles, unit normals, opposite directed welded edges (1e-5 mm tolerance), positive volume per component and expected millimeter dimensions. Every part and float32 print plate tested. Twenty preset/extreme cases and 35 imported cases.
- Kernel intersections sample complete rolling orbit and vertical release; verify print separation, floor/wall thickness and source isolation. This is geometric clearance validation, **not friction, fatigue, retention or physical printing evidence**.
- `node serve-production.cjs`, then `node browser-test.cjs`: production-path worker/WASM, file-picker PNG/JPEG/ASCII/binary STL, real downloaded geometry/JSON fingerprints, pixel/threshold/depth/transform changes, remove/reset, rejected/truncated/empty/excessive inputs, 320/390 px phone bounds, touch orbit/pinch and downloads.
- `node feature-test.cjs`: presets, shapes, bounded variations, text/icons/SVG, engraving, image background, undo/redo, portable imported-asset/named-design round trips, real ZIP and parts, views, theme, keyboard focus and stale export guards.
- `node resilience-test.cjs`, `node additional-test.cjs`, `node stale-import-test.cjs`, `node hole-test.cjs`: worker abort/reload, every mark, reference-inspired layout, reduced motion, missing-payload recovery, import races and actual solid probes confirming ring holes.
- Gallery scripts preserve all earlier entries and compile every inline script. Browser tests rerun against the actual root staging directory before publication.

Machine-readable reports and screenshots are saved beside the app. No physical print tests were performed.
