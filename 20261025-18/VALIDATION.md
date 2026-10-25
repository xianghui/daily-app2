# Run evidence — 2026-10-25

- `npm run predeploy`: production Vite build passed.
- `npm test`: 132 built-in/preset/boundary cases and 35 image/STL-derived cases passed independent mesh/manifold/dimension and mechanism checks.
- `node browser-test.cjs`: desktop/phone PNG, JPEG, ASCII/binary STL imports, actual binary STL downloads, transformed geometry checks, invalid content and export gating passed.
- `node feature-test.cjs`: presets, shape variation, text/icons/SVG relief, round trips, named designs, undo/redo, ZIP, saved dark theme, up-axis, stale edit gating and focus passed.
- `node resilience-test.cjs`: worker failure, malformed JSON and recovery passed.
- `node hole-test.cjs`: raised/engraved final solid probes preserve image holes.
- `node gallery-test.cjs`: combined production gallery renders 146 links with STL category first, unique new app entry and zero runtime errors. Inline scripts compile with `new Function`; 145 previous entries retained.
- ROOT `npm run predeploy`: 146 built, zero failures/skips; output contains gallery and correctly based app.

Detailed machine-readable evidence and desktop/phone screenshots are adjacent. Production-browser rerun uses `TEST_BASE=http://127.0.0.1:5298 TEST_REPORT=production-validation.json node browser-test.cjs` against the root deploy folder, not the Vite development server.

Mechanics checks are conservative geometric/linear-beam calculations, not force/fatigue/FEA. No physical print test performed.
