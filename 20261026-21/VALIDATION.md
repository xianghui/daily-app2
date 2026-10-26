# Validation — Pinwheel Pause, 2026-10-26

All tests below are computational/browser tests, **not physical printing**.

- Individual `npm run predeploy`: PASS.
- `geometry-validation.json`: 68 parameter cases (defaults + presets + all 64 extrema), 30 imported-output cases. Every separate part and print plate checked for nonempty finite triangles, normals, nondegeneracy, mm bounds, exactly two opposing incident triangles per welded edge, positive component volumes and expected components. Mechanism checks include collision-free pose approaches, intentional pallet catching, end-stop overtravel, vertical release and import isolation.
- `transfer-validation.json`: all 15 discrete radius/reach combinations, two successive alternating catch-transfer paths each; conservative continuous pin/gate clearance and actual mesh intersection samples. Hand-guided motion may include back-off. Not a dynamics/force/friction test or a claim of equal-step indexing.
- `browser-validation.json`: actual production bundle, PNG/JPEG/ASCII/binary picker imports and real STL downloads, threshold/depth/pixel/transform differences, exact preview/download/JSON regeneration hashes, invalid inputs recoverably block export, reset reproducibility, per-part exports, 390/320 phone viewport, actual touch orbit/pinch. No runtime errors or external requests.
- `feature-validation.json`: all presets, variations, silhouettes, text/icon/SVG and engraving, portable image/mesh JSON round trips, named saves and reload, undo/redo, all actual ZIP STLs, independent part downloads, views, theme, colour-only swatches, drag/drop, up-axis transforms, collapsible sections, keyboard focus, latest-worker-state and invalid export gating.
- `additional-validation.json`: every dimension changes real geometry, preview motion controls, named imported artwork survives reload, missing payload demands reattachment, upside-down STL import, 374 px desktop rail, preview-first phone layout, no overflow and reduced motion.
- `stale-import-validation.json`: delayed old image normalization cannot overwrite a newer selection.
- `resilience-validation.json`: aborted production worker blocks export; reload recovers; all six SVG marks affect real geometry.
- `hole-validation.json`: actual boolean solid probes verify preserved white ring center and raised/engraved dark ring.
- Gallery/root-stage reports record preserved entries, syntax/runtime checks and exact combined-site staging. Final combined-root browser report exercises built-in and all four required import formats again.

No physical print, material calibration, friction, force, wear, fatigue or durability test was performed. Parts are deliberately non-captive and need manual assembly/level use. The preview endpoint transition is explanatory, not a full transfer dynamics simulation.
