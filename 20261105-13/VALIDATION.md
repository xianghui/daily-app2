# Validation — Roberts & Line / 20261105-13

Computational and real browser tests only. **No physical print, assembly, pivot-friction, strength or tracing-accuracy test was performed.** Hardware is purchased separately and omitted from printable output/preview.

## Passed

- Actual local candidate STLs and downloaded CC BY reference parsed; SHA-256, units, dimensions, 27 source edge-adjacent components and source anomalies recorded. Three actual Z sections inspected. Raw source not redistributed. See reference analysis and evidence.
- `npm run predeploy`: production React/Vite app with bundled local fonts, worker and Manifold WASM.
- `node validate.mjs`: **41** default/preset/boundary/silhouette/image/STL export cases. Every individual part, connected card and clean plate independently parsed. Finite triangles, nondegeneracy, stored normals/winding, 1e−5 mm welded edge incidence, positive volume per connected component and expected mm dimensions.
- All 41 cases: card bounds, single connected card, sixteen runner cuts release exactly four intact parts plus carrier with no loose runner debris; open functional apertures; supported bed footprints; no print-layout overlap; ≥1 mm protected engraving backing.
- All 41 cases: Roberts circle-intersection closure and triangle dimensions, thirteen sampled positions across ±15° (browser-derived cases use 25), separate plate collisions, vertical assembly paths, full M3×16 shaft envelopes, ≤2.5 mm heads, 7 mm washers, 4 mm sleeve gaps and ≥10 mm ground-foot clearance. No physical stops or friction claims. Default calculated witness deviation about .112 mm.
- `browser-test.cjs`: actual production file-picker PNG/JPEG/ASCII/binary imports and actual STL downloads; pixel/threshold/depth/fit/crop and STL footprint/depth/rotation/placement effects; source replace/remove/reset; mm confirmation; default/min/max; invalid/truncated/open/nonmanifold/concave/oversized/bad-dimension/empty inputs and invalid transforms all block export with usable recovery.
- Exact browser preview/download fingerprints match. Portable JSON regeneration is independently checked against Node geometry using actual Boolean symmetric difference <.003 mm³ (coplanar triangulation can differ across runtimes); final topology/volume/dimensions checked separately.
- `feature-test.cjs`: all three real presets and silhouettes, text, SVG and heart mark, every source's portable round trip, persisted named design, undo/redo, per-part STL, actual ZIP decompression and validation of all five STLs, assembled/exploded/isolated/card/clean views, saved dark theme, preview colours, drag/drop, Y-up source, keyboard focus, collapsible sections and rapid/stale edits.
- `resilience-test.cjs`: intentionally aborted production worker blocks exports; reload restores operation; all six original bundled SVG marks affect geometry.
- `stale-import-test.cjs`: delayed first image normalization cannot overwrite a newer image selection.
- `portable-errors-test.cjs`: missing image payload requests reattachment; wrong app, bad transforms/dimensions block exports and recover.
- `hole-test.cjs`: Boolean probes confirm the SVG ring's bright central hole remains backed while its dark band is truly engraved.
- `motion-test.cjs`: real plate positions change, computed witness coordinates respond, print mesh unchanged by pose; excessive/empty pose inputs clamp safely.
- `mobile-layout.cjs`: every tab at **320/390/480 px**, expanded instructions and actual JSON-save clicks; unscaled/no-overflow viewport, preview-first ordering and reachable exports. Desktop 374 px left rail/right viewer. Browser test additionally proves touch orbit and pinch by changed canvas screenshots and downloads image/STL models on a phone context.
- Gallery: inline JavaScript compiled with `new Function`; one correctly addressed new `stl` entry; **459 previous entries unchanged**, **460 total**, STL Generators first. Browser renders every entry with no runtime errors and follows the new link into valid worker geometry.
- Root `npm run predeploy`: **460 built/copied, 0 failed, 0 skipped**, combined root gallery plus all app folders in `deploy/`. Full browser import/download suite run against combined deployment output at the real base path.

## Reproduce

```sh
npm test
npm run predeploy
node serve-production.cjs
# in another terminal
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
node motion-test.cjs
node mobile-layout.cjs
```

`serve-production.cjs` uses port 5963, prefix `/daily-app2/20261105-13/`. Combined server uses 5964 and the root `deploy/`; set `TEST_BASE=http://127.0.0.1:5964` for browser tests. Reference analysis reproduction requires trimesh, numpy, scipy, matplotlib and networkx; its temporary source path must point to a freshly downloaded STL using the recorded public URL. Source trees and the old daily_app gallery remain untouched.

See machine-readable `*-validation.json` reports and screenshots. Public deployment checks, when recorded, are distinct from local combined-output validation. The computational checks establish neither physical tolerances nor durability.

## Public publication verified

Root `npm run deploy` reported Published. [GitHub Pages deployment](https://github.com/xianghui/daily-app2/actions/runs/41966847537) completed successfully. `public-smoke.cjs` passed on the actual public Pages URL: local phone file-picker PNG/JPEG/ASCII/binary inputs, four real downloaded closed/manifold STLs with exact UI/download fingerprints, no runtime errors, no 390 px overflow, and the complete 460-entry public gallery with the new entry first. The first probe preceded Pages activation; after deployment the harness was corrected to wait for a newly parsed STL unit confirmation rather than acting on the prior source checkbox. See `public-browser-validation.json`.
