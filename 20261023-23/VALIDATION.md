# Fold Atlas — observed validation

Run date: 2026-10-23. No physical print, folding, force or fatigue test has been performed.

## Automated geometry and mechanism checks

`npm test` passed **78 parameter cases**: default, minimum, maximum, all three presets, every one of the 64 six-parameter range corners, and eight deterministic variations. **24 import-derived cases** cover synthetic threshold/height-field sources and the ASCII wedge/binary gem across default, min/max and presets.

Exported binary STL was independently parsed for finite coordinates, valid unit normals, nondegenerate triangles, outward-consistent winding, positive volume for its connected component, welded closed-manifold edge incidence (exactly two opposite incident faces), and millimeter dimensions. The single solid is produced by Manifold CSG, with one connected component; no overlapping-shell fake fusion.

Mechanism checks compare analytic X/Y bounds, web and panel thickness, corridor width, minimum raised-facet thickness contrast, and import safe-zone isolation. CSG probes verify material in six facets, the stem and palm, and all seven internal crease webs, plus absence of material above the webs in the crease corridors. Exact differences against the no-import mechanism prove that imports do not alter the sheet. All seven neighboring raised-facet pairs are locally folded at opposing ±5° about the shared web midplane and tested with solid intersections. Analytic conservative face margins and kinematic web strain estimates are recorded.

These are local geometry checks, **not a compatible global rigid-origami motion solver, full-closure self-contact proof, FEA, safe-travel claim or material certification**. The UI explicitly shows the undeformed body and recommends tiny 3° trial folds in TPU 95A.

## Real Chromium editor checks

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` passed. Tests used real file-picker imports and actual downloaded STL bytes, not only fixture calls into the generation library.

- PNG/JPEG source changes, threshold, depth, relief mode, crop shifts, physical footprint and transformed STL grips alter exported geometry versus the no-import baseline.
- ASCII/binary STL format parsing, source dimensions, explicit mm confirmation, scale/height, rotate, place, center/reset, replace/remove and return to defaults work.
- Each downloaded STL fingerprint equals the preview's final geometry fingerprint. Displayed dimensions match the parsed export. Both body and individual-body exports pass solid validation.
- Ten malformed or unsupported files are rejected recoverably: wrong type, truncated binary, open/nonmanifold meshes, excess bytes/pixels/triangles, bad dimensions, fake image and a closed concave solid. Empty silhouettes and unsafe/missing transforms also block export.
- All three preset buttons and four real Variations runs were downloaded and checked for mesh/mechanism validity. Undo/redo, drag/drop, colour-neutral geometry and portable image/STL JSON round trips passed.
- Phone viewports at 390 and 320 px: no horizontal clipping, actual touch orbit and pinch zoom, reachable file imports and downloads; collapsed/expanded controls and every tab retain the fixed export action.
- No app runtime errors or remote file-processing requests were observed.

Machine-readable reports: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json. Desktop/mobile screenshots were visually inspected.

## Build / gallery / publication

Per-app `npm run predeploy` passed. `node gallery-test.cjs` compiled the nonempty inline gallery script with `new Function`, verified the new STL entry exactly once/newest, preserved all **102 earlier entries**, rendered **103 cards**, and checked category ordering and search with no runtime errors.

Root `npm run predeploy` packaged **103 apps, zero failures and zero skips**. Deployment root index and every gallery-linked app index were verified present. Production-bundle browser checks and public verification are recorded separately in production-browser-validation.json and public-validation.json when completed.

Build notes: Vite reports its normal Manifold node:module browser externalization and >500 kB chunk advisory; the browser-loaded bundled WASM was exercised successfully. npm audit reports a deployment-tool-only gh-pages/globby/braces advisory chain (five high entries, no patched braces release available at the checked version). That tooling does not process imported browser files and is not included in the browser generator bundle.

Final observed results: production-bundle browser suite passed with 23 validated downloads, phone touch tests, malformed-file recovery and zero runtime errors/remote processing requests. Root publication completed successfully; GitHub Pages workflow 39966769222 concluded success. The live app loaded, locally converted its bundled PNG into geometry, downloaded a closed-manifold positive-volume STL, and the public gallery showed Fold Atlas newest. See public-validation.json for the public URL and parsed export dimensions.
