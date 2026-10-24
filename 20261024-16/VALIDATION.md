# Lace Pause validation — 2026-10-24

Completed automated checks, not physical print certification:

- Individual `npm run predeploy`: passed; production Vite assets/WASM bundled locally.
- Independent exported-mesh validation: **78 parameter cases**, including all 64 range corners, defaults, extrema, three presets and eight deterministic variations; **24 image/STL integration cases** covering both threshold/height-map relief and ASCII/binary STL across representative dimensions.
- For every mesh: actual binary STL parsed; finite coordinates and normals, nonzero nondegenerate triangles, consistent orientation, positive volume per component, welded edges exactly two opposite-directed incidences, expected millimeter bounds, two separate closed solids. Individual exports verified separately.
- Mechanism checks: throat surplus ≥1.8 mm, lateral surplus 2 mm, solid bridge/rim dimensions, remaining throat, end margin, full ribbon path/slack screen, 6 mm loose bend screen, isolated imports. Real final-solid CSG probes at nine ribbon-through-slot cross sections and two bridges; nonintersecting print-layout parts; ribbon unchanged by imported geometry. No deformed material simulation or guaranteed retention is claimed.
- Real Playwright browser file inputs/downloads: PNG, JPEG, ASCII STL, binary STL. Export bytes match preview fingerprints and independently regenerated exact saved state. Image pixels/threshold/relief/depth/crop/scale and STL shape/scale/rotation/height/placement measurably alter exported geometry. Explicit STL millimeter confirmation gates export.
- Recoverable rejection: wrong type/content, truncated/open/nonmanifold/concave STL, oversized file, too many triangles, oversized dimensions/pixel counts, empty silhouette, invalid dimensions/NaN transforms and unsafe placement. Export disabled while invalid or pending.
- Each preset and four actual random variations independently checked from browser exports. Undo/redo, JSON save/open with all four portable fixture imports, replace/remove/reset, drag/drop, two individual STL exports and two-part ZIP passed. Preview palette is geometry-neutral.
- Phone: 320/390 px widths, touch orbit and pinch zoom, both import paths, downloads, no horizontal clipping, collapsible controls, all five tabs and Download STL reachable. Desktop and phone screenshots visually inspected.
- Full import/error/mobile suite repeated against the **built production app**, with no runtime errors or remote app requests.
- Gallery: every inline script compiled using `new Function`; new STL entry exactly once and first; all 119 existing entries preserved; all 120 render without runtime errors; STL Generators category first and search works.
- Root `npm run predeploy`: all **120** apps present, 0 failed, 0 skipped; exact root gallery and new production index verified in root `deploy/`.

Reports: `geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json`. Public Pages smoke testing passed: live app/worker/WASM, image and STL sample integration with downloaded mesh validation, and the newest-first 120-entry gallery; recorded in `public-validation.json`.

A first gallery test ran before its local HTTP listener started and received connection refused; starting the listener and rerunning passed. No model or exporter failure occurred.

**No physical print, bending, force, friction or fatigue testing was performed.** The ribbon is intentionally removable; its wide flexible stop is not a positive captive lock. Use TPU 95A, loose bends and Easy Thread calibration; never crease sharply or pull taut. All on-screen manufacturing feedback is limited to actual computational checks.
