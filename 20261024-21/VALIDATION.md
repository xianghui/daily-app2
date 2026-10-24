# Belt Reverie validation — 2026-10-24

## Passed before publishing

- Individual `npm run predeploy`: Vite production build passed with local worker/WASM dependencies.
- `npm test`: **142** cases (defaults, min/max, three presets, 128 parameter-range corners, eight variations) and **24** image/STL-derived cases. Every exported component checked for finite nondegenerate triangles, normalized normals, consistent outward winding, positive volume, connectedness, welded edge incidence exactly two, independent millimeter bounds and bed-facing print layout.
- Boolean checks: all 15 print-layout pairs separate; nine full-turn reference poses per case; no rotating-part intersections; cap/post interference intentional and bounded by chosen allowance; roof/socket seating correct; belt slack, flange overlap, axle walls and axial gaps checked. Imported geometry cannot alter drums, belt, caps, posts or other structural regions.
- `browser-test.cjs`: **28 actual STL downloads**, PNG/JPEG and ASCII/binary STL file-picker imports, pixel/threshold/depth/crop/scale/placement changes, export-preview identity, displayed dimensions, reset/remove/replace, min/max settings, recoverable bad dimensions and unsafe transforms. Ten file rejection cases: unsupported type, truncated, open, nonmanifold, oversized, fake content, excessive pixels/triangles, source dimensions and concavity. Empty silhouettes rejected separately. Phone file imports and downloads, one-finger orbit and two-finger pinch zoom passed; no overflow at 320/390 px. No runtime errors or external requests.
- Production `TEST_BASE=http://127.0.0.1:5281 TEST_REPORT=production-browser-validation.json node browser-test.cjs`: the same workflow passed against built assets, not only Vite development mode.
- `extra-browser.cjs`: each preset and four random variations exported and independently checked, undo/redo passed, all four sample sources round-tripped through portable JSON with exact geometry restored, six per-part ZIP meshes parsed, illustrative same-direction drum poses updated, colour changes left export geometry unchanged, drag/drop passed.
- `mobile-sheet.cjs`: 320 × 740 touch viewport; collapsible controls, five tabs and always-visible export area passed. Desktop and phone screenshots inspected.
- Gallery: all inline scripts compile, exactly one new `stl` entry, newest-first, previous 124 entries preserved, STL Generators category first; 125 cards render and search works without runtime errors.
- Root `npm run predeploy`: **125 built/copied, 0 failed, 0 skipped**. Every gallery app has deploy/folder/index.html, root gallery matches source, new app matches dist and WASM is bundled.

Machine-readable details: geometry-validation.json, browser-validation.json, production-browser-validation.json, extra-validation.json, gallery-validation.json, mobile-sheet-validation.json and root-deploy-validation.json. public-validation.json records the post-publish live check when completed.

## Explicit limits

No physical print, friction, belt strain, fatigue, retention, force, wear or cycle tests were performed. The relaxed belt reference uses exact export meshes, but drum motion is illustrative and does not simulate belt circulation, pinch deformation or traction. The cap fit deliberately has negative radial allowance: it is a calibration-dependent press fit, not a certified locking snap. Flanges guide a slack belt during gentle use, not permanent capture. Two materials are required (TPU belt, rigid remaining parts), no purchased hardware. These are geometry/mechanism checks, not a universal “ready-to-print” guarantee.
