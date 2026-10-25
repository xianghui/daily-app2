# Validation — Oloid Wander

All checks computational/browser only. **No physical print, rolling behavior, balance, wear, friction, force or fatigue test performed.**

- `npm run predeploy`: production bundle built, including local worker/WASM and fonts. Standard bundle-size and optional Node-module externalization notices only; worker is exercised in production, not just development.
- `npm test`: **68 parameter cases** (default, three presets and all 64 domain corners) and **25 imported-output cases**. Each real part and float32-combined separated print plate passes independent binary STL validation: complete byte length, finite/nondegenerate triangles, normalized winding-consistent normals, opposite-directed two-face edge incidence at 1e-5 mm welding, positive volume per connected component and expected mm bounds.
- Contact checks: actual kernel intersections at 51 representative Y/X poses for selected default/extreme cases; 27 poses for every imported-output/preset case. Roller rests on runway, deliberate 0.1 mm downward motion intersects its support, lifting clears it, and safe envelopes remain over the runway. No fitted/captive bearing. Import differences remain isolated within the palm well. This is **not** a no-slip rolling simulation or a prediction of physical feel.
- `browser-test.cjs`: actual production browser PNG/JPEG/ASCII/binary STL uploads and binary downloads. Changed pixel content, thresholds, relief mode/depth, crop/fit, scale/rotation/XY/Z settings affect exported bytes. Checks exact preview/download signatures and independently regenerates saved JSON in Node. Default/min/max and all imported outputs get mesh/contact checks.
- Malformed, truncated, open, nonmanifold, self-intersecting/concave/unsupported STL contracts, empty images, >2 MB files, oversized pixels, excessive triangles/dimensions, invalid number/transforms and out-of-safe-zone integration are rejected with recoverable errors and disabled export.
- `feature-test.cjs`: every preset, bounded variations, ergonomic silhouettes, text, icon, SVG ring, raised/engraved art, background inversion, drag/drop, real per-part/ZIP contents, up-axis, undo/redo, portable image/STL JSON round trips, local named designs, theme persistence, collapsible controls, focus, newest edit/stale-export protection.
- `hole-test.cjs`: tiny solid probes verify actual raised ring with unfilled hole and engraved ring with retained original floor, not just checkerboard visuals.
- `additional-test.cjs`: every parameter changes exported geometry; reduced motion, 374 px desktop left panel, phone preview-first stacking, named imported-image restoration across reload, missing image payload requests reattachment, inverted-Z import.
- `interaction-test.cjs`: both preview-pose controls move exact visible geometry without altering exports; runway see-through works; all six bundled SVG marks work; named imported-STL persistence; deliberately aborted production worker disables export, reload recovers.
- Touch-enabled 390 px and 320 px layouts: no horizontal overflow; actual CDP touch orbit and pinch change canvas images; PNG and STL uploads and real STL downloads on phone; exports reachable.
- Gallery scripts compiled with Node `new Function`; missing/empty scripts fail nonzero. One correct new `stl` entry at newest-first position; **158 earlier entries preserved** byte-for-byte. Browser renders/searches all 159 cards without runtime errors; STL Generators is first.

## Reproduction

Serve built `dist/` under `/daily-app2/20261026-3/` on localhost:5313; run the `*-test.cjs` scripts with Node. `browser-test.cjs` also accepts `TEST_BASE` and `TEST_REPORT` for a combined staging server. Reports (`*-validation.json`) and desktop/mobile/view screenshots are stored alongside sources. Only synthetic inputs are bundled.

A browser/Node mismatch in triangulation at the largest preset was diagnosed and resolved by quantizing procedural circle/dimple coordinates before hull/CSG. Export byte comparisons and geometry suites were rerun after the change. Blank output from dark-background removal of black-on-transparent art is intentionally rejected as an empty silhouette, not a generation failure.
