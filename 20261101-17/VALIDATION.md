# Validation — 2026-11-01

Computational and browser checks only. **No physical print, pencil use, material/fit, adhesion or assembly test performed.**

## Reference evidence

Actual downloaded STL independently parsed this run; source/license inspected. SHA-256, dimensions, 27 edge-adjacent components, source defects, Z sections and socket measurements recorded in `reference-measurements.json`. Representative cross-section image visually reviewed. Local switch/fabric STL candidates also parsed before choosing the public sheet-kit reference. New model maps 1.6 mm sheet / 4.50 mm socket length to real code; fit/runners explicitly redesigned. Raw reference not redistributed.

## Passed

- `npm test`: **77 valid model cases**, one deliberately impossible packing combination correctly rejected. Includes all 16 **distinct** keys for both grid sizes, all presets/outlines, parameter minima/maxima, combined extrema, imported STL and image/relief variants.
- Float32 binary STL reparse: exact byte count, finite/nondegenerate triangles, normalized consistent normals, closed welded edges (1e-5 mm), positive volume per connected component, dimensions in mm, bed aligned.
- Every clean part separately and actual card/loose-plate STL checked. One closed connected carrier/card. Twenty snips yield five removable parts plus carrier; no unintended overlaps. Upper cross-sections lie within bed footprint.
- Six tongue/socket center probes and eleven insertion heights for each guide; no assembled collisions. Four registered stencil lift paths and 25 fully elevated rotation positions. Every actual aperture is probed against every cell in four orientations: precisely one exposure per cell.
- `personalization-check.mjs`: final image-ring cutter really removes dark ring material; bright center hole preserves full backing. Imports remain in protected handle region.
- `browser-test.cjs`: actual PNG/JPEG/ASCII/binary STL file picker, real downloaded STL bytes compared with exact UI mesh hash and JSON-rebuilt Node mesh. Pixel content, threshold/depth, grayscale/crop/background, size/placement/rotation alter exported geometry; removal/reset restores original bytes. Every downloaded derived output also passes mesh/assembly checks.
- Invalid/truncated/open/nonmanifold/concave/excessive/dimension-invalid content, empty images and unsafe transforms reject and disable export; usable recovery controls.
- `studio-test.cjs`: each preset, three outlines, text/icons/SVG, JSON image/mesh round trips, six-entry named designs/reload, missing payload rejection, undo/redo, actual ZIP unpacked and each contained STL checked, all views, saved dark theme, focus, collapse, reduced-motion CSS, worker abort/reload recovery.
- `icons-drop-test.cjs`: six icon engravings change actual solid; real drag/drop import.
- `orientation-test.cjs`: Z/Y/−Z source orientation, explicit unit confirmation and actual final solid.
- `rapid-test.cjs`: late worker cannot unlock invalid current state; per-part button actual downloads; exact reset.
- Touch orbit and pinch screenshots differ, reachable imports/downloads at 390 px; no horizontal overflow at 320/390 px. Phone preview-first; desktop 374 px left rail/right viewer. Light/dark and phone screenshots reviewed.
- Production build real base path `/daily-app2/20261101-17/`: worker/WASM and local assets load; no external generation requests or runtime errors. Combined deploy output reruns in `combined-browser-validation.json`.
- Root gallery scripts compiled with `new Function` (missing scripts fail), new entry exactly once, STL category first; **all 347 previous entries unchanged**. Browser renders all 348 entries.
- App `npm run predeploy` passed. ROOT `npm run predeploy`: **348 built, 0 failed, 0 skipped**, root index plus every app index verified. Root `npm run deploy` used for publication, not app deploy.

Initial adapted test selectors were corrected for new board/side controls and rerun. A key-uniqueness check caught redundant key choices before publication; revised orbit selection now yields 16 independently checked distinct masks at each grid size. No unperformed physical testing implied.

Reproducible commands and JSON reports live alongside this document. `release-validation.json` records public-site verification after deployment.

## Public release

GitHub Pages propagation initially returned 404; retry after propagation succeeded. `node live-test.cjs` verifies public HTTP 200, bundled worker generation, a real downloaded binary STL with the exact current-default signature and manifold/dimension checks, and the public gallery's single correct new entry. No browser runtime errors. See `release-validation.json` and `evidence/published-studio.png`.
