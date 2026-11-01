# Computational validation — 2026-11-01

All checks below passed on this run. **No physical printing, assembly, friction, adhesion, strength or drawing test was performed.**

- `npm run predeploy`: production Vite build, local hashed WASM/worker/font assets.
- `npm test`:42 geometry cases, every exported part/card/de-tabbed plate independently parsed as float32 STL, closed/opposite-directed welded edges, per-component outward positive volumes, finite nondegenerate triangles/normals and correct mm bounds.
- Each case:25shoe-travel/arm-angle poses and375pairwise Boolean collision checks; four socket/shoulder probes,65assembly insertion increments, end stops/capture tests, pencil clearance, projected bed support and24actual runner cuts yielding exactly6parts+carrier. Keeper capture explicitly depends on a bonded keeper, not friction-fit.
- `TEST_BASE=http://127.0.0.1:5684 node browser-test.cjs`: real file-picker PNG/JPEG/ASCII/binary STL imports, changed pixel/threshold/depth/scale/rotation/placement and downloaded bytes; exact UI/portable design/mesh signatures; invalid/truncated/open/nonmanifold/concave/oversize/empty files blocked and recovered. Representative min/max inputs and per-part outputs.320/390px mobile uploads/downloads and actual touch orbit/pinch. No app runtime errors or external requests.
- `studio-test.cjs`: three presets and shapes, text/icons/SVG, portable JSON assets, named saves/reload, undo/redo, missing-payload rejection, real ZIP contents/each STL parsed, all views, theme persistence/focus/collapse/reduced-motion, desktop374px rail and phone preview first, deliberate worker-script failure/recovery.
- `icons-drop-test.cjs`: six actual filled icons change real solids and pass independent mesh/mechanism checks, drag-drop PNG.
- `orientation-test.cjs`: Z/Y/−Z source axes, mm confirmation, revalidated saved mesh and final geometry.
- `rapid-test.cjs`: stale-result export gating, background polarity, reset and all7individual STL buttons downloaded/parsed.
- `ui-test.cjs`: every control tab and expanded instructions fit320px; reachable JSON download.
- `final-check.cjs`: pose controls visibly move actual preview while printable geometry stays bed-flat; actual six-component de-tabbed plate STL download. Boolean solid probes confirm SVG ring center remains uncut backing while dark ring cuts away material; resulting model passes mechanism checks.
- `node gallery-test.cjs ../deploy/index.html`: every inline script compiled with `new Function` and runtime rendered,355gallery entries,354earlier entries unchanged; newest entry exactly once, correct URL and stl category first; search works.
- ROOT `npm run predeploy`:355built,0failed,0skipped; deploy root+all gallery destinations present; new app dist bytes identical to deploy copy. `combined-browser-validation.json` covers built-in plus4real import formats and actual STL downloads from combined production deployment tree.

Evidence: `*-validation.json`, `evidence/*.png`, independent `validate.mjs` and reproducible Playwright scripts. `public-smoke.cjs` repeats import/download and gallery checks on the published Pages site; its separate report states public accessibility independently from local checks.

Reference binary STL parsed and cross-sectioned during run; see reference analysis/measurements/hash/license and cross-section image. Original source meshes and personal files are not bundled.
