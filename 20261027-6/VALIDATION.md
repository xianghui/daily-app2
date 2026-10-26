# Delta Wind — validation record

2026-10-27. App `20261027-6`. Computational/browser testing only; **no physical print or actual cord-contact/tension tests**.

| Check | Result / evidence |
|---|---|
| Per-app production build | `npm run predeploy` passes; local worker, WASM and fonts bundled |
| Geometry sweep | 36 default/preset/representative-extreme cases; 35 image/STL-derived cases, all pass (`geometry-validation.json`) |
| All four parts and combined plate | Exact STL byte counts, finite/nondegenerate triangles, normalized outward normals, mm bounds, 1e-5 mm welded edge incidence exactly two/opposite, positive volume per component |
| Rigid mechanism | Sampled ±60° poses, no unintended printed-body intersections, >3 mm carriage/end-stop clearance, actual thrust seats, release paths, import isolation and nonintersecting plate |
| Schematic cord route | 335 sampled sphere positions for each of four default/preset cases; no printed-body penetration (`cord-route-validation.json`). Not a rope physics/contact/winding test |
| Production browser imports | Real PNG/JPEG, ASCII/binary STL file-picker imports, changed content/threshold/depth/scale/rotation/placement demonstrably change downloaded geometry (`browser-validation.json`) |
| Preview/export consistency | Download fingerprint equals displayed mesh fingerprint; downloaded JSON regenerates exact bytes independently; displayed mm dimensions agree |
| Unsupported input | Truncated, open, nonmanifold, concave, oversized, excessive-triangle, bad-dimension, fake image, empty silhouette, invalid transform and protected-zone errors block export and recover |
| Features | All presets, three shapes, bounded variations, text, six icons, SVG, raised/engraved holes, inversion, undo/redo, named saves, portable imported-asset JSON round trips, up-axis import, per-part and real ZIP exports (`feature-validation.json`, `hole-validation.json`) |
| Worker and race failures | Worker abort blocks export; reload recovers; delayed first image cannot overwrite newer import; invalid/latest edits gate current geometry (`resilience-validation.json`, `stale-import-validation.json`) |
| Phone / accessibility | 320/390 px, preview-first, no horizontal overflow, reachable exports, real touch orbit/pinch and uploads, large controls, collapsibles, visible keyboard focus, persistent dark theme, reduced-motion behavior |
| Preview movement | Thumb-turn control visibly changes assembly without changing printable/export geometry (`view-motion-validation.json`) |
| Gallery | Inline scripts compiled with `new Function`; 190 previous entries preserved exactly; new entry exactly once, `stl`, correct folder, STL category first; all 191 browser cards render/search without errors |
| Root staging | Root `npm run predeploy`: 191 built/copied, 0 failed/skipped. All gallery folders present; new production files byte-identical (`root-stage-validation.json`) |
| Root-staged production browser | Full imports/downloads/mesh validation and 320/390 px touch suite rerun against root staging passes (`root-browser-validation.json`) |

## Limitations

The frame is open and parts are **not vertically captive**. Required differential-mode hardware: one 400–600 mm braided cord, 0.8–1.2 mm diameter. Cord-free mode offers independent wheel turning/carriage sliding only. Ideal displacement `(R-r)θ/2` and dashed tangents are schematic; actual skew, tangencies, friction, winding layers and knots alter travel. Hand-guide light tension, short ±60° stroke, reverse before knots/overlap/stops. Anchoring security, force, tactile quality, wear, fatigue, physical print performance and real cord contact remain untested. STL import intentionally rejects unsupported concave/hollow/branched/overhang input rather than silently altering it.

## Reproduction

See README for commands. Synthetic fixtures only. Browser suites run against `dist` at the real base path and root `deploy/` staging, not only the Vite development server. Root publication uses `npm run deploy`; standalone per-app publishing is not used. `public-smoke.cjs` checks live Pages, worker/WASM, actual STL bytes and newest gallery card after deployment; its result is recorded separately in `public-validation.json`.
