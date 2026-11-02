# Chord Click validation

## Passed before publication

- `npm run predeploy`: production React/Vite bundle, locally bundled worker/WASM/fonts.
- `npm test`: 31 built-in, extrema, threshold/relief/hole and transformed STL variants. Every individual part and translated five-part plate checked for exact STL length, finite coordinates, normalized normals, nondegenerate faces, opposite-directed two-triangle edge incidence after 1e−5 mm welding, positive volume per component and expected mm bounds.
- Independent Manifold tests: three keys each swept at 41 positions over an **assumed** 4 mm stroke, no key/base or independent key/key collisions; top insertion/removal; separate plate parts; source-sized socket and 2 mm floor probes; support footprints and ≤0.7 mm initial identification-groove bridge spans. The first support check initially rejected those intentional narrow bridges; the corrected check measures and bounds them rather than calling the first layer fully supported.
- `browser-test.cjs`: real production-browser PNG/JPEG, ASCII/binary STL picker uploads, actual binary STL downloads, pixel/threshold/depth/scale/crop/transform changes; exact fingerprint agreement with preview and Node-regenerated JSON; per-part geometry and mechanism checks; malformed/truncated/open/nonmanifold/concave/oversized/excessive-triangle/bad-dimension/empty inputs rejected; recoverable reset/replace/remove. Desktop and 320/390px phone, actual touch orbit/pinch, reachable exports, zero runtime errors or external generation requests.
- `studio-test.cjs`: three presets, three silhouettes, text/icon/SVG, portable image/STL JSON and named local design reloads, missing payload blocks with reattachment guidance, undo/redo, actual ZIP unzipped and every STL parsed, view selection, dark theme persistence, keyboard focus, collapse controls, reduced motion, 374px left rail and phone-preview-first. Worker route aborted, export blocked, reload recovery passed.
- `stale-test.cjs`: rapid parameter/image edits immediately block stale exports; newest result matches Node; invalid transforms recover.
- `orientation-test.cjs`: Z/Y/−Z sources, dimension/scale confirmation and final source-derived solids checked.
- `icons-drop-test.cjs`: all six bundled icons produce distinct real solid geometry, every part/mechanism checked; actual file drop import succeeds.
- `presentation-test.cjs`: assembled, exploded, print plate, base and all isolated parts; visible motion/ghost changes without export signature changes; all five editor tabs no overflow at 320/390px.
- Reference independently parsed and actual sections inspected: 944 triangles, three closed components, SHA and measured cavity/socket/cross-stem recorded. No raw reference asset redistributed.
- Gallery inline scripts compiled with Node `new Function`; new area=stl entry exactly once and first; 395 earlier entries preserved byte-for-byte. Browser rendered all 396 entries with working search, STL category first and no runtime errors.
- Root `npm run predeploy`: **396 built, 0 failed, 0 skipped**. `deployment-check.cjs` verifies all app entrypoints and exact SHA-256 equality of all 42 Chord Click production assets in the combined `deploy/` tree.

Reproducible detailed evidence is in `*-validation.json`, `reference-analysis.json`, `ASSEMBLY.txt`, and screenshots under `evidence/`. `staged-validation.json` is the full import/export suite served from the actual combined deploy tree rather than the app dist alias.

## Not performed / not implied

No physical printing, actual MX-switch fitting, electrical-pin accommodation, force, tactile feel, sound, friction retention, fatigue or wear testing. Source interfaces are measured; proposed fits are starting ranges, not universal compatibility. 6.6 mm resting rim projection and 4 mm travel are preview/test assumptions, not measured hardware. External switches provide actuation; no hardware-free alternative is implemented. Each switch and key is friction seated rather than positively captive. Inspect and calibrate with coupon/key-one and your exact switch before committing to the full base.
