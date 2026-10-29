# Validation — Skein & Cross / 20261029-33

## Computational checks completed

- Actual CC BY 4.0 reference STL downloaded and parsed, source license verified from GitHub, SHA-256 and measured sockets/sheet planes recorded. Three real mesh cross-sections inspected. Raw reference not bundled.
- `npm run predeploy` passes. Browser tests run against the production bundle at its actual base prefix, not just Vite development mode.
- 31 geometry/assembly cases: 8 built-in preset/shape/extreme cases, 8 image/STL cases, 15 additional import/min/max/mixed cases. Every card and clean part has finite nondegenerate triangles, closed opposite-directed two-face edges at 1e-5 mm welding tolerance, consistent normals, positive component volume and correct dimensions. Actual CSG tests verify distinct parts, sampled insertion, shoulder stop, protected ideal yarn spans, accessible tab cuts and three components after eight snips.
- 25 actual browser-downloaded STL variants validated and compared with the displayed signature plus independent JSON regeneration. PNG/JPEG source pixels, threshold, depth, crop and footprint change final geometry; ASCII/binary STL scale, rotation, placement and height survive into exports. Source unit confirmation gates integration. Replace/remove/reset works.
- 10 malformed/unsupported fixtures rejected: malformed SVG, truncated STL, open STL, nonmanifold STL, >2 MB file, false PNG, excessive pixels, >1,500 triangles, excessive dimensions and concave mesh. Empty silhouette, missing JSON payload, invalid dimensions/transforms and safe-zone violations also block export recoverably.
- All presets, three grip silhouettes, text, searchable icon and SVG marks; raised/engraved image holes checked with actual Boolean probes.
- Real per-part/ZIP downloads parsed. Image/STL JSON, named saves/reload, undo/redo, axis conversions and stale-result gating tested. Worker-script abort blocks export and recovers after reload.
- 374 px left control rail/right viewer, preview-first 320/390 px phone layout, reachable exports, actual touch orbit/pinch, no horizontal overflow, keyboard focus, collapsible sections and saved dark theme checked. App made no remote requests during local production tests.
- Root gallery inline script compiled with `new Function`; exactly one newest `stl` entry, STL category first, all 272 preceding entries preserved. All 273 app routes staged; new production asset hashes match `dist`.

Reports: `validation-report.json`, `extreme-validation.json`, `browser-validation.json`, `studio-validation.json`, `hole-validation.json`, `supplemental-validation.json`, `variation-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `root-stage-validation.json`. Combined/browser/public reports are added when those runs complete.

## Limits

No physical print, winding, yarn snag/friction, bundle release, adhesive, strength or fatigue tests. The yarn line is an ideal loose route only; cylinder clearance and open outboard tip zones do not simulate flexible yarn. Wind loosely and smooth edges. .3 N is an untested proposed handling limit, not a rating. Adhesive is required at one joint. Calibrate fit using the two clean parts before printing a whole card. No universal tolerance or full 3D-from-photo claim.

## Publication verified

Root `npm run predeploy`: 273 built, zero failed/skipped. Root `npm run deploy`: Published. GitHub Pages run 40899008914 completed successfully. Initial public 404 was deployment propagation; after rollout, the public app returned 200, locally bundled worker/WASM ran, actual PNG/STL imports produced changed, closed-manifold STL downloads matching preview signatures, and the public gallery rendered all 273 entries with this app first. See `public-validation.json` and `pages-deployment.json`.
