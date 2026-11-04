# Validation — Cantor & Canopy

Computational checks; no physical print, force, stability or durability test was performed.

- `npm run predeploy`: production build passed; local worker/WASM/fonts bundled.
- `npm test`: 57 valid geometry cases passed. Default, all three presets, every field endpoint, combined extrema, silhouettes, supported recursion corners and image/STL-derived geometry. Invalid high-recursion / narrow-gap combinations rejected.
- Every part/card/clean-plate STL: exact binary length, finite coordinates, nonzero triangles, unit normals matching outward winding, positive volume per connected component, opposite-directed two-face welded edges (1e-5 mm), expected bounds/component counts.
- Kit checks per case: full carrier bounds; one connected card; 12 simulated tab cuts → carrier plus exactly 3 unchanged released pieces; no detached runner debris; no clean-plate overlap; supported bed footprints; socket openings in card and clean plinth; intact socket floor and ≥4 mm engraving backing; no assembled intersections; 41 sampled cross-lap insertion positions and 41 combined-seat insertion positions.
- `browser-test.cjs`: real production browser file pickers/downloads for PNG/JPEG/ASCII STL/binary STL; changes to pixels, threshold, depth, crop, scale, rotation and placement change actual exports; preview hash equals downloaded bytes and portable JSON Node regeneration. Per-part downloads independently validated. Replace/remove/reset reproduce expected geometry. Truncated/open/nonmanifold/concave/oversized/bad-dimension inputs, empty images and invalid transforms block export and recover. Phone file imports/downloads, CDP touch orbit and pinch passed. No runtime errors or remote generation/file requests.
- `feature-test.cjs`: all presets and ergonomic silhouettes, text/SVG personalization and background inversion, exact mesh/assembly checks, portable PNG/JPEG/ASCII/binary payload round trips, named design persistence across reload, undo/redo, actual ZIP extraction and validation, every per-part button, assembled/exploded/flat/clean/isolated views, theme persistence, swatch effects without false STL colour, drag/drop, Y-up import, collapsible sections, keyboard focus, latest-worker-state and invalid-export gates passed. Focus test uses actual keyboard Tab to activate :focus-visible.
- `resilience-test.cjs`: intentionally aborted production worker blocks export; reload recovers. Six distinct bundled icon geometries pass live preflight.
- `portable-errors-test.cjs`: missing image payload asks for reattachment; invalid transforms, wrong app and invalid dimensions rejected; reset recovers.
- `stale-import-test.cjs`: a deliberately delayed first image normalization cannot overwrite a newer selection.
- `hole-test.cjs`: probes actual final Boolean solid; SVG ring centre preserves backing while dark ring band is engraved.
- `mobile-layout.cjs`: unscaled 320/390/480 px viewport, every editor tab and expanded instructions, real reachable JSON downloads, no horizontal overflow, preview before controls. Desktop 374 px left panel/right viewer verified.

Machine-readable JSON reports and screenshots accompany the scripts. Reference evidence comes from a freshly downloaded and parsed STL, with SHA-256, dimensions/components, measured Z planes and three actual mesh cross-sections; raw source is not redistributed.

Gallery: 1 inline script compiled; exactly one new STL entry, newest first; all 454 prior entries unchanged. Combined gallery browser renders all 455 entries and follows the new link to valid worker geometry. Root `npm run predeploy` passed: 455 apps staged, zero failures/skips; root/app staged HTML match exact built bytes. Reports: gallery-validation.json and combined-gallery-validation.json. Public deploy is verified separately after the root command.

Root `npm run deploy` completed successfully (`Published`, exit 0); it reran root predeploy successfully before publishing the combined deploy directory. Public GitHub Pages availability may follow asynchronously.
