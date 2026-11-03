# Validation — Scytale & Wrap

Computational/browser tests only. **No physical print, glue, paper-wrap, cipher-handling, load, fatigue or fit experiment was performed.**

## Reference evidence

Fresh public STL download, SHA-256, actual mesh parse, 27 components, dimensions and three cross-sections recorded in reference-measurements.json and evidence/reference-sections.png. Local candidate meshes parsed first and rejected for this sheet-kit task. Reference-analysis.json explicitly distinguishes source 1.6 mm sheet / 1.7 mm slot width from redesigned long cross-laps, collars and proposed allowances. Raw reference STL not distributed. CC BY 4.0 source attribution/licence retained.

## Geometry and assembly

`npm test`: **42 cases checked: 40 generated and passed; 2 deliberately blocked by card-size validation** (short card with default parts; longest ribs with default card). Defaults, three presets, every parameter endpoint, eight length/radius/sheet corners, all-low/all-high combinations, three collar shapes, image-derived engravings and both synthetic STL-derived engravings are exercised.

Each generated card, every clean part and float32 serialized clean plate checked independently for binary length/count, finite coordinates, nonzero triangle areas, unit stored normals, normal/winding agreement, closed welded 1e−5 mm edge incidence with opposite directions, positive enclosed volume per component and expected millimeter bounds. Card has one component; four clean parts are separately closed. Card remains within declared dimensions and sheet thickness.

Mechanics checked with real kernel intersections: all assembled pairs collision-free; second rib insertion from below across full length at 0.5 mm translation intervals; top/bottom collar insertion paths from opposite ends; correct slot widths, end gap and collar shoulder planes; support corners and finite-rib-thickness winding perimeter; engraving backing ≥1 mm; no clean-plate intersections; upper cross-sections contained in bed footprint. Cutting all sixteen runners releases carrier plus four parts without cutting functional solids. These checks establish geometric assembly possibility, not physical ease/fit or adhesive strength. Both collars must be bonded to both ribs; no friction/snap retention claim.

## Production browser tests

Actual built Vite output served under `/daily-app2/20261103-17/`; **not only the dev server**.

- browser-test.cjs: actual PNG/JPEG and ASCII/binary STL file-picker imports, real STL downloads, changed image pixels/threshold/depth/crop/scale and mesh scale/rotation/placement, replace/remove/reset, explicit millimeter gate, min/max states, malformed/truncated/nonmanifold/open/concave/oversized meshes, excessive image pixels and triangle count, invalid dimensions/transforms, empty images and recoverable errors. Each downloaded output matches preview's exact current signature and Node regeneration from portable JSON, then passes mesh and assembly checks. Real phone imports/downloads and CDP touch orbit/pinch at 390 px; 320 px export reachability.
- studio-test.cjs: real model-thumbnail presets, three silhouettes, text/searchable icons/SVG, image and mesh JSON round trips, local named design reload, missing payload rejection, undo/redo, parsed complete ZIP with instructions, views, saved dark theme, focus, collapsibles, reduced-motion context, 374 px left desktop panel, preview-first phone, worker-abort recovery. Every ZIP STL parsed.
- hole-check.mjs: final kernel probes on actual browser-imported SVG prove bright hole stays unengraved, dark ring cuts real material and backing stays continuous.
- orientation-test.cjs: real Z/Y/−Z source orientations and mm confirmation; final meshes checked.
- icons-drop-test.cjs: all six icon engravings differ from default; real file drag/drop works.
- stale-test.cjs: three valid rapid span edits, three rapid threshold edits, invalid transforms; stale exports immediately blocked, only newest state matches Node.
- presentation-test.cjs: strict 320/390 px document/visual viewport widths across all five tabs and expanded guide, actual JSON download and reachable STL, view screenshots and preview-only colour changes.

Reports use the corresponding `*-validation.json` names; screenshots in evidence/. Desktop and mobile screenshots are also provided. Browser tests report no runtime errors and no external app requests.

## Gallery and combined deployment

Gallery inline scripts compile with `new Function`; missing scripts fail. Before/after comparison retains all 411 prior entries exactly, adds 20261103-17 exactly once at newest position with area `stl`, and keeps STL Generators first. Browser rendering/search and correct destination tested.

Root `npm run predeploy`: **412 built, 0 failed, 0 skipped**. Every gallery folder has deploy/folder/index.html; root HTML and every new-app staged file match exact validated source/dist bytes. Staged production worker/WASM, all four actual file imports and downloaded/manifold STL signatures rechecked using public-test.cjs with VERIFY_BASE override; see staged-validation.json and root-build-validation.json.

Root `npm run deploy` completed with Published. Public browser validation PASSED at https://xianghui.github.io/daily-app2/20261103-17/: gallery has 412 entries, worker/WASM loads, PNG/JPEG/ASCII/binary file imports alter actual downloaded closed-manifold STLs and every download matches the preview signature. See deployment-validation.json. Source commit/push uses main. No digest is sent.

## Reproduction

```
npm test
npm run predeploy
python3 serve.py --port 5797
TEST_BASE=http://127.0.0.1:5797 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5797 node studio-test.cjs
node hole-check.mjs
TEST_BASE=http://127.0.0.1:5797 node orientation-test.cjs
TEST_BASE=http://127.0.0.1:5797 node icons-drop-test.cjs
TEST_BASE=http://127.0.0.1:5797 node presentation-test.cjs
TEST_BASE=http://127.0.0.1:5797 node stale-test.cjs
TEST_BASE=http://127.0.0.1:5797 node gallery-test.cjs
```

Default public check: `node public-test.cjs`. For combined local deploy output, start `python3 serve.py --staged --port 5798`, then `VERIFY_BASE=http://127.0.0.1:5798 VERIFY_REPORT=staged-validation.json node public-test.cjs`.
