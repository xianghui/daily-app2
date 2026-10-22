# Dusk Precession

A local React/Vite parametric STL studio for a **stemless rim-rolling wobble disc**. Tilt it, give it a gentle tangential spin, release, and watch its axis precess before it settles. This is not a top with a stem, jointed mechanism, bearing spinner, or physics simulation. Surface friction, balance and layer quality affect motion; no physical printing or tactile/duration testing has been performed.

The ivory/clay, model-first studio uses Vaseverse only as a visual/UX reference. No reference branding, assets, text or source code is included. Three genuinely dimensionally different presets have live generated model thumbnails. All controls generate real geometry; surface colours affect preview only. STL does not store those colours.

## Run and build

```
npm install
npm run dev
npm test
npm run predeploy
```

Individual `deploy` uses `gh-pages -d dist` as required, but the public combined gallery is published only by the parent repository's root predeploy/deploy flow. Vite base is `/daily-app2/20261023-2/`.

Dependencies: React, React DOM, Three.js (OrbitControls), manifold-3d (local WASM CSG), Vite, React Vite plugin, gh-pages. Playwright is a development/test dependency. All generation and export dependencies are bundled locally, without CDN/API access. Modeling and STL validation run in a worker. Images are downsampled locally before bounded meshing. This one-solid design has no multi-part ZIP or assembly.

## Dimensions and parameters

Every modeling dimension is **millimeters**. Numeric boxes and sliders are paired. Parameter validation disables stale or invalid exports.

| Parameter | Range | Purpose |
| --- | --- | --- |
| Disc diameter | 44–68 mm | Circular rim and palm scale |
| Disc thickness | 6–10 mm | Mass/profile height |
| Center well radius | 8–12 mm | Recessed source area |
| Center recess depth | 1–2 mm | Floor remains ≥4 mm |
| Lower rim bevel | 0.8–1.6 mm | 45-degree printable lower edge |
| Tactile groove depth | 0–0.6 mm | Engraved concentric top shoulder grooves |

192 angular segments bound radial faceting error to <0.005 mm. The rolling belt is never textured or modified by imports. Import vertices must remain inside a 6.5 mm radial center safe zone. At least 15.5 mm separates that zone from the outer rim. A solid 0.4 mm image backing overlaps the center floor by 0.15 mm and is genuinely boolean-unioned, not left as intersecting shells. Default source is a fused low oval grip. The exact final mesh drives both preview and binary STL, with the print layout translating XY only.

## Image workflow: PNG and JPEG

Use the file picker (desktop/phone), drop a file onto Import, or try/download `mark.png` / `waves.jpg`. Source and exact 20×20 conversion grid appear beside each other. Replace, remove, reset, fit/crop and X/Y crop shifts are real actions.

1. Validate content signature/header, file size, dimensions, and pixel count before decoding; normalize to at most 500 px per side locally.
2. Fit entire image or cover/crop into a white-backed 20×20 canvas; shift ±25% on either axis. Transparent areas composite onto white.
3. Convert pixels with luminance `0.2126R + 0.7152G + 0.0722B`.
4. Threshold: pixel darkness below a 1–254 threshold receives selected raised depth; other pixels have zero added height. Or grayscale: `depth × (1 − luminance/255)`.
5. Piecewise triangular interpolation forms a continuous height field over a 0.4 mm closed backing, with sidewalls and a bottom; CSG fuses it to the well floor. This is **2D-to-relief/raised-silhouette conversion, not automatic full-3D reconstruction from a photo**. The bounded grid can soften fine lettering; preview the actual conversion.

Footprint 4–7 mm; relief depth 0.4–3 mm; rotate −180° to 180°; X ±1.5 mm and Y ±2 mm placement. Empty white silhouettes/relief are rejected. Placement can be rejected even within slider ranges if rotated corners exceed the radial safe zone; center/reset or reduce the footprint.

## STL workflow: ASCII and binary

Try the synthetic `wedge-ascii.stl` and `gem-binary.stl` fixtures, or choose your own mesh. Source preview shows original dimensions, triangle count and format. **Explicitly confirm millimeter scale: STL has no unit metadata.** XY is proportionally scaled to a 4–7 mm footprint; Z is independently fitted to 0.6–5 mm height. Center, rotate about Z, place, replace, remove and reset transforms are supported. X/Y tilt is intentionally unsupported, because it would invalidate the flat-bottom integration contract.

Accepted input: **one convex, connected, outward-wound, watertight solid with broad flat Z-down base and no overhanging XY projection**. This restriction is explicit, not an automatic repair promise. All projected vertices must lie within the bottom convex hull; the hull must occupy ≥25% of the XY bounding rectangle. Final fitted X and Y spans each must be ≥1.2 mm. The imported solid is embedded 0.15 mm into the well floor and boolean-unioned. Final geometry must remain one connected solid; unsupported geometry is rejected rather than exported as printable.

Limits: 16 bytes–2 MB per selected file (STL parser minimum 40 bytes); images ≤12 MP and 6,000 px per side; STL ≤1,500 triangles; each original axis 0.2–250 mm; coordinates finite and absolute value ≤10,000 mm. Invalid content, truncation, wrong extensions, excessive dimensions, degenerate faces, inconsistent orientation, open/nonmanifold edges, multiple shells, negative volume, touching/self-intersecting triangles, concavity and inadequate base contact are rejected with recovery guidance. No repair is claimed or performed.

## Privacy, history and files

All personal files stay in browser memory; no uploads, network modeling API, server, account or keys. Only synthetic bundled fixtures are in the repository. Sample images/meshes are original procedural test fixtures, shared here without personal content. Save JSON explicitly embeds a bounded normalized PNG (for image re-editing), converted pixel source or validated STL vertex/index payload. Open JSON revalidates the saved design, preflights embedded image dimensions before decoding, and reparses saved STL topology. An image design with a missing payload explicitly requires reattaching the original file. The original personal upload is not silently saved to the repository or localStorage. Undo/redo retains a bounded 35-state in-memory history. No missing file is pretended restored.

## Print and use

Export one binary STL, complete disc or its identical named single-part selection. Dimensions and filenames use mm. This is one solid, so ZIP, retention caps, joint fits, moving clearances, hardware and assembly are not relevant. No calibration coupon or universal tolerance is claimed.

Print flat underside down in PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, four walls, 30–50% infill as a starting point. Accepted sources have a broad bed-facing base and no unsupported projected overhang. No support is needed for this designed profile. Remove seam and elephant-foot evenly around the lower rim; uneven finishing changes balance. Try on a smooth hard level tray at 15–60° tilt. Spin gently and keep away from table edges. Center relief or offset mesh can cause earlier settling/imbalance. Start centered and shallow. This FDM object is lighter and less precise than a metal Euler disc; no motion duration or spin-reversal behavior is guaranteed.

## Verification and limits

`npm test` checks 78 default/preset/boundary/variation combinations plus 24 image/STL-derived combinations. It reparses actual binary output, validates finite/nondegenerate triangles, normalized outward normals, positive per-component volume, welded edge incidence exactly two, opposite directed shared edges, one connected component and exact millimeter bounds. It checks floor thickness, radial import isolation, protected circular belt and contact on the exact final mesh at 60 representative phase/tilt poses. Input self-intersection/convexity checks are separate from the robust Manifold solid operations used for final construction.

`node browser-test.cjs`, `node extra-browser.cjs` and `node mobile-sheet.cjs` exercise real PNG/JPEG and ASCII/binary file imports, actual STL downloads, geometry fingerprints vs source/transform/threshold changes, export/preview equality, malformed input recovery, all preset and randomized outputs, undo/redo, portable save/open for all import formats, drag/drop, colour neutrality, phone touch orbit/pinch, mobile file imports and 320/390 px controls and export reachability. Use the local Vite server on port 5270; set TEST_BASE for browser/extra/mobile to test built deployment. `gallery-test.cjs` verifies inline scripts, preserved entries and live gallery rendering. Reports are JSON, and UI screenshots are included.

Digital solid/contact checks **do not validate dynamics, surface friction, fatigue, print reliability or measured tactile performance**. No physical print has been tested. The static model view does not fabricate a physics animation or slicer time estimate.
