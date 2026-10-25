# Triad Drift

A local React + Vite maker studio for a **Reuleaux constant-width puck in a square guide**. Unlike a circular spinner, the three-arc puck shifts its center as it turns between four walls. Turn lightly, reverse and trace its small orbit. The puck lifts out intentionally: it is **not captive**.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Production base: `/daily-app2/20261026-5/`. Per-app deploy scripts are present; publish the combined site through the parent monorepo. Binary STL uses the exact current worker result shared with the preview. Individual-part STL buttons, a separated plate STL and Everything ZIP with assembly notes are provided. STL has no color or unit metadata; all dimensions are assumed millimeters. Preview colors are not export colors.

## Mechanism and bounds

| Parameter | Range (mm) |
| --- | --- |
| Palm diameter | 22–28 |
| Puck constant width | 20–30 |
| Guide floor | 2.5–4 |
| Guide clearance, per side | 0.25–0.60 |
| Puck thickness | 4–7 |
| Palm dimple depth | 0–0.6 |

The puck is the boolean intersection of three equal cylinders whose centers form an equilateral triangle with side equal to the requested constant width. Circular arcs use 192 segments: tested width departure is below 0.02 mm. The square opening is constant width plus twice clearance, with 3.2 mm walls. Walls rise to 1 mm below the seated puck top for thumb access. Floor supports the puck directly; no moving bodies are fused.

The centered-bounds preview rotates the actual puck mesh and translates its rotated bounding-box midpoint to the square center. This creates one collision-free hand-guided path, **not a unique constrained trajectory**. Real movement includes clearance-dependent play; no gear indexing, spring return or snap is claimed. The same real solids are used for print-plate, guided, exploded and isolated views. Display poses never replace printable orientation.

**Print both parts bed-flat exactly as exported, without supports or hardware.** Lower the puck into the open guide, flat side down. Use PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 15–25% infill. Deburr walls, curved edges and elephant foot; do not force a tight fit. Start with **Pocket Orbit** as a reduced-material calibration pair (0.50 mm per-side clearance). If binding, increase by 0.10 mm and check slicer compensation. Fits depend on printer/material, not universal tolerance. Use over a table and keep small parts away from young children. **No physical print, force, friction, fatigue, wear or child-safety testing performed.**

## Both import workflows

All files are processed **locally in the browser**. Nothing is uploaded or sent to an API. Only synthetic fixtures are bundled under `public/samples/` (project-generated, CC0). Personal input files must not be added to this repository.

### Image → real solid relief

PNG/JPEG and a restricted simple SVG subset are accepted. SVG is locally rasterized; scripts, external references, text, effects and unsupported elements are rejected. Original image headers are checked before decoding: maximum 2 MB, 12 MP, 6,000 px per side; normalized to at most 500 px per side. SVG is bounded to 2,000 elements and locally rendered at 256 px.

The fitted/cropped image is composited onto the chosen light/dark background, with crop pan ±25%, and sampled at **20 × 20**. Luminance (`.2126 R + .7152 G + .0722 B`) drives either thresholded silhouette relief (threshold 1–254) or grayscale height relief. A triangulated height field on a continuous 0.4 mm backing is boolean-unioned into a recessed palm landing. Raised depth is 0.4–3 mm; engraving depth is limited to 0.4–0.6 mm to protect the floor. Bright holes remain unraised/unengraved above the solid backing; this is **sampled relief, not outline tracing or a full 3D reconstruction from a photo**. The checkerboard shows the actual sampled cutout. Fit/crop, threshold, background, depth, style, footprint, rotation and placement alter exported triangles. Empty conversion is rejected. Text and six searchable bundled SVG icons use this same geometry path.

### STL → integrated grip

ASCII and binary STL, up to 2 MB / 1,500 triangles; every source axis must be 0.2–250 mm. Select Z up, Y up or inverted Z before attachment. Source dimensions, format, triangle count and a separate source 3D preview are displayed. **Explicitly confirm the source coordinates are millimeters** (STL has no units). XY is uniformly fit to a 4–7 mm footprint; Z independently fits a 0.6–5 mm grip height. Set Z rotation ±180°, X ±1.5 mm and Y ±2 mm, or reset/center. This changes geometry, not a preview-only transform.

Imports must be one closed, consistently outward-wound, positive-volume, non-self-intersecting **convex solid with a broad flat base and no overhang footprint**. Bottom contact must cover at least 25% of the source XY bounding rectangle; scaled minimum XY span must be ≥1.2 mm. Concavities, hollow/disconnected models, open/nonmanifold input, inward or inconsistent faces, unsupported thin/slender geometry and truncated files get actionable errors. They are **never replaced with a convex hull or silently repaired**. Reorient/simplify in a modeler and reattach when unsupported.

The real mesh is boolean-unioned 0.15 mm into the isolated palm landing. Image/STL features must stay within a 6.5 mm radial safe zone; the final integrated palm must be a single connected solid. No import may touch the square guide or puck interface. Replace/remove/reset are provided. Imports are real core personalization workflows for the hand-held palm body, not unchanged mesh reexports.

## Studio architecture

The Keycap Studio reference was inspected read-only: compact left panel, collapsible sections, paired slider/numeric controls, tactile selected keys, local rounded fonts, lavender-grey desk, white panels, coral accents, saved dark theme, right-hand gradient stage and preview-first phone layout. The prior daily studio supplies the local import/editor foundation; this app has new mechanism geometry, poses and checks. Neither the reference Git history nor its dependency tree was copied.

Three presets have generated 3D thumbnails. Bounded variations, three palm silhouettes, texture, text/six searchable icons, undo/redo, six local named designs and portable JSON are implemented. JSON includes bounded normalized image data or indexed mesh data; missing image payloads request reattachment. Restored meshes are reparsed. JSON limit: 2 MB. Heavy parsing, Manifold WASM boolean work and final-solid validation run in a bundled worker with debounce and request/key guards. Pending, invalid, failed or stale states disable STL/ZIP exports. Last-good preview is explicitly marked and cannot be silently exported. Views: print plate, guided turn, exploded, isolated square guide and isolated Reuleaux puck, see-through palm, orbit/zoom/fit. Touch orbit and pinch are supported.

Dependencies: React/ReactDOM, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), gh-pages, Fontsource Fredoka/Rubik (SIL OFL); Playwright for browser checks. Runtime assets, fonts, WASM and synthetic fixtures are local. No CDN, API keys, cloud reconstruction or mislabeled 3MF.

## Validation

`npm test` independently parses exported STL bytes: exact length/count, finite coordinates, nondegenerate triangles, unit normals matching winding, welded edges at 1e-5 mm with two opposite-oriented incident faces, positive volume per connected component, Euler characteristic and millimeter bounds. Every part and float32-translated print plate is checked. Cases cover defaults, all presets, 64 parameter corners, and image/STL-derived outputs.

Separate mechanism checks sample rotated widths and side gaps, guide floor/walls and personalization isolation. Independent Manifold intersections check a full-turn centered path, floor support, clear vertical lift, deliberate off-path wall obstruction and import changes confined to the palm well. These geometric checks do not prove physical friction, fit or durability.

Browser scripts exercise real PNG/JPEG/ASCII/binary file selection, threshold/depth/pixel/transform changes in downloaded geometry, exact preview/download fingerprints and snapshot regeneration, malformed/open/nonmanifold/unsupported input recovery, presets, text/icons/SVG holes, per-part/ZIP downloads, saved assets/history, views/theme, worker failure, 320/390 px layouts and touch orbit/pinch. Production output is tested under its real base prefix. Reports and screenshots are in this folder; see `VALIDATION.md` for current results.
