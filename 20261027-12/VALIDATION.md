# Drumfold Brake validation

Computational checks and real Chromium file-picker/download tests performed against production output. **No physical printing or physical use testing performed.**

## Completed checks (reports regenerated for final drum-brake geometry)

- Individual `npm run predeploy` succeeds with locally emitted worker, WASM, fonts and samples. No external generation requests.
- `node validate.mjs`: 20 default/preset/representative-extrema cases and 35 image/STL-derived cases. Each part and separated float32 print plate checked for nonempty triangles, finite coordinates, nondegenerate faces, unit outward normals, expected mm bounds, positive volume per connected component, and exactly two oppositely directed welded-edge faces (0.00001 mm tolerance). Every intended part is a single connected solid.
- Manifold intersection motion checks: independent hinge grids, carrier rotation, physical stop engagement under deliberate overtravel, vertical shoe removal then carrier removal, and separated print plate. Further seated/inspection sweep results are in `motion-validation.json`; no computational result is a force/friction/fatigue test.
- `browser-test.cjs`: real PNG/JPEG/ASCII/binary STL picker imports and actual downloaded binary STL. Changed pixels/threshold/depth/crop/scale/rotation/placement alter geometry; source removal and transform reset reproduce baselines. Exact preview signature matches downloaded bytes and JSON-regenerated geometry. Per-part downloads validated.
- Rejected empty silhouettes, wrong content, truncated/open/nonmanifold/concave meshes, oversized dimensions/pixels/file/triangle count and invalid transforms. Invalid export stays disabled, recovery controls work.
- `feature-test.cjs`: all presets, random variations, round/hex/oval, text, original icons, SVG, raised/engraved relief, background inversion, Y-up STL, undo/redo, local named storage, portable image/STL JSON round trips, ZIP contents, print/assembled/exploded/isolated views, saved theme, keyboard focus, collapsed sections, drag/drop and latest-worker state checks.
- `resilience-test.cjs`: abort production worker, block export, reload recovery; all six icons produce distinct geometry.
- `stale-import-test.cjs`: a delayed older image cannot overwrite a newer source.
- `hole-test.cjs`: tiny solid probes verify SVG ring holes stay unraised/unengraved in the final solid, not only the image preview.
- `interaction-test.cjs`: 374 px desktop left panel/right preview, working carrier/fold pose controls, isolated carrier/shoes, preview-first phone stack. Pose changes do not alter print geometry.
- 320/390 px phones: no horizontal overflow, actual touch orbit/pinch changes view, reachable export and real PNG/STL import/download.
- `gallery-validate.cjs`: every inline script compiles with `new Function`, no missing scripts, exactly one new `stl` entry, all 196 previous entries unchanged.

## Reproduce

```
npm run predeploy
node serve-production.cjs
# In another terminal:
node validate.mjs
node motion-validation.mjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node stale-import-test.cjs
node interaction-test.cjs
```

Scripts save machine-readable JSON and screenshots beside the app. Root staging and public publication checks add their own reports. Supported STL inputs are deliberately restricted; no arbitrary mesh repair is claimed. Tolerances and tactile feel need a real printer calibration trial. All parts intentionally lift off; use level over a table.

## Combined-site staging

Root `npm run predeploy`: 197 apps staged, 0 failures, 0 skips. Root index matches; all gallery targets exist; every new-app production file is byte-identical to the individual tested build. Root gallery renders 197 cards with STL Generators first and restores all cards after search. The complete import/export and mobile browser suite was repeated against root staging on port 5386 and passed (`root-browser-validation.json`).

Dense motion checks cover all three presets plus all-min/all-max configurations in both seated and inspection poses (73/25 carrier samples), and image/STL-derived seated outputs (73 samples each); all include nine independent hinge fold combinations, stop overtravel and release checks. Unwanted intersection residuals are below 0.00001 mm³; intentional TPU-pad contact is bounded separately.

The final mechanism adds a stationary annular drum and two TPU-only expanding brake shoes. Final reports are regenerated after the mechanism distinction check; physical friction tests remain unperformed. Contact tests require released clearance and positive radial pad engagement, restricting every intended contact to the inner drum skin above the carrier.

Final drum-specific checks: radial engagement must produce positive pad contact; full-fold release must have zero drum intersection. Intended contact is restricted to a 0.15 mm compliant pad skin at the inner drum and bounded below 5 mm³ per shoe; it is not a rigid-body collision or a fused assembly. Final per-part material assignment is PLA/PETG for drum/carrier, TPU 95A for both shoes.
