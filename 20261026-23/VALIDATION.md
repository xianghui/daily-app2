# Liftlink Turn — validation record

## Passed computational checks

- `npm run predeploy`: production Vite build, locally bundled worker/WASM/fonts.
- `npm test`: **68 built-in parameter cases**, including all three presets, three silhouettes and all 64 corners of the six numeric parameter ranges; **30 image/STL-derived output cases**, across presets and extrema. Every separate part and combined float32 print-plate STL checked.
- Binary STL: exact byte count, finite coordinates, nonzero faces, unit normals consistent with winding, two opposite-directed triangle incidences on every welded edge (0.00001 mm tolerance), connected components, positive enclosed volume per component, Euler characteristic and millimeter bounds. Four separate closed solids, never interpenetrating print-plate shells.
- New app-local mechanical CSG checks: synchronized involute gear turning, five lift positions, full disengagement with independently rotated idler, actual tooth-flank contact when an engaged input is rotated against a fixed neighbor, free vertical assembly/release, separate print positions and imported geometry isolation.
- Collision sweep sample counts are odd and at least 19 intervals, avoiding aliasing at the 16-tooth pitch. `dense-check.mjs` additionally checked **130 rotational samples × five lift positions** for default, min, max and all three presets, with **zero unintended intersection volume**. Independent analytic expectations verify base width/height/length and gear tip diameters/face heights.
- Every numeric control changes exported geometry; minimum tooth-tip width 0.829 mm and hub radial wall 3.4 mm. Initial thin-tip issue was found and fixed by decoupling tooth-flank allowance from bearing fit, then final builds/tests were rerun.

## Passed production browser checks

`browser-test.cjs`: **26 actual STL downloads**, ten malformed/excessive/unsupported file rejections. File-picker PNG and JPEG, ASCII and binary STL; changed pixel content, threshold, depth, crop/fit, grayscale, scale, rotation, placement, height, replace/remove/reset and exact default restoration. Each download was compared to the preview fingerprint and regenerated from its downloaded JSON state, then mesh/kinematic checks run. Repeated against the **root combined deploy output** (`root-stage-validation.json`), not only a development server.

`feature-test.cjs`: 20 checked feature-derived models, every preset, bounded variations, all silhouettes, text, searchable original SVG icons, raised/engraved SVG, background inversion, undo/redo, named saved designs across reload, PNG/JPEG/ASCII/binary portable JSON round trips, actual ZIP decompression and each contained STL, per-part buttons, persisted dark theme, preview-colour neutrality, drag/drop, Y-up imports, keyboard focus, collapsible sections and latest-worker/invalid-export behavior.

`additional-test.cjs`: each field changes output; preview-only motion preserves STL signature, imported named designs persist, missing payload asks for reattachment and blocks export, −Z imports, reduced motion, 374 px desktop left rail, no overflow and preview-first phone stacking.

`resilience-test.cjs`: production worker script deliberately aborted; actionable worker error and disabled exports; reload recovers. All six bundled icons produce distinct real geometry.

`hole-test.cjs`: CSG probes inside the final boolean palm prove the SVG ring's bright center remains unraised/unengraved while the dark ring adds/removes real solid volume.

`stale-import-test.cjs`: delayed first image normalization cannot overwrite a newer import.

`view-test.cjs`: all eight view modes, idler lift and free-mode rotation visibly update; print geometry remains unchanged. See-through palm checked.

Touch-enabled Chromium at **320 and 390 px**: no horizontal overflow, preview first, reachable export and uploads, actual PNG/STL phone downloads. CDP touch orbit and two-finger pinch produce changed canvas images. Runtime page errors and external requests: **none**.

Screenshots and JSON reports live alongside the reproducible scripts. Synthetic fixtures only; no personal assets recorded.

## Gallery and combined deployment

Root inline script compiled with `new Function`; new folder entry exactly once, area `stl`, newest first, STL Generators category first. **All 178 previous entries preserved unchanged; 179 cards rendered** with working search and no runtime errors. Root `npm run predeploy` staged **179 apps, zero failed, zero skipped**, including the new app, module worker and WASM. Root staged app repeated real import/download checks.

## Not performed / design limits

**No physical print, friction, force, wear, endurance or fatigue testing was performed.** Computational watertightness and collision checks do not establish printer-specific performance. Use Gentle Start as a full-size calibration set and adjust 0.3–0.6 mm running gaps for your printer/material. Gears are intentionally non-captive and must be used level; hold the middle gear raised and align teeth before lowering. The single-row combined plate can exceed a 220 mm bed; use separate part downloads or rearrange the ZIP parts in your slicer. Imported STL is limited to verified broad flat-bottom convex solids; unsupported concave geometry is rejected, not flattened/repaired/replaced by a hull. Images are bounded sampled relief, not exact vector tracing or 3D photo reconstruction. Free-mode preview phases do not simulate contact or automatic tooth alignment.
