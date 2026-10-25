# Cupped Fold

A React + Vite browser studio generating one transversely cupped TPU tape-shell fidget. Hold the isolated palm, gently flatten the U cross-section near the free tip, then bend lengthwise and release. Cross-section flattening coupled to longitudinal bending differs from flat cantilever plucking and fixed-fixed strings. No snap, bistability, force threshold or fatigue life is promised.

## Run and dependencies

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.
Base: `/daily-app2/20261025-22/`. Individual `deploy` is `gh-pages -d dist`; public monorepo publication uses ROOT `npm run predeploy` then `npm run deploy`.

Locally bundled React, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (OFL); Playwright for browser verification. No CDN imports, API key, paid service or server generation. Reference-inspired lavender desk, white left control panel, tactile coral buttons, saved dark theme, right live viewer and phone preview-first stack. Shared editor/import infrastructure adapted from local 20261025-18; mechanism, tests and explanations replaced. The Keycap Studio reference and archived gallery remain read-only.

## Parameters and studio

All dimensions are **millimeters**. Palm diameter 22–28, round/hex/oval. Free strip length 26–36; width 12–16; vertical shell thickness 1–1.4; transverse parabolic rise 1.2–2; palm dimples 0–0.6. Gentle tip trial 0.6–1.2 is guidance, not a built-in stop. Soft Cupped Fold, Pocket Cup and Wide Arc are real presets with generated model thumbnails. Bounded variation, reset, undo/redo, six local named saves and portable JSON are provided. Imported assets are included in bounded payloads, not missing-file paths; invalid/missing payloads request reattachment. Preview colours never imply colour in STL.

## Local image/SVG personalization

File picker (including phones), replace/remove/reset and desktop drag/drop. PNG/JPEG: 16 bytes–2 MB, ≤12 MP, ≤6,000 px per side, normalized to ≤500 px. SVG: simple filled vector shapes/paths, ≤2,000 elements, no scripts/external references; rasterized locally to 256 px. Synthetic sample fixtures and attribution are bundled. Files stay on-device and are not uploaded or committed.

Images produce **2D relief, not full 3D reconstruction from one photograph**. Fit/contain or fill/crop, ±25% crop shift, light/dark background handling, threshold 1–254 and grayscale relief feed a bounded 20×20 sample grid. Luminance is 0.2126R + 0.7152G + 0.0722B after compositing alpha. Threshold foreground gets uniform depth; grayscale gets depth × (1−luminance/255). Triangulated sampled top, closed sidewalls and bottom form a solid, then Manifold genuinely unions/subtracts it into the palm. White holes remain unraised/unengraved above continuous backing, not through-holes in the fidget. This is sampled relief, not exact vector outline tracing; thin details can disappear. Source and actual checkerboard cutout previews are shown. Raised depth 0.4–3; engraving 0.4–0.6 preserves at least 3.6 mm palm floor. Text up to eight characters and six searchable bundled glyph marks use the same geometry workflow.

## STL integration

ASCII and binary STL, ≤2 MB, ≤1,500 triangles, every source dimension 0.2–250. Source preview, dimensions and format are shown. Explicit millimeter confirmation is mandatory: STL has no units. Select Z/Y/−Z up before attachment; axis changes clear the source. XY scales proportionally to footprint 4–7; Z fits height 0.6–5; Z rotation ±180°, X ±1.5, Y ±2, constrained to a 6.5 mm palm safe radius. Replace/remove and transformation reset are available.

Supported contract: one connected, outward-wound, closed **convex, broad flat-bottom, no-overhang** solid. Genuine original vertices/faces are transformed and solid-unioned into the stationary palm; no hull replacement or repair is claimed. Concave, hollow, disconnected, inward/nonmanifold/open, self-intersecting/touching, degenerate and excessive meshes are rejected with guidance. Bottom contact must cover ≥25% of XY bounding footprint. Unsupported geometry is rejected, not silently simplified. Personalization changes exported geometry and cannot reach the shell/root.

## Worker, geometry and export

Heavy Manifold CSG and STL parsing run in a worker. Debouncing, generation revisions, current-state keys and actual build/error status prevent stale export. Last-valid geometry can remain visible but export is disabled after invalid edits/imports. Preview, binary STL and ZIP use the exact current valid mesh. Each final mesh is checked for finite coordinates, nondegenerate faces, positive volume, connected solid, welded two-face edge incidence and opposite neighbor winding. No overlapping shells are presented as a union.

One intended solid: rest/interaction, whole-solid and print views use the same undeformed printable geometry; no artificial exploded assembly is appropriate. See-through mode explains shell thickness. Orbit/zoom/fit support mouse and touch. Export shows final X/Y/Z, useful filenames, whole/per-solid STL buttons and STL + notes ZIP. No fake 3MF or colour promises.

## Printing, interaction and calibration

**Removable supports are required under the curved underside.** Print palm flat, open cup upward in supplied orientation; inspect the slicer. TPU 95A is a starting point, not brittle PLA; 0.4 mm nozzle, 0.2 mm layers, three perimeters. Calibrate TPU support interface/separation, remove carefully without nicking/stretching the 1–1.4 mm shell. No hardware or assembly.

Pocket Cup is the full-size material/support calibration. Hold palm, flatten less than half the rise, then start below 0.3 mm longitudinal tip lift and verify return before increasing. Never force, sharply crease or fold. Stop for whitening, tearing, delamination or excessive force. Material/fit depends on printer and slicer, not universal tolerances. Small parts are not for children. No moving-body retention is involved: this is an anchored compliant shell with an open free end.

## Verification

`npm test`: 132 default/preset/extreme cases plus 35 image/STL-derived cases. Independent binary STL parsing checks length, finite/nondegenerate triangles, normals, positive volume for each component, welded closed edges, winding, genus, analytic X/Y bounds and bed contact. Kernel probes at 15 cross-section/length points verify occupied shell midpoint and clear underside/top. Boolean differences confirm imports cannot affect the shell outside the palm. Eleven hypothetical flattening profiles preserve thickness separation; this is not equilibrium simulation.

Profile: z = 0.4 + rise × (2y/width)². Center curvature radius = width²/(8 rise). Conservative minimum normal thickness = vertical thickness / sqrt(1 + edgeSlope²), with edgeSlope = 4 rise / width. Flattening strain indicator thickness/(2 radius) is bounded at 8%; longitudinal beam indicator 1.5 thickness × trial / length² is below 0.5%. These are calibration indicators, not nonlinear FEA, force or fatigue validation.

`node browser-test.cjs`: actual PNG/JPEG/ASCII/binary file-picker imports and downloaded STL, source/threshold/scale/rotation/placement differences, exact preview/export and portable JSON regeneration signatures; malformed/truncated/open/nonmanifold/concave/excessive files, empty silhouettes, invalid dimensions/transforms; reset recovery; touch orbit/pinch, 320/390 px layout and phone downloads. `node feature-test.cjs`: presets/variations, shape/text/icon/SVG, saved designs, JSON assets, undo/redo, ZIP/per-part export, themes, sections/focus, drag/drop, up axis and stale-result protection. `node hole-test.cjs`: actual final solid ring-hole probes raised/engraved. `node resilience-test.cjs`: production worker-load failure and malformed JSON recovery. Reports and screenshots record executed checks.

**No physical print, support-removal, nonlinear shell, snap-through, force or fatigue testing was performed.**
