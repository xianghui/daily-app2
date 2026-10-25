# Validation — Cycloid Walk / 20261025-24

## Passed before publication

- `npm run predeploy`: actual production React/Vite bundle, local worker/WASM/fonts.
- `npm test`: **132 built-in/parameter cases** (three presets and all 128 min/max corners across three palm shapes); **35 imported-output cases** (ASCII STL, binary STL, threshold, grayscale and engraved images). Each case verifies actual serialized binary STL, every part, positive volumes, closed opposite-directed welded edges, dimensions and bed-flat disjoint layout. Six invalid-input cases rejected.
- Mechanical checks: 16 teeth, nominal contact ratio 1.73977; at least 4 mm end margin; ≥1.46 mm pip-to-root margin; isolated palm region. Representative built-in and every imported-output mechanism sampled at **65 rolling poses**, five gravity-seated positions and five vertical lift-release positions using solid intersections. No geometric collisions along the supported guide. Geometry checks do not establish physical friction or tactile feel.
- Actual production browser file-picker imports of PNG, JPEG, ASCII and binary STL, per-part downloads and full-plate downloads. Pixel content, threshold, relief depth/crop/scale, STL scale/rotation/height/placement changed the downloaded geometry. Remove/reset matched original binary signatures. Every actual full download was independently parsed and regenerated from the same portable JSON; it matched the preview mesh signature and reported mm dimensions.
- Recoverable blocking errors for truncated/bad files, excessive pixels/triangles/dimensions, open and concave STL, empty image, invalid dimensions/transforms and unsafe placements. Unit checkbox gates STL integration. No unsupported source is replaced with a hull.
- All presets, bounded variations, palm shapes, text and icons, SVG ring holes, raised and engraved modes. Final solid probes verify the SVG ring hole remains unraised/unengraved.
- Undo/redo; named local design persistence; four portable imported-asset round trips; malformed JSON, missing portable image payload and worker-load error/reload recovery. Invalid/stale geometry disables exports.
- Actual ZIP unpacked, both contained STL files parsed and checked; individual-part downloads tested.
- Desktop 374 px left panel / right viewer; preview-first phone layout at 320 and 390 px; no overflow. Real CDP touch orbit and pinch produce changed canvases; phone PNG/STL imports and downloads pass. Keyboard focus, section collapse, reduced-motion mode, theme persistence and preview-only colour changes checked. Rolling-position slider changes rendered position without changing printable bytes; assembled, exploded, isolated and plate views checked.
- No app runtime errors or remote requests during production browser import/export tests.
- Gallery: inline scripts compiled using `new Function`, new STL entry exactly once and first; all previous 151 entries retained in order; actual 152-card browser rendering/search passed without runtime errors.
- Root `npm run predeploy`: **152 built, 0 failed, 0 skipped**. All 152 linked app pages exist in `deploy/`; root HTML matches; all 43 new app production files are byte-identical to the tested `dist/`.

## Reports / reproduction

`geometry-validation.json`, `browser-validation.json`, `production-validation.json`, `feature-validation.json`, `hole-validation.json`, `resilience-validation.json`, `interaction-validation.json`, `gallery-validation.json`, `root-build-validation.json`; browser screenshots include desktop, mobile, dark theme, isolated/exploded views and rolling endpoint. Reproducible scripts and commands are documented in README.

## Explicit limits

**No physical print was performed.** No claims of verified force, friction, wear, fatigue, retention or universal tolerances. The wheel is intentionally removable and hand-guided, not captive; the displayed rolling pose and floor lift are illustrative. Use the Pocket Steps calibration preset and inspect narrow rack tips in a slicer before printing. Broad flat-bottom closed convex STL grips only; unsupported concavities/overhangs are rejected, not silently repaired. Images become bounded sampled 2D relief, not full 3D reconstruction.
