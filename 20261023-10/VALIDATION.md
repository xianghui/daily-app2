# Validation — Dimple Dwell (20261023-10)

## Digital geometry

`node validate.mjs` passed: 78 parameter cases (default, min/max, 3 presets, all 64 field-range corners, 8 bounded variations), plus 24 imported geometry cases spanning threshold/heightfield relief and both ASCII/binary STL sources across default/extremes/presets.

Independently parsed binary exports have finite triangles, finite normalized matching normals, no degenerate faces, exactly two welded incidences per edge, opposite neighbor winding, positive volume per connected component, expected millimeter bounding dimensions and one connected solid. Per-part export was also parsed. Final geometry is made with robust Manifold CSG, not overlapping exported shells.

Mechanism-specific checks: conservative membrane normal thickness ≥0.848 mm, rigid landing floor ≥2.4 mm, import-to-rim separation ≥13.5 mm, minimum open underside radius 11 mm, CSG-empty underside support-removal access cylinder, CSG-full membrane midpoint samples, conservative initial 0–0.5 mm crown press envelope above the bed. This is a geometric screen, not force/stress/buckling/fatigue analysis.

## Browser interaction

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` passed with headless Chromium. Tests used real file inputs and downloaded/parsed actual STL. PNG/JPEG, ASCII/binary STL, source replacement/removal, unit confirmation, scale/rotate/placement/depth/threshold/crop, default restoration, invalid dimensions, empty numeric inputs, protected safe-zone violations, empty silhouettes, invalid/truncated/open/nonmanifold/concave meshes, excessive bytes/pixels/triangles and bad dimensions were exercised. Invalid inputs blocked export and recovery remained possible.

Each preset and four browser-generated Variations were exported, parsed and mechanism-checked. Undo/redo restored geometry. Portable image and STL JSON saves reopened to the same geometry signature. Colours did not alter geometry. Drag/drop worked. Preview signatures matched downloaded STL exactly; visible dimensions matched parsed bounds. No runtime errors or external file-processing requests were observed.

At 390 and 320 px widths, touch orbit/pinch changed the view, PNG/STL files imported, real downloads worked, no horizontal overflow appeared, controls collapsed/expanded, all tabs were accessible and Download STL stayed within the viewport. Screenshots are included. Desktop model-first layout was visually inspected.

## Gallery / production

`node gallery-test.cjs` compiles every inline gallery script via `new Function`, checks at least one nonempty script exists, preserves every old entry, checks exactly one newest `area:"stl"` entry and verifies the STL Generators section appears first. Real browser render/search ran without runtime errors.

Root `npm run predeploy` assembled all 90 existing/new apps plus the exact updated root index into `deploy/`; failed/skipped counts were zero. The complete browser import/export regression also passed against the combined production artifacts before publishing; see production-browser-validation.json.

## Physical testing

**No physical print, force, fatigue, snap-through or bistability test was performed.** The app and README explicitly require TPU material/support calibration. Underside supports are required. The open underside provides access, but support removability must be confirmed in the slicer and a physical trial. Start below 0.5 mm press; do not force inversion.

## Live publication

Root `npm run deploy` published successfully. GitHub Pages build/deployment 39882020591 completed successfully. The first live check saw the expected propagation-time 404 while that deployment was still running; after completion, `public-check.cjs` passed against the live app, generated image-derived STL and newest gallery entry with zero runtime errors/failed requests. See public-validation.json.
