# Verification — 2026-10-28

## Passed computational tests

- `npm run predeploy`: production build with bundled worker, WASM and fonts under `/daily-app2/20261028-7/`.
- `npm test`: **12 parameter cases** (all three presets, bounds and six variations) plus **30 imported-image/STL cases**. Every card and five individual parts independently parsed from binary STL: correct byte count, finite vertices, nonzero triangles, normalized normals, consistent outward winding, positive component volume, two opposite-directed incidents per welded edge (1e-5 mm tolerance), closed component, millimeter dimensions and Z=0.
- CSG checks for each: all assembled printed parts disjoint; full sampled vertical mast insertion; shoulder stop engagement; card exactly contains parts; no flat part overlaps; **twenty tab-neck cuts produce six components** (carrier plus five pieces); declared card envelope; seven actual thread passages; pans byte-identical; marked beam mass center below suspension; manual ±8° support-collision probes. Not load/force/dynamic tests.
- `browser-test.cjs`: **28 real downloaded STL cases**, regenerated from saved current JSON and byte-hash matched to current preview/export state. Real PNG/JPEG/ASCII/binary file-picker imports; image content, threshold, depth, crop, scaling, mesh rotation and placement change geometry. Replace/remove/transform reset/full reset recover correctly. Bounds/min/max downloaded and checked. **10 malformed/unsupported cases** reject and recover, including truncated/open/nonmanifold, excessive file/pixels/triangles, incorrect dimensions and concavity. Zero runtime errors or external requests.
- `feature-test.cjs`: **20 checked browser-generated models**, presets, variation, silhouettes, text/icons, SVG, engraving/inversion, imported-asset JSON roundtrips, named designs across reload, undo/redo, drag/drop, Y-up import, all view modes, theme persistence, preview-only colour behavior, section collapse, keyboard focus and current-worker/stale export guards. Actual ZIP unpacked, every contained STL checked; actual per-part STL buttons exercised.
- `hole-test.cjs`: final-solid volume probes verify the SVG ring's center is unraised and unengraved while ring pixels really add/remove material. Both outputs pass manifold checks.
- `portable-errors-test.cjs`: missing image payload explicitly requests reattachment; invalid transforms/dimensions/app identifiers block exports; reset recovers.
- `resilience-test.cjs`: production worker load intentionally aborted: errors shown and export disabled; reload recovers. All six bundled icons yield distinct geometry.
- `stale-import-test.cjs`: delayed image normalization cannot overwrite a newer file.
- `studio-layout-test.cjs`: 374 px left controls / right viewer, isolated views, saved theme/focus, reduced motion, phone preview-first and no overflow. Browser suite additionally performs real CDP touch orbit and pinch, image/STL phone imports and downloads at 390 px, and checks 320 px export access.
- Screenshots inspected: actual reference mesh cross-sections, connected card, desktop assembly and full phone editor. Real tabs/rails are visible; no fake disconnected card border.
- Reference downloaded anew, parsed and cross-sectioned. Hash, actual dimensions, two source edge-adjacency components, source defects, measured sheet/rail/bridge levels, licence and exact redesign decisions are recorded in `reference-analysis.json` and README. Raw third-party mesh is not redistributed.

## Combined site

- Root inline scripts compile with `new Function`; 218 prior entries preserved, new STL entry occurs exactly once and is newest.
- Browser gallery test confirms all 219 cards, STL category first, correct new link, search/recovery and no runtime errors.
- ROOT `npm run predeploy`: **219 built/copied, 0 failed, 0 skipped**, including root index and new app.
- Combined `deploy/` is served separately under its real `/daily-app2/` prefix and the real browser import/download suite is rerun; see `combined-browser-validation.json`.

## Deliberate limits / not performed

**No physical print, assembly-force, knot-security, load, fatigue, weighing calibration or dynamic equilibrium test.** This is a decorative five-printed-part kit requiring user-supplied thread, not an instrument. Thread preview segments/knot locations are illustrative, not printable geometry or exact cut lengths; route thread outside the beam face/lower edge. Clearance is a starting range requiring printer/material calibration. Full card height 280–320 mm requires an appropriately sized bed; individual STLs support smaller printers. STL colours are preview-only. Images are bounded 20×20 sampled relief, not full photo reconstruction or exact tracing. Imported STLs must meet the explicit convex/flat-bottom integration contract; unsupported inputs are rejected rather than repaired/hulled.

Pre-existing untracked `20261027-17/` and `20261028-6/` and the pre-existing gallery entry for `20261028-6` were left intact; this run does not certify those unrelated app folders.
