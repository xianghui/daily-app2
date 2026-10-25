# Takeup Turn

A local React + Vite maker studio for a **lost-motion pin-in-arc coupling**. The upper thumb disc turns freely until its pin reaches an end of the curved slot, then takes up against that stop. Reverse to feel the free-play/contact rhythm again. The follower lifts off intentionally: it is **not captive**.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Production base: `/daily-app2/20261026-4/`. Per-app deploy scripts are present; publish the combined public site through the parent monorepo. Binary STL downloads share the current worker-produced geometry with the preview. Each part has its own STL, plus a separated print-plate STL and ZIP containing individual STLs and assembly notes. STL has no color or unit metadata; dimensions are assumed millimeters. Preview colors are not export colors.

## Mechanism and bounded dimensions

| Parameter | Supported range (mm) |
| --- | --- |
| Palm diameter | 22–28 |
| Slot centerline arc length | 20–30 |
| Coupling floor | 2.5–4 |
| Running clearance, radial/per side | 0.25–0.60 |
| Thumb disc thickness | 4–7 |
| Palm dimple depth | 0–0.6 |

The slot centerline radius is 10 mm; the follower pin radius is 1.5 mm and its height is 2.2 mm. The slot is 2.8 mm deep with round end pockets and a floor ≥2.7 mm. Slot walls are at least 4.9 mm thick. The follower bore fits over a 3 mm-radius post with the selected radial clearance. A **5 mm-radius annular shoulder** supports the follower bottom, keeping a 0.30 mm gap between the broad disc faces and 0.90 mm beneath the pin. The post ends 1 mm below the upper disc face. No part is suspended in midair or fused across a moving interface.

Nominal free sweep in radians is slot centerline arc length / 10 mm radius (114.6–171.9 degrees). Rounded end pockets add a small clearance-dependent take-up beyond the nominal sweep. Curved slot walls use 96 arc segments and 32 segments per round end. The preview shows nominal guided positions, not exact force/friction or snap dynamics. Independent collision checks test the free sweep, support contact, end-stop obstruction beyond it and vertical removal. Hold the lower palm lightly; the pin can transmit torque after take-up. No ratcheting or elastic return is claimed.

**Print both parts bed-flat exactly as exported, without supports or hardware.** The follower prints peg-up; flip it over during assembly so its peg faces down into the slot and its bore slides over the post. Use PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 15–25% infill. Deburr bore/peg/slot and remove elephant foot; do not force a tight fit. Start with **Pocket Takeup** as the reduced-material calibration pair (0.50 mm radial clearance). If it binds, add 0.10 mm radial clearance and check slicer compensation. Fits depend on printer and material, not universal tolerances. The follower is loose: use over a table, do not invert over an edge, and keep small parts away from young children. No physical print, force, friction, fatigue, wear or child-safety testing has been performed.

## Both import workflows

All files are processed **locally in the browser**. Nothing is uploaded or sent to an API. Only synthetic fixtures are bundled under `public/samples/` (project-generated, CC0). Personal input files must not be added to this repository.

### Image → real solid relief

PNG/JPEG and a restricted simple SVG subset are accepted. SVG is locally rasterized; scripts, external references, text, effects and unsupported elements are rejected. Original image headers are checked before decoding: maximum 2 MB, 12 MP, 6,000 px per side; normalized to at most 500 px per side. SVG is bounded to 2,000 elements and locally rendered at 256 px.

The fitted/cropped image is composited onto the chosen light/dark background, with crop pan ±25%, and sampled at **20 × 20**. Luminance (`.2126 R + .7152 G + .0722 B`) drives either thresholded silhouette relief (threshold 1–254) or grayscale height relief. A triangulated height field on a continuous 0.4 mm backing is boolean-unioned into a recessed palm landing. Raised depth is 0.4–3 mm; engraving depth is limited to 0.4–0.6 mm to protect the floor. Bright holes remain unraised/unengraved above the solid backing; this is **sampled relief, not outline tracing or a full 3D reconstruction from a photo**. The checkerboard shows the actual sampled cutout. Fit/crop, threshold, background, depth, style, footprint, rotation and placement alter exported triangles. Empty conversion is rejected. Text and six searchable bundled SVG icons use this same geometry path.

### STL → integrated grip

ASCII and binary STL, up to 2 MB / 1,500 triangles; every source axis must be 0.2–250 mm. Select Z up, Y up or inverted Z before attachment. Source dimensions, format, triangle count and a separate source 3D preview are displayed. **Explicitly confirm the source coordinates are millimeters** (STL has no units). XY is uniformly fit to a 4–7 mm footprint; Z independently fits a 0.6–5 mm grip height. Set Z rotation ±180°, X ±1.5 mm and Y ±2 mm, or reset/center. This changes geometry, not a preview-only transform.

Imports must be one closed, consistently outward-wound, positive-volume, non-self-intersecting **convex solid with a broad flat base and no overhang footprint**. Bottom contact must cover at least 25% of the source XY bounding rectangle; scaled minimum XY span must be ≥1.2 mm. Concavities, hollow/disconnected models, open/nonmanifold input, inward or inconsistent faces, unsupported thin/slender geometry and truncated files get actionable errors. They are **never replaced with a convex hull or silently repaired**. Reorient/simplify in a modeler and reattach when unsupported.

The real mesh is boolean-unioned 0.15 mm into the isolated palm landing. Image/STL features must stay within a 6.5 mm radial safe zone; the final integrated palm must be a single connected solid. No import may touch the slot driver or follower interface. Replace/remove/reset are provided. Imports are real core personalization workflows for the hand-held palm body, not unchanged mesh reexports.

## Studio architecture

The Keycap Studio reference was inspected read-only: compact left panel, collapsible sections, paired slider/numeric controls, raised selected keys, local rounded fonts, lavender-grey desk, white panels, coral accents, saved dark theme, right-hand gradient 3D stage and preview-first phone layout. This app reuses the prior daily studio's local import/editor infrastructure, not the reference Git history or dependency tree; mechanism geometry, poses and validation are new.

Three real presets have generated 3D thumbnails; bounded variations, ergonomic palm silhouettes, texture, text/icons, undo/redo, local named designs (six) and portable JSON save/open are implemented. JSON includes bounded normalized image data or indexed mesh data, not nonexistent paths. Missing image payloads require reattachment; restored meshes are reparsed/validated. JSON limit: 2 MB. Heavy STL parsing, Manifold WASM boolean work and final-solid checks run in a bundled worker with debouncing and request/key stale-result guards. Pending, invalid, failed or stale states disable all STL/ZIP exports; the last-good preview is explicitly marked, never silently exported. Views: print plate, guided turn, exploded, isolated slot driver and isolated thumb follower, plus see-through palm, orbit/zoom/fit. Touch orbit and pinch are supported.

Dependencies: React/ReactDOM, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), gh-pages, Fontsource Fredoka/Rubik (SIL OFL). All runtime assets, fonts, WASM and synthetic samples are bundled locally. No CDNs, API keys, cloud reconstruction, AR or mislabeled 3MF.

## Validation

`npm test` independently reads exported binary STL bytes: exact length/count, finite coordinates, nondegenerate triangles, unit normals matching winding, 1e-5 mm welded edges with exactly two opposite-oriented incident faces, per-component positive volume, Euler characteristic and expected millimeter dimensions. Every separate part and float32-translated print plate is checked. Built-in corner combinations and imported-image/STL results use the same checks.

Mechanism checks are separate: radial/axial clearances, post and pin engagement, wall/floor/keep-out bounds, independent Manifold intersections at sampled turns, bearing-shoulder support, both end-stop obstructions and clear vertical lift at several heights. Comparison booleans verify imports only change the isolated palm well. Numerical clearance tests are not physical friction or print tests.

Browser scripts (`browser-test.cjs`, `feature-test.cjs`, `interaction-test.cjs`) exercise real PNG/JPEG/ASCII/binary file selection, geometry-changing conversion and transforms, downloaded-byte fingerprint matching, exact snapshot regeneration, per-part/ZIP downloads, invalid inputs/recovery, saved assets/history, presets, text/icons/SVG, views/theme, worker failure, 320/390 px layout and touch gestures. Reports and screenshots document the current run; see `VALIDATION.md`.
