# Crossleaf Calm — digital validation

Run date: 2026-10-23. No physical print, force, fatigue or material test was performed.

## Geometry / mechanism

`npm test` passed **78 parameter cases**: default, all-minimum, all-maximum, three presets, 64 min/max corners and eight deterministic variations. **24 imported-model cases** cover both synthetic STL solids and both image-conversion modes at representative parameter extremes and presets.

Every exported component was independently parsed from binary STL and verified for nonempty finite triangles, nondegenerate faces, normalized outward normals, consistent neighboring winding, exactly two incident faces per welded undirected edge (0.00001 mm tolerance), positive enclosed volume per component and expected millimeter XYZ bounds. Actual generation additionally uses Manifold status, boolean operations and one-component checks.

The crossed-leaf checks verify 0.9–1.4 mm bending sections, two vertically disjoint leaf slabs with 2–3 mm gap, leaf length and continuous material at ten sample points, a real CSG air probe at the crossing, and separation of imports from the fixed frame. Representative ±1° initial rotation envelopes bound endpoint travel below 0.4 mm and conservatively leave positive crossing/frame separation. These are geometric envelopes, **not a nonlinear simulation or assurance of exact pivot location, force or fatigue life**. Supports, TPU material tuning and physical testing remain required.

## Actual browser workflows

Playwright selected real files via browser inputs, not just direct parser calls. Tests downloaded and parsed **23 STL outputs**, including desktop PNG/JPEG relief and ASCII/binary STL grips, threshold/depth/crop/mode/scale/rotation/height/placement changes, remove/reset, representative parameter extrema, individual-part export and phone image/STL downloads. Export fingerprints match the exact final preview geometry; displayed millimeter dimensions agree within rounding. Different imported content and transforms measurably change geometry from both the baseline and each other.

Malformed/unsupported extension, fake image, oversized pixel header, truncated STL, open mesh, nonmanifold mesh, excessive file size, excessive triangle count, bad source dimensions and concave STL were rejected recoverably. Empty silhouettes, blank transforms, invalid model dimensions, missing mm confirmation and unsafe placements block exports and permit reset/replacement.

All three presets and four actual Variations results passed STL and mechanism checks. Undo/redo restores geometry; all four bundled sample imports survive portable JSON save/open with the same final fingerprint. Drag/drop works. Preview palette does not change exported geometry. No external file-processing requests or runtime errors were observed.

Phone widths **320 and 390 px** passed no-horizontal-overflow checks, touch orbit and pinch zoom, file import/download, all tabs, control collapse/expand and reachable fixed export action. Desktop and phone screenshots were reviewed; the model remains the primary workspace.

## Gallery and combined production bundle

The gallery's inline script was compiled with `new Function`; missing or empty scripts fail the test. The new folder occurs exactly once, first, with `area:"stl"`; all **90 prior entries** remain unchanged. The live gallery renderer retains **91 entries**, puts **STL Generators** first, supports search and reports no runtime errors.

Root `npm run predeploy` assembled **91 apps, 0 failed, 0 skipped**, including the root index and `deploy/20261023-11/`. The production bundle passed the complete browser, import/export, persistence/preset/variation and mobile-sheet suites under its real `/daily-app2/20261023-11/` base before publication. The archived gallery/tree was only read, never built or modified.

Evidence: `geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, desktop/mobile screenshots and the published-site check report.

## Public verification

Root `npm run deploy` reported Published. GitHub Pages build/deployment run `39887878750` completed successfully for gh-pages commit `2218e0ee3329796f271f5766121055c3eb42e7df`. The first public read returned a transient Pages 404 before propagation; retry after the successful deployment passed. The public app loaded, imported its synthetic PNG locally, downloaded a closed valid STL, and the public root gallery showed Crossleaf Calm first, with no runtime errors or failed requests. See `public-validation.json`.
