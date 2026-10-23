# Square Bloom validation — 2026-10-23

## Executed successfully

- React/Vite scaffold, local npm dependencies including per-app gh-pages, correct Pages base and predeploy/deploy scripts.
- `npm run test`: **78** parameter cases (default, min/max, three presets, all 64 range corners and eight variations) plus **24** image/STL-derived cases across default/min/max and presets.
- Exported binary STL independently parsed: finite vertices and normals, nonzero triangle area, outward normal agreement, consistent winding, every welded edge exactly two incidents, one connected component, positive volume and exact final millimeter bounds. Runtime worker also performs final-mesh manifold/winding/volume checks after Manifold solid operations.
- Default: **1,984 triangles**, one component, one central through-opening (genus 1), **72.5537 × 44.5537 × 4.8500 mm**, **4,140.2757 mm³** volume.
- Mechanism: continuous solid at five free-span stations on each of four corner bridges, neighboring air outside bridge widths, open central aperture, supported bridge widths and heights, conservative ±1° corner sweep leaves >3.5 mm of opposing tip gap, and >11 mm source-safe-zone isolation from the lattice. These geometric checks are not deformation/force analysis.
- `node browser-test.cjs`: actual file-picker PNG/JPEG/ASCII-STL/binary-STL imports, **23** actual downloads/mesh checks, content and threshold/depth/scale/rotation/placement differences, exact final-preview/export fingerprints, dimensions, replace/remove/reset and per-part export. Ten malformed/oversized/unsupported fixtures rejected plus empty silhouettes and invalid transforms; unit confirmation gates STL integration. No runtime errors or external requests.
- `node extra-browser.cjs`: every preset and four random variations mesh/mechanism checked; undo/redo; all four bundled sample buttons; portable PNG/JPEG/ASCII/binary save/open round trips; drag/drop; preview colors do not change geometry.
- Phone **390 and 320 px**: touch orbit and two-finger zoom change the real preview, PNG/STL picker imports and downloaded meshes pass, no horizontal overflow, reachable export. `mobile-sheet.cjs`: collapse/expand, all tabs accessible, export inside 320 × 740 viewport.
- Desktop and phone screenshots inspected: model-first warm studio, real model thumbnails, readable control rail/bottom controls, dimensions, visible primary export.
- `npm run predeploy` passed for individual app. Root predeploy assembled **92 app folders**, zero failures/skips, correct deployed new-app asset paths.
- `TEST_BASE=http://127.0.0.1:5275 TEST_REPORT=production-browser-validation.json node browser-test.cjs`: same complete browser import/export/mobile suite passed against the actual root deployment artifacts.
- `node gallery-test.cjs`: every inline script compiled with `new Function`, one unique correct `stl` entry first, all **91** previous entries retained (92 total), STL category first, browser search and rendering without runtime errors.
- Root `npm run deploy`: **Published** via `gh-pages -d deploy`; not via the individual app deploy script.

## Corrections during implementation

Initial connectivity validation caught misaligned vertical corner bridges and palm attachment. Corrected checkerboard corner-coordinate signs, then reran the complete geometry suite and actual browser tests successfully. No disconnected geometry was accepted or published.

## Limits, not claims

This is a small-deflection compliant rotating-square cell, not a latch, friction bearing, or print-in-place captive mechanism. It uses TPU-oriented bridge sections and full-size material calibration rather than universal running clearances. No assembly/hardware is required. Large strokes, fatigue, force and auxetic response have not been physically measured. The editor deliberately shows undeformed geometry and advises starting below 0.3 mm total compression. **No physical print has been tested.** Supported imported STLs are explicitly restricted to verified convex, flat-bottom, nonoverhanging single solids; arbitrary scans are rejected, never silently repaired. All user files stay local; only synthetic fixtures are bundled.

Raw evidence: geometry-validation.json, browser-validation.json, extra-validation.json, production-browser-validation.json, mobile-sheet-validation.json, gallery-validation.json and public-validation.json (public live check).

## Public publication

The first live request saw GitHub Pages' transient 404 while the branch deployment propagated. GitHub confirmed the correct `gh-pages` source and successful Pages build `39893173263` for commit `6a047b94977c818e1bea0cb79d467f45b4733396`. The new index was verified on the remote branch. Retried browser live check passed: actual local image import, downloaded manifold STL, newest gallery entry, zero runtime errors or failed requests. Public evidence is saved in `public-validation.json`.
