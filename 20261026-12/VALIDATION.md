# Cone Orbit verification

- Individual production build passed (`npm run predeploy`); worker/WASM/fonts are bundled locally.
- 68 default/preset/parameter-corner cases and 30 imported-output cases passed independent binary STL and mechanical geometry checks. Each part and translated print plate checked independently: finite vertices, nonzero faces, unit normals, 1e-5 mm welded edge incidence, opposite edge winding, positive component volume, expected dimensions and separation.
- CSG sampled contact poses / straight-up removal, cone virtual-apex equations, runway margin and isolated import keep-out passed. No captive retention is claimed: the roller is intentionally loose.
- Real production-browser PNG/JPEG/ASCII/binary uploads, changed thresholds/depth/pixels and mesh scale/rotation/placement changed downloaded geometry. Download hash matched the final preview mesh and portable JSON rebuilt in Node. Reset restored default signature.
- Invalid/truncated/open/nonmanifold/concave/excessive/empty inputs blocked export with recoverable errors; latest-request and worker-load-failure tests passed.
- Presets/variations/shapes/text/six bundled icons, SVG raised/engraved hole probes, undo/redo, local named designs, imported JSON round trips, missing payload reattachment messages, theme, collapsible sections, keyboard focus, reduced motion and actual per-part/ZIP contents passed.
- 320/390 px preview-first phone layout, no horizontal overflow, reachable exports and uploads, touch orbit / pinch changes verified. Desktop 374 px left rail and right viewer visually inspected; screenshots included.
- Root gallery scripts compiled; all 167 previous entries preserved, new STL entry exactly once. Root predeploy staged 168 apps, zero failures/skips. All 43 new-app production files matched staged assets exactly. Full real import/download/mesh/mobile suite also passed against the combined deploy/ server; gallery browser rendered all 168 cards without runtime errors.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `additional-validation.json`, `interaction-validation.json`, `resilience-validation.json`, `stale-import-validation.json`, `hole-validation.json`, `gallery-validation.json` and staging/browser reports.

These are computational checks, not physical tests. No physical print, rolling-friction, force, fatigue, durability or wear testing was performed. FDM performance must be calibrated; the flat runway does not force a no-slip orbit.
