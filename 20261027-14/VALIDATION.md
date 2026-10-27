# Right Angle Reverie — validation

## Scope

Computational and real-browser tests, **not physical print testing**. No tested fit, force, fatigue, friction, wear or tactile-feel claim.

## Design corrections caught before release

- Initial extreme-setting motion check found a 0.312 mm³ half-rocker / upper-rail collision. Restricted the nominal start angle from 38° to 42°, while retaining a useful bounded stroke and excluding toggle positions.
- Reviewed gravity-seated assembly rather than relying on axial display gaps. Lowered rail/stop tops to 0.8 mm below the long bar's real seated bearing plane. Preview uses the seated lower and upper faces; only explicit inspection lift/exploded modes add display height.
- Rebuilt and reran all geometry, motion, production-browser and feature suites after this final solid change. No known failing output was published.

## Geometry / mechanism

`geometry-validation.json` / `validate.mjs`:

- 20 built-in/default/preset/representative extreme combinations.
- 35 image- or imported-STL-derived combinations, including threshold, grayscale, engraved, ASCII wedge and binary frustum; all per-part solids and separated float32 print plate checked.
- Independent binary STL byte lengths, finite vertices, nonzero areas, normalized normals matching winding, millimeter bounds, 1e-5 mm welded edge incidence exactly two with opposite directions, each connected component's positive enclosed volume.
- Exactly four individual closed components in the full plate, one per per-part download. Robust Manifold booleans, no concatenated overlapping shells.
- Independent 2:1 pin-center closure, straight-line output X invariant, useful nonzero stroke, 2 mm minimum bore wall, import isolation, all solid-pair CSG intersections, horizontal track retention, hard end stops, vertical lift-apart paths and plate nonintersection.

`extrema-validation.json` / `extrema-validation.mjs`:

- All **64** independent six-control min/max combinations across round/hex/oval palms, 17 seated poses each, all individual STL files and combined layouts. No unintended solid intersections.

`motion-validation.json` / `motion-validation.mjs`:

- **12** full-stroke cases: all three presets × built-in, image, ASCII STL and binary STL.
- **73** seated positions per case, every intended component pair, pin-center closure, physical end-stop collision beyond bounds, transverse wall blocking, vertical assembly/release and separated plate checks.

## Actual production-browser imports / downloads

`browser-validation.json` and `root-browser-validation.json` / `browser-test.cjs`:

- Serve the actual Vite `dist` under `/daily-app2/20261027-14/`, then repeat against the identical root `deploy` stage.
- Real file-picker PNG, JPEG, ASCII and binary STL, not simulated parsed data. Confirm STL mm units gates exports.
- Download real binary STL and compare exact fingerprint with current UI and independent Node regeneration from actual downloaded JSON; confirm millimeter dimension readout. Every downloaded import output passes mesh/closure/collision checks.
- Changed source pixels, threshold, depth, grayscale, crop/fit, size and STL scale/rotation/height/placement measurably alter final exported bytes. Replace/remove/reset reproduce expected geometry.
- Invalid/truncated, wrong content, open, nonmanifold, concave, excessive size/pixels/triangle count/dimensions, empty silhouette and invalid transforms block export; reset/removal recover.
- 320/390 px phones: no horizontal overflow, reachable exports, real image/STL picker and downloads, actual CDP touch orbit and pinch change canvas output.
- No runtime errors or external/remote data requests.

## Features / resilience / personalization

- `feature-validation.json`: all presets, three bounded variations, three palms, text, heart SVG icon, raised/engraved ring, background inversion, portable PNG/JPEG/ASCII/binary JSON round trips, persisted named design, undo/redo, actual four-part ZIP (every contained STL parsed), per-part downloads, view modes, saved dark theme, preview colour geometry-neutrality, drag/drop, Y-up import, collapsible controls, focus ring and latest-state export blocking.
- `resilience-validation.json`: deliberately aborted production worker blocks export; reload recovers; all six bundled original SVG marks produce distinct real geometry.
- `hole-validation.json`: independent solid intersection probes verify unraised/unengraved bright ring hole and raised/engraved dark ring region in the final boolean solid.
- `stale-import-validation.json`: a delayed earlier image decode cannot overwrite a newer image selection.
- `portable-errors-validation.json`: missing portable image requests reattachment, invalid transform/wrong app/bad dimensions block export, reset recovers.
- `interaction-validation.json` plus screenshots: 374 px desktop left panel/right viewer, changing slider/inspection poses with export geometry unchanged, isolated moving-part views, phone preview first and no overflow. Screenshots visually inspected in desktop and phone layouts.

## Gallery / build / publication

- `gallery-validation.json`: every inline script compiled with `new Function`, missing script fails, newest entry exactly once with `area: stl`, previous **198** entries unchanged.
- `gallery-browser-validation.json`: **199** cards render without errors, STL Generators first, newest app first, search/reset preserve all cards.
- `root-stage-validation.json`: all **199** apps staged with `index.html`; root HTML matches source; every new app production file byte-identical to tested `dist` (SHA-256 recorded).
- Individual `npm run predeploy` passed. Root `npm run predeploy` staged **199**, failed **0**, skipped **0**. App `predeploy: npm run build`, `deploy: gh-pages -d dist`, installed gh-pages verified.
- Publication uses only root `npm run deploy`. Live worker/WASM, downloadable STL and real public imports are verified after publication and recorded in `public-validation.json` and `public-import-validation.json`.

The archived gallery and Keycap Studio reference were read-only. Bundled inputs are original synthetic CC0 examples; no personal uploads saved in the repository.
