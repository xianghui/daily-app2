# Validation · Shutter & Shimmer · 2026-10-29

All results below are computational/browser checks. **No physical print, bond-strength, fatigue, optical contrast, wear or force testing was performed.** Retention requires a cured adhesive bond at the stationary keeper socket; it is not claimed from a loose/friction fit.

## Reference evidence

`node inspect-reference.mjs` freshly parsed the actual local binary reference: SHA-256 `fe104f4001da035ff0e4f6666cc4647c6b2fa0f9f66a7a3519889c7486c8bf41`, 320,308 triangles, 10 connected manifold components, 136.0943 × 61.7829 × 74.0756 mm. Five actual sleeve cross-sections measured 8.843–8.861 mm working outer radius, 4.491–6.845 mm lobed inner radius and upper widening to 9.327–9.339 mm. Source raw STL is not redistributed. `reference-analysis.json`, `reference-sections.svg` and README distinguish measured dimensions from redesigned circular fits, optical sectors and bonded keeper.

## Final geometry

`node validate.mjs`: **30 built-in parameter cases + 49 imported-output cases passed**. Defaults, all three presets, explicit all-min/all-max, representative corner combinations, threshold/grayscale/engraved fields, ASCII/binary source grips and size/height/rotation/offset variations.

- Parse actual binary STL byte layout; finite coordinates and normals, nondegenerate faces, normalized stored normals agreeing with winding.
- Weld at 1e-5 mm; every undirected edge has exactly two opposite-directed incident triangles. Traverse each component: positive enclosed volume, expected component count and Euler consistency.
- Each part and translated float32 print plate checked. All three parts start at Z=0 in export; mm bounds match actual parameters and preview state. No unintended printed-part overlap.
- Manifold intersections through full-turn samples, both axial float extremes, rotor and keeper insertion paths. Keeper head actually blocks rotor withdrawal; plug seats 4 mm into stationary socket with explicit adhesive allowance and floor. Unsupported physical bond strength is not inferred from mesh checks.
- Actual generated cross-section subtraction/intersection measures aperture transmission **inside a quadrant** at 0°, 3°, 8° and 15°. This proves the transmission pattern moves. Whole-disc integrated light area alone is not a reliable motion test: a traveling pattern may preserve total area.
- Minimum rim/web, socket floor, isolated-import keepout and cap overlap calculations enforced. Invalid dimensions, noninteger slot count, NaN transforms, missing unit confirmation and empty images rejected.

## Real browser tests

The final `browser-test.cjs` and `feature-test.cjs` passes used **the combined root deploy output**, served as `/daily-app2/20261029-17/` on port 5398—not a dev-only build. Earlier and helper passes exercised the production app `dist` under its real base on port 5397.

`browser-validation.json`:

- PNG and JPEG actual file-picker imports/downloads; changed pixels, threshold, depth, crop, grayscale and image scale alter exported geometry relative to default.
- ASCII and binary STL imports require mm confirmation; footprint, height, rotation and XY placement changes survive into actual downloaded STL. Reset exactly reproduces the earlier fingerprint.
- Every downloaded STL parsed/validated; byte fingerprint equals the displayed current-mesh fingerprint and exact Node regeneration from the exported portable JSON snapshot. UI mm bounds match downloaded bounds.
- Replace/remove/reset, all-min/all-max, malformed/truncated STL, open/nonmanifold/self-intersecting or unsupported concave input, excessive size/pixels/triangles/dimensions, fake PNG/SVG, empty silhouette, NaN transform and safe-zone violations block exports and recover.
- 390 px touch-enabled and 320 px narrow viewports: real phone file imports and STL downloads, no horizontal overflow, reachable export. CDP orbit and two-finger pinch changed canvas screenshots. No app remote requests and no page runtime errors.

`feature-validation.json`:

- Every preset, three bounded random variations and round/hex/oval shapes have real geometry and mechanism verification.
- Text, heart icon, ring SVG, raised/engraved and background handling affect actual geometry. Preview colours change the canvas without claiming colour in STL.
- Portable PNG/JPEG/ASCII/binary JSON round trips restore exact fingerprints; local named save persists after reload; undo/redo restores state.
- Actual Everything ZIP unzipped: three valid individual-part STLs and assembly instructions. Real per-part buttons downloaded and validated with paced clicks.
- All six views including isolated keeper preserve export geometry; saved dark theme, collapsible section, keyboard focus, drag/drop, Y-up import, latest-worker-result handling and invalid-state export blocking passed.

Additional reports:

- `hole-validation.json`: actual Manifold probe volumes confirm white ring interior stays unraised / unengraved while dark ring geometry changes the solid.
- `resilience-validation.json`: aborted production worker blocks export; reload recovers; all six original bundled icon marks change geometry.
- `portable-errors-validation.json`: missing image payload explicitly requests reattachment; invalid transform/app/dimensions block export and reset recovers.
- `stale-import-validation.json`: deliberately delayed first image normalization cannot overwrite a newer file selection.
- `supplementary-validation.json`: 374 px desktop left panel, right viewer, reduced-motion transitions, actual preview turn with unchanged printable state, noninteger aperture guard, 320 px preview-first order/no overflow/export reachability.

## Build / gallery / combined staging

- Individual `npm run predeploy`: passed after final source changes. Locally bundled worker and Manifold WASM load from real base path.
- All gallery inline scripts compiled with `new Function`; missing scripts fail the validator.
- New STL entry exists exactly once, newest first; all **257** prior entries preserved unchanged. Category label **STL Generators** first. Gallery browser runtime/search/card-count checks passed.
- The root deploy script extracts `folder:"…"` literals; a quoted JSON key initially omitted the app from staging despite a successful root command. Fixed the entry to the established literal format, reran root predeploy, and independently verified **258/258** gallery apps exist in `deploy/`. Root index matches source; every new production app asset is byte-identical to `dist` (`root-stage-validation.json`).
- Root `npm run predeploy` final result: **258 built, 0 failed, 0 skipped**.

## Authorized live publication

Root `npm run deploy` passed and reported **Published** (root lifecycle rebuilt/staged all 258 apps, 0 failed, 0 skipped). The real public URL **https://xianghui.github.io/daily-app2/20261029-17/** returned HTTP 200 with HTML matching the final tested build. Its actual worker/WASM generated an STL matching the tested default byte fingerprint; the downloaded three-component model passed independent mesh validation. The live combined gallery rendered the new entry first with no runtime errors (`public-validation.json`).

A separate live browser pass selected **PNG, JPEG, ASCII STL and binary STL** through actual file pickers. Each changed geometry relative to baseline; public downloads matched the displayed current mesh and exact Node regeneration from public JSON state. All downloaded imported-output meshes passed closed-manifold/positive-volume/dimension checks, with no runtime errors (`public-import-validation.json`). These are computational/browser checks, not physical print testing.

## Reproduce

```sh
node inspect-reference.mjs
npm test
npm run predeploy
node serve-production.cjs
# In another terminal, from this app:
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
# Parent root predeploy then serve-root.cjs for combined staging tests:
node gallery-validate.cjs
node root-stage-check.cjs
node gallery-test.cjs
TEST_BASE=http://127.0.0.1:5398 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5398 node feature-test.cjs
node supplementary-test.cjs
```
