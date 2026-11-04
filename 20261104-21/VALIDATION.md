# Validation — Octant & Facet (2026-11-04)

## Passed before publication

- Individual `npm run predeploy`: production JS, local font files, worker JS and Manifold WASM built successfully.
- `npm test`: **89 configurations**, including defaults, three presets, three footprints, individual limits, 48 combined shape/size/thickness extremes, image threshold/relief and exact imported-STL variants. No blocked representative configuration.
- Every part and serialized print plate independently checked: binary size/count, finite coordinates, nondegenerate triangles, consistent outward winding, positive volume **per** component, closed edge incidence after 1e-5-mm welding, expected mm dimensions and bed-aligned Z=0.
- Each card: one connected solid, eight intact released panels + carrier after all 32 simulated snips, correct card envelope, no accidental part overlap. Clean plate contains exactly eight nonintersecting components.
- Assembly: exact compound bevel geometry, no facet intersections, 56 outward-normal approach samples per configuration, supportable taper footprints and >=1 mm protected engraving backing. Short engraved recess ceilings may bridge <=7 mm; this is documented rather than classified as unsupported entire panels.
- Production Playwright: **31 actual STL downloads**; default, PNG/JPEG, ASCII/binary STL, threshold/depth/crop/scale/rotation/placement, reset, all nine individual files and phone imports. Byte fingerprints match the current preview mesh and regenerated portable JSON state. Imported outputs pass the same manifold and assembly probes.
- **10 malformed/unsupported file cases**, plus empty white image and invalid transforms/dimensions, are rejected with recoverable errors and exports disabled. No hull substitution/automatic repair.
- All presets, text and six bundled icon engravings, ring SVG, exact hole/backing Boolean probes, source axis Z/Y/−Z, dark/light background, stale-result gating, four views, all isolated parts and preview-only colours.
- Portable image/mesh JSON and named saves survive reload; missing image payload explicitly requests reattachment. Undo/redo, per-part exports and actual ZIP contents parsed. Worker loading failure blocks export and reload recovers.
- 320/390-px touch-enabled contexts: preview first; every editor tab, expanded numbered guide and JSON/STL exports reachable; no horizontal overflow; real touch orbit and pinch change camera screenshots. Desktop 374-px left controls/right viewer; saved dark theme, keyboard focus and collapsible controls.
- Actual reference STL downloaded and parsed before final geometry choice. Local candidates inspected first; selected source SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Actual dimensions ~179.82 × 178.02 × 3.19 mm, 30,616 triangles, 27 edge-adjacent components including source artifacts. Source itself is not wholly manifold and is **not** repaired, used as export geometry or redistributed. Actual cross-sections substantiate reconstructed sheet/carrier decisions. Public upstream CC BY 4.0 license verified.
- Root gallery: one inline script compiled with `new Function`, all **443 previous entries unchanged**, one correct newest STL entry, 444 cards rendered without runtime errors. Existing STL-first category and focus tagline preserved.
- Root `npm run predeploy`: **444 built, 0 failed, 0 skipped**; `deploy/index.html` plus new app folder present. Real PNG/JPEG/ASCII/binary imports and downloaded mesh validation passed again against the combined output.

## Reproduce

```sh
npm test
npm run predeploy
python3 serve-production.py     # 127.0.0.1:5894, real base path
TEST_BASE=http://127.0.0.1:5894 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5894 node studio-test.cjs
TEST_BASE=http://127.0.0.1:5894 node mobile-layout.cjs
TEST_BASE=http://127.0.0.1:5894 node personalization-test.cjs
node advanced-test.cjs
node extra-validation.mjs
node gallery-test.cjs
node gallery-browser.cjs
```

`serve-combined.py` serves root `deploy/` on port 5895; `combined-test.cjs` checks that output. Raw reports and screenshots are included. Python reference analysis requires trimesh/numpy/matplotlib; it reads the locally downloaded reference at `/tmp/octant-reference.stl`, never modifies the source tree.

## Not performed

**No physical print, real assembly, adhesion, tape fatigue, strength or handling test.** Collision-free computed panels do not prove reliable tape retention. Print a U1/U2 calibration pair and inspect engraving bridges and first-layer expansion. Assembled view omits required real tape; no simulated material performance is claimed.

## Publication verified

Root `npm run deploy` published the combined site. An initial GitHub Internal Server Error on the branch push recovered on retry. Final Pages deployment [41819398603](https://github.com/xianghui/daily-app2/actions/runs/41819398603) completed successfully for gh-pages `715e851ea672501b9b244abb5f1873cab89e0acf`.

Live route https://xianghui.github.io/daily-app2/20261104-21/ returned 200; real production WASM worker initialized and an actual live STL download passed the independent binary/manifold/signature check. Public gallery rendered all 444 cards, newest entry first, without runtime errors. See `publication-validation.json` and `deployment-validation.json`.
