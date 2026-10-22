# Oloid Drift

A local-first React + Vite parametric fidget STL studio. Roll, catch and reverse a two-lobed, wandering palm object; pause to rub a recessed personalized thumb well. The hull joins two perpendicular circular profiles. Equal lobe radii approximate a classical oloid with 192 samples per circle; unequal radii change the tumble. This is not an axle spinner, game, vase generator, or a mathematically verified continuous-rolling simulation.

## Run and export

`npm install`, `npm run dev`, `npm run predeploy`. The base path is `/daily-app2/20261022-11/`. Individual `npm run deploy` uses gh-pages on dist, but the collection is published through the root monorepo deploy workflow. `npm test` validates generated geometry. `TEST_BASE=http://127.0.0.1:5231 node browser-test.cjs` and `extra-browser.cjs` exercise real browser imports and downloads with Playwright Chromium.

Three presets, constrained variations, sliders plus numeric inputs, undo/redo (35 snapshots), local portable JSON save/open, source removal/replacement, orbit/pinch/zoom/fit, actual model thumbnails and preview colors. The inspection slider rotates the assembled object for viewing; it does **not** simulate contact rolling. A 10 mm grid supplies scale. Dimensions report the selected exported bed layout, in millimeters. STL does not contain preview colors. Live worker modeling and export use identical final part meshes. Four binary-STL parts can be exported together, individually or in ZIP with assembly notes. A small socket coupon is available in Mechanism.

## Parameters and integration contract

- Rolling radius 18–26 mm; perpendicular lobe radius ratio 0.90–1.10 (dimensionless).
- Built-in thumb relief height adjustment 0–0.6 mm, atop a 1.8 mm starting relief. Replaced by imported geometry when an import is active.
- Two pins: 3 mm diameter, 7.6 mm length; 3.8 mm insertion per half. Socket depth 4 mm. Radial pin allowance −0.04 to +0.08 mm, intentionally permitting interference. No sliding joint or universal printer fit is claimed.
- Tactile well radius 7.2 mm; floor height 0.35 × rolling radius above seam. Imported footprint 4–7 mm, STL height 0.6–5 mm, Z rotation ±180°, placement X ±1.5 / Y ±2 mm. All imported XY vertices must stay within a 6.5 mm safe radius. Imports must remain entirely inside the original convex rolling hull. Unsupported protrusions disable export rather than being silently clipped.

## Image workflow

PNG and JPEG file picker on desktop/mobile, or drag/drop. Maximum 2 MB, 12 megapixels and 6000 pixels per side. Headers are checked before decoding. A local normalized preview is reduced to at most 500 pixels per side, then sampled to an exact 20 × 20 grid. Transparent pixels are composited onto white. Luminance is 0.2126 R + 0.7152 G + 0.0722 B. Fit/cover and ±25% crop pan affect the same sampled pixels used for generation.

Threshold mode raises pixels darker than the adjustable 1–254 threshold; relief mode uses `depth * (1 - luminance / 255)`. Depth is 0.4–3 mm. Heights sit on a continuous 0.4 mm backing; triangulated height-field top, perimeter sides and bottom fan make a closed solid. The backing overlaps the recessed floor by 0.15 mm and is Boolean-unioned into the upper half. This is **2D-to-relief/silhouette conversion**, not full 3D reconstruction from one photograph. Empty silhouettes are rejected. Pixel, threshold, depth and placement changes modify actual exported triangles.

## STL workflow and limits

ASCII and binary STL, at most 2 MB / 1500 triangles. All axes must span 0.2–250 mm; coordinates finite and bounded. STL has no unit metadata: users must explicitly confirm millimeters before integration. Source mesh preview and original dimensions are shown. Only one connected convex, outward-wound watertight solid with a broad flat Z-bottom (at least 25% of footprint), no XY overhang and no self-intersections is accepted. Open, concave, disconnected, nonmanifold, inconsistent, touching or slender unsupported inputs are rejected with instructions to fix them in a modeler. No automatic mesh repair is claimed.

XY is scaled proportionally to the footprint; Z independently to the height. Rotate about Z, center and place within the well. STL grip is Boolean-unioned 0.15 mm into the floor. The fitted minimum XY span must be at least 1.2 mm. The entire integrated part must stay connected and below the rolling envelope. This restricted workflow deliberately rejects arbitrary figurines, hollow models and unsupported overhangs. Both supplied STL samples are synthetic original fixtures.

## Privacy and portable designs

User files are processed locally in the browser; no API, uploads, external services or CDN imports. Dependencies and manifold WASM are bundled locally. Bounded image and STL payloads are explicitly included only when the user downloads a design JSON. A normalized PNG preserves image conversion on reopening; STL vertices/indices are revalidated. Personal uploads are never written to the repository. The bundled mark PNG, waves JPEG, wedge ASCII STL and gem binary STL are synthetic examples created for this collection; no third-party artwork.

## Printing and assembly

Print both half-bodies seam-down, pins upright; use bed-generated supports for outward-sloping lobe surfaces. This design is **not support-free or print-in-place**. Remove supports and smooth scars that would interrupt rolling. Start with PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls and 20% infill. No metal hardware, bearings, magnets or springs.

Print the small socket coupon and one pin first; tune radial allowance for the printer/material. Deburr and remove elephant foot. Insert each pin 3.8 mm into the lower half, align and press halves evenly. Never hammer tight pins. Positive allowances may need optional plastic-compatible adhesive inside sockets; adhesive is not supplied and makes disassembly permanent. Do not roll until retention has been confirmed by hand over a soft surface. Pull unbonded halves apart evenly to reopen. Small parts: not for children.

The recessed thumb well intentionally interrupts a small portion of the smooth rolling surface. Catch, rub, reorient and reverse; continuous unbroken rolling is not promised. Surface friction, layer texture, seam alignment and support cleanup determine feel. No physical print, retention strength, longevity or continuous rolling experiment was performed.

## Geometry and software validation

Manifold WASM performs actual hulls, Boolean subtraction and solid unions. Every part must be a single connected, nonempty closed solid. Generated output is serialized as binary STL and reparsed in tests: nonempty finite nondegenerate triangles, unit normals matching winding, positive volume per connected component, exact millimeter dimensions, two incident oppositely-directed faces per welded edge (1e-5 mm), and separated print layouts. Parameter edges, all presets, deterministic variations, image relief/threshold and accepted STL imports are checked. Assembly checks include nonintersecting halves, socket/well wall separation, pin depths/end relief and intersections limited to designed interference allowances. Custom geometry is checked against the original hull to reject protrusions. These are digital geometry and assembly checks, **not physical print verification**.

Browser tests use real PNG/JPEG/ASCII/binary file inputs, actual downloaded STL, geometry fingerprint comparisons, transform/reset/remove/replacement, invalid/truncated/excessive/nonmanifold/concave/empty inputs, settings round trips, undo/redo, per-part/ZIP/coupon export, palette neutrality, desktop and 320/390-pixel phone layouts, touch orbit/pinch, reachable export and local-network-only operation. JSON reports are checked-in evidence.

Dependencies: React, Vite, Three.js/OrbitControls, manifold-3d (locally bundled WASM), fflate (ZIP), gh-pages; Playwright for browser verification. The editor composition takes visual/UX inspiration from vaseverse.org, without reusing branding, assets, text or source.
