# Takeup Turn — validation record

Scheduled run: 2026-10-26 (Asia/Singapore). No physical print or tactile/force tests performed.

## Final computational checks

- `npm test`: **68** default, preset and parameter-corner cases; **25** image/STL-derived output cases. Every part and combined float32 STL checked independently for finite/nondegenerate triangles, normal/winding agreement, positive volume per component, closed two-face edge incidence (1e-5 mm weld), Euler characteristic, bed orientation and expected dimensions.
- Independent plate-size formulas checked against actual exported meshes, not just UI text. Default plate: **115 × 34 × 10.30 mm**.
- Sampled full nominal pin-in-arc sweep: no unwanted positive-volume intersections above 1e-5 mm³ numerical tolerance. Bearing shoulder supports the upper follower; vertical lift at 1/3/8/40 mm is unobstructed. Beyond both free-play ends, positive-volume contact is localized to the pin/slot region, not the center bore. Float32 coplanar shoulder slivers below tolerance are excluded from stop-localization tests.
- Floor, radial bore/slot clearance, axial face gap, pin engagement, post height and outer walls checked separately from mesh watertightness. Imports proven by boolean-difference checks to stay inside the palm landing and away from the mechanism.

## Real production-browser checks

Served actual `dist/` under `/daily-app2/20261026-4/` at local port 5315, including bundled worker/WASM/font URLs.

- `browser-test.cjs`: **24 real STL downloads** including per-part files, PNG/JPEG imports, ASCII/binary STL imports, threshold/depth/crop/grayscale changes, source scale/rotation/placement, min/max settings, removal/reset and phone imports. Download hashes match exact displayed current geometry; downloaded portable snapshots regenerate the same bytes independently in Node. Every downloaded model is mesh/mechanism checked. **10 malformed/excessive/unsupported fixture cases** plus empty silhouettes, invalid transforms and protected-zone violations disable exports and recover through reset/replace/remove.
- `feature-test.cjs`: every preset, three bounded variations, all ergonomic shapes, text, searchable icon, SVG ring, raised/engraved relief, background inversion; actual geometry changes verified. Undo/redo, rapid latest edits, portable PNG/JPEG/ASCII/binary round trips, named designs across reload, Y-up import, actual per-part/ZIP parsing, view neutrality, preview-only color, dark-theme persistence, drag/drop, collapsible sections and keyboard focus passed. No browser runtime errors or external runtime requests.
- `interaction-test.cjs`: current nominal sweep visibly changes pose without changing export; see-through driver, all six SVG icons, named imported STL restoration, intentionally aborted production worker → disabled exports, reload recovery passed.
- `hole-test.cjs`: independent boolean probes in the actual final mesh prove SVG ring holes stay unraised (raised mode) and unengraved (engraved mode).
- `stale-import-test.cjs`: an intentionally delayed first image normalization cannot overwrite a newer JPEG selection; source request guards discard the obsolete result.
- `additional-test.cjs`: all six modeling fields measurably change export; imported image named-design restoration, missing-payload reattachment error, −Z import, 374 px desktop left rail, reduced motion and preview-first 320 px layout passed.
- Touch-enabled **390 px** context: synthetic touch orbit and two-finger pinch visibly change canvas. **320 px** and 390 px: no horizontal overflow, preview before controls, reachable exports/file pickers. Screenshots saved locally in this folder.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `interaction-validation.json`, `hole-validation.json`, `additional-validation.json`, `stale-import-validation.json`.

## Gallery and publishing

`gallery-validate.cjs` compiles all inline scripts using `new Function`, asserts the new STL entry occurs exactly once, and compares the previous entry lines byte-for-byte. All **159 previous entries** remain; **160 total**. Browser gallery rendering, newest-first order, STL category-first order and search recovery pass with no runtime errors. Both active and archived galleries were checked read-only for prior mechanisms. An initial constant-width-rotor candidate was discarded after finding Corner Waltz; the published design is the distinct lost-motion coupling.

The archived tree and Keycap Studio reference were not edited or deployed. Publication uses the root monorepo staging/deploy scripts, not the individual app deploy command. Root staging completed: **160 built, 0 failed, 0 skipped**, root index matches, all 43 final-app runtime files byte-identical to `dist/`. The staged combined output was served at port 5316 and the full import/download/phone suite repeated against it (`combined-browser-validation.json`), with gallery rendering retested. Publication outcome is recorded with the committed run artifacts.

## Reproduce browser checks

Build with `npm run predeploy`; serve `dist/` at the exact prefix `/daily-app2/20261026-4/` on port 5315, and serve the parent gallery at `/daily-app2/`. Then run:

```sh
node browser-test.cjs
node feature-test.cjs
node interaction-test.cjs
node hole-test.cjs
node additional-test.cjs
node stale-import-test.cjs
node root-stage-test.cjs
node gallery-validate.cjs
node gallery-test.cjs
```

All fixtures are synthetic project-generated examples, not personal inputs. No claims are made about unperformed physical printing, friction, durability, comfort or safety testing.
