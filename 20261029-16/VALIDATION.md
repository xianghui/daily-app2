# Thread & Span — actual validation

- Fresh public reference STL downloaded, SHA-256 matched, parsed and section image inspected. Source defects documented; raw mesh not redistributed.
- `npm run predeploy`: PASS. Bundled production Worker, WASM, fonts and dependencies load under `/daily-app2/20261029-16/`.
- `npm test`: PASS — 18 built-in and 35 imported-output cases, all card/part exports independently checked. Unsupported card layouts blocked.
- `node extra-validation.mjs`: PASS — 16 additional mixed configurations, actual ring-hole/backing probes for raised and engraved relief, concavity and insufficient-card rejection.
- `node browser-validation.mjs`: PASS — 39 actual downloaded-STL cases, 16 workflow checks, zero page errors. Every download compared to UI fingerprint and regenerated portable JSON state, then independently mesh/assembly checked.
- Final geometry includes offset deck eyes and crossbar-clearing cord polylines. Sweep checks use .8 mm diameter cord envelopes; no knots, strength or tension simulation claimed.
- Real PNG/JPEG/SVG, ASCII/binary STL file-picker workflows, content/threshold/depth/crop/scale/rotation/placement differences; source restoration, invalid file recovery, all per-part downloads and ZIP members checked.
- Desktop 374 px left control rail; 320/390 px phones preview-first, no overflow, reachable import/export, real touch orbit and pinch. Theme persistence, collapse, focus and worker failure/reload tested.
- `node production-preflight.mjs`: PASS — 1 inline gallery scripts compile; 256 previous entries retained, 257 total. Unique new entry, STL category first, all combined deployment folders present; no gallery runtime errors.
- Root `npm run predeploy`: PASS — 257 Vite apps copied, 0 failed, 0 skipped, existing legacy entries retained.

Mesh validation: finite coordinates, exact binary byte lengths, nondegenerate triangles, expected mm dimensions, normalized normals consistent with winding, positive enclosed volume separately per component, two opposite-wound incident faces per edge after 1e-5 mm vertex welding. Genuine CSG unions/differences; no convex-hull substitution.

Assembly validation: five separate parts, four open mortises with supported shoulders/.15 mm recessed tips, tower insertion, horizontal deck insertion with imported geometry, eight open cord eyes, swept cord-route clearance, no unintended assembly/card overlaps, twenty accessible snips, five parts plus connected waste carrier afterward.

**Not tested physically:** printing, cord knots/tension/strength, adhesion, standing stability, load capacity, fatigue and durability. Four user-supplied soft cords and adhesive are mandatory; miniature is not load-bearing.

## Publication

Root `npm run deploy`: Published. GitHub Pages build `6e819f19b881fc3f13f7312650d90dd79901f8f9` reports built. `node live-smoke.mjs`: PASS against the public HTTPS URL — current default fingerprint matches real downloaded STL; PNG and binary STL imports change geometry; 257 gallery entries and new first entry verified, zero page errors. Initial 404s were Pages build propagation; no code/deployment failure remained.
