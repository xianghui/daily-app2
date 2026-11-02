# Validation — Buffon & Drop / 20261103-10

Computational/browser checks only. **No physical printing, fit, friction, durability, throw-uniformity or statistical-performance testing.** Ideal mathematical quadrature is not a printed-kit experiment.

## Reference evidence

- Actual binary White Cat Kit Card STL parsed, SHA-256/source/units/dimensions/27 edge-adjacent components recorded. Existing cached and newly downloaded bytes have the same hash. Actual Z=.1/.5/1.59 mm cross-sections viewed; source defects explicitly recorded, no repair claimed.
- Local Keycap Studio switch and Weave diamond STLs parsed and rejected as unsuitable sheet references. Relevant instructions and primary visual/import/worker/export sources inspected read-only.
- Source 1.60 mm sheet and 4.50×1.700012 mm socket mapping preserved at defaults. Proposed tongue clearance, stronger tabs and original probability-kit geometry distinguished in README/reference-analysis. No raw source mesh bundled.

## Final solids / mechanism

`npm test` passed **34 cases**: all three presets; each field's individual low/high; simultaneous all-low/all-high; three silhouettes; ASCII/binary imported meshes at default/transformed settings; threshold/grayscale image-derived solids.

Each case independently serializes/reparses all four part choices, connected card and loose plate: finite coordinates, exact binary length, nondegenerate triangles, unit normals, outward opposite-directed two-face welded edge incidence at 1e-5 mm, positive volume for every intended component, expected component counts and mm bounds, bed Z=0. Final generated parts also run in-worker topology checks on every edit.

Manifold intersections and sections verify:

- one connected card within declared X/Y/Z envelope;
- three separate clean parts and no print-layout intersections;
- twelve accessible tabs; all twelve cuts release carrier plus three parts without removing part volume;
- fence tabs avoid functional tongues (≥.5 mm independent margin test);
- 19 needle orientations (0–180° in 10° steps) without unintended part intersections;
- 21 vertical fence insertion positions with no interference;
- actual through sockets, .10–.25 mm total allowance, continuous ≥1 mm apron backing;
- actual declared line pitch/count and groove backing, actual 2 mm width and 8–11 mm needle length;
- sampled upper cross-sections contained in bed footprints for support-free sheet parts;
- deterministic numerical integration agrees with ideal P=2L/(πd), not a physical accuracy test.

## Production browser checks

Actual Vite `dist` served at `/daily-app2/20261103-10/`, not dev-only. `browser-test.cjs` passed **26 real STL downloads** and **10 malformed/unsupported input cases**, plus empty silhouette and invalid-transform/parameter checks. PNG/JPEG pixel changes, threshold/depth/crop/scale and ASCII/binary STL scale/rotate/place modify real exported geometry. Remove/reset reproduces default signatures. Each downloaded mesh is parsed and compared to current UI signature, dimensions and regeneration from actual saved JSON; all imported outputs receive the same mesh/assembly checks.

Also passed:

- `studio-test.cjs`: every preset, silhouettes, text/icon/SVG, portable image/mesh JSON, named-design reload, missing payload blocked, undo/redo, real ZIP decompression and per-contained-STL checks, saved dark theme, keyboard focus, collapsibles, reduced-motion context, desktop 374 px left rail, 320 px preview-first layout, production worker abort/error/export gating and reload recovery.
- `orientation-test.cjs`: actual Z/Y/−Z STL uploads, dimensions and unit confirmation, final solids and assembly checks.
- `stale-test.cjs`: rapid parameter/image edits immediately block stale exports; newest state matches Node; invalid transform/reset recovery.
- `presentation-test.cjs`: assembled/exploded/card/loose/isolated views, ghost visually changes preview, geometry signature unchanged by views; every tab at 320/390 px without overflow and reachable export.
- `icons-drop-test.cjs`: all six icons alter solids and actual drag/drop file import.
- `hole-check.mjs`: final Boolean solid independently probed for unengraved bright SVG hole, dark ring recess, continuous backing, valid mesh and assembly.
- `kit-ui-test.cjs`: four real direct per-part button downloads parsed; preview needle rotation visibly changes pose but not STL; degree label; pitch/length/count change geometry; noninteger count blocks export and reset recovers.
- Real touch orbit/pinch screenshot changes and phone image/STL uploads/downloads passed. No browser runtime errors or external-generation requests.

## Gallery / deployment

`gallery-test.cjs` compiles every nonempty inline script with `new Function`, verifies exactly one newest STL entry and correct path, preserves all **405** earlier entries (406 total), checks live rendering/search and STL-first category with zero runtime errors. Gallery baseline and screenshot retained. Root staging and public deployment evidence are recorded separately after deployment.

Screenshots and JSON reports are synthetic test artifacts, not personal user files. No claim of physical print testing.

Final publication: root `npm run predeploy` and `npm run deploy` passed (406 built, 0 failed, 0 skipped). Staging verified every entry point, exact root/new-app HTML and live gallery/direct part downloads. GitHub Pages run https://github.com/xianghui/daily-app2/actions/runs/41543133184 completed successfully. The first public verification window returned 404 while that build was still running; after the successful Pages deployment, retry passed exact latest production HTML, worker/WASM, real PNG upload, changed geometry and parsed STL download, exact preview/export signature and public root gallery. See staging-validation.json and deployment-validation.json.
