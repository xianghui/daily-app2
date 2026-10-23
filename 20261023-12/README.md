# Square Bloom

A local React + Vite / Three.js / Manifold studio for a **four-square compliant fidget cell**. Alternating square orientations connect through four narrow corner bridges. Gently compress opposite outer pads in-plane and release: the pads counter-rotate as the center opening changes. This is not the previous crossed-leaf pivot or inward-waisted reentrant cell. The attached palm landing gives a rigid protected location for personal image relief or an imported STL grip.

## Use and export

Choose Open Petals, Balanced Bloom, or Compact Bud; each thumbnail is generated from its real geometry. Edit Shape, Mechanism and Surface controls. Variations stays inside the supported ranges. Undo/redo records modeling states after a short debounce. Preview has orbit, zoom, reset/fit, 10 mm ground grid, selection, and exact final X/Y/Z millimeter dimensions. On phones, controls collapse below the generous preview and export remains fixed at the bottom.

Download STL writes geometry-only binary STL from the **same final worker result** used for preview. Preview clay colors do not enter STL. One connected, closed solid is generated, so no assembly parts, ZIP, hardware or running-fit controls are appropriate. Object preview and print layout show the same undeformed single part with its broad planar bottom down; neither is a deformation or force simulation. The part selector also exports the sole part at its native origin. Invalid/pending edits or imports disable export instead of downloading stale geometry.

## Parameters

All lengths are **millimeters**; only rotation is degrees.

| Parameter | Range |
|---|---|
| Square side | 12–18 mm |
| Free bridge / opposed pad tip gap | 4–7 mm |
| Bridge bending width | 0.9–1.4 mm |
| Alternating initial square rotation | 12–30° |
| Plate / bridge height | 2.4–3.6 mm |
| Palm dimple subtraction depth | 0–0.6 mm |

Each bridge penetrates 1.5 mm into each square for robust CSG root attachment. The rigid palm arm joins only the exterior upper-left pad. Four bridges remain clear of the central opening. This geometry is generated using Manifold Boolean unions/subtractions; visual overlapping shells are not exported as a fake union. User imports may only occupy the palm well, with a 3.2 mm underlying floor and a 6.5 mm radius safe zone.

## Image import: actual 2D-to-relief geometry

Use the local file picker or desktop drag/drop for **PNG and JPEG**. Samples `mark.png` and `waves.jpg` are original synthetic fixtures, not personal uploads. Files are at most 2 MB, 12 megapixels, and 6,000 pixels per side. File signatures and dimensions are checked before decoding; bad, oversized and undecodable files report recoverable errors.

Images are normalized to at most 500 pixels on the longest side for a bounded portable payload, composited on white, fit/filled with crop offsets, and sampled into a **20 × 20** luminance grid (`0.2126 R + 0.7152 G + 0.0722 B`). Threshold mode raises dark samples by the selected depth; grayscale mode uses `depth × (1 − luminance/255)`. A triangulated height field with sidewalls and a continuous **0.4 mm backing** becomes a closed solid. The bottom penetrates the palm floor by 0.15 mm before a real Boolean union. It is 2D-to-relief / raised silhouette conversion, **not automatic reconstruction of a complete 3D object from one photo**. Source image and conversion grid are displayed alongside the actual final 3D model.

Edit threshold (1–254), relief depth (0.4–3 mm), contain/cover fit, crop shifts (±25%), footprint (4–7 mm), Z rotation (±180°) and XY placement (±1.5 / ±2 mm). Empty relief and any features leaving the protected well disable export. Reset image controls, reset transforms, replace/remove import, or Reset all to recover.

## STL import: bounded, explicit integration

Both complete **ASCII and binary STL** are parsed locally. Samples `wedge-ascii.stl` and `gem-binary.stl` are original synthetic flat-bottom solids. Limits: 2 MB, 1,500 triangles, each axis 0.2–250 mm, finite coordinates within ±10,000 mm. Source dimensions and a separate source mesh preview appear before integration. **STL contains no unit metadata: explicitly confirm millimeter coordinates.**

Supported input is deliberately limited to one convex outward-wound closed solid with a broad flat Z-bottom (at least 25% of its XY bounding footprint), with all projected vertices within that footprint. Open/nonmanifold, self-intersecting, inward/inconsistently wound, degenerate, disconnected, concave, overhanging and unsupported meshes are rejected. There is **no automatic repair** claim. Orient/rescale/decimate or repair in an external mesh modeler and re-export a supported closed solid. Arbitrary sculptures and scan meshes are not accepted as printable.

The verified mesh is centered from its source bounds, proportionally scaled in XY to the 4–7 mm footprint, independently scaled in Z to 0.6–5 mm height, rotated around Z, and placed in the well. Fitted XY spans below 1.2 mm are rejected. Its bottom is sunk 0.15 mm into the solid floor and fused with a real Boolean union. Final integration must yield exactly one manifold connected solid. Placement cannot invade the flexures; unsafe transforms disable export. Changing imported shape, scale, rotation and placement changes exported geometry, rather than merely redisplaying/re-exporting the original file.

## Local settings and privacy

All modeling, parsing, image conversion, validation, preview and export run in the browser. No API key, server conversion, CDN runtime import, or paid service is used. Dependencies and the WASM engine are bundled locally. Expensive parsing/generation runs in a module worker. Files never upload; the only sample fetches are same-site bundled synthetic assets. Source files are not written into the repository.

Save JSON explicitly embeds the bounded normalized PNG or verified mesh payload plus settings. Open validates the app/version, ranges, payload sizes and mesh again; it refuses missing image payloads and asks for original-file reattachment instead of pretending restoration. Do not publish a saved design if you do not want to share its included local source. JSON files are limited to 2 MB. Undo/redo and save/open preserve imported geometry.

## Printing and mechanical limits

Print bottom-down as one bed-flat solid, **support-free and hardware-free**; no assembly or release joints. TPU 95A is the starting material, not a guaranteed setting. Try a 0.4 mm nozzle and 0.16 mm layer height. Verify at least two continuous extrusion paths through each 0.9–1.4 mm bridge. Use Open Petals as the full-size material calibration; thin bridges in rigid PLA may fail or feel very stiff.

Begin below **0.3 mm total compression**. Bend only in the XY plane; do not pull the cell apart, fold it vertically, or force the opening shut. Stop at whitening, cracks, permanent set or delamination. There is no universal stiffness or tolerance, no latch or captive retention to calibrate, and no force/print-time estimate. Geometric ±1° corner-envelope checks are conservative clearance checks, **not** finite-element analysis or permission for large repeated motion. No hard travel stop is provided. Large rotation behavior, actual auxetic response, force, fatigue and elastic return remain unverified physically. **No physical print or force testing has been performed.**

## Development and validation

```
npm install
npm run dev
npm run test
npm run predeploy
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Browser suites use Playwright Chromium with the development server on port 5270 (or TEST_BASE). Dependencies: React, Vite, Three.js, manifold-3d, gh-pages; Playwright is test-only. Per-app deployment scripts exist, but the public monorepo is published with **root** `npm run predeploy` / `npm run deploy`.

`validate.mjs` independently parses binary exports and verifies nonempty finite nondegenerate triangles, millimeter bounding dimensions, normalized normals, consistent outward winding, positive component volume, welded edge incidence exactly two, and connectivity. It exercises defaults, min/max, all 64 parameter corners, three presets, deterministic variations, and image/STL-derived outputs under representative settings. Runtime modeling also independently validates final mesh winding/edges/volume after robust solid operations and refuses invalid output. Mechanical tests inspect four bridge material sections, central aperture air, minimum bridge width, conservative pad-gap envelopes and separation of imports from mechanism.

Browser tests import PNG, JPEG, ASCII and binary STL through actual pickers; download and parse the actual STL; compare default, threshold/depth, image pixels, STL shape/scale/placement, preview fingerprints and dimensions; test malformed/truncated/open/nonmanifold/oversized/concave input, empty silhouettes, transforms, replacement/removal/reset, presets, variations, undo/redo, portable save/open and drag/drop. Mobile tests cover 320/390 px widths, real touch orbit/pinch, import/download, all tabs and collapsed controls. Validation artifacts report observations, not physical printability proof. Root gallery scripts and preservation are checked before combined deployment.
