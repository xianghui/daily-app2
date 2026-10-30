# Verification — Breeze & Bearing

## Passed computational checks

- Fresh reference download, SHA-256, binary STL parse, bounds/components and mesh sections. Source socket4.5×1.700012 mm and sheet1.6 mm mapped to real parameters. Source mesh not bundled.
- `npm run predeploy`: Vite production bundle including local worker/WASM/fonts.
- `npm test`:36 built-in cases +8 image/STL cases. Each connected card and each of five parts independently validated for binary STL size, finite vertices/normals, nondegenerate faces,1e-5 mm welded edge incidence, opposite neighboring winding, positive volume per component and declared millimeter bounds.
- `node import-extremes.mjs`:99 additional image/STL preset/extreme cases with full mesh and assembly checks. Exact measured source socket dimensions reconstructed.
- Each full assembly check:25 azimuths over360°,250 pair intersections with negligible volume, lower-shoulder and bonded-cap retention overlap, axial end play, loading/insertion paths,3 source-fit socket gauges,2 shoulder stops.20 nondamaging snips release exactly5 parts+frame; flat parts disjoint;48 sampled bed-column tests.
- `node browser-test.cjs`: actual production file-picker PNG/JPEG/ASCII/binary STL imports, actual STL downloads, transformed bytes/signatures different from no-import, JSON regeneration matches preview/download. Malformed/truncated/open/nonmanifold/concave/overcomplex/out-of-range inputs rejected with export disabled; recoverable remove/reset. Each per-part STL parsed. Phone320/390px no overflow, reachable exports/imports, real touch orbit/pinch.
- `node studio-test.cjs`: all presets, shape/text/icon/SVG, actual ZIP contents parsed, undo/redo, named saves/reload, portable image/STL JSON, missing payload blocked, all views, dark theme persistence, keyboard focus, collapsible sections, desktop374px left panel and phone preview-first, worker loading abort/reload.
- `node axis-test.cjs`: real browser Y-up/negative-Z synthetic STL orientation and exported geometry match expected original. Axis change clears attached file.
- `node hole-check.mjs`: Boolean probe volumes confirm imported white hole remains unengraved while dark ring cuts actual deck solid.
- `node stale-test.cjs`: rapid edits match exact latest result; invalid edit cannot export last-good result; reset exact. Mixed worst-case wide mast/thick sheet/minimum radial/axial play/tall tail checked at73 positions.
- Gallery every inline script compiled with `new Function`; new entry exactly once/newest/STL; all295 earlier entries unchanged. Combined gallery/app routes loaded without JS errors. Root predeploy copied296 apps,0 failures/skips. SHA-256 compares all47 app production files and root gallery against deploy tree.

Machine-readable JSON reports, synthetic fixtures and screenshots are included. Browser tests ran against the actual Vite production bundle under its configured base path, not merely development source. No runtime errors or remote requests in app generation/import tests.

## Not performed

No physical print, printer/material fit calibration, wind response/alignment, aerodynamic load/stability, bearing friction, adhesive strength, impact, fatigue or durability testing. Correctly cured adhesive is required to position and retain keeper; loose keeper is not positively seated. Computational collision/manifold checks do not establish those properties. Source reference has mesh defects and was used only as a measured design reference, not repaired/re-exported.
