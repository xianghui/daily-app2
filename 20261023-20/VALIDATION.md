# Validation — 2026-10-23

Final concept: **Bow & Settle**, not the discarded oval-spring prototype. All reports and screenshots were regenerated for the final single-column geometry.

- Individual `npm run predeploy`: passed (Vite production bundle and local Manifold WASM).
- `npm test`: **78 parameter cases + 24 import-derived cases** passed. Includes all presets, all 64 corners, eight variations; independently parsed binary STL manifold/winding/volume/dimension checks; per-part export; normal strip/faceted thickness and curvature bounds; material/air probes, pad unions/separation, 0/0.5/1 mm constant-arc-length bow envelopes and solid-difference import isolation checks.
- `browser-test.cjs`: passed. Actual PNG/JPEG/ASCII/binary file-picker imports, generated downloads, signatures versus no-import, conversion/transform changes, individual export, invalid/oversized/truncated/nonmanifold/concave input rejection, empty image and unsafe transforms, recoverable resets, phone imports/downloads, touch orbit/pinch and 320/390 px overflow checks.
- `extra-browser.cjs`: passed. Three presets, four live variations, portable JSON round trips for all four input formats, undo/redo, drag/drop and colour-neutral geometry.
- `mobile-sheet.cjs`: passed at 320×740. Every tab, collapse/expand, no horizontal overflow, visible fixed export action and explicit physical-testing caveat.
- `gallery-test.cjs`: passed. Inline script compiled, newest entry exactly once under `stl`, first section “STL Generators”, all **99 earlier entries retained**; 100 total cards, working search, no browser runtime errors.
- Root `npm run predeploy`: **100 built / 0 failed / 0 skipped**. Root gallery plus all 100 registered app folders verified in deploy/.

The initial collision-test assumptions incorrectly sampled inside the legitimate upper grip; probes were moved to the free column span. The initial import-isolation test compared triangles, which can differ after legal planar retriangulation; it was replaced with boolean added/removed solid-volume tests in the protected mechanism region. Final tests pass without weakening the physical isolation requirement.

Digital checks are not FEA, physical printing, fatigue testing, a calibrated force curve or a validated safe stroke. No physical print or mechanical force test was performed. Material guidance and an intentionally small 0.5 mm initial calibration press are provided in the editor and README.

Build warnings: Manifold's optional Node module branch is externalized for the browser; the locally bundled WASM branch is exercised by real browser generation/export tests. The Three.js/React main bundle triggers Vite's size advisory. gh-pages 6.1.1 avoids the audit-reported newer transitive dependency issue; npm audit reports zero vulnerabilities, with legacy glob/inflight deprecation notices remaining.

Production bundle replay: the complete browser import/error/mobile/download suite passed against the root deploy/ tree (23 actual STL downloads). Production mobile-sheet checks also passed. Root deploy command completed with “Published”; GitHub Pages build and public verification are checked separately.

Public verification passed at https://xianghui.github.io/daily-app2/20261023-20/ : actual bundled image import and generated manifold STL download, newest gallery entry, zero browser runtime errors and failed asset requests. GitHub Pages deployment run 39944078623 completed successfully.
