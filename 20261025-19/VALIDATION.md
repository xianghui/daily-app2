# Validation · Sprag Still · 2026-10-25

All listed checks passed; this is computational/browser validation, **not physical printing or friction testing**.

- `npm run predeploy`: production Vite build passes; WASM and fonts bundled locally.
- `npm test`: 132 parameter cases (default, three presets, 128 range corners) plus 35 imported-output cases. Every generated part/export has finite triangles, nondegenerate faces, consistent outward winding, positive component volume and closed welded-edge incidence. Independent analytic millimeter bounds agree with exported full plate.
- Neutral assembly: all 15 part pairs checked. Moving bodies are disjoint. Only race/soft-cover skirt overlap intentionally for the documented TPU interference fit. Static clockwise ramp sampling detects first roller contact; return to neutral removes overlap. Radial cover retention overlaps exceed 4 mm; import customization cannot reach mechanism. Full print plate has no intersecting parts. No dynamic/friction/force guarantee is inferred.
- Actual browser-selected PNG, JPEG, ASCII STL and binary STL fixtures generate different real downloaded geometry from no-import defaults. Threshold, depth, content, physical scaling, placement and rotation change exports; remove/reset recover exact default fingerprints. Preview, worker result, portable JSON-regenerated model and downloaded binary STL fingerprints agree.
- Real exports independently reparsed: full plate, each of six parts, ZIP containing six distinct STL files and notes. No 3MF or STL color claim.
- Rejections exercised: truncated file, fake image, excessive bytes/pixels/triangles/dimensions, open/nonmanifold/concave STL, empty image silhouettes, invalid dimensions/empty numeric transform and imports outside safe zone. All disable export and recover through reset/replace/remove.
- SVG ring raised and engraved geometry probed with actual solid intersections: central holes stay unraised/unengraved. Text, searched icon and SVG alter actual geometry.
- Three presets, three palm shapes, bounded variations, undo/redo, named saved designs across reload, portable image/mesh JSON round trips, Y-up source transformation and explicit mm confirmation passed.
- Print/assembled/exploded/palm/cam/cover views, shell transparency, saved dark theme, color-neutral geometry, section collapse, keyboard focus, drop import and latest-worker-result guards passed. Worker load failure and malformed JSON block export; reload/reset recover.
- Phone widths 390 and 320 px: no horizontal overflow; preview/export-first layout, touch orbit and pinch zoom, touch-friendly inputs, actual PNG/STL imports and downloads passed. Desktop 374 px left panel and right viewer inspected visually.
- Production static `deploy/` build reran the full browser import/export and feature suites successfully (not only the development server). No app external requests or browser runtime errors.
- Root gallery inline scripts exist and compile via Node `new Function`. New folder exists exactly once with area `stl`; all 146 prior APPS entries preserved byte-for-byte as objects. Browser renders 147 cards, STL category first, no runtime errors. Root `npm run predeploy` reports 147 built, 0 failed, 0 skipped. Root index copy and every deploy folder verified.

Evidence: `geometry-validation.json`, `browser-validation.json`, `production-validation.json`, `feature-validation.json`, `hole-validation.json`, `resilience-validation.json`, `gallery-validation.json`, and desktop/mobile/dark/view screenshots. Sample fixtures are synthetic; no personal uploads are included.
