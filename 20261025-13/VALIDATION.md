# Validation — Facet Cadence, 2026-10-25

- `npm run predeploy`: production compilation passed.
- `npm test`: **132** default/preset/parameter-corner cases, **35** image/verified-STL-derived cases. Closed manifold edge incidence, coherent orientation, nondegenerate finite triangles, positive individual component volumes, bed-flat orientation and millimeter bounds verified on actual binary exports.
- Real solid intersections at **13 assembled rocking positions** for representative extremes and all imported cases; protected-import difference regions and separated print plate checked. Analytical hexagonal center-of-gravity rise and axial gap are reported in the UI.
- `node browser-test.cjs`: **22 actual downloaded STL outputs**, PNG/JPEG image imports and both ASCII/binary STL file-picker imports, content/threshold/depth/scale/rotation/placement export differences, reset/remove recovery, invalid/truncated/nonmanifold/concave/excessive inputs. Every export matched the exact browser preview fingerprint and re-generated snapshot geometry.
- Phone widths 390 px and 320 px, real touch orbit and pinch, reachable exports and image/STL downloads: passed, no horizontal overflow.
- `node feature-test.cjs`: every preset, bounded variations, ergonomic shapes, text, searchable icon, SVG holes, engraving, background inversion, undo/redo, named designs across reload, JSON with actual portable image and mesh payloads, real ZIP and per-part exports, view modes, saved dark theme, colour-neutral STL, drag/drop, Y-up STL, keyboard focus, collapsible sections and rapid-edit stale-result blocking passed.
- `node resilience-test.cjs`: blocked worker loading and malformed JSON both disable export; reload/reset recover.
- Zero browser page errors or external file-upload/API/CDN requests in import/export testing.

Machine-readable reports and desktop, dark, phone and view screenshots are included. Production-bundle and live-site/gallery checks are recorded separately after publication.

No physical print, material friction, wear, automatic settling, child safety or durability testing was performed. The open runway is intentionally non-captive and permits lift-out. Preview poses include an explanatory 0.1 mm hover, not a printed spacer.

## Publication

Root `npm run predeploy` and `npm run deploy` passed: **141 apps built/copied, zero failed/skipped**. Verified deployment contains root index and every gallery folder. GitHub Pages run 40157000197 completed successfully. After propagation, live browser tests passed the public app (worker/WASM, local image fixture and real manifold STL download matching preview) and gallery (141 cards, all 140 previous entries retained, unique new STL entry, STL category first, no runtime errors). Reports: `live-validation.json` and `live-gallery-validation.json`.
