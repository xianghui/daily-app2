# Validation — Branch & Breathe, 2026-10-25

Executed locally against real generated geometry and real Chromium browser imports/downloads. No physical print was performed.

## Passed

- `npm run predeploy`: production build, bundled JS/WASM/fonts; no missing external service required. Manifold Node-module externalization and large-chunk messages are build warnings, not runtime failures.
- `npm test`: 142 default/preset/minimum/maximum/corner/variation parameter cases and 30 image/STL-derived cases, including engraved height geometry. Independent binary STL parsing checks finite vertices, nondegenerate faces, normalized consistent outward normals, exact welded two-face edge incidence, connected-component positive volumes, and independently calculated millimeter bounds. Every intended solid is individually checked.
- Mechanism: all segments/junctions of every generated route sampled with CSG collision checks; nib-to-floor 0.15 mm, handle clearance 1 mm; closed ends block lateral passage, vertical lift releases; print plate parts do not intersect. Analytic running clearance ≥0.25 mm/side, continuous floor ≥3 mm, outside wall ≥3.85 mm, nonconnected interlane walls ≥5.7 mm. Imported geometry changes only the isolated palm well, not stylus or grooves.
- `node browser-test.cjs`: actual PNG/JPEG, ASCII/binary STL file pickers; real downloaded STLs compared to default and to final-preview geometry fingerprints. Pixel content, threshold/depth/crop, STL scale/rotation/placement alter exported meshes; replace/remove/reset recover correctly. Open/nonmanifold/concave/truncated/oversized/excessive-dimension/triangle-count files, empty silhouettes, unsafe placements and nonfinite controls block exports. Final meshes and dimensions are independently parsed. Phone 320/390 px, touch orbit and pinch, and phone PNG/STL downloads passed. No runtime exceptions or remote requests.
- Production bundle: `TEST_BASE=http://127.0.0.1:5283 TEST_REPORT=production-browser-validation.json node browser-test.cjs` passed the complete import/download/geometry/mobile suite. The subsequent viewer-only transparency/gradient change was verified with `node final-smoke.cjs` against the latest built bundle.
- `node feature-test.cjs`: all presets, representative bounded variations and palm shapes; text, searched icon, SVG ring with interior hole, engraving and background inversion; portable image/STL JSON round trips; named local designs across reload; undo/redo; actual per-part/ZIP contents; assembled/exploded/isolated/plate views; persistent theme; colour neutrality; drop import; Y-up STL orientation; collapsible sections; keyboard focus; latest-build and invalid-edit export guards. Each personalized export receives independent mesh/mechanism checks.
- `node final-smoke.cjs`: latest production bundle desktop 374 px left rail/right viewer, phone 320 px preview-first stacking, no overflow, reachable exports, saved light/dark rendering, and a deliberately blocked worker load produces an explicit error with export disabled.
- `node gallery-test.cjs`: every nonempty inline script compiled by Node `new Function`, unique newest `20261025-4` entry with area `stl`, 131 prior entries preserved exactly, STL Generators first, search/render without errors.
- Root `npm run predeploy`: 132 built/copied, zero failed/skipped; root gallery byte-matches source, every app has its own deployment page, new app byte-matches its latest built index.

## Issues found and resolved

- SVG safety validation initially rejected the required SVG namespace URL. It now permits `xmlns` while still rejecting external resources and executable attributes. SVG loading/engraving checks then passed.
- A dark-background test on black transparent artwork correctly produced an empty silhouette. The test now confirms this recoverable rejection, then verifies genuine inverted JPEG geometry.
- The keyboard-focus test now actually uses Tab (programmatic mouse-modality focus need not match `:focus-visible`). Keyboard-visible focus passed.
- Independent Z-bound expectations were corrected to include the actual built-in raised grip; all exported dimensions independently pass.

## Limitations

No physical testing of fit, friction, tactile feel, wear, strength or durability. This is a deliberately loose, removable stylus, not retained/captive hardware. STL import supports a documented strict convex flat-bottom contract and rejects unsupported geometry without claimed repair. Image/SVG personalization is sampled 2D-to-relief, not photo reconstruction or exact traced-outline reconstruction. Printing tolerances depend on the actual printer/material; print the full-size River Pause coupon first.

Machine-readable evidence: geometry-validation.json, browser-validation.json, production-browser-validation.json, feature-validation.json, final-smoke-validation.json, gallery-validation.json and root-deploy-validation.json. Screenshots show desktop, phone, dark theme and mechanism views.
