# Twin Gate Ritual

A local browser maker studio for a **four-part dual-alignment gate fidget**. Rotate two independent slotted thumb dials until both face a shared two-prong key. Slide the key inward, withdraw it, scramble one or both dials and repeat. This is a mechanical AND gate: either misaligned dial blocks admission. Unlike earlier bayonet, single-eye orientation gates, cross-shuttle gates or compliant checkpoints, two rigid rotary gates control a common straight key. It is not a security lock.

**Not physically print-tested.** Friction, wear, force and tactile feel are not simulated or verified. All moving parts are intentionally removable vertically: use level, do not invert. Small parts, not for children.

## Run

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the app at `/daily-app2/20261026-29/`. All generation, parsing, preview, export, fonts and WASM dependencies are bundled locally. No API, key, paid service or file upload. The root monorepo's predeploy/deploy publishes the combined site; per-app deploy exists only as required scaffold configuration.

## Maker studio

374 px desktop left rail and right orbit viewer; phone preview/export first and stacked collapsible controls below. Locally bundled Fredoka/Rubik fonts, light/dark saved theme, tactile selected buttons, numeric/range pairs, focus outlines and reduced-motion rules. Three real presets include miniature model previews. Undo/redo, six local named designs and portable JSON include bounded imported payloads; a missing image payload explicitly requests reattachment. Plate, gate assembly, exploded, isolated palm, key and both gate views; see-through palm option. Preview colours are not STL colours.

## Parameters (all geometry in millimeters)

| Control | Supported range |
| --- | --- |
| Palm diameter | 22–28 |
| Gate dial diameter | 28–34 |
| Key travel | 6–8 |
| Running clearance, radial at bores / per-side at guides and slots | 0.3–0.6 |
| Guide wall thickness | 3–4 |
| Palm dimple depth | 0–0.6 |
| Base floor / key and dial thickness | 4 / 3 fixed |
| Relief footprint | 4–7 |
| Relief height | 0.4–3 raised; 0.4–0.6 engraved |
| STL grip height | 0.6–5 |
| Source rotation | −180–180 degrees |
| Source X / Y placement | ±1.5 / ±2 |

Round, hexagonal and oval palms. Parameters outside ranges or unsafe placement block export. Minimum engraved landing floor is 2.6 mm; personalization stays within a 6.5 mm center safe zone, at least 15.5 mm from the closest dial envelope. Booleans must produce one connected manifold solid per exported part.

## Image → actual geometry

File picker and drag/drop accept actual PNG, JPEG and simple SVG. Limit 2 MB, 12 megapixels and 6,000 px per side; normalize to at most 500 px per side for portable images. SVG allows at most 2,000 simple path/shape elements and 6,000 px dimensions; scripts, references, effects and external resources are rejected. SVG is rasterized locally at 256 px, **not exact vector tracing**.

Fit/contain or cover/crop, pan ±25%, light or inverted dark background. The source and checkerboard cutout are shown. A **20 × 20 luminance grid** maps thresholded dark samples (threshold 1–254) to fixed relief height, or grayscale to proportional height. A closed triangulated height field with continuous backing is then solid-unioned into (or subtracted from) the recessed stationary palm. Light holes remain unraised/unengraved; they are not holes through the palm. Pixel boundaries interpolate across one grid cell. Text (up to eight characters) and six searchable bundled SVG marks use this same geometry pipeline. Empty silhouettes fail. All placement, depth and conversion edits change exported vertices, not textures. This is 2D-to-relief conversion, **not single-photo 3D reconstruction**.

## STL → integrated grip

Binary and complete ASCII STL, 2 MB, 1–1,500 triangles and 0.2–250 mm dimensions on each oriented axis. Select Z up, Y up (+90° X), or upside-down before attachment; changing axis requests reattachment. The source receives a rotatable 3D preview, format, triangle count and dimensions. Explicitly confirm source coordinates in **millimeters**, because STL has no unit metadata. XY scales proportionally to a physical footprint; height scales independently. Rotate Z, place X/Y, center/reset, replace/remove and return to defaults.

The actual input solid, with its verified topology and faces, is transformed then unioned into the stationary palm. No hull substitution, silent repair, generic re-export or moving-interface overlap. Deliberately supported subset: one closed outward-wound **convex** solid, broad flat bottom (at least 25% of footprint), no overhang outside that footprint. Concave/hollow/branched, open, nonmanifold, self-touching/intersecting, disconnected, inverted, excessively slender or degenerate input is rejected with guidance. Prepare a flat-bottom convex grip in a modeler; this application does not claim general STL repair. Parser/CSG execute in the worker.

## Mechanism and printing

Let R = dial diameter / 2, g = clearance, S = key stroke. The gate disks are 96-sided, 3 mm thick; their post bore radius is 2.5 + g. The radial notch is 3 + 2g mm wide and ends 5.5 mm below the dial center. A 3 mm key finger starts at y = −R−1 and ends at y = −R−1+S; its minimum root separation is R+1−S−5.5 ≥1.5 mm. Two dials are 2R+8 mm apart, leaving an 8 mm envelope gap. Bore collar thickness is 5.5−(2.5+g) ≥2.4 mm. Palm personalization is at least 15.5 mm from a dial. Side guide walls and split front stop constrain the crossbar without blocking its two fingers. Travel between the end stops is S + 2g; the aligned preview displays the nominal central S mm stroke. Open-top parts are **not captive**, an explicit retention choice to make release accessible and avoid hidden support bridges.

The preview travel control aligns both gates first. The scramble control withdraws the key before turning the left/right dials in opposite directions. Real dials rotate independently; these linked preview turns only explain blockage. Preview parts are 0.1 mm above the floor to avoid z-fighting; under gravity they rest on the bed floor. No dynamic contact/friction or force simulation is claimed.

Print all four parts Z=0 down, thumb nubs/posts up. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and three walls are starting points; no supports intended. Key and dials have continuous flat undersides. Base floor 4 mm, guide walls 3.9 mm high, posts rise 5.1 mm above the floor. Place each dial over a post and lay the key between its straight guides. Align both notches toward the fingers. Slide gently, withdraw completely, then scramble; never force a key against a blocked gate. Lift vertically to disassemble. No glue, snap fits, bearings, magnets or fasteners. Use Gentle Start as a full-size calibration set, remove elephant foot and enlarge clearance if binding. Fit depends on printer/material/slicer and is not universal. Export individual parts if the separated plate exceeds your build bed. All parameter extremes generate support-free horizontal mating faces.

## Export and responsiveness

Per-part binary STL, separated plate STL and Everything ZIP containing all four real STLs plus assembly notes. Dimensions show current selected export X/Y/Z. Preview and export use the exact same worker result; a current-state key plus request IDs block stale exports. Invalid edits may leave a clearly labelled last-valid preview, but exports stay disabled. Builds are debounced 100 ms and bounded at 20² image samples / 1,500 source faces. Worker load failure blocks export until reload. Portable JSON accepts at most 2 MB, validates assets on restoration, and requires reattachment for missing payloads. Files remain in browser memory/localStorage only; no personal fixtures are committed.

## Dependencies and provenance

React/Vite, Three.js/OrbitControls, Manifold 3D WASM (Apache-2.0), fflate and Fontsource Fredoka/Rubik (SIL OFL). Shared import/editor/testing infrastructure adapted from the existing daily-app2 studio; **new dual-gate geometry, sequence controls, poses and mechanical tests**. Read-only Keycap Studio reference informed the concrete left-rail layout, tactile controls, source editor, checkerboard, view toolbar, themes and export panel; no reference files/history/dependency tree modified or copied wholesale. Bundled PNG/JPEG/SVG and ASCII/binary STL fixtures are synthetic examples from this repository, not personal data; six small mark SVGs are bundled in `src/icons.js`.

## Reproducible validation

- `npm test`: independent binary-STL parser checks length/count, finite coordinates, nondegenerate triangles, unit normals, opposite directed welded edges (1e-5 mm tolerance), positive volume per component and expected millimeter dimensions. Every part and float32 print plate tested. Twenty preset/extreme cases and 35 imported cases.
- Kernel intersections sample complete aligned key travel for all six component pairs, each gate independently blocking an advanced key at 90°, full withdrawn dial rotation, and vertical release. Tests verify plate separation, floor/wall/collar thickness and import isolation. This is geometric clearance/blockage validation, **not force, friction, wear or physical printing evidence**.
- `node serve-production.cjs`, then `node browser-test.cjs`: production-path worker/WASM, file-picker PNG/JPEG/ASCII/binary STL, real downloaded geometry/JSON fingerprints, pixel/threshold/depth/transform changes, remove/reset, rejected/truncated/empty/excessive inputs, 320/390 px phone bounds, touch orbit/pinch and downloads.
- `node feature-test.cjs`: presets, shapes, bounded variations, text/icons/SVG, engraving, image background, undo/redo, portable imported-asset/named-design round trips, real ZIP and parts, views, theme, keyboard focus and stale export guards.
- `node resilience-test.cjs`, `node additional-test.cjs`, `node stale-import-test.cjs`, `node hole-test.cjs`: worker abort/reload, every mark, reference-inspired layout, reduced motion, missing-payload recovery, import races and actual solid probes confirming ring holes.
- `node gate-sequence-test.cjs`: scramble withdraws the key, travel aligns the gates, reset clears the sequence and all isolated-part views preserve exports.
- `node public-smoke.cjs`: verifies public Pages worker/WASM, actual default STL download and combined gallery after deployment.
- Gallery scripts preserve all earlier entries and compile every inline script. Browser tests rerun against the actual root staging directory before publication.

Machine-readable reports and screenshots are saved beside the app. No physical print tests were performed.
