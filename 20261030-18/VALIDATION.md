# Validation — Sweep & Scribe

Performed on 2026-10-30. No physical prints or physical drawing tests.

- Reference STL freshly downloaded and parsed: 30,616 triangles, 27 edge-adjacent components, source SHA-256 and sections recorded. Source defects not repaired by assertion; new original solid reconstruction.
- `npm test`: **32 built-in + 8 imported** cases. Each exported float32 STL checked for finite/nondegenerate triangles, exact binary length, unit/winding-consistent normals, millimeter bounds, welded closed edges, component-wise positive volume and bed alignment.
- `node import-extremes.mjs`: **6** additional image/ASCII/binary extrema; same full checks.
- Actual-solid assembly checks per case: 360° arm sweep at 25 positions, two insertion/lift-off paths at 25 samples each, foot socket gauge, two shoulder stops, pencil passage clear of foot, flat parts disjoint, twelve safe snips release three parts plus carrier, sampled support footprints.
- `node hole-check.mjs`: actual solid probes confirm bright image hole stays unengraved and surrounding mark is cut.
- `npm run predeploy`: production build passed; local bundled worker/WASM/fonts.
- `browser-test.cjs`: PNG/JPEG/ASCII/binary file-picker imports; real STL downloads compared with exact UI mesh fingerprint and regenerated saved JSON. Pixel/threshold/depth/crop and mesh scale/rotation/placement affect geometry. Remove/reset restore original. Invalid/truncated/open/nonmanifold/concave/excessive files, empty images, invalid dimensions and unsafe transforms block export recoverably. All individual part downloads checked.
- Phone 320/390 px: preview-first, no horizontal overflow, reachable export, real PNG/STL imports and downloads; touch orbit and pinch change canvas.
- `studio-test.cjs`: all presets/silhouettes, text/icons/SVG, portable image/STL JSON and named reload, missing payload errors, undo/redo, actual ZIP contents independently parsed, every view, theme persistence, focus, collapses, reduced motion, 374 px left rail, worker abort/reload recovery.
- `axis-test.cjs`: Y-up / −Z-up input transforms and explicit reattachment on axis change.
- `motion-test.cjs`: preview sweep visibly changes arm angle while printable bytes remain unchanged; edit immediately disables stale export and last edit wins.
- `preview-test.cjs`: assembled, card, exploded and phone screenshots.

Machine reports beside scripts contain observed results. Gallery/combined/publication reports separately cover deployment. No claim of universal printer tolerance, friction, adhesive strength, foot stability or drawing accuracy. Pencil and adhesive required; gravity-seated beam deliberately lifts off.
