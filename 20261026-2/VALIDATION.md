# Validation record

Run on 2026-10-26 against the actual Vite production output under `/daily-app2/20261026-2/`.

- `npm run predeploy`: passed; dependencies, fonts, worker and WASM served locally.
- `node validate.mjs`: 132 default/preset/parameter-extrema cases and 25 imported-output cases passed. Individual and combined final binary STL checks include welded topology, finite/positive geometry, winding/normals, independent mm dimensions and bed-flat separated layout.
- CSG sweeps check ring-held, sun-held, carrier-held and independent blended motion; external and internal gear relations; unintended intersections; ring floor support; lift/release; isolated import envelopes. Deliberate friction-cap interference is restricted to the small mounting stubs. Reports distinguish this from physical testing.
- `node browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file-picker imports, source/threshold/depth/crop/scale/rotate/place changes, replace/remove/reset, dimensions, actual downloaded STL vs exact current preview/state fingerprint, invalid/truncated/open/nonmanifold/concave/excessive input rejection, safe-area/invalid transform blocking, phone 320/390px layout, touch orbit and pinch, phone imports/downloads, no runtime errors or external app requests.
- `node feature-test.cjs`: all presets and shapes, bounded variations, text/icon/SVG marks and engraving, background inversion, undo/redo, portable image/mesh JSON, local named designs, actual seven-part ZIP and per-part STLs, views, dark-theme persistence, preview-colour geometry neutrality, drag/drop, Y-up orientation, collapsed controls, focus and latest-worker result.
- `node resilience-test.cjs`: abort real production worker request → clear error and disabled export; reload recovers; malformed JSON blocks export and reset recovers.
- `node additional-test.cjs`: every parameter alters geometry; saved imported image survives reload; absent portable payload requests reattachment and blocks export; −Z orientation; 374px left desktop rail; reduced-motion style; preview/export first on 320px phone.
- `node hole-test.cjs`: independent solid probe confirms the SVG ring's centre remains unraised / unengraved while the surrounding mark changes geometry; both outputs remain closed manifolds.
- `node interaction-test.cjs`: both independent sun/ring controls visibly move the rendered mechanism; see-through base changes rendering without changing export; named STL payload restores after reload.
- `node gallery-validate.cjs` and `node gallery-test.cjs`: inline scripts compile, exactly one new STL entry, all 157 previous entries preserved in order, 158 rendered links, search works, STL category first and no runtime errors.

Reports: `*-validation.json`; screenshots: `*-validation.png` and `view-*.png`. Tests use synthetic fixtures only. No physical print, torque, force, friction, wear or fatigue tests performed. Computational validity is not a guarantee of real printer tolerances. Use Pocket Sum and a loose cap allowance for initial calibration.
