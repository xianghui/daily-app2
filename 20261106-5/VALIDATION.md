# Validation — Lap & Frame

Computational checks only. No physical print, adhesive strength, photo mounting, fit or durability test performed.

## Passed before publication

- Actual binary STL reference parsed in this run; SHA, bounds, two components, anomalous edges, measured sheet/socket/runner sections and source/license recorded. `reference-analysis*.json` and `evidence/reference-sections.svg`.
- `npm test`: **35 cases**, including three presets, every field endpoint, combined minimum/maximum, three silhouettes and image/STL-derived defaults/extremes. Additional impossible card combination rejected.
- Every clean rail, connected card and separated plate: independent final float32 STL byte length, finite/nondegenerate triangles, normalized normals agreeing with winding, welded-edge incidence exactly two opposite faces (1e-5 mm), positive per-component volume, correct millimeter dimensions and component counts.
- Real geometry checks: sixteen cuts yield carrier + exactly four undamaged rails, no runner fragments; true card envelope; no flat/assembled collisions; supported upper footprints; all four lap materials/gaps; unobstructed window and two hanging holes; 14 sampled vertical insertion positions. Adhesive explicitly required—clearance is not retention.
- Production build worker and bundled WASM tested under actual base prefix, not just Vite dev.
- Browser file pickers PNG/JPEG/ASCII/binary STL, real downloads matched against exact UI mesh fingerprint and Node regeneration from saved JSON. Changed pixels, threshold, depth, crop, image scale, mesh scale/rotation/placement alter exported geometry; remove/reset reproduce default signature.
- Truncated, open, nonmanifold, concave, oversized, excessive-triangle and bad-dimension meshes; fake/excessive/empty images; invalid transforms and stale edits reject recoverably and block export.
- Every preset/silhouette, text, SVG, all six bundled marks, transparent checkerboard, real ring-hole preservation, unit confirmation/up-axis, per-part downloads and unzipped STL contents.
- Undo/redo, named design persistence, bounded portable image/mesh JSON restoration, missing payloads, wrong-app/invalid JSON state.
- Worker abort prevents export and reload recovers; delayed old imports cannot replace newer images; queued resize callbacks after source viewport disposal are ignored.
- Desktop 374px left control panel/right viewer, 320/390px every-tab no horizontal overflow, preview first, reachable exports/JSON, touch orbit and pinch, reduced motion, focus, collapsible sections and saved dark theme. Zero browser page errors/external generation requests in local production tests.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `mobile-layout-validation.json`, `resilience-validation.json`, `portable-errors-validation.json`, `stale-import-validation.json`, `hole-validation.json`, `resize-cleanup-validation.json`. Screenshots capture real browser results. `gallery-validation.json` verifies all inline scripts and preserves 475 previous entries.

Publication reports are added only after their corresponding commands/browser checks succeed.

## Publication verified

Root `npm run predeploy` and the deploy lifecycle built/copied **476 apps, 0 failures, 0 skips**. Root `npm run deploy` reported Published. GitHub Pages workflow [42101200555](https://github.com/xianghui/daily-app2/actions/runs/42101200555) completed successfully for deploy commit `5fb4360ca037f2acd181bfecb234300dc0303891`. Public browser checks verified the exact latest bundle, worker/WASM, default and PNG/JPEG/ASCII/binary import downloads, closed meshes, zero page errors and all 476 gallery entries. Reports: `public-validation.json`, `public-gallery-validation.json`, `deployment-validation.json`.
