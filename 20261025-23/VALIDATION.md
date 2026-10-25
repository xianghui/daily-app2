# Hook & Hold validation — 2026-10-25

## Passed computational checks

- `npm test`: 132 default/preset/parameter-extreme models and 35 image/STL-derived outputs. Binary STL byte lengths, finite coordinates, normal agreement, nondegenerate triangles, 1e-5 mm welded two-face edge incidence, opposite edge directions and independent connected-component positive volumes. Every part and print plate checked. Analytic millimeter X/Y bounds agree.
- New mechanism-specific checks: rigid hook envelopes sampled at 43 poses across lift, inward squeeze and lowering, projected 2 mm hook overlap, open passage point-volume probes, arm-spacing bounds and conservative lateral/lift strain indicators. No unintended hook-tip intersection in the sampled hand-guided path. Imports cannot change geometry outside the palm safe zone (independent CSG difference probes).
- Production `npm run predeploy` passed; browser tested emitted JS worker, WASM, fonts and samples under the real `/daily-app2/20261025-23/` prefix, not only Vite development mode.
- `browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file-picker imports; actual downloads parsed independently and fingerprinted against current preview and JSON-regenerated model. Changed source pixels, threshold, depth, fit/crop, image scale and STL size/height/rotation/placement alter final STL. Remove/reset restore original byte signature. Minimum/maximum controls tested. Invalid/truncated/open/nonmanifold/concave/oversized/empty input and bad transforms disable export with recoverable feedback. 320/390 px phone no-overflow checks, reachable exports, real phone imports/downloads, touch orbit and pinch screenshot differences; no browser runtime errors or remote requests.
- `feature-test.cjs`: all presets, representative bounded variations and palm shapes validated; text, icon and SVG-derived geometry; inverted background; portable import JSON round trips, persistent named designs, undo/redo, true ZIP contents, individual part STL, saved dark theme, colour-only geometry neutrality, source orientation, drag/drop, section collapse, visible keyboard focus and latest-edit gating.
- `hole-test.cjs`: actual final CSG probe confirms SVG ring center remains unraised / unengraved while its dark ring changes solid material. This is sampled relief over a backing, not exact vector tracing.
- `resilience-test.cjs`: abort production worker loading, require blocked export, then reload recovery; malformed JSON error/reset recovery.
- Visual inspection of desktop and full-page phone screenshots confirms left rail / right stage and phone preview-first layouts with reachable export and import tools.
- Gallery inline scripts compiled using `new Function`; exactly one new STL entry, all 150 previous entries preserved, 151 rendered links, search and STL-first grouping tested without runtime errors.

Machine-readable reports: geometry-validation.json, browser-validation.json, feature-validation.json, hole-validation.json, resilience-validation.json, gallery-validation.json. Reproducible scripts are alongside them. Screenshots show tested layouts, views and theme.

## Not performed

No physical print, holding-force, fatigue, creep or nonlinear flexible-beam simulation. Geometry checks do not prove a functional printed latch. Rigid tip-envelope passage calculations do not model finger ergonomics or full deformed beam equilibrium. The UI and README disclose these limits. Calibrate the Pocket Hook in TPU, never force the hooks through each other in-plane, and lift to latch/release. No permanent captive retention is claimed.
