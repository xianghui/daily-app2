# Validation record

This run inspected the real reference STL, reconstructed (not redistributed) its sheet/socket interface, and implemented an original quilling-comb kit assembly. No physical prints or material/force/release tests were performed.

| Check | Evidence |
| --- | --- |
| Real reference parsing, hashes, dimensions, components, cross-sections | reference-analysis.json; evidence/reference-sections.png |
| 8 built-in and 8 image/STL cases, independent STL and assembly checks | validation-report.json |
| 15 imported minimum/maximum/mixed cases; impossible dimensions/envelopes/feet rejected | extreme-validation.json |
| Raised/engraved hole preservation, actual boolean probe volumes | hole-validation.json |
| Production PNG/JPEG and ASCII/binary STL real file-picker imports and downloaded exports; transforms, invalid files, empty images, reset; touch/mobile | browser-validation.json |
| Presets, silhouettes, text/icons/SVG, undo/redo, JSON/named saves, missing assets, every ZIP STL, all views, theme/focus/layout, worker abort/recovery | studio-validation.json |
| Up-axis transforms, rapid edits, stale-export blocking and recovery | supplemental-validation.json |
| Eight mechanically bounded random variations | variation-validation.json |
| Gallery scripts compiled, unique newest STL entry and 275 previous entries preserved | gallery-validation.json |
| Root deploy folder contains all indexed apps and exact new asset hashes | root-stage-validation.json |
| Combined staged gallery/runtime, actual production worker/WASM | gallery-browser-validation.json |
| Public Pages runtime and actual default/imported downloads | public-validation.json |

The STL checker independently parses serialized float32 coordinates, verifies nonzero triangles, finite vertices, normal/winding agreement, millimeter bounds, 1e-5 mm welded edges (two opposite incident faces), positive volume per connected component, and one component for each part/card. The mechanism checker intersects actual solids: no unintended seated/flat-part overlap, simultaneous tongue insertion, two shoulder stops, unobstructed working gaps above tine tips, twelve distinct runners and safe snips yielding three parts plus carrier. This proves geometric relationships only, not force, stability, fatigue, printer tolerance or handling.

`README.md` documents exact limits and reproducible scripts. Browser screenshots show inspected desktop/phone, assembled/exploded and dark views. All imported test files are synthetic fixtures; no personal assets or raw third-party reference mesh bundled.
