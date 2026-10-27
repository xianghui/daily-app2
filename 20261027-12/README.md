# Drumfold Brake

A browser-based parametric STL maker for a hardware-free **internal expanding-shoe drum brake fidget**. Turn a rigid carrier inside a stationary drum. Align two independently hinged TPU shoes radially to add friction against the inner drum wall; fold them inward toward their stop pins to release. This differs from the gallery's earlier variable-inertia folding weights and external pinch calipers: the new fixed drum and internal soft shoe contact are core printable geometry, not styling.

**Print the two shoes in TPU 95A, never rigid filament.** The radial contact deliberately compresses each pad by 0.15 mm. This is manual engagement, not an automatic centrifugal governor. No speed-dependent engagement, spring return, measured friction or force is claimed.

## Studio

React + Vite, Three.js touch orbit/zoom, and Manifold WASM CSG in a debounced Web Worker. All dependencies and rounded Fredoka/Rubik fonts are bundled locally. No APIs, keys, uploads or CDN imports. The read-only Keycap Studio reference informed the 374 px left panel, collapsible sections, paired mm inputs, raised tactile controls, checkerboard conversion preview, imported-source editing, light/dark persistence and preview-first phone layout. Shared local studio infrastructure comes from the existing Daily Object Lab; mechanism geometry is new.

Three real mesh-thumbnail presets (Soft Start, Drumfold Brake, Wide Orbit), three palm silhouettes, bounded random variations, undo/redo, six local named slots, portable JSON with bounded assets, searchable original SVG icons, text relief, isolated/assembled/exploded/print views and a see-through palm. No switch sockets apply to this mechanism.

## Run and export

Node 22.12+ recommended.

```
npm ci
npm run dev
npm run predeploy
npm test
```

Base path: `/daily-app2/20261027-12/`. Per-app `deploy` uses gh-pages for compatibility; public monorepo publication uses the root deploy workflow. `node serve-production.cjs` serves built production output on port 5382.

Download binary STL for each part or the separated print plate. Everything ZIP contains four real STLs plus assembly notes. STL has no unit or colour metadata: import into your slicer as **millimeters at 100%**. Preview colours do not change export. Preview and export share the exact validated mesh; the UI fingerprint is checked against downloaded bytes. Invalid or pending edits block exports even if a last-good preview remains visible.

## Image and SVG workflow

Pick/drop PNG, JPEG or simple SVG, or try the included synthetic sample files. Limits: 2 MB, 12 MP, 6,000 px per side. Actual image headers are checked before decoding; sources normalize locally to at most 500 px per side for portable saves. SVG accepts at most 2,000 simple vector elements, with no scripts, external references, effects or unflattened text, and is rasterized locally at 256 px. No imported personal files are added to this repository.

Conversion uses a **20 × 20 sampled triangular height field** on a continuous backing. Fit/cover, ±25% crop shifts and light/dark background inversion affect sampled luminance. Thresholded relief maps dark samples to the selected depth; grayscale relief maps inverse luminance continuously to height. Text and icons go through this same pipeline. White holes remain unraised/unengraved; this is not exact contour tracing or a through-cut. The checkerboard shows removed foreground; the source image and actual final mesh are shown separately. This is **2D-to-relief, not single-photo 3D reconstruction**.

Threshold 1–254, raised depth 0.4–3 mm, engraving 0.4–0.6 mm. Backing is embedded at the 4.2 mm palm-well floor. Engraving preserves at least 3.2 mm of solid floor. Scale to 4–7 mm footprint, rotate ±180°, place X ±1.5 mm/Y ±2 mm inside the 6.5 mm radial safe zone. Out-of-zone or empty relief is blocked. Replace/remove/reset controls restore built-in geometry.

## STL workflow and supported contract

Both ASCII and binary `.stl`, 40 bytes–2 MB, at most 1,500 triangles. Each source dimension 0.2–250 mm. Confirm source coordinates are millimeters because STL has no units. Select Z up, Y up (+90° X), or upside down before attaching; changing orientation requests reattachment. Source dimensions, triangle count, format and an interactive source preview are shown.

Weld tolerance is 0.00001 mm. Reject nonfinite coordinates, degenerate triangles, inconsistent winding, open/nonmanifold or disconnected meshes, nonpositive volume, self-intersection, concavities/cavities/branches, insufficient bottom contact and overhang beyond the flat bottom footprint. **Unsupported input is rejected, never replaced with a convex hull or silently repaired.** Reorient/rescale/simplify in your modeler and re-export one outward-wound convex flat-bottom solid. This deliberately bounded import contract makes integration predictable.

XY scale is proportional to the footprint; Z independently fits 0.6–5 mm height. Rotate and place the original solid in the protected stationary palm well; Manifold unions it with 0.15 mm embedding. Final connectedness, manifold topology and winding are checked. Imports cannot obstruct the rotating carrier or hinges. Missing or invalid saved payloads produce actionable reattachment errors, not pretend restoration.

## Dimensions and mechanism

All model dimensions are mm. Palm diameter 22–28 (round/hex/oval, oval Y multiplier 1.12); shoe lever reach 18–24; shoe thickness 4–6; running gap 0.3–0.5 **per side**; carrier radius 32–36; TPU pad radius 5–6; palm dimple depth 0–0.6. Fixed floor 5, carrier thickness 4, outer hinge radius 18, hinge pin radius 1.5 and central post radius 3. Minimum hinge wall 2 mm. Drum inner radius = 18 + lever reach + pad radius − 0.15 mm; outer wall 3 mm. Drum rises above the shoe faces and is united with the base.

Paired stop pins 9 mm outward/±8 mm tangentially from each hinge bound release travel. At radial alignment the ideal undeformed TPU pad extends 0.15 mm into the stationary drum. That is **intentional compliant interference**, not fused solids or a hidden collision. At full fold each shoe clears the drum. The UI starts released; 0 is engaged, ±1 released. Independent physical pivots are mirrored in the inspection preview. Motion controls alter pose, not printable geometry. The preview does not simulate TPU deformation or friction.

Assembled inspection adds gap + 0.01 mm above each seat; real parts rest on mating faces. Print layout contains four separated bed-flat solids. Export X/Y/Z is shown for the entire print plate or selected part.

## Print and assembly

Stationary drum/palm and carrier: PLA/PETG. Both hinged shoes: **TPU 95A required**. Four separate flat-bed parts; 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, 25–35% infill. Posts/bores upward. No supports or purchased hardware intended. Deburr elephant foot, posts and bores. Seat carrier on center post; fit TPU shoes on outer pins, pointing outward between the stop pins. Fold shoes inward before turning the hub for free rotation; gently align radially to add drag. If binding, stop rather than forcing.

All moving parts intentionally lift off. Use level over a table, not as a retained handheld spinner. Fold shoes to release, then remove both before lifting carrier. Soft Start is the full-size calibration trial. Test bores, release clearance and TPU drag before normal use. Running gaps 0.3–0.5 mm and fixed 0.15 mm pad compression are computational starting values, not universal fit guarantees. Contact force, wear and compliant durability have not been physically measured. No compliant member thinner than the minimum 2 mm hinge wall is generated. Small loose parts are not for children.

## Validation and limits

`validate.mjs` independently parses final float32 binary exports: byte count, finite vertices, nondegenerate triangles, normalized normals, opposite directed welded-edge incidence, positive volume per component, expected mm bounds and separated bed layout. Manifold intersections sample motion, seated/preview configurations, independent hinge folds, released clearance, radial engagement, physical stop overtravel and lift-off paths. Intended soft-pad contact must be bounded (<5 mm³ per shoe) and occur only at the inner drum above the carrier; all other intersections must be <0.00001 mm³. Built-in presets, representative extrema, imported meshes and image threshold/relief/engraving all use the same checks.

Browser suites exercise real PNG/JPEG/ASCII/binary file uploads and downloads, changed pixels/threshold/depth/transforms, reset, malformed files, oversized inputs, nonmanifold/unsupported geometry, worker errors/stale results, local/JSON round trips, ZIP contents, six icons, SVG hole probes, theme/focus/collapsible sections and 320/390 px touch orbit/pinch/export. Run against production worker/WASM paths, not only Vite dev. Reports beside scripts record actual results; VALIDATION.md summarizes completed runs.

**No physical prints were performed.** Computational geometry/kinematics do not validate friction, force, feel, durability or printer fit. Inspect and calibrate before use.

## Dependencies and fixtures

React/ReactDOM (MIT), Vite (MIT), Three.js (MIT), Manifold-3D (Apache-2.0), fflate (MIT), gh-pages (MIT), Playwright (Apache-2.0); Fredoka and Rubik (OFL). Original synthetic samples: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. No personal uploads bundled.
