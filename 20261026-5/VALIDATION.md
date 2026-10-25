# Triad Drift — validation record

Run: 2026-10-26. Computational and browser checks only; **no physical print, friction, fatigue, wear or child-safety testing**.

## Geometry and mechanism

- `node validate.mjs`: passed 68 built-in cases (default, three presets and 64 parameter corners), plus 25 imported-output cases spanning ASCII/binary STL, threshold relief, grayscale and engraving.
- Each individual part and the float32 separated plate passes independent binary STL count/length, finite coordinates, nonzero triangle area, outward normals, edge incidence/winding, connected components, positive enclosed volume and expected millimeter bounds. Weld tolerance: 0.00001 mm.
- Largest sampled constant-width departure across built-in cases: 0.002571 mm, below the 0.02 mm budget. Minimum side clearances remain at least the selected 0.25–0.60 mm per-side allowance.
- Independent Manifold intersection checks sample full-turn centered-bounds paths, floor support, vertical lift removal and deliberate lateral wall contact. Boolean differences verify imports do not change geometry beyond the protected palm well. Each intended part is a separate closed solid, with >7.9 mm print-layout spacing.
- Open-top guide intentionally does not retain the puck against lifting. The centered preview illustrates one possible path; real motion includes free play. Fits require physical calibration.

## Production browser checks

All browser tests use the actual built Vite output at `/daily-app2/20261026-5/`, not only a dev server.

- `browser-test.cjs`: passed 24 downloaded output cases; PNG/JPEG/ASCII/binary real file pickers; threshold/depth/content/crop/scale/rotation/placement changes; replace/remove/reset; exact preview/download fingerprints and JSON-regenerated geometry; individual STL checks; ten malformed/unsupported input rejections; empty images, invalid dimensions/transforms and safe-zone blocking; 320/390 px no-overflow layouts; touch orbit/pinch; phone imports/downloads. No runtime errors or external app requests.
- `feature-test.cjs`: passed 20 more model cases; every preset, bounded variations, silhouettes, text, SVG icons, raised/engraved ring, inverted JPEG, portable asset round trips, named designs, undo/redo, actual ZIP contents, per-part exports, views, saved theme, focus/collapsible sections, drag/drop, Y-up imports and stale/invalid export guards.
- `hole-test.cjs`: final boolean-solid probes confirm bright SVG ring holes remain unraised/unengraved and dark annuli change actual solid geometry in both styles.
- `interaction-test.cjs`: guided pose and see-through preview change rendered geometry without changing exported bytes; all six icons; named imported STL restoration across reload; production worker-abort disables export and reload recovers.
- `additional-test.cjs`: every numeric field changes exported geometry; named imported images survive reload; missing payload requests reattachment; inverted-Z orientation; 374 px desktop rail; reduced-motion styling; preview-first 320 px layout.
- `stale-import-test.cjs`: delayed normalization of an earlier image cannot overwrite a later file selection.
- Screenshots inspected: desktop editor and 320 px preview-first stacked phone, plus saved screenshots for views/dark theme.

## Gallery and staging

- All inline gallery scripts compile with `new Function`; new entry occurs exactly once with `area: "stl"`, newest first. All 160 prior entries preserved byte-for-byte. STL category remains first. Browser renders/searches all 161 cards without runtime errors.
- Per-app `npm run predeploy`: passed.
- Root `npm run predeploy`: 161 built/staged, zero failed/skipped.
- `root-stage-test.cjs`: every app index exists; root gallery matches source; all 43 new production files byte-identical to app dist.
- Combined-stage browser imports/downloads are rerun before publishing; see `combined-browser-validation.json`.

Raw JSON reports and reproducible scripts accompany this document. Publication receipt is stored separately after successful deployment.
