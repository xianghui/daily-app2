# Validation — Anamorph & Sight (20261104-5)

Computational and browser checks only. **No physical printing, assembly-force, fit, adhesion, durability or optical perception testing.** The design claims projected closure of top-edge midlines, not every visible surface or an exact Penrose solid.

## Passed before publication

- `npm run predeploy`: production app builds, local fonts, JS worker and Manifold WASM bundled under `/daily-app2/20261104-5/`.
- `npm test`:17 default/preset/shape/extreme/image/STL cases. Independent binary STL byte-length, finite coordinates, unit normals/outward winding, nondegenerate faces, positive volume for every component, welded edge incidence/direction and millimeter bounds. Card and four individual parts verified separately; float32 de-tabbed plate has four closed components.
- `node construction-test.mjs`:37 cases:32 mixed corners (baseline, altitude, height increment, beam width and eye distance),4 transformed STL-derived extrema,1 ring image with actual solid probes proving bright center remains unengraved while dark ring cuts real geometry.
- Every geometry/construction case checks connected carrier,16 runner cuts producing carrier+four released parts, undamaged clean parts, exact card envelope, no flat-part or assembled intersections,6 socket alignments, sampled LOW→MIDDLE→HIGH insertion from above, support-free sampled footprints, backing≥1.5 mm and perspective residual. All six joints require adhesive; no snap retention claim.
- `alignment-test.cjs`: actual normalized part coordinates transformed into assembly have six top-midline endpoints on the intended perspective rays; exact camera differs from ordinary assembly view and restores reproducibly. Saved screenshot inspected.
- `browser-test.cjs` against **production Vite preview at the real base prefix**: real PNG/JPEG/ASCII STL/binary STL file-picker imports, actual downloaded exports and saved current JSON independently regenerated in Node. Download fingerprint equals displayed current mesh and regenerated state. Image content, threshold, depth, crop and mode change geometry; mesh source, scale, rotation, depth and placement survive export. Remove/reset reproduce default. All downloads independently passed mesh and assembly checks. Preset tests in studio suite.
- Production browser rejection checks:truncated,open,nonmanifold,oversized,excessive triangle count,invalid image content,pixel dimensions,bad mesh dimensions,concave unsupported STL,empty image,invalid transforms and impossible body dimensions. All block export and recover via reset/replace/remove.
- Phone contexts390 and320 px: actual image and mesh imports/downloads, CDP touch orbit and pinch verified by differing canvas screenshots; no horizontal overflow; exports reachable. Confirmation checkbox explicitly scrolled into view for final phone test. `mobile-layout.cjs` checks every editor section and expanded guide against configured320/390 px widths.
- `studio-test.cjs` on production: three presets actual STL/assembly checked; shapes,text,icons,SVG,portable image/STL JSON and missing payload errors; named design reopen/reload; undo/redo; actual Everything ZIP unpacked and each STL parsed; assembled/exploded/card/de-tabbed/ghost; saved dark theme;374 px left rail,right viewer,phone preview first; keyboard focus/collapsible controls/reduced motion; production worker fetch aborted then reload recovery. No runtime errors.
- `icons-drop-test.cjs`: six vector icons converted to distinct real meshes, per-part mesh and assembly validation, actual DataTransfer PNG drag/drop.
- `orientation-test.cjs`:Z/Y/−Z orientations, explicit millimeter confirmation, correct oriented source dimensions and final geometry/checks.
- `isolated-test.cjs`:all four isolated views and actual clean-part downloads checked.
- `stale-test.cjs`:three rapid parameter edits and three rapid image edits immediately disable stale export; newest result matches independent Node geometry; invalid transform blocks/recovery succeeds.
- `gallery-test.cjs`:every inline script compiled with `new Function`; exactly one newest `area:"stl"` entry points to20261104-5; all427 previous entries retained unchanged,428 total; STL Generators category first; rendering/search without runtime errors.
- ROOT `npm run predeploy`:428 apps copied/built,0 failed,0 skipped; new production folder and root gallery exist in `deploy/`.

## Issues caught and corrected

1. Initial panel extrusion was offset by half its sheet relative to slot center. Centered panel thickness in the assembly transform; all six socket centers and collision tests now pass.
2. Fixed early leg positions could pierce another gantry. Replaced them with clearance-selected support positions and added exact live assembly collision/insertion guards.
3. A runner-height sample straddled the low beam/leg transition, leaving extra cut scraps. Moved the upper runner pair to the actual beam mid-band; all presets/extrema/mixed corners now release exactly four parts plus carrier.
4. Reference measurement environment needed networkx; installed into a temporary isolated Python environment, reran successfully. Reference source trees stayed read-only.
5. First long browser run timed out while scrolling the phone checkbox; standalone visible-interaction diagnostic and the complete production rerun with explicit scroll passed. An interrupted production run was resumed by rerunning the unfinished suite; no partial report was treated as a pass.

## Reproducibility

Reports:`geometry-validation.json`, `construction-validation.json`, `production-browser-validation.json`, `studio-validation.json`, `alignment-validation.json`, `icons-drop-validation.json`, `orientation-validation.json`, `isolated-validation.json`, `stale-validation.json`, `mobile-layout-validation.json`, `gallery-validation.json`. Screenshots in app root/evidence. Synthetic fixtures only in public/samples; raw third-party reference kept outside repository. Source mesh analysis/hash and section plots recorded separately.

Browser scripts accept `TEST_BASE` to test production under its real base path. Serve `npm run preview -- --port 5856`; run `TEST_BASE=http://127.0.0.1:5856 node browser-test.cjs`. Production import test writes `production-browser-validation.json` with `TEST_REPORT=production-browser-validation.json`.

## Publication verification

ROOT `npm run deploy` published the combined703 MB site. GitHub Pages workflow41700965824 completed successfully for gh-pages commit1bf16fdeb01e3d8ebb405ae94f0928432676853b. Initial404 checks occurred while the deployment job was still running; after waiting for the whole workflow, `public-smoke.cjs` passed on the live URL:HTTP200, local worker/WASM/assets, built-in/image/STL downloads with independent mesh checks and matching preview fingerprint,428 gallery entries,newest card/search,no runtime errors or failed assets. See `public-validation.json`. Final source rebuild matches all20 published app files byte-for-byte.
