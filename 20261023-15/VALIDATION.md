# Capstan Drift validation — 2026-10-23

## Completed digital checks

- Individual `npm run predeploy`: passes; generated production bundle and local WASM.
- `npm test`: 78 parameter cases, including all 64 parameter-box corners, plus 24 image/STL integration cases. Independent binary STL topology, outward winding, finite/nondegenerate triangles, positive component volume, mm dimensions and bed plane checks passed.
- `node variation-regression.mjs`: 128 seeded variation outputs passed mesh and mechanism checks.
- Mechanism geometry: fixed solid posts, root and bed material, open circular/diagonal cord-corridor station probes, two crossing heights and palm-import isolation passed for tested built-ins, imports and representative extremes.
- `node browser-test.cjs`: PNG/JPEG and ASCII/binary STL real file-picker imports and actual STL downloads passed. Pixel/threshold/depth/crop/scale/rotation/placement changes affect exported geometry relative to default. Source reset/remove, invalid files and dimensions, empty images, size/pixel/triangle limits, unsupported concave/open/nonmanifold meshes and unsafe transforms block export recoverably.
- `node extra-browser.cjs`: preset/variation downloads, undo/redo, four portable import JSON round-trips, drag/drop and geometry-neutral preview colour passed.
- Desktop 1440 px and phone 390/320 px: no horizontal overflow; touch orbit and pinch zoom, file pickers, STL download and collapse/expand controls passed. Screenshots inspected.
- `node gallery-test.cjs`: all inline root scripts compile with `new Function`; missing/empty scripts cause a failure. New entry exactly once/newest/STL/correct path. Prior entries retained, STL category first, gallery rendering and search without runtime errors.
- Root predeploy includes root index and all 95 app folders: 0 failed, 0 skipped.

Reports: `geometry-validation.json`, `variation-regression.json`, `browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `production-browser-validation.json` and `public-validation.json` (the latter reports are created by production/public checks). Screenshots record desktop, phone and mobile sheet views.

Initial development browser runs overlapped a live source hot reload and produced transient invalid-file/round-trip assertions. Full reruns after source stabilization passed; tests were not weakened or skipped.

## Not physically verified

No physical print, strength, friction/pull force, cord wear or fatigue test. Exclusion probes do not simulate flexible cord contact/dynamics. PLA/PETG settings and the 2 mm cord specification are starting recommendations only. The external cord is open, hand-guided and not retained; no cord is exported or represented as printable. Cord mode requires one 300 mm soft braided cord. Hardware-free finger tracing is a separate alternative, not an assertion of the same friction interaction.

## Published verification

The root `npm run deploy` reported Published. GitHub Pages run `39909676810` completed successfully for gh-pages commit `c08296d3a26aa437966e72e8fa54cda3b95cc5e4`. Public-browser validation loaded the new app and local WASM, imported the synthetic PNG, downloaded and independently checked its generated STL, and confirmed Capstan Drift is the newest gallery entry, without runtime errors or failed asset responses. Initial public requests returned GitHub Pages' propagation 404; verification was retried after the Pages build completed.
