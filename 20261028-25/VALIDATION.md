# Validation — 2026-10-28

- `npm run predeploy`: passed; actual production prefix `/daily-app2/20261028-25/`, locally bundled worker/WASM/fonts.
- `npm test`: **28 built-in + 35 imported-output cases** passed. Defaults, three presets, 24 representative extrema; actual per-part and connected-card binary STL checked independently for exact byte layout, normals, finite/nondegenerate facets, edge closure/orientation, positive component volumes and millimeter bounds.
- Assembly: paired tongues insert from above, shoulders seat, all four parts remain nonintersecting, disk swings ±10° around the beam-hole line without hitting stand/base; actual bores accept 1 mm thread. Cord-hole borders checked ≥1.2 mm with a 0.001 mm float32 fill allowance. All sixteen modeled snips avoid functional geometry and split card into **four parts + one carrier**. De-tabbed parts separately closed/manifold. Card envelope and print orientation checked.
- Initial checks found and corrected sloping-edge disk-tab cuts and conservative suspension-hole placement. Numerical rim-probe fill covers float32 STL coordinates explicitly; no arbitrary geometry repair was used.
- `browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file-picker imports and downloaded binary STLs; every output signature equals the UI mesh and Node regeneration from downloaded JSON. Image content/threshold/depth/crop and mesh scaling/rotation/placement affect actual geometry. Unsupported/truncated/open/nonmanifold/concave/excessive inputs, bad dimensions, invalid transforms and empty images block export and recover. Default, min/max, all parts, 390 px phone downloads and 320 px overflow tested. Touch orbit and pinch verified by canvas comparisons; zero runtime errors or remote runtime requests.
- `feature-test.cjs`: all presets, three bounded variations, three silhouettes, text, SVG, engraving, searchable icon, background conversion, exact portable image/STL roundtrips, undo/redo, local named save/reload, actual ZIP extraction/mesh validation, per-part downloads, all view modes, saved dark theme, geometry-neutral swatches, drag/drop, Y-up STL, collapse/focus, latest-worker state and invalid export blocking.
- `hole-test.cjs`: actual final-solid probes confirm SVG ring hole remains unraised / unengraved while ring pixels add/subtract real geometry. Structural backing remains continuous.
- `resilience-test.cjs`: production worker request deliberately aborted; error/export gating verified; reload recovery and all six bundled icon geometries verified.
- `studio-layout-test.cjs`: 374 px desktop left rail/right viewer, phone preview-first, no 320 px overflow, isolated views and reduced motion.
- `named-import-test.cjs`, `portable-errors-test.cjs`, `stale-import-test.cjs`: portable/named import recovery, missing payload errors and asynchronous import staleness. See JSON reports for exact outcomes.
- Reference: newly downloaded public STL parsed and cross-sections viewed; SHA/source/components/defects and exact measured-to-redesign mapping retained. No raw reference mesh redistributed.

Geometry/browser checks are **not physical print, acoustic, force, knot, wear, fatigue, tipping-under-force or slicer tests**. None of those were performed. Thread and optional fixed-joint glue are disclosed. No tuned ringing claim.

## Root publication

Root predeploy staged **236 apps, zero failures/skips**. Root inline JavaScript compiles, all 235 prior gallery entries are unchanged, and the new `stl` entry is exactly once/newest first. All 43 new production files are byte-identical in root `deploy/`. The full real-file/download/mobile suite also passes against the staged root output. An initial staging test overlapped npm’s automatic root rebuild and was rerun after the directory stabilized.

Root `npm run deploy` reported Published; GitHub Pages workflow **40686000545** completed successfully. An initial public request received 404 while that workflow was still deploying; the completed deployment responds HTTP 200. Public production import/export smoke checks are recorded separately in `public-validation.json`.
