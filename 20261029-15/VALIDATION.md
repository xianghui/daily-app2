# Validation — Tunnel & Sight

Completed 2026-10-29. Computational/browser checks only; **no physical print or optical performance test**.

- Actual reference STL parsed and three section views inspected; SHA-256, dimensions, components, source defects and attribution recorded. Fresh remote STL fetch returned 403; inspected accessible cached public-source bytes, with fresh source README/LICENSE/frame SCAD.
- Individual React/Vite production build passed. Worker/WASM and all dependencies served under `/daily-app2/20261029-15/`.
- 18 built-in configurations, 35 imported-output cases and 16 additional mixed configurations: all exported card and part STLs independently checked for byte length, finite coordinates, mm bounds, unit normals, nondegenerate triangles, consistently directed two-face welded edges and one positive-volume closed component each. Invalid card combinations rejected.
- Twenty safe snips separate five parts plus carrier; eight open slots, shoulder contact, .15 mm tongue recess, collision-free insertion and perspective ray agreement checked. All intended parts remain distinct. Adhesive retention is explicitly required, not claimed captive.
- Ring-hole raised/engraved probes preserve both the empty mark centre and the continuous backing. Unsupported concave input rejected.
- 39 actual browser-download cases and 16 workflows passed: PNG/JPEG/SVG and ASCII/binary STL; pixel/threshold/relief/scale/rotation/placement geometry changes; signature matches preview and saved JSON; replace/remove/reset, named saves, JSON, undo/redo, text/icon, all parts and ZIP members.
- Truncated/open/nonmanifold/oversize inputs, excessive pixels/triangles, missing portable payload, invalid dimension/transform and worker failure block export, recoverable by valid replacement/reset/reload. Rapid edits produce only current-state exports.
- 320/390 px touch phones: preview-first, no horizontal overflow, real file pickers, reachable exports, CDP orbit/pinch changes. Desktop 374 px left rail/right viewer, saved dark theme, keyboard focus, collapsibles and reduced motion checked.
- Latest production smoke checks eye-position camera, off-axis preset, connected-card view and real STL download against current parameters. Screenshots inspected.
- Root gallery inline script compiled using Node new Function. New entry occurs once, area stl, correct folder, newest first; all 255 earlier entries retained, 256 total. Gallery renders without runtime errors, STL Generators first.
- Root predeploy: 256 built, 0 failed, 0 skipped; every gallery entry has deploy output and root index matches.

Reports: geometry-validation.json, extra-validation.json, browser-validation.json, production-preflight.json, final-smoke.json. Tests are reproducible with adjacent scripts; screenshots in evidence/. No personal input files or raw reference meshes are committed.

A test fixture originally tried a 64 mm plinth in the default narrow carrier; the app correctly blocked insufficient layout space. Browser undo/redo verification uses a fitting 61 mm edit; wide-plinth tests use the wider carrier. This was not hidden by exporting the last-good model.

Live GitHub Pages verification passed after successful Pages build `2dde511b`: gallery has 256 entries with Tunnel & Sight first; production worker/WASM loaded; real PNG import/download produced a closed-manifold STL; binary STL grip import and unit confirmation succeeded. No browser runtime errors. See live-validation.json. Initial cached 404 responses cleared after Pages propagation; query-versioned index was used for verification.
