# Validation — Catenary & Hang (20261103-16)

No physical printing, assembly, adhesive-strength, chain behavior or measurement-accuracy test was performed. Computational results do not establish those properties.

## Reference evidence

Fresh public binary STL downloaded and measured before final geometry: 30,616 triangles, 27 edge-adjacent components, SHA-256 and all component bounds recorded in reference-measurements.json. Actual sections at .10/.50/1.59 mm inspected visually. Source is nonwatertight and used only as a measured design reference, not a repaired printable asset. Local clicker/fabric candidates also parsed and reasons for rejection recorded. No raw private/reference mesh redistributed. Read-only reference/old-gallery trees unchanged.

## Solid and assembly tests

`npm test` / `node validate.mjs`: **44 cases passed**, zero blocked: three presets, both ends of every bounded numeric field, eight span/sag/height corner combinations, all-min/all-max, three base silhouettes, ASCII and binary imports at default/transformed placements, threshold/grayscale image-derived geometry.

Every case independently parses every exported binary STL plus the four-component clean print plate: byte length/triangle count, finite coordinates, nonzero areas, normalized normals consistent with winding, millimeter bounds, Z=0 bed alignment, 1e−5 mm welded edges (exactly two opposing faces), positive volume for each connected component. Connected card and each individual part have exactly one component. Kernel-generated closed solids avoid overlapping-shell unions.

Real kernel intersections test all assembled printed bodies, 39 vertical-insertion samples per model, both gauges swapped between front/parking sockets, flat separation, runner-cut release into carrier + four intact functional parts, socket openings, tongue shoulder datums and backing. Upper slices remain within the bed footprint. Independently integrated chain arc length, endpoint/sag equations, bounded chord error <.02 mm and actual gauge-edge probes verify the model-specific geometry. These are not chain force, stiffness, optical or physical fit tests.

## Real production browser tests

`browser-test.cjs`: actual PNG/JPEG/ASCII/binary picker inputs; actual STL downloads compared byte-signature to current preview and Node regeneration from actual downloaded JSON; same per-part mesh/assembly checks applied. Pixel source, threshold, depth, crop, grayscale, image footprint, STL footprint/rotation/placement/depth all change geometry. Replace/remove/reset restore built-in output. All-min/max downloads verified. Invalid dimension/transform, wrong SVG, truncated/open/nonmanifold/excessive/concave STL, fake/oversize-pixel images, excessive triangle counts and empty silhouette block export with recovery. Phone uploads/downloads, CDP touch orbit/pinch, 320/390 px layout; no runtime errors or external dependency requests.

`studio-test.cjs`: every preset downloads real solid; three silhouettes; text/icon/SVG alterations; image and exact mesh portable JSON, named local save/reload, missing-payload rejection, undo/redo, all ZIP entries parsed, all views, saved dark theme, focus styles, collapsible sections, reduced-motion context, desktop 374 px LEFT control rail, phone preview-first, worker abort/reload recovery.

`orientation-test.cjs`: Z/Y/−Z source reattachment, dimension changes, explicit mm confirmation and final mesh/assembly checks.

`icons-drop-test.cjs`: all six bundled icons change solid geometry, with real drag/drop file import.

`hole-check.mjs`: kernel probes on real browser-converted ring SVG verify white center remains full-height, dark ring is truly recessed, backing stays continuous; same mesh/assembly checks.

`stale-test.cjs`: rapid numeric/image edits immediately disable export, newest worker result matches Node, invalid transforms reject/recover.

`presentation-test.cjs`: desktop views and strict 320/390 px document + visualViewport widths for all five tabs and expanded assembly guide; real phone JSON downloads and reachable STL buttons; preview colours do not change STL. Screenshots inspected.

## Combined publication

Root `npm run predeploy`: **411 apps built/copied; 0 failures; 0 skipped**. root-build-validation.json verifies every gallery app index, identical root index and new worker/WASM assets. gallery-test.cjs compiles every inline script, verifies new STL entry exactly once/newest, all 410 previous entries byte-equivalent, category order, search and error-free browser rendering. Repeated import/download/mobile tests against the actual combined deploy tree are recorded in staging-validation.json. Public verification results after root deployment are in deployment-validation.json.

Reports contain reproducible observed results; test downloads/portable synthetic scratch data live in /tmp. Browser user files never leave the device or enter this repository.

Public root deployment succeeded. Live GitHub Pages test passed for the gallery (411 entries), production worker/WASM, builtin plus PNG/JPEG/ASCII/binary imports and five real manifold STL downloads whose signatures match the current preview. See deployment-validation.json. Initial verification waited for Pages propagation; the live test was corrected to await the replacement STL's newly unchecked millimeter confirmation rather than clicking the prior file's checkbox while parsing was still in progress.
