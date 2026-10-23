# Chiral Hush — executed digital checks

2026-10-23, scheduled builder, folder `20261023-18`.

- `npm run predeploy`: production build passed. Warnings: large JS bundle and manifold's conditional Node import externalization. Production browser verified rather than assuming these warnings harmless.
- `npm test`: 78 parameter cases and 24 import-derived cases passed. Actual binary STL parsed independently; finite, nondegenerate triangles, normalized normals, outward consistent winding, positive component volume, expected mm bounds, welded closed edges, one connected component.
- Mechanism: three root overlaps and strut center material verified by CSG probes; center and side windows empty. All parameter extremes preserve root edge material and ≥3.5 mm source isolation. Idealized constant-length straight-strut envelopes at −4/−2/0/+2/+4° check disc and strut separation and twist/lift direction. Not a deformation simulation or FEA.
- `node browser-test.cjs`: 23 real downloaded STL outputs validated; PNG/JPEG and ASCII/binary STL selected through browser file input; pixel source, threshold, depth, crop, footprint, height, rotation and offsets measurably affect export. Preview/export signatures and dimensions match. Different STL fixture shapes produce different exported geometry. Replace/remove/reset, minimum/maximum and individual named body exports passed.
- Ten malformed/unsupported/excessive fixtures rejected recoverably: extension/content mismatch, truncated STL, open mesh, nonmanifold mesh, >2 MB file, bogus PNG, excessive image dimensions, excessive triangles, bad source dimensions and concavity. Empty silhouette, NaN transform, unsafe placement, unconfirmed mm and invalid model dimensions also block export.
- `node extra-browser.cjs`: all three preset thumbnails/models, four real random variations, CSG/mechanism checks, undo/redo, PNG/JPEG/ASCII/binary portable JSON save/open, drag/drop and colour-neutral geometry passed.
- Phone: 320/390 px; real touch orbit and pinch change view; PNG and STL picker/download paths pass; no horizontal overflow. All five tabs, collapsible controls and fixed Download STL remain reachable. Phone decorative canvas note hidden to avoid model/text overlap.
- `TEST_BASE=http://127.0.0.1:5275 TEST_REPORT=production-browser-validation.json node browser-test.cjs`: same comprehensive browser test passed against the root-generated deployment assets.
- `node gallery-test.cjs`: every inline script compiled; new entry exactly once and newest, area `stl`, correct folder; 97 previous entries preserved, 98 current entries. STL Generators first; filtering/rendering without runtime errors.
- Root `npm run predeploy`: 98 built/copied, 0 failures, 0 skips. Root gallery bytes and all 98 app index files verified in `deploy/`.
- App dependency audit: zero reported vulnerabilities after npm-recommended gh-pages version resolution; deprecated local build-tool dependencies remain noted in README.

## Explicitly not verified

No physical print, support removal, force, elastic return, fatigue, local root stress or durability test. TPU support removal may be difficult; instructions require a full-size Feather Prism trial, carefully tuned supports and gentle initial 2° motion. ±4° is exploratory guidance, not a proven allowable elastic range. No claim of universal fit, print success, spring force, snap action or precise print-time estimate.

## Publication verification

- Root `npm run deploy` succeeded (`Published`). GitHub Pages run [39929562993](https://github.com/xianghui/daily-app2/actions/runs/39929562993) completed successfully, serving `gh-pages` at `/`.
- `node public-check.cjs` passed on https://xianghui.github.io/daily-app2/20261023-18/ : correct page title, real local image import, actual downloaded manifold positive-volume STL, current gallery entry first, zero runtime errors and zero failed asset requests. Evidence: `public-validation.json`.
- Transient pre-deployment 404 was resolved by waiting for the Pages run to finish; no rebuild or deployment shortcut was required.
