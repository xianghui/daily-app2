# Crosslap Launch validation

Computational checks only. **No physical print, fit, strength or stability test performed.**

## Passed before publication

- Downloaded actual public White Cat STL; parsed 30,616 triangles, SHA-256, mm bounds, welded components, source defects, Z-level measurements and actual section images. Inspected source README/SCAD/LICENSE and Keycap Studio interaction/worker/import/export implementation. Source remains unmodified and unbundled.
- `npm test`: 20 parameter cases (defaults, three presets, 16 representative corners) and 30 imported-output cases. Card and each of three loose parts checked independently for finite/nondegenerate faces, winding/normals, positive per-component volume, closed-manifold welded edges, Euler characteristic and mm dimensions.
- Real Boolean collision checks along half-lap panel slide and crossed-tenon insertion; true/oversize socket gauges; disjoint flat parts; personalization preserved exactly in card. Twelve modeled tab cuts leave exactly three parts plus one frame.
- `node browser-test.cjs`: actual file-picker PNG/JPEG/ASCII/binary STL and downloads; threshold/depth/pixel/shape/scale/rotation/placement differences survive export; source/no-source comparisons; UI and saved-state fingerprints exactly match regenerated/downloaded bytes. Invalid/truncated/open/nonmanifold/concave/excessive files, empty masks and invalid transforms block export and recover.
- Touch 390 px and 320 px: no overflow; touch orbit and pinch visibly change canvas; imports and downloads reachable; preview-first layout.
- `node feature-test.cjs`: all presets, bounded variations, silhouettes, text/SVG/icons, raised/engraved relief, import orientation, source round trips, named storage persistence, undo/redo, selected/view states, saved dark mode, visible preview colours, collapsible sections, keyboard focus, current-worker state, per-part buttons and ZIP contents.
- `node hole-test.cjs`: actual final-solid probes verify raised/engraved SVG ring hole preservation.
- `node resilience-test.cjs`: production worker blocked intentionally, export disabled; reload recovers; six original marks all generate distinct geometry.
- `node stale-import-test.cjs`: delayed old image normalization cannot replace newer selected source.
- `node portable-errors-test.cjs`: missing image payload, malformed transformations, wrong application and invalid dimensions produce actionable recoverable errors.
- Individual `npm run predeploy`: passes. Current Vite `latest` scaffolder lacked its `template-react` directory; retried successfully with create-vite 8.2.0, then installed dependencies normally. No source or dependency tree was copied wholesale from Keycap Studio.
- Root gallery inline scripts compiled with `new Function`; exactly one new `stl` entry; all 202 previous records preserved byte-for-record. Browser gallery renders/searches all 203 cards without runtime errors.
- Root `npm run predeploy`: **203 built, 0 failed, 0 skipped**. Every gallery app is present in combined staging; new app staging files byte-match its production dist.

Reproducible scripts, JSON reports and screenshots accompany the app. `staged-browser-validation.json` and `live-validation.json`, when present, record additional checks against the combined staging and published Pages URL. Geometry exported from assembled/exploded views stays correctly bed-flat. STL colours are preview-only.

## Combined staging and publication

The complete browser import/download/mobile suite also passed against the ROOT staged site (`staged-browser-validation.json`). Root Pages deployment reported Published. The initial public smoke run encountered a transient 404 while the GitHub Pages build was still in progress; HTTP became 200 and the smoke check was retried after propagation. No application change was required for that delay.

Published URL verified successfully: worker/WASM/fonts load, local PNG and binary-STL samples generate different actual manifold exports with exact UI/download fingerprints, and the newest gallery card renders among 203 preserved entries. See `live-validation.json`.
