# Validation — 2026-11-02

## Passed on the production build

- `npm run predeploy`: React/Vite build, locally bundled worker/WASM/fonts; real base `/daily-app2/20261102-30/`.
- `npm test`: **53 valid variants**, every preset, all silhouettes, per-field endpoints, mixed geometric corners and the H=1.4R boundary. Invalid H/R and excessive parameters explicitly rejected. Images, grayscale, hole masks, and parsed ASCII/binary STL-derived art included.
- Independent binary-STL checks on every part, connected card and translated loose plate: nonempty exact bytes, finite nondegenerate triangles, unit normals matching winding, 1e-5mm welded two-face edges, per-component positive volume and expected millimeter bounds.
- One connected card and four separate clean parts; sixteen simulated accessible tab cuts yield carrier + four parts without removing part volume. All parts/sheet lie on Z=0. Upper slices stay inside first-layer footprint. No source mesh redistributed.
- Assembly: actual transformed eye centres align with all six ideal nodes. Three compression struts do not intersect; **minimum tested bar gap0.927911mm** over all53 variants. Radial approach paths before tying checked. Nine .8mm-diameter cord free spans avoid plastic outside explicitly exempt4mm endpoint knot-routing regions. Independent force-density sums close at all six nodes. This is NOT elastic stability or knot verification.
- Actual Chromium file-picker PNG/JPEG/ASCII/binary STL downloads; pixels, threshold, depth, crop, source shape, scale, rotation and placement change solid signatures. Download bytes equal UI/current model and JSON regeneration; all imported outputs independently mesh/assembly checked. Replace/remove/reset reproduces baseline.
- Browser malformed/truncated/open/nonmanifold/concave/excessive/wrong-content/empty input tests gate export and recover. Explicit STL-mm confirmation, Z/Y/−Z orientation, invalid transforms and keep-in rejection tested.
- Text, all six searchable icons, real SVG and drag/drop affect final geometry. Real browser-converted SVG centre hole retained backing and dark ring removed material, tested by Boolean probes.
- Every preset/model thumbnail, shapes, assembled/exploded/card/loose/isolated views, ghost opacity; view changes preserve printable hash. No fake motion slider: static tensegrity construction is intentionally not a motion simulation.
- Portable PNG/mesh JSON round trips; missing payload error; named local reload; undo/redo; ZIP actual STL members parsed. Rapid edit/stale gating and actual aborted worker loading/reload recovery tested.
- Desktop374px left rail/right viewer; saved dark mode, keyboard focus, collapsible sections and reduced-motion.320/390px preview-first layout, no horizontal overflow in any tab; real touch orbit/pinch produce changed canvas images and phone imports/downloads work.
- Gallery: every inline script compiled with `new Function`;387 previous entries unchanged, new entry exactly once with area stl and correct folder, all388 render/search without runtime errors. STL category first.
- Root `npm run predeploy`: **388 built/copied,0 failed,0 skipped**. Staged root index and all41 app assets byte-for-byte match current production build. Real combined-site gallery and built-in/PNG/STL downloadable solids tested at staged URL.

Reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `presentation-validation.json`, `orientation-validation.json`, `icons-drop-validation.json`, `stale-validation.json`, `svg-hole-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `deployment-validation.json`, `staged-browser-validation.json`; screenshots in evidence/ and browser desktop/mobile captures.

## Limitations — not performed

No physical printing, tensioning, knot-routing, stiffness, stability, fatigue or load test. Endpoint knot routing inside4mm is manually adjusted, not modeled. Cord lengths are ideal tie-point starting lengths; add knot allowance and calibrate. Strings are required external materials and are preview-only. Not load-bearing. Computation does not establish that a printed tied structure will stand or remain taut. See README/ASSEMBLY for source provenance, mechanical bounds, material guidance and assembly sequence.
