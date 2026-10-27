# Tack & Twin validation

All checks below were executed against the final compact 140 × 205 mm default carrier, not just the initial prototype.

- `npm run predeploy`: React/Vite production build, bundled worker/WASM, local fonts and samples.
- `npm test`: 12 parameter cases and 30 imported-solid / image-derived cases. Card plus all five individual solids pass independent final binary-STL parsing, closed/opposite-directed welded edges at 1e−5 mm, finite/nondegenerate coordinates, unit normals, positive per-component volume, bounds and Euler checks.
- Separate assembly kernel tests: ten assembled pairs, 17 samples per seating path in assembly order, shoulder/slot restraint, separated flat parts, exact inclusion in card, 20 virtual snips yield six components. Calibration suggestions are not physical test results.
- `node browser-test.cjs`: 28 actual STL downloads (including each part), PNG/JPEG/ASCII/binary input pickers, changed pixels/threshold/depth/crop and mesh transforms, source defaults/reset, invalid inputs, out-of-zone placement, exact preview/export hash, exact portable-state regeneration and assembly tests. Phone 320/390 px, orbit/pinch, imports and downloads. No runtime errors or external user-data requests.
- `node feature-test.cjs`: every preset and bow shape, bounded variants, text/SVG and marks, undo/redo, JSON and named-design persistence, actual ZIP contents and individual exports, view states, theme, focus, sections, rapid/invalid edits and Y-up STL.
- `node hole-test.cjs`: actual boolean probes distinguish white ring hole from raised/engraved pixels.
- `node studio-layout-test.cjs`: 374 px left rail/right stage, isolated views, preview-only sail lift, reduced motion, phone preview-first and no overflow.
- `node resilience-test.cjs`: abort production worker, disable exports, reload and recover; six bundled original icons.
- `node portable-errors-test.cjs`: missing image data and bad saved settings reject/recover.
- `node stale-import-test.cjs`: older asynchronous image normalization cannot overwrite a newer import.
- `node validate-gallery.cjs`: inline scripts compile; one correct new entry, newest first; all 214 previous entries unchanged.
- Gallery browser check: all cards render, STL category first, correct app link and search recovery, zero runtime errors.
- Root `npm run predeploy`: 215 apps packaged, zero failures/skips. `combined-root-validation.json` verifies every app file, matching root index and exact new-app production index.
- Combined-site browser suite reruns real import/download checks from `deploy/` under the real base prefix. Public smoke test after publication verifies live app/worker/WASM, an actual image-derived STL download and gallery.

Reports are machine-readable `*-validation.json`; screenshots show actual tested layouts. Reference evidence is independently re-parsed from the downloaded source, with measured sections and hash; raw source mesh is not published.

**No physical print, fit, force, float, fatigue, load, stability or cutter-release testing.** Use a local fit coupon and inspect slicer toolpaths. This is a dry-display miniature with removable slip fits, not a floating toy. Small sampled relief can be below nozzle detail limits; unsupported STL geometry is rejected, not repaired or convex-hulled.
