# Validation — Flux Dial / 20261103-20

## Passed, computational only

- `npm run predeploy`: production Vite build with bundled worker/WASM and fonts.
- `npm test`: **43 cases**. Three presets, every single-field endpoint, combined extremes, 3 silhouettes, smooth/ribbed grips, imported ASCII/binary STL variants, threshold and grayscale image-derived solids. Every individual part and the actual float32 print plate passed directed welded-edge incidence, nondegenerate/finite triangles, stored normal direction, individual positive component volumes, bed alignment and millimeter bounds. Five closed plate components, no unintended intersections.
- Independent 37-position 0–360° collision sweep for every generated case: axial bores, pocket gauges, floors, washer keep-out, closure landing and insertion. Includes image/STL results. Numerical coplanar bonded-contact tolerance 0.0001 mm³; other intersection tolerance 0.00001 mm³. See geometry-validation.json.
- `browser-test.cjs`: actual PNG/JPEG and ASCII/binary file-picker uploads, downloaded STLs and independent model regeneration from saved JSON. Pixel, threshold, depth, crop, scale, placement and rotation alter bytes; preview/download signatures and dimensions agree. Replacement/removal/reset restore state. Real 320/390 px touch orbit/pinch, image/STL phone downloads and no external generation requests. Invalid/truncated, open, duplicate/nonmanifold, oversized, excessive triangle/dimension, concave, white/empty image and unsafe transform cases block export and recover.
- `studio-test.cjs`: all presets downloaded/parsed; text, searchable icons, SVG, portable image and original-mesh JSON, named-save/reload, explicit missing payload errors, undo/redo, per-part ZIP bytes/instructions, all views, saved dark theme, keyboard focus, collapse, reduced-motion layout, 374 px desktop left panel and preview-first phone. Aborted production worker disables export; reload recovers.
- `stale-test.cjs`: immediate parameter/image edits invalidate export before rebuilding; only the newest state becomes exportable.
- `orientation-test.cjs`: Z/Y/−Z source transforms survive generation/export with explicit millimeter confirmation.
- `icons-drop-test.cjs`: all six bundled marks change real solids; actual browser drag/drop imports a local synthetic PNG.
- `hole-check.mjs`: probes actual browser SVG-derived geometry. Bright ring center stays solid; dark ring engraves; backing stays closed.
- `presentation-test.cjs`: full-turn pose is visibly different, grip texture changes actual STL, preview color does not change STL, 320/390 px all five sections and expanded print notes stay within the exact configured viewport. JSON and STL actions remain reachable. Assembled, exploded, isolated, plate and see-through mechanism screenshots captured.
- `gallery-test.cjs`: every nonempty inline script compiled with Node `new Function`; exactly one newest `area: stl` entry, correct folder/link, all **414 previous entries unchanged**, 415 rendered cards, STL Generators first, working search, no runtime errors.
- Root `npm run predeploy`: **415 built, 0 failed, 0 skipped**. Root deploy index matches gallery; all 415 app index paths exist.
- `public-test.cjs` against staged root deploy: bundled worker/WASM loads and all four real file imports download validated five-component STL with matching signatures. Report: staged-validation.json.

## Evidence and reproducibility

Run Node scripts from this app folder. `python3 serve.py --port 5820` serves the app's production dist at its real base prefix. `--staged --port 5821` serves root deploy. TEST_BASE controls browser scripts; VERIFY_BASE and VERIFY_REPORT control public-test.cjs. reference-inspect.mjs reparses the local source files, reference-view.cjs renders the temporary section analysis. Raw source meshes are not copied or redistributed. Synthetic sample assets are CC0.

Reports sit beside their scripts; screenshots are in evidence/. Main geometry parameters and fit decisions are in README.md, reference-analysis.json and reference-measurements.json. Code-level checks do not replace a physical print or slicer inspection.

## Explicitly untested

Physical printing, printer-specific fits, magnetic force or tactile detent strength, adhesive strength/durability, magnet containment under impact, wear, fatigue, child safety and certification. No source or generated part is claimed physically tested. Required external hardware/magnets, assembly and calibration limitations are shown in the app and in every ZIP's numbered instructions.

## Published production check

GitHub Pages deployment completed successfully: https://github.com/xianghui/daily-app2/actions/runs/41594794071 . Public gallery and app worker/WASM plus actual PNG/JPEG/ASCII/binary uploads and downloaded five-component STLs passed (`deployment-validation.json`). All 415 gallery entries render. No production runtime errors observed.
