# Ellipse Ease validation — 2026-10-26

## Passed computational checks

- React/Vite production build (`npm run predeploy`); production worker/WASM and fonts served under `/daily-app2/20261026-10/`.
- 132 built-in parameter cases (defaults, three presets and all 128 min/max corners); every individual solid and float32-translated combined print-plate STL checked.
- 35 imported-output cases including ASCII STL, binary STL, thresholded images, grayscale images and engraved images, with presets and parameter extrema.
- Independent STL checks: byte length/triangle count, finite coordinates, nondegenerate triangles, normal/winding agreement, welded-edge incidence exactly two with opposing directions, connected positive-volume components and expected millimetre dimensions. Every individual part has one connected solid, combined plate has four. Geometry CSG and no-overlap checks are not inferred from download success.
- Mechanism checks: 81 poses over nominal 25–65° sweep per tested model; six part-pair intersection checks at each pose, zero unintended intersection. Shoes retain fixed pivot spacing; off-centre thumb obeys the ellipse equation. Actual floors/channel voids, import isolation and 12 sampled vertical release configurations tested. Separate print-plate bounding boxes have clear spacing. Shoe/post/bridge clearances, floor thickness, bore rims and separate guides verified.
- Geometry suite: `geometry-validation.json`. Browser-generated imported models also pass the same mesh and mechanism tests from `validate.mjs`.

## Passed real production-browser checks

`browser-test.cjs` selected PNG/JPEG and ASCII/binary STL through actual file inputs and saved 26 real STL downloads (including individual parts and phone outputs). Every exported byte fingerprint matches the exact UI geometry signature and a Node regeneration from its saved JSON; shown millimetre dimensions match downloaded mesh bounds. Threshold, depth, crop/fit, pixels, source mesh shape, footprint/height, rotation and placement affect export; compare against no-import baseline. Replace, remove and reset recover the original output.

Ten malformed/excessive fixtures rejected through the real file picker: invalid SVG, truncated STL, open STL, nonmanifold STL, oversized file, fake PNG, excessive image dimensions, too many triangles, excessive mesh dimensions and unsupported concave STL. Empty image, empty/nonfinite transform and out-of-safe-zone placement also block exports and recover after reset. Invalid parameters do not export stale last-good geometry. No silent STL repair/hull replacement.

`feature-test.cjs` verified 20 additional models: presets, bounded variations, all palm shapes, text, actual filled heart SVG, ring SVG, raised/engraved and inverted backgrounds, four portable asset round trips, up-axis conversion and latest-worker edit. Undo/redo, reload-persistent named designs, actual ZIP contents parsed as valid STLs, all four per-part buttons, all seven views, saved dark theme, colour-preview/geometry separation, drag/drop, collapsed sections and keyboard focus passed.

`hole-test.cjs` probes the final Boolean solid: the ring's centre stays unraised or unengraved, while the dark ring changes printable geometry. `resilience-test.cjs` verifies all six distinct original SVG icons change geometry and a deliberately aborted production worker blocks export; reload recovers. `stale-import-test.cjs` delays one image normalization by 1.2 seconds and confirms a newer source cannot be overwritten.

`additional-test.cjs` verifies every geometry field changes exported bytes, named imported-image restoration across reload, missing-payload reattachment error, −Z import, reduced motion and 374 px desktop rail. `interaction-test.cjs` verifies rendered bridge movement, export-neutral motion poses, viewer-right desktop layout and recovery from missing imported payload.

Phone tests at 390 and 320 px: preview above controls and exports, no horizontal document overflow, actual PNG/STL imports/downloads, reachable actions, CDP touch orbit and two-finger pinch produce changed canvas screenshots. Screenshots include `desktop-validation.png`, `phone-320-validation.png`, `mobile-validation.png`, `assembled-validation.png`, `assembled-ghost-validation.png`, all isolated/exploded/plate views, `arc-endpoint-validation.png` and `dark-validation.png`. The default built-in production browser made no external requests.

## Gallery and deployment checks

`gallery-validate.cjs` compiles every inline script with `new Function`, requires at least one nonempty inline script, verifies the new folder exactly once with area `stl` and preserves all 165 prior entries byte-for-byte. Browser gallery tests verify STL Generators first, newest entry first, 166 cards, correct target URL, working search/recovery and no runtime errors. Root predeploy built/copied all 166 apps with zero failures/skips; `root-stage-test.cjs` verifies every app and exact byte-for-byte staging of all 43 new production assets. Combined-production and public checks are recorded separately when complete.

## Not performed / not claimed

**No physical print or user trial. No friction, force, stop load, wear, fatigue or durability test.** Mesh validity and kinematic collision checks do not prove real-printer fit or tactile feel. These are lift-removable rigid parts, not captive joints. The nominal sweep can overtravel slightly into end clearance before stop contact. Use the Small Arc full-size fit calibration and adjust side/radial and vertical gaps for your printer/material. The exported geometry is local and all bundled fixtures are synthetic.

## Publication result

Root `npm run deploy` published the combined `deploy/` tree successfully. GitHub's Pages build/deploy jobs completed successfully (run `40252780879`). After propagation, `live-test.cjs` passed against https://xianghui.github.io/daily-app2/20261026-10/ (HTTP 200): public worker/WASM, real baseline/PNG/STL downloads, exact geometry signatures and valid closed meshes; public gallery has 166 cards with Ellipse Ease first. `combined-browser-validation.json` separately records the complete import, transformation, rejection and phone-download suite against the root staged deployment. Initial 404s occurred only while Pages was deploying; no app workaround or stale-output substitution was used.
