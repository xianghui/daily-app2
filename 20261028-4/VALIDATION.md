# Validation — Tusk & Tenon

Performed on the production Vite bundle under `/daily-app2/20261028-4/` using local Playwright Chromium, not only on a development server.

- Source STL freshly downloaded, SHA-256 matched, all 30,616 facets parsed; connected-component/edge audit and three cross-sections generated and visually inspected. Source defects explicitly recorded. Reference trees not changed and raw third-party STL not bundled.
- `npm test`: **12 parameter cases + 30 import/parameter cases**. Every card and five separate parts checked for finite/nondegenerate triangles, exact binary length, unit normals, outward winding, 1e-5 mm welded-edge incidence, positive per-component volume and mm bounds. 10 assembled part pairs checked for unwanted intersection. Foot seating sampled along X and opposed key insertion/withdrawal sampled along Y. Shoulder/key/taper/mortise restraint probes pass. Every card contains its parts without flat overlaps. Twenty simulated cuts yield carrier plus five parts. All-low, all-high, presets and mixed shape/fit sizes pass.
- `browser-test.cjs`: real picker uploads of PNG, JPEG, ASCII and binary STL, actual downloaded STL parsed and compared to current preview byte signature and Node regeneration of the exact browser JSON state; threshold/depth/content/scale/rotation/placement changes measurable. Replace/remove/reset reproducible. Invalid/truncated/open/nonmanifold/concave/oversized files, empty silhouettes, invalid transforms/dimensions block exports and recover. Phone 320/390 px no overflow and reachable downloads; actual touch orbit/pinch screenshot differences. No remote requests or runtime errors.
- `feature-test.cjs`: all presets, bounded variations, three feet, text/icons/SVG, raised/engraved/inverted images, undo/redo, portable asset JSON round trips, persistent named designs, all actual per-part STLs and ZIP entries, isolated/card/assembly views, saved dark theme, colour geometry neutrality, drag-drop, up-axis conversion, collapsed sections and keyboard focus. Each downloaded model gets independent mesh/mechanical checks.
- `hole-test.cjs`: final-solid tiny-volume probes verify ring holes remain unraised in raised relief and retain their floors in engraving.
- `portable-errors-test.cjs`: missing image payload, wrong-app JSON, bad transform and dimensions rejected with usable reset.
- `resilience-test.cjs`: aborted production worker load blocks export, reload recovers, all six original SVG marks change actual geometry.
- `stale-import-test.cjs`: delayed first bitmap cannot overwrite a later user file selection.
- `studio-layout-test.cjs`: measured 374 px desktop left rail/right viewer; 320 px preview-first layout/no overflow; reduced motion, isolated parts and geometry-neutral key withdrawal pose.
- Root gallery script compilation, exact single newest STL entry, unchanged earlier entries and browser card/search rendering checked separately before publication.

Reports are JSON files next to these reproducible scripts; screenshots include desktop, phone, dark, card, assembled/ghost/exploded and isolated views. `README.md` records method, limits, ranges, provenance and manufacturing guidance.

These are **computational mesh/fit/path and browser tests only**. No physical print, slicer check, assembly force, friction, stability, strength or fatigue test was performed. The taper is a geometric removable stop; printer-specific contact/holding is not claimed verified.

Publication verified: root build included all 216 apps with zero failures/skips. GitHub Pages run 40566510332 completed successfully. The public app returned HTTP 200, loaded worker/WASM, accepted an actual PNG file, and downloaded an independently checked STL matching its current preview signature. Public gallery rendered all 216 cards with Tusk & Tenon first and no runtime errors. See `public-validation.json`.
