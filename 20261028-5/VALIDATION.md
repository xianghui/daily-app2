# Validation — Pitch & Perch

- Actual downloaded reference: binary parsing, SHA-256, welded edge-adjacency components, bounds, Z histogram, Y=100 rail measurement, three Z cross-sections; SVG/PNG mesh views inspected. Source defects recorded; no source STL bundled.
- `npm run predeploy`: production Vite build passed; locally bundled worker/WASM/fonts. `npm test`: 12 parameter cases + 30 import cases, each testing connected card and five part exports, all three indexed assembly poses, sequential insertion/withdrawal and tab removal. See `geometry-validation.json`.
- Real production-browser file pickers/downloads: PNG/JPEG + ASCII/binary STL; compare import vs default, pixel/threshold/depth/scale/rotation/placement changes; exact UI mesh fingerprint/download/JSON reconstruction equality. Final outputs independently parsed for finite nondegenerate triangles, normal agreement, positive per-component volume, 1e-5 mm welded closed edges and mm dimensions.
- Malformed/truncated/open/nonmanifold/concave/excessive/empty/dimension/transform errors block export and recover; unit confirmation required. Replace/remove/reset, protected medallion, crop/background and asynchronous stale-import guards tested.
- All presets and silhouettes, bounded variations, text, six icons, SVG ring holes, raised/engraved, background inversion; final solid ring probes, not only image previews.
- JSON/named-design asset round trips, missing payload guidance, undo/redo, ZIP with six separately checked STLs and assembly notes; per-part download buttons exercised.
- Desktop 374 px left rail/right viewer; phone 320/390 px, preview-first/no overflow, real touch orbit/pinch, reachable exports and real imports. Dark theme persistence, focus, reduced motion, collapsible controls, all view modes. Three indexed rake screenshots; invalid preview index recovers without changing printable geometry.
- Worker loading failure blocks export; reload recovers. Invalid current parameters cannot export a last-good result. Production browser tests report no runtime errors or remote requests during app use.
- Combined gallery: all inline scripts compiled, 216 previous entries preserved, new entry exactly once and newest first in STL category. Root build copied 217 apps with zero failures/skips. Combined browser validation runs through actual `/daily-app2/20261028-5/` worker/WASM paths.

Reports are reproducible with commands in README; synthetic fixtures only. **No physical print, friction, force, fatigue, load, stability or external slicer tests were performed.** Clearance calculations and closed mesh checks do not establish physical fit or durability.

Public GitHub Pages smoke passed: HTTP 200, real worker/WASM load, PNG file-picker import and manifold STL download matching the current preview fingerprint; public gallery renders 217 cards with Pitch & Perch first and no runtime errors. See `public-validation.json`.
