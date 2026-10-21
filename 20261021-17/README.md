# Quiet Shift — Four-leaf fidget studio

A React + Vite, entirely browser-local parametric STL generator. Hold the frame and nudge the rigid thumb pad sideways: four parallel leaf flexures supply a short elastic-return stroke. The opposing upper/lower pairs constrain rotation. Frame sides limit travel. This is a compliant translating shuttle, not a track slider, torsion rocker or concertina spring.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
```

`npm run predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist` as required for individual apps. Public collection deployment is performed **from the repository root**, not this script. Vite base: `/daily-app2/20261021-17/`. The complete or named single part downloads as a binary STL with useful source, width and leaf-thickness filename. All physical lengths are **millimeters**. Rotation is degrees. Preview, dimensions, fingerprint and export consume the same final CSG mesh; the 3D view shows undeformed rest/print geometry, not a simulated deformed state.

## Personalization: actual geometry, not a picture overlay

Use a phone/desktop file picker, supported drag/drop, or any of four bundled synthetic examples. Replace/remove imports, reset image controls, center/reset transforms and reset everything are available. Source and final model previews are separate.

### PNG / JPEG → raised grip

Content signatures and header dimensions are checked **before decoding**. Files are 16 bytes–2 MB; image limits are 12 megapixels and 6,000 pixels per side. Alpha composites onto white. Fit-entire-image or fill/crop, with X/Y crop shifts ±25%, is rasterized to a bounded **20 × 20** grid. Luminance is `round(.2126R + .7152G + .0722B)`.

* Threshold 1–254: dark samples below the threshold rise by the chosen depth; remaining samples stay at backing height.
* Grayscale relief: height equals depth × (1 − luminance/255).
* Relief depth: 0.4–3 mm. The continuous backing is 0.4 mm thick. Adjacent grid points form two top triangles per cell, closed by perimeter sides and a bottom fan. This is a piecewise-linear height field, not disconnected pixels.
* Footprint 4–7 mm; rotation ±180°; X placement ±1.5 mm and Y ±2 mm. The backing is sunk 0.15 mm into the 3 mm rigid pad and **boolean-unioned** with it. Empty silhouettes are rejected.

This is **2D-to-relief conversion**, not automatic reconstruction of a full 3D object from one photo. The source image and exact conversion grid are shown. A protected XY safe zone can reject extreme placement/rotation, particularly with minimum pad width.

### ASCII / binary STL → fused miniature thumb grip

STL has **no units metadata**. Original dimensions are shown, and explicit millimeter confirmation gates integration. Accepted files are 40 bytes–2 MB, ≤1,500 triangles, with every axis 0.2–250 mm. Finite coordinates, nondegenerate faces, welded edge incidence, opposite edge directions, connectivity, positive volume, triangle intersections and dimensions are checked. Source previews use the original mesh.

The integration contract intentionally accepts only **one convex, outward-wound, closed flat-bottom solid**. Its flat bottom must cover ≥25% of the XY bounding rectangle, and all XY projections must lie inside that bottom polygon. Open/nonmanifold meshes, concavity, hollow shells, unsupported overhangs, inward winding and multiple bodies are rejected with guidance to re-export from a modeler. No arbitrary repair is performed or claimed.

XY scales proportionally to a 4–7 mm footprint, Z independently to 0.6–5 mm grip height. Minimum fitted XY span is 1.2 mm. Rotate around Z ±180°, center and place X ±1.5 / Y ±2 mm. Z is fitted with its bottom 0.15 mm inside the pad. No X/Y tilt is offered because it would invalidate the flat-base contract. All transformed vertices must remain inside `|X| ≤ padWidth/2 − 4`, `|Y| ≤ 8` mm. A robust union must result in exactly one solid, or export is blocked. Imported geometry never touches the flexible leaves or creates a moving-joint union.

## Parameters and print envelope

| Parameter | Range / default (mm) |
|---|---|
| Rigid pad width | 18–26 / 22 |
| Pad Y length / body Z | 22 / 3, fixed |
| Leaf free length | 22–30 / 26 |
| Leaf in-plane thickness | 0.8–1.2 / 1 |
| Side stop gap, each direction | 0.6–1.2 / 0.8 |
| Frame corner radius | 2–4 / 4 |
| Outer grip-groove depth | 0–0.5 / 0.3 |

Outer X = pad width + 2 × gap + 8; outer Y = 22 + 2 × leaf length + 8. Default X/Y is 31.6 × 82 mm. Z depends on the grip, up to 7.85 mm for an STL grip. Live final X/Y/Z dimensions are displayed. Every rigid root overlaps its adjoining solid by 0.25 mm. Minimum remaining frame wall at a texture groove is 3.5 mm. Balanced PETG, Soft return and Firm return presets are included; numeric inputs and sliders share validation.

## Mechanics and printing

Print flat at Z=0, decoration upward, without supports. All leaves start on the bed. PETG is recommended for gentle repeated flex; PLA is a geometry trial option but may fatigue sooner. Start at 0.16–0.2 mm layers, 0.4 mm nozzle, 3–4 walls and 30% infill. Inspect the slicer: all four 0.8–1.2 mm leaves must be solid continuous paths. Cool before lifting via the frame. Remove brim/stringing without severing the leaves. There is no assembly, release joint, bearing, magnet, screw or glue.

The built-in whole model is the **full-size calibration trial**. Begin there before decorating. Adjust the 0.6–1.2 mm gap for elephant foot/stringing; no printer tolerance is universal. Softer: longer/thinner leaves. Firmer: shorter/thicker leaves. Touch the stops gently, do not force them or bend the pad out of plane. Opposed pairs constrain vertical drift, so some second-order axial extension accompanies leaf bending. The digital strain estimates are not fatigue predictions. Stop using at whitening, cracks or permanent set. Not intended for young children; broken flexures can produce small parts.

## Privacy, dependencies and responsiveness

React/React DOM, Three.js + OrbitControls, Manifold-3D WASM; Vite React plugin; Playwright for tests; gh-pages for deployment. All runtime libraries and WASM are bundled locally, no CDN/API/key/paid service. A module worker runs mesh parsing/preflight and solid generation. File size, image resolution and triangle limits bound work; editing is debounced. Invalid or stale generation disables download; recover through replacement/removal/reset. Personal files remain transient browser memory, are not uploaded, persisted or committed. Synthetic sample attribution and reproduction instructions are in `public/samples/README.md`.

## Validation (digital only)

`npm test` covers defaults, minima/maxima and all 64 range corners, plus threshold/grayscale and ASCII/binary-derived outputs. It reparses exported binary STLs: finite coordinates, nonzero-area faces, finite normalized outward normals, positive component volume, exact mm bounds, consistent edge winding and exactly two welded incident faces per edge at 1e-5 mm. Manifold CSG forms the final union; a single connected solid is required. Supported inputs are convex or single-valued height fields, reducing unsupported geometry risks.

Mechanics checks sample 49 positions between both stops, calculate leaf-to-frame sweep spacing, verify pad side-stop bounds, leaf root dimensions and opposing-leaf separation, and bound a fixed-guided small-deflection strain proxy `3 × thickness × stroke / length²` plus the extension proxy `stroke² / (2 × length²)`. The sum stays below 0.012 over supported ranges. These conservative geometric/analytical checks **are not FEA, stress-concentration analysis or proof of durability**. Every intended part is the same single connected solid; there are no separate moving bodies to collide or lose retention. Safe-zone geometry prevents imports obstructing flexures/stops.

`node browser-test.cjs` (dev port 5197) exercises actual file-picker PNG/JPEG/ASCII/binary imports, real STL downloads and mesh checks, pixel/threshold/depth/crop/scale/shape/placement changes against baseline, replace/remove/reset, unit confirmation, invalid/truncated/open/nonmanifold/concave/oversized input, impossible dimensions, unsafe transforms, phone downloads, 320/390px layouts, touch orbit and pinch zoom. `TEST_BASE` and `TEST_REPORT` select production preview and report path. Browser report and screenshots, numerical mesh/mechanics report, and gallery report are retained. `gallery-test.cjs` checks inline scripts, entry uniqueness/preservation, runtime rendering and search against its recorded baseline.

**No physical print, force, fatigue, retention-break or durability test has been performed.** Validate a full-size material trial and inspect the sliced toolpaths before routine use.
