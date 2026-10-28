# Validation — Prism & Peek / 20261029-1

## Executed, not physical testing

- `npm run predeploy`: production React/Vite build succeeds; local worker/WASM/fonts bundled beneath `/daily-app2/20261029-1/`.
- `npm test`: **28 built-in + 35 imported-output configurations** pass. Covers default, all three presets, valid all-minimum/all-maximum and mixed extremes across three silhouettes. One invalid packing combination is rejected with clear card-height feedback. Six additional invalid input categories rejected.
- Each configuration: actual binary card and all five independent part STL meshes have finite nondegenerate faces, normalized normals consistent with winding, positive volume, exact declared mm bounds, one connected component, and two opposite-oriented incident triangles at every welded edge (0.00001 mm tolerance).
- Assembly: every actual seated part pair is collision-free. Horizontal cheek/tongue insertion and vertical completed-frame/plinth insertion sampled through 25 mm; real shoulders stop downward over-insertion. Both diagonal and foot mortises tested cut-through. Flat parts do not intersect. All 20 snips avoid functional parts and produce five parts plus one connected carrier. Import landing clears lowest reflector, including maximum supported grip height.
- Optics: nominal reflection +Y → +Z → +Y, finite-thickness upper/lower surfaces and unobstructed center ray. Upper mirror shiny face must point DOWN toward the lower mirror. This is ray geometry only, not an optical/image-quality test.
- `browser-test.cjs`: actual production browser file-picker PNG/JPEG, ASCII/binary STL uploads and real downloaded STLs; source pixels, threshold, depth, crop, mode, scale, height, rotation and placement change geometry. Download fingerprint equals UI exact-mesh signature and Node regeneration from downloaded JSON. Removed/reset sources reproduce default signature. Imported outputs receive the same mesh and assembly checks, not merely download-success checks.
- Malformed/truncated/open/nonmanifold/concave meshes, wrong content, excessive file/pixel/triangle limits, excessive dimensions, empty silhouettes, invalid transforms and safe-zone violations block export recoverably. Units must be confirmed.
- `feature-test.cjs`: all presets, random valid variations, three silhouettes, text, SVG icon, raised/engraved SVG ring, JPEG inversion, portable PNG/JPEG/ASCII/binary source round trips, named design reload, every per-part STL and unzipped actual Everything ZIP, assembled/exploded/loose/isolated views, saved dark theme, preview-only colour, drag/drop, Y-up import, collapsible sections, keyboard focus, latest-request worker edits and invalid export gate pass.
- `hole-test.cjs`: actual final boolean volume probes certify SVG ring center remains unraised and unengraved, while its dark ring produces geometry. This is relief on backing, not a through-hole claim.
- `studio-layout-test.cjs`: 374 px left desktop control rail/right viewer, every isolated part view, geometry-neutral view changes, reduced motion, 320 px preview-first phone layout and no horizontal overflow pass.
- `browser-test.cjs`: 390/320 px mobile contexts, touch orbit and two-finger pinch change the rendered canvas; real phone image/STL imports and downloads pass; no page runtime errors or external service requests.
- `resilience-test.cjs`: aborted production worker blocks all export; reload recovers. All six original SVG icons produce distinct mesh signatures.
- `named-import-test.cjs`: image and STL payloads restore exact geometry after named save and page reload.
- `portable-errors-test.cjs`: missing image payload explicitly requests reattachment; bad transforms, wrong app and invalid dimensions rejected, Reset recovers.
- `stale-import-test.cjs`: delayed image normalization cannot overwrite a newer import.
- Fresh source STL analysis: SHA-256, dimensions, connectivity, source defects, sheet/rail sections and measured vs proposed decisions recorded. Original source mesh is not bundled.

JSON reports and representative screenshots are retained beside these reproducible scripts. Gallery/root staging and publication results are added after their checks finish.

**No physical print, hand force, durability, adhesive fit/retention, optical brightness, distortion or film quality test was performed.** Required consumables are two thin front-surface mirror film patches (dimensions shown in assembly notes) and suitable plastic adhesive at all six fixed joints. Printer/material clearances require calibration.

## Root staging and publication

- `gallery-validate.cjs`: every nonempty inline script compiles with `new Function`; missing scripts fail. All 241 previous entry strings preserved, exactly one newest `20261029-1` entry with `area:"stl"`.
- `gallery-test.cjs`: actual combined gallery renders all 242 cards, `STL Generators` first, correct new link and search/reset, no runtime errors.
- Root `npm run predeploy`: **Built 242 / Failed 0 / Skipped 0**, `deploy/index.html` and every declared app folder exist. Root inline scripts also compile from the copied deployment output.
- Full `browser-test.cjs` rerun using `TEST_BASE=http://127.0.0.1:5491` against **combined root deploy**, not the development server: all import/download/mesh/assembly/phone checks pass (`combined-browser-validation.json`).
- Root `npm run deploy`: completed successfully; gh-pages output **Published**. Individual app deploy was not used.
