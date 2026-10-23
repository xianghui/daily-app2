# Leaf Turn — local living-hinge fidget studio

Two thick thumb paddles joined by a broad, thin planar TPU membrane. Hold the stationary palm landing, lift the outer leaf gently and guide it back: a living-hinge bend-and-return ritual, not a pin hinge, snap latch, concertina or torsion bar. Both galleries were checked before choosing this mechanism. The exact undeformed printable geometry is previewed; no motion simulation is offered.

**No physical print, force, elastic return, fatigue or durability testing has been performed.** Digital geometry checks do not prove material behavior. Begin at 15° and limit gentle bending to 60° away from the flat underside; never crease or fold face-to-face.

## Run / build

```
npm install
npm run dev
npm run predeploy
npm test
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Vite base `/daily-app2/20261023-17/`. App scripts exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publishing uses the root monorepo deploy flow. Browser tests default to local Vite port 5270. Dependencies: locally bundled React, React DOM, Three.js, manifold-3d WASM, Vite/React plugin and gh-pages. Playwright is development-only. CSG and STL parsing execute in a bounded worker. No API keys, CDNs or paid services.

## Parameters and mechanism

All lengths are millimeters; angles are degrees.

| Parameter | Range | Default |
| --- | --- | --- |
| Paddle width | 22–30 | 26 |
| Turning leaf length | 20–32 | 26 |
| Membrane thickness | 0.6–1 | 0.8 |
| Hinge free length | 8–14 | 11 |
| Membrane width | 12–20 | 16 |
| Palm dimple depth | 0–0.6 | 0.3 |

Stationary paddle spans X=-12 to 12; moving leaf begins at X=12+free length. Both have rounded 2 mm corners and 4 mm thickness. The membrane has a 0.5 mm overlap into each paddle, fused with actual CSG. The fixed landing has a 3.2 mm well floor. Imports remain inside a radius-6.5 mm well and cannot obstruct the hinge. Uniform-curvature estimated surface strain at 60° is thickness × π/3 / (2 × free length), at most 6.55%. **This is not an allowable material strain**: actual root strain can be higher. No sliding fits, retention joints, loose bodies or hardware.

Three real model thumbnails: Soft Leaf (wide, short, thin), Palm Folio (balanced), Firm Leaf (narrow, long, thicker). Variations stay inside valid ranges. Surface dimples are real solid subtractions. All live edits, undo/redo and save/open JSON act on modeling state. Saved imports carry bounded portable payloads; STL is revalidated on reopen, and missing image data explicitly requests reattachment. JSON limit 2 MB; embedded normalized PNG ≤250,000 pixels.

## Editor and export

Warm model-first studio, right parameter rail, slim header, collapsible phone controls and fixed reachable export; 10 mm grid, matte preview, shadows, orbit/touch/pinch/zoom/reset/fit, active-body selection and exact X/Y/Z mm dimensions. Shape/Mechanism/Surface/Import/Print tabs. Original visual design references Vaseverse's workflow only: no copied branding, assets, text or source.

Preview and binary STL share the identical final mesh and parameter values. Manifold-3D performs true solid unions and subtractions, not overlapping export shells. Every result is preflighted for one connected closed manifold, finite vertices, nondegenerate faces, outward winding and positive volume. One body means separate-parts ZIP is inapplicable; named-body and complete STL downloads are offered. STL is geometry-only, without selected preview colours or unit metadata.

## Image import — PNG and JPEG

File picker works on phones/desktops; drag/drop on supported browsers. Synthetic downloadable `mark.png` and `waves.jpg` fixtures are generated art, with no external attribution needed. Only these synthetic assets are bundled.

Limits before decoding: 16 bytes–2 MB; actual PNG/JPEG header and extension must match; at most 12 megapixels and 6000 px per side. Normalize to at most 500 px side for portable saves. Transparent pixels composite onto white. Source preview and exact 20 × 20 conversion preview are shown.

Method: sample a **20 × 20 luminance height field**, `0.2126R + 0.7152G + 0.0722B`. Threshold mode raises samples darker than threshold (1–254); relief mode uses `depth × (1 − luminance/255)`. Depth 0.4–3 mm. Adjacent samples are triangulated with interpolated slopes over a continuous 0.4 mm backing and closed sides/bottom. Empty silhouettes/reliefs are rejected. Fit entire image or fill/crop square, with ±25% crop offsets.

This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from a photo**. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y ±2 mm. Backing embeds 0.15 mm into the landing's Z=3.2 mm well floor and is boolean-unioned. Entire import must stay inside a radius-6.5 mm protected well, at least 5.5 mm from the membrane root. Changing source pixels, threshold, depth, crop, scale or placement changes actual export without entering the compliant membrane.

## STL import — binary and ASCII

Synthetic downloadable `wedge-ascii.stl` and `gem-binary.stl` samples. Limit 2 MB / 1500 triangles; source dimensions each 0.2–250 mm. STL has no units: explicit confirmation that source coordinates represent **millimeters** is mandatory before integration. Show source dimensions, format, triangle count and source 3D preview.

Supported subset is deliberately bounded: **one convex, closed, outward-wound connected solid with broad flat Z-down bottom covering at least 25% of XY area and enclosing its entire XY projection**. Open/nonmanifold, disconnected, inward-wound, self-intersecting, concave, hollow, overhanging, degenerate, nonfinite, oversized and truncated inputs are rejected with actionable errors. Equal vertices weld at 0.00001 mm for topology; source triangle pairs receive explicit intersection checks. No arbitrary repair is claimed.

XY is aspect-preservingly scaled to 4–7 mm footprint; Z independently fits height 0.6–5 mm. Minimum fitted XY span 1.2 mm. Z rotation, center/reset, translation, replace/remove are real integration controls. Tilting is not supported because it would break the flat-base contract. The complete transformed source must remain inside the well and join one solid, otherwise export is disabled. The source becomes the palm grip, not an unchanged displayed/re-exported mesh.

## Privacy

All user files are processed locally in the browser. No uploads, remote APIs, personal fixtures in the repository or background input-file storage. Saved JSON intentionally contains the bounded import so the user can reopen it locally. Downloading files does not upload them.

## Printing and calibration

- TPU 95A is the starting material. PLA/PETG is unsuitable for repeated bending of this thin membrane.
- Print bed-flat, full underside at Z=0. No supports, hardware, assembly or moving-interface release.
- Start with a 0.4 mm nozzle, 0.15–0.2 mm layers, solid membrane infill and continuous extrusion paths across the hinge. Check every membrane layer in the slicer, especially at 0.6 mm thickness. Remove brim without nicking roots.
- Soft Leaf is the full-size calibration trial. Begin with a 15° lift; inspect adhesion, cracks and springback. Stop on whitening, delamination or poor return. Do not crease or force full closure; 60° is a conservative geometric guide, not validated elastic travel.
- Printer/material settings determine behavior. No universal tolerance, force, fatigue life, or print success claim.

## Digital validation

`validate.mjs` independently parses actual binary STL bytes: nonempty finite triangles, nondegenerate faces, normalized outward stored normals, exact mm bounds and bed Z=0, positive enclosed volume per component, welded undirected edges with exactly two oppositely directed incident triangles. Tests include default, minimum/maximum, all 64 parameter-box corners, all presets and eight seeded variations: 78 cases. Twenty-four PNG-like threshold/grayscale and ASCII/binary STL integration cases receive the same checks. Controls must alter output hashes.

Mechanism checks measure membrane thickness, root overlap, free length and import isolation. CSG probes verify root and membrane material and air above and alongside the free membrane. Rigid-leaf envelopes at 0/15/30/60° about the hinge midpoint conservatively track separation from the fixed import; this is an analytical guide, **not a deformed membrane model, FEA or physical motion test**. Uniform-curvature strain estimates do not prove fatigue or local stress safety.

Real-browser tests exercise PNG/JPEG and ASCII/binary STL picker inputs, real downloaded STL byte validation, pixel/threshold/depth/shape/scale/rotation/placement changes, default comparisons, exact preview/export signatures, invalid/truncated/open/nonmanifold/concave/excessive inputs, empty relief, invalid dimensions, replace/remove/reset and body exports. Extra tests cover all presets, random variations, undo/redo, portable save/open of each import, drag/drop, colour neutrality and phone 320/390 px touch orbit/pinch/import/export. Gallery tests compile every inline script, preserve existing entries, check unique newest entry and render/filter without runtime errors. Reports describe executed digital tests only.
