# Seat & Snip verification — 2026-10-27

- Reference: freshly downloaded, binary STL parsed and SHA-256 checked; dimensions, components, nonmanifold source artifacts and three real mesh cross-sections recorded. Read public reuse terms/source. No source mesh redistribution.
- Pure-model suite: **12 parameter cases** (defaults, all presets, simultaneous extrema, six variations), **30 imported cases** (ASCII STL, binary STL, threshold, grayscale, engraved × six cases), plus explicit rejection tests. Each card and each of its four parts was independently parsed after float32 binary serialization.
- Every checked STL: finite vertices, nonzero triangles, consistent normalized outward normals, exactly two opposite-directed incident faces per welded edge at 1e−5 mm, one positive-volume component, expected dimensions and Z=0 print orientation.
- Mechanical: six assembly-pair intersections; nine positions per backrest/cheek insertion path; two joint-restraint probes; all feet coplanar. Each actual part lies in card, loose parts do not intersect, declared XY envelope matches mesh; simulated 16 cutter cuts release exactly four solids plus carrier. Non-captive slip fits explicitly disclosed.
- Real production-browser uploads/downloads: PNG/JPEG and ASCII/binary STL; thresholds/depth/crop/mode, actual pixel content, imported scale/height/rotation/placement change exported signatures. Download bytes match preview signature and JSON regeneration. Reset reproduces default signature.
- Tests include malformed/truncated, open, nonmanifold, concave, excessive-size/triangles/pixels/dimensions, empty image, invalid transforms, unsafe placement and unsupported saved designs. Export remains disabled; replace/remove/reset recover.
- Every preset, three shapes, randomized variations, text, all six searched SVG marks, raised and engraved ring-hole mesh probes, up-axis, undo/redo, named persistence/reload, bounded portable JSON, real five-STL ZIP and every individual part download checked.
- Worker abort/reload, rapid edit staleness, deliberately delayed image normalization, saved light/dark, visible focus, collapsible sections and reduced motion checked.
- Desktop: 374 px left panel and right viewer; phone: preview first, reachable exports, no overflow at 320/390 px, real touch orbit/pinch changes canvas. Actual phone imports/downloads checked. Screenshots inspected.
- Combined gallery: inline script compilation, exactly one new STL entry, all **208 old entries preserved**, 209 app outputs present, gallery runtime/search/category order checked. Combined production browser suite is recorded separately.

See `*-validation.json`, `validate.mjs` and browser scripts for reproducible data. Computational geometry/assembly validation is **not a physical print, fit, force, fatigue, strength, load or stability test**. No such physical tests were performed.

Root `npm run predeploy` and `npm run deploy` completed successfully: **209 built, 0 failed, 0 skipped**, gh-pages reported **Published**. Full combined-production browser imports/exports and mobile suite passed (`combined-browser-validation.json`).

Public GitHub Pages smoke test passed after the Pages build completed: HTTP 200, worker/WASM loaded, real PNG file import and checked STL download with matching preview signature, 209 public gallery cards and correct newest entry; zero runtime errors (`public-validation.json`).
