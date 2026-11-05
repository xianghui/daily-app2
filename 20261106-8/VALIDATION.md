# Validation — 2026-11-06

No physical print, fit, force, wear, strength or friction tests were performed. These are computational/browser results only.

- `geometry-validation.json`: 55 cases: defaults, all three presets, every numeric endpoint, all-min/all-max, three outlines, 16 mixed breadth/reach/angle/allowance extremes, image- and STL-derived default/min/max. Every card, clean panel and translated float32 clean plate passes independent binary-STL length, finite coordinates, nondegeneracy, unit normal/winding, positive volume per component, welded edge incidence/direction and dimensions checks.
- Each case also checks real connected-card bounds; nonoverlapping clean parts; upper-footprint support; eight actual snip cuts yielding exactly carrier + two unharmed panels; no stray runner fragments; no socket blockage; 81 vertical insertion positions; six tiny normal-gap probes; lateral/axial restraint after clearance play; minimum cheeks, neck and art backing. Unsupported card-envelope combinations are rejected. No physical retention claim: the two panels lift apart vertically.
- `browser-validation.json`: actual production-bundle file-picker uploads of PNG/JPEG and ASCII/binary STL; changed image content, threshold, depth, crop, size, rotation and XY placement produce changed downloaded geometry. Each download is parsed, checked against preview fingerprint and regenerated from its saved JSON; every part and assembly is rechecked. Reset restores original bytes. File size/pixel/triangle/dimension limits, wrong content, truncation, open/nonmanifold/concave meshes, empty images and invalid transforms all block export recoverably. 320/390 px touch orbit/pinch, imports and reachable downloads checked with no page errors or remote runtime requests.
- `feature-validation.json`: every preset/outline; text, icons and SVG; background inversion; portable PNG/JPEG/ASCII/binary assets; named local designs through reload; undo/redo; real ZIP decompression with all three STL files validated; individual downloads; every view; persisted dark theme; preview colour geometry-neutral; drag/drop; Y-up STL; collapsible sections; keyboard focus and stale-edit gating.
- `hole-validation.json`: probes confirm SVG ring center stays backed and dark band becomes an actual Boolean engraving.
- `mobile-layout-validation.json`: all editor tabs and expanded print guide at 320/390 px; document and layout width bounded by actual configured viewport; preview first; exports and real JSON action reachable; reduced motion; desktop 374 px left rail/right viewer.
- `resilience-validation.json`: production worker abort disables export; reload recovers; six distinct original bundled icons affect geometry.
- `portable-errors-validation.json`, `stale-import-validation.json`, `resize-cleanup-validation.json`: missing portable payload, invalid saved transform/app/dimensions, delayed import replacement and queued resize callbacks after source preview disposal recover correctly.
- `gallery-validation.json`: root inline script compiled with `new Function`; exactly one new STL entry, correct folder, STL category first; all 478 prior entries unchanged.
- `combined-files-validation.json`: root deploy index matches source; all 479 gallery app folders present. Root predeploy reports 479 built, zero failures/skips.
- `combined-gallery-validation.json`: combined gallery renders 479 entries and new link loads the actual production worker without runtime errors.
- `combined-production-validation.json`: full import/download/mesh/mobile suite repeated against the combined root deploy output and real base-path prefix.

## Fit finding corrected during development

A shallow-angle dovetail does not constrain axial movement immediately: free play equals normal flank gap / sine(flank angle). The initial test wrongly expected collision at 1.5 mm for every fit. Expanded mixed extrema exposed this assumption; the model/UI/instructions now disclose analytic clearance play, and independent collision probes test restraint beyond that play. This was a test/interpretation correction, not a claimed physical calibration.

Source meshes remain read-only. The public reference has 57 anomalous edges; its raw triangles were not reused or represented as repaired. Only the original reconstructed app geometry is exported. See fresh `reference-analysis-raw.json` and actual section-view evidence.

## Public publication

Root `npm run deploy` reported Published. GitHub Pages build/deployment run 42127286161 completed successfully for gh-pages commit `2fd19bab32a6566b05f249398e7389744fa3d912`. Public URL returned HTTP200 and the exact current production script path. `public-validation.json` verifies actual default/PNG/JPEG/ASCII/binary STL downloads and changed geometry; `public-gallery-validation.json` verifies all 479 entries and the new link. No public runtime errors.
