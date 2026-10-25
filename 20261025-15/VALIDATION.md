# Verification — 2026-10-25

All completed against this app, not inherited reports:

- App `npm run predeploy`: passed (Vite, local worker/WASM/fonts).
- `npm test`: **132 parameter cases + 35 imported-output cases**; defaults, 3 presets, all 128 range corners; independent exported STL checks, finite/normal/volume/edge-winding checks, two intended windows, independent dimensions. Core-window and rib-section solid probes plus ideal waist-widening sweep and import-isolation checks passed.
- `node browser-test.cjs`: passed actual PNG/JPEG, ASCII/binary STL picker imports/downloads; altered pixels/threshold/depth/crop/scale/rotation/placement affect STL; exact preview fingerprints; independent downloaded-mesh analysis; replace/remove/reset; malformed, open, nonmanifold, concave, excessive, empty and invalid dimension/transform rejection; 320/390 px phones, touch orbit, pinch and exports; zero page errors or external requests.
- `node feature-test.cjs`: passed all presets and variations, round/hex/oval, text, searched icon, SVG ring, engraving/background handling, portable image and mesh JSON round trips, undo/redo, named storage persistence, ZIP/per-part contents, view neutrality, theme persistence, drop, Y-up import, collapsible sections, focus, stale/invalid gating.
- `node resilience-test.cjs`: worker-load error blocks export, reload recovers, malformed JSON blocks export and reset recovers.
- `node production-test.cjs`: production bundle/WASM, local sample and independently parsed actual exported STL passed; no runtime errors or failed requests.
- `node gallery-test.cjs`: all inline scripts compiled with `new Function`, new entry exactly once/newest/STL, all 142 previous entries preserved (143 total), category order/search/browser rendering correct.
- Desktop/mobile/dark screenshots visually inspected. Left-rail/right-viewer desktop; preview-first stacked phone layout. No horizontal overflow at tested widths.
- Root `npm run predeploy`: 143 built/copied, zero failed or skipped. Every gallery destination and new bundle checked in `deploy/`; root HTML matches gallery.

Detailed evidence is in geometry-, browser-, feature-, resilience-, production- and gallery-validation JSON. Browser-downloaded binaries were checked locally in /tmp, not committed as personal files. Samples are synthetic, bundled project fixtures.

**Limitations:** no physical printing, fatigue test, force prediction or nonlinear deformation simulation. Idealized tensile knee widening and conservative estimates are not measured TPU behavior. Pull-trial control is analytical guidance, not a physical stop. STL import intentionally rejects unsupported concavities instead of changing them. Image holes are preserved as unraised regions over a solid backing, not cut through the palm.

## Public deployment

Root `npm run deploy` returned `Published`. After GitHub Pages propagation, both public-browser checks passed: gallery retained all 143 entries with the new STL studio first, and the app loaded its bundled WASM worker, imported a sample and downloaded an independently validated STL matching its preview fingerprint. The first probes reached the previous cached gallery/404 during propagation; retries passed without code changes. Evidence: `live-gallery-validation.json` and `live-validation.json`.
