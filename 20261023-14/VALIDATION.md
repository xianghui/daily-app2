# Executed validation — 2026-10-23

- App `npm run predeploy`: passed (React/Vite production build).
- `npm test`: 78 parameter cases (including every six-dimensional parameter-box corner), 24 image/STL integration cases. Independent exported-binary manifold, winding, positive-volume, dimensions, and mechanism checks passed.
- `node variation-regression.mjs`: 128 seeded variations passed mesh/mechanism checks.
- `node browser-test.cjs`: passed. Actual PNG/JPEG/ASCII/binary file pickers and downloads; pixel/threshold/relief/crop/scale/placement changes; exact final-mesh/export fingerprints; malformed/unsupported/excessive-file rejection and recovery; phone touch orbit/pinch and STL downloads; individual named-part export.
- `node extra-browser.cjs`: passed all presets, four randomizations, portable image/STL JSON round trips, undo/redo, drag/drop, preview colour neutrality, import mechanism probes.
- `node mobile-sheet.cjs`: passed 320 px phone controls collapse/expand, all five tabs and fixed reachable export. Desktop and phone screenshots inspected.
- `node gallery-test.cjs`: passed inline script compilation, exactly one new STL entry, category order, preserved previous entries, search and runtime rendering.
- Root `npm run predeploy`: passed, **94 built, 0 failed, 0 skipped**; root index plus each app in deploy/.
- Production-deploy server on port 5275, full browser-test repeat: passed; report `production-browser-validation.json`.

An initial browser run overlapped a Vite source hot reload and downloaded a reset/default state while switching imports. After completing source edits, the stable development rerun and complete production rerun both passed. No mesh/build failures were suppressed.

All reports use synthetic fixtures. No physical prints, material/force measurements, FEA, deployment demonstration or fatigue tests were performed. Static material/air intersection probes and conservative small-extension exclusion calculations are **geometry checks**, not proof of mechanical performance. Calibrate TPU and keep initial pull below 0.5 mm total extension.

## Publication

Root `npm run deploy` published the combined `deploy/` site. The first public check encountered GitHub Pages propagation (404); a retry after propagation passed. `public-check.cjs` verified the live title, local sample-image conversion, downloaded binary STL validity, newest gallery entry, and zero runtime/HTTP asset errors. Report: `public-validation.json`.
