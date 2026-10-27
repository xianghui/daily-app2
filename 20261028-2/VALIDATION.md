# Performed validation

All checks use computed/exported geometry, not a physical print. No print or load test claimed.

- `npm test`: 12 parameter cases and 30 import-derived cases. Independent binary STL topology/winding/volume/bounds checks on card and every part, real solid-intersection assembly/seating checks, 20 virtual tab cuts → carrier plus 5 independent parts.
- `browser-test.cjs`: production file-picker PNG/JPEG/ASCII STL/binary STL imports, parameter changes, real downloaded geometry and exact UI/export/JSON-state signatures, invalid/unsupported sources, reset/replace/remove, per-part exports, 320/390 px phone layout, touch orbit and pinch, phone imports/downloads. No runtime errors or nonlocal requests.
- `feature-test.cjs`: all presets, variants and shapes, text/icon/SVG personalization, portable asset JSON and named designs, undo/redo, all per-part and ZIP contents, views, colours, persisted theme, keyboard/collapsibles, up-axis transforms and current-state gating.
- `hole-test.cjs`: probes actual boolean geometry to verify SVG ring centre stays unraised/unengraved in both modes.
- `studio-layout-test.cjs`: 374 px desktop control rail/right viewer, preview-first 320 px phone layout, no horizontal overflow, isolated views, geometry-neutral tread-lift preview and reduced motion.
- `resilience-test.cjs`: aborted production worker blocks export; reload recovers; all six original SVG icon shapes change geometry.
- `portable-errors-test.cjs`: missing image, invalid transforms, wrong-app and bad dimensions rejected and recoverable.
- `stale-import-test.cjs`: async normalization cannot overwrite a newer source.
- `validate-gallery.cjs` and `gallery-test.cjs`: root inline script compiles, all 213 existing entries retained, exactly one new entry, STL category first and runtime/search checks.

See individual JSON reports and screenshots for evidence. Reference source hash/measurements/components/cross-sections and new-vs-measured interfaces are in `reference-analysis.json` and README.

Combined-root `npm run predeploy`: 214 apps built/copied, 0 failures, 0 skipped; root index and every app index verified. Repeated complete import/download/mobile browser suite against combined deploy tree (`combined-browser-validation.json`) and gallery render passed. ROOT `npm run deploy` returned `Published`.

GitHub Pages run [40547833423](https://github.com/xianghui/daily-app2/actions/runs/40547833423) completed successfully. Initial public 404 while Pages was still building resolved after deployment. `node public-smoke.cjs` then verified public HTTP 200, real worker/WASM loading, actual PNG picker conversion and downloaded manifold STL matching the UI fingerprint, plus live newest-first 214-card gallery with no runtime errors (`public-validation.json`).
