# Validation — Bridle & Glide

## Completed before publication

- `npm run predeploy`: production build passed; worker/WASM served at actual base prefix.
- `npm test`: **37** cases covering defaults, all three presets, individual endpoints, combined extrema, all ergonomic silhouettes and image/STL-derived extrema. Independent float32 exported-STL topology, outward winding, component volumes and mm sizes passed.
- Per case: one connected card, two individually closed parts, two-part clean plate; eight snips yield exactly carrier + two intact parts. No runner fragments. Bed footprint, card envelope, unobstructed slot and protected art backing checked. 81 axial insertion positions and seven vertical-release positions checked with actual solid intersections. Both side gaps, heel stop and lateral constraints checked. No axial/vertical lock asserted.
- Production browser: **25** actual checked STL download variants; PNG/JPEG/ASCII/binary file-picker workflows, threshold/depth/crop/shape/scale/rotation/placement differences vs no-import; exact preview fingerprint and JSON regeneration matching; recoverable invalid/empty/truncated/excessive/nonmanifold/concave inputs and invalid transforms.
- Feature browser: **16** regenerated/checked variants, all presets/shapes, text/icon/SVG, inverted backgrounds, portable image/JPEG/ASCII/binary JSON round trips, local named designs, undo/redo, per-part STL and real ZIP contents, isolated/assembled/exploded/plate views, saved dark theme, preview-only colour neutrality, drag-drop, Y-up orientation, sections/focus and stale export blocking.
- 320/390 px: all tabs no horizontal overflow vs configured viewport, preview-first, reachable exports/JSON, touch orbit and pinch demonstrably change canvas; desktop 374 px left rail/right viewer.
- Worker-script abort disables export, reload recovers. Delayed old image selection cannot replace newer source. Detached source preview ignores late resize callbacks. Missing payload/invalid portable design errors recover.
- Exact solid probe: imported SVG ring center preserves backing while dark ring band removes actual handle material. All six bundled icon exports differ.
- Actual public reference re-parsed, hashes/dimensions/components recorded, source cross-sections rendered and inspected. `reference-analysis.json` maps measured sheet/socket/runner dimensions to redesigned controls. No raw source asset redistributed.

## Evidence

`geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `mobile-layout-validation.json`, `hole-validation.json`, `resilience-validation.json`, `resize-cleanup-validation.json`, `stale-import-validation.json`, `portable-errors-validation.json`, logs, screenshots and reproducible test scripts.

## Not performed

Physical printing, fit, friction, strength and durability. This is a hand-held open-joint educational kit, not a captive fidget, structural connector or freestanding display. Proposed FDM gaps depend on material/printer and require a calibration print.
