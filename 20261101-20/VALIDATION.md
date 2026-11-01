# Validation — Contour & Summit

- `npm run predeploy`: passed, actual production worker/WASM assets served at `/daily-app2/20261101-20/`.
- Pure geometry suite: **40 cases**, defaults/presets/shapes/parameter extrema/import derivatives. Each independently verifies connected-card, all six individual part STL files and six-component loose layout.
- Independent mesh checks: finite/nonzero float32 triangles, exact binary length, dimensions, normalized outward normals, welded opposite-directed two-face edges, per-component positive volume.
- All 15 assembled part pairs are nonintersecting. Ordered insertion sampled at 1 mm increments; five shoulder stops and slots probed, spine tongue flush, card bounds/support footprint checked. All 24 accessible snips avoid parts and leave seven separate solids. Adhesive joints are explicit, not simulated or claimed locked.
- Production browser downloads: **29 outputs**, PNG/JPEG/ASCII/binary imports and geometry-changing thresholds/depth/crop/scale/rotation/placement, reset, minimum/maximum, per-part buttons and phone outputs; hashes match preview and saved-JSON reconstruction.
- Rejected **10 malformed/unsupported file cases**, plus empty white silhouette, invalid transforms and unsafe keep-in placement. Export blocked until recoverable replacement/reset.
- Combined monorepo production browser: **29 actual output downloads**, same import and mesh/assembly tests, no runtime errors or remote requests.
- Studio: three generated-thumbnail presets, every silhouette, text/six icons/SVG, real geometry holes, portable JSON/image/mesh roundtrips, named-save reload, undo/redo, every view, dark theme persistence, keyboard focus, collapsible sections, reduced-motion context. Aborted worker request disables export, reload recovers.
- Orientation: Z/Y/−Z imports produce correct dimensions and changed solids after explicit mm confirmation.
- Rapid edits: current invalid state never exports stale worker results; polarity and spacing change geometry; all seven part/card buttons download exact solids.
- Bounded variation: **5 browser-generated cases** regenerated independently with STL and assembly checks.
- Mobile: 320/390px, preview first, all five editor tabs and expanded instructions without overflow; real touch orbit/pinch, phone file picking and STL/JSON downloads. Desktop 374px left panel/right viewer. Screenshots in `evidence/` and at app root.
- Gallery: every inline script compiled with `new Function`, exactly one new STL entry, STL Generators first; **350 earlier entries unchanged** / 351 total. Root predeploy built/copied all 351 apps with 0 failures/0 skips; all index files present.
- Reference downloaded/hashed/parsed/split/sectioned during this run. Source defects explicitly recorded; original CSG reconstruction, raw source mesh not redistributed.

**Not physically tested:** printing, assembly, glue strength, stability, material behavior or durability. Computational geometry checks do not establish those.

## Reproduce

```sh
npm test
node personalization-check.mjs
npm run predeploy
PORT=5680 node serve.mjs
# another terminal, from this app folder:
TEST_BASE=http://127.0.0.1:5680 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5680 node studio-test.cjs
TEST_BASE=http://127.0.0.1:5680 node icons-drop-test.cjs
TEST_BASE=http://127.0.0.1:5680 node orientation-test.cjs
TEST_BASE=http://127.0.0.1:5680 node rapid-test.cjs
TEST_BASE=http://127.0.0.1:5680 node ui-test.cjs
TEST_BASE=http://127.0.0.1:5680 node variation-test.cjs
node gallery-test.cjs
```

Full machine-readable reports live beside these scripts. Only synthetic files were used in browser import tests.
