# Validation — Crown & Canopy, 2026-10-29

## Reproduce

```sh
npm test
npm run predeploy
node serve-production.cjs  # keep running, localhost:5493, real Vite base path
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node studio-layout-test.cjs
node hole-test.cjs
node named-import-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node pose-test.cjs
node gallery-validate.cjs
# In monorepo root: npm run predeploy
STAGED=1 node serve-root.cjs  # localhost:5494
TEST_BASE=http://127.0.0.1:5494 node gallery-test.cjs
TEST_BASE=http://127.0.0.1:5494 TEST_REPORT=combined-browser-validation.json node browser-test.cjs
```

No test depends on a raw private/source mesh in the repository. Reference analysis reruns with an independently downloaded reference STL; URL, hash and license are in `reference-analysis.json` / README.

## Completed geometry checks

`geometry-validation.json`: **21 built-in cases + 35 imported-output cases** passed. Cases include all three presets, all three canopy silhouettes, all-min/all-max and representative mixed extremes. Nine additional mixed extremes correctly rejected impossible carrier packing (see report). Five import styles—ASCII wedge, binary frustum, thresholded image, grayscale relief, engraved image—run across default/presets/extremes with exact same assembly checks as built-ins.

Every generated card/part is independently checked from exported float32 binary STL: exact length/triangle count, finite coordinates, nondegenerate faces, normals normalized and matching winding, expected millimeter bounds, positive volume per connected component, consistent opposite-directed edge incidence after welding at **1e-5 mm**. Every part and connected card has one closed component. Manifold solid booleans are used; no hull replacement or overlapping-shell exports.

Mechanical checks are independent of mesh topology. Kernel intersection volume tolerance **0.001 mm³**: no seated pairwise part collisions; vertical insertion of main into feet and cross crown into main sampled through **0–40 mm** lift; main root floor stops, cross-lap end stop, lateral guide walls and feet ground contact checked. Flat parts do not overlap. Cutter-width-aware safe runner snips do not touch functional parts; sixteen cuts leave **five components** (four parts plus carrier). Card matches declared XY envelope; Z includes raised personalization. Open joints explicitly need adhesive; no positive-capture or structural-strength claim.

A test found that the initial branch-centerline snip rule could nick sloped branch edges. Fixed by measuring the entire cutter-width band and placing the cut beyond its outermost silhouette, then reran all geometry/import tests successfully.

## Completed browser checks

`browser-validation.json`: real file-picker PNG/JPEG, ASCII/binary STL uploads and actual downloaded STL bytes; source shape, image threshold/depth/crop/mode/scale and STL scale/rotation/placement change exported geometry. Compare fingerprints to no-import/default; remove/reset reproduce original bytes. Each downloaded mesh is independently parsed, checked against UI dimensions/current mesh fingerprint, regenerated from its saved JSON and subjected to the same assembly collision checks. Individual-part downloads also validated.

Reject/recover checks include truncated/invalid STL, open/nonmanifold mesh, concave unsupported mesh, excessive dimensions/complexity/files, malformed image/SVG, empty silhouettes, invalid/nonfinite transforms and unsafe placement. Export stays disabled on invalid or unconfirmed inputs.

`feature-validation.json`: three presets and bounded variations, canopy shapes, text and heart SVG mark, SVG ring raised/engraved styles, background inversion, all four portable image/STL round trips, named design persistence, undo/redo, full ZIP unzip + validation of five real contained STLs, each dedicated per-part button, all view modes, saved dark theme, colour changes only preview, drag/drop, Y-up import, collapsible sections, keyboard focus and current-worker-result guard. Download bytes equal UI mesh fingerprint and JSON regeneration.

`resilience-validation.json`: production worker abort disables export; reload recovers; all six bundled icons make different geometry. `hole-validation.json`: probe actual final boolean mesh to verify raised ring hole is empty above surface and engraved hole retains its backing. No through-hole promise.

`named-import-validation.json`: local named image/STL designs restore exact geometry after reload. `portable-errors-validation.json`: missing image payload, wrong app, invalid dimensions/transforms block export and recover. `stale-import-validation.json`: delayed earlier image normalization cannot replace a newer import. `pose-validation.json`: insertion really changes cross-crown preview while bed-flat mesh signature stays fixed.

`studio-layout-validation.json` and browser reports: **374 px** desktop left rail/right viewer; preview-first stacked phone layout at **320 / 390 px**, no horizontal overflow, reachable exports, real phone imports/downloads, touch orbit and pinch verified by changed canvas images, reduced-motion support. Screenshots stored beside reports. Runtime errors: none. App remote requests: none.

## Publication gate

Root inline script compiled using `new Function`; missing script is fatal. New entry appears exactly once, area `stl`, newest first, correct folder. All **245 previous entries** retained. Root build staged **246 apps, zero failures/skips**. Browser gallery renders all cards, STL category first, search restores all entries, no runtime errors. Final browser checks rerun against the **combined root deploy folder**, not just app development output. See `combined-browser-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `root-staging-validation.json` and `publication-validation.json` for outcomes.

## Live public verification

`node public-smoke.cjs` passed against GitHub Pages: HTTP 200, real production worker, local PNG/STL file-picker integration, actual downloaded closed-manifold STL matching current UI fingerprint, and all 246 gallery cards with the new entry first. GitHub Pages workflow [40742707027](https://github.com/xianghui/daily-app2/actions/runs/40742707027) completed successfully. Published branch index exactly matches tested `dist/index.html`. Initial 404 was propagation before the Pages job finished, not an app runtime error. Details are in `publication-validation.json`.

## Explicitly not performed

**No physical print, fatigue, adhesive, friction, stability, strength or load-bearing tests.** This is a stationary decorative miniature. Computational fit does not prove printer tolerances, structural performance or physical assembly feel. Calibrate actual printer/material; dry-fit before adhesive. Relief sampling is bounded and may lose small details.
