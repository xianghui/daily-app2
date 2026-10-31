# Completed computational validation — 2026-10-31

Product: **Pulp & Deckle**, `20261031-11`.

| Check | Observed result |
|---|---|
| Fresh reference inspection | Downloaded binary STL, 30,616 triangles, hash/dimensions/27 components, actual Z=.1/.5/1.59 sections; licence fetched independently; read-only local candidates parsed |
| `npm test` | **40 built-in cases, 18 import-derived cases, 33 rejected impossible/out-of-range cases** |
| Mesh checks | Nonempty binary payload/byte count, finite coordinates, no degenerate faces, normal/winding agreement, 1e−5 mm welded edges with two opposite incident faces, positive volume per connected component, exact mm bounds |
| Every output | Connected card plus each of three clean parts separately; one closed component each, support/bed sections checked |
| Kit assembly | Three nonintersecting parts; sampled vertical handle insertion and deckle insertion/removal, 9 deckle side-play positions, 2 real sockets/tongues, 2 ledge probes, reserved external screen layer and unobstructed paper aperture |
| Card integrity | Exact declared envelope; 12 safe cutters touch no functional part and release exactly 3 parts + carrier; no accidental part overlaps |
| Production browser imports | Real PNG/JPEG/ASCII/binary STL file pickers; **26 downloaded output cases**, exact UI fingerprint and independent saved-JSON regeneration; full mesh/assembly checks on imported outputs |
| Geometry differences | Pixel content, threshold, relief mode/depth, crop, image scale, STL scale/rotation/placement change export vs default; replace/remove/reset recover; axes match oriented source |
| Rejection/recovery | Truncated, open, nonmanifold, concave, oversized, excessive pixels/triangles/dimensions, wrong content, empty silhouette, invalid transform/parameters, unsafe art bounds |
| Studio | All 3 presets/profiles, text + 6 icons + hole-bearing SVG, 8 full personalization checks, image/mesh JSON round trips, named-design reload, missing payload error, undo/redo, every view, see-through, dark theme, keyboard focus and collapsible sections |
| Worker | Bundled WASM loads from production base; abort/error/reload tested; rapid parameter/image edits disable stale export immediately |
| ZIP | Actual ZIP downloaded/unzipped; connected card and all 3 STL members individually parsed, numbered assembly instructions present |
| Phone | 320/390 px, preview-first, no horizontal overflow, reachable import/export, actual touch orbit and pinch verified by changed canvas images; phone image/STL downloads parsed |
| Individual build | `npm run predeploy` passed |
| Root gallery | All inline scripts compiled with `new Function`; one correct newest STL entry, all **314** prior entries exactly preserved; STL category first; rendered 315 cards with no runtime error |
| Root combined build | `npm run predeploy` passed; **315 built, 0 failed, 0 skipped**; root index and every app folder present; 43 new-app files hash-match production dist |
| Combined runtime | Gallery route + production worker/WASM, all direct per-part buttons and 320 px touch checks passed at `/daily-app2/` prefix |
| Publication | Root `npm run deploy` returned **Published**; Pages build/deploy succeeded, live HTTP 200 + worker/WASM + exact STL download + gallery verified in public-validation.json |

## Reproduce

- `npm test` → validation-report.json
- `node hole-check.mjs` → hole-validation.json
- `npm run predeploy`, then `node serve.mjs` on 5592 → actual production base, not dev server
- `node browser-test.cjs`, `node studio-test.cjs`, `node axis-test.cjs`, `node stale-test.cjs`, `node personalization-test.cjs`
- Root `npm run predeploy`; `node check-combined.cjs`; `node serve-combined.mjs` on 5593
- `GALLERY_BASE=http://127.0.0.1:5593 node gallery-browser-test.cjs`
- `TEST_BASE=http://127.0.0.1:5593 node final-production-test.cjs`
- After publishing, `node public-test.cjs`

Reports, original synthetic fixtures and evidence screenshots are included. Raw third-party/source meshes and personal uploads are not. Existing galleries/reference projects remained read-only except the authorized new entry in daily_app2.

**Not performed:** physical printing, assembly, adhesive compatibility, screen tension/retention, paper formation/drainage/release, wet strength, load, durability or safety certification. The external screen is a reserved empty layer in the printed-parts preview, not an included printed screen or simulated fabric. Deckle is loose under gravity, not positively captured; handle requires adhesive. Geometric clearance is not a force/performance test. Calibrate your printer/material and inspect slicer before the complete card.
