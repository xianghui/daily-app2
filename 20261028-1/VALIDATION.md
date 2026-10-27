# Observed validation — 2026-10-28

- Actual public reference STL downloaded, parsed, hashed, components/bounds/Z-sections measured; source coplanar artifacts documented, no raw reference redistributed.
- `npm run predeploy`: passed (production worker/WASM and local dependencies).
- `npm test`: 12 default/preset/extreme/variation models + 30 image/STL-derived models; each connected card and all four parts independently parsed. Finite triangles, positive component volume, consistent normal/winding, 1e-5 mm welded two-face edges, expected mm bounds and bed-flatness passed.
- Assembly intersections: six solid pairs; wing and tail complete insertion sampled at 17 positions; fuselage stand seating and restraint probes passed. Sixteen virtual tab cuts produce carrier + four distinct printable parts. Card includes each original part with no loose-part overlaps.
- Production `browser-test.cjs`: real PNG/JPEG/ASCII/binary file-picker imports, actual downloaded STL parsed and matched to preview fingerprint and portable-JSON regeneration. Threshold/depth/crop/scale/rotation/placement change geometry; reset/remove reproduce default. Invalid/open/nonmanifold/concave/truncated/oversize/empty files and transforms block export recoverably. Every per-part STL passed.
- Phone 320/390 px: preview first, no overflow, reachable export, real image/STL uploads; CDP touch orbit and pinch visibly change rendered canvas. Desktop rail exactly 374 px, viewer right. Reduced motion, visible keyboard focus, collapsible sections, saved dark theme passed. Screenshots inspected.
- `feature-test.cjs`: every preset, bounded variations, all silhouettes, text, SVG ring, engraving, dark-background JPEG, PNG/JPEG/ASCII/binary portable roundtrips, named local persistence, undo/redo, ZIP contents and all per-part downloads passed; Y-up source import and stale-build gating passed.
- Actual boolean-solid probes preserve raised and engraved ring holes. All six bundled icons independently change geometry. Worker script intentionally aborted: disabled export, reload recovery passed. Missing payload / malformed JSON / stale asynchronous image normalization reject or recover correctly.
- Gallery: one inline script compiled with new Function; all 212 previous entries retained, exactly one new STL entry, newest first. Browser renders all 213 cards and STL category first, search recovery and no runtime errors.
- Root predeploy: 213 built, zero failed/skipped; root index and app under deploy/ verified. Combined-deploy browser report and public smoke results recorded separately when completed.

No physical print, fit, strength, adhesive, durability or flight testing performed. The slot joints are removable slip fits, not captive. The aircraft is a display model. All assembly geometry checks are computational, not proof of printed performance.

## Publication

Root `npm run deploy` completed with Published. GitHub Pages build completed successfully; initial 404 during its build resolved without code changes. Public browser verified HTTP 200, worker/WASM loading, actual PNG file-picker import, downloaded closed-manifold STL matching preview signature, and all 213 gallery cards with newest entry. `public-validation.json` records results. Full combined-deploy import/mobile test also passed in `combined-browser-validation.json`.
