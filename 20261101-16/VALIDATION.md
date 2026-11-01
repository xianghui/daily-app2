# Validation — Shed & Shuttle

Computational and browser checks only. **No physical printing, assembly, yarn tension, threading or weaving was tested.**

- `npm test`: 48 geometry/model cases: defaults, 3 presets, 3 profiles, every parameter endpoint, combined extrema, image threshold/grayscale and ASCII/binary STL cutters, including imported assets at both combined extremes. Every individual STL, connected card and de-tabbed plate parsed independently: finite coordinates, nondegenerate triangles, unit normals, consistent outward winding, welded edge incidence exactly two/opposite, positive volume per component and expected mm bounds. Invalid count, dimensions, transforms, empty art and impossible packing reject.
- Kernel checks: 10 assembled rigid-part pairs, 11 anchor insertion heights, four socket/tongue probes, heddle at −5/−2/0/+2/+5 mm, 0.8 mm yarn tube routes through actual alternating slits/eyes, full-shed thin-shuttle sweeps, ideal passage clearance, declared shuttle overall length, no part overlap, bed footprint containment and exact card envelope. Twenty accessible runner cuts yield five parts plus the waste carrier. Heddle remains intentionally hand-held; fixed anchor joints require adhesive.
- Actual production-browser file pickers: PNG, JPEG, simple SVG, ASCII/binary STL. Downloads compared to preview signature AND JSON-regenerated exact geometry; exported parts undergo the same mesh/assembly checks. Pixels, threshold, depth, crop, background, scale, rotation and placement demonstrably change geometry. Replace/remove/reset reproduces baseline. Invalid/truncated/open/nonmanifold/concave/excessive inputs and missing payloads block export and recover.
- Six icons and text, real drag/drop, hole/backing solid probes, explicit mm confirmation and Z/Y/−Z orientation tested. Original source meshes are never hull-replaced.
- Studio: all presets/views, isolated parts, per-part buttons, actual ZIP contents, portable image/STL JSON and named designs, undo/redo, live/stale worker handling, worker abort/reload, saved dark theme, keyboard focus, collapsible sections and reduced motion.
- Phone: 320 and 390 px, preview-first stacked layout, reachable exports/file inputs, no horizontal overflow, actual CDP touch orbit and pinch verified by changed canvas screenshots.
- Combined root deploy: inline script compiled with `new Function`; missing script fails. New entry once, `area: stl`, first category “STL Generators”; all 346 earlier entries retained. Root predeploy staged 347 apps, zero failures/skips. Production-prefix browser import/download tests run against the combined deploy output, not just Vite dev.

## Reproduce

`npm run predeploy`; `npm test`; `node serve.mjs` (5676). In another terminal: `node browser-test.cjs`, `node studio-test.cjs`, `node rapid-test.cjs`, `node icons-drop-test.cjs`, `node orientation-test.cjs`, `node personalization-check.mjs`.

For combined output: root `npm run predeploy`, then `PORT=5686 node serve-combined.mjs`; run `TEST_BASE=http://127.0.0.1:5686 node gallery-test.cjs ../deploy/index.html` and `TEST_BASE=http://127.0.0.1:5686 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`.

Reports: `geometry-validation.json`, `browser-validation.json`, `combined-browser-validation.json`, `studio-validation.json`, `rapid-validation.json`, `icons-drop-validation.json`, `orientation-validation.json`, `personalization-validation.json`, `gallery-validation.json`. Screenshots under `evidence/` plus desktop/mobile validation images. Reference provenance, hash, components, sections and mapping are recorded separately.

Source reference defects are disclosed. Manifold CSG and mathematical clearance checks are not a physical-print or weaving-performance guarantee. Start with a calibrated anchor/sole trial and modest yarn tension.

## Public release check

Root `npm run deploy` published gh-pages commit `9aaed7342aa7dc741ac9c1905bbc7a001cb44491`. GitHub Pages reported `built` without errors. `node live-test.cjs` then verified the public app returns HTTP 200, the production worker builds, actual downloaded STL matches current source signature `c4fd7d99`, the live gallery finds the new entry, and no browser runtime errors occur. See `release-validation.json` and `evidence/published-studio.png`. Source implementation committed/pushed as `08ca77d`.
