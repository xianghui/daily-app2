# Pulse Loop — validation record

Date: 2026-10-27 (Asia/Singapore). All checks below ran against this app, not copied reports.

## Computational geometry and mechanism

- `npm test`: 20 default/preset/representative parameter cases and 35 image/STL-derived cases passed.
- `node extrema-validation.mjs`: 64 built-in and 128 imported outputs at all 64 six-parameter corners passed.
- Independently parsed float32 per-part and plate STL: finite vertices, nonzero/nondegenerate faces, unit normals aligned with winding, exactly two oppositely directed incidents per welded edge (1e-5 mm), separate positive-volume connected components, expected mm bounds and bed orientation.
- Rotor/cradle rigid intersection checks through complete-turn poses, separated print layouts, open bore, minimum wall/floor/bearing/axial bounds, import keep-out and vertical lift-out path passed.
- `node contact-validation.mjs`: all three presets show three actual intersections with a test-only undeformed hollow 4/2 mm tube segment and three intervening releases per revolution. This demonstrates geometric engagement, not elastic force or dynamics.
- Unsupported malformed, open, nonmanifold, concave and overhanging input is rejected, never silently repaired or hull-replaced.

## Real production-browser tests

- `node browser-test.cjs`: 24 actual downloads validated; PNG, JPEG, ASCII and binary STL file pickers, changed pixels/threshold/depth/crop, STL scale/rotation/height/placement, replace/remove/reset, per-part exports and exact current preview/download/portable-JSON rebuild fingerprints passed.
- `node feature-test.cjs`: 20 feature-generated models checked, all presets, bounded variations, ergonomic shapes, text, SVG ring, six bundled searchable icons, raised/engraved and background inversion, undo/redo, named local saves, portable asset restore, ZIP member geometry, all views, preview-only colour and Y-up import passed.
- `resilience-test.cjs`, `hole-test.cjs`, `portable-errors-test.cjs`, `stale-import-test.cjs`: worker abort/export gating/reload; actual raised/engraved hole probes; missing payload/invalid JSON/transform recovery; intentionally delayed earlier import cannot overwrite the latest file.
- 390/320 px touch contexts: preview-first layout, no horizontal overflow, reachable downloads, real phone PNG/STL imports, CDP touch orbit and pinch image changes. Desktop left panel/right viewer, collapsible sections, keyboard focus, saved dark theme. Reduced-motion CSS included.
- No app runtime errors or remote dependency/file-upload requests observed. Files are processed locally with bundled workers/WASM/fonts.

## Build, gallery, staging and live publication

- Individual `npm run predeploy` passed; exact app predeploy/deploy scripts, gh-pages dependency and `/daily-app2/20261027-16/` base verified.
- Gallery inline scripts compiled with `new Function`; new entry exactly once, area `stl`, newest-first; all 200 earlier entries unchanged, STL category first. Browser search/render recovery passed.
- Root `npm run predeploy`: 201 built/staged, 0 failures, 0 skipped. Root staging matches gallery; new app files byte-identical to tested `dist`.
- Full import/download/phone browser suite rerun on the combined staged site: `root-browser-validation.json`.
- Root `npm run deploy` completed successfully. GitHub Pages build/deploy workflow succeeded; public app returned 200, live worker/WASM and real binary STL export matched the tested model, and combined gallery listed Pulse Loop first (`public-validation.json`).
- Live four-format input/download checks: `public-import-smoke.cjs` and `public-import-validation.json`.

## Physical work not performed

**No physical print, silicone-tube stiffness/force, lifting, retention, fatigue, wear or tactile-feel test was performed.** Tube material recommendations and 0.3–0.7 mm FDM fits require printer/material calibration. Tube and rotor are intentionally lift-out, not captive. External silicone tube is not exported; its amber ghost is estimated undeformed positioning, not a deformation simulation. Computational contact and watertightness do not prove a working physical print.
