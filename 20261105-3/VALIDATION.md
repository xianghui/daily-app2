# Sine & Rise — validation record

## Reference evidence

Fresh source download, local STL candidates, source SHA-256, dimensions, components and Z=.100/.215/1.590 mm sections are recorded in `reference-analysis.json` and `evidence/reference-sections.png`. License SHA matches the downloaded CC BY 4.0 text. Source sheet/receiving width inform the real default 1.60/1.70 mm cross-lap interface; open lap lengths, circular contacts and sine assembly are explicitly original proposed geometry. Source meshes and source trees remain unmodified and are not bundled.

## Computational geometry

`npm test` → **67 passing cases**. Every case checks exported connected card, four clean part STLs and translated clean plate after float32 serialization, including default, three presets, each field limit, all silhouettes, span/radius/sheet corners, threshold/grayscale and imported ASCII/binary-derived models.

- finite coordinates, nonzero faces, normalized normals matching winding;
- 1e-5 mm welded edges: exactly two opposite incidences;
- each expected component has positive signed volume;
- expected mm bounds, card envelope and Z=0 print orientation;
- one connected card, sixteen runner cuts release exactly four unharmed parts plus carrier;
- no unintended loose-plate or assembled intersections;
- eight lap apertures clear in both clean and tabbed geometry;
- spacers lower vertically into their slots without collisions;
- actual contact arc vertices obey h=L sin(angle) within .002 mm at seven positions from 0 to 30°;
- external plane and an 8 mm-wide support block under both high soles do not intersect the assembly at these positions;
- supported bed footprint, protected contact arcs, engraving backing ≥1 mm;
- invalid dimensions, transforms, source unit confirmation and empty silhouettes block generation.

See `geometry-validation.json` and reproducible `validate.mjs`. Valid solids do not establish printer accuracy, glue friction or strength.

## Production browser

`browser-test.cjs`, `studio-test.cjs`, `personalization-test.cjs`, `orientation-test.cjs`, `mobile-layout.cjs` and `extra-test.cjs` passed against the app's actual built production assets under `/daily-app2/20261105-3/`.

- Real file-picker PNG, JPEG, simple SVG, ASCII STL and binary STL imports.
- Actual downloaded STL bytes independently parsed; preview fingerprint and regenerated JSON mesh match exactly.
- Pixel content, threshold, depth, crop, physical size, rotation and placement visibly/measurably change geometry versus built-ins.
- Replace/remove/reset restore expected signatures. Axis Y and inverted-Z round trips reproduce exact integration.
- Malformed/truncated files, open/nonmanifold/concave meshes, excessive file/pixel/triangle/dimension inputs, empty images, invalid transforms and keep-in violations block all STL exports; reset recovery works.
- SVG ring centre is probed as original uncut top surface, while dark ring pixels are probed as actual removed geometry.
- Three real presets, all silhouettes, text and all six searchable icons generate and download checked solids.
- All view modes, all isolated parts and ghost view; angle preview moves geometry and calculator matches sine while expressly not changing flat export.
- Every per-part STL and every STL inside a real Everything ZIP is parsed. ZIP includes numbered assembly instructions and portable design JSON.
- Undo/redo, portable image and original-mesh JSON, named local save/reload, and missing-image-payload reattachment errors.
- Worker script abort disables export; reload recovers. Rapid edits export only the exact latest state.
- 374 px desktop left controls/right viewer, tactile pressed controls, keyboard focus, collapsible sections, saved light/dark theme and reduced motion.
- 320/390 px phone preview first, all tabs and expanded instructions fit the actual viewport, touch orbit and pinch move canvas, JSON/STL export remains reachable.
- No runtime errors or remote resource requests during local production import/export tests.

Reports: `browser-validation.json`, `studio-validation.json`, `personalization-validation.json`, `orientation-validation.json`, `mobile-layout-validation.json`, `extra-validation.json`. Screenshots in `evidence/` plus desktop/mobile full-page captures. All fixture payloads are synthetic.

## Combined gallery and publication

Individual `npm run predeploy` passed. Root `npm run predeploy` produced **451 app folders, zero failures/skips**, root gallery and byte-identical new app assets. `gallery-test.cjs` compiles all inline scripts, requires scripts/APPS to exist, verifies exactly one newest STL entry with correct folder and preserves all 450 earlier entries byte-for-byte as parsed objects. Browser gallery search/render tests pass with 451 entries and no runtime errors. The same real import/download test suite is rerun against the root `deploy/` output; publication results are recorded separately. GitHub Pages run 41884526529 succeeded for gh-pages commit b79492076d2442ead44b4a221247c94d6196eeee. The live public gallery and five actual downloads (default, PNG, JPEG, ASCII STL, binary STL) passed independent mesh/fingerprint checks with zero runtime errors; see `publication-validation.json` and `deployment-validation.json`. A first public check was retried after deployment propagation; the replacement-STL test was paced to wait for its new unit-confirmation state rather than using the prior file’s checkbox. No app geometry/export failure was found.

## Not performed

No physical print, external slicer validation, force/fatigue/adhesion testing, real measurement calibration, load test or physical stability test. This is an educational sine-geometry kit, not a calibrated instrument or rated fixture. Supports, measured blocks and adhesive are user supplied as described in the app and README.
