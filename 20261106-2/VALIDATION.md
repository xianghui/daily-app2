# Validation — Coulomb & Twist / 20261106-2

## Completed locally on the production build

- `npm run predeploy` — passed; bundled worker/WASM/fonts, correct `/daily-app2/20261106-2/` base.
- `npm test` — **37 generated cases**: defaults, three presets, all individual endpoints, combined minimum/maximum, three outlines, plus image-derived and STL-derived defaults/extrema. Every part, card and translated clean plate passes independent float32 STL length/count, finite/nondegenerate triangles, unit/winding normals, 1e-5 mm welded edges exactly two/opposite and positive component-volume checks.
- In each geometry case: exact declared card envelope/thickness, one connected card, 12 actual tabs; snipping yields **carrier + exactly three undamaged clean parts**, no runner fragments. Bed-footprint containment, part nonoverlap, blind socket floors, unobstructed eyes/sockets, top-down portal insertion, full-rotation dumbbell/fiber clearance and >=1 mm engraving backing checked by independent Boolean probes. `geometry-validation.json` records results.
- `node browser-test.cjs` — passed with real PNG/JPEG/ASCII/binary STL file selections and **26 mesh downloads**. Source content, threshold, depth, crop, scaling/rotation/placement change actual exports versus defaults; reset restores byte signature. Each tested download matches its preview fingerprint and independently regenerated portable JSON model, then gets mesh/assembly checks. Malformed, truncated, open, nonmanifold, oversized, excessive triangles/pixels/dimensions, concave, empty silhouette and invalid transform cases block export and recover. Phone PNG/STL downloads and real CDP touch orbit/pinch pass. No app runtime errors or remote requests.
- `node feature-test.cjs` — passed: all presets/outlines, text, icon, SVG ring, background inversion, imported-asset JSON round trips, undo/redo, persistent named designs/theme, actual ZIP extraction and validation of all **four** contained STL files, individual STL buttons, all assembly/isolated/print views, color-only neutrality, drag/drop, Y-up STL, keyboard focus, collapse and latest/invalid worker edits. Additional models/downloads get independent mesh/assembly validation.
- `node hole-test.cjs` — passed: probes actual Boolean result to establish that imported SVG ring's light hole preserves backing and dark ring removes real material.
- `node mobile-test.cjs` — passed at **320 and 390 px**, every editor tab and expanded instructions; no overflow, preview before controls, reachable STL/JSON, reduced-motion honored; **374 px left desktop panel** and large right viewer checked.
- `node resilience-test.cjs` — passed: blocked production worker script disables export, reload restores it, all six bundled icons produce distinct real geometry.
- `node portable-errors-test.cjs` — passed: missing bitmap, bad transform, wrong app and invalid dimensions reject and recover.
- `node stale-import-test.cjs` — passed: delayed previous image decode cannot overwrite newer selection.
- `node gallery-test.cjs` — passed: **one inline script compiled with `new Function`**, 473 entries, all 472 previous entries byte-equivalent as data, exactly one new correctly addressed `area: stl` entry, STL category first.

Screenshots include `assembled-validation.png`, `assembled-ghost-validation.png`, `exploded-validation.png`, every isolated/view mode, dark theme, desktop and 320/390 phone layouts. Fresh parsed reference cross-sections are under `evidence/`. Machine-readable reports contain measurements and browser outcome details.

## Physical claims and limitations

**No physical print, socket fit, fiber torsion, fatigue, oscillation, damping, force measurement or adhesion test was performed.** Geometry clearance does not establish tactile response or knot security. Portal requires adhesive; fiber, knots/tape and .10–.25 mm nylon are external consumables. Static pose slider is not a dynamics simulation. Source has anomalous edges; it was inspected, not repaired or redistributed. Imported user STLs have a strict convex flat-bottom contract and are rejected otherwise. Image conversion is bounded sampled relief, not exact tracing/full 3D reconstruction.

## Combined deployment

- Root `npm run predeploy` passed: **473 built, 0 failed, 0 skipped**.
- Combined root index is byte-identical to the edited gallery and all **473 app index files exist** under `deploy/` (`combined-files-validation.json`).
- `node gallery-browser.cjs` passed: 473 rendered entries, STL first, newest entry opens the actual production app without runtime errors (`combined-gallery-validation.json`).
- Full `browser-test.cjs` rerun against **combined `deploy/` output** passed: PNG/JPEG/ASCII/binary imports, real download/geometry checks, rejection/recovery and phone touch/import/export checks (`combined-browser-validation.json`), with no app runtime errors or remote requests.

Publication and Git results are recorded separately once verified.

- Root `npm run deploy` completed with **Published**. GitHub Pages build/deployment run: https://github.com/xianghui/daily-app2/actions/runs/42072318981 (published branch SHA `0aeb7cd2457042463f66731071219abc24f7f42a`). Initial probe was 404 during Pages deployment. Public file-import/download testing then exposed a late source-preview ResizeObserver callback after unmount. The callback is now disposal-guarded and the fixed build must pass public revalidation; the initial public test is not reported as clean.

- `node resize-cleanup-test.cjs` passed: eight STL→image replacements with **eight deliberately forced callbacks after ResizeObserver disconnect**, zero runtime errors. This deterministic regression targets the public-only timing failure; the callback now checks a disposed flag and captured live element before using renderer/layout state. Full browser and feature suites are rerun after the fix.

- Fixed-build full browser/feature suites passed again. Full browser suite rerun on the corrected combined `deploy/` tree also passed, and the forced late-callback regression passed on that tree (`combined-resize-cleanup-validation.json`).

## Corrected public deployment

- Root redeploy finished **Published**; final Pages revision `9d52939db7f9bafb23be08dfdc5e9b80f2c2a9d5` succeeded: https://github.com/xianghui/daily-app2/actions/runs/42073401932 (`pages-deployment-validation.json`).
- `node public-smoke.cjs` passed against https://xianghui.github.io/daily-app2/20261106-2/ and asserts the public module script URL equals the exact current `dist/index.html` bundle. Five actual downloads (default, PNG, JPEG, ASCII STL, binary STL) pass independent manifold/winding/volume checks, match displayed fingerprints and differ appropriately. **Zero public runtime errors** (`public-validation.json`).
- Public gallery renders all 473 entries and opens the new app correctly (`public-gallery-validation.json`).
