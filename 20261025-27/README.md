# Threefold Seat

A local React/Vite maker studio for a two-part, hardware-free **lift / third-turn / reseat** fidget. Three rounded feet on a thumb plate nest into radial 45° V-grooves. Lift vertically, turn 120°, lower and gently rock into the seat. This is a kinematic-inspired tactile coupling, not a locking mechanism or precision calibrated mount. Parts deliberately lift free; hold horizontally.

## Run and export

Node 22.12+: `npm install`, `npm run dev`. `npm run predeploy` builds the production app. App base: `/daily-app2/20261025-27/`. Each part has a binary STL button; combined STL lays the two solids separately on the print bed. Everything ZIP contains the two actual STLs and assembly notes. STL contains no preview colours or unit metadata; use **millimeters** at 100% scale. Root monorepo deployment publishes the combined gallery; per-app deployment scripts are present but not used for publication.

## Mechanism and ranges (all linear dimensions mm)

- Palm diameter 22–28; round, hexagonal and oval ergonomic silhouettes.
- Foot-circle radius 16–20; thumb-plate thickness 3–4.5.
- Spherical foot radius 2.8–3.4; groove depth 3–3.6.
- Vertical seat allowance 0.30–0.60; palm dimple depth 0–0.6.
- Floor beneath grooves is 2.5. Solid operations use locally bundled Manifold WASM.
- Foot center seated height is `2.5 + sqrt(2)*footRadius + seatAllowance`. Spherical contact with the two 45° faces is analytically checked. The small allowance intentionally shows a hand-held pre-contact position, not the exact physical resting height. The plate underside clears the block rims across all supported ranges.
- Preview cycle: lift 8 mm, rotate 120°, lower. Rotation happens only after the lowest foot point clears all groove rims. Lower gently; allow gravity/contact to determine real seating, rather than forcing the preview height.
- Palm personalization stays within a 6.5 mm safe radius, more than 15 mm from the moving envelope.

## Image-to-fidget

File picker and desktop drop support PNG, JPEG and simple self-contained SVG. Limit 2 MB, 12 megapixels, 6,000 px per side. Validate headers before decode; normalize to at most 500 px. SVG supports simple paths/shapes only (2,000 elements, no scripts, foreign objects, text, linked content or effects); rasterize locally to 256 px.

Conversion uses a **20 × 20 sampled luminance height field** triangulated over a continuous backing, unioned with or subtracted from the palm well. Threshold mode selects dark pixels; grayscale mode maps darkness to height. The checkerboard shows the sampled cutout, not a texture on the final mesh. Bright holes stay unraised/unengraved, as verified with final-solid probes. Edges are sampled/sloped, not exact vector outline tracing. Background inversion, contain/cover fit, crop offsets ±25%, threshold 1–254, raised depth 0.4–3 and engraved depth 0.4–0.6 change exported geometry. This is **2D-to-relief conversion, not full 3D reconstruction from a photograph**.

Physical footprint 4–7, rotation ±180°, X ±1.5 and Y ±2; the safe-zone check rejects out-of-bounds combinations. Text (8 characters) and six searchable built-in marks use the same real geometry path. Original image and exact conversion are previewed; replace, remove, reset image and reset transforms are available.

## STL-to-fidget

Accept ASCII and binary STL, 40 bytes–2 MB, at most 1,500 triangles. Source axis dimensions must each be 0.2–250 mm. Choose Z, Y or negative-Z up before import. Explicit confirmation that source coordinates are millimeters is required because STL has no units. Source 3D preview and dimensions are shown.

This deliberately bounded importer accepts **one closed, consistently outward-wound convex solid with a broad flat bottom**: bottom contact at least 25% of its bounding footprint and all XY projections inside that footprint. Concave, hollow, disconnected, open, nonmanifold, degenerate, inverted, touching/self-intersecting and unsupported overhanging sources are rejected with guidance. It never silently repairs or substitutes a convex hull. Export a simpler flat-bottom solid from your modeler to resolve an unsupported source.

The original accepted mesh is translated to its minimum, scaled proportionally in XY to 4–7 mm footprint and independently in Z to 0.6–5 mm grip height, rotated/placed, then solid-unioned into the palm well. Thin XY profiles below 1.2 mm and disconnected or unsafe unions are blocked. Scale, placement and rotation measurably change the actual exported model. Axis changes request reattachment; reset/remove returns to the useful built-in grip.

## Studio and privacy

Light lavender desktop, white 372 px left controls, pink tactile buttons, local Fredoka/Rubik fonts and saved dark theme follow the read-only Keycap Studio reference. Phone layout puts preview, dimensions and exports before stacked controls. Orbit, pinch zoom, fit, assembled cycle, exploded, isolated parts and actual print layout are included. Three real presets have generated model thumbnails; variations stay within supported bounds.

Generation and STL parsing run in a Web Worker. Debounce, generation IDs and exact current-state keys prevent stale results from being exported. Invalid files/settings disable export while allowing recovery. Preview and downloads use the same checked geometry; a fingerprint is exposed for reproducible verification.

Undo/redo, six named local designs and JSON save/open keep bounded portable mesh/image payloads. Missing image payloads explicitly request reattachment; invalid or oversized designs are rejected. Files are processed **entirely locally in the browser**, never uploaded. Only synthetic fixtures are bundled in `public/samples`; no personal input files are stored in the repository. No API key, cloud service, remote font or CDN is needed.

Dependencies: React, React DOM, Vite, Three.js/OrbitControls, Manifold-3D, fflate, Fontsource Fredoka/Rubik; gh-pages for deployment. Playwright is a development-only browser test dependency. Fonts are SIL OFL, Manifold Apache-2.0, Three.js/React MIT, fflate MIT.

## Print and assembly

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, 100% scale. Palm bed-flat; thumb plate face-down with domes upward, then flip feet down for assembly. No hardware. Supports should not be necessary for the open grooves and rounded upward domes; inspect dome closure and remove strings. Print **Pocket Nest** first as a full-size calibration. Seating depends on printer/material/surface finish; allowances are starting points, not universal fits. Sand/deburr gently, do not force. Small loose parts are unsuitable for children.

## Reproducible verification

`npm test` runs independent binary-STL checks (finite triangles, normals, degeneracy, welded edge incidence/direction, positive volume per component, topology, bounding dimensions), parameter corners, presets, both mesh fixtures and image-derived outputs, and 121-position solid-intersection checks of the complete hand-guided cycle. Print layout is checked separately after float32 serialization. Contact geometry, floor thickness, release and protected import isolation have independent checks.

Serve actual production output with `node serve-test.cjs`, then run `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs` and `node hole-test.cjs`. These exercise real file selection, downloaded STL/ZIP bytes, geometry changes, malformed inputs, portable designs, undo/redo, theme/focus/sections, worker failure recovery, 320/390 px phone layouts and real touch orbit/pinch. Reports and screenshots accompany source. See `VALIDATION.md` for observed results.

**No physical print, friction/feel, precision repeatability, wear, fatigue or contact-force test has been performed.** Computational collision and manifold checks do not prove physical print performance.
