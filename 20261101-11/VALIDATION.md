# Validation — Peg & Probability

Computational/browser validation completed on 2026-11-01. **No physical print, assembly, adhesive strength, stability, random-flow or statistics testing.** External clear sheet, tape, adhesive and smooth configured-diameter beads are required.

## Observed results

- Actual downloaded reference parsed: 30,616 triangles; SHA-256 and all 27 component bounds in `reference-measurements.json`. Three measured mesh sections captured. Source README/license fetched independently; raw source not redistributed. Local clicker and diamond-link alternatives parsed and rejected for sheet-kit use.
- `npm test`: **46 valid mesh/assembly cases**, **42 invalid parameter cases rejected**. Includes three presets, all three profiles, individual parameter endpoints, all-min/all-max, image/STL-derived outputs and import/extreme combinations.
- Every card and clean-part binary STL independently checked: exact length, finite coordinates, normalized normals, nondegenerate triangles, 1e-5 mm welded edge incidence exactly two with opposite direction, one intended connected component, positive enclosed volume and millimetre bounds. Image holes probed in final solid.
- Each assembly checked with kernel intersections across **33 board insertion positions**. No unintended part overlap. Every clean part contained in card; twelve simulated runner cuts yield exactly four components (three parts + carrier). Higher print slices remain supported by bed footprints. Default **112 × 198 × 6.2 mm**; all-min **100 × 184 × 5.3 mm**; all-max **124 × 218 × 6.9 mm**.
- Peg count, collection passages and actual solid locations probed. Four bead-sized route families sampled; **616 samples for default**, with additional row-dependent counts on other configurations. This is geometric accessibility, not physical collision dynamics or a reliable binomial distribution.
- Production `dist` browser suite: **26 downloaded/checked outputs**, real PNG, JPEG, ASCII STL and binary STL file-picker imports. Changed threshold, grayscale pixels, depth, crop, scale, rotation and placement alter actual exported solids. Every snapshot regenerates the same STL signature in Node; downloaded STL matches preview signature and dimensions. Remove/reset reproduce original output.
- Malformed/truncated/open/nonmanifold/concave/oversized/bad-dimension/empty input and invalid transforms block export, with reset/replace recovery. Millimetre confirmation required. No remote requests or runtime errors in app tests.
- Studio: presets, shape variants, text, searchable icons, SVG rings, all six icons and actual drag/drop; portable image/mesh JSON, local named designs across reload, missing-payload errors, undo/redo; actual ZIP unpacked and every STL parsed; per-part download buttons exercised.
- Desktop 374px left panel/right viewer, selected tactile buttons, collapsible sections, visible keyboard focus, persisted dark theme, reduced motion. Phone **320 and 390 px** true viewport tested across all sections and expanded instructions, reachable downloads, PNG/STL imports, touch orbit and pinch zoom.
- Worker script intentionally blocked: clear failure, export disabled; reload recovery verified. Rapid invalid edits cannot re-enable stale export. Front-facing peg board, connected card and insertion views visually inspected/captured.
- `npm run predeploy` individual app: passed. Root monorepo predeploy: **342 apps built/copied, zero failures/skips**. Staged app's **43 files** equal `dist`; staged root index matches root source.
- Combined staged-site browser suite repeated: **26 outputs**, imports/downloads and exact regenerated geometry; studio suite also passed against combined prefix. Gallery inline script compiles with `new Function`; renders without runtime errors, new entry once and first in STL Generators, all **341 earlier entries preserved**.

## Reproduction

`npm test`; `npm run predeploy`; `node serve.mjs` (port 5661), then `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node mobile-regression.cjs`, `node rapid-test.cjs`, `node icons-drop-test.cjs`, `node visual-test.cjs`.

For staged monorepo: root `npm run predeploy`; app `node serve-combined.mjs` (5662); `TEST_BASE=http://127.0.0.1:5662 TEST_REPORT=combined-validation.json node browser-test.cjs`; `TEST_BASE=http://127.0.0.1:5662 node studio-test.cjs`; `TEST_BASE=http://127.0.0.1:5662 node gallery-test.cjs ../deploy/index.html`.

Reference analysis reproduction requires Python trimesh/numpy/matplotlib: download the documented public reference outside the repository and run `reference-inspect.py /path/to/reference.stl`. Nothing modifies reference trees.

Reports: `validation-report.json`, `browser-validation.json`, `combined-validation.json`, `studio-validation.json`, `mobile-regression.json`, `orientation-validation.json`, `icons-drop-validation.json`, `rapid-validation.json`, `preview-validation.json`, `gallery-validation.json`, `release-validation.json`. Screenshots in `evidence/` and desktop/mobile validation PNGs. Publishing/live checks are recorded separately after execution.

## Publication

Root `npm run deploy`: Published, exit 0. GitHub Pages [build 41255626722](https://github.com/xianghui/daily-app2/actions/runs/41255626722): completed/success. Public app, worker and WASM load; actual default, PNG-derived and binary-STL-derived downloads match exact preview/JSON geometry and pass mesh/assembly checks. Public gallery shows 342 entries with the new app first; no runtime errors. See `live-validation.json`. `node live-test.cjs` reproduces this public smoke test.
