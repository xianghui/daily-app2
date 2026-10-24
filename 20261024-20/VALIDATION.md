# Wedge Dwell — validation, 2026-10-24

## Observed passing checks

- React/Vite individual predeploy build.
- 78 parameter cases: defaults, min/max, three presets, all 64 parameter corners, eight bounded variations.
- 24 import-derived mesh/mechanism cases: threshold/height-map images, ASCII and binary STL fixtures over default/min/max/preset configurations.
- Independent binary-STL parsing: finite coordinates, normalized outward normals, nondegenerate faces, positive enclosed volume, per-component connectivity, closed directed edge incidence after 1e-5 mm welding, Euler characteristic and expected millimeter bounds.
- 31 pre-contact insertion collision probes and 401-point bounded deflected-jaw envelope for every geometry test case. Separate parts are nonintersecting; root clearance, intentional elastic interference, trailing shoulder and imported-feature isolation checked. These are geometric envelopes, not contact-force simulation.
- 24 actual browser STL downloads, including defaults, content/threshold/depth/crop/scale changes, image and STL imports, transformed and reset models, min/max parameters, per-part exports and phone imports/exports. Exact final-preview fingerprint and UI dimensions match parsed output.
- PNG and JPEG picker input, ASCII and binary STL input with mandatory mm confirmation, source previews, replace/remove/reset and drag/drop.
- Ten recoverable malformed/excessive browser fixture rejections, plus empty silhouette, empty numeric fields and out-of-safe-zone transforms. Invalid export stays disabled.
- Browser presets and four random variations pass the same mesh/mechanism checks; image/STL portable JSON round trips, undo/redo, ZIP parts and assembled pre-contact movement verified. Preview palette leaves geometry unchanged.
- Phone 320/390 px: touch orbit/pinch, import pickers, no horizontal overflow, collapsible controls, all tabs and fixed export accessible.
- No runtime errors or external requests during local browser suite.
- Root gallery: inline script compilation, exactly one new STL entry, newest-first, all 123 previous entries preserved, 124 rendered cards, search and STL-first grouping.
- Root predeploy: 124 apps packaged, no failures/skips, root HTML identical, new app and every previous entry have deploy/FOLDER/index.html.

Detailed results: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json and root-deploy-validation.json. Production/public browser results are recorded separately after their execution.

## Limits

No physical print, friction, force, wear or cycle tests performed. TPU response and finish must be calibrated. The key is intentionally loose/removable, not retained. Assembled preview stops at rigid contact; it does not pretend to simulate elastic spreading. Combined STL is geometry-only and cannot encode the two required print materials. Dependency audit found zero vulnerabilities; Vite reports its expected WASM Node-branch externalization and large Three.js bundle warnings. Browser execution verifies the browser branch works.

## Production and publication

The full browser import/export suite also passed against the root-packaged production build (`production-browser-validation.json`). Root `npm run deploy` reported Published. Public HTTPS returned HTTP 200; a real public browser loaded the app, worker and WASM, imported the bundled PNG and binary STL, downloaded and independently validated both changed outputs, and rendered the newest-first 124-entry gallery with no runtime errors or failed requests (`public-validation.json`). Independent X/Y/Z bounding formulas passed the full 102-case geometry suite.
