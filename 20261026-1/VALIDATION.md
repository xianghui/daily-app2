# Bight Lift validation — 2026-10-26

## Computational checks

- `npm test`: 132 default/preset/all-corner parameter cases, 35 image/STL-derived cases. Each part and the separated float32 print plate pass binary-STL file length, finite coordinates, nondegeneracy, unit normal/winding consistency, 0.00001 mm welded-edge incidence/direction, connected-component positive volumes, intended topology and millimeter bounds.
- Mechanical intersection checks: 41 positions per sampled/imported model; no shoe/guide collisions across the supported stroke, floor contact and blocked penetration, clear vertical removal, side/end stops, cord clearance above fixed walls, palm-import isolation, separated export layouts and ideal 2:1 two-span cord kinematics.
- Production browser: 24 downloaded STL cases, including actual PNG/JPEG and ASCII/binary STL file-picker imports and transforms. Every downloaded mesh matches the exact preview fingerprint, regenerates from its portable JSON and passes independent mesh/mechanical checks. Defaults, min/max controls, changed image threshold/depth/pixels, grayscale, crop and STL scale/height/rotation/placement differ measurably in exported geometry. Remove/reset restores the default fingerprint.
- 10 malformed/unsupported file cases rejected (truncated, open, nonmanifold, excess size/pixels/triangles/dimensions, invalid image/SVG, concave mesh), plus empty images, invalid transforms and out-of-range dimensions. Recovery tested. Exports disabled during invalid, pending and stale states.
- 20 feature models checked: all presets, shape variations, text, searchable icon, SVG ring, raised/engraved/background modes, portable image/STL round trips and Y-up transform. Named designs persist across reload; missing portable image requests reattachment. Undo/redo, negative-Z orientation and all numeric fields verified.
- Actual Everything ZIP unzipped; both part STLs independently validated. View modes and swatches change only the intended preview state, not export geometry. Final-solid probes verify ring holes remain unraised/unengraved with continuous backing preserved.
- Worker JS failure blocks export; reload recovers. Malformed JSON blocks export; reset recovers. No remote generation/font/API requests and no runtime errors during normal browser tests.
- Desktop 374 px left panel/right viewer; 320/390 px preview-first phones without horizontal overflow, reachable exports, real touch orbit and pinch, phone image/STL picker/downloads. Collapsible sections, keyboard focus, reduced-motion preference and saved dark theme verified. Screenshots accompany reports.
- Gallery: all inline scripts compiled with `new Function`, new STL entry exactly once, all 156 earlier entries preserved in order, 157 app links render and search works with STL category first.

Tests use actual production `dist` output and its `/daily-app2/20261026-1/` worker/WASM paths. Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `additional-validation.json`, `hole-validation.json`, `resilience-validation.json`, `gallery-validation.json`. Root publication checks are recorded separately after the root build/deploy.

## Not tested physically

No physical print, cord-friction/feel, efficiency, cord force, abrasion, durability or fatigue tests. Cord routing is illustrative; the 2:1 ratio assumes taut inextensible cord and hand guidance. The shoe is sliding, not a rotating pulley. No guaranteed tactile force, universal tolerance, automatic return or captive retention. Hardware-free direct thumb sliding deliberately omits the cord coupling.

## Root publication

Root `npm run predeploy` and root `npm run deploy` completed successfully: 157 apps built/copied, zero failed or skipped, gh-pages reported Published. Root index and all 44 new app production files match the combined deploy tree exactly. Public browser verification is recorded in `publication-validation.json` after Pages propagation.

GitHub Pages workflow [40210371862](https://github.com/xianghui/daily-app2/actions/runs/40210371862) succeeded. After initial Pages propagation (temporary 404), public browser verification passed at https://xianghui.github.io/daily-app2/20261026-1/ : real production worker/WASM, default plus PNG/JPEG/ASCII/binary imports, downloaded STL meshes matching preview and portable JSON, actual per-part ZIP topology, reset, and live gallery entry. No runtime errors.
