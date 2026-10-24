# Gate & Glide validation — 2026-10-24

## Verified locally

- `npm run predeploy`: passed, production Vite bundle plus local worker/WASM.
- `npm test`: **78 parameter cases** (default, min/max, three presets, all 64 range corners, eight deterministic variations) and **24 imported-output cases** (threshold image, grayscale image, ASCII STL and binary STL at six parameter configurations).
- Every output independently parsed from binary STL: nonempty triangles, finite coordinates and normals, nondegenerate faces, normalized outward normals, welded edges with exactly two incident oppositely oriented triangles, positive volume for each component, expected mm dimensions. Board and key are closed individual solids; combined layout has exactly two components.
- Actual Manifold solid intersections verify **21 assembled key positions**, **15 dock insertion/extraction heights**, six bidirectional flange-retention probes, print-layout nonintersection, unchanged imported-output key, and palm-only import isolation. Numeric checks cover per-face/per-side clearance, neck width, flange overlap, dock rims and full-engagement distance.
- A coplanar Boolean sliver found at an extreme setting was eliminated by replacing the three-box key union with one simple I-profile extrusion. The entire parameter/import suite passed afterward; validation was not relaxed.
- Independent overall bounds: X = travel + 41.5 mm, Y = board width + flange span + 8 mm, Z = 6 mm unless a taller palm import extends it (maximum 6.45 mm).
- `browser-test.cjs`: **24 actual browser exports** including PNG, JPEG, ASCII/binary imports, relief/threshold/crop changes, mesh scaling/rotation/placement, import reset/remove, parameter extremes, individual parts and phone exports. Every combined download matches exact preview fingerprint, saved parameters and regenerated solid, and passes mesh plus mechanism checks.
- Ten malformed/unsupported browser file cases rejected recoverably: wrong format, truncation, open mesh, nonmanifold mesh, excessive bytes, fake PNG, excessive image dimensions, excessive triangles, excessive STL dimensions and concave STL. Empty silhouettes, invalid dimensions, missing numeric transforms and out-of-safe-zone placements also block export and recover through resets.
- `extra-browser.cjs`: all three preset exports and four random variations pass mesh/mechanism checks; image + STL portable JSON round trips preserve geometry; undo/redo, ZIP of both individually closed parts, drag/drop, assembled travel and geometry-neutral preview colours pass.
- `mobile-sheet.cjs`: 320 × 740 bottom-sheet collapse/expand, all five tabs and export always in viewport. Main browser checks cover 390 × 844 and 320 px widths, actual touch orbit and pinch, no horizontal overflow, real phone image/STL import and export.
- Desktop and phone screenshots visually inspected. Large model-first canvas, compact warm control rail, useful thumbnails, clear mm dimensions, labelled layout/assembly controls and reachable export.
- Production-bundle repeat of the full browser import/export and recovery suite passed (`production-browser-validation.json`), with no runtime errors or external requests.
- Gallery inline script compiled with `new Function`; missing/empty script is an assertion failure. New entry exactly once, correct folder and `stl` area, newest first, all **120 prior entries** preserved, **121 rendered cards**, STL Generators first, search and runtime checks pass.
- Root `npm run predeploy`: **121 built/copied, 0 failed, 0 skipped**. Root deploy index matches the gallery and all 121 app indexes exist; new deploy app matches its production dist.
- Root `npm run deploy`: gh-pages reported **Published**.

Machine-readable evidence: `geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json`. `public-validation.json` records the successful post-publish public smoke check: live app/worker/WASM, real image + STL integration and downloaded mesh checks, newest gallery entry and all 121 cards; no runtime errors or failed requests.

## Scope and limitations

No physical print was performed. Mesh validity and collision/retention geometry are not measured sliding force, wear, material reliability or printer-specific fit. No universal tolerances or print-time estimates claimed. The key is intentionally removable at its dock; only sufficiently engaged lane positions provide flange retention. Start with the Pocket Dock calibration preset, inspect slicer layers, and tune the per-side gap to your printer/material.

The archived `/Volumes/ExternalHD/daily_app` tree was only read for idea comparison; not modified, built or deployed.
