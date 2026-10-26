# Crown Catch — computational and browser validation

2026-10-26. No physical printing or force/torque/wear testing performed.

## Geometry and mechanics

- `npm test`: 68 built-in parameter cases (default, all three presets, all 64 min/max parameter corners), plus 30 imported-output cases (ASCII/binary STL, threshold/grayscale/engraved image at presets and minimum/maximum dimensions).
- Each serialized part and combined float32 print plate: finite coordinates, nondegenerate triangles, unit normals consistent with winding, welded 0.00001 mm edges with exactly two opposite-directed incidents, positive volume per connected solid, expected mm bounds. Default plate: 186 × 48 × 20.90 mm; 3 solids.
- Independent Manifold collision checks: 33 withdrawal samples × four common angles, full 37-sample independent freewheel revolution, vertical removal, disjoint print layout and isolated import region. Deliberate seated misindexing hits the dog flanks, confirming positive stops. Analytical checks bound slot walls, bore gaps, dog engagement, remaining floor and spindle guidance.
- These are geometry/kinematic checks, not friction, force, wear, manufacturing or physical-safety validation.

## Real production-browser checks

- Actual browser file-picker PNG/JPEG/ASCII STL/binary STL inputs; actual STL downloads and independent byte/mesh validation. Pixel content, threshold, depth, crop and scale change exports; STL shape/scale/rotation/placement survive serialization. Reset restores the default fingerprint.
- 25 STL download variants in the main browser suite; UI preview signature equals downloaded bytes and a Node regeneration from downloaded portable JSON. Source assets stay local; no external app requests observed.
- Malformed/truncated, open, nonmanifold, wrong-content, excessive bytes/pixels/triangle counts, bad dimensions, concave STL, empty silhouette and invalid/safe-zone transforms block exports with recoverable feedback.
- 20 further feature models validated: all presets, variations, palm shapes, text, icon, SVG, engraving, inverted image, portable JSON imports and up-axis orientation.
- Real ZIP decompression validates each part. Named designs persist across reload; portable image/mesh JSON restores exactly; missing payload requests reattachment. Undo/redo, bounded variations, worker failure/reload recovery and asynchronous import stale-result guards passed.
- All six bundled icons change actual geometry. Tiny solid probes verify SVG ring holes remain unraised or unengraved as appropriate.
- Assembled, exploded, isolated palm/wheels and print-plate views, shared/independent turn and withdrawal previews work without changing printable meshes. Swatches change only preview color.
- 374 px desktop LEFT editor/RIGHT viewer; 320/390 px preview-first phones, no horizontal overflow, actual touch orbit/pinch, reachable file inputs and exports, collapsible controls, keyboard focus, reduced motion and persisted dark/light theme verified. Screenshots stored alongside the scripts.

## Gallery and root stage

- Every inline gallery script compiled with `new Function`; new STL entry appears exactly once and first; all 170 previous entries preserved byte-for-object.
- Gallery browser rendering/search/category ordering has no runtime errors.
- Root `npm run predeploy` staged all 171 apps: 0 failed, 0 skipped. Root index matches; all 43 files in the new production output match the staged app exactly.
- See `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `additional-validation.json`, `resilience-validation.json`, `stale-import-validation.json`, `hole-validation.json`, gallery reports and root-stage reports for reproducible detail.

Commands: `npm run predeploy`, `npm test`, `npm run test:browser`; then root `npm run predeploy`, `node root-stage-test.cjs`, and `TEST_BASE=http://127.0.0.1:5335 node gallery-test.cjs` / `TEST_BASE=http://127.0.0.1:5335 TEST_REPORT=root-browser-validation.json node browser-test.cjs` against `node serve-root.cjs`.
