# Validation — Huygens & Cheeks / 20261105-10

## Passed computational checks

- Actual reference meshes parsed and SHA-256 recorded; source sections measured at three Z heights. Public reference is nonmanifold; no source mesh redistribution or repair claim. Measured 1.60 mm panel / 1.70 mm socket mapped to defaults.
- `npm run predeploy`: production Vite build passed, bundled fonts/worker/WASM.
- `npm test`: **57 cases**: default, all three presets, all field endpoints, simultaneous minimum/maximum, three silhouettes, 16 joint parameter corners, threshold/grayscale art, ASCII/binary STL-derived models and imported corner cases.
- Every serialized part, connected card and clean plate: finite vertices, nonzero faces, unit/outward normals, 1e−5 mm welded two-face/opposite-winding edge incidence, connected-component positive volumes, actual millimeter bounds. Card one component; each clean part one; loose plate three.
- Every case: 12 runner cuts release exactly carrier + three unharmed parts with no debris; card stays within declared width/height and sheet+3 Z; flat and assembled parts do not intersect; bed-footprint sections supported; two seats/apex/bob-hole remain open; engraving backing ≥4 mm.
- Every case: 41 vertical frame insertion positions, 65 nominal bob-envelope samples, 28 actual cycloid-edge inside/outside probes; receiving dimensions / tongue engagement recorded. Geometric bounds only, **not** string-contact/dynamics/adhesion simulation.
- `browser-test.cjs`: **26 actual STL downloads**, including PNG/JPEG and ASCII/binary file-picker paths, changed pixels/threshold/depth/crop/scale/rotation/placement, reset/removal and phone exports. Download hash matches UI geometry and Node regeneration from saved JSON. Each derived model reruns full mesh/assembly checks. Ten malformed/oversized/unsupported fixtures rejected, plus empty silhouette, invalid dimensions/transforms and safe-zone violation. No remote file-processing requests or runtime errors.
- `feature-test.cjs`: all presets/silhouettes, text/icon/SVG personalization, image background inversion, imported-asset portable JSON round trips, named-save persistence, undo/redo, actual ZIP unpack + contained STL checks, individual downloads, views, saved dark theme, preview-colour neutrality, drag/drop, Y-up STL, collapsible sections/focus and current-worker/stale export gates.
- `hole-test.cjs`: source SVG ring's bright central hole retains material while dark ring actually engraves final Boolean solid; valid closed export.
- `resilience-test.cjs`: production worker-request abort disables export; reload recovers; all six bundled marks produce different geometry; assembled/ghost screenshots captured.
- `portable-errors-test.cjs`: missing image payload explicitly requests reattachment; wrong-app, bad dimensions and invalid transforms block export; reset recovers.
- `stale-import-test.cjs`: deliberately delayed first image normalization cannot overwrite newer file selection.
- `mobile-layout.cjs`: 320/390/480 px, all five tabs and expanded numbered instructions, no viewport scaling or horizontal overflow, preview before controls, actual reachable JSON download. Desktop 374 px LEFT rail / RIGHT viewer verified. Browser suite separately verifies actual touch orbit and pinch by canvas image changes.
- Gallery inline script compilation and entry preservation validated by `gallery-test.cjs`: **457 entries**, 456 prior entries unchanged, new entry exactly once, area `stl` first, correct folder and built artifact.

Reports and observed screenshots are adjacent to source. Combined-deploy browser verification and publication results are recorded in their separate JSON reports.

## Not performed / limitations

No physical print, fit trial, tape/glue adhesion, stability, friction, string-contact, fatigue, oscillation or timing test. Finite apex gap and discrete guide surface depart from an ideal Huygens tautochrone. Thread/tape external; glue recommended for gravity-seated upright. Rest-position preview only; external thread line is preview-only and not STL. No timing accuracy or isochronism claim. Strict convex flat-bottom import contract intentionally rejects unsupported concave/open meshes rather than substituting a hull or claiming repair.

## Publication verification

Root predeploy copied **457 apps, zero failures/skips**; root gh-pages deploy returned Published. GitHub Pages action [41946660865](https://github.com/xianghui/daily-app2/actions/runs/41946660865) completed successfully. Public gallery and app return HTTP 200. `public-smoke.cjs` passed against the live Pages URL: all 457 gallery entries, real production worker/WASM, PNG and binary-STL file-picker integrations, actual downloads matching preview hashes, changed geometry and independent manifold checks; no runtime errors. The complete 26-download suite also passed against the combined root deployment tree. Physical testing remains unperformed.
