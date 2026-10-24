# Executed validation

- `npm run predeploy`: production Vite build passed. Runtime worker, local WASM and fixtures bundled.
- `npm test`: 142 parameter cases (default, min/max, three presets, all 128 corners, eight deterministic variations) and 24 image/STL-derived cases passed. Independent binary STL parser verified welded closed manifolds, consistent winding, normalized stored normals, positive per-component volumes, finite/nondegenerate triangles, exact mm bounds and bed-flat separate parts.
- Mechanism: each case passed eleven nonintersecting free-travel poses, continuous analytic side-wall distance/tangent contact, forward-overtravel obstruction, vertical lift release, separate print layout and import isolation. No physical friction, print, forces or wear measured.
- Final production `browser-test.cjs`: PNG/JPEG and ASCII/binary STL file picks; actual STL downloads; pixel, threshold, depth, crop, scale and transform changes; preview/export signatures; per-part manifold checks; invalid dimensions, malformed/truncated/open/nonmanifold/concave/excessive inputs; empty relief and unsafe placements; replace/remove/reset. All passed.
- Final production `extra-browser.cjs`: all three presets and four random variations passed mesh/mechanism checks; undo/redo; four portable import save/open round trips; parts ZIP; preview-colour neutrality; drag/drop. Passed.
- Final production `mobile-sheet.cjs`: 320 × 740 controls collapse/expand, all five tabs, no horizontal overflow, always-reachable export. Passed. Main browser suite also verified 390 px layout, actual touch orbit/pinch and phone image/STL imports/downloads.
- `gallery-test.cjs`: every inline script compiled with `new Function`, new entry exactly once in first position with area `stl`, 130 previous entries preserved (131 total), correct URL, STL Generators category first, search/render without runtime errors.
- Initial development-browser attempts were invalidated by live source edits/hot reload. These were superseded by complete passing checks against the frozen production build.

Evidence: `geometry-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `interaction-validation.json`, desktop/mobile/assembled screenshots. Browser tests use only synthetic local fixtures.

**Geometry/interaction checks are not physical print testing.** The loose roller is intentionally removable. Friction-dependent lodging is experimental, never claimed to be a certified clutch or lock.

## Publication

Root `npm run predeploy` and `npm run deploy` packaged/published all 131 apps (zero failures/skips). Root index and new app build match the deploy tree byte-for-byte. GitHub Pages initially returned 404 while its deployment was in progress; the subsequent public-browser check passed: HTTP 200, exact validated STL download, correct newest gallery item, all 131 entries and no runtime errors. See `root-deploy-validation.json` and `public-validation.json`.

`interaction-test.cjs` additionally verified visible assembled roller travel and spin (off-center finger dimple), preview-pose neutrality for printable geometry, and two different same-format synthetic PNG pixel patterns producing distinct validated mesh exports.
