# Validation — Loop & Locus / 20261101-2

## Passed before publication

- `npm test`: **42** preset/profile/parameter/import cases; **40** invalid parameter cases rejected. Every connected-card, separate part and combined export independently parsed as binary STL; finite coordinates, nondegenerate triangles, normalized outward face normals, closed opposite-direction edge incidence (1e-5 mm weld), positive volume per component, declared mm dimensions and bed Z=0.
- Each model: three assembled solids without unintended intersections; 13 sampled post-insertion positions; actual 4.5 ×sheet neck cross-sections; real retaining-head coverage; **72** solved 200 mm taut-loop pencil positions outside the base envelope. Print layout has no part overlaps; card contains each clean part. **Twelve physical runner cuts release exactly three parts plus carrier**. Upper sections stay inside bed footprint. Two fixed joints require adhesive. Mathematical point-focus ellipse is explicitly distinguished from actual finite rectangular guides.
- `node import-extremes.mjs`: **8 additional** image/STL min/max combinations passed complete output and assembly checks.
- `node hole-check.mjs`: Boolean probes verify white ring center remains unengraved, dark ring is actually cut, and solid backing remains ≥1.4 mm.
- `node browser-test.cjs`: production Vite assets, WASM and worker; actual PNG/JPEG and ASCII/binary STL file-picker uploads; real binary downloads checked against exact current DOM fingerprint and regenerated portable JSON; independent mesh/assembly tests on the resulting models. Pixels, threshold, depth, crop, grayscale, scale, rotation and placement change geometry; replace/remove/reset restores deterministic original geometry. Unit confirmation gates STL. Invalid/truncated/open/nonmanifold/concave/excessive meshes, wrong file content, excessive image dimensions, empty art, bad dimensions and transforms reject with disabled export and recoverable controls. No external generation/network requests.
- Desktop 374 px left rail/right viewer; collapsible controls, tactile selected states and keyboard focus; saved light/dark theme; reduced motion. **320/390 px phones**, preview-first stack, no horizontal overflow, reachable exports, real touch orbit/pinch screenshot differences, PNG/STL phone imports and downloads.
- `node studio-test.cjs`: every preset and shape, actual thumbnails, text/searchable icons/SVG, bounded portable image and STL JSON, missing-payload error, named design restore after reload, undo/redo, all views/ghost/fit, each STL inside actual ZIP independently checked, worker-script abort disables export and reload recovers.
- `node personalization-test.cjs`: all **six icons**, text and ring SVG pass full exported-mesh/assembly validation and exact browser/Node signature checks.
- `node background-test.cjs`: both light and inverted backgrounds change actual validated geometry.
- `node orientation-test.cjs`: Y-up/−Z imports restore the exact oriented source geometry; axis changes explicitly detach input.
- `node stale-test.cjs`: rapid parameter/image edits immediately gate export, only newest geometry becomes exportable; invalid state recovers.
- `npm run predeploy`: individual production build passed.
- Gallery inline scripts compiled with `new Function` (missing/empty script fails); newest STL entry exactly once and correct folder, **332 earlier entries byte-for-byte-equivalent as data**, STL category first. Browser gallery renders and search works without runtime errors.
- Root `npm run predeploy`: **333 built, zero failed, zero skipped**. Every gallery app has deploy/folder/index.html; new app's **43** production files match its dist byte-for-byte and root index matches. Combined gallery-to-app navigation and real combined-output import/export regression run before publish.

Reproducible commands, JSON reports and screenshots are saved beside the app. A public Pages smoke-check result is written to `live-production-validation.json` after deployment; deployment/commit state is reported by the scheduled run.

## Explicitly unperformed

No physical printing, assembly, cord-friction, drawing accuracy, strength or fatigue testing. Computational watertightness and insertion/cord calculations are not those tests. Use gentle tension only; trial-fit actual filament and calibrate .1–.3 mm total slot allowance. External cord/pencil/paper/tape/adhesive required. Finite guides produce teaching near-ellipses, not precision point-focus curves. Preview positions do not simulate cord, forces or strain.

## Publication verified

Root `npm run deploy` returned **Published** to gh-pages commit `cd55b3045e3ced0d54f0125db6f86be740fe014a`. Public https://xianghui.github.io/daily-app2/20261101-2/ loaded its worker/WASM successfully, downloaded an actual validated manifold STL matching the preview fingerprint, accepted a real PNG import that changed geometry, and the live gallery rendered all333 entries with Loop & Locus first and no runtime errors. See `live-production-validation.json`.
