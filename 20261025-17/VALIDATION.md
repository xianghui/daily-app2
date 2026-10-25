# Contrary Calm — validation

Date: 2026-10-25. This records computational/browser checks, **not a physical print test**.

## Geometry

`npm test` passed after correcting the test probe masks to exclude palm geometry from the moving lever envelope. 132 parameter cases (defaults, three presets and all 128 min/max corners) and 35 imported-output cases passed.

- Binary STL independently parsed: nonempty triangles, finite coordinates, nondegenerate faces, unit normals aligned to winding, positive volume per connected component.
- Equal vertices welded at 0.00001 mm; every edge has exactly two incident faces with opposite directions. One genus-zero connected solid per export.
- Export dimensions agree with independent analytic X/Y extents and model/UI dimensions; print bed Z=0.
- Four empty-channel CSG probes and two minimum hinge-section probes; added/subtracted import geometry confined to palm radius 7 mm.
- Eleven rigid-lever envelope positions over each selected trial: no opposing web/pad collisions or intersections with the fixed palm/spine. Nominal neck strain remains ≤0.4% and near pads remain >15 mm apart. These are rigid-envelope/ideal-geometry checks, not nonlinear flexural or force simulation.
- PNG-like threshold and grayscale fields, engraved image fields, and both STL fixtures pass the same topology and mechanical checks at representative bounds.
- Direct CSG samples on browser-rasterized SVG ring geometry verify an unraised center hole and raised ring; engraving leaves the center floor intact and cuts the dark ring. Engraving datum was corrected so white image samples do not cut the floor.

## Browser

`node browser-test.cjs`: 23 actual STL downloads, validated against portable design snapshots and current preview fingerprints. Geometry changes verified for PNG vs JPEG, pixel content, threshold, depth, crop, grayscale, footprint, STL shape, rotation, height and offsets. Remove/reset returns exactly to the original fingerprint. Explicit STL unit confirmation gates export.

Ten real file-picker rejection fixtures: malformed SVG, truncated STL, open STL, duplicate-face/nonmanifold STL, oversized file, false PNG, excessive image dimensions, >1,500 triangles, bad STL dimensions and a concave STL. Empty white silhouettes and invalid numeric/placement values also block exports and recover after reset/replacement.

`node feature-test.cjs`: all presets, bounded variations, palm shapes, text and searchable icons, SVG/background/engraving, portable image and STL assets, JSON, named designs across reload, undo/redo, per-part and ZIP exports, view modes, persisted dark theme, preview-only colour, drag/drop, Y-up import, collapsible sections, visible keyboard focus and latest-worker-edit gating.

`node resilience-test.cjs`: worker-load failure and malformed JSON disable export; reload/reset recover.

Phone tests at 390 and 320 px: no horizontal overflow, real touch orbit and pinch zoom change the rendered canvas, file picker PNG/STL workflows and actual phone downloads pass, export remains reachable. Desktop and phone screenshots inspected: left rail/right viewer on desktop, preview-first stacked controls on phones, tactile selection states and clear exports. Preview is explicitly the printable rest geometry.

## Production and gallery

`npm run predeploy` passes. The compiled production app passed the full 23-download / 10-malformed-fixture browser suite, including phone orbit/pinch and imports, with no runtime errors or remote dependencies. Gallery validation compiles every inline script with `new Function`, requires at least one script, verifies exactly one new first-position STL entry and preserves all 144 previous entries (145 total). Browser gallery renders all cards, STL Generators first, search and correct app path, without runtime errors.

Root `npm run predeploy` completed with Built: 145, Failed: 0, Skipped: 0; every gallery folder has `deploy/<folder>/index.html`. Root `npm run deploy` reported Published. The public gallery was checked after Pages propagation: all 145 cards and the new first entry render correctly. The public app smoke check exercises bundled WASM, PNG/STL integration and validated STL downloads, plus desktop rail and 320 px phone stacking; results are recorded in live-validation.json. No physical print, measured force, fatigue life, nonlinear FEA or universal fit claim is made.
