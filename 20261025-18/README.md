# Five Soft Notes

A local React + Vite maker studio for a one-piece, hardware-free TPU fidget: five independently plucked, **free-ended** cantilever tongues with progressively shorter lengths. Hold the isolated palm, gently lift/release each rounded tip, and feel the stiffness progression. It is not a tuned instrument, fixed-ended string fidget or opposed interleaving comb.

## Develop / build

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app `deploy` uses gh-pages, but public monorepo publishing must use the ROOT `npm run predeploy` and `npm run deploy`. Base is `/daily-app2/20261025-18/`.

Dependencies: locally bundled React, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (OFL). No CDN, API, server-side generation or account needed. Studio layout follows the read-only Keycap Studio reference: lavender desk, white collapsible left rail, raised pink selected keys, live right-hand stage, saved dark mode, phone preview-first stack.

## Controls (all physical dimensions in mm)

- Palm diameter 22–28; round, hexagonal or oval palm. Three real presets with live mesh thumbnails.
- Longest tongue 22–32; length multipliers 1, .90, .80, .70, .60.
- Tongue thickness 1–1.6; width 4–6; open slots 3–5.
- Palm dimple depth 0–0.6; gentle tip-lift trial 0.8–1.6. This is guidance, **not a built-in stop**.
- Imported footprint 4–7; STL height 0.6–5; rotation ±180°; X ±1.5, Y ±2, all within a checked 6.5 mm radius palm zone. Invalid combinations disable export.

Undo/redo, six local named designs and bounded portable JSON preserve image/mesh payloads. Invalid/missing payloads are rejected with reattachment guidance. Reset removes personalization and restores defaults. Preview colours never imply STL colour information.

## Image / SVG workflow

File picker and drag/drop support real PNG, JPEG and simple filled SVG. Synthetic bundled fixtures are provided with their attribution file. Limits: 16 bytes–2 MB, PNG/JPEG ≤12 megapixels and 6,000 px per side; normalized locally to ≤500 px. SVG allows ≤2,000 simple vector elements with no external references/scripts; rasterized locally to 256 px. All image processing happens on-device.

Images become **2D-to-relief, not reconstruction of a full 3D object from a photo**. Contain/cover, ±25% crop shift, light/dark background handling, threshold 1–254 or luminance relief determine a bounded 20×20 height grid. Foreground uses luminance 0.2126R + 0.7152G + 0.0722B, after alpha compositing. Threshold foreground samples get uniform depth; grayscale samples get depth × (1−luminance/255). A triangulated continuous height surface is closed with walls and bottom, then solid-unioned to the palm. The solid substrate stays beneath white holes; holes remain unraised (or unengraved), not filled foreground. Checkerboard shows actual sampled foreground; source image remains alongside it. Depth 0.4–3 raised, 0.4–0.6 engraved to preserve the floor. This intentionally coarse, bounded method favors bold small marks; thin features may disappear. Text (up to 8 characters) and six searchable bundled glyph marks use the same actual geometry path.

## STL workflow

Both ASCII and binary STL are parsed locally in a worker. Max 1,500 triangles, ≤2 MB, each source dimension 0.2–250. Show source dimensions, mesh preview and format; **explicitly confirm millimeters** because STL stores no units. Select Z, Y or −Z up before attachment; changing axis clears the source. Set physical footprint, independent height, rotation and placement; center/reset, replace or remove anytime.

Supported mesh contract: one connected outward-wound closed **convex, broad flat-bottom, no-overhang** solid. Original vertices/faces are transformed then genuinely solid-unioned into the palm, never substituted with a hull. Concavities are rejected with an actionable error, not discarded. Unsupported open/nonmanifold, degenerate, self-intersecting/touching, disconnected, inward-wound and thin/excessive input is rejected; no repair is claimed. Bottom contact must cover at least 25% of bounding footprint. Shape, scale and placement survive into export. All personalization stays isolated from tongue roots and slots.

## Geometry and exports

Manifold WASM solid operations run in a debounced worker with revision guards and real build/error status. Preview, per-part binary STL and ZIP use the exact same current checked mesh. During errors or stale builds preview is explicitly labelled last-valid and **export is blocked**. One intended connected solid means no assembly/exploded layout is needed: rest/interaction, whole-solid and print views share real geometry. See-through mode explains slots; no fake deformation animation is offered.

Binary STL includes useful filenames and physical X/Y/Z bounds; ZIP includes the STL and full print notes. Every current result is checked for finite nondegenerate triangles, positive volume, welded two-face edge incidence and opposite neighboring winding. Robust CSG and connected-component checks prevent internal overlap shells from being exported as a supposed union. All assets and dependencies are local; user files never leave the browser and are never saved in the repository.

## Printing / calibration

Print the broad XY face on bed, no supports/hardware/assembly. TPU 95A is a starting point, 0.4 mm nozzle, 0.2 mm layer height, three perimeters. Do not use brittle PLA for flexural operation. Remove strings from open slots without nicking roots. Pocket Notes is a full-size calibration print; start below 0.4 mm vertical tip lift and verify return before approaching selected trial. Never fold, pull sideways or force the shortest tongue. Stop at whitening, tearing or excessive force. Flexural thickness/material response is printer-dependent; no universal tolerances or fatigue life are claimed. Small parts are not intended for children.

## Verification

`npm test`: 132 default/preset/extreme parameter cases plus 35 image/STL-derived cases. Independent exported-binary parsing checks closed manifold edges, winding, nonzero volume, triangle quality, analytic X/Y dimensions and bed contact. Independent solid probes verify four open slots, five full root sections and isolation of imported changes. Eleven trial-displacement positions with 21 beam samples per tongue verify bounded monotonic vertical envelopes, persistent lateral separation, and nominal strain ε=1.5tδ/L² below 2.5%. Relative stiffness scales as 1/L³. These are geometric and small-deflection estimates, **not nonlinear material simulation or physical print testing**.

`node browser-test.cjs`: real PNG/JPEG/ASCII/binary file inputs, downloaded STL comparison against defaults, transforms, malformed/oversized/open/nonmanifold/concave rejection, source reset, actual touch orbit/pinch, mobile downloads and 320/390 px overflow checks. `node feature-test.cjs`: presets, bounded variations, shape/text/icon/SVG changes, portable asset round trips, local named designs, undo/redo, actual ZIP/per-part downloads, themes, focus, drag/drop, up-axis and latest worker edit. `node hole-test.cjs`: final solid probes prove SVG ring holes remain unraised/unengraved. `node resilience-test.cjs`: failed worker and malformed JSON block export and recover through reload/reset. JSON reports record actual run results. **No physical print was tested.**

Implementation reuses local shared-studio infrastructure from 20261025-17 while replacing mechanism geometry, mechanical checks, UI explanations and design identity. Reference and archived galleries remain read-only.
