# Validation — 2026-11-05

Computational tests, not physical printing.

- `npm run predeploy`: production React/Vite build, local worker/WASM/fonts.
- `npm test`: 43 default/preset/individual-range/combined-extreme/silhouette/image/STL cases passed. See `geometry-validation.json`. Independent float32 STL parsing checks byte length, finite/nondegenerate triangles, normals, welded edges/directions, component volumes, topology, mm bounds and bed plane. All clean parts and their combined print plate are tested separately from the connected card.
- Every case: 12 actual runner cuts, exactly carrier + three released parts, no damage/debris; declared card envelope; supported flat footprints; no part overlap in print or assembled poses; 41 samples of each foot insertion; every thread eye probed in clean and connected-card solids; 1 mm protected art backing.
- `browser-test.cjs`: actual production file-picker PNG/JPEG and ASCII/binary STL imports, actual downloaded STL byte signatures matching the displayed final model, Node regeneration from saved current-state JSON, geometry/assembly checks on imported outputs, replacement/removal/reset, pixel/threshold/depth/scale/rotation/placement changes. Malformed/truncated/open/nonmanifold/concave/excessive inputs, empty images, invalid dimensions/transforms and safe-zone failures block export recoverably. Desktop and 320/390 px touch contexts; real orbit and pinch change the canvas. No runtime errors or remote generation requests. See `browser-validation.json`.
- `hole-test.cjs`: uploaded SVG ring leaves its center backed and engraves the actual band, checked on the final Boolean solid.
- `resilience-test.cjs`: abort production worker, block export, reload and recover; all six bundled SVG marks.
- `portable-errors-test.cjs`: missing portable image, wrong app, invalid transform/dimensions reject recoverably.
- `stale-import-test.cjs`: delayed earlier image decoding cannot overwrite a later mesh/image/removal.
- `mobile-layout.cjs`: 320/390/480 px every editor section, expanded assembly guide, actual JSON downloads, preview before controls, no horizontal overflow or viewport scaling; 374 px desktop left rail and right viewer.
- `feature-test.cjs`: presets/silhouettes, text/icon/SVG/background conversion, undo/redo, portable PNG/JPEG/ASCII/binary roundtrips, persistent named designs/theme, view modes, per-part and actual ZIP exports, colour-only preview distinction, drag/drop, Y-up mesh import, collapsible sections, keyboard focus and current-worker export gating. See `feature-validation.json` after successful execution.

Reference analysis includes actual source hash/units/bounds/component anomalies and three source cross-sections, recorded before final design selection. Selected source is a design reference, not a redistributed/repaired print asset.

External soft cotton thread and adhesive required. Thread chord preview is explanatory and not printed. Geometric insertion/clearance tests are not tests of force, adhesion, stability, tension, comfort or fatigue. Physical printing, fits, assembly, lacing and durability are **untested**.

Combined monorepo predeploy: 459 apps, 0 failed, 0 skipped. All 458 prior gallery entries unchanged; one new entry first, area stl. Root inline script compiles; combined gallery runtime and new link passed. Combined production worker/WASM plus real PNG/STL uploads and downloaded manifold STL checked before publication.

Publication: root gh-pages publish succeeded; GitHub Pages build/deploy run 41960018750 completed successfully for bc8c0c13636d0acbf5b6446c211d5dae185ccf10. Public https://xianghui.github.io/daily-app2/20261105-12/ verified in Chromium: 459-entry gallery, live worker/WASM, actual PNG and binary-STL uploads change downloaded closed-manifold STLs with exact preview/export signatures, no runtime errors. Main implementation commit 66608705 pushed.
