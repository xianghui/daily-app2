# Tempo Fork — validation record

## Final artifact

- Folder `20261027-5`; Vite base `/daily-app2/20261027-5/`.
- React/Vite build passed (`npm run predeploy`). npm audit: zero vulnerabilities. Non-blocking Vite warnings: Manifold's Node compatibility shim and the locally bundled Three.js chunk size. An unused optional fsevents install script was not approved; no required install script was bypassed.
- Final model includes actual solid crank and lever thrust seats. Independent tiny-volume probes establish solid material immediately below the supported assembly planes and no material immediately above them. The 0.4 mm crank/lever axial gap therefore does not rely on levitation.
- Geometry: **36** supported-parameter/preset cases; **35** imported-output cases. Each part and combined float32 print layout checked. Every welded edge has exactly two opposite incident faces; finite nondegenerate triangles, normalized outward normals, correct mm bounds and positive volume per connected component.
- Mechanism: 3 separate solids; complete-revolution sample checks, analytic lever extrema and timing ratio, pin travel and slot-end allowance, no unwanted rigid volumetric intersections, real thrust-seat support, isolated personalization, sequential vertical disassembly and nonintersecting print layout. No vertical captivity is claimed.
- `geometry-validation.json` contains all geometric/mechanical cases and results.

## Production browser

- `browser-validation.json`: **25** actual STL downloads including all individual parts; independent parsing, positive per-component volumes, manifold edges and mm bounds. Preview signature equals downloaded bytes and an independently regenerated JSON design.
- Actual file-picker uploads of PNG, JPEG, ASCII STL and binary STL; pixel/threshold/depth/crop and imported mesh size/height/rotation/placement changes survive into exports and differ from the no-import default. Remove/reset returns to baseline.
- **10** malformed/excessive/unsupported fixture rejections, plus empty silhouette, invalid dimensions/transforms and unsafe placement. Export blocked, usable recovery controls preserved.
- Phone **320/390 px**, no horizontal overflow, reachable exports, file pickers, touch orbit and pinch verified by canvas differences. Source previews and final model remain usable. Screenshot artifacts accompany reports.
- `feature-validation.json`: **20** independently checked feature-model cases, every preset, bounded variations, all palm shapes, text/icon/SVG/engraved personalization, JSON asset round trips, persistent named designs, undo/redo, true 3-part ZIP with parsed STLs, individual exports, geometry-neutral views/colors, saved dark theme, sections/focus, drag/drop and Y-up import.
- `hole-validation.json`: final-solid probes confirm raised and engraved SVG ring holes retain the intended unraised/unengraved center.
- `resilience-validation.json`: abort production worker -> clear failure + blocked export; reload recovers. All six bundled original marks alter geometry.
- `stale-import-validation.json`: delayed older image normalization cannot overwrite a newer chosen file.
- `root-browser-validation.json`: repeat real file imports/downloads, model comparisons, mesh/mechanism, invalid input and mobile tests against the combined root `deploy/` site, not only the app dev server. No runtime errors or remote processing requests.

## Gallery and root deployment

- Inline scripts compiled with Node `new Function`; missing scripts or syntax errors fail the check.
- New entry exists exactly once, category `stl`, newest first, correct folder. STL Generators remains first category.
- All **189** previous entries preserved unchanged; **190** total gallery cards render and search recovers without runtime errors.
- Root `npm run predeploy` staged **190 built / 0 failed / 0 skipped**. Root index identical; every gallery app has a staged entry point. All new app production files checked byte-for-byte against staged files.
- `gallery-validation.json`, `gallery-browser-validation.json`, `root-stage-validation.json` preserve evidence. The first staging assertion was started before the rebuild finished and saw an incomplete copy; rerunning after build completion passed with all 190 apps. No missing app was ignored.
- Authorized publication uses root `npm run deploy`, not individual-app gh-pages deployment. Public verification is recorded separately in `public-validation.json` after publication.

## Scope

These are computational mesh, kinematic and browser checks, **not physical print tests**. No tactile quality, friction, force, endurance or material-fit test is claimed. Fits depend on printer/material; print Easy Cadence first. Moving parts are intentionally lift-off, not vertically captive. Imported STL support is explicitly limited to verified broad flat-bottom convex solids; unsupported concavity is rejected, not replaced or silently repaired. Synthetic fixtures only; no personal uploads committed. Archived gallery and reference project were read-only throughout.

## Public verification

- Root `npm run deploy` succeeded (`Published`); final GitHub Pages workflow **40393498234** completed successfully.
- Public app returned HTTP **200**; actual browser worker/WASM initialized; downloaded STL fingerprint matched the independently generated final local model, with all three closed components. Public combined gallery showed Tempo Fork first without runtime errors.
- Bundled font license notices also returned HTTP **200**. `public-validation.json` records final checks.
- An initial public request made before Pages deployment completion returned 404; retry after the successful Pages rollout passed. No broken public exporter or unresolved build failure is left.
