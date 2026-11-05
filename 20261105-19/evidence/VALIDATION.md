# Validation evidence

Computational and browser checks only; no physical print/assembly/friction test.

- `npm test`: exported float32 binary STL, closed/opposite-wound edges at 0.00001 mm welding tolerance, positive volume per intended component, dimensions, every clean part and translated clean plate.
- Full geometric mechanism checks: all twenty snips give carrier plus five released components with original parts unharmed; no flat overlaps; bed-footprint support; complete guide bounds; four unobstructed sockets and straight lowering path; 19 complete-stroke positions including endpoints per automated model case; separate 3 mm pin / both slots / cap checks; central pivot hardware keepout; retaining washer supporting lands; axial spacer.
- `node browser-test.cjs`: production-prefix real file pickers, PNG/JPEG/ASCII/binary STL exports compared against default, image threshold/depth/crop/grayscale, STL scale/rotate/place/reset, source/preview fingerprint and JSON reconstruction equality, malformed/excessive/nonmanifold/concave input recovery, phone real imports/downloads and CDP touch orbit/pinch.
- `node feature-test.cjs`: all presets/edge profiles, text, icon and SVG Boolean output; all four input formats round-trip bounded payloads; undo/redo; named persistence; actual ZIP unpacked and every STL checked; per-part downloads; view modes; persisted dark theme; drag/drop; Y-up import; focus/disclosures; rapid/stale/invalid edit blocking.
- `node mobile-test.cjs`: 320/390 px no-overflow for every editor tab and expanded guide, preview-first, export/JSON reachable, reduced-motion and 374 px desktop left/right layout; follower-pose screenshot changes without export changes.
- `node resilience-test.cjs`: blocked production worker requests disable export; reload recovers; all six marks produce different real meshes.
- `node portable-errors-test.cjs`: missing payload, invalid transform, wrong app and invalid dimensions block export, reset recovers.
- `node stale-import-test.cjs`: delayed image decoding cannot replace newer imported source.
- `node hole-test.cjs`: actual final solid probes prove SVG ring center backing remains and dark ring band is Boolean-engraved.
- Screenshots include studio initial, all views, assembled/exploded, dark, two phone widths and ghost.

Reports are JSON beside the app README. Tests may use `/tmp` for downloaded synthetic STL fixtures; personal source assets were not stored. Libraries and WASM are locally bundled. Source measurements come from actual parsed STL in `reference-analysis.json`; independent source sections are in this folder. A kernel-valid source is not assumed: source anomalies are recorded explicitly, with original reconstruction outputs validated separately.
