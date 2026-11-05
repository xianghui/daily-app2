# Hartmann & Focus validation

Computational checks only. No physical print, assembly, stability, adhesive/tape or optical experiment performed.

- `npm run predeploy`: production build passed; React, local fonts, worker and Manifold WASM bundled under `/daily-app2/20261105-23/`.
- `npm test`: **35** parameter/import cases. Independent float32 binary-STL checks of each card, clean part and combined clean plate: finite coordinates, exact byte length, nondegenerate faces, stored normalized outward normals, mm bounds, positive volume per component and every welded edge exactly twice in opposite directions. Card one component; clean plate three.
- Every case independently checks card envelope/Z, all twelve real tabs, simulated cuts releasing exactly carrier + three unharmed parts, bed footprint containment, no loose-piece intersections, both mask assembly alternatives, twelve insertion samples, five unobstructed optical apertures in parts AND card, .80 mm blind floor, minimum radial rim >3.98 mm and web ≥12 mm. Original source sockets map to real tongue/socket parameters.
- `browser-test.cjs`: actual production file-picker PNG/JPEG/ASCII/binary STL imports and real STL downloads. Pixel content, threshold, depth, scale, rotation and placement change downloaded geometry; exact current fingerprint matches preview and JSON regeneration. Downloaded image/STL-derived models receive full mesh/assembly checks. Replace/remove/reset returns original signature. Both independent parameter extrema downloaded and validated. Truncated/open/nonmanifold/concave/oversized/invalid dimensions/header/empty-image/unsafe-transform inputs block exports and recover. Per-part downloads validated. 320/390 px touch contexts, real CDP orbit/pinch, phone image/STL export; zero app runtime errors or remote requests.
- `feature-test.cjs`: all three presets, all three outlines, text/icon/SVG/background changes, four portable import roundtrips, undo/redo, named design after reload, saved theme, all views/isolation, real ZIP contents and per-part STL bytes, drag/drop, Y-up orientation, collapsible sections, focus and latest-worker/invalid-state guards.
- `hole-test.cjs`: probes final solid, verifying SVG ring center retains original backing while the dark ring is genuinely engraved.
- `mobile-test.cjs`: all five editor tabs at 320/390 px; document and inner width independently bounded by viewport. Preview first, exports/JSON reachable, reduced motion, 374 px desktop left panel/right viewer.
- `portable-errors-test.cjs`: missing image payload, bad transform, wrong application and invalid dimensions rejected; explicit reattachment guidance and reset recovery.
- `resilience-test.cjs`: abort production worker request, verify export blocked; reload restores. All six bundled icons yield distinct geometry. Assembled and see-through screenshot inspection.
- `stale-import-test.cjs`: delayed older image cannot overwrite newer selection.
- `mask-views-test.cjs`: swapping seated mask changes rendered geometry while retaining exact full-card STL signature. Assembled/connected-card screenshots reviewed.
- `gallery-test.cjs`: compiles every inline script with `new Function`; missing scripts fail. New `stl` entry exactly once, newest first, correct folder; all **469** prior entries unchanged, **470** total, STL Generators first.
- `gallery-browser.cjs`: gallery runtime, complete card count and new app link/worker verified before combined build and on combined deploy output.

Raw source mesh was freshly parsed from a cached public download after upstream STL returned HTTP 403; upstream README/license retrieved live. Source hash, measurements, connected components/anomalies and generated cross-section SVG are recorded; no source mesh redistribution or unperformed physical-test claim.

Reproducible commands are in README; reports are the `*-validation.json` files. PNG screenshots capture actual browser renderings, not fabricated mockups.

## Combined publication

Root `npm run predeploy` and the deploy lifecycle each reported **470 built, 0 failed, 0 skipped**. `combined-files-validation.json` verifies all app paths and exact equality of all 26 new production files. Combined-production real browser import/download suite passed again (`combined-browser-validation.json`), as did gallery rendering and its new working link. Root `npm run deploy` returned `Published`.
