# Validation — 2026-11-06

- `npm run predeploy`: passed, locally bundled worker/WASM/fonts.
- `npm test`: 35 cases covering every preset, individual field bounds, all-min/max, three outlines, image/STL defaults and extrema. Each card/part/clean plate parsed from float32 STL: finite, nondegenerate, outward, positive per-component volume, two oppositely directed face incidences per welded edge (1e-5 mm).
- Independent mechanism tests: exact nominal equal-area polygon coverage, two noncolliding assemblies, 28 lift-in samples/case, solid .8mm pocket floors, open pockets/finger bores in card and clean parts, support-free bed footprints, correct bounds and sixteen cuts releasing carrier + four undamaged parts without fragments.
- Actual production-browser file pickers and downloaded STL checked against current UI fingerprint and Node regeneration from saved JSON. PNG/JPEG, threshold/depth/crop/relief, ASCII/binary STL, unit confirmation, scale/rotate/place/reset, invalid/nonmanifold/concave/truncated/excessive inputs, empty silhouettes and recovery passed.
- Mobile 320/390 px all tabs, preview-first, no scaled/overflowing viewport, reachable exports/JSON; touch orbit/pinch, desktop left/right, reduced motion passed.
- Worker-load failure/reload, six distinct icons, portable missing-asset errors, stale delayed imports, detached-source ResizeObserver cleanup and SVG ring-hole Boolean probes passed.
- Full reports: geometry-validation.json, browser-validation.json, feature-validation.json, mobile-layout-validation.json, resilience-validation.json, portable-errors-validation.json, stale-import-validation.json, hole-validation.json, resize-cleanup-validation.json.
- Reference actually parsed with hashes/sections; source anomalous edges disclosed. No source mesh redistributed or repaired.

These are computational geometry and browser tests only. No physical print, fit, strength, durability, assembly or handling tests performed.

Root predeploy built 475 apps with 0 failures/skips. Gallery inline script compiled, newest entry exactly once, all 474 prior entries unchanged. Combined production gallery/link and five actual default/import downloads passed. Root gh-pages publication returned Published.

GitHub Pages run 42091121901 succeeded. Public app and gallery verification passed: exact production script, default and all four import formats, actual manifold STL downloads and zero browser runtime errors. See public-validation.json and public-gallery-validation.json.
