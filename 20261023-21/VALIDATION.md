# Comb Current — verification record

- Individual `npm run predeploy`: passed.
- `npm test`: 78 parameter combinations and 24 image/STL variants passed independent serialized-mesh and mechanism checks.
- All final solids: finite nondegenerate triangles, positive volume, outward winding, closed welded two-face edge incidence, one connected component, measured bounds.
- Mechanism: supported minimum arm thickness, conservative finger clearance envelopes, solid roots/rails/fingers, open-gap probes and imported-solid isolation passed. No moving joint is fused; the single body flexes.
- Development and production-bundle browser suites: each passed 23 real downloaded/exported geometry cases and 10 invalid-file rejection cases; PNG/JPEG plus ASCII/binary STL pickers, changed import settings, replacement/removal/reset, empty images, excessive pixels/triangles/bytes, unsafe transforms, nonmanifold/open/concave/truncated meshes, measured dimensions and exact preview/export signatures.
- Extra browser suite: all three presets, four random variations, undo/redo, portable JSON round trips for all four fixture formats, drag/drop and colour-neutral geometry passed; imported outputs also underwent mechanism/CSG checks.
- 320/390 px phones: touch orbit/pinch, file imports/downloads, no horizontal overflow, tab access, collapse/expand and fixed reachable export passed.
- No runtime errors or remote requests in the app browser suite.
- Gallery: inline scripts compiled, new entry exactly once and newest, all 100 previous entries preserved; 101 entries render, STL category first and search functional.
- Root predeploy: 101 apps, zero failed/skipped. Root deploy is the publishing flow.
- `npm audit --omit=dev`: zero reported vulnerabilities. Legacy publishing dependency deprecations remain.

These are digital geometry, bounded mechanical-envelope and browser checks. **No physical print, force, safe-stroke, fatigue, return or durability test has been performed.** TPU 95A, small starting travel and a full-size calibration preset are explicitly documented. Arbitrary imported meshes are not repaired: the STL contract deliberately accepts only verified convex flat-bottom solids.

See `geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json` and the screenshots. Public smoke results are recorded separately in `public-validation.json` after publishing.
