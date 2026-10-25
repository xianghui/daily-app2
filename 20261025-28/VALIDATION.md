# Validation — Divergent Drift

All checks below were run against this app's generated geometry and production Vite assets under `/daily-app2/20261025-28/`.

- Geometry: **132 parameter cases**, including three presets and all 128 min/max field corners across ergonomic shapes. **35 imported-output cases**, including both STL fixtures, threshold/height relief and engraving.
- Independent binary STL checks: exact byte lengths, finite nondegenerate triangles, normal/winding consistency, welded edge incidence exactly two and opposite direction at 0.00001 mm, positive enclosed volume per component, topology, separate printable parts and float32 print-plate bounds.
- Mechanism: 41 positions in representative rolling sweeps; no unwanted solid intersections. Five lowered contact probes meet the rails before penetrating further; vertical release remains clear. Axle path decreases monotonically, while rails rise. Min floor, rail wall, cone overhang and isolated import keep-out verified. Export layout parts do not touch.
- Browser downloads: **24** actual downloaded STL cases; downloaded fingerprints match the UI and exact JSON-regenerated current model. PNG/JPEG pixels, thresholds, depths, crop, physical scale, STL footprint/height/rotation/placement alter geometry versus defaults. Every individual part is checked.
- Real file picker rejects malformed/truncated/open/nonmanifold/concave/excessive input, invalid dimensions/transforms and empty silhouettes; reset/replace/remove recover. Invalid and stale states disable exports.
- Features: **20** feature models checked through mesh and mechanism validators. Presets, bounded variations, ergonomic shapes, text, searchable icon, SVG ring holes, raised/engraved/background controls, portable asset JSON, undo/redo, persisted named designs, ZIP contents, isolated/exploded/assembled/print views and saved dark theme pass.
- Additional checks: every one of seven physical fields alters export bytes; imported named image survives reload; missing image payload explicitly requests reattachment; Y-up and negative-Z imported source paths work; motion-position control moves preview without changing exports; fixed preview contact gap is disclosed.
- UI: 374 px left rail and right viewer, focus and collapsible controls, reduced-motion style, 320/390 px preview-first phones with no horizontal overflow, real touch orbit/pinch and reachable image/STL imports and downloads. Screenshots are stored alongside this report.
- Worker-loading failure and malformed JSON disable export; reload/reset recover. No runtime errors or external requests in the local-production browser tests. Bundled synthetic sample files only.
- Gallery: all existing 155 entries preserved in order; new entry exactly once, category `stl` first, inline scripts compiled and browser render/search checked. Combined root build contains all 156 app folders and byte-identical new-app assets.

Reproduce: `npm test`; `npm run predeploy`; `node serve-test.cjs`; then `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node resilience-test.cjs`, `node additional-test.cjs`, `node gallery-validate.cjs`, `node gallery-test.cjs`. Root build: `npm run predeploy` in the parent, then `node root-check.cjs` here.

**Not performed:** physical printing, gravity-driven travel, contact/friction/feel, drop, wear or fatigue testing. Computational mesh/contact validation does not establish physical print performance. No universal tolerance, precision-mount or guaranteed autonomous-rolling claims.

## Publication

Root `npm run predeploy` and `npm run deploy` succeeded: 156 apps, zero failures/skips. Live https://xianghui.github.io/daily-app2/20261025-28/ was exercised with actual PNG/JPEG/ASCII-STL/binary-STL uploads and generated downloads. Public worker/WASM, exact current geometry fingerprints, mesh/mechanism validation, ZIP with current assembly notes and the gallery entry all passed. See `publication-validation.json` and `publication-test.cjs`.
