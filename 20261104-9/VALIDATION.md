# Validation — Spherometer & Sag, 2026-11-04

All final checks used the compact **132 × 160 × 5 mm** default card, with five bays across three rows. Production Vite output was served at its real `/daily-app2/20261104-9/` prefix; workers, WASM and bundled fonts loaded locally. No physical printing or measurement-accuracy testing performed.

## Reproducible computational checks

- `npm test`: **43 cases** — default, 3 presets, simultaneous extrema, each numeric endpoint, all three silhouettes, ASCII/binary source meshes with changed transforms, threshold/grayscale image-derived solids. Each case checks every individual STL, actual connected-card STL, translated five-component de-tabbed plate, final float32 dimensions, outward positive volumes and closed opposite-directed edge incidence (1e-5 mm weld).
- Each case separately checks 20 actual runner cuts: one card becomes **frame + five unharmed parts**. Card envelope, bed footprint, flat/assembled pair intersections, three tongue/socket centers, coplanar toes, nominal M3 shaft and hex nut/head gauges, nut bearing floor, 25 insertion samples, 13 full-turn pose samples and screw-tip travel -2…+4 mm are checked. Threads are purchased, not simulated; shaft checks concern the printed passage.
- `node import-boundary-test.mjs`: **6 imported minimum/maximum cases**, with all meshes and assembly checks, plus direct solid probes on the browser-converted SVG ring. Ring ink removes material; its central hole retains the original backing (fractions 1.0).
- `node packing-test.cjs`: valid individual ranges but an undersized card are rejected in both model and actual browser; error disables export; Reset recovers. All declared card bounds remain exact.

## Real production-browser checks

- `node browser-test.cjs`: actual PNG/JPEG and ASCII/binary STL file-picker imports; downloaded binary meshes compared to the visible final signature and Node regeneration from downloaded JSON. Pixel content, threshold, relief depth, crop, physical scale and mesh rotation/placement change exports; replace/remove/reset returns exact defaults. All derived cases run the same mesh/assembly checks as defaults. Unit confirmation gates STL integration.
- Rejects malformed SVG, truncated STL, missing/duplicated facets (open/nonmanifold), excessive bytes, counterfeit PNG, excessive image dimensions, >1,500 triangles, excessive STL dimensions, closed concave solids, empty white image, empty transforms and keep-out violations. Export remains disabled and recoverable.
- `node studio-test.cjs`: each real preset, every deck silhouette, text/icon/SVG geometry, named local designs/reload, portable image/mesh JSON, missing-image reattachment message, undo/redo, depth changes, all view modes, see-through deck, individual parts and **actual ZIP contents** parsed. Theme persists; keyboard focus, collapsible sections, reduced-motion context and desktop left-rail/right-viewer layout checked. Deliberately aborted production worker produces an export-blocking error and recovers on reload.
- `node stale-test.cjs`: three rapid parameter edits and three rapid image changes immediately block stale downloads; only newest valid state becomes exportable; invalid transforms recover.
- `node orientation-test.cjs`: real Z/Y/−Z file uploads, mm confirmation, source dimensions, final signature/mesh and assembled checks.
- `node icons-drop-test.cjs`: all six bundled icons alter actual solid geometry and pass mesh/assembly checks; actual DataTransfer file drop imports PNG.
- `node interaction-test.cjs`: ideal screw pose changes preview, not print geometry; three bounded variations and every sample button work; reset signature exact.
- `node isolated-test.cjs`: all **five** clean-part views render and every actual downloaded per-part STL is parsed independently.
- `node mobile-layout.cjs`: **320 and 390 px**, every editor tab and expanded assembly guide fit the configured viewport (not inferred from two equally widened document metrics); preview-first order; reachable exports; real JSON save after expanded guide. Browser main suite additionally proves orbit/pinch change canvas screenshots and downloads image/STL-derived output on a touch phone. No browser runtime errors or nonlocal generation requests.

## Reference / gallery / publication

The public reference STL was freshly downloaded and parsed, SHA-256/dimensions/components measured, actual representative sections inspected and socket loops recorded. Local candidates and relevant project instructions were inspected first and rejected for geometry relevance. Upstream README/SCAD/license were read. `reference-analysis.json`, reproducible `reference-analysis.py`, license/README copies and `evidence/reference-sections.png` retain evidence. Raw source mesh is not redistributed; source defects are disclosed, not repaired or copied into output.

`node gallery-test.cjs` compiles every inline script with `new Function` (missing script is an error), verifies exactly one newest `stl` entry, and browser-renders the gallery without runtime errors. **All 431 prior entries are retained**, STL Generators remains first, and search/new URL work. Per-app `npm run predeploy` passes. Root combined predeploy/deploy and live smoke are recorded in `public-validation.json` following publication.

During development the maximum-sheet insertion test found an uncut pocket roof on the wheel. The actual Boolean cutter was extended through the maximum supported top, then the complete geometry matrix and production browser suites passed again. The final compact layout was also fully rerun; transient test runs spanning an intentional rebuild were superseded by complete final-build reruns, not treated as passes.

Computational validity is **not** a physical-print, adhesive-strength, wear, backlash, contact-force, thread-friction, calibrated-fit or precision measurement test. The UI/README/ZIP disclose required M3 hardware/adhesive, finite blunt contacts and printer-dependent calibration. Nominal .025 mm index subdivisions are not accuracy claims.

## Publication result

Root `npm run predeploy` and root `npm run deploy` completed: **432 built, 0 failed, 0 skipped**. Verified exact root gallery/latest app and every app folder under combined `deploy/`. GitHub Pages run [41737473914](https://github.com/xianghui/daily-app2/actions/runs/41737473914) completed successfully. An initial 404 occurred while Pages was still building; after completion, the live canonical URL passed default, real PNG and real binary-STL import/export/mesh/assembly checks, with three distinct signatures. The live root gallery rendered all 432 entries, new entry first, STL category first and no runtime errors. Evidence: `public-validation.json`, `evidence/public-app.png`.
