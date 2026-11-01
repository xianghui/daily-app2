# Flag & Signal — validation

Computational and browser tests only. **No physical printing, strength, friction, glue-seat or assembly tests performed.**

- `npm run predeploy`: production React/Vite build with local worker/WASM/font assets.
- `npm test`: 42 cases across all three presets, three silhouettes, every dimension's minimum/maximum, combined extrema, image thresholds/grayscale and both STL formats/transforms. Individual parts, connected card and translated six-part print plate checked. Unsupported packing is blocked explicitly.
- `validate.mjs`: independent final float32 binary-STL exact length, finite coordinates, nondegenerate faces, normal/winding agreement, welded 1e−5mm edge incidence two with opposite direction, positive component volumes, expected components and mm bounds. Manifold CSG checks mast downward assembly/shoulders, axle insertion, keeper insertion, 25 full-turn positions of independent flags, head/keeper axial removal stops, safe24snips releasing6parts+carrier, no part collisions, card envelope and bed support. Adhesive seat retention requires actual adhesive; no force test claimed.
- `browser-test.cjs`: production-path real PNG/JPEG/ASCII/binary file-picker imports and downloaded STL bytes; default-vs-import, changed pixels/threshold/depth/crop/scale/placement/rotation, UI/Node/export signatures, same mesh/assembly tests on each output, replace/remove/reset. Malformed, truncated, open/nonmanifold, concave, excessive, empty-image, bad-dimension and invalid-transform rejection; all failures disable export and recover. Individual downloaded STLs parsed. 320/390px touch orbit/pinch and phone image/STL downloads.
- `studio-test.cjs`: every preset via real download, three silhouettes, text/icons/SVG, portable image/STL JSON, saved local designs across reload, missing-payload reattachment error, undo/redo, ZIP opened and each STL parsed, all views, saved dark theme, focus, collapsible sections, reduced-motion,374px left desktop panel and preview-first320px phone. Worker script abort blocks export, reload recovers.
- `personalization-check.mjs`: actual CSG probes show bright center of ring remains solid, dark ring creates a real engraved void; same final mesh/assembly checks.
- `orientation-test.cjs`: Z/Y/−Z imports, dimensions, mm confirmation and checked final solids.
- `icons-drop-test.cjs`: all six icons change checked geometry; real File/DataTransfer drag/drop works.
- `stale-test.cjs`: immediate export blocking for rapid geometry/image edits, latest-result identity, invalid-transform recovery.
- `phone-views-test.cjs`: all tabs and views at320px, expanded guide/JSON actions reachable, JPEG/ASCII imports, changed background affects checked mesh, no horizontal overflow.
- `pose-test.cjs`: independent front/rear angle controls change real preview pixels; explicitly preview-only poses leave printable export unchanged.
- `gallery-test.cjs`: every inline script compiled with Node new Function; new entry exactly once, newest, correct STL category/path; earlier367entries preserved; browser renders368cards without runtime errors and STL category first.

Reports in `*-validation.json`, screenshots under evidence/ plus desktop/mobile-validation.png. Reference analysis was freshly reproduced from downloaded STL, with inspected cross-sections/hash/attribution and explicit measured-vs-proposed interface mapping.

Fixes during preflight: increased minimum card width to220mm after smallest preset failed packing; separated paired runner scanlines by2.4mm after maximum1.4mm runner width caused coincident topology. Geometry and production-browser suites rerun after fixes. No hidden hull substitution or automatic source repair.

Combined root predeploy: 368 apps built/copied, zero failed, zero skipped. All 368 app index pages plus root gallery, worker and WASM exist in deploy/. Full real-import/download browser suite and gallery syntax/render checks passed again against the combined production directory (`combined-browser-validation.json`, `gallery-validation.json`, `deploy-validation.json`). Root npm run deploy reported Published. Live public smoke results are recorded in public-validation.json after propagation.

Live GitHub Pages smoke passed: public app and gallery HTTP200, production WASM initialization, real PNG file-picker import, actual downloaded closed/manifold STL with matching preview/export signature, all368gallery entries and no runtime errors. See public-validation.json and evidence/public-app.png / public-gallery.png.
