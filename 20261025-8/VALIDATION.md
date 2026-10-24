# Validation — 2026-10-25

## Passed

- Individual `npm run predeploy`: production Vite bundle, local WASM/fonts.
- `npm test`: **132** preset/boundary combinations and **35** image/STL-derived cases. Every part independently checked for finite nondegenerate triangles, outward normalized normals, positive component volume, welded closed-manifold edge incidence and independent mm bounds.
- Mechanism: 12 ideal full-turn positions per model, perpendicular key alignment, ≥3 mm radial envelope, 1.5–2 mm tongue engagement, ≥4.5 mm groove floor; pairwise Manifold intersections empty. All three print-plate components separated. Imported additions/removals restricted to the protected outer palm.
- `node browser-test.cjs`: **25** actual STL downloads; real PNG/JPEG and ASCII/binary STL file picker imports; pixel/threshold/depth/crop/scale/rotation/placement changes survive export, exact current preview signature and JSON-regenerated model match, replace/remove/reset, min/max inputs, ten malformed/unsupported fixtures and empty silhouettes rejected recoverably. Every downloaded result is independently reparsed and mechanically checked. 320/390 px widths, touch orbit/pinch and phone imports/downloads; no horizontal overflow, runtime errors or remote file-processing requests.
- `node feature-test.cjs`: **20** preset/variation/personalization/restore model checks; all shapes and presets, text, searchable heart mark, hole-bearing SVG, engraving/background handling; named storage persistence, undo/redo, portable PNG/JPEG/STL JSON round trips, Y-up STL orientation; per-part/ZIP exports, ghost/assembled/exploded/isolated/plate views, saved theme, colour-neutral STL, drag/drop, collapsible sections, keyboard focus and stale-result/invalid-export gating.
- `node resilience-test.cjs`: failed worker load blocks export; reload recovers; malformed JSON blocks export, reset recovers.
- `node mechanism-browser.cjs`: actual guided turn changes rendered geometry positioning while export geometry stays unchanged; ghost/exploded views and 320 px assembled layout/export reachability.
- `node production-test.cjs`: built production bundle loads, local sample → real exported STL matches portable design regeneration, all three components validated, collision checks pass, no failed asset requests/runtime errors. The production test initially assumed one component, inherited from a single-part studio; corrected to independently regenerate and validate this three-part product, then rerun successfully.
- `node gallery-test.cjs`: all inline scripts compiled with `new Function`; new STL entry exactly once and newest; all 135 earlier entries unchanged; 136 rendered cards; STL category first; search and gallery rendering without runtime errors.
- Root `npm run predeploy`: **136 built/copied, zero failed, zero skipped**. Every gallery app has `deploy/<folder>/index.html`; root and new-app deployed HTML match source build.

Machine-readable reports and desktop/mobile/dark/view screenshots are alongside this file. Tests check geometry and ideal kinematics, not material behavior or physical manufacturability by experiment.

## Publication

- Root `npm run deploy`: published combined `deploy/` through gh-pages; 136 apps retained.
- Public https://xianghui.github.io/daily-app2/20261025-8/ returns HTTP 200. After the initial Pages propagation delay, the real-browser production suite passed against the public URL: local sample conversion, WASM worker, actual downloaded three-component STL, exact preview/design geometry match, and mechanism collision checks. No runtime errors or failed requests. See `live-validation.json`.

## Explicit limitations

No physical print, sliding friction, wear or fatigue test performed. This is a **loose, hand-retained Oldham coupling**, not a captive mechanism with fixed bearings. Actual hands maintain the selected axis offset. Both outer discs print flat without supports; the cross-shuttle **requires removable supports beneath its underside disc**. PLA/PETG and 0.25–0.50 mm per-side clearance are starting points only; calibrate using Pocket Cross. STL integration intentionally rejects unsupported concave/hollow/open/overhanging meshes rather than repairing or replacing them. Image conversion is a bounded sampled height-map on a continuous backing, not full 3D photo reconstruction or exact vector tracing.
