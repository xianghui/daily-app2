# Validation — 2026-11-05

Computational and browser checks only. **No physical printing, hardware fit, friction or gait testing performed.**

- `npm run predeploy`: passed; local production worker/WASM/fonts load from `/daily-app2/20261105-24/`.
- `npm test`: **35 cases** — default, all three presets, every field endpoint, all-min/all-max, three outlines, image/STL-derived default/min/max. Binary STL size, finite/nondegenerate faces, unit normals, two opposite incidences per welded edge, each component positive volume, bounds/Z=0, clean parts and translated print plate passed.
- Every case checks a single connected card, 24 runner cuts releasing carrier + six intact parts, clear pivot bores in card/clean meshes, supported bed footprints and all modeled parts through **73 full-turn poses**. Seven hardware joints are probed with 3 mm shafts, 4.5 mm sleeves and 7 mm × 3 mm fastener end envelopes. At default: max closure residual ~1.42e-14 mm; minimum sampled toggle margin ~8.05 mm.
- `hardware-sweep.mjs`: **16 mechanical corner cases / 5,776 one-degree poses**, exact coaxial-cylinder separation between different hardware joints. Minimum radial separation ~2.25 mm. These bounds describe selected hardware envelopes, not every commercial M3 screw.
- `browser-test.cjs`: **29 actual checked STL downloads**, real PNG/JPEG/ASCII/binary imports, altered pixel/threshold/depth/crop/scale/rotation/placement, source replacement/removal/reset, min/max, errors and unsupported meshes, mm confirmation, immediate invalid/stale export block, touch orbit/pinch and phone imports/downloads. Download bytes match UI fingerprint and exact JSON-regenerated mesh; outputs receive mesh/mechanism tests.
- `feature-test.cjs`: **16 model/state variants**, every preset/outline, text/icon/SVG ring/polarity, portable image and STL restoration, named storage/reload, undo/redo, all views, all seven STLs in a real ZIP, separate buttons, light/dark persistence, colour neutrality, drag/drop, Y-up import, keyboard focus, collapse and stale-result gates.
- Additional production scripts: ring-hole final-solid probing; missing payload/invalid JSON errors; abort-worker export block and reload recovery; all six original SVG marks; delayed image race; 320/390 px all tabs no overflow, preview first and reachable STL/JSON actions; reduced motion; 374 px desktop left controls/right preview.
- `mechanism-browser.cjs`: actual visible poses 0/90/180/270/360°, image changes with unchanged printable-mesh signature. Screenshots include assembled/exploded/connected-card/phone/dark/isolation views.
- Reference STL was freshly parsed/hashed and sliced; source hash, dimensions/components/anomalies, measured versus redesigned construction recorded. No source raw mesh distributed.
- Root gallery inline scripts compile using Node `new Function`; **471 entries**, new entry exactly once, STL-first category, all **470 prior entries unchanged**. Real browser gallery/new link loads without runtime errors.
- ROOT `npm run predeploy`: **471 built/copied, 0 failed, 0 skipped**. Every gallery destination exists; root index and all **26 new production files** are byte-identical to source builds. Combined-base-path browser smoke downloaded default + PNG/JPEG/ASCII/binary-derived solids and verified actual STL geometry/fingerprints.

Initial preflight found and corrected sequential boss unions refilling minimum crank bores and a long ground axle entering the coupler sweep. Final tests rerun after correction. The final stack puts all grounded rods lowest, leg middle and coupler highest, with 4 mm air gaps and explicitly bounded hardware. Instructions require external support blocks to clear underside heads.

Reports: `*-validation.json`; reproducible scripts live beside this document. Public publication smoke is recorded in `public-validation.json` and `public-gallery-validation.json` when complete. Mesh checks do not establish material durability, physical printing, low friction, fastener availability, precision or walking ability.

## Publication

ROOT `npm run deploy` published successfully. GitHub Pages deployment `8d7af6ff60ac11a6d5aef26e977be7232653a31e` built successfully. Public app default, PNG, JPEG, ASCII STL and binary STL imports produced actual checked downloads; public gallery rendered all 471 entries and its newest app link loaded valid worker geometry without runtime errors. Initial public smoke reached the prior site during Pages propagation; the rerun after deployment settled passed.
