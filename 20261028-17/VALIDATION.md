# Match & Drop verification

All results below are computational/browser checks, not physical print, strength, friction or safety tests. No physical print was tested.

## Reference evidence

Downloaded CC BY 4.0 White Cat Kit Card, parsed actual binary facets, SHA-256, dimensions, edge-adjacency components, nonmanifold source defects, Z histogram, measured rail section and three real mesh cross-sections. See `reference-analysis.json`, repeatable Python script and `reference-sections.svg`/`.png`. Source read-only, not redistributed. README maps measured 1.6 mm sheet/carrier and 0.21–0.22 mm bridges to the reinforced carrier and distinct new seven-part sorter. Keycap Studio maker controls/worker/import/export/view files inspected read-only.

## Geometry and assembly — PASSED

`npm test` -> `geometry-validation.json`: **14 parameter cases + 30 import cases**. Default, all three presets, all-minimum, all-maximum, eight mixed extremes; ASCII STL, binary STL, threshold relief, grayscale relief and engraved relief across six key parameter sets.

For EACH connected card and EACH of seven de-tabbed parts, parse actual binary float32 STL: exact length/count, finite vertices/normals, nondegenerate faces, unit normals agreeing with winding, 1e-5 mm welded edge incidence=2 with opposite directions, every component outward with positive enclosed volume, bed-flat Z=0 and expected mm dimensions. Genuine Manifold operations create closed solids, not overlapping shell concatenation.

Independent solid intersections sample 13 positions along cheek-to-floor insertion, roof lowering, correct-token passage and front retrieval. All seven assembled bodies are collision-free except intended boundary shoulder contact; mortise allowance and clear chamber dimensions are checked. Six wrong token/hole pairings sampled at24 centered orientations each retain positive roof interference. This does not assert every possible tilted/off-center manipulation is impossible.

Validate all seven parts lie inside the connected card, no loose-layout part overlap, exact card X/Y envelope, and real carrier unions. Cutting all28 modeled low tabs yields exactly **eight components: carrier + seven parts**. Interface tongues and window borders stay intact. Tests first caught the front floor decoration obstructing a token retrieval path; it was moved to the rear and the entire geometry suite rerun successfully.

## Actual production-browser operations — PASSED

`browser-test.cjs` -> `browser-validation.json`: real file-picker PNG, JPEG, ASCII STL and binary STL uploads. Download actual STL and independently reconstruct exact state from saved JSON; compare its fingerprint with both the on-screen final geometry and downloaded bytes, dimensions and assembly checks. Pixel content, threshold, depth, fit/crop/pan, scale, rotation, height and placement change exports. Replace/remove/transform reset/full reset recover defaults. Every separately exported part is parsed.

Malformed/truncated files, open/nonmanifold/concave meshes, oversized bytes/pixels/triangles, excessive dimensions, empty white images, invalid dimensions and transforms are rejected with disabled exports; recovery tested. Worker, WASM and fonts load under the real production `/daily-app2/20261028-17/` path. Browser recorded **zero runtime errors and zero external requests**.

`feature-test.cjs` -> `feature-validation.json`: every preset, three bounded variations, three silhouettes, text, searched icon, SVG ring, raised/engraved and inverted JPEG. Geometry/mechanism validation on these exact downloaded variants. Undo/redo, named local design reload, portable JSON for all four file types, every isolated/assembled/exploded/card/plate view, exact per-part exports and unzipped eight-STL ZIP validation. Theme saves across reload, preview color changes render but NOT STL bytes, drag/drop, Y-up orientation, keyboard focus/collapse, latest worker edit and invalid stale-export gate all passed.

`hole-test.cjs` -> `hole-validation.json`: tiny solid probes in the FINAL fused floor prove the ring's bright center stays unraised/unengraved while its dark band adds/subtracts actual geometry.

`named-import-test.cjs` -> `named-import-validation.json`: named designs retain portable image AND STL assets across reload and reconstruct exact fingerprints.

`resilience-test.cjs`: abort production worker script, verify blocked exports/error, restore route and reload recovery; all six bundled icons produce distinct geometry. `portable-errors-test.cjs`: missing image payload, invalid transform, wrong app and invalid dimensions fail and recover. `stale-import-test.cjs`: 1,200 ms delayed old image cannot replace a newer upload.

## Desktop/phone — PASSED

`studio-layout-test.cjs` and browser suite: desktop374 px left rail / right viewer; all isolated views, tactile selected states, visible keyboard focus, collapsed sections, saved light/dark theme, reduced-motion styles. At320/390 px, preview/export first, stacked controls, no document horizontal overflow, exports reachable. Real touch events prove orbit and pinch change canvas. Actual phone image/STL uploads and STL downloads validated. Screenshots retained; assembled and source cross-section screenshots visually inspected.

## Gallery/staging

`gallery-validate.cjs`: every inline script compiled using `new Function`, missing scripts fail. Exactly one newest entry with correct folder/name/area; all228 prior entries preserved unchanged. `gallery-test.cjs`:229 cards render, STL category first, searching/recovery work, no runtime errors.

ROOT `npm run predeploy`:229 built/copied,0 failed,0 skipped. `root-stage-check.cjs` verifies root index and every app index present, exact SHA-256 equality of all new-app production files, and real image/STL uploads/downloads from the combined deploy tree. See `root-stage-validation.json`.

Public deploy and main push are performed only after the above checks; `public-validation.json` records actual GitHub Pages smoke verification when available. Read-only reference trees and old gallery remain unchanged. No digest sent.
