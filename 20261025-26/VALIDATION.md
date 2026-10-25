# Corner Cadence validation

2026-10-25, production build served at `/daily-app2/20261025-26/`.

- `npm run predeploy` passed; bundled worker, local WASM/fonts and exports loaded without runtime or HTTP errors.
- `npm test`: 132 parameter cases (128 range corners plus default and presets), 35 image/STL-derived cases; independent binary-STL checks on combined layouts and every part: finite nondegenerate triangles, matching normals/winding, welded edge incidence, positive component volumes, intended genus and mm bounds. All four printable parts are independently connected and manifold.
- Manifold intersection tests sampled the preview stroke for defaults, presets, representative extrema and imported outputs, plus pin/lever vertical release and protected personalization isolation. `stop-check.mjs` independently sampled the full ±20° slot stroke: 1,944 part-pair checks across four models with zero intersection volume. No vertical retention is claimed.
- Real production-browser file pickers: PNG and JPEG, complete ASCII and binary STL. Changed pixels/threshold/depth/scale/rotation/placement measurably changed downloaded STL; exact UI fingerprint matched bytes and JSON regeneration. Replace/remove/reset recovery passed.
- Malformed/truncated/open/nonmanifold/concave/oversize/overcomplex sources, bad dimensions/transforms, empty images and missing portable payloads block export; reset/replace restores usability. Worker-load failure and malformed JSON recovery passed.
- Presets and bounded variations, shapes, text/icon/SVG marks, raised/engraved holes with actual-solid probes, crop/background, up-axis, undo/redo, named saves, JSON imported-asset round trips, per-part exports and real ZIP contents passed.
- Desktop 374 px LEFT controls / RIGHT viewer; collapsible sections, focus, reduced motion, saved dark theme, views and colour-only changes checked. Phone 320/390 px: no horizontal overflow, preview-first, reachable export/file pickers, real touch orbit/pinch and image/STL downloads passed.
- Gallery inline script compilation and browser render passed; exactly one new STL entry and all 153 previous entries preserved.

Reports: `geometry-validation.json`, `stop-validation.json`, `browser-validation.json`, `feature-validation.json`, `hole-validation.json`, `interaction-validation.json`, `resilience-validation.json`, `production-validation.json`, `gallery-validation.json`; screenshots alongside.

These are computational and browser checks only. No physical print, force, friction, fatigue, wear or universal-printer tolerance validation was performed. Pin preview lift is explicitly estimated positioning; lift-removable parts require horizontal hand-held use and space beneath the open tray slots. Calibration and assembly instructions are in README and exported ZIP notes.

## Publication

Root deploy built and copied all 154 apps with zero failures/skips. GitHub Pages run `40200895622` completed successfully. Public URL returned HTTP 200 and a real browser loaded the production worker/WASM, downloaded STL, matched its current-preview fingerprint and passed independent mesh validation with zero runtime/HTTP failures. The initial 404 was deployment propagation; the post-deployment retry passed. See `publication-validation.json`.
